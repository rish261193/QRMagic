import { useEffect } from 'react';
import { QrCode } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Privacy() {
  const navigate = useNavigate();
  useEffect(() => { window.scrollTo(0, 0); document.title = 'Privacy Policy — QRcraft'; }, []);

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
          <h1 className="text-4xl font-bold text-white mb-3">Privacy Policy</h1>
          <p className="text-slate-400 text-sm">Last updated: April 2026</p>
        </div>

        <div className="space-y-8 text-slate-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Information we collect</h2>
            <p>When you create an account, we collect your email address and a hashed password. When you create QR codes, we store the destination URL, QR name, style preferences, and scan count. We do not collect payment card details — payments are processed securely by Stripe.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. How we use your information</h2>
            <p>We use your information to provide and improve QRcraft, send transactional emails (account confirmation, password reset), and process payments. We do not sell your personal data to third parties.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. Cookies</h2>
            <p>QRcraft uses essential cookies for authentication and session management only. We do not use advertising or tracking cookies. Our authentication is handled by Supabase, which uses secure HTTP-only cookies.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. Third parties</h2>
            <p>We use the following third-party services:</p>
            <ul className="list-disc list-inside space-y-1 mt-3 text-slate-400">
              <li><strong className="text-slate-300">Supabase</strong> — database and authentication</li>
              <li><strong className="text-slate-300">Stripe</strong> — payment processing</li>
              <li><strong className="text-slate-300">Vercel</strong> — hosting and deployment</li>
            </ul>
            <p className="mt-3">Each provider has their own privacy policy and data handling practices.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Data retention</h2>
            <p>Your QR codes and account data are retained as long as your account exists. You can delete your QR codes from your dashboard at any time. To delete your entire account and data, contact us at hello@qrcraft.co.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">6. Security</h2>
            <p>We use industry-standard security practices including encrypted connections (HTTPS), secure password hashing, and row-level security on our database. We never store plain-text passwords.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">7. Contact</h2>
            <p>For privacy questions or data requests, email us at{' '}
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
