import { QrCode, Check, Clock, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate();
  return (
    <section className="relative overflow-hidden bg-slate-900">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-teal-950 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left column */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">

            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-900/50 border border-emerald-700 rounded-full mb-6">
              <QrCode className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span className="text-sm font-semibold text-emerald-300 tracking-tight">
                Free QR codes that never expire
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08] mb-5">
              Turn every QR scan into a customer
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-lg">
              Create permanent QR codes for free. Upgrade when you want to track scans, capture emails, and drive repeat sales.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-8 w-full sm:w-auto">
              <button
                onClick={() => navigate('/create')}
                className="px-7 py-3.5 bg-emerald-500 text-white rounded-xl font-semibold text-base hover:bg-emerald-400 transition-colors"
              >
                Create free QR
              </button>
              <button
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-7 py-3.5 bg-transparent text-white border border-slate-600 rounded-xl font-semibold text-base hover:bg-slate-800 transition-colors"
              >
                See how it works
              </button>
            </div>

            <div className="grid grid-cols-2 gap-x-6 gap-y-2.5">
              {[
                'Permanent QR codes (never expire)',
                'No subscriptions required',
                'Works after printing',
                'Upgrade only for growth tools',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-slate-300 text-sm">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right column — QR card */}
          <div className="flex justify-center lg:justify-end">
            <div className="bg-white rounded-2xl shadow-2xl p-5 w-64">

              <div className="relative mb-3">
                <svg viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto rounded-lg">
                  <defs>
                    <linearGradient id="qrGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#0f172a" />
                      <stop offset="100%" stopColor="#0d9488" />
                    </linearGradient>
                  </defs>
                  <rect width="21" height="21" fill="white"/>
                  <rect x="0.2" y="0.2" width="6.6" height="6.6" rx="1.2" fill="url(#qrGradient)"/>
                  <rect x="1.2" y="1.2" width="4.6" height="4.6" rx="0.8" fill="white"/>
                  <rect x="2.2" y="2.2" width="2.6" height="2.6" rx="0.5" fill="url(#qrGradient)"/>
                  <rect x="14.2" y="0.2" width="6.6" height="6.6" rx="1.2" fill="url(#qrGradient)"/>
                  <rect x="15.2" y="1.2" width="4.6" height="4.6" rx="0.8" fill="white"/>
                  <rect x="16.2" y="2.2" width="2.6" height="2.6" rx="0.5" fill="url(#qrGradient)"/>
                  <rect x="0.2" y="14.2" width="6.6" height="6.6" rx="1.2" fill="url(#qrGradient)"/>
                  <rect x="1.2" y="15.2" width="4.6" height="4.6" rx="0.8" fill="white"/>
                  <rect x="2.2" y="16.2" width="2.6" height="2.6" rx="0.5" fill="url(#qrGradient)"/>
                  <circle cx="8.5" cy="6.5" r="0.4" fill="url(#qrGradient)"/>
                  <circle cx="10.5" cy="6.5" r="0.4" fill="url(#qrGradient)"/>
                  <circle cx="12.5" cy="6.5" r="0.4" fill="url(#qrGradient)"/>
                  <circle cx="6.5" cy="8.5" r="0.4" fill="url(#qrGradient)"/>
                  <circle cx="6.5" cy="10.5" r="0.4" fill="url(#qrGradient)"/>
                  <circle cx="6.5" cy="12.5" r="0.4" fill="url(#qrGradient)"/>
                  <circle cx="8.5" cy="0.5" r="0.4" fill="url(#qrGradient)"/>
                  <circle cx="10.5" cy="0.5" r="0.4" fill="url(#qrGradient)"/>
                  <circle cx="12.5" cy="0.5" r="0.4" fill="url(#qrGradient)"/>
                  <circle cx="9.5" cy="1.5" r="0.4" fill="url(#qrGradient)"/>
                  <circle cx="11.5" cy="1.5" r="0.4" fill="url(#qrGradient)"/>
                  <circle cx="8.5" cy="2.5" r="0.4" fill="url(#qrGradient)"/>
                  <circle cx="11.5" cy="2.5" r="0.4" fill="url(#qrGradient)"/>
                  <circle cx="12.5" cy="2.5" r="0.4" fill="url(#qrGradient)"/>
                  <circle cx="9.5" cy="3.5" r="0.4" fill="url(#qrGradient)"/>
                  <circle cx="12.5" cy="3.5" r="0.4" fill="url(#qrGradient)"/>
                  <circle cx="8.5" cy="4.5" r="0.4" fill="url(#qrGradient)"/>
                  <circle cx="11.5" cy="4.5" r="0.4" fill="url(#qrGradient)"/>
                  <circle cx="12.5" cy="4.5" r="0.4" fill="url(#qrGradient)"/>
                  <circle cx="9.5" cy="5.5" r="0.4" fill="url(#qrGradient)"/>
                  <circle cx="10.5" cy="5.5" r="0.4" fill="url(#qrGradient)"/>
                  <circle cx="0.5" cy="8.5" r="0.4" fill="url(#qrGradient)"/>
                  <circle cx="2.5" cy="8.5" r="0.4" fill="url(#qrGradient)"/>
                  <circle cx="3.5" cy="8.5" r="0.4" fill="url(#qrGradient)"/>
                  <circle cx="8.5" cy="8.5" r="0.4" fill="url(#qrGradient)"/>
                  <circle cx="9.5" cy="8.5" r="0.4" fill="url(#qrGradient)"/>
                  <circle cx="11.5" cy="8.5" r="0.4" fill="url(#qrGradient)"/>
                  <circle cx="13.5" cy="8.5" r="0.4" fill="url(#qrGradient)"/>
                  <circle cx="16.5" cy="8.5" r="0.4" fill="url(#qrGradient)"/>
                  <circle cx="17.5" cy="8.5" r="0.4" fill="url(#qrGradient)"/>
                  <circle cx="19.5" cy="8.5" r="0.4" fill="url(#qrGradient)"/>
                  <circle cx="1.5" cy="9.5" r="0.4" fill="url(#qrGradient)"/>
                  <circle cx="2.5" cy="9.5" r="0.4" fill="url(#qrGradient)"/>
                  <circle cx="8.5" cy="9.5" r="0.4" fill="url(#qrGradient)"/>
                  <circle cx="10.5" cy="9.5" r="0.4" fill="url(#qrGradient)"/>
                  <circle cx="11.5" cy="9.5" r="0.4" fill="url(#qrGradient)"/>
                  <circle cx="17.5" cy="9.5" r="0.4" fill="url(#qrGradient)"/>
                  <circle cx="20.5" cy="9.5" r="0.4" fill="url(#qrGradient)"/>
                  <circle cx="0.5" cy="10.5" r="0.4" fill="url(#qrGradient)"/>
                  <circle cx="4.5" cy="10.5" r="0.4" fill="url(#qrGradient)"/>
                  <circle cx="9.5" cy="10.5" r="0.4" fill="url(#qrGradient)"/>
                  <circle cx="12.5" cy="10.5" r="0.4" fill="url(#qrGradient)"/>
                  <circle cx="15.5" cy="10.5" r="0.4" fill="url(#qrGradient)"/>
                  <circle cx="18.5" cy="10.5" r="0.4" fill="url(#qrGradient)"/>
                  <circle cx="2.5" cy="11.5" r="0.4" fill="url(#qrGradient)"/>
                  <circle cx="5.5" cy="11.5" r="0.4" fill="url(#qrGradient)"/>
                  <circle cx="8.5" cy="11.5" r="0.4" fill="url(#qrGradient)"/>
                  <circle cx="11.5" cy="11.5" r="0.4" fill="url(#qrGradient)"/>
                  <circle cx="14.5" cy="11.5" r="0.4" fill="url(#qrGradient)"/>
                  <circle cx="17.5" cy="11.5" r="0.4" fill="url(#qrGradient)"/>
                  <circle cx="19.5" cy="11.5" r="0.4" fill="url(#qrGradient)"/>
                  <circle cx="0.5" cy="12.5" r="0.4" fill="url(#qrGradient)"/>
                  <circle cx="4.5" cy="12.5" r="0.4" fill="url(#qrGradient)"/>
                  <circle cx="9.5" cy="12.5" r="0.4" fill="url(#qrGradient)"/>
                  <circle cx="13.5" cy="12.5" r="0.4" fill="url(#qrGradient)"/>
                  <circle cx="16.5" cy="12.5" r="0.4" fill="url(#qrGradient)"/>
                  <circle cx="20.5" cy="12.5" r="0.4" fill="url(#qrGradient)"/>
                  <circle cx="8.5" cy="14.5" r="0.4" fill="url(#qrGradient)"/>
                  <circle cx="11.5" cy="14.5" r="0.4" fill="url(#qrGradient)"/>
                  <circle cx="13.5" cy="14.5" r="0.4" fill="url(#qrGradient)"/>
                  <circle cx="16.5" cy="14.5" r="0.4" fill="url(#qrGradient)"/>
                  <circle cx="18.5" cy="14.5" r="0.4" fill="url(#qrGradient)"/>
                  <circle cx="9.5" cy="15.5" r="0.4" fill="url(#qrGradient)"/>
                  <circle cx="12.5" cy="15.5" r="0.4" fill="url(#qrGradient)"/>
                  <circle cx="15.5" cy="15.5" r="0.4" fill="url(#qrGradient)"/>
                  <circle cx="17.5" cy="15.5" r="0.4" fill="url(#qrGradient)"/>
                  <circle cx="20.5" cy="15.5" r="0.4" fill="url(#qrGradient)"/>
                  <circle cx="10.5" cy="16.5" r="0.4" fill="url(#qrGradient)"/>
                  <circle cx="13.5" cy="16.5" r="0.4" fill="url(#qrGradient)"/>
                  <circle cx="15.5" cy="16.5" r="0.4" fill="url(#qrGradient)"/>
                  <circle cx="19.5" cy="16.5" r="0.4" fill="url(#qrGradient)"/>
                  <circle cx="9.5" cy="17.5" r="0.4" fill="url(#qrGradient)"/>
                  <circle cx="12.5" cy="17.5" r="0.4" fill="url(#qrGradient)"/>
                  <circle cx="16.5" cy="17.5" r="0.4" fill="url(#qrGradient)"/>
                  <circle cx="18.5" cy="17.5" r="0.4" fill="url(#qrGradient)"/>
                  <circle cx="11.5" cy="18.5" r="0.4" fill="url(#qrGradient)"/>
                  <circle cx="13.5" cy="18.5" r="0.4" fill="url(#qrGradient)"/>
                  <circle cx="17.5" cy="18.5" r="0.4" fill="url(#qrGradient)"/>
                  <circle cx="20.5" cy="18.5" r="0.4" fill="url(#qrGradient)"/>
                  <circle cx="9.5" cy="19.5" r="0.4" fill="url(#qrGradient)"/>
                  <circle cx="14.5" cy="19.5" r="0.4" fill="url(#qrGradient)"/>
                  <circle cx="15.5" cy="19.5" r="0.4" fill="url(#qrGradient)"/>
                  <circle cx="18.5" cy="19.5" r="0.4" fill="url(#qrGradient)"/>
                  <circle cx="8.5" cy="20.5" r="0.4" fill="url(#qrGradient)"/>
                  <circle cx="11.5" cy="20.5" r="0.4" fill="url(#qrGradient)"/>
                  <circle cx="15.5" cy="20.5" r="0.4" fill="url(#qrGradient)"/>
                  <circle cx="17.5" cy="20.5" r="0.4" fill="url(#qrGradient)"/>
                  <circle cx="20.5" cy="20.5" r="0.4" fill="url(#qrGradient)"/>
                  <circle cx="10.5" cy="10.5" r="2.3" fill="white" stroke="#e2e8f0" strokeWidth="0.15"/>
                  <polygon points="9.3,10.5 10.5,9.2 11.7,10.5" fill="url(#qrGradient)"/>
                  <rect x="9.5" y="10.4" width="2" height="1.6" rx="0.2" fill="url(#qrGradient)"/>
                  <rect x="10.1" y="11.1" width="0.8" height="0.9" rx="0.1" fill="white"/>
                </svg>

                <svg viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg" className="qr-plain-overlay absolute inset-0 w-full h-full rounded-lg">
                  <rect x="0" y="0" width="21" height="21" fill="white"/>
                  <rect x="0" y="0" width="7" height="7" fill="#0f172a"/>
                  <rect x="1" y="1" width="5" height="5" fill="white"/>
                  <rect x="2" y="2" width="3" height="3" fill="#0f172a"/>
                  <rect x="14" y="0" width="7" height="7" fill="#0f172a"/>
                  <rect x="15" y="1" width="5" height="5" fill="white"/>
                  <rect x="16" y="2" width="3" height="3" fill="#0f172a"/>
                  <rect x="0" y="14" width="7" height="7" fill="#0f172a"/>
                  <rect x="1" y="15" width="5" height="5" fill="white"/>
                  <rect x="2" y="16" width="3" height="3" fill="#0f172a"/>
                  <rect x="8" y="6" width="1" height="1" fill="#0f172a"/>
                  <rect x="10" y="6" width="1" height="1" fill="#0f172a"/>
                  <rect x="12" y="6" width="1" height="1" fill="#0f172a"/>
                  <rect x="6" y="8" width="1" height="1" fill="#0f172a"/>
                  <rect x="6" y="10" width="1" height="1" fill="#0f172a"/>
                  <rect x="6" y="12" width="1" height="1" fill="#0f172a"/>
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
              </div>

              {/* Style picker */}
              <div className="mb-3">
                <p className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-2">Choose your style</p>
                <div className="flex gap-1.5">
                  <div className="flex flex-col items-center gap-1 flex-1">
                    <div className="w-full rounded-md overflow-hidden border border-slate-200 p-0.5 bg-white cursor-pointer hover:border-slate-400 transition-colors">
                      <svg viewBox="0 0 7 7" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                        <rect width="7" height="7" fill="white"/>
                        <rect x="0" y="0" width="3" height="3" fill="#0f172a"/>
                        <rect x="0.5" y="0.5" width="2" height="2" fill="white"/>
                        <rect x="1" y="1" width="1" height="1" fill="#0f172a"/>
                        <rect x="4" y="0" width="3" height="3" fill="#0f172a"/>
                        <rect x="4.5" y="0.5" width="2" height="2" fill="white"/>
                        <rect x="5" y="1" width="1" height="1" fill="#0f172a"/>
                        <rect x="0" y="4" width="3" height="3" fill="#0f172a"/>
                        <rect x="0.5" y="4.5" width="2" height="2" fill="white"/>
                        <rect x="1" y="5" width="1" height="1" fill="#0f172a"/>
                        <rect x="4" y="3.5" width="1" height="1" fill="#0f172a"/>
                        <rect x="5.5" y="4" width="1" height="1" fill="#0f172a"/>
                        <rect x="4" y="5" width="1.5" height="1" fill="#0f172a"/>
                        <rect x="6" y="5.5" width="1" height="1" fill="#0f172a"/>
                        <rect x="3.5" y="3" width="1" height="1" fill="#0f172a"/>
                      </svg>
                    </div>
                    <span className="text-xs text-slate-400">Classic</span>
                  </div>

                  <div className="flex flex-col items-center gap-1 flex-1">
                    <div className="w-full rounded-md overflow-hidden ring-2 ring-teal-500 p-0.5 bg-white cursor-pointer">
                      <svg viewBox="0 0 7 7" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                        <defs>
                          <linearGradient id="tn1" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#0f172a"/>
                            <stop offset="100%" stopColor="#0d9488"/>
                          </linearGradient>
                        </defs>
                        <rect width="7" height="7" fill="white"/>
                        <rect x="0.1" y="0.1" width="2.8" height="2.8" rx="0.5" fill="url(#tn1)"/>
                        <rect x="0.5" y="0.5" width="2" height="2" rx="0.3" fill="white"/>
                        <rect x="1" y="1" width="1" height="1" rx="0.2" fill="url(#tn1)"/>
                        <rect x="4.1" y="0.1" width="2.8" height="2.8" rx="0.5" fill="url(#tn1)"/>
                        <rect x="4.5" y="0.5" width="2" height="2" rx="0.3" fill="white"/>
                        <rect x="5" y="1" width="1" height="1" rx="0.2" fill="url(#tn1)"/>
                        <rect x="0.1" y="4.1" width="2.8" height="2.8" rx="0.5" fill="url(#tn1)"/>
                        <rect x="0.5" y="4.5" width="2" height="2" rx="0.3" fill="white"/>
                        <rect x="1" y="5" width="1" height="1" rx="0.2" fill="url(#tn1)"/>
                        <circle cx="4.5" cy="3.5" r="0.35" fill="url(#tn1)"/>
                        <circle cx="5.5" cy="4" r="0.35" fill="url(#tn1)"/>
                        <circle cx="4" cy="5" r="0.35" fill="url(#tn1)"/>
                        <circle cx="5.5" cy="5.5" r="0.35" fill="url(#tn1)"/>
                        <circle cx="3.5" cy="3" r="0.35" fill="url(#tn1)"/>
                        <circle cx="6.5" cy="4.5" r="0.35" fill="url(#tn1)"/>
                      </svg>
                    </div>
                    <span className="text-xs text-teal-600 font-semibold">Brand</span>
                  </div>

                  <div className="flex flex-col items-center gap-1 flex-1">
                    <div className="w-full rounded-md overflow-hidden border border-slate-200 p-0.5 bg-white cursor-pointer hover:border-slate-400 transition-colors">
                      <svg viewBox="0 0 7 7" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                        <defs>
                          <linearGradient id="tn2" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#f97316"/>
                            <stop offset="100%" stopColor="#dc2626"/>
                          </linearGradient>
                        </defs>
                        <rect width="7" height="7" fill="white"/>
                        <rect x="0.1" y="0.1" width="2.8" height="2.8" rx="0.5" fill="url(#tn2)"/>
                        <rect x="0.5" y="0.5" width="2" height="2" rx="0.3" fill="white"/>
                        <rect x="1" y="1" width="1" height="1" rx="0.2" fill="url(#tn2)"/>
                        <rect x="4.1" y="0.1" width="2.8" height="2.8" rx="0.5" fill="url(#tn2)"/>
                        <rect x="4.5" y="0.5" width="2" height="2" rx="0.3" fill="white"/>
                        <rect x="5" y="1" width="1" height="1" rx="0.2" fill="url(#tn2)"/>
                        <rect x="0.1" y="4.1" width="2.8" height="2.8" rx="0.5" fill="url(#tn2)"/>
                        <rect x="0.5" y="4.5" width="2" height="2" rx="0.3" fill="white"/>
                        <rect x="1" y="5" width="1" height="1" rx="0.2" fill="url(#tn2)"/>
                        <circle cx="4.5" cy="3.5" r="0.35" fill="url(#tn2)"/>
                        <circle cx="5.5" cy="4" r="0.35" fill="url(#tn2)"/>
                        <circle cx="4" cy="5" r="0.35" fill="url(#tn2)"/>
                        <circle cx="5.5" cy="5.5" r="0.35" fill="url(#tn2)"/>
                        <circle cx="3.5" cy="3" r="0.35" fill="url(#tn2)"/>
                        <circle cx="6.5" cy="4.5" r="0.35" fill="url(#tn2)"/>
                      </svg>
                    </div>
                    <span className="text-xs text-slate-400">Bold</span>
                  </div>
                </div>
              </div>

              <button className="w-full py-2.5 mb-3 text-sm font-semibold bg-gradient-to-r from-slate-900 to-teal-700 text-white rounded-lg hover:opacity-90 transition-opacity">
                Scan me →
              </button>

              <div className="grid grid-cols-2 gap-2">
                <div className="bg-slate-50 rounded-lg px-3 py-2.5 border border-slate-100">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <Clock className="w-3 h-3 text-teal-600 flex-shrink-0" />
                    <span className="text-sm font-bold text-slate-900 whitespace-nowrap">2–4pm</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-tight">Busiest scan window</p>
                </div>
                <div className="bg-slate-50 rounded-lg px-3 py-2.5 border border-slate-100">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <Mail className="w-3 h-3 text-teal-600 flex-shrink-0" />
                    <span className="text-sm font-bold text-slate-900">12 emails</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-tight">Captured this week</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

