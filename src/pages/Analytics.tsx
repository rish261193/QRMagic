import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { QrCode, Lock, Zap, Loader2, Download, BarChart2, Mail, Layout, TrendingUp } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { usePlan } from '../hooks/usePlan';
import { fetchQRs, type QRCode } from '../lib/qr';
import { fetchEmailCaptures, exportEmailCapturesCSV, type EmailCapture } from '../lib/analytics';
import { signOut } from '../lib/auth';

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

export default function Analytics() {
  const navigate = useNavigate();
  const { user, loading: authLoading } = useAuth();
  const { plan, isGrowth, isLoading: planLoading } = usePlan();
  const [qrs, setQrs] = useState<QRCode[]>([]);
  const [emailCaptures, setEmailCaptures] = useState<EmailCapture[]>([]);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    document.title = 'Analytics — QRcraft';
  }, []);

  useEffect(() => {
    if (!authLoading && !user) navigate('/auth');
  }, [user, authLoading, navigate]);

  useEffect(() => {
    if (!user || planLoading || !isGrowth) {
      setFetching(false);
      return;
    }
    Promise.all([fetchQRs(), fetchEmailCaptures()]).then(([qrRes, captureRes]) => {
      setQrs(qrRes.data ?? []);
      setEmailCaptures(captureRes.data ?? []);
      setFetching(false);
    });
  }, [user, planLoading, isGrowth]);

  async function handleSignOut() {
    await signOut();
    navigate('/');
  }

  if (authLoading || planLoading || !user) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <Loader2 className="w-6 h-6 text-teal-400 animate-spin" />
      </div>
    );
  }

  const totalScans = qrs.reduce((s, q) => s + q.scan_count, 0);
  const bestQR = qrs.length > 0
    ? qrs.reduce((best, q) => q.scan_count > best.scan_count ? q : best, qrs[0])
    : null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <header className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <button onClick={() => navigate('/')} className="flex items-center gap-2">
            <QrCode className="w-5 h-5 text-teal-600" />
            <span className="font-bold text-slate-900 text-lg">QRcraft</span>
          </button>
          <div className="flex items-center gap-4">
            {isGrowth && (
              <span className="hidden sm:inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                <Zap className="w-3 h-3" />
                Growth
              </span>
            )}
            <button
              onClick={() => navigate('/dashboard')}
              className="text-sm text-slate-500 hover:text-slate-900 transition-colors font-medium"
            >
              Dashboard
            </button>
            <button
              onClick={handleSignOut}
              className="text-sm text-slate-400 hover:text-slate-900 transition-colors"
            >
              Sign out
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Upgrade prompt for non-growth users */}
        {!isGrowth && (
          <div className="bg-white rounded-2xl border border-slate-100 p-16 text-center max-w-lg mx-auto">
            <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-5">
              <Lock className="w-8 h-8 text-slate-400" />
            </div>
            <h2 className="text-xl font-semibold text-slate-900 mb-2">Analytics is a Growth feature</h2>
            <p className="text-slate-500 text-sm mb-6">
              Upgrade to Growth to see scan analytics, email captures, and performance data for all your QR codes.
            </p>
            <button
              onClick={() => navigate('/growth')}
              className="inline-flex items-center gap-2 px-6 py-3 bg-teal-600 text-white rounded-lg font-semibold text-sm hover:bg-teal-500 transition-colors"
            >
              <Zap className="w-4 h-4" />
              Upgrade to Growth — $12/month
            </button>
            <p className="text-xs text-slate-400 mt-3">Cancel anytime · Includes Editable QR Kit</p>
          </div>
        )}

        {isGrowth && (
          <>
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl font-bold text-slate-900">Analytics</h1>
                <p className="text-sm text-slate-500 mt-1">
                  {plan === 'growth' ? 'Growth plan' : 'Pro plan'} · {user.email}
                </p>
              </div>
            </div>

            {fetching ? (
              <div className="flex items-center justify-center py-24 text-slate-400">
                <Loader2 className="w-6 h-6 animate-spin mr-2" />
                Loading analytics…
              </div>
            ) : (
              <>
                {/* Stats cards */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
                  <div className="bg-white rounded-xl border border-slate-100 p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="w-4 h-4 text-teal-500" />
                      <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">Total scans</p>
                    </div>
                    <p className="text-3xl font-bold text-slate-900">{totalScans}</p>
                  </div>

                  <div className="bg-white rounded-xl border border-slate-100 p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <Mail className="w-4 h-4 text-teal-500" />
                      <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">Emails captured</p>
                    </div>
                    <p className="text-3xl font-bold text-slate-900">{emailCaptures.length}</p>
                  </div>

                  <div className="bg-white rounded-xl border border-slate-100 p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <BarChart2 className="w-4 h-4 text-teal-500" />
                      <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">Best QR</p>
                    </div>
                    <p className="text-lg font-bold text-slate-900 truncate">
                      {bestQR ? bestQR.name : '—'}
                    </p>
                    {bestQR && (
                      <p className="text-xs text-slate-400 mt-0.5">{bestQR.scan_count} scans</p>
                    )}
                  </div>

                  <div className="bg-white rounded-xl border border-slate-100 p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <Layout className="w-4 h-4 text-teal-500" />
                      <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">Peak scan time</p>
                    </div>
                    <p className="text-lg font-bold text-slate-400">Coming soon</p>
                  </div>
                </div>

                {/* QR performance table */}
                <div className="bg-white rounded-2xl border border-slate-100 mb-8">
                  <div className="px-6 py-4 border-b border-slate-100">
                    <h2 className="font-semibold text-slate-900">QR Performance</h2>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="text-xs text-slate-500 uppercase tracking-wide border-b border-slate-100">
                          <th className="text-left px-6 py-3 font-medium">QR Name</th>
                          <th className="text-left px-6 py-3 font-medium hidden sm:table-cell">Destination</th>
                          <th className="text-right px-6 py-3 font-medium">Scans</th>
                          <th className="text-left px-6 py-3 font-medium hidden md:table-cell">Created</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-50">
                        {qrs.length === 0 ? (
                          <tr>
                            <td colSpan={4} className="px-6 py-10 text-center text-slate-400 text-sm">
                              No QR codes yet.{' '}
                              <button onClick={() => navigate('/create')} className="text-teal-600 hover:text-teal-500 font-medium">
                                Create one →
                              </button>
                            </td>
                          </tr>
                        ) : (
                          [...qrs]
                            .sort((a, b) => b.scan_count - a.scan_count)
                            .map(qr => (
                              <tr key={qr.id} className="hover:bg-slate-50/50 transition-colors">
                                <td className="px-6 py-3.5 font-medium text-slate-900">{qr.name}</td>
                                <td className="px-6 py-3.5 text-slate-400 max-w-[200px] truncate hidden sm:table-cell">
                                  {qr.url}
                                </td>
                                <td className="px-6 py-3.5 text-right">
                                  <span className="flex items-center justify-end gap-1">
                                    {qr.scan_count > 0 && <TrendingUp className="w-3 h-3 text-emerald-500" />}
                                    <span className="font-semibold text-slate-900">{qr.scan_count}</span>
                                  </span>
                                </td>
                                <td className="px-6 py-3.5 text-slate-400 hidden md:table-cell">
                                  {formatDate(qr.created_at)}
                                </td>
                              </tr>
                            ))
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Email captures table */}
                <div className="bg-white rounded-2xl border border-slate-100 mb-8">
                  <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
                    <h2 className="font-semibold text-slate-900">Email Captures</h2>
                    {emailCaptures.length > 0 && (
                      <button
                        onClick={() => exportEmailCapturesCSV(emailCaptures)}
                        className="flex items-center gap-1.5 text-xs font-medium text-teal-600 hover:text-teal-500 transition-colors"
                      >
                        <Download className="w-3.5 h-3.5" />
                        Export CSV
                      </button>
                    )}
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="text-xs text-slate-500 uppercase tracking-wide border-b border-slate-100">
                          <th className="text-left px-6 py-3 font-medium">Email</th>
                          <th className="text-left px-6 py-3 font-medium hidden sm:table-cell">QR Code</th>
                          <th className="text-left px-6 py-3 font-medium hidden md:table-cell">Date Captured</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-50">
                        {emailCaptures.length === 0 ? (
                          <tr>
                            <td colSpan={3} className="px-6 py-10 text-center text-slate-400 text-sm">
                              No email captures yet. Email capture shows on QR scans when Growth plan is active.
                            </td>
                          </tr>
                        ) : (
                          emailCaptures.map(c => (
                            <tr key={c.id} className="hover:bg-slate-50/50 transition-colors">
                              <td className="px-6 py-3.5 text-slate-900 font-medium">{c.email}</td>
                              <td className="px-6 py-3.5 text-slate-400 hidden sm:table-cell">
                                {c.qr_codes?.name ?? '—'}
                              </td>
                              <td className="px-6 py-3.5 text-slate-400 hidden md:table-cell">
                                {formatDate(c.captured_at)}
                              </td>
                            </tr>
                          ))
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Coming soon */}
                <div className="bg-white rounded-2xl border border-slate-100 p-6">
                  <h2 className="font-semibold text-slate-900 mb-4">Coming soon</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {[
                      { icon: Layout, label: 'Custom landing pages' },
                      { icon: Mail, label: 'Automated follow-up emails' },
                      { icon: BarChart2, label: 'Retargeting pixels' },
                    ].map(({ icon: Icon, label }) => (
                      <div key={label} className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl opacity-50">
                        <Icon className="w-5 h-5 text-slate-400 shrink-0" />
                        <span className="text-sm text-slate-500 font-medium">{label}</span>
                        <span className="ml-auto text-xs bg-slate-200 text-slate-500 px-2 py-0.5 rounded-full font-medium">
                          Soon
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </>
        )}
      </main>
    </div>
  );
}
