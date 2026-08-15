import { useState } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './sections/Hero/Hero';
import Features from './sections/Features/Features';
import Specs from './sections/Specs/Specs';
import Testimonials from './sections/Testimonials/Testimonials';
import About from './sections/About/About';
import Contact from './sections/Contact/Contact';
import OrderModal from './features/order/OrderModal';

export default function App() {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  const openOrderModal = () => setIsOrderModalOpen(true);
  const closeOrderModal = () => setIsOrderModalOpen(false);

  return (
    <div className="min-h-screen bg-[#0B0F17] text-slate-50 font-sans selection:bg-cyan-500 selection:text-slate-950 relative">
      <Navbar onOpenOrderModal={openOrderModal} />
      <main>
        <Hero onOpenOrderModal={openOrderModal} />
        <Features />
        <Specs />
        <Testimonials />
        <About />
        <Contact />
      </main>
      <Footer />
      <OrderModal isOpen={isOrderModalOpen} onClose={closeOrderModal} />
    </div>
  );
}
