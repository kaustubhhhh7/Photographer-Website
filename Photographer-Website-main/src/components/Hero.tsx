import { useState, useEffect } from 'react';
import type { FC } from 'react';
import { motion, type Variants } from 'framer-motion';
import { MousePointer2 } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { cn } from '../lib/utils';
import bg1 from '../assets/drive-download-20260827T173643Z-1-001/0U8A8365.JPG';
import bg2 from '../assets/drive-download-20260827T173643Z-1-001/746A0496.JPG';
import bg3 from '../assets/drive-download-20260827T173643Z-1-001/IMG_5817.JPG';
import bg4 from '../assets/drive-download-20260827T173643Z-1-001/IMG_6011.JPG';
import bg5 from '../assets/drive-download-20260827T173643Z-1-001/IMG_9380.JPG';
import bg6 from '../assets/drive-download-20260827T173643Z-1-001/IMG_9692.JPG';

const heroImages = [bg1, bg2, bg3, bg4, bg5, bg6];

const Hero: FC = () => {
    const title = "Light. Focus. Emotion.";
    const { theme } = useTheme();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    const container: Variants = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.05, delayChildren: 0.1 * i },
        }),
    };

    const child: Variants = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring" as const,
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            y: 20,
            transition: {
                type: "spring" as const,
                damping: 12,
                stiffness: 100,
            },
        },
    };

    return (
        <section id="home" className="relative h-screen w-full flex items-center overflow-hidden bg-luxury-bg transition-colors duration-500">
            {/* Advanced Background System */}
            <div className="absolute inset-0 z-0">
                {heroImages.map((img, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: index === currentImageIndex ? 1 : 0 }}
                        transition={{ duration: 1 }}
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${img})` }}
                    />
                ))}
                <div className={cn(
                    "absolute inset-0 transition-opacity duration-1000",
                    theme === 'dark' ? "bg-gradient-to-r from-luxury-bg via-luxury-bg/85 to-transparent" : "bg-white/80"
                )}></div>
                {theme === 'dark' && <div className="absolute inset-0 bg-black/40"></div>}

                {/* Floating Elements */}
                <motion.div
                    animate={{
                        y: [0, -20, 0],
                        opacity: [0.1, 0.3, 0.1]
                    }}
                    transition={{ duration: 8, repeat: Infinity }}
                    className="absolute top-1/4 left-1/4 w-96 h-96 bg-luxury-gold/10 rounded-full blur-[120px]"
                />
                <motion.div
                    animate={{
                        y: [0, 30, 0],
                        opacity: [0.05, 0.2, 0.05]
                    }}
                    transition={{ duration: 12, repeat: Infinity }}
                    className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-luxury-gold-light/5 rounded-full blur-[150px]"
                />
            </div>

            <div className="container mx-auto px-6 relative z-10 pt-20">
                <div className="max-w-4xl mx-auto flex flex-col items-center sm:items-start text-center sm:text-left">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="flex items-center gap-4 mb-8"
                    >
                        <div className="w-12 h-[1px] bg-luxury-gold hidden sm:block"></div>
                        <span className="text-luxury-gold font-medium tracking-[0.3em] sm:tracking-[0.4em] uppercase text-[10px] sm:text-xs">
                            Deepak Dhumak Photography
                        </span>
                    </motion.div>

                    <motion.h1
                        variants={container}
                        initial="hidden"
                        animate="visible"
                        className={cn(
                            "text-4xl sm:text-6xl md:text-8xl font-serif font-bold mb-8 sm:mb-10 leading-[1.1] sm:leading-[1] overflow-hidden flex flex-wrap justify-center sm:justify-start transition-colors duration-500",
                            theme === 'dark' ? "text-white" : "text-luxury-navy"
                        )}
                    >
                        {title.split(" ").map((word, wordIndex) => (
                            <span key={wordIndex} className="inline-block whitespace-nowrap mr-3 sm:mr-5 last:mr-0">
                                {word.split("").map((char, charIndex) => (
                                    <motion.span
                                        variants={child}
                                        key={`${wordIndex}-${charIndex}`}
                                        className={char === "." ? "text-luxury-gold inline-block" : "inline-block"}
                                    >
                                        {char}
                                    </motion.span>
                                ))}
                            </span>
                        ))}
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1.2 }}
                        className="flex flex-col items-center sm:items-start"
                    >
                        <p className={cn(
                            "text-base sm:text-lg md:text-2xl mb-10 sm:mb-12 leading-relaxed max-w-2xl font-light transition-colors duration-500",
                            theme === 'dark' ? "text-luxury-text-sec/70" : "text-luxury-text-sec"
                        )}>
                            Capturing life's most fleeting moments and transforming them into <span className={cn(
                                "font-medium italic underline decoration-luxury-gold underline-offset-8 transition-colors duration-500",
                                theme === 'dark' ? "text-white" : "text-luxury-navy"
                            )}>timeless memories.</span>
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto">
                            <a href="#contact" className="btn-gold group flex items-center justify-center gap-3 w-full sm:w-auto">
                                Book a Session
                                <motion.span
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                >
                                    <MousePointer2 size={18} />
                                </motion.span>
                            </a>
                            <a href="#portfolio" className={cn(
                                "btn-outline text-center flex items-center justify-center gap-2 transition-all duration-500 w-full sm:w-auto",
                                theme === 'dark' ? "!border-white/20 !text-white hover:!bg-white hover:!text-luxury-navy" : "!border-luxury-navy/20 !text-luxury-navy hover:!bg-luxury-navy hover:!text-white"
                            )}>
                                Explore Portfolio
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <div className="w-[1px] h-12 bg-gradient-to-b from-luxury-gold to-transparent"></div>
                <span className="text-[10px] uppercase tracking-[0.3em] text-luxury-gold-light/60 font-semibold rotate-90 origin-left mt-8">SCROLL</span>
            </motion.div>
        </section>
    );
};

export default Hero;
