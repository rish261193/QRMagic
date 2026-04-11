import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, QrCode, Check, ChevronDown } from 'lucide-react';

const KIT_LINK = import.meta.env.VITE_STRIPE_KIT_LINK as string | undefined;

const steps = [
  {
    n: '01',
    title: 'Print your QR code on anything',
    desc: 'Menus, flyers, packaging, signage — print once and you\'re done.',
  },
  {
    n: '02',
    title: 'Your destination changes — update it in your dashboard',
    desc: 'Log in, find your QR, click the pencil icon next to the URL. New destination saved in seconds.',
  },
  {
    n: '03',
    title: 'Same printed QR, new destination. No reprinting needed.',
    desc: 'The QR code on your flyer never changes. Only where it points does.',
  },
];

const audiences = [
  {
    title: 'Restaurant owners',
    desc: 'Update your menu URL anytime — seasonal changes, new PDFs, delivery links.',
  },
  {
    title: 'Etsy sellers',
    desc: 'Point to new collections, seasonal sales, or holiday promotions without reprinting.',
  },
  {
    title: 'Event organizers',
    desc: 'Reuse QR codes across multiple events. Update the destination each time.',
  },
  {
    title: 'Local retailers',
    desc: 'Change your offers and promotions without printing new signage.',
  },
];

const competitors = [
  { name: 'QRcraft', price: '$29', period: 'one-time', editForever: true,  you: true  },
  { name: 'Bitly',   price: '$29', period: 'per month', editForever: false, you: false },
  { name: 'QR Tiger',price: '$7',  period: 'per month', editForever: false, you: false },
];

const faqs = [
  {
    q: 'Will my printed QR stop working?',
    a: 'Never. Your printed QR points to our redirect system, which we maintain indefinitely. It will always work.',
  },
  {
    q: 'How many times can I change the destination?',
    a: 'Unlimited. Update it once or a thousand times — no limit, no extra charge.',
  },
  {
    q: 'Is this really a one-time payment?',
    a: '$29 once, yours forever. No monthly fees, no annual renewals, no surprises.',
  },
  {
    q: 'What if I also want scan analytics?',
    a: 'Upgrade to the Growth plan ($12/month) at any time. Everything in this kit is included.',
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-slate-700 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left gap-4"
      >
        <span className="font-semibold text-white">{q}</span>
        <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && <p className="text-slate-400 pb-5 leading-relaxed">{a}</p>}
    </div>
  );
}

function CtaButton({ label, large = false }: { label: string; large?: boolean }) {
  const navigate = useNavigate();
  function handleClick() {
    if (KIT_LINK) {
      window.open(KIT_LINK, '_blank', 'noopener,noreferrer');
    } else {
      navigate('/auth');
    }
  }
  return (
    <button
      onClick={handleClick}
      className={`inline-flex items-center justify-center px-8 bg-teal-500 hover:bg-teal-400 text-white font-bold rounded-xl transition-colors ${large ? 'py-4 text-lg' : 'py-3.5 text-base'}`}
    >
      {label}
    </button>
  );
}

export default function EditableKit() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>
        <div className="flex items-center gap-2">
          <QrCode className="w-5 h-5 text-teal-400" />
          <span className="font-bold text-white text-lg">QRcraft</span>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center">
        <div className="inline-flex items-center gap-2 bg-teal-900/50 border border-teal-700 text-teal-300 text-sm font-medium px-4 py-1.5 rounded-full mb-8">
          One-time payment · No subscription ever
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
          Change your QR destination.<br className="hidden sm:block" /> Never reprint.
        </h1>
        <p className="text-lg sm:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          You printed 500 flyers. Your menu changed. Your website moved. With the Editable QR Kit, update where your QR points in seconds — the printed code stays the same.
        </p>
        <CtaButton label="Get Editable QR Kit — $29" large />
        <p className="text-slate-500 text-sm mt-4">One-time payment. Yours forever. No monthly fees.</p>
      </section>

      {/* How It Works */}
      <section className="bg-slate-800/50 py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-14">How it works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {steps.map((s) => (
              <div key={s.n} className="text-center">
                <div className="w-12 h-12 rounded-full bg-teal-500/20 border border-teal-500/40 flex items-center justify-center mx-auto mb-5">
                  <span className="text-teal-400 font-bold text-sm">{s.n}</span>
                </div>
                <h3 className="font-semibold text-white mb-3 text-lg leading-snug">{s.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-14">Who it's for</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {audiences.map((a) => (
              <div key={a.title} className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-white mb-1">{a.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{a.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VS Competitors */}
      <section className="bg-slate-800/50 py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-teal-400 font-semibold text-sm uppercase tracking-wide mb-3">The honest comparison</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">We charge once. They charge forever.</h2>
          <p className="text-slate-400 mb-12">Dynamic QR codes shouldn't cost $29/month. We priced this the way it should be.</p>

          <div className="rounded-2xl border border-slate-700 overflow-hidden text-left">
            <div className="grid grid-cols-4 bg-slate-700/60 px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wide">
              <div>Provider</div>
              <div className="text-center">Price</div>
              <div className="text-center">Billing</div>
              <div className="text-center">Edit forever</div>
            </div>
            {competitors.map((c) => (
              <div
                key={c.name}
                className={`grid grid-cols-4 border-t border-slate-700 px-4 py-3.5 text-sm items-center ${c.you ? 'bg-teal-900/30' : ''}`}
              >
                <div className={`font-semibold flex items-center gap-2 ${c.you ? 'text-teal-300' : 'text-slate-300'}`}>
                  {c.name}
                  {c.you && <span className="text-xs bg-teal-500 text-white px-1.5 py-0.5 rounded font-medium">You</span>}
                </div>
                <div className={`text-center font-bold ${c.you ? 'text-teal-300' : 'text-slate-400'}`}>{c.price}</div>
                <div className={`text-center ${c.you ? 'text-teal-400' : 'text-slate-500'}`}>{c.period}</div>
                <div className="flex justify-center">
                  {c.editForever
                    ? <Check className="w-5 h-5 text-teal-400" />
                    : <span className="text-slate-600 text-lg leading-none">✕</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">Frequently asked</h2>
          {faqs.map((f) => <FAQItem key={f.q} q={f.q} a={f.a} />)}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-teal-900/40 border-t border-teal-800/50 py-16 sm:py-20 text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Stop paying monthly for something you should own.
          </h2>
          <p className="text-slate-400 mb-10">One payment. No expiry. Edit forever.</p>
          <CtaButton label="Get Editable QR Kit — $29 one-time" large />
        </div>
      </section>

      <div className="border-t border-slate-800 py-6 text-center">
        <p className="text-slate-600 text-sm">© {new Date().getFullYear()} QRcraft. All rights reserved.</p>
      </div>
    </div>
  );
}
