import { useNavigate } from 'react-router-dom';
import { CheckCircle, QrCode } from 'lucide-react';

export default function UpgradeSuccess() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center text-center px-4">
      <CheckCircle className="w-16 h-16 text-emerald-400 mb-6" />
      <h1 className="text-3xl font-bold text-white mb-3">You're upgraded!</h1>
      <p className="text-slate-400 mb-2 max-w-md text-base">
        Your plan is now active. You can edit the destination URL of any QR code — no reprinting needed.
      </p>
      <p className="text-slate-500 text-sm mb-10">
        It may take a minute to reflect. Refresh your dashboard if you don't see the change.
      </p>
      <button
        onClick={() => navigate('/dashboard')}
        className="flex items-center gap-2 px-6 py-3 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-500 transition-colors"
      >
        <QrCode className="w-4 h-4" />
        Go to Dashboard
      </button>
    </div>
  );
}
