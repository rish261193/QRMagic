import { QrCode, Check, Clock, Mail } from 'lucide-react';

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

              {/* QR code — gradient circles with center logo */}
              <div className="relative mb-3">
              <svg viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                <defs>
                  <linearGradient id="qrGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0f172a" />
                    <stop offset="100%" stopColor="#0d9488" />
                  </linearGradient>
                </defs>

                {/* Top-left finder pattern */}
                <rect x="0.2" y="0.2" width="6.6" height="6.6" rx="1.2" fill="url(#qrGradient)"/>
                <rect x="1.2" y="1.2" width="4.6" height="4.6" rx="0.8" fill="white"/>
                <rect x="2.2" y="2.2" width="2.6" height="2.6" rx="0.5" fill="url(#qrGradient)"/>

                {/* Top-right finder pattern */}
                <rect x="14.2" y="0.2" width="6.6" height="6.6" rx="1.2" fill="url(#qrGradient)"/>
                <rect x="15.2" y="1.2" width="4.6" height="4.6" rx="0.8" fill="white"/>
                <rect x="16.2" y="2.2" width="2.6" height="2.6" rx="0.5" fill="url(#qrGradient)"/>

                {/* Bottom-left finder pattern */}
                <rect x="0.2" y="14.2" width="6.6" height="6.6" rx="1.2" fill="url(#qrGradient)"/>
                <rect x="1.2" y="15.2" width="4.6" height="4.6" rx="0.8" fill="white"/>
                <rect x="2.2" y="16.2" width="2.6" height="2.6" rx="0.5" fill="url(#qrGradient)"/>

                {/* Timing pattern */}
                <circle cx="8.5" cy="6.5" r="0.4" fill="url(#qrGradient)"/>
                <circle cx="10.5" cy="6.5" r="0.4" fill="url(#qrGradient)"/>
                <circle cx="12.5" cy="6.5" r="0.4" fill="url(#qrGradient)"/>
                <circle cx="6.5" cy="8.5" r="0.4" fill="url(#qrGradient)"/>
                <circle cx="6.5" cy="10.5" r="0.4" fill="url(#qrGradient)"/>
                <circle cx="6.5" cy="12.5" r="0.4" fill="url(#qrGradient)"/>

                {/* Data modules — top strip */}
                <circle cx="8.5" cy="0.5" r="0.4" fill="url(#qrGradient)"/>
                <circle cx="10.5" cy="0.5" r="0.4" fill="url(#qrGradient)"/>
                <circle cx="12.5" cy="0.5" r="0.4" fill="url(#qrGradient)"/>
                <circle cx="9.5" cy="1.5" r="0.4" fill="url(#qrGradient)"/>
                <circle cx="11.5" cy="1.5" r="0.4" fill="url(#qrGradient)"/>
                <circle cx="8.5" cy="2.5" r="0.4" fill="url(#qrGradient)"/>
                <circle cx="9.5" cy="2.5" r="0.4" fill="url(#qrGradient)"/>
                <circle cx="11.5" cy="2.5" r="0.4" fill="url(#qrGradient)"/>
                <circle cx="12.5" cy="2.5" r="0.4" fill="url(#qrGradient)"/>
                <circle cx="9.5" cy="3.5" r="0.4" fill="url(#qrGradient)"/>
                <circle cx="12.5" cy="3.5" r="0.4" fill="url(#qrGradient)"/>
                <circle cx="8.5" cy="4.5" r="0.4" fill="url(#qrGradient)"/>
                <circle cx="9.5" cy="4.5" r="0.4" fill="url(#qrGradient)"/>
                <circle cx="11.5" cy="4.5" r="0.4" fill="url(#qrGradient)"/>
                <circle cx="12.5" cy="4.5" r="0.4" fill="url(#qrGradient)"/>
                <circle cx="9.5" cy="5.5" r="0.4" fill="url(#qrGradient)"/>
                <circle cx="10.5" cy="5.5" r="0.4" fill="url(#qrGradient)"/>
                <circle cx="12.5" cy="5.5" r="0.4" fill="url(#qrGradient)"/>

                {/* Data modules — middle band */}
                <circle cx="0.5" cy="8.5" r="0.4" fill="url(#qrGradient)"/>
                <circle cx="2.5" cy="8.5" r="0.4" fill="url(#qrGradient)"/>
                <circle cx="3.5" cy="8.5" r="0.4" fill="url(#qrGradient)"/>
                <circle cx="5.5" cy="8.5" r="0.4" fill="url(#qrGradient)"/>
                <circle cx="8.5" cy="8.5" r="0.4" fill="url(#qrGradient)"/>
                <circle cx="9.5" cy="8.5" r="0.4" fill="url(#qrGradient)"/>
                <circle cx="11.5" cy="8.5" r="0.4" fill="url(#qrGradient)"/>
                <circle cx="13.5" cy="8.5" r="0.4" fill="url(#qrGradient)"/>
                <circle cx="14.5" cy="8.5" r="0.4" fill="url(#qrGradient)"/>
                <circle cx="16.5" cy="8.5" r="0.4" fill="url(#qrGradient)"/>
                <circle cx="17.5" cy="8.5" r="0.4" fill="url(#qrGradient)"/>
                <circle cx="19.5" cy="8.5" r="0.4" fill="url(#qrGradient)"/>
                <circle cx="20.5" cy="8.5" r="0.4" fill="url(#qrGradient)"/>
                <circle cx="1.5" cy="9.5" r="0.4" fill="url(#qrGradient)"/>
                <circle cx="2.5" cy="9.5" r="0.4" fill="url(#qrGradient)"/>
                <circle cx="5.5" cy="9.5" r="0.4" fill="url(#qrGradient)"/>
                <circle cx="8.5" cy="9.5" r="0.4" fill="url(#qrGradient)"/>
                <circle cx="10.5" cy="9.5" r="0.4" fill="url(#qrGradient)"/>
                <circle cx="11.5" cy="9.5" r="0.4" fill="url(#qrGradient)"/>
                <circle cx="14.5" cy="9.5" r="0.4" fill="url(#qrGradient)"/>
                <circle cx="17.5" cy="9.5" r="0.4" fill="url(#qrGradient)"/>
                <circle cx="20.5" cy="9.5" r="0.4" fill="url(#qrGradient)"/>
                <circle cx="0.5" cy="10.5" r="0.4" fill="url(#qrGradient)"/>
                <circle cx="1.5" cy="10.5" r="0.4" fill="url(#qrGradient)"/>
                <circle cx="2.5" cy="10.5" r="0.4" fill="url(#qrGradient)"/>
                <circle cx="4.5" cy="10.5" r="0.4" fill="url(#qrGradient)"/>
                <circle cx="5.5" cy="10.5" r="0.4" fill="url(#qrGradient)"/>
                <circle cx="9.5" cy="10.5" r="0.4" fill="url(#qrGradient)"/>
                <circle cx="12.5" cy="10.5" r="0.4" fill="url(#qrGradient)"/>
                <circle cx="13.5" cy="10.5" r="0.4" fill="url(#qrGradient)"/>
                <circle cx="15.5" cy="10.5" r="0.4" fill="url(#qrGradient)"/>
                <circle cx="18.5" cy="10.5" r="0.4" fill="url(#qrGradient)"/>
                <circle cx="19.5" cy="10.5" r="0.4" fill="url(#qrGradient)"/>
                <circle cx="2.5" cy="11.5" r="0.4" fill="url(#qrGradient)"/>
                <circle cx="5.5" cy="11.5" r="0.4" fill="url(#qrGradient)"/>
                <circle cx="6.5" cy="11.5" r="0.4" fill="url(#qrGradient)"/>
                <circle cx="8.5" cy="11.5" r="0.4" fill="url(#qrGradient)"/>
                <circle cx="9.5" cy="11.5" r="0.4" fill="url(#qrGradient)"/>
                <circle cx="11.5" cy="11.5" r="0.4" fill="url(#qrGradient)"/>
                <circle cx="14.5" cy="11.5" r="0.4" fill="url(#qrGradient)"/>
                <circle cx="15.5" cy="11.5" r="0.4" fill="url(#qrGradient)"/>
                <circle cx="17.5" cy="11.5" r="0.4" fill="url(#qrGradient)"/>
                <circle cx="19.5" cy="11.5" r="0.4" fill="url(#qrGradient)"/>
                <circle cx="20.5" cy="11.5" r="0.4" fill="url(#qrGradient)"/>
                <circle cx="0.5" cy="12.5" r="0.4" fill="url(#qrGradient)"/>
                <circle cx="1.5" cy="12.5" r="0.4" fill="url(#qrGradient)"/>
                <circle cx="4.5" cy="12.5" r="0.4" fill="url(#qrGradient)"/>
                <circle cx="7.5" cy="12.5" r="0.4" fill="url(#qrGradient)"/>
                <circle cx="9.5" cy="12.5" r="0.4" fill="url(#qrGradient)"/>
                <circle cx="10.5" cy="12.5" r="0.4" fill="url(#qrGradient)"/>
                <circle cx="13.5" cy="12.5" r="0.4" fill="url(#qrGradient)"/>
                <circle cx="16.5" cy="12.5" r="0.4" fill="url(#qrGradient)"/>
                <circle cx="17.5" cy="12.5" r="0.4" fill="url(#qrGradient)"/>
                <circle cx="20.5" cy="12.5" r="0.4" fill="url(#qrGradient)"/>

                {/* Data modules — bottom strip */}
                <circle cx="8.5" cy="14.5" r="0.4" fill="url(#qrGradient)"/>
                <circle cx="9.5" cy="14.5" r="0.4" fill="url(#qrGradient)"/>
                <circle cx="11.5" cy="14.5" r="0.4" fill="url(#qrGradient)"/>
                <circle cx="13.5" cy="14.5" r="0.4" fill="url(#qrGradient)"/>
                <circle cx="14.5" cy="14.5" r="0.4" fill="url(#qrGradient)"/>
                <circle cx="16.5" cy="14.5" r="0.4" fill="url(#qrGradient)"/>
                <circle cx="18.5" cy="14.5" r="0.4" fill="url(#qrGradient)"/>
                <circle cx="19.5" cy="14.5" r="0.4" fill="url(#qrGradient)"/>
                <circle cx="9.5" cy="15.5" r="0.4" fill="url(#qrGradient)"/>
                <circle cx="12.5" cy="15.5" r="0.4" fill="url(#qrGradient)"/>
                <circle cx="14.5" cy="15.5" r="0.4" fill="url(#qrGradient)"/>
                <circle cx="15.5" cy="15.5" r="0.4" fill="url(#qrGradient)"/>
                <circle cx="17.5" cy="15.5" r="0.4" fill="url(#qrGradient)"/>
                <circle cx="20.5" cy="15.5" r="0.4" fill="url(#qrGradient)"/>
                <circle cx="8.5" cy="16.5" r="0.4" fill="url(#qrGradient)"/>
                <circle cx="10.5" cy="16.5" r="0.4" fill="url(#qrGradient)"/>
                <circle cx="11.5" cy="16.5" r="0.4" fill="url(#qrGradient)"/>
                <circle cx="13.5" cy="16.5" r="0.4" fill="url(#qrGradient)"/>
                <circle cx="15.5" cy="16.5" r="0.4" fill="url(#qrGradient)"/>
                <circle cx="16.5" cy="16.5" r="0.4" fill="url(#qrGradient)"/>
                <circle cx="19.5" cy="16.5" r="0.4" fill="url(#qrGradient)"/>
                <circle cx="9.5" cy="17.5" r="0.4" fill="url(#qrGradient)"/>
                <circle cx="10.5" cy="17.5" r="0.4" fill="url(#qrGradient)"/>
                <circle cx="12.5" cy="17.5" r="0.4" fill="url(#qrGradient)"/>
                <circle cx="13.5" cy="17.5" r="0.4" fill="url(#qrGradient)"/>
                <circle cx="16.5" cy="17.5" r="0.4" fill="url(#qrGradient)"/>
                <circle cx="18.5" cy="17.5" r="0.4" fill="url(#qrGradient)"/>
                <circle cx="19.5" cy="17.5" r="0.4" fill="url(#qrGradient)"/>
                <circle cx="8.5" cy="18.5" r="0.4" fill="url(#qrGradient)"/>
                <circle cx="11.5" cy="18.5" r="0.4" fill="url(#qrGradient)"/>
                <circle cx="13.5" cy="18.5" r="0.4" fill="url(#qrGradient)"/>
                <circle cx="14.5" cy="18.5" r="0.4" fill="url(#qrGradient)"/>
                <circle cx="17.5" cy="18.5" r="0.4" fill="url(#qrGradient)"/>
                <circle cx="20.5" cy="18.5" r="0.4" fill="url(#qrGradient)"/>
                <circle cx="9.5" cy="19.5" r="0.4" fill="url(#qrGradient)"/>
                <circle cx="12.5" cy="19.5" r="0.4" fill="url(#qrGradient)"/>
                <circle cx="14.5" cy="19.5" r="0.4" fill="url(#qrGradient)"/>
                <circle cx="15.5" cy="19.5" r="0.4" fill="url(#qrGradient)"/>
                <circle cx="18.5" cy="19.5" r="0.4" fill="url(#qrGradient)"/>
                <circle cx="8.5" cy="20.5" r="0.4" fill="url(#qrGradient)"/>
                <circle cx="9.5" cy="20.5" r="0.4" fill="url(#qrGradient)"/>
                <circle cx="11.5" cy="20.5" r="0.4" fill="url(#qrGradient)"/>
                <circle cx="12.5" cy="20.5" r="0.4" fill="url(#qrGradient)"/>
                <circle cx="15.5" cy="20.5" r="0.4" fill="url(#qrGradient)"/>
                <circle cx="17.5" cy="20.5" r="0.4" fill="url(#qrGradient)"/>
                <circle cx="18.5" cy="20.5" r="0.4" fill="url(#qrGradient)"/>
                <circle cx="20.5" cy="20.5" r="0.4" fill="url(#qrGradient)"/>

                {/* Center logo — white circle with store icon */}
                <circle cx="10.5" cy="10.5" r="2.3" fill="white" stroke="#e2e8f0" strokeWidth="0.15"/>
                <polygon points="9.3,10.5 10.5,9.2 11.7,10.5" fill="url(#qrGradient)"/>
                <rect x="9.5" y="10.4" width="2" height="1.6" rx="0.2" fill="url(#qrGradient)"/>
                <rect x="10.1" y="11.1" width="0.8" height="0.9" rx="0.1" fill="white"/>
              </svg>

              {/* Scan me button */}
              <button className="w-full py-2 mb-4 text-sm font-semibold text-slate-500 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
                Scan me →
              </button>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-emerald-50 rounded-xl px-4 py-3">
                  <div className="flex items-center gap-1.5 mb-1">
                    <Clock className="w-4 h-4 text-emerald-600" />
                    <span className="text-sm font-bold text-slate-900">2–4pm</span>
                  </div>
                  <p className="text-xs text-slate-500">Busiest scan window</p>
                </div>
                <div className="bg-emerald-50 rounded-xl px-4 py-3">
                  <div className="flex items-center gap-1.5 mb-1">
                    <Mail className="w-4 h-4 text-emerald-600" />
                    <span className="text-sm font-bold text-slate-900">12 emails</span>
                  </div>
                  <p className="text-xs text-slate-500">Captured this week</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
