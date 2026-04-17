import { Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'Perfect for getting started',
    features: [
      'Permanent QR codes',
      'Basic destination linking',
      'Scan count tracking',
      'Never expires',
      'Print and forget'
    ],
    cta: 'Start free',
    highlighted: false,
    page: '/create',
  },
  {
    name: 'Editable QR Kit',
    price: '$29',
    period: 'one-time',
    description: 'Change destination anytime',
    features: [
      'Everything in Free',
      'Edit destination anytime',
      'Custom colors and dot styles',
      'Add your logo to the center',
      'No reprinting needed',
      'Lifetime access — pay once'
    ],
    cta: 'Buy once',
    highlighted: true,
    page: '/editable',
  },
  {
    name: 'Growth',
    price: '$12',
    period: 'per month',
    description: 'Scale your customer acquisition',
    features: [
      'Everything in Editable',
      'Advanced scan analytics',
      'Email capture forms',
      'Custom landing pages',
      'Conversion tracking',
      'Priority support'
    ],
    cta: 'Start trial',
    highlighted: false,
    page: '/growth',
  }
];

export default function Pricing() {
  const navigate = useNavigate();

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#1A1A2E] mb-4">
            Start free. Scale when ready.
          </h2>
          <p className="text-xl text-gray-500">
            Pay once for flexibility. Subscribe only for growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 ${
                plan.highlighted
                  ? 'bg-[#0F1729] text-white ring-4 ring-[#0F1729] shadow-2xl'
                  : 'bg-white border-2 border-[#E8E8E4]'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-emerald-500 text-white text-sm font-semibold rounded-full">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className={`text-xl font-semibold mb-2 ${plan.highlighted ? 'text-white' : 'text-[#1A1A2E]'}`}>
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-2">
                  <span className={`text-5xl font-bold ${plan.highlighted ? 'text-white' : 'text-[#1A1A2E]'}`}>
                    {plan.price}
                  </span>
                  <span className={plan.highlighted ? 'text-slate-300' : 'text-gray-500'}>
                    {plan.period}
                  </span>
                </div>
                <p className={`mt-4 ${plan.highlighted ? 'text-slate-300' : 'text-gray-500'}`}>
                  {plan.description}
                </p>
              </div>

              <button
                onClick={() => navigate(plan.page)}
                className={`w-full py-3 px-6 rounded-lg font-semibold mb-8 transition-colors ${
                  plan.highlighted
                    ? 'bg-white text-[#0F1729] hover:bg-slate-100'
                    : 'bg-[#1A1A2E] text-white hover:bg-[#0F1729]'
                }`}
              >
                {plan.cta}
              </button>

              <ul className="space-y-4">
                {plan.features.map((feature, fi) => (
                  <li key={fi} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.highlighted ? 'text-emerald-400' : 'text-emerald-600'}`} />
                    <span className={plan.highlighted ? 'text-slate-100' : 'text-[#1A1A2E]/80'}>
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
