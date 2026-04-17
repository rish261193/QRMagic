import { QrCode } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const scrollLinks: { label: string; sectionId: string }[] = [
  { label: 'Features',  sectionId: 'features' },
  { label: 'Pricing',   sectionId: 'pricing'  },
  { label: 'Use Cases', sectionId: 'features' },
  { label: 'FAQ',       sectionId: 'faq'      },
];

const pageLinks: { label: string; href: string }[] = [
  { label: 'Editable QR Kit', href: '/editable' },
  { label: 'Growth Plan',     href: '/growth'   },
];

const companyLinks: { label: string; href: string }[] = [
  { label: 'About',   href: '/about'   },
  { label: 'Blog',    href: '/blog'    },
  { label: 'Contact', href: '/contact' },
  { label: 'Support', href: '/contact' },
];

const legalLinks: { label: string; href: string }[] = [
  { label: 'Privacy',  href: '/privacy' },
  { label: 'Terms',    href: '/terms'   },
  { label: 'Security', href: '/contact' },
];

export default function Footer() {
  const navigate = useNavigate();
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <QrCode className="w-6 h-6 text-teal-400" />
              <span className="text-xl font-bold text-white">QRcraft</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Turn every QR scan into a customer.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold text-white mb-4">Product</h3>
            <ul className="space-y-3">
              {scrollLinks.map(({ label, sectionId }) => (
                <li key={label}>
                  <button
                    onClick={() => scrollTo(sectionId)}
                    className="text-slate-400 hover:text-white text-sm transition-colors"
                  >
                    {label}
                  </button>
                </li>
              ))}
              {pageLinks.map(({ label, href }) => (
                <li key={label}>
                  <button
                    onClick={() => navigate(href)}
                    className="text-slate-400 hover:text-white text-sm transition-colors"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map(({ label, href }) => (
                <li key={label}>
                  <button
                    onClick={() => navigate(href)}
                    className="text-slate-400 hover:text-white text-sm transition-colors"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-3">
              {legalLinks.map(({ label, href }) => (
                <li key={label}>
                  <button
                    onClick={() => navigate(href)}
                    className="text-slate-400 hover:text-white text-sm transition-colors"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800">
          <p className="text-center text-slate-500 text-sm">
            © {new Date().getFullYear()} QRcraft. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
