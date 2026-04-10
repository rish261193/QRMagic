import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { QrCode } from 'lucide-react';
import { getQRUrl, trackScan } from '../lib/qr';

export default function Redirect() {
  const { id } = useParams<{ id: string }>();
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!id) { setNotFound(true); return; }

    getQRUrl(id).then(url => {
      if (!url) {
        setNotFound(true);
      } else {
        trackScan(id); // fire-and-forget
        window.location.replace(url);
      }
    });
  }, [id]);

  if (notFound) {
    return (
      <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center text-center px-4">
        <QrCode className="w-12 h-12 text-teal-400 mb-4" />
        <h1 className="text-2xl font-bold text-white mb-2">QR code not found</h1>
        <p className="text-slate-400 mb-6">This QR code doesn't exist or has been removed.</p>
        <a href="/" className="text-teal-400 hover:text-teal-300 font-medium transition-colors">
          ← Back to QRcraft
        </a>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center gap-3">
      <QrCode className="w-10 h-10 text-teal-400 animate-pulse" />
      <p className="text-slate-400 text-sm">Redirecting…</p>
    </div>
  );
}
