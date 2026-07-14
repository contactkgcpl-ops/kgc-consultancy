import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { PopupForm } from './components/ui/PopupForm';
import { FloatingContact } from './components/ui/FloatingContact';

// Pages
import { Home } from './pages/Home';
import { AboutPage } from './pages/About';
import { ServicesPage } from './pages/Services';
import { IndustriesPage } from './pages/Industries';
import { ProcessPage } from './pages/Process';
import { ContactPage } from './pages/Contact';
import { FoodConsultingPage } from './pages/categories/FoodConsulting';
import { BeverageConsultingPage } from './pages/categories/BeverageConsulting';
import { SpicesConsultingPage } from './pages/categories/SpicesConsulting';
import { ProteinSupplementsPage } from './pages/categories/ProteinSupplements';
import { CosmeticFormulationPage } from './pages/categories/CosmeticFormulation';
import { SnacksConfectioneryPage } from './pages/categories/SnacksConfectionery';
import { SpareServicesPage } from './pages/categories/SpareServices';
import { FoodPowderConsultingPage } from './pages/categories/FoodPowderConsulting';

// Scroll to top helper to ensure navigating to a new page scrolls up
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="font-sans antialiased bg-white text-navy selection:bg-accent selection:text-white min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/industries" element={<IndustriesPage />} />
            <Route path="/process" element={<ProcessPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/categories/food-consulting" element={<FoodConsultingPage />} />
            <Route path="/categories/beverage-consulting" element={<BeverageConsultingPage />} />
            <Route path="/categories/spices-consulting" element={<SpicesConsultingPage />} />
            <Route path="/categories/protein-supplements" element={<ProteinSupplementsPage />} />
            <Route path="/categories/cosmetic-formulation" element={<CosmeticFormulationPage />} />
            <Route path="/categories/snacks-confectionery" element={<SnacksConfectioneryPage />} />
            <Route path="/categories/spare-services" element={<SpareServicesPage />} />
            <Route path="/categories/food-powder-consulting" element={<FoodPowderConsultingPage />} />
          </Routes>
        </main>
        
        <Footer />
        <PopupForm />
        <FloatingContact />
      </div>
    </Router>
  );
}

export default App;
