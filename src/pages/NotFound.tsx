import { useNavigate } from 'react-router-dom';
import { QrCode } from 'lucide-react';

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center text-center px-4">
      <QrCode className="w-12 h-12 text-teal-400 mb-4" />
      <p className="text-8xl font-bold text-white mb-4">404</p>
      <h1 className="text-2xl font-semibold text-white mb-2">Page not found</h1>
      <p className="text-slate-400 mb-8">The page you're looking for doesn't exist.</p>
      <button
        onClick={() => navigate('/')}
        className="px-6 py-3 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-500 transition-colors"
      >
        Back to home
      </button>
    </div>
  );
}
