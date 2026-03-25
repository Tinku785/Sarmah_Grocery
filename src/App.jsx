import React, { useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import BentoGrid from './components/BentoGrid';
import LocationMap from './components/LocationMap';
import Footer from './components/Footer';
import StickyBottomNav from './components/StickyBottomNav';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.04, // Lower value for thicker, heavier scroll feel
      smoothWheel: true,
      wheelMultiplier: 0.8,
      touchMultiplier: 1.5,
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <div className="min-h-screen bg-transparent text-white selection:bg-leafGreen/30 relative overflow-hidden">
      <Navbar />
      
      {/* Background ambient light effects for parallax/depth */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[20%] -left-[10%] w-[50vw] h-[50vh] bg-leafGreen/10 rounded-full blur-[150px]" />
        <div className="absolute top-[30%] -right-[10%] w-[40vw] h-[60vh] bg-mangoOrange/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-[-20%] left-[20%] w-[60vw] h-[40vh] bg-cyan-500/5 rounded-full blur-[150px]" />
      </div>

      {/* Decorative texture overlay (subtle grid or noise could go here, for now it's just z-indexing) */}
      <div className="relative z-10 w-full">
        <HeroSection />
        <BentoGrid />
        <LocationMap />
      </div>
      
      <Footer />
      <StickyBottomNav />
    </div>
  );
}

export default App;
