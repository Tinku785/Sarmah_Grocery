import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock } from 'lucide-react';

const LocationMap = () => {
  return (
    <section id="location" className="py-24 px-4 md:px-10 max-w-7xl mx-auto mt-10 relative z-10">
      <div className="flex flex-col md:flex-row gap-12 items-center glass-panel rounded-[3rem] p-8 md:p-12 border border-white/5">
        <div className="md:w-1/3">
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 flex items-center gap-4 tracking-tight"
          >
             <MapPin className="text-mangoOrange w-10 h-10" /> 
             Find Us
          </motion.h2>
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
          >
              <p className="text-gray-300 text-xl font-medium mb-8 leading-relaxed">
                NH 36, Borghat Chariali
                <br />
                Nagaon, Assam
              </p>
              <div className="inline-flex glass-panel rounded-full px-6 py-4 items-center gap-3 text-leafGreen font-bold border border-leafGreen/30 shadow-[0_0_20px_rgba(34,197,94,0.1)]">
                 <Clock className="w-6 h-6" />
                 <span>7:09 AM - 10:09 PM Everyday</span>
              </div>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="md:w-2/3 w-full h-[450px] rounded-3xl overflow-hidden glass-panel p-2 shadow-2xl relative"
        >
            <div className="absolute inset-0 bg-transparent pointer-events-none rounded-3xl ring-1 ring-inset ring-white/10" />
           <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14300.78160456488!2d92.68449!3d26.34685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDIwJzQ4LjciTiA5MsKwNDEnMDQuMiJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(110%) brightness(90%) grayscale(20%)' }} 
              allowFullScreen="" 
              loading="lazy"
              title="Location Map"
              className="rounded-[1.25rem]"
            ></iframe>
        </motion.div>
      </div>
    </section>
  );
};

export default LocationMap;
