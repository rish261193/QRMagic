import { QrCode, Check, TrendingUp } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 sm:pt-24 sm:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left column — text */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-emerald-50 border border-emerald-200 rounded-full mb-8">
              <QrCode className="w-5 h-5 text-emerald-600" />
              <span className="text-base font-semibold text-emerald-900">Free QR codes that never expire</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-tight">
              Turn every QR scan into a customer
            </h1>

            <p className="text-xl sm:text-2xl text-slate-600 mb-10 leading-relaxed">
              Create permanent QR codes for free. Upgrade when you want to track scans, capture emails, and drive repeat sales.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <button onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })} className="px-8 py-4 bg-slate-900 text-white rounded-lg font-semibold text-lg hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/10">
                Create free QR
              </button>
              <button onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })} className="px-8 py-4 bg-white text-slate-900 border-2 border-slate-200 rounded-lg font-semibold text-lg hover:border-slate-300 transition-colors">
                See how it works
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto lg:mx-0">
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

          {/* Right column — QR mockup card */}
          <div className="flex justify-center lg:justify-end">
            <div className="bg-white rounded-2xl shadow-2xl shadow-slate-900/10 p-8 w-72">
              <svg viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto mb-6">
                {/* Top-left finder pattern */}
                <rect x="0" y="0" width="7" height="7" fill="#0f172a"/>
                <rect x="1" y="1" width="5" height="5" fill="white"/>
                <rect x="2" y="2" width="3" height="3" fill="#0f172a"/>
                {/* Top-right finder pattern */}
                <rect x="14" y="0" width="7" height="7" fill="#0f172a"/>
                <rect x="15" y="1" width="5" height="5" fill="white"/>
                <rect x="16" y="2" width="3" height="3" fill="#0f172a"/>
                {/* Bottom-left finder pattern */}
                <rect x="0" y="14" width="7" height="7" fill="#0f172a"/>
                <rect x="1" y="15" width="5" height="5" fill="white"/>
                <rect x="2" y="16" width="3" height="3" fill="#0f172a"/>
                {/* Timing patterns */}
                <rect x="8" y="6" width="1" height="1" fill="#0f172a"/>
                <rect x="10" y="6" width="1" height="1" fill="#0f172a"/>
                <rect x="12" y="6" width="1" height="1" fill="#0f172a"/>
                <rect x="6" y="8" width="1" height="1" fill="#0f172a"/>
                <rect x="6" y="10" width="1" height="1" fill="#0f172a"/>
                <rect x="6" y="12" width="1" height="1" fill="#0f172a"/>
                {/* Data modules — top strip */}
                <rect x="8" y="0" width="1" height="1" fill="#0f172a"/>
                <rect x="10" y="0" width="1" height="1" fill="#0f172a"/>
                <rect x="12" y="0" width="1" height="1" fill="#0f172a"/>
                <rect x="9" y="1" width="1" height="1" fill="#0f172a"/>
                <rect x="11" y="1" width="1" height="1" fill="#0f172a"/>
                <rect x="8" y="2" width="2" height="1" fill="#0f172a"/>
                <rect x="11" y="2" width="2" height="1" fill="#0f172a"/>
                <rect x="9" y="3" width="1" height="1" fill="#0f172a"/>
                <rect x="12" y="3" width="1" height="1" fill="#0f172a"/>
                <rect x="8" y="4" width="2" height="1" fill="#0f172a"/>
                <rect x="11" y="4" width="2" height="1" fill="#0f172a"/>
                <rect x="9" y="5" width="2" height="1" fill="#0f172a"/>
                <rect x="12" y="5" width="1" height="1" fill="#0f172a"/>
                {/* Data modules — middle band */}
                <rect x="0" y="8" width="1" height="1" fill="#0f172a"/>
                <rect x="2" y="8" width="2" height="1" fill="#0f172a"/>
                <rect x="5" y="8" width="1" height="1" fill="#0f172a"/>
                <rect x="8" y="8" width="2" height="1" fill="#0f172a"/>
                <rect x="11" y="8" width="1" height="1" fill="#0f172a"/>
                <rect x="13" y="8" width="2" height="1" fill="#0f172a"/>
                <rect x="16" y="8" width="2" height="1" fill="#0f172a"/>
                <rect x="19" y="8" width="2" height="1" fill="#0f172a"/>
                <rect x="1" y="9" width="2" height="1" fill="#0f172a"/>
                <rect x="5" y="9" width="1" height="1" fill="#0f172a"/>
                <rect x="8" y="9" width="1" height="1" fill="#0f172a"/>
                <rect x="10" y="9" width="2" height="1" fill="#0f172a"/>
                <rect x="14" y="9" width="1" height="1" fill="#0f172a"/>
                <rect x="17" y="9" width="1" height="1" fill="#0f172a"/>
                <rect x="20" y="9" width="1" height="1" fill="#0f172a"/>
                <rect x="0" y="10" width="3" height="1" fill="#0f172a"/>
                <rect x="4" y="10" width="2" height="1" fill="#0f172a"/>
                <rect x="9" y="10" width="1" height="1" fill="#0f172a"/>
                <rect x="12" y="10" width="2" height="1" fill="#0f172a"/>
                <rect x="15" y="10" width="1" height="1" fill="#0f172a"/>
                <rect x="18" y="10" width="2" height="1" fill="#0f172a"/>
                <rect x="2" y="11" width="1" height="1" fill="#0f172a"/>
                <rect x="5" y="11" width="2" height="1" fill="#0f172a"/>
                <rect x="8" y="11" width="2" height="1" fill="#0f172a"/>
                <rect x="11" y="11" width="1" height="1" fill="#0f172a"/>
                <rect x="14" y="11" width="2" height="1" fill="#0f172a"/>
                <rect x="17" y="11" width="1" height="1" fill="#0f172a"/>
                <rect x="19" y="11" width="2" height="1" fill="#0f172a"/>
                <rect x="0" y="12" width="2" height="1" fill="#0f172a"/>
                <rect x="4" y="12" width="1" height="1" fill="#0f172a"/>
                <rect x="7" y="12" width="1" height="1" fill="#0f172a"/>
                <rect x="9" y="12" width="2" height="1" fill="#0f172a"/>
                <rect x="13" y="12" width="1" height="1" fill="#0f172a"/>
                <rect x="16" y="12" width="2" height="1" fill="#0f172a"/>
                <rect x="20" y="12" width="1" height="1" fill="#0f172a"/>
                {/* Data modules — bottom strip */}
                <rect x="8" y="14" width="2" height="1" fill="#0f172a"/>
                <rect x="11" y="14" width="1" height="1" fill="#0f172a"/>
                <rect x="13" y="14" width="2" height="1" fill="#0f172a"/>
                <rect x="16" y="14" width="1" height="1" fill="#0f172a"/>
                <rect x="18" y="14" width="2" height="1" fill="#0f172a"/>
                <rect x="9" y="15" width="1" height="1" fill="#0f172a"/>
                <rect x="12" y="15" width="1" height="1" fill="#0f172a"/>
                <rect x="14" y="15" width="2" height="1" fill="#0f172a"/>
                <rect x="17" y="15" width="1" height="1" fill="#0f172a"/>
                <rect x="20" y="15" width="1" height="1" fill="#0f172a"/>
                <rect x="8" y="16" width="1" height="1" fill="#0f172a"/>
                <rect x="10" y="16" width="2" height="1" fill="#0f172a"/>
                <rect x="13" y="16" width="1" height="1" fill="#0f172a"/>
                <rect x="15" y="16" width="2" height="1" fill="#0f172a"/>
                <rect x="19" y="16" width="1" height="1" fill="#0f172a"/>
                <rect x="9" y="17" width="2" height="1" fill="#0f172a"/>
                <rect x="12" y="17" width="2" height="1" fill="#0f172a"/>
                <rect x="16" y="17" width="1" height="1" fill="#0f172a"/>
                <rect x="18" y="17" width="2" height="1" fill="#0f172a"/>
                <rect x="8" y="18" width="1" height="1" fill="#0f172a"/>
                <rect x="11" y="18" width="1" height="1" fill="#0f172a"/>
                <rect x="13" y="18" width="2" height="1" fill="#0f172a"/>
                <rect x="17" y="18" width="1" height="1" fill="#0f172a"/>
                <rect x="20" y="18" width="1" height="1" fill="#0f172a"/>
                <rect x="9" y="19" width="1" height="1" fill="#0f172a"/>
                <rect x="12" y="19" width="1" height="1" fill="#0f172a"/>
                <rect x="14" y="19" width="2" height="1" fill="#0f172a"/>
                <rect x="18" y="19" width="1" height="1" fill="#0f172a"/>
                <rect x="8" y="20" width="2" height="1" fill="#0f172a"/>
                <rect x="11" y="20" width="2" height="1" fill="#0f172a"/>
                <rect x="15" y="20" width="1" height="1" fill="#0f172a"/>
                <rect x="17" y="20" width="2" height="1" fill="#0f172a"/>
                <rect x="20" y="20" width="1" height="1" fill="#0f172a"/>
              </svg>

              <div className="flex items-center justify-between bg-emerald-50 rounded-xl px-4 py-3">
                <div>
                  <p className="text-xs text-slate-500 font-medium">Scans today</p>
                  <p className="text-2xl font-bold text-slate-900">47</p>
                </div>
                <div className="flex items-center gap-1 text-emerald-600">
                  <TrendingUp className="w-5 h-5" />
                  <span className="text-sm font-semibold">+12%</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
