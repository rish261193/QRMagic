import { useState, useRef, useEffect } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import { ArrowLeft, QrCode, Download, Share2, Check, LayoutDashboard } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { saveQR } from '../lib/qr';

type StyleKey = 'classic' | 'brand' | 'bold';

interface QRStyle {
  label: string;
  fgColor: string;
  bgColor: string;
}

const QR_STYLES: Record<StyleKey, QRStyle> = {
  classic: { label: 'Classic', fgColor: '#0f172a', bgColor: '#ffffff' },
  brand:   { label: 'Brand',   fgColor: '#0d9488', bgColor: '#ffffff' },
  bold:    { label: 'Bold',    fgColor: '#dc2626', bgColor: '#ffffff' },
};

function nameFromUrl(url: string): string {
  try {
    const host = new URL(url).hostname.replace(/^www\./, '');
    return `QR for ${host}`;
  } catch {
    return 'My QR code';
  }
}

export default function Create() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [url, setUrl] = useState('');
  const [submittedUrl, setSubmittedUrl] = useState('');
  const [error, setError] = useState('');
  const [selectedStyle, setSelectedStyle] = useState<StyleKey>('brand');
  const [copied, setCopied] = useState(false);
  const [qrName, setQrName] = useState('');
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle');
  const [savedId, setSavedId] = useState<string | null>(null);
  const canvasRef = useRef<HTMLDivElement>(null);

  // Auto-populate name when URL is submitted
  useEffect(() => {
    if (submittedUrl) setQrName(nameFromUrl(submittedUrl));
  }, [submittedUrl]);

  const step = submittedUrl ? 2 : 1;

  // After save, the QR encodes the redirect URL so scans are tracked
  const qrValue = savedId
    ? `${window.location.origin}/r/${savedId}`
    : submittedUrl;

  function handleGenerate() {
    const trimmed = url.trim();
    if (!trimmed.match(/^https?:\/\/.+/)) {
      setError('URL must start with http:// or https://');
      return;
    }
    setError('');
    setSaveStatus('idle');
    setSavedId(null);
    setSubmittedUrl(trimmed);
  }

  function handleShare() {
    navigator.clipboard.writeText('https://qr-magic-bice.vercel.app').then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  function handleDownload() {
    const canvas = canvasRef.current?.querySelector('canvas') as HTMLCanvasElement | null;
    if (!canvas) return;
    const a = document.createElement('a');
    a.href = canvas.toDataURL('image/png');
    a.download = `${qrName || 'qrcode'}.png`;
    a.click();
  }

  async function handleSave() {
    if (!user) return;
    setSaveStatus('saving');
    const { data, error } = await saveQR({
      name: qrName.trim() || nameFromUrl(submittedUrl),
      url: submittedUrl,
      style: selectedStyle,
      user_id: user.id,
    });
    if (!error && data) {
      setSavedId(data.id);
      setSaveStatus('saved');
    } else {
      setSaveStatus('error');
    }
  }

  const style = QR_STYLES[selectedStyle];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors text-sm font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>
        <div className="flex items-center gap-3">
          {user && (
            <button
              onClick={() => navigate('/dashboard')}
              className="flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-900 transition-colors"
            >
              <LayoutDashboard className="w-4 h-4" />
              Dashboard
            </button>
          )}
          <div className="flex items-center gap-2">
            <QrCode className="w-5 h-5 text-teal-600" />
            <span className="font-bold text-slate-900 text-lg">QRcraft</span>
          </div>
        </div>
      </header>

      <main className="max-w-lg mx-auto px-4 sm:px-6 py-16 sm:py-24">
        {step === 1 ? (
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-3 tracking-tight">
              Create your QR code
            </h1>
            <p className="text-lg text-slate-500 mb-12">Free. Permanent. Never expires.</p>

            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
              <div className="mb-5">
                <input
                  type="url"
                  value={url}
                  onChange={e => { setUrl(e.target.value); setError(''); }}
                  onKeyDown={e => e.key === 'Enter' && handleGenerate()}
                  placeholder="https://yourwebsite.com"
                  className="w-full px-4 py-3.5 rounded-lg border border-slate-200 text-slate-900 placeholder-slate-400 text-base focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                  autoFocus
                />
                {error && <p className="mt-2 text-sm text-red-500 text-left">{error}</p>}
              </div>
              <button
                onClick={handleGenerate}
                className="w-full py-3.5 bg-slate-900 text-white rounded-lg font-semibold text-base hover:bg-slate-800 transition-colors"
              >
                Generate QR →
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2 tracking-tight">
              Your QR code is ready
            </h1>
            <p className="text-slate-500 mb-10 text-sm truncate px-4">{submittedUrl}</p>

            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 mb-6">
              <div ref={canvasRef} className="flex justify-center mb-8">
                <QRCodeCanvas
                  value={qrValue}
                  size={220}
                  fgColor={style.fgColor}
                  bgColor={style.bgColor}
                  level="H"
                  marginSize={2}
                />
              </div>

              {/* Style picker */}
              <div className="mb-6">
                <p className="text-xs text-slate-400 mb-3 uppercase tracking-wide font-medium">Choose your style</p>
                <div className="flex gap-3">
                  {(Object.entries(QR_STYLES) as [StyleKey, QRStyle][]).map(([key, s]) => (
                    <button
                      key={key}
                      onClick={() => { setSelectedStyle(key); if (saveStatus !== 'saved') setSaveStatus('idle'); }}
                      className={`flex-1 flex flex-col items-center gap-2 p-3 rounded-xl border-2 transition-all ${
                        selectedStyle === key
                          ? 'border-teal-500 bg-teal-50'
                          : 'border-slate-200 hover:border-slate-300 bg-white'
                      }`}
                    >
                      <div className="w-8 h-8 rounded-sm" style={{ backgroundColor: s.fgColor }} />
                      <span className={`text-xs font-medium ${selectedStyle === key ? 'text-teal-600' : 'text-slate-500'}`}>
                        {s.label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Download */}
              <button
                onClick={handleDownload}
                className="w-full flex items-center justify-center gap-2 py-3.5 bg-slate-900 text-white rounded-lg font-semibold text-base hover:bg-slate-800 transition-colors mb-4"
              >
                <Download className="w-4 h-4" />
                {savedId ? 'Download trackable QR' : 'Download PNG'}
              </button>

              {/* Save section */}
              <div className="mt-4 pt-4 border-t border-slate-100">
                {user ? (
                  saveStatus === 'saved' ? (
                    <div className="space-y-3">
                      <div className="flex items-center justify-center gap-2 py-2.5 bg-emerald-50 text-emerald-700 rounded-lg text-sm font-semibold border border-emerald-200">
                        <Check className="w-4 h-4" />
                        Saved — scan tracking is live
                      </div>
                      <button
                        onClick={() => navigate('/dashboard')}
                        className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
                      >
                        <LayoutDashboard className="w-4 h-4" />
                        View in Dashboard →
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <div>
                        <input
                          type="text"
                          value={qrName}
                          onChange={e => { setQrName(e.target.value); setSaveStatus('idle'); }}
                          placeholder="Name this QR code…"
                          className="w-full px-3 py-2.5 rounded-lg border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                        />
                      </div>
                      <button
                        onClick={handleSave}
                        disabled={saveStatus === 'saving'}
                        className="w-full py-2.5 bg-teal-600 text-white rounded-lg font-semibold text-sm hover:bg-teal-700 disabled:opacity-60 transition-colors"
                      >
                        {saveStatus === 'saving' ? 'Saving…' : saveStatus === 'error' ? 'Save failed — try again' : 'Save & enable scan tracking'}
                      </button>
                    </div>
                  )
                ) : (
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500">Save &amp; track scans</span>
                    <button
                      onClick={() => navigate('/auth')}
                      className="text-xs text-teal-600 font-medium hover:text-teal-700 transition-colors"
                    >
                      Sign in to save →
                    </button>
                  </div>
                )}
              </div>

              {/* Other actions */}
              <div className="mt-3 pt-3 border-t border-slate-100 space-y-2.5 text-left">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">Upgrade to edit destination anytime</span>
                  <a href="/#pricing" className="text-xs text-teal-600 font-medium hover:text-teal-700 transition-colors">
                    See plans →
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">Share QRcraft with someone</span>
                  <button
                    onClick={handleShare}
                    className="flex items-center gap-1 text-xs text-teal-600 font-medium hover:text-teal-700 transition-colors"
                  >
                    {copied ? <span className="text-emerald-600">Copied!</span> : <><Share2 className="w-3 h-3" />Copy link</>}
                  </button>
                </div>
              </div>
            </div>

            <button
              onClick={() => { setSubmittedUrl(''); setUrl(''); setSaveStatus('idle'); setSavedId(null); }}
              className="text-sm text-slate-400 hover:text-slate-600 transition-colors"
            >
              ← Create another
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
