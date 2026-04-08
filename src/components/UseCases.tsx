import { Package, Store, Calendar, ShoppingBag, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const useCases = [
  {
    icon: Package,
    title: 'Packaging inserts',
    description: 'Turn product unboxing into repeat orders'
  },
  {
    icon: Store,
    title: 'Food stalls',
    description: 'Build a following from walk-up customers'
  },
  {
    icon: Calendar,
    title: 'Events',
    description: 'Capture attendees and promote next event'
  },
  {
    icon: ShoppingBag,
    title: 'Store counters',
    description: 'Get reviews, emails, and loyalty signups'
  },
  {
    icon: FileText,
    title: 'Flyers',
    description: 'Track offline campaigns and measure ROI'
  }
];

export default function UseCases() {
  const navigate = useNavigate();

  return (
    <section className="py-24 sm:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Built for the real world
          </h2>
          <p className="text-xl text-slate-600">
            QRcraft works wherever you need to bridge physical and digital
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <button
                key={index}
                onClick={() => navigate('/create')}
                className="p-6 bg-slate-50 rounded-xl border border-slate-200 text-center cursor-pointer hover:border-slate-300 transition-all hover:shadow-md"
              >
                <div className="w-12 h-12 bg-white border border-slate-200 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-slate-900" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {useCase.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {useCase.description}
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
