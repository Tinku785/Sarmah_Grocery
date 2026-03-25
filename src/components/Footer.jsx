import React from 'react';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

const Footer = () => {
    return (
        <footer id="contact" className="mt-40 border-t border-white/5 pb-28 md:pb-12 pt-20 px-6 backdrop-blur-3xl bg-darkSlate/80 relative z-10 overflow-hidden">
            {/* Glowing top border effect */}
            <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-leafGreen/50 to-transparent shadow-[0_0_30px_theme(colors.leafGreen)]" />
            
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-sm text-gray-400 relative z-10">
                
                {/* Brand & Mission */}
                <div className="col-span-1 md:col-span-1 space-y-5">
                    <img 
                      src="/images/sarmah_logo.png" 
                      alt="Sarmah Grocery Logo" 
                      className="h-14 w-auto object-contain"
                      style={{ mixBlendMode: 'screen' }}
                    />
                    <p className="text-gray-400 leading-relaxed font-medium">
                        Your family-owned neighborhood market. Delivering hand-picked freshness, premium staples, and daily essentials directly to the heart of Borghat.
                    </p>
                    <div className="flex gap-4 pt-4">
                        <a href="#" className="bg-white/5 p-2 rounded-full hover:bg-leafGreen hover:text-navy transition-all border border-white/10 hover:border-leafGreen cursor-pointer"><Facebook size={18} /></a>
                        <a href="#" className="bg-white/5 p-2 rounded-full hover:bg-leafGreen hover:text-navy transition-all border border-white/10 hover:border-leafGreen cursor-pointer"><Instagram size={18} /></a>
                        <a href="#" className="bg-white/5 p-2 rounded-full hover:bg-leafGreen hover:text-navy transition-all border border-white/10 hover:border-leafGreen cursor-pointer"><Twitter size={18} /></a>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="col-span-1 space-y-4">
                    <h4 className="text-white text-lg font-bold tracking-tight">Quick Links</h4>
                    <ul className="space-y-3 font-medium">
                        <li><a href="#home" className="hover:text-leafGreen transition-colors flex items-center gap-2"><ArrowRight size={14} className="text-leafGreen" /> Home</a></li>
                        <li><a href="#categories" className="hover:text-leafGreen transition-colors flex items-center gap-2"><ArrowRight size={14} className="text-leafGreen" /> Categories</a></li>
                        <li><a href="#location" className="hover:text-leafGreen transition-colors flex items-center gap-2"><ArrowRight size={14} className="text-leafGreen" /> Locate Us</a></li>
                        <li><a href="#" className="hover:text-leafGreen transition-colors flex items-center gap-2"><ArrowRight size={14} className="text-leafGreen" /> Privacy Policy</a></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div className="col-span-1 space-y-4">
                    <h4 className="text-white text-lg font-bold tracking-tight">Contact Us</h4>
                    <ul className="space-y-4 font-medium">
                        <li className="flex items-start gap-3">
                            <MapPin size={18} className="text-leafGreen shrink-0 mt-1" />
                            <span>NH 36, Borghat Chariali<br/>Nagaon, Assam - 782001</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Phone size={18} className="text-leafGreen shrink-0" />
                            <span>+91 98765 43210</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Mail size={18} className="text-leafGreen shrink-0" />
                            <span>hello@sarmahgrocery.com</span>
                        </li>
                    </ul>
                </div>
                
                {/* Newsletter & Hours */}
                <div className="col-span-1 space-y-6">
                    <div className="glass-panel px-6 py-5 rounded-2xl border border-white/10 shadow-2xl relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-leafGreen/5 to-transparent pointer-events-none" />
                        <p className="font-semibold text-gray-300 mb-1 uppercase tracking-widest text-[10px]">Business Hours</p>
                        <p className="text-leafGreen text-xl font-bold flex items-center gap-2">
                           <span className="w-2.5 h-2.5 rounded-full bg-leafGreen animate-pulse shadow-[0_0_10px_theme(colors.leafGreen)]"></span>
                           7:09 AM - 10:09 PM
                        </p>
                        <p className="text-xs text-gray-400 mt-2 font-medium">Open 7 Days a week</p>
                    </div>

                    <div className="space-y-3">
                        <h4 className="text-white text-sm font-bold tracking-tight">Join our Newsletter</h4>
                        <div className="flex relative">
                            <input type="email" placeholder="Your email address" className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-5 pr-12 text-sm text-white focus:outline-none focus:border-leafGreen transition-colors" />
                            <button className="absolute right-1 top-1 bottom-1 bg-leafGreen text-navy p-2 rounded-full hover:scale-105 transition-transform cursor-pointer">
                                <ArrowRight size={16} className="font-bold" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-center mt-16 pt-6 border-t border-white/5 text-xs font-medium text-gray-500 tracking-wider relative z-10">
               <p>© {new Date().getFullYear()} Sarmah Grocery Shop. All rights reserved.</p>
               <p className="mt-2 md:mt-0 relative group cursor-default">
                 Crafted with precision for Borghat.
                 <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-leafGreen transition-all duration-300 group-hover:w-full"></span>
               </p>
            </div>
        </footer>
    );
};

export default Footer;
