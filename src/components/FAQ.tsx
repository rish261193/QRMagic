import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'Do QR codes expire?',
    answer: 'No. All QR codes created with QRcraft are permanent and will work forever. Even if you never upgrade, your QR code will keep working after printing.'
  },
  {
    question: 'Will it still work after printing?',
    answer: 'Yes. Your QR code works forever once printed. With the Editable QR Kit, you can even change where it points without reprinting.'
  },
  {
    question: 'Do I need a subscription?',
    answer: 'No. You can use QRcraft completely free forever. The one-time Editable QR Kit lets you change destinations. Subscribe to Growth only when you need analytics and customer capture features.'
  },
  {
    question: 'Can I change where my QR code points?',
    answer: 'With the free version, the destination is permanent. Upgrade to the Editable QR Kit (one-time payment) to change your QR destination anytime without reprinting.'
  },
  {
    question: 'What happens if I stop paying for Growth?',
    answer: 'Your QR codes continue working forever. You just lose access to analytics, email capture, and advanced features. You can reactivate anytime.'
  },
  {
    question: 'Is there a limit to how many scans I can get?',
    answer: 'No limits. Your QR codes work unlimited times, forever, on any plan.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16 sm:py-20 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Frequently asked questions
          </h2>
          <p className="text-xl text-slate-600">
            Everything you need to know about QRcraft
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-slate-100 transition-colors"
              >
                <span className="font-semibold text-lg text-slate-900 pr-8">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-600 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
