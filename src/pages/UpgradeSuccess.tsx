import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

export default function UpgradeSuccess() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => navigate('/dashboard'), 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center text-center px-4">
      <CheckCircle className="w-16 h-16 text-emerald-400 mb-6" />
      <h1 className="text-3xl font-bold text-white mb-3">Payment successful!</h1>
      <p className="text-slate-300 mb-2 max-w-md text-base">
        Your account has been upgraded.
      </p>
      <p className="text-slate-500 text-sm mb-10">
        Redirecting you to your dashboard in a moment…
      </p>
      <button
        onClick={() => navigate('/dashboard')}
        className="flex items-center gap-2 px-6 py-3 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-500 transition-colors"
      >
        Go to Dashboard
      </button>
    </div>
  );
}
