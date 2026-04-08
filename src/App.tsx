import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
