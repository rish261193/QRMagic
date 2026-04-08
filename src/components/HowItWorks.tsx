import { QrCode, Globe, Users } from 'lucide-react';

const steps = [
  {
    icon: QrCode,
    title: 'Create QR for free',
    description: 'Generate your permanent QR code in seconds. No account needed to start.'
  },
  {
    icon: Globe,
    title: 'Place it in the real world',
    description: 'Print on packaging, flyers, stalls, or anywhere customers can scan.'
  },
  {
    icon: Users,
    title: 'Turn scans into customers',
    description: 'Track engagement, capture leads, and drive repeat business.'
  }
];

export default function HowItWorks() {
  return (
    <section id="features" className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            How it works
          </h2>
          <p className="text-xl text-slate-600">From URL to customer in 3 steps</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="relative">
                    <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center mb-6">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    {index < steps.length - 1 && (
                      <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-slate-200" />
                    )}
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm font-semibold text-emerald-600">
                      Step {index + 1}
                    </div>
                    <h3 className="text-2xl font-semibold text-slate-900">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed max-w-xs">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
