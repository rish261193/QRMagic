import { QrCode, Menu, X, LayoutDashboard, LogOut, BarChart2, Zap } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { usePlan } from '../hooks/usePlan';
import { signOut } from '../lib/auth';

export default function Navigation() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { isGrowth } = usePlan();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  async function handleSignOut() {
    await signOut();
    navigate('/');
    setMobileMenuOpen(false);
  }

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#FAFAF8] border-b border-[#E8E8E4] z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button onClick={() => navigate('/')} className="flex items-center gap-2">
            <QrCode className="w-6 h-6 text-[#1A1A2E]" />
            <span className="text-xl font-bold text-[#1A1A2E]">QRcraft</span>
          </button>

          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('features')} className="text-[#1A1A2E]/70 hover:text-[#1A1A2E] font-medium transition-colors">Features</button>
            <button onClick={() => scrollToSection('pricing')} className="text-[#1A1A2E]/70 hover:text-[#1A1A2E] font-medium transition-colors">Pricing</button>
            <button onClick={() => scrollToSection('faq')} className="text-[#1A1A2E]/70 hover:text-[#1A1A2E] font-medium transition-colors">FAQ</button>
          </div>

          <div className="flex items-center gap-4">
            {user ? (
              <>
                <button
                  onClick={() => navigate('/dashboard')}
                  className="hidden md:flex items-center gap-1.5 text-[#1A1A2E]/70 hover:text-[#1A1A2E] font-medium transition-colors"
                >
                  <LayoutDashboard className="w-4 h-4" />
                  Dashboard
                </button>
                {isGrowth ? (
                  <button
                    onClick={() => navigate('/analytics')}
                    className="hidden md:flex items-center gap-1.5 text-[#1A1A2E]/70 hover:text-[#1A1A2E] font-medium transition-colors"
                  >
                    <BarChart2 className="w-4 h-4" />
                    Analytics
                  </button>
                ) : (
                  <button
                    onClick={() => navigate('/growth')}
                    className="hidden md:flex items-center gap-1.5 text-emerald-600 hover:text-emerald-700 font-medium transition-colors text-sm"
                  >
                    <Zap className="w-3.5 h-3.5" />
                    Upgrade
                  </button>
                )}
                <button
                  onClick={handleSignOut}
                  className="hidden md:flex items-center gap-1.5 text-[#1A1A2E]/50 hover:text-[#1A1A2E] font-medium transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                  Sign out
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => navigate('/auth')}
                  className="hidden md:block text-[#1A1A2E]/70 hover:text-[#1A1A2E] font-medium transition-colors"
                >
                  Sign in
                </button>
                <button
                  onClick={() => navigate('/create')}
                  className="hidden md:block px-5 py-2 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-500 transition-colors"
                >
                  Get started
                </button>
              </>
            )}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#1A1A2E]/70 hover:text-[#1A1A2E] min-h-[44px] min-w-[44px] flex items-center justify-center"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#E8E8E4] bg-[#FAFAF8]">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            <button onClick={() => scrollToSection('features')} className="text-left text-[#1A1A2E]/70 hover:text-[#1A1A2E] font-medium py-3 transition-colors min-h-[44px]">Features</button>
            <button onClick={() => scrollToSection('pricing')} className="text-left text-[#1A1A2E]/70 hover:text-[#1A1A2E] font-medium py-3 transition-colors min-h-[44px]">Pricing</button>
            <button onClick={() => scrollToSection('faq')} className="text-left text-[#1A1A2E]/70 hover:text-[#1A1A2E] font-medium py-3 transition-colors min-h-[44px]">FAQ</button>
            <div className="pt-2 mt-1 border-t border-[#E8E8E4] flex flex-col gap-2">
              {user ? (
                <>
                  <button
                    onClick={() => { navigate('/dashboard'); setMobileMenuOpen(false); }}
                    className="w-full py-3 bg-emerald-600 text-white rounded-lg font-semibold text-sm hover:bg-emerald-500 transition-colors min-h-[44px]"
                  >
                    Dashboard
                  </button>
                  {isGrowth ? (
                    <button
                      onClick={() => { navigate('/analytics'); setMobileMenuOpen(false); }}
                      className="w-full py-3 border border-teal-200 text-teal-700 rounded-lg font-semibold text-sm hover:bg-teal-50 transition-colors min-h-[44px]"
                    >
                      Analytics
                    </button>
                  ) : (
                    <button
                      onClick={() => { navigate('/growth'); setMobileMenuOpen(false); }}
                      className="w-full py-3 border border-[#E8E8E4] text-[#1A1A2E]/70 rounded-lg font-semibold text-sm hover:bg-white transition-colors min-h-[44px]"
                    >
                      Upgrade to Growth
                    </button>
                  )}
                  <button
                    onClick={handleSignOut}
                    className="w-full py-3 border border-[#E8E8E4] text-[#1A1A2E]/70 rounded-lg font-semibold text-sm hover:bg-white transition-colors min-h-[44px]"
                  >
                    Sign out
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => { navigate('/auth'); setMobileMenuOpen(false); }}
                    className="w-full py-3 border border-[#E8E8E4] text-[#1A1A2E]/70 rounded-lg font-semibold text-sm hover:bg-white transition-colors min-h-[44px]"
                  >
                    Sign in
                  </button>
                  <button
                    onClick={() => { navigate('/create'); setMobileMenuOpen(false); }}
                    className="w-full py-3 bg-emerald-600 text-white rounded-lg font-semibold text-sm hover:bg-emerald-500 transition-colors min-h-[44px]"
                  >
                    Create free QR
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
