import React from 'react';

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 glass-panel bg-darkSlate/40 border-b border-white/5 py-4 px-6 md:px-12 backdrop-blur-xl transition-all duration-300">
    <div className="max-w-7xl mx-auto flex justify-between items-center">
       <a href="#home" className="flex items-center gap-3 group">
         <img 
           src="/images/sarmah_logo.png" 
           alt="Sarmah Grocery Logo" 
           className="h-10 w-auto object-contain transition-transform group-hover:scale-110"
           style={{ mixBlendMode: 'screen' }}
         />
       </a>
       <div className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wide">
         <a href="#home" className="hover:text-leafGreen text-white/80 transition-colors">Home</a>
         <a href="#categories" className="hover:text-leafGreen text-white/80 transition-colors">Categories</a>
         <a href="#location" className="hover:text-leafGreen text-white/80 transition-colors">Location</a>
         <a href="#contact" className="hover:text-leafGreen text-white/80 transition-colors">Contact</a>
         <a href="#categories" className="btn-gooey bg-white/10 px-5 py-2.5 rounded-full border border-white/10 hover:border-green-400 text-white transition-all ml-4 block overflow-hidden relative">
           <span className="relative z-10">Order Now</span>
         </a>
       </div>
    </div>
  </nav>
);

export default Navbar;
