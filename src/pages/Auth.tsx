import { useState, useEffect } from 'react';
import { QrCode, Loader2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { signIn, signUp } from '../lib/auth';
import { useAuth } from '../context/AuthContext';

type Mode = 'signin' | 'signup';

export default function Auth() {
  const navigate = useNavigate();
  const { user, loading } = useAuth();

  const [mode, setMode] = useState<Mode>('signin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [info, setInfo] = useState('');
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!loading && user) navigate('/dashboard');
  }, [user, loading, navigate]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setInfo('');
    setSubmitting(true);

    if (mode === 'signup') {
      const { error } = await signUp(email, password);
      if (error) {
        setError(error.message);
      } else {
        setInfo('Check your email to confirm your account, then sign in.');
        setMode('signin');
      }
    } else {
      const { error } = await signIn(email, password);
      if (error) {
        setError(error.message);
      } else {
        navigate('/dashboard');
      }
    }

    setSubmitting(false);
  }

  if (loading) return null;

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col">
      {/* Header */}
      <header className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between">
        <button onClick={() => navigate('/')} className="flex items-center gap-2">
          <QrCode className="w-5 h-5 text-teal-400" />
          <span className="font-bold text-white text-lg">QRcraft</span>
        </button>
      </header>

      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          {/* Heading */}
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2 tracking-tight">
              {mode === 'signin' ? 'Welcome back' : 'Create your account'}
            </h1>
            <p className="text-slate-400 text-base">
              {mode === 'signin'
                ? 'Sign in to access your saved QR codes'
                : 'Free forever. Save and track your QR codes.'}
            </p>
          </div>

          {/* Card */}
          <div className="bg-slate-800 rounded-2xl border border-slate-700 p-8">
            {info && (
              <div className="mb-5 px-4 py-3 bg-emerald-900/50 border border-emerald-700 rounded-lg text-sm text-emerald-300">
                {info}
              </div>
            )}

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

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-sm font-medium text-slate-300">Password</label>
                  {mode === 'signin' && (
                    <button
                      type="button"
                      onClick={() => navigate('/forgot-password')}
                      className="text-xs text-teal-400 hover:text-teal-300 transition-colors"
                    >
                      Forgot password?
                    </button>
                  )}
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={e => { setPassword(e.target.value); setError(''); }}
                  placeholder="••••••••"
                  required
                  minLength={6}
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
                {submitting ? 'Please wait…' : mode === 'signin' ? 'Sign in' : 'Create account'}
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-slate-400">
              {mode === 'signin' ? (
                <>No account?{' '}
                  <button onClick={() => { setMode('signup'); setError(''); setInfo(''); }} className="text-teal-400 font-medium hover:text-teal-300 transition-colors">
                    Sign up free
                  </button>
                </>
              ) : (
                <>Already have an account?{' '}
                  <button onClick={() => { setMode('signin'); setError(''); setInfo(''); }} className="text-teal-400 font-medium hover:text-teal-300 transition-colors">
                    Sign in
                  </button>
                </>
              )}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
