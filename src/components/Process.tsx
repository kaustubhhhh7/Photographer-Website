import type { FC } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, FileText, Camera, CheckCircle2 } from 'lucide-react';

const steps = [
    {
        icon: <MessageCircle className="w-8 h-8" />,
        title: "Initial Consultation",
        description: "Understanding your vision, style preferences, and specific requirements.",
        details: ["Vision board", "Location discussion", "Package selection"]
    },
    {
        icon: <FileText className="w-8 h-8" />,
        title: "Pre-Shoot Planning",
        description: "Finalizing all details to ensure a smooth and successful session.",
        details: ["Wardrobe guidance", "Timeline drafting", "Location scouting"]
    },
    {
        icon: <Camera className="w-8 h-8" />,
        title: "The Photoshoot",
        description: "Capturing authentic moments in a relaxed and professional environment.",
        details: ["Posing guidance", "Creative direction", "Multiple setups"]
    },
    {
        icon: <CheckCircle2 className="w-8 h-8" />,
        title: "Editing & Delivery",
        description: "Professional retouching and timely delivery of your final images.",
        details: ["Color grading", "High-res gallery", "Print ordering"]
    }
];

const Process: FC = () => {
    return (
        <section id="process" className="py-20 sm:py-32 bg-luxury-bg relative overflow-hidden transition-colors duration-500">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-8 text-center md:text-left">
                    <div className="max-w-2xl mx-auto md:mx-0">
                        <span className="section-subtitle">Our Seamless Workflow</span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold !mb-0 text-luxury-text transition-colors duration-500">My Process</h2>
                    </div>
                    <div className="text-luxury-text-sec font-medium max-w-sm border-l-2 border-luxury-gold/30 pl-6 py-2 transition-colors duration-500 mx-auto md:mx-0">
                        A structured and stress-free approach to creating breathtaking imagery tailored to your needs.
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 relative">
                    {/* Connecting line for desktop */}
                    <div className="absolute top-1/4 left-0 w-full h-px bg-luxury-gold/10 -z-0 hidden lg:block"></div>

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className="relative z-10 group flex flex-col items-center md:items-start text-center md:text-left"
                        >
                            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-luxury-bg-sec text-luxury-gold flex items-center justify-center rounded-sm mb-6 sm:mb-8 transition-all duration-500 group-hover:bg-luxury-gold group-hover:text-white shadow-xl relative overflow-hidden border border-luxury-border">
                                <div className="absolute -top-4 -right-4 text-luxury-text/5 font-serif font-black text-6xl">0{index + 1}</div>
                                {step.icon}
                            </div>

                            <h3 className="text-xl sm:text-2xl font-bold text-luxury-text mb-4 group-hover:text-luxury-gold transition-colors">{step.title}</h3>
                            <p className="text-sm sm:text-base text-luxury-text-sec mb-6 leading-relaxed italic">{step.description}</p>

                            <ul className="w-full space-y-3 border-t border-luxury-border pt-6 transition-colors duration-500">
                                {step.details.map((detail, idx) => (
                                    <li key={idx} className="flex items-center justify-center md:justify-start gap-2 text-xs sm:text-sm text-luxury-text-sec font-medium">
                                        <div className="w-1.5 h-1.5 rounded-full bg-luxury-gold/50"></div>
                                        {detail}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-luxury-gold/5 rounded-full blur-[100px] pointer-events-none"></div>
        </section>
    );
};

export default Process;
