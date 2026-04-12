import { useEffect } from 'react';
import { QrCode, Shield, Package, Infinity } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const values = [
  {
    Icon: Shield,
    title: 'Honest pricing',
    desc: 'No hidden fees, no hostage codes. You pay once for what you need — we don\'t hold your QR codes hostage behind a subscription.',
  },
  {
    Icon: Package,
    title: 'Built for the real world',
    desc: 'Designed for packaging, flyers, market stalls and menus. Not for enterprise dashboards or marketing agencies.',
  },
  {
    Icon: Infinity,
    title: 'Permanence',
    desc: 'Your QR code works forever — guaranteed. No subscription required to keep the lights on.',
  },
];

export default function About() {
  const navigate = useNavigate();
  useEffect(() => { window.scrollTo(0, 0); document.title = 'About — QRcraft'; }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <header className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <button onClick={() => navigate('/')} className="flex items-center gap-2">
            <QrCode className="w-5 h-5 text-teal-400" />
            <span className="font-bold text-white text-lg">QRcraft</span>
          </button>
          <button onClick={() => navigate(-1)} className="text-sm font-medium text-slate-400 hover:text-white transition-colors">
            ← Back to home
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center">
        <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
          Built for the real world
        </h1>
        <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
          QRcraft was built because small businesses deserve better than paying $200/year just to keep a QR code working.
        </p>
      </section>

      {/* Story */}
      <section className="bg-slate-800/50 py-16 sm:py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Our story</h2>
          <div className="space-y-4 text-slate-400 leading-relaxed text-lg">
            <p>
              We print things on packaging, menus and flyers — and we need QR codes that work forever, not until a subscription lapses.
            </p>
            <p>
              The problem with every other QR code service is the same: they charge you every month just to keep the redirect alive. Miss a payment, and your printed QR codes become dead ends. For a market stall owner or an Etsy seller, that's not acceptable.
            </p>
            <p>
              QRcraft is different. Create a free QR code. It works forever. When you're ready to edit destinations, buy the kit once. When you want to capture emails and track analytics, subscribe to Growth. Cancel anytime — your QR codes still work.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-teal-900/30 border border-teal-800 rounded-2xl p-10">
            <p className="text-teal-400 font-semibold text-sm uppercase tracking-wide mb-4">Our mission</p>
            <p className="text-2xl sm:text-3xl font-bold text-white leading-snug">
              Permanent QR codes for every small business. Pay for growth tools only when you need them.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-slate-800/50 py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-14">What we believe</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v) => (
              <div key={v.title} className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
                <div className="w-12 h-12 bg-teal-500/20 rounded-xl flex items-center justify-center mb-5">
                  <v.Icon className="w-6 h-6 text-teal-400" />
                </div>
                <h3 className="font-semibold text-white text-lg mb-3">{v.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 text-center">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-4">Try it for free</h2>
          <p className="text-slate-400 mb-8">Create your first QR code in under a minute. No account required.</p>
          <button
            onClick={() => navigate('/create')}
            className="px-8 py-3.5 bg-teal-600 text-white rounded-xl font-semibold hover:bg-teal-500 transition-colors"
          >
            Create free QR code →
          </button>
        </div>
      </section>

      <footer className="border-t border-slate-800 py-6 text-center">
        <p className="text-slate-600 text-sm">© {new Date().getFullYear()} QRcraft. All rights reserved.</p>
      </footer>
    </div>
  );
}
