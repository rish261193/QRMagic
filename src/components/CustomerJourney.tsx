import { Smartphone, Monitor, Mail, RotateCcw } from 'lucide-react';

const steps = [
  {
    icon: Smartphone,
    title: 'Customer scans QR',
    description: 'One tap on their phone, instant engagement'
  },
  {
    icon: Monitor,
    title: 'Landing page appears',
    description: 'Custom destination - offer, menu, or link'
  },
  {
    icon: Mail,
    title: 'Email or offer shown',
    description: 'Capture leads or drive immediate action'
  },
  {
    icon: RotateCcw,
    title: 'Customer returns',
    description: 'Build loyalty with follow-up campaigns'
  }
];

export default function CustomerJourney() {
  return (
    <section className="pt-0 pb-12 sm:pb-16 bg-[#0F1729]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4 whitespace-nowrap">
            What happens after someone scans?
          </h2>
          <p className="text-xl text-slate-600">
            From QR code to customer in seconds
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 h-full">
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                  <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {step.description}
                  </p>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-slate-200" />
                )}
              </div>
            );
          })}
        </div>


      </div>
    </section>
  );
}
