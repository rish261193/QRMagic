import { QrCode } from 'lucide-react';

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-slate-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <QrCode className="w-6 h-6 text-slate-900" />
            <span className="text-xl font-bold text-slate-900">QRcraft</span>
          </div>

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
            <button className="text-slate-700 hover:text-slate-900 font-medium transition-colors">
              Sign in
            </button>
            <button className="px-5 py-2 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition-colors">
              Get started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
