import { useEffect } from 'react';
import { QrCode, MessageCircle, CreditCard, Bug, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const reasons = [
  {
    Icon: MessageCircle,
    title: 'General questions',
    desc: 'Product questions, feature requests, or just want to say hi.',
    email: 'hello@qrcraft.co',
  },
  {
    Icon: CreditCard,
    title: 'Billing and payments',
    desc: 'Questions about charges, refunds, or your subscription.',
    email: 'billing@qrcraft.co',
  },
  {
    Icon: Bug,
    title: 'Bug reports',
    desc: 'Found something broken? We want to know.',
    email: 'bugs@qrcraft.co',
  },
];

export default function Contact() {
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

      {/* Hero */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
          Get in touch
        </h1>
        <p className="text-lg text-slate-400">
          We're a small team and we read every message.
        </p>

        <div className="mt-10 inline-flex items-center gap-3 bg-slate-800 border border-slate-700 rounded-2xl px-8 py-5">
          <div>
            <p className="text-slate-400 text-sm mb-1">General contact</p>
            <a
              href="mailto:hello@qrcraft.co"
              className="text-2xl font-bold text-teal-400 hover:text-teal-300 transition-colors"
            >
              hello@qrcraft.co
            </a>
          </div>
        </div>
      </section>

      {/* Contact reason cards */}
      <section className="bg-slate-800/50 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white text-center mb-10">What can we help with?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reasons.map((r) => (
              <div key={r.title} className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
                <div className="w-10 h-10 bg-teal-500/20 rounded-xl flex items-center justify-center mb-4">
                  <r.Icon className="w-5 h-5 text-teal-400" />
                </div>
                <h3 className="font-semibold text-white mb-2">{r.title}</h3>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">{r.desc}</p>
                <a
                  href={`mailto:${r.email}`}
                  className="text-teal-400 hover:text-teal-300 text-sm font-medium transition-colors"
                >
                  {r.email}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Response time */}
      <section className="py-16 text-center">
        <div className="max-w-md mx-auto px-4">
          <div className="flex items-center justify-center gap-2 text-slate-400">
            <Clock className="w-4 h-4 text-teal-400" />
            <p className="text-sm">We typically respond within 24 hours</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-800 py-6 text-center">
        <p className="text-slate-600 text-sm">© {new Date().getFullYear()} QRcraft. All rights reserved.</p>
      </footer>
    </div>
  );
}
