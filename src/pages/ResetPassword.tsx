import { useState, useEffect } from 'react';
import { QrCode, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';

export default function ResetPassword() {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    document.title = 'Reset Password — QRcraft';
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    if (password !== confirm) {
      setError('Passwords do not match');
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }
    setSubmitting(true);
    const { error: updateError } = await supabase.auth.updateUser({ password });
    if (updateError) {
      setError(updateError.message);
    } else {
      setDone(true);
      setTimeout(() => navigate('/dashboard'), 2500);
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
              Set new password
            </h1>
            <p className="text-slate-400 text-base">
              Choose a strong password for your account.
            </p>
          </div>

          <div className="bg-slate-800 rounded-2xl border border-slate-700 p-8">
            {done ? (
              <div className="text-center py-4">
                <CheckCircle className="w-14 h-14 text-emerald-400 mx-auto mb-4" />
                <p className="text-white font-semibold text-lg mb-2">Password updated!</p>
                <p className="text-slate-400 text-sm">Redirecting you to your dashboard…</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1.5">
                    New password
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={e => { setPassword(e.target.value); setError(''); }}
                    placeholder="••••••••"
                    required
                    minLength={6}
                    autoFocus
                    className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-slate-500 text-base focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1.5">
                    Confirm password
                  </label>
                  <input
                    type="password"
                    value={confirm}
                    onChange={e => { setConfirm(e.target.value); setError(''); }}
                    placeholder="••••••••"
                    required
                    minLength={6}
                    className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-slate-500 text-base focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                  />
                </div>

                {error && (
                  <div className="flex items-center gap-2 text-sm text-red-400 bg-red-900/30 border border-red-800 rounded-lg px-3 py-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full flex items-center justify-center gap-2 py-3.5 bg-teal-600 text-white rounded-lg font-semibold text-base hover:bg-teal-500 disabled:opacity-60 disabled:cursor-not-allowed transition-colors mt-2"
                >
                  {submitting && <Loader2 className="w-4 h-4 animate-spin" />}
                  {submitting ? 'Updating…' : 'Update password'}
                </button>
              </form>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
