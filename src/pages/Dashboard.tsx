import { useEffect, useRef, useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import { QrCode, Plus, LogOut, Download, Trash2, Loader2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { signOut } from '../lib/auth';
import { fetchQRs, deleteQR, type QRCode as QRCodeType } from '../lib/qr';

const styleColors: Record<string, string> = {
  classic: '#0f172a',
  brand:   '#0d9488',
  bold:    '#dc2626',
};

export default function Dashboard() {
  const navigate = useNavigate();
  const { user, loading: authLoading } = useAuth();
  const [qrs, setQrs] = useState<QRCodeType[]>([]);
  const [fetching, setFetching] = useState(true);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const qrRefs = useRef<Map<string, HTMLDivElement>>(new Map());

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

  function downloadQR(qr: QRCodeType) {
    const wrapper = qrRefs.current.get(qr.id);
    const canvas = wrapper?.querySelector('canvas') as HTMLCanvasElement | null;
    if (!canvas) return;
    const a = document.createElement('a');
    a.href = canvas.toDataURL('image/png');
    a.download = `${qr.name}.png`;
    a.click();
  }

  async function handleDelete(id: string) {
    setDeletingId(id);
    const { error } = await deleteQR(id);
    if (!error) {
      setQrs(prev => prev.filter(q => q.id !== id));
    }
    setDeletingId(null);
  }

  if (authLoading || !user) return null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <button onClick={() => navigate('/')} className="flex items-center gap-2">
            <QrCode className="w-5 h-5 text-teal-600" />
            <span className="font-bold text-slate-900 text-lg">QRcraft</span>
          </button>
          <div className="flex items-center gap-4">
            <span className="text-sm text-slate-500 hidden sm:block">{user.email}</span>
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
          <h1 className="text-3xl font-bold text-slate-900">Your QR codes</h1>
          <button
            onClick={() => navigate('/create')}
            className="flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white rounded-lg font-semibold text-sm hover:bg-slate-800 transition-colors"
          >
            <Plus className="w-4 h-4" />
            New QR
          </button>
        </div>

        {/* Loading */}
        {fetching && (
          <div className="flex items-center justify-center py-24 text-slate-400">
            <Loader2 className="w-6 h-6 animate-spin mr-2" />
            Loading…
          </div>
        )}

        {/* Empty state */}
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

        {/* QR grid */}
        {!fetching && qrs.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {qrs.map(qr => (
              <div key={qr.id} className="bg-white rounded-2xl border border-slate-100 p-5 flex flex-col">
                {/* Hidden canvas for download */}
                <div
                  ref={el => { if (el) qrRefs.current.set(qr.id, el); else qrRefs.current.delete(qr.id); }}
                  className="flex justify-center mb-4"
                >
                  <QRCodeCanvas
                    value={qr.url}
                    size={140}
                    fgColor={styleColors[qr.style] ?? '#0f172a'}
                    bgColor="#ffffff"
                    level="H"
                    marginSize={1}
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-slate-900 text-sm truncate mb-1">{qr.name}</p>
                  <p className="text-xs text-slate-400 truncate mb-1">{qr.url}</p>
                  <div className="flex items-center gap-3 text-xs text-slate-400 mt-2">
                    <span className="capitalize">{qr.style}</span>
                    <span>·</span>
                    <span>{new Date(qr.created_at).toLocaleDateString()}</span>
                    <span>·</span>
                    <span>{qr.scan_count} scans</span>
                  </div>
                </div>

                <div className="flex gap-2 mt-4 pt-4 border-t border-slate-100">
                  <button
                    onClick={() => downloadQR(qr)}
                    className="flex-1 flex items-center justify-center gap-1.5 py-2 text-xs font-medium text-slate-600 bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    Download
                  </button>
                  <button
                    onClick={() => handleDelete(qr.id)}
                    disabled={deletingId === qr.id}
                    className="flex items-center justify-center px-3 py-2 text-xs font-medium text-red-500 hover:bg-red-50 rounded-lg transition-colors disabled:opacity-40"
                  >
                    {deletingId === qr.id
                      ? <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      : <Trash2 className="w-3.5 h-3.5" />
                    }
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
