import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThermometerSnowflake, Archive, Apple, Candy, X, ShoppingCart, ArrowRight } from 'lucide-react';
import { categoryData } from '../data/products';

const themeMap = {
  'cyan-400': { border: 'border-cyan-400/30', bg10: 'bg-cyan-400/10', bg20: 'bg-cyan-400/20' },
  'mangoOrange': { border: 'border-mangoOrange/30', bg10: 'bg-mangoOrange/10', bg20: 'bg-mangoOrange/20' },
  'leafGreen': { border: 'border-leafGreen/30', bg10: 'bg-leafGreen/10', bg20: 'bg-leafGreen/20' },
  'purple-400': { border: 'border-purple-400/30', bg10: 'bg-purple-400/10', bg20: 'bg-purple-400/20' },
};

const BentoGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedCategory) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; }
  }, [selectedCategory]);

  return (
    <section id="categories" className="py-24 px-4 md:px-10 max-w-7xl mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-16 text-center tracking-tight">
          Shop by <span className="text-transparent bg-clip-text bg-gradient-to-r from-leafGreen to-green-300 drop-shadow-lg">Category</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-auto md:h-[650px]">
        {/* Chilled & Frozen */}
        <motion.div 
          onClick={() => setSelectedCategory(categoryData.chilled)}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="glass-panel glass-glow rounded-[2rem] p-8 md:col-span-2 md:row-span-2 relative overflow-hidden group flex flex-col justify-end min-h-[400px] cursor-pointer"
        >
          {/* 3D High Gloss Render */}
          <div className="absolute inset-0 w-full h-full pointer-events-none z-0 transition-transform duration-500 group-hover:scale-110">
             <img 
               src="/images/ice_cream_soda.png" 
               alt="Ice Cream & Soda" 
               className="w-full h-full object-cover object-center filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)] opacity-80" 
               style={{ mixBlendMode: 'screen' }}
             />
          </div>

          {/* Abstract background effects */}
          <div className="absolute inset-0 bg-gradient-to-t from-darkSlate border-teal-500/10 via-darkSlate/50 to-transparent z-0 transition-opacity duration-300 group-hover:opacity-80 rounded-[2rem] overflow-hidden pointer-events-none" />
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-cyan-500/20 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute top-10 -left-10 w-40 h-40 bg-blue-500/20 rounded-full blur-[60px] pointer-events-none" />

          <div className="absolute top-8 right-8 bg-navy/50 p-4 rounded-2xl backdrop-blur-md shadow-lg border border-white/5 opacity-0 group-hover:opacity-100 transition-opacity">
            <ThermometerSnowflake className="w-10 h-10 text-cyan-400" />
          </div>
          <div className="z-10 bg-navy/60 backdrop-blur-xl p-6 rounded-2xl inline-block max-w-[85%] border border-white/10 shadow-xl transform group-hover:-translate-y-2 transition-transform duration-300 relative pointer-events-none">
             <h3 className="text-3xl font-bold mb-2 tracking-tight">Chilled & Frozen</h3>
             <p className="text-base text-gray-300 font-medium">Click to view 20+ items</p>
          </div>
        </motion.div>

        {/* Kitchen Staples */}
        <motion.div 
          onClick={() => setSelectedCategory(categoryData.staples)}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="glass-panel glass-glow rounded-[2rem] p-8 md:col-span-2 md:row-span-1 relative overflow-hidden group flex items-center justify-between min-h-[250px] cursor-pointer"
        >
          {/* 3D Sack of Rice */}
          <div className="absolute inset-0 w-full h-full pointer-events-none z-0 transition-transform duration-500 group-hover:scale-110">
            <img 
              src="/images/sack_of_rice.png" 
              alt="Sack of Rice" 
              className="w-full h-full object-cover object-center filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)] opacity-80" 
              style={{ mixBlendMode: 'screen' }}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-darkSlate/80 via-darkSlate/30 to-transparent z-0 pointer-events-none" />

          <div className="z-10 bg-navy/60 backdrop-blur-xl p-5 border border-white/10 rounded-2xl shadow-xl group-hover:translate-x-2 transition-transform duration-300 relative max-w-[60%] pointer-events-none">
            <h3 className="text-2xl font-bold mb-2 tracking-tight flex items-center gap-2"><Archive className="text-mangoOrange w-6 h-6"/> Kitchen Staples</h3>
            <p className="text-base text-gray-300 font-medium">Click to view 20+ items</p>
          </div>
          
          <div className="absolute inset-0 rounded-[2rem] overflow-hidden pointer-events-none">
             <div className="absolute right-0 top-0 w-40 h-full bg-gradient-to-l from-mangoOrange/10 to-transparent" />
          </div>
        </motion.div>

        {/* Daily Fresh */}
        <motion.div 
          onClick={() => setSelectedCategory(categoryData.fresh)}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="glass-panel glass-glow rounded-[2rem] p-6 md:col-span-1 md:row-span-1 relative overflow-hidden group flex flex-col justify-end min-h-[250px] cursor-pointer"
        >
          {/* 3D Fresh Produce */}
          <div className="absolute inset-0 w-full h-full pointer-events-none z-0 transition-transform duration-500 group-hover:scale-110">
            <img 
              src="/images/fresh_produce.png" 
              alt="Fresh Produce Vegetables" 
              className="w-full h-full object-cover object-center filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.9)] opacity-80" 
              style={{ mixBlendMode: 'screen' }}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-darkSlate/90 via-darkSlate/40 to-transparent z-0 pointer-events-none" />

          <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-leafGreen/10 rounded-full blur-[40px] pointer-events-none" />
           <div className="z-10 bg-navy/60 backdrop-blur-xl p-4 border border-white/10 rounded-2xl shadow-xl group-hover:-translate-y-1 transition-transform duration-300 relative pointer-events-none">
            <h3 className="text-xl font-bold mb-1 tracking-tight flex items-center gap-2 text-white"><Apple className="text-leafGreen w-5 h-5"/> Daily Fresh</h3>
            <p className="text-sm text-gray-300 font-medium leading-snug">View 20+ items</p>
          </div>
        </motion.div>

        {/* Snacks & Munchies */}
        <motion.div 
          onClick={() => setSelectedCategory(categoryData.snacks)}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="glass-panel glass-glow rounded-[2rem] p-6 md:col-span-1 md:row-span-1 relative overflow-hidden group flex flex-col justify-end min-h-[250px] cursor-pointer"
        >
           {/* 3D Snacks & Munchies */}
           <div className="absolute inset-0 w-full h-full pointer-events-none z-0 transition-transform duration-500 group-hover:scale-110">
            <img 
              src="/images/snacks_munchies.png" 
              alt="Snacks and Chips" 
              className="w-full h-full object-cover object-center filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.9)] opacity-80" 
              style={{ mixBlendMode: 'screen' }}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-darkSlate/90 via-darkSlate/40 to-transparent z-0 pointer-events-none" />

          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-[40px] pointer-events-none" />
           <div className="z-10 bg-navy/60 backdrop-blur-xl p-4 border border-white/10 rounded-2xl shadow-xl group-hover:-translate-y-1 transition-transform duration-300 relative pointer-events-none">
            <h3 className="text-xl font-bold mb-1 tracking-tight flex items-center gap-2 text-white"><Candy className="text-purple-400 w-5 h-5"/> Snacks</h3>
            <p className="text-sm text-gray-300 font-medium leading-snug">View 20+ items</p>
          </div>
        </motion.div>
      </div>

      {/* Expanded Category Modal */}
      <AnimatePresence>
        {selectedCategory && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-darkSlate/80 backdrop-blur-2xl"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 40, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 40, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className={`w-full max-w-6xl h-full max-h-[90vh] glass-panel ${themeMap[selectedCategory.theme].border} rounded-3xl overflow-hidden flex flex-col shadow-[0_0_50px_rgba(0,0,0,0.5)]`}
            >
              {/* Modal Header */}
              <div className={`p-6 border-b border-white/10 ${themeMap[selectedCategory.theme].bg10} flex justify-between items-center shrink-0 relative overflow-hidden`}>
                <div className={`absolute top-0 right-0 w-96 h-96 ${themeMap[selectedCategory.theme].bg20} blur-[100px] pointer-events-none rounded-full -translate-y-1/2 translate-x-1/2`} />
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold tracking-tight text-white mb-1 flex items-center gap-3">
                    {selectedCategory.title}
                  </h3>
                  <p className="text-gray-300 font-medium">{selectedCategory.subtitle} - {selectedCategory.products.length} Items</p>
                </div>
                <button 
                  onClick={() => setSelectedCategory(null)}
                  className="relative z-10 bg-white/10 hover:bg-red-500/80 p-3 rounded-full transition-colors border border-white/20 hover:border-red-500"
                >
                  <X size={24} className="text-white" />
                </button>
              </div>

              {/* Products Grid - Scrollable */}
              <div className="flex-1 overflow-y-auto p-6 md:p-8 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent hover:scrollbar-thumb-white/40">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                  {selectedCategory.products.map((product) => (
                    <motion.div 
                      key={product.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-navy/40 border border-white/10 rounded-2xl p-4 hover:border-green-400/50 transition-colors group flex flex-col"
                    >
                      <div className="w-full aspect-square rounded-xl overflow-hidden bg-darkSlate mb-4 relative">
                        <img 
                          src={product.img} 
                          alt={product.name} 
                          className="w-full h-full object-cover mix-blend-screen opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-500"
                        />
                      </div>
                      <div className="flex-1 flex flex-col justify-between">
                         <div>
                           <h4 className="font-semibold text-white text-sm mb-1 leading-tight">{product.name}</h4>
                         </div>
                         <div className="flex justify-between items-end mt-4">
                           <span className="text-leafGreen font-bold">{product.price}</span>
                           <button className="bg-white/10 hover:bg-leafGreen p-2 rounded-xl text-white hover:text-navy transition-colors">
                             <ShoppingCart size={16} />
                           </button>
                         </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-6 border-t border-white/10 bg-navy/50 flex justify-center items-center shrink-0">
                  <button className="btn-gooey bg-white/10 border border-white/20 hover:border-green-400 text-white font-bold py-3 px-8 rounded-full shadow-[0_0_20px_theme(colors.glassWhite)] transition-all hover:scale-105 flex items-center gap-2">
                      Explore more in store <ArrowRight size={18} />
                  </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default BentoGrid;
