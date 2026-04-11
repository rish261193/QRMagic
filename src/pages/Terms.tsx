import { useEffect } from 'react';
import { QrCode } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Terms() {
  const navigate = useNavigate();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <header className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <button onClick={() => navigate('/')} className="flex items-center gap-2">
            <QrCode className="w-5 h-5 text-teal-400" />
            <span className="font-bold text-white text-lg">QRcraft</span>
          </button>
          <button onClick={() => navigate('/')} className="text-sm font-medium text-slate-400 hover:text-white transition-colors">
            ← Back to home
          </button>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-white mb-3">Terms of Service</h1>
          <p className="text-slate-400 text-sm">Last updated: April 2026</p>
        </div>

        <div className="space-y-8 text-slate-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Free tier</h2>
            <p>The free tier of QRcraft allows you to create permanent QR codes at no cost. Free QR codes never expire. Scan count tracking is included. Free accounts are subject to fair use limits to prevent abuse.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. Paid tiers</h2>
            <p>QRcraft offers two paid tiers:</p>
            <ul className="list-disc list-inside space-y-2 mt-3 text-slate-400">
              <li><strong className="text-slate-300">Editable QR Kit ($29 one-time)</strong> — a one-time purchase that unlocks the ability to edit QR code destinations at any time, forever. No monthly fees.</li>
              <li><strong className="text-slate-300">Growth Plan ($12/month)</strong> — a monthly subscription that includes everything in the Editable QR Kit plus advanced analytics, email capture, and custom landing pages.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. Refund policy</h2>
            <p>One-time purchases (Editable QR Kit) are non-refundable once the feature has been activated on your account. If you experience technical issues preventing use of paid features, contact hello@qrcraft.co and we will work to resolve it.</p>
            <p className="mt-2">Monthly subscriptions may be cancelled at any time. No refunds are issued for partial billing periods.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. Subscription cancellation</h2>
            <p>You may cancel your Growth Plan subscription at any time from your account settings. Cancellation takes effect at the end of your current billing period. After cancellation, your account reverts to the free tier.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. QR codes never expire</h2>
            <p>All QR codes created on QRcraft — including those on the free tier — will continue to work indefinitely, even if you cancel a paid subscription or close your account. The redirect infrastructure is maintained permanently. This is our core promise.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">6. Acceptable use</h2>
            <p>You may not use QRcraft to distribute malware, host phishing pages, or engage in any illegal activity. We reserve the right to suspend accounts that violate these terms.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">7. Changes to terms</h2>
            <p>We may update these terms from time to time. Continued use of QRcraft after changes constitutes acceptance of the updated terms. Material changes will be communicated by email.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">8. Contact</h2>
            <p>Questions about these terms? Email{' '}
              <a href="mailto:hello@qrcraft.co" className="text-teal-400 hover:text-teal-300 transition-colors">
                hello@qrcraft.co
              </a>.
            </p>
          </section>
        </div>
      </main>

      <footer className="border-t border-slate-800 py-6 text-center mt-8">
        <p className="text-slate-600 text-sm">© {new Date().getFullYear()} QRcraft. All rights reserved.</p>
      </footer>
    </div>
  );
}
