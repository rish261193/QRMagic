import { QrCode } from 'lucide-react';

const productLinks: { label: string; sectionId: string }[] = [
  { label: 'Features',  sectionId: 'features' },
  { label: 'Pricing',   sectionId: 'pricing'  },
  { label: 'Use Cases', sectionId: 'features' },
  { label: 'FAQ',       sectionId: 'faq'      },
];

const otherLinks: Record<string, string[]> = {
  Company: ['About', 'Blog', 'Contact', 'Support'],
  Legal:   ['Privacy', 'Terms', 'Security'],
};

export default function Footer() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <QrCode className="w-6 h-6 text-slate-900" />
              <span className="text-xl font-bold text-slate-900">QRcraft</span>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed">
              Turn every QR scan into a customer.
            </p>
          </div>

          {/* Product — scroll links */}
          <div>
            <h3 className="font-semibold text-slate-900 mb-4">Product</h3>
            <ul className="space-y-3">
              {productLinks.map(({ label, sectionId }) => (
                <li key={label}>
                  <button
                    onClick={() => scrollTo(sectionId)}
                    className="text-slate-600 hover:text-slate-900 text-sm transition-colors"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company + Legal — placeholder */}
          {Object.entries(otherLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-slate-900 mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((label) => (
                  <li key={label}>
                    <a href="#" className="text-slate-600 hover:text-slate-900 text-sm transition-colors">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-slate-200">
          <p className="text-center text-slate-600 text-sm">
            © {new Date().getFullYear()} QRcraft. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
