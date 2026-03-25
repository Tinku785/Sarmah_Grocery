import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen pt-20 flex flex-col md:flex-row items-center justify-center px-6 overflow-hidden relative">
      <div className="md:w-1/2 z-10 space-y-6 pt-10 md:pt-0 pl-0 md:pl-10 lg:pl-20">
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-black font-sans text-transparent bg-clip-text bg-gradient-to-r from-leafGreen via-green-400 to-mangoOrange leading-tight tracking-tighter drop-shadow-2xl"
        >
          Freshness <br/>Delivered to<br/>Borghat.
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-300 font-medium max-w-lg leading-relaxed"
        >
          Your family-owned neighborhood market for daily freshness, quality staples, and everything in between.
        </motion.p>
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.6, duration: 0.5 }}
           className="pt-4"
        >
            <a href="#categories" className="btn-gooey bg-white/5 backdrop-blur-md border border-white/20 hover:border-green-400 text-white font-bold py-4 px-10 rounded-full shadow-[0_0_20px_theme(colors.glassWhite)] transition-all hover:scale-105 inline-block cursor-pointer">
                Shop Now
            </a>
        </motion.div>
      </div>
      
      <div className="md:w-1/2 h-[50vh] md:h-screen w-full relative z-0 mt-10 md:mt-0 right-0 overflow-hidden md:rounded-l-full glass-panel glass-glow border-l-0 shadow-[0_0_50px_rgba(255,255,255,0.05)]">
          {/* Using a high-quality abstract/grocery mix for the 3D render placeholder with a slower ken burns */}
         <img 
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200&q=80" 
            alt="Grocery Freshness" 
            className="w-full h-full object-cover animate-ken-burns opacity-70 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-darkSlate via-darkSlate/50 to-transparent hidden md:block" />
          <div className="absolute inset-0 bg-gradient-to-t from-darkSlate via-darkSlate/50 to-transparent md:hidden block" />
      </div>
    </section>
  );
};

export default HeroSection;
