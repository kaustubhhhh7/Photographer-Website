import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import dslrImg from '../assets/dslr_camera.png';

const About = () => {

    return (
        <section id="about" className="py-12 sm:py-16 bg-luxury-bg overflow-hidden transition-colors duration-500">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-12 sm:gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-5/12 relative"
                    >
                        <div className="relative z-10 w-full aspect-square border-8 sm:border-[12px] border-luxury-bg-sec shadow-2xl transition-colors duration-500 bg-luxury-bg-sec flex items-center justify-center overflow-hidden group">
                            <img
                                src={dslrImg}
                                alt="Professional DSLR Camera"
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                            />
                            {/* Decorative Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-luxury-bg via-transparent to-transparent opacity-50"></div>
                        </div>
                        {/* Decorative Box */}
                        <div className="absolute -bottom-4 -right-4 sm:-bottom-8 sm:-right-8 w-32 h-32 sm:w-64 sm:h-64 bg-luxury-gold/10 -z-0"></div>
                        <div className="absolute top-1/2 -left-12 transform -translate-y-1/2 rotate-90 hidden xl:block">
                            <span className="text-luxury-gold/10 text-8xl font-serif font-black tracking-widest uppercase">TRUSTED</span>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-7/12 text-center lg:text-left"
                    >
                        <span className="section-subtitle">Hello, I'm Deepak</span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-6 sm:mb-8 text-luxury-text leading-[1.2] sm:leading-tight">Capturing Life's Best Moments <br className="hidden sm:block" />With Artistic Vision</h2>
                        <p className="text-luxury-text-sec text-sm sm:text-base mb-8 leading-relaxed transition-colors duration-500 max-w-2xl mx-auto lg:mx-0">
                            With years of experience behind the lens, I specialize in creating stunning visual narratives. 
                            My approach combines technical expertise with a keen eye for detail, ensuring every shot tells a unique and compelling story.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-10 text-left">
                            {[
                                "High-Resolution Images",
                                "Creative Direction",
                                "Professional Retouching",
                                "Client-Centric Approach",
                                "Quick Turnaround",
                                "Premium Quality Prints"
                            ].map((item, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-luxury-gold/20 flex items-center justify-center">
                                        <Check className="w-3 h-3 text-luxury-gold" />
                                    </div>
                                    <span className="text-luxury-text font-medium text-sm sm:text-base">{item}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-row items-center justify-center lg:justify-start gap-6 sm:gap-12 border-t border-luxury-border pt-10 transition-colors duration-500">
                            <div className="text-center sm:text-left">
                                <h4 className="text-2xl sm:text-3xl font-serif font-bold text-luxury-text">10+</h4>
                                <p className="text-luxury-text-sec text-[10px] sm:text-sm uppercase tracking-wider">Years Experience</p>
                            </div>
                            <div className="w-px h-12 bg-luxury-gold/30"></div>
                            <div className="text-center sm:text-left">
                                <h4 className="text-2xl sm:text-3xl font-serif font-bold text-luxury-text">500+</h4>
                                <p className="text-luxury-text-sec text-[10px] sm:text-sm uppercase tracking-wider">Happy Clients</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
