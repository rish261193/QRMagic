import { useState, useEffect } from 'react';
import { QrCode, Loader2, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';

export default function ForgotPassword() {
  const navigate = useNavigate();
  useEffect(() => { window.scrollTo(0, 0); document.title = 'Forgot Password — QRcraft'; }, []);
  const [email, setEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    const { error } = await supabase.auth.resetPasswordForEmail(email.trim(), {
      redirectTo: `${window.location.origin}/reset-password`,
    });
    if (error) {
      setError(error.message);
    } else {
      setSent(true);
    }
    setSubmitting(false);
  }

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col">
      <header className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-5 flex items-center">
        <button onClick={() => navigate('/')} className="flex items-center gap-2">
          <QrCode className="w-5 h-5 text-teal-400" />
          <span className="font-bold text-white text-lg">QRcraft</span>
        </button>
      </header>

      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2 tracking-tight">
              Reset your password
            </h1>
            <p className="text-slate-400 text-base">
              Enter your email and we'll send you a reset link.
            </p>
          </div>

          <div className="bg-slate-800 rounded-2xl border border-slate-700 p-8">
            {sent ? (
              <div className="text-center py-4">
                <CheckCircle className="w-14 h-14 text-emerald-400 mx-auto mb-4" />
                <p className="text-white font-semibold text-lg mb-2">Check your email</p>
                <p className="text-slate-400 text-sm">
                  We sent a password reset link to <span className="text-slate-300">{email}</span>.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1.5">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={e => { setEmail(e.target.value); setError(''); }}
                    placeholder="you@example.com"
                    required
                    autoFocus
                    className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-slate-500 text-base focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                  />
                </div>

                {error && (
                  <p className="text-sm text-red-400 bg-red-900/30 border border-red-800 rounded-lg px-3 py-2">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full flex items-center justify-center gap-2 py-3.5 bg-teal-600 text-white rounded-lg font-semibold text-base hover:bg-teal-500 disabled:opacity-60 disabled:cursor-not-allowed transition-colors mt-2"
                >
                  {submitting && <Loader2 className="w-4 h-4 animate-spin" />}
                  {submitting ? 'Sending…' : 'Send reset link'}
                </button>
              </form>
            )}
          </div>

          <p className="mt-6 text-center text-sm text-slate-400">
            Remember your password?{' '}
            <button
              onClick={() => navigate('/auth')}
              className="text-teal-400 font-medium hover:text-teal-300 transition-colors"
            >
              Sign in
            </button>
          </p>
        </div>
      </main>
    </div>
  );
}
