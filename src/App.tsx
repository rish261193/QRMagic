import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
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
import Redirect from './pages/Redirect';
import NotFound from './pages/NotFound';

function LandingPage() {
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
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/create" element={<Create />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/r/:id" element={<Redirect />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
