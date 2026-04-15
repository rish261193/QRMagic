import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { QrCode, Check, ChevronDown, BarChart2, Mail, Layout } from 'lucide-react';

const GROWTH_LINK = import.meta.env.VITE_STRIPE_GROWTH_LINK as string | undefined;

const features = [
  {
    Icon: BarChart2,
    title: 'Scan Analytics',
    badge: null as string | null,
    items: [
      'See total scans per QR code',
      'Track peak scan times',
      'Know which QR performs best',
    ],
  },
  {
    Icon: Mail,
    title: 'Email Capture',
    badge: null,
    items: [
      'Add an email opt-in form to any QR scan',
      'Build your customer list automatically',
      'Every scan is a potential subscriber',
    ],
  },
  {
    Icon: Layout,
    title: 'Custom Landing Pages',
    badge: 'Coming soon',
    items: [
      'Create a branded page for each QR',
      'Add your logo, offer, and email form',
      'No website needed',
    ],
  },
];

const testimonials = [
  {
    quote: 'I captured 47 emails from my market stall last month. Never thought a QR code could do that.',
    name: 'Sarah',
    role: 'Etsy seller',
  },
  {
    quote: 'Changed my menu URL 3 times without reprinting a single flyer. Saves me money every season.',
    name: 'Marco',
    role: 'Food vendor',
  },
  {
    quote: 'Finally know which flyer campaign is working. The scan data changed how I spend on marketing.',
    name: 'James',
    role: 'Local retailer',
  },
];

const faqs = [
  {
    q: 'What happens if I cancel?',
    a: 'Your free QR codes stay active forever. You keep scan count tracking. Only Growth-exclusive features (email capture, advanced analytics) turn off.',
  },
  {
    q: 'Is there a contract?',
    a: 'No. Cancel any time from your account settings. No notice period, no cancellation fee.',
  },
  {
    q: 'Do I need the Editable Kit first?',
    a: 'No. Growth includes everything in the Editable QR Kit. You get edit-destination and analytics in one subscription.',
  },
  {
    q: 'Can I try before paying?',
    a: 'Yes. Sign up free and create QR codes with basic scan tracking. Upgrade to Growth when you\'re ready for email capture and full analytics.',
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

function CtaButton({ label }: { label: string }) {
  const navigate = useNavigate();
  function handleClick() {
    if (GROWTH_LINK) {
      window.open(GROWTH_LINK, '_blank', 'noopener,noreferrer');
    } else {
      navigate('/auth');
    }
  }
  return (
    <button
      onClick={handleClick}
      className="inline-flex items-center justify-center px-8 py-4 bg-teal-500 hover:bg-teal-400 text-white font-bold text-lg rounded-xl transition-colors"
    >
      {label}
    </button>
  );
}

export default function Growth() {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Growth Plan — $12/month — QRcraft';
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <header className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <button onClick={() => navigate('/')} className="flex items-center gap-2">
            <QrCode className="w-5 h-5 text-teal-400" />
            <span className="font-bold text-white text-lg">QRcraft</span>
          </button>
          <button
            onClick={() => navigate('/')}
            className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
          >
            ← Back to home
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center">
        <div className="inline-flex items-center gap-2 bg-teal-900/50 border border-teal-700 text-teal-300 text-sm font-medium px-4 py-1.5 rounded-full mb-8">
          $12/month · Cancel anytime
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
          Turn every scan into a customer
        </h1>
        <p className="text-lg sm:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          See who scans your QR, capture their email and bring them back. Built for small businesses that want to grow.
        </p>
        <CtaButton label="Start free trial" />
        <p className="text-slate-500 text-sm mt-4">Includes everything in Editable QR Kit</p>
      </section>

      {/* Features */}
      <section className="bg-slate-800/50 py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-14">Everything you need to grow</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((f) => (
              <div key={f.title} className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 bg-teal-500/20 rounded-xl flex items-center justify-center shrink-0">
                    <f.Icon className="w-5 h-5 text-teal-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white leading-snug">{f.title}</h3>
                    {f.badge && (
                      <span className="text-xs bg-amber-900/50 border border-amber-700 text-amber-400 px-2 py-0.5 rounded-full font-medium">
                        {f.badge}
                      </span>
                    )}
                  </div>
                </div>
                <ul className="space-y-3">
                  {f.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                      <span className="text-slate-400 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VS comparison */}
      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-teal-400 font-semibold text-sm uppercase tracking-wide mb-3">vs the competition</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Same analytics. A third of the price.</h2>
          <p className="text-slate-400 mb-12">Leading tools charge $29/month for dynamic QR codes and analytics. We charge $12.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-left">
            <div className="rounded-2xl border-2 border-teal-500 p-7 bg-teal-900/30">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-bold text-white text-lg">QRcraft Growth</span>
                <span className="text-xs bg-teal-500 text-white px-2 py-0.5 rounded-full font-semibold">You</span>
              </div>
              <p className="text-4xl font-bold text-teal-300 mb-5">
                $12<span className="text-base font-normal text-slate-400">/month</span>
              </p>
              <ul className="space-y-2.5">
                {[
                  'Scan analytics & tracking',
                  'Email capture forms',
                  'Edit destination anytime',
                  'Permanent free QR codes included',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-slate-300">
                    <Check className="w-4 h-4 text-teal-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border-2 border-slate-700 p-7">
              <div className="mb-1">
                <span className="font-bold text-slate-300 text-lg">Leading platforms</span>
              </div>
              <p className="text-4xl font-bold text-slate-600 mb-5">
                $29<span className="text-base font-normal text-slate-600">/month</span>
              </p>
              <ul className="space-y-2.5">
                {[
                  'Scan analytics & tracking',
                  'Email capture forms',
                  'Edit destination anytime',
                  'No permanent free tier',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                    <Check className="w-4 h-4 text-slate-700 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="bg-slate-800/50 py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">What early users are saying</h2>
            <p className="text-slate-500 text-sm">Early adopter quotes</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-slate-800 rounded-2xl p-6 border border-slate-700 flex flex-col">
                <p className="text-slate-300 leading-relaxed mb-5 flex-1">"{t.quote}"</p>
                <div>
                  <p className="font-semibold text-white text-sm">{t.name}</p>
                  <p className="text-slate-500 text-xs">{t.role}</p>
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
            Join small businesses turning scans into customers
          </h2>
          <p className="text-slate-400 mb-10">Start free. Upgrade when ready. Cancel anytime.</p>
          <CtaButton label="Start for $12/month" />
          <p className="text-slate-500 text-sm mt-4">Includes everything in Editable QR Kit</p>
        </div>
      </section>

      <div className="border-t border-slate-800 py-6 text-center">
        <p className="text-slate-400 text-sm">© {new Date().getFullYear()} QRcraft. All rights reserved.</p>
      </div>
    </div>
  );
}
