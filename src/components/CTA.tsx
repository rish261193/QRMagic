import { useNavigate } from 'react-router-dom';

export default function CTA() {
  const navigate = useNavigate();
  return (
    <section className="py-24 bg-[#0F1729]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
          Ready to turn scans into customers?
        </h2>
        <p className="text-xl text-slate-300 mb-10">
          Create your first QR code for free. No credit card required.
        </p>
        <button onClick={() => navigate('/create')} className="px-8 py-4 bg-white text-slate-900 rounded-lg font-semibold text-lg hover:bg-slate-100 transition-colors shadow-xl">
          Create free QR
        </button>
      </div>
    </section>
  );
}
