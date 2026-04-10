import { useState, useRef } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import { ArrowLeft, QrCode, Download, Share2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

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

export default function Create() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [url, setUrl] = useState('');
  const [submittedUrl, setSubmittedUrl] = useState('');
  const [error, setError] = useState('');
  const [selectedStyle, setSelectedStyle] = useState<StyleKey>('brand');
  const [copied, setCopied] = useState(false);
  const canvasRef = useRef<HTMLDivElement>(null);

  const step = submittedUrl ? 2 : 1;

  function handleGenerate() {
    const trimmed = url.trim();
    if (!trimmed.match(/^https?:\/\/.+/)) {
      setError('URL must start with http:// or https://');
      return;
    }
    setError('');
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
    const dataUrl = canvas.toDataURL('image/png');
    const a = document.createElement('a');
    a.href = dataUrl;
    a.download = 'qrcode.png';
    a.click();
  }

  const style = QR_STYLES[selectedStyle];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Nav bar */}
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors text-sm font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>
        <div className="flex items-center gap-2">
          <QrCode className="w-5 h-5 text-teal-600" />
          <span className="font-bold text-slate-900 text-lg">QRcraft</span>
        </div>
      </header>

      <main className="max-w-lg mx-auto px-4 sm:px-6 py-16 sm:py-24">
        {step === 1 ? (
          /* ── Step 1: URL input ── */
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
                {error && (
                  <p className="mt-2 text-sm text-red-500 text-left">{error}</p>
                )}
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
          /* ── Step 2: Preview + style picker ── */
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2 tracking-tight">
              Your QR code is ready
            </h1>
            <p className="text-slate-500 mb-10 text-sm truncate px-4">{submittedUrl}</p>

            {/* QR preview */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 mb-6">
              <div ref={canvasRef} className="flex justify-center mb-8">
                <QRCodeCanvas
                  value={submittedUrl}
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
                      onClick={() => setSelectedStyle(key)}
                      className={`flex-1 flex flex-col items-center gap-2 p-3 rounded-xl border-2 transition-all ${
                        selectedStyle === key
                          ? 'border-teal-500 bg-teal-50'
                          : 'border-slate-200 hover:border-slate-300 bg-white'
                      }`}
                    >
                      {/* Mini QR preview swatch */}
                      <div
                        className="w-8 h-8 rounded-sm"
                        style={{ backgroundColor: s.fgColor }}
                      />
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
                Download PNG
              </button>

              {/* What's next */}
              <div className="mt-4 pt-4 border-t border-slate-100 text-left space-y-3">
                <p className="text-xs text-slate-400 uppercase tracking-wide font-medium mb-3">What's next?</p>

                {user ? (
                  <button
                    onClick={() => {/* wire to DB next session */}}
                    className="w-full py-2.5 bg-teal-600 text-white rounded-lg font-semibold text-sm hover:bg-teal-700 transition-colors mb-1"
                  >
                    Save this QR
                  </button>
                ) : (
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500">Save &amp; track this QR</span>
                    <button
                      onClick={() => navigate('/auth')}
                      className="text-xs text-teal-600 font-medium hover:text-teal-700 transition-colors"
                    >
                      Sign in to save →
                    </button>
                  </div>
                )}

                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">Upgrade to edit destination anytime</span>
                  <a
                    href="/#pricing"
                    className="text-xs text-teal-600 font-medium hover:text-teal-700 transition-colors"
                  >
                    See plans →
                  </a>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">Share QRcraft with someone</span>
                  <button
                    onClick={handleShare}
                    className="flex items-center gap-1 text-xs text-teal-600 font-medium hover:text-teal-700 transition-colors"
                  >
                    {copied ? (
                      <span className="text-emerald-600">Copied!</span>
                    ) : (
                      <><Share2 className="w-3 h-3" />Copy link</>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Back / start over */}
            <button
              onClick={() => { setSubmittedUrl(''); setUrl(''); }}
              className="text-sm text-slate-400 hover:text-slate-600 transition-colors"
            >
              ← Start over
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
