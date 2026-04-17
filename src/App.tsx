import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, useNavigationType } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

// Let the browser save/restore scroll positions on back/forward navigation
if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'auto';
}

/** Scrolls to top on forward navigation; lets browser restore on back/forward (POP). */
function ScrollManager() {
  const location = useLocation();
  const navType = useNavigationType();
  useEffect(() => {
    if (navType !== 'POP') {
      window.scrollTo(0, 0);
    }
  }, [location.key, navType]);
  return null;
}
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import CustomerJourney from './components/CustomerJourney';
import OutcomeSection from './components/OutcomeSection';
import HowItWorks from './components/HowItWorks';
import UseCases from './components/UseCases';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Create from './pages/Create';
import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';
import Analytics from './pages/Analytics';
import Redirect from './pages/Redirect';
import NotFound from './pages/NotFound';
import UpgradeSuccess from './pages/UpgradeSuccess';
import EditableKit from './pages/EditableKit';
import Growth from './pages/Growth';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';

function LandingPage() {
  const location = useLocation();
  useEffect(() => {
    const target = (location.state as { scrollTo?: string } | null)?.scrollTo;
    if (target) {
      document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' });
    }
  }, []); // run once on mount; state is captured at mount time
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <CustomerJourney />
      <OutcomeSection />
      <HowItWorks />
      <UseCases />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ScrollManager />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/create" element={<Create />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/r/:id" element={<Redirect />} />
          <Route path="/upgrade/success" element={<UpgradeSuccess />} />
          <Route path="/editable" element={<EditableKit />} />
          <Route path="/growth" element={<Growth />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
