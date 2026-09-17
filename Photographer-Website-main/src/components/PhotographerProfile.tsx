import type { FC } from 'react';
import { motion } from 'framer-motion';
import { Camera, Aperture } from 'lucide-react';
import { cn } from '../lib/utils';
import { useTheme } from '../context/ThemeContext';
import profileImg from '../assets/drive-download-20260827T173643Z-1-001/dd.png';

const PhotographerProfile: FC = () => {
    const { theme } = useTheme();

    return (
        <section id="profile" className="py-20 sm:py-32 bg-luxury-bg-sec text-luxury-text relative overflow-hidden transition-colors duration-500">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-12 sm:gap-20 items-center">
                    {/* Image Column */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="w-full lg:w-2/5 relative"
                    >
                        <div className="relative z-10 border-[10px] sm:border-[20px] border-luxury-bg shadow-2xl transition-colors duration-500">
                            <img
                                src={profileImg}
                                alt="Deepak Dhumak"
                                className={cn(
                                    "w-full h-auto object-cover max-h-[700px] transition-all duration-1000",
                                    theme === 'dark' ? "grayscale hover:grayscale-0" : ""
                                )}
                            />
                            <div className="absolute -bottom-6 -right-6 sm:-bottom-10 sm:-right-10 bg-luxury-gold p-4 sm:p-8 shadow-2xl hidden sm:block">
                                <p className="text-2xl sm:text-4xl font-serif font-bold text-white mb-1">10+</p>
                                <p className="text-[8px] sm:text-[10px] uppercase tracking-[0.3em] font-bold text-luxury-bg">Years of Experience</p>
                            </div>
                        </div>
                        <div className="absolute -top-6 -left-6 sm:-top-10 sm:-left-10 w-24 h-24 sm:w-40 sm:h-40 border border-luxury-gold/30 -z-0"></div>
                    </motion.div>

                    {/* Content Column */}
                    <div className="w-full lg:w-3/5 text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="section-subtitle">Lead Photographer</span>
                            <h2 className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold mb-6 sm:mb-8 text-luxury-text leading-tight">Deepak <span className="text-gradient-gold">Dhumak</span></h2>

                            <p className="text-base sm:text-xl leading-relaxed mb-10 max-w-2xl font-light transition-colors duration-500 mx-auto lg:mx-0">
                                A passionate visual storyteller specializing in capturing genuine emotion and breathtaking aesthetics. 
                                Based in Mumbai, Deepak has spent over a decade perfecting the art of light and composition.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 mb-12 sm:mb-16 text-left">
                                <div className="flex gap-4 p-5 sm:p-6 bg-luxury-bg border border-luxury-border hover:border-luxury-gold/30 transition-all duration-500">
                                    <Camera className="w-8 h-8 sm:w-10 sm:h-10 text-luxury-gold flex-shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-base sm:text-lg mb-1 text-luxury-text">Master of Light</h4>
                                        <p className="text-xs sm:text-sm text-luxury-text-sec">Expert in Natural & Studio Lighting</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-5 sm:p-6 bg-luxury-bg border border-luxury-border hover:border-luxury-gold/30 transition-all duration-500">
                                    <Aperture className="w-8 h-8 sm:w-10 sm:h-10 text-luxury-gold flex-shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-base sm:text-lg mb-1 text-luxury-text">Premium Gear</h4>
                                        <p className="text-xs sm:text-sm text-luxury-text-sec">Canon & Sony Flagship Systems</p>
                                    </div>
                                </div>
                            </div>


                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Background Texture */}
            <div className="absolute top-0 right-0 w-full h-full opacity-[0.03] pointer-events-none text-luxury-text transition-colors duration-500">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <defs>
                        <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.1" />
                        </pattern>
                    </defs>
                    <rect width="100" height="100" fill="url(#grid)" />
                </svg>
            </div>
        </section>
    );
};

export default PhotographerProfile;
