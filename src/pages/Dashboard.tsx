import { useEffect, useRef, useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import { QrCode, Plus, LogOut, Download, Trash2, Loader2, Pencil, Check, Copy } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { signOut } from '../lib/auth';
import { fetchQRs, deleteQR, renameQR, type QRCode as QRCodeType } from '../lib/qr';

const styleColors: Record<string, string> = {
  classic: '#0f172a',
  brand:   '#0d9488',
  bold:    '#dc2626',
};

function QRCard({
  qr,
  onDelete,
  onRename,
}: {
  qr: QRCodeType;
  onDelete: (id: string) => void;
  onRename: (id: string, name: string) => void;
}) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [deleting, setDeleting] = useState(false);
  const [editing, setEditing] = useState(false);
  const [editName, setEditName] = useState(qr.name);
  const [saving, setSaving] = useState(false);
  const [copied, setCopied] = useState(false);

  const redirectUrl = `${window.location.origin}/r/${qr.id}`;

  function download() {
    const canvas = wrapperRef.current?.querySelector('canvas') as HTMLCanvasElement | null;
    if (!canvas) return;
    const a = document.createElement('a');
    a.href = canvas.toDataURL('image/png');
    a.download = `${qr.name}.png`;
    a.click();
  }

  async function handleDelete() {
    setDeleting(true);
    await onDelete(qr.id);
  }

  async function handleRename() {
    if (!editName.trim() || editName === qr.name) { setEditing(false); return; }
    setSaving(true);
    await onRename(qr.id, editName.trim());
    setSaving(false);
    setEditing(false);
  }

  function copyUrl() {
    navigator.clipboard.writeText(qr.url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <div className="bg-white rounded-2xl border border-slate-100 p-5 flex flex-col">
      <div ref={wrapperRef} className="flex justify-center mb-4">
        <QRCodeCanvas
          value={redirectUrl}
          size={140}
          fgColor={styleColors[qr.style] ?? '#0f172a'}
          bgColor="#ffffff"
          level="H"
          marginSize={1}
        />
      </div>

      {/* Name */}
      <div className="flex items-center gap-1.5 mb-1 min-w-0">
        {editing ? (
          <div className="flex items-center gap-1.5 w-full">
            <input
              autoFocus
              value={editName}
              onChange={e => setEditName(e.target.value)}
              onKeyDown={e => { if (e.key === 'Enter') handleRename(); if (e.key === 'Escape') setEditing(false); }}
              className="flex-1 min-w-0 px-2 py-1 text-sm font-semibold text-slate-900 border border-teal-400 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500"
            />
            <button onClick={handleRename} disabled={saving} className="shrink-0 text-teal-600 hover:text-teal-700 disabled:opacity-40">
              {saving ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Check className="w-3.5 h-3.5" />}
            </button>
          </div>
        ) : (
          <>
            <p className="font-semibold text-slate-900 text-sm truncate flex-1">{qr.name}</p>
            <button onClick={() => { setEditing(true); setEditName(qr.name); }} className="shrink-0 text-slate-300 hover:text-slate-600 transition-colors">
              <Pencil className="w-3 h-3" />
            </button>
          </>
        )}
      </div>

      {/* URL */}
      <div className="flex items-center gap-1 mb-2 min-w-0">
        <p className="text-xs text-slate-400 truncate flex-1">{qr.url}</p>
        <button onClick={copyUrl} className="shrink-0 text-slate-300 hover:text-slate-600 transition-colors" title="Copy URL">
          {copied ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3" />}
        </button>
      </div>

      {/* Meta */}
      <div className="flex items-center gap-2 text-xs text-slate-400">
        <span className="capitalize">{qr.style}</span>
        <span>·</span>
        <span>{new Date(qr.created_at).toLocaleDateString()}</span>
        <span>·</span>
        <span>{qr.scan_count} scans</span>
      </div>

      {/* Actions */}
      <div className="flex gap-2 mt-4 pt-4 border-t border-slate-100">
        <button
          onClick={download}
          className="flex-1 flex items-center justify-center gap-1.5 py-2 text-xs font-medium text-slate-600 bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors"
        >
          <Download className="w-3.5 h-3.5" />
          Download
        </button>
        <button
          onClick={handleDelete}
          disabled={deleting}
          className="flex items-center justify-center px-3 py-2 text-xs font-medium text-red-400 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors disabled:opacity-40"
        >
          {deleting ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Trash2 className="w-3.5 h-3.5" />}
        </button>
      </div>
    </div>
  );
}

export default function Dashboard() {
  const navigate = useNavigate();
  const { user, loading: authLoading } = useAuth();
  const [qrs, setQrs] = useState<QRCodeType[]>([]);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    if (!authLoading && !user) navigate('/auth');
  }, [user, authLoading, navigate]);

  useEffect(() => {
    if (!user) return;
    fetchQRs().then(({ data }) => {
      setQrs(data ?? []);
      setFetching(false);
    });
  }, [user]);

  async function handleSignOut() {
    await signOut();
    navigate('/');
  }

  async function handleDelete(id: string) {
    const { error } = await deleteQR(id);
    if (!error) setQrs(prev => prev.filter(q => q.id !== id));
  }

  async function handleRename(id: string, name: string) {
    const { error } = await renameQR(id, name);
    if (!error) setQrs(prev => prev.map(q => q.id === id ? { ...q, name } : q));
  }

  if (authLoading || !user) return null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <header className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <button onClick={() => navigate('/')} className="flex items-center gap-2">
            <QrCode className="w-5 h-5 text-teal-600" />
            <span className="font-bold text-slate-900 text-lg">QRcraft</span>
          </button>
          <div className="flex items-center gap-4">
            <span className="text-sm text-slate-500 hidden sm:block truncate max-w-[200px]">{user.email}</span>
            <button
              onClick={handleSignOut}
              className="flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-900 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              Sign out
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Your QR codes</h1>
            {!fetching && (
              <p className="text-sm text-slate-500 mt-1">
                {qrs.length === 0 ? 'None saved yet' : `${qrs.length} saved`}
              </p>
            )}
          </div>
          <button
            onClick={() => navigate('/create')}
            className="flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white rounded-lg font-semibold text-sm hover:bg-slate-800 transition-colors"
          >
            <Plus className="w-4 h-4" />
            New QR
          </button>
        </div>

        {fetching && (
          <div className="flex items-center justify-center py-24 text-slate-400">
            <Loader2 className="w-6 h-6 animate-spin mr-2" />
            Loading your QR codes…
          </div>
        )}

        {!fetching && qrs.length === 0 && (
          <div className="bg-white rounded-2xl border border-slate-100 p-16 text-center">
            <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-5">
              <QrCode className="w-8 h-8 text-slate-400" />
            </div>
            <h2 className="text-xl font-semibold text-slate-900 mb-2">No QR codes yet</h2>
            <p className="text-slate-500 mb-6 text-sm">Create your first QR code and save it here to track scans.</p>
            <button
              onClick={() => navigate('/create')}
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-lg font-semibold text-sm hover:bg-slate-800 transition-colors"
            >
              <Plus className="w-4 h-4" />
              Create your first one →
            </button>
          </div>
        )}

        {!fetching && qrs.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {qrs.map(qr => (
              <QRCard
                key={qr.id}
                qr={qr}
                onDelete={handleDelete}
                onRename={handleRename}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
