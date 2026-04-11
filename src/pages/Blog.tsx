import { useState, useEffect } from 'react';
import { QrCode, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const posts = [
  {
    title: 'How to use QR codes on your Etsy packaging',
    date: 'March 2026',
    excerpt: 'Etsy sellers are discovering that a simple QR code on packaging can turn a one-time buyer into a repeat customer. Here\'s how to do it without reprinting boxes every season.',
  },
  {
    title: '5 ways food vendors are using QR codes in 2026',
    date: 'February 2026',
    excerpt: 'From digital menus to loyalty signups, food vendors at markets and pop-ups are using QR codes in ways that would have seemed overly complex just two years ago.',
  },
  {
    title: 'Why your QR code should never expire',
    date: 'January 2026',
    excerpt: 'You\'ve printed 1,000 flyers. Six months later your subscription lapses and the QR code stops working. This is the most common QR code mistake — and it\'s entirely avoidable.',
  },
];

export default function Blog() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  useEffect(() => { window.scrollTo(0, 0); document.title = 'Blog — QRcraft'; }, []);

  function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
    }
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <header className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <button onClick={() => navigate('/')} className="flex items-center gap-2">
            <QrCode className="w-5 h-5 text-teal-400" />
            <span className="font-bold text-white text-lg">QRcraft</span>
          </button>
          <button onClick={() => navigate('/')} className="text-sm font-medium text-slate-400 hover:text-white transition-colors">
            ← Back to home
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
          QRcraft Blog
        </h1>
        <p className="text-lg text-slate-400">
          Tips for small businesses using QR codes
        </p>
      </section>

      {/* Posts */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="space-y-6">
          {posts.map((post) => (
            <div key={post.title} className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-slate-500 text-sm">
                  <Calendar className="w-3.5 h-3.5" />
                  {post.date}
                </div>
                <span className="text-xs bg-amber-900/50 border border-amber-700 text-amber-400 px-2.5 py-1 rounded-full font-medium">
                  Coming soon
                </span>
              </div>
              <h2 className="text-xl font-bold text-white mb-3 leading-snug">{post.title}</h2>
              <p className="text-slate-400 leading-relaxed text-sm">{post.excerpt}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Subscribe */}
      <section className="bg-slate-800/50 border-t border-slate-800 py-16">
        <div className="max-w-md mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-2">Subscribe for updates</h2>
          <p className="text-slate-400 text-sm mb-6">New posts, tips, and QRcraft updates. No spam.</p>

          {subscribed ? (
            <div className="py-4 px-6 bg-emerald-900/30 border border-emerald-700 rounded-xl text-emerald-400 font-medium">
              You're on the list!
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="flex-1 px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
              />
              <button
                type="submit"
                className="px-5 py-3 bg-teal-600 text-white rounded-lg font-semibold text-sm hover:bg-teal-500 transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </section>

      <footer className="border-t border-slate-800 py-6 text-center">
        <p className="text-slate-600 text-sm">© {new Date().getFullYear()} QRcraft. All rights reserved.</p>
      </footer>
    </div>
  );
}
