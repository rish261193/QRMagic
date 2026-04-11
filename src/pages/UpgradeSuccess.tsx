import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

export default function UpgradeSuccess() {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          navigate('/dashboard');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center text-center px-4">
      <CheckCircle className="w-20 h-20 text-emerald-400 mb-6" />
      <h1 className="text-4xl font-bold text-white mb-3">You're all set!</h1>
      <p className="text-slate-300 mb-2 max-w-md text-base">
        Your account has been upgraded. Welcome to QRcraft Pro.
      </p>
      <p className="text-slate-500 text-sm mb-10">
        {countdown > 0 ? `Redirecting in ${countdown}…` : 'Redirecting…'}
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
