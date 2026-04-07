import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'Perfect for getting started',
    features: [
      'Permanent QR codes',
      'Basic destination linking',
      'Never expires',
      'Print and forget'
    ],
    cta: 'Start free',
    highlighted: false
  },
  {
    name: 'Editable QR Kit',
    price: '$29',
    period: 'one-time',
    description: 'Change destination anytime',
    features: [
      'Everything in Free',
      'Edit destination anytime',
      'No reprinting needed',
      'Update URLs instantly',
      'Lifetime access'
    ],
    cta: 'Buy once',
    highlighted: true
  },
  {
    name: 'Growth',
    price: '$49',
    period: 'per month',
    description: 'Scale your customer acquisition',
    features: [
      'Everything in Editable',
      'Scan analytics & tracking',
      'Email capture forms',
      'Custom landing pages',
      'Conversion tracking',
      'Priority support'
    ],
    cta: 'Start trial',
    highlighted: false
  }
];

export default function Pricing() {
  return (
    <section className="py-20 sm:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Start free. Scale when ready.
          </h2>
          <p className="text-xl text-slate-600">
            Pay once for flexibility. Subscribe only for growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 ${
                plan.highlighted
                  ? 'bg-slate-900 text-white ring-4 ring-slate-900 shadow-2xl'
                  : 'bg-white border-2 border-slate-200'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-emerald-500 text-white text-sm font-semibold rounded-full">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3
                  className={`text-xl font-semibold mb-2 ${
                    plan.highlighted ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-2">
                  <span
                    className={`text-5xl font-bold ${
                      plan.highlighted ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={plan.highlighted ? 'text-slate-300' : 'text-slate-600'}
                  >
                    {plan.period}
                  </span>
                </div>
                <p
                  className={`mt-4 ${
                    plan.highlighted ? 'text-slate-300' : 'text-slate-600'
                  }`}
                >
                  {plan.description}
                </p>
              </div>

              <button
                className={`w-full py-3 px-6 rounded-lg font-semibold mb-8 transition-colors ${
                  plan.highlighted
                    ? 'bg-white text-slate-900 hover:bg-slate-100'
                    : 'bg-slate-900 text-white hover:bg-slate-800'
                }`}
              >
                {plan.cta}
              </button>

              <ul className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check
                      className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                        plan.highlighted ? 'text-emerald-400' : 'text-emerald-600'
                      }`}
                    />
                    <span
                      className={plan.highlighted ? 'text-slate-100' : 'text-slate-700'}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
