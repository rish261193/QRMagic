import { Repeat, Mail, Tag, FileText, TrendingUp } from 'lucide-react';

const outcomes = [
  {
    icon: Repeat,
    title: 'Get repeat customers',
    description: 'Turn one-time buyers into regulars with smart follow-up'
  },
  {
    icon: Mail,
    title: 'Capture emails',
    description: 'Build your list from every scan with opt-in forms'
  },
  {
    icon: Tag,
    title: 'Promote an offer',
    description: 'Drive action with exclusive deals and discounts'
  },
  {
    icon: FileText,
    title: 'Share menu or info',
    description: 'Link to menus, catalogs, or product details instantly'
  },
  {
    icon: TrendingUp,
    title: 'Track offline traffic',
    description: 'See what works in the real world with scan analytics'
  }
];

export default function OutcomeSection() {
  return (
    <section className="py-24 sm:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            What do you want your QR to do?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {outcomes.map((outcome, index) => {
            const Icon = outcome.icon;
            return (
              <div
                key={index}
                className="p-8 bg-slate-50 rounded-2xl border border-slate-200"
              >
                <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  {outcome.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {outcome.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
