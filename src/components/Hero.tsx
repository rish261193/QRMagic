import { QrCode, Check } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 sm:pt-24 sm:pb-32">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 border border-emerald-200 rounded-full mb-8">
            <QrCode className="w-4 h-4 text-emerald-600" />
            <span className="text-sm font-medium text-emerald-900">Free QR codes that never expire</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-tight">
            Turn every QR scan into a customer
          </h1>

          <p className="text-xl sm:text-2xl text-slate-600 mb-10 leading-relaxed">
            Create permanent QR codes for free. Upgrade when you want to track scans, capture emails, and drive repeat sales.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })} className="px-8 py-4 bg-slate-900 text-white rounded-lg font-semibold text-lg hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/10">
              Create free QR
            </button>
            <button onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })} className="px-8 py-4 bg-white text-slate-900 border-2 border-slate-200 rounded-lg font-semibold text-lg hover:border-slate-300 transition-colors">
              See how it works
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              'Permanent QR codes (never expire)',
              'No subscriptions required',
              'Works after printing',
              'Upgrade only for growth tools'
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2 text-slate-700 text-sm">
                <Check className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span className="text-left">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
