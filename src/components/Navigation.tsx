import { QrCode, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Navigation() {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-slate-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2"
          >
            <QrCode className="w-6 h-6 text-slate-900" />
            <span className="text-xl font-bold text-slate-900">QRcraft</span>
          </button>

          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-slate-700 hover:text-slate-900 font-medium transition-colors">
              Features
            </a>
            <a href="#pricing" className="text-slate-700 hover:text-slate-900 font-medium transition-colors">
              Pricing
            </a>
            <a href="#faq" className="text-slate-700 hover:text-slate-900 font-medium transition-colors">
              FAQ
            </a>
          </div>

          <div className="flex items-center gap-4">
            <button disabled className="hidden md:block text-slate-400 font-medium cursor-not-allowed">
              Sign in — coming soon
            </button>
            <button onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })} className="hidden md:block px-5 py-2 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition-colors">
              Get started
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-700 hover:text-slate-900"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white/95 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            <button onClick={() => scrollToSection('features')} className="text-left text-slate-700 hover:text-slate-900 font-medium py-2 transition-colors">
              Features
            </button>
            <button onClick={() => scrollToSection('pricing')} className="text-left text-slate-700 hover:text-slate-900 font-medium py-2 transition-colors">
              Pricing
            </button>
            <button onClick={() => scrollToSection('faq')} className="text-left text-slate-700 hover:text-slate-900 font-medium py-2 transition-colors">
              FAQ
            </button>
            <div className="pt-2 mt-1 border-t border-slate-100">
              <button
                onClick={() => { navigate('/create'); setMobileMenuOpen(false); }}
                className="w-full py-3 bg-slate-900 text-white rounded-lg font-semibold text-sm hover:bg-slate-800 transition-colors"
              >
                Create free QR
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
