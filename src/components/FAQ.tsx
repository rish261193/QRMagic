import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'Do QR codes expire?',
    answer: 'No. All QR codes created with QRcraft are permanent and will work forever. Even if you never upgrade, your QR code will keep working after printing. No trials, no expiry, no surprises.'
  },
  {
    question: 'Will my QR stop working if I don\'t upgrade?',
    answer: 'Never. This is our core promise. Free QR codes work forever — full stop. We will never disable your QR code to force an upgrade. Upgrade only when you want growth features, not because you have to.'
  },
  {
    question: 'Will it still work after printing?',
    answer: 'Yes. Your QR code works forever once printed. With the Editable QR Kit, you can even change where it points without reprinting — perfect for menus, packaging, and signage.'
  },
  {
    question: 'Do I need a subscription?',
    answer: 'No. You can use QRcraft completely free forever. The $29 Editable QR Kit is a one-time payment — no recurring charges. Only subscribe to Growth if you want analytics and email capture features.'
  },
  {
    question: 'Will I get charged automatically?',
    answer: 'Only if you sign up for Growth at $12/month — and you\'ll always know exactly what you\'re paying. The free tier costs nothing forever. The $29 Editable Kit is a single one-time charge with zero recurring fees. No hidden charges, ever.'
  },
  {
    question: 'Can I change where my QR code points?',
    answer: 'With the free version, the destination is permanent — great for links that never change. Upgrade to the Editable QR Kit ($29 one-time) to change your destination anytime without reprinting. Your printed QR stays the same, only the destination changes.'
  },
  {
    question: 'What happens if I stop paying for Growth?',
    answer: 'Your QR codes continue working forever. You keep everything you had on the free plan — permanent QR codes that never expire. You just lose access to analytics, email capture, and advanced features. Reactivate anytime, no penalty.'
  },
  {
    question: 'Is there a limit to how many scans I can get?',
    answer: 'No limits on any plan. Your QR codes work unlimited times, forever. On Growth, you can track every single scan — but there\'s no cap on how many you can receive.'
  },
  {
    question: 'Can I use QRcraft for my Etsy shop, food stall, or local business?',
    answer: 'Absolutely — that\'s exactly who QRcraft is built for. Print your QR on packaging inserts, market stall signs, flyers, menus, or business cards. It works anywhere, forever, with no technical knowledge required.'
  },
  {
    question: 'What makes QRcraft different from other QR tools?',
    answer: 'Most QR tools expire your codes after a free trial and charge $100-200/year just to keep them working. QRcraft never holds your QR code hostage. Free codes are free forever. Pay only when you want growth features — not to keep your printed materials from breaking.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 sm:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Frequently asked questions
          </h2>
          <p className="text-lg text-slate-500">
            Everything you need to know about QRcraft
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-slate-200 rounded-xl overflow-hidden bg-white hover:border-slate-300 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left"
              >
                <span className="font-semibold text-base text-slate-900 pr-8">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-slate-500 leading-relaxed text-sm">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA nudge */}
        <div className="text-center mt-12">
          <p className="text-slate-500 text-sm mb-3">Still have questions?</p>
          <a
            href="mailto:hello@qrcraft.co"
            className="text-teal-600 font-semibold text-sm hover:text-teal-700 transition-colors"
          >
            hello@qrcraft.co →
          </a>
        </div>
      </div>
    </section>
  );
}


