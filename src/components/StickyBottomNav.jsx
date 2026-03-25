import React from 'react';
import { Phone, MessageCircle, MapPin } from 'lucide-react';

const StickyBottomNav = () => {
  return (
    <div className="md:hidden fixed bottom-6 left-6 right-6 z-50">
      <div className="glass-panel bg-navy/90 backdrop-blur-2xl rounded-full px-8 py-5 flex justify-between items-center border border-leafGreen/40 shadow-[0_10px_40px_rgba(34,197,94,0.2)]">
        <a href="tel:+910000000000" className="flex flex-col items-center gap-1.5 text-gray-400 hover:text-white transition-colors group">
          <div className="bg-white/5 p-2.5 rounded-full group-hover:bg-leafGreen/20 group-hover:scale-110 transition-transform">
             <Phone className="w-5 h-5 text-gray-200 group-hover:text-leafGreen" />
          </div>
          <span className="text-[10px] uppercase font-bold tracking-widest">Call</span>
        </a>
        
        <a href="https://wa.me/910000000000" target="_blank" rel="noreferrer" className="flex flex-col items-center gap-1.5 text-gray-400 hover:text-white transition-colors group relative -top-4">
          <div className="bg-leafGreen p-4.5 rounded-full shadow-[0_0_20px_theme(colors.leafGreen)] animate-pulse-slow border-2 border-darkSlate group-hover:scale-105 transition-transform">
             <MessageCircle className="w-7 h-7 text-navy" />
          </div>
          <span className="text-[10px] uppercase font-bold tracking-widest text-leafGreen mt-0.5">Order</span>
        </a>

        <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="flex flex-col items-center gap-1.5 text-gray-400 hover:text-white transition-colors group">
          <div className="bg-white/5 p-2.5 rounded-full group-hover:bg-mangoOrange/20 group-hover:scale-110 transition-transform">
             <MapPin className="w-5 h-5 text-gray-200 group-hover:text-mangoOrange" />
          </div>
          <span className="text-[10px] uppercase font-bold tracking-widest">Map</span>
        </a>
      </div>
    </div>
  );
};

export default StickyBottomNav;
