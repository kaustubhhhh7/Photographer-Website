import type { FC } from 'react';
import { motion } from 'framer-motion';

import img1 from '../assets/drive-download-20260827T173643Z-1-001/0U8A8365.JPG';
import img2 from '../assets/drive-download-20260827T173643Z-1-001/746A0496.JPG';
import img3 from '../assets/drive-download-20260827T173643Z-1-001/IMG_5817.JPG';
import img4 from '../assets/drive-download-20260827T173643Z-1-001/IMG_6011.JPG';
import img5 from '../assets/drive-download-20260827T173643Z-1-001/IMG_9380.JPG';
import img6 from '../assets/drive-download-20260827T173643Z-1-001/IMG_9692.JPG';

const portfolioImages = [
    { src: img1, title: 'Portrait Session' },
    { src: img2, title: 'Event Coverage' },
    { src: img3, title: 'Candid Moments' },
    { src: img4, title: 'Fashion Shoot' },
    { src: img5, title: 'Lifestyle' },
    { src: img6, title: 'Editorial' },
];

const Portfolio: FC = () => {
    return (
        <section id="portfolio" className="py-20 sm:py-32 bg-luxury-bg relative transition-colors duration-500">
            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center text-center mb-16 sm:mb-24">
                    <span className="section-subtitle">Selected Works</span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-8 transition-colors duration-500 text-luxury-text">Portfolio</h2>
                    <div className="section-divider"></div>
                    <p className="max-w-3xl mx-auto text-luxury-text-sec mt-2 text-base sm:text-lg font-light leading-relaxed transition-colors duration-500">
                        Explore a curated selection of my recent photography projects, showcasing a diverse range of styles and subjects.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {portfolioImages.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className="group relative overflow-hidden bg-luxury-bg-sec rounded-sm shadow-lg"
                        >
                            <img 
                                src={item.src} 
                                alt={item.title} 
                                className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110" 
                            />
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center">
                                <h3 className="text-2xl font-serif font-bold text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    {item.title}
                                </h3>
                                <div className="w-12 h-px bg-luxury-gold translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100"></div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
