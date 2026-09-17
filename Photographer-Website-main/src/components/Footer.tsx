import type { FC } from 'react';
import { Linkedin, Twitter, Facebook, Instagram, ArrowUpRight } from 'lucide-react';

const Footer: FC = () => {
    return (
        <footer className="bg-luxury-bg pt-24 pb-12 text-luxury-text border-t border-luxury-border relative overflow-hidden transition-colors duration-500">
            {/* Background Branding */}
            <div className="absolute top-0 right-0 p-20 opacity-[0.03] pointer-events-none hidden xl:block text-luxury-text transition-colors duration-500">
                <img src="/pic.png" alt="" className="w-[400px] h-[400px] opacity-10 grayscale invert" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 sm:gap-16 mb-20 sm:mb-24 text-center sm:text-left">
                    <div className="lg:col-span-2 flex flex-col items-center sm:items-start">
                        <a href="#home" className="flex items-center gap-3 mb-8 group w-fit">
                            <img src="/pic.png" alt="Lex Elite Logo" className="w-10 h-10 object-contain" />
                            <div className="flex flex-col">
                                <span className="text-2xl font-serif font-bold tracking-tight text-luxury-text">
                                    DEEPAK <span className="text-luxury-gold italic">DHUMAK</span>
                                </span>
                                <span className="text-[9px] uppercase tracking-[0.4em] font-semibold text-luxury-gold-light mt-1.5 opacity-80 transition-colors duration-500">
                                    Professional Photography
                                </span>
                            </div>
                        </a>
                        <p className="text-luxury-text-sec leading-relaxed mb-10 text-base sm:text-lg font-light max-w-sm transition-colors duration-500 mx-auto sm:mx-0">
                            Capturing life's most precious moments with artistic vision and technical excellence.
                        </p>
                        <div className="flex gap-4 sm:gap-6 justify-center sm:justify-start">
                            {[Linkedin, Twitter, Facebook, Instagram].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 sm:w-12 sm:h-12 rounded-sm border border-luxury-border flex items-center justify-center hover:bg-luxury-gold hover:border-luxury-gold transition-all duration-500 group">
                                    <Icon size={18} className="text-luxury-text-sec group-hover:text-white transition-colors duration-500" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col items-center sm:items-start">
                        <h4 className="text-sm font-bold uppercase tracking-[0.3em] text-luxury-gold mb-8 sm:mb-10">Studio</h4>
                        <ul className="space-y-6 text-luxury-text-sec text-sm transition-colors duration-500">
                            <li className="flex flex-col gap-1">
                                <span className="text-luxury-text font-medium transition-colors duration-500">Mumbai</span>
                                Maharashtra, India
                            </li>
                            <li className="flex flex-col gap-1">
                                <span className="text-luxury-text font-medium transition-colors duration-500">Contact</span>
                                +91 90829 01231
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col items-center sm:items-start">
                        <h4 className="text-sm font-bold uppercase tracking-[0.3em] text-luxury-gold mb-8 sm:mb-10">Explore</h4>
                        <ul className="space-y-4 text-luxury-text-sec text-sm font-medium transition-colors duration-500">
                            <li><a href="#about" className="hover:text-luxury-gold transition-colors flex items-center gap-2 group justify-center sm:justify-start">About Me <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
                            <li><a href="#portfolio" className="hover:text-luxury-gold transition-colors flex items-center gap-2 group justify-center sm:justify-start">Portfolio <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
                            <li><a href="#contact" className="hover:text-luxury-gold transition-colors flex items-center gap-2 group justify-center sm:justify-start">Book a Shoot <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
                        </ul>
                    </div>

                    <div className="flex flex-col items-center sm:items-start">
                        <h4 className="text-sm font-bold uppercase tracking-[0.3em] text-luxury-gold mb-8 sm:mb-10">Policies</h4>
                        <ul className="space-y-4 text-luxury-text-sec text-[11px] leading-relaxed transition-colors duration-500">
                            <li>Privacy Policy</li>
                            <li>Booking Terms</li>
                            <li>Copyright Notice</li>
                            <li className="pt-4 border-t border-luxury-border">
                                All images © Deepak Dhumak. Do not reproduce without permission.
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-luxury-border pt-12 flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8 transition-colors duration-500 text-center md:text-left">
                    <p className="text-luxury-text-sec opacity-30 text-[10px] uppercase font-bold tracking-[0.2em] transition-colors duration-500">
                        © 2025 CORE3 TEAM ALL RIGHTS RESERVED.
                    </p>
                    <div className="text-luxury-text-sec text-[10px] uppercase font-bold tracking-[0.2em] transition-colors duration-500 opacity-60 flex flex-col sm:flex-row gap-1 sm:gap-2 items-center">
                        <span>Designed by <span className="text-luxury-gold">CORE3</span></span>
                        <span className="hidden sm:inline">|</span>
                        <span>Contact: <span className="text-luxury-gold">Kaustubh Ghadshi - 8451851439</span></span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
