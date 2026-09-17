import { useState, useEffect } from 'react';
import type { FC } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Moon, Sun } from 'lucide-react';
import { cn } from '../lib/utils';
import { useTheme } from '../context/ThemeContext';

const Navbar: FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);

            // Active section highlighting
            const sections = ['home', 'about', 'process', 'portfolio', 'contact'];
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            if (current) setActiveSection(current);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [isMobileMenuOpen]);

    const navLinks = [
        { name: 'Home', href: '#home', id: 'home' },
        { name: 'About', href: '#about', id: 'about' },
        { name: 'Process', href: '#process', id: 'process' },
        { name: 'Portfolio', href: '#portfolio', id: 'portfolio' },
    ];

    return (
        <>
            <nav
                className={cn(
                'fixed top-0 left-0 right-0 transition-all duration-700 py-6 border-b',
                isMobileMenuOpen ? 'z-[1001]' : 'z-50',
                isScrolled ? 'glass-nav py-4 shadow-2xl translate-y-0 border-luxury-border' : 'bg-transparent border-transparent'
            )}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <a href="#home" className="flex items-center gap-3 group">
                    <div className="relative">
                        <img src="/pic.png" alt="Lex Elite Logo" className="w-9 h-9 object-contain transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute -inset-1 bg-luxury-gold/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                    <div className="flex flex-col">
                        <span className={cn(
                            "text-xl md:text-2xl font-serif font-bold tracking-tight leading-none transition-colors",
                            theme === 'dark' ? "text-white" : "text-luxury-text"
                        )}>
                            DEEPAK <span className="text-luxury-gold italic">DHUMAK</span>
                        </span>
                        <span className="text-[9px] uppercase tracking-[0.4em] font-semibold text-luxury-gold-light mt-1.5 opacity-80">
                            Professional Photography
                        </span>
                    </div>
                </a>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center gap-10">
                    <div className="flex items-center gap-8 mr-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={cn(
                                    'nav-link group flex items-center gap-1',
                                    activeSection === link.id ? 'text-luxury-gold active font-semibold' :
                                        (theme === 'dark' ? 'text-white/70 hover:text-white' : 'text-luxury-text/70 hover:text-luxury-text')
                                )}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    <button
                        onClick={toggleTheme}
                        className={cn(
                            "p-2 rounded-full transition-all duration-500 hover:bg-luxury-gold/10",
                            theme === 'dark' ? "text-white hover:text-luxury-gold" : "text-luxury-text hover:text-luxury-gold"
                        )}
                        title={theme === 'dark' ? "Switch to Light Luxury" : "Switch to Dark Luxury"}
                    >
                        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                    </button>

                    <div className="h-8 w-px bg-luxury-gold/20 mx-2"></div>

                    <div className="flex items-center gap-6">
                        <a href="tel:+919082901231" className={cn(
                            "flex items-center gap-2 text-sm transition-colors font-medium",
                            theme === 'dark' ? "text-white/80 hover:text-luxury-gold" : "text-luxury-text/80 hover:text-luxury-gold"
                        )}>
                            <Phone size={14} className="text-luxury-gold" />
                            <span>+91 90829 01231</span>
                        </a>
                        <a
                            href="#contact"
                            className="btn-gold !px-6 !py-2.5 text-xs uppercase tracking-widest shadow-xl"
                        >
                            Book a Shoot
                        </a>
                    </div>
                </div>

                {/* Mobile Toggle */}
                <div className="flex items-center gap-4 lg:hidden">
                    <button
                        onClick={toggleTheme}
                        className={cn(
                            "p-2 rounded-full",
                            theme === 'dark' ? "text-white" : "text-luxury-text"
                        )}
                    >
                        {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
                    </button>
                    <button
                        className={cn(
                            "transition-colors",
                            theme === 'dark' ? "text-white hover:text-luxury-gold" : "text-luxury-text hover:text-luxury-gold"
                        )}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 bg-[#0A111E] lg:hidden z-[2000] overflow-y-auto pt-24"
                    >
                        {/* Motif Background */}
                        <div className="absolute inset-0 opacity-[0.03] pointer-events-none overflow-hidden">
                            <div className="grid grid-cols-6 h-full w-full">
                                {[...Array(30)].map((_, i) => (
                                    <div key={i} className="border-r border-b border-luxury-gold/20"></div>
                                ))}
                            </div>
                        </div>

                        <div className="relative z-10 flex flex-col items-center justify-start min-h-full w-full px-6 py-12 gap-10">
                            {/* Logo inside Menu */}
                            <motion.div
                                initial={{ y: -20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.1 }}
                                className="flex flex-col items-center gap-2 mb-4"
                            >
                                <img src="/pic.png" alt="Deepak Dhumak Logo" className="w-10 h-10 object-contain" />
                                <div className="text-center">
                                    <h2 className="text-2xl font-serif font-bold text-white tracking-wider">
                                        DEEPAK <span className="text-luxury-gold italic">DHUMAK</span>
                                    </h2>
                                    <p className="text-[10px] uppercase tracking-[0.4em] text-luxury-gold-light opacity-80 mt-1">
                                        Professional Photography
                                    </p>
                                </div>
                            </motion.div>

                            {/* Close Button UI */}
                            <button
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="fixed top-8 right-8 w-12 h-12 flex items-center justify-center bg-luxury-gold/10 text-luxury-gold rounded-full transition-colors hover:bg-luxury-gold/20 z-[2001]"
                                aria-label="Close menu"
                            >
                                <X size={28} />
                            </button>

                            {/* Links */}
                            <div className="flex flex-col items-center gap-8 w-full max-w-sm">
                                {navLinks.map((link, idx) => (
                                    <motion.a
                                        key={link.name}
                                        href={link.href}
                                        initial={{ x: -30, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: 0.2 + idx * 0.05 }}
                                        className={cn(
                                            "text-3xl font-serif tracking-tight transition-all duration-300 w-full text-center py-2",
                                            activeSection === link.id ? "text-luxury-gold italic" : "text-white/80 hover:text-white"
                                        )}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {link.name}
                                    </motion.a>
                                ))}

                                <motion.a
                                    href="#contact"
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                    className="mt-8 px-12 py-5 bg-luxury-gold text-white font-bold rounded-sm text-lg shadow-2xl hover:bg-luxury-gold-light transition-all text-center w-full uppercase tracking-widest text-sm"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Book a Shoot
                                </motion.a>

                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.7 }}
                                    className="mt-8 flex flex-col items-center gap-4 text-white/40 pt-8 border-t border-white/5 w-full"
                                >
                                    <a href="tel:+919082901231" className="flex items-center gap-3 text-sm hover:text-luxury-gold transition-colors">
                                        <Phone size={14} className="text-luxury-gold" />
                                        <span>+91 90829 01231</span>
                                    </a>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
