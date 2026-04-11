import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { QrCode, Loader2, ArrowRight } from 'lucide-react';
import { getQRDetails, captureEmailLead } from '../lib/qr';

type Stage = 'loading' | 'email-capture' | 'redirecting' | 'not-found';

export default function Redirect() {
  const { id } = useParams<{ id: string }>();
  const [stage, setStage] = useState<Stage>('loading');
  const [destUrl, setDestUrl] = useState('');
  const [email, setEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [emailError, setEmailError] = useState('');

  useEffect(() => {
    if (!id) { setStage('not-found'); return; }

    getQRDetails(id).then(details => {
      if (!details) { setStage('not-found'); return; }
      setDestUrl(details.url);
      if (details.email_capture) {
        setStage('email-capture');
      } else {
        doRedirect(details.url);
      }
    });
  }, [id]); // eslint-disable-line react-hooks/exhaustive-deps

  function doRedirect(url: string) {
    setStage('redirecting');
    window.location.replace(url);
  }

  async function handleEmailSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!id) return;
    const trimmed = email.trim();
    if (!trimmed.includes('@')) { setEmailError('Please enter a valid email'); return; }
    setSubmitting(true);
    setEmailError('');
    await captureEmailLead(id, trimmed);
    doRedirect(destUrl);
  }

  if (stage === 'not-found') {
    return (
      <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center text-center px-4">
        <QrCode className="w-12 h-12 text-teal-400 mb-4" />
        <h1 className="text-2xl font-bold text-white mb-2">QR code not found</h1>
        <p className="text-slate-400 mb-6">This QR code doesn't exist or has been removed.</p>
        <a href="/" className="text-teal-400 hover:text-teal-300 font-medium transition-colors">
          ← Back to QRcraft
        </a>
      </div>
    );
  }

  if (stage === 'email-capture') {
    return (
      <div className="min-h-screen bg-slate-900 flex flex-col">
        <header className="px-4 sm:px-6 py-5">
          <div className="flex items-center gap-2">
            <QrCode className="w-5 h-5 text-teal-400" />
            <span className="font-bold text-white text-lg">QRcraft</span>
          </div>
        </header>

        <main className="flex-1 flex items-center justify-center px-4 py-12">
          <div className="w-full max-w-sm text-center">
            <div className="w-16 h-16 bg-teal-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <ArrowRight className="w-8 h-8 text-teal-400" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white mb-3">One more step</h1>
            <p className="text-slate-400 mb-8">Enter your email to continue</p>

            <form onSubmit={handleEmailSubmit} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={e => { setEmail(e.target.value); setEmailError(''); }}
                placeholder="your@email.com"
                required
                autoFocus
                className="w-full px-4 py-3.5 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 text-base focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
              />
              {emailError && <p className="text-red-400 text-sm">{emailError}</p>}
              <button
                type="submit"
                disabled={submitting}
                className="w-full flex items-center justify-center gap-2 py-3.5 bg-teal-600 text-white rounded-xl font-semibold text-base hover:bg-teal-500 disabled:opacity-60 transition-colors min-h-[52px]"
              >
                {submitting
                  ? <Loader2 className="w-5 h-5 animate-spin" />
                  : <>Continue <ArrowRight className="w-4 h-4" /></>
                }
              </button>
            </form>

            <button
              onClick={() => doRedirect(destUrl)}
              className="mt-4 text-sm text-slate-500 hover:text-slate-300 transition-colors py-2 min-h-[44px]"
            >
              Skip →
            </button>
          </div>
        </main>

        <footer className="py-5 text-center">
          <a href="/" className="inline-flex items-center gap-1.5 text-xs text-slate-600 hover:text-slate-400 transition-colors">
            <QrCode className="w-3 h-3" />
            Powered by QRcraft
          </a>
        </footer>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center gap-3 relative">
      <QrCode className="w-10 h-10 text-teal-400 animate-pulse" />
      <p className="text-slate-400 text-sm">Taking you there…</p>
      <div className="absolute bottom-6">
        <a href="/" className="inline-flex items-center gap-1.5 text-xs text-slate-700 hover:text-slate-500 transition-colors">
          <QrCode className="w-3 h-3" />
          Powered by QRcraft
        </a>
      </div>
    </div>
  );
}
