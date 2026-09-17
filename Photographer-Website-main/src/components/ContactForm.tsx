import type { FC } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const ContactForm: FC = () => {
    return (
        <section id="contact" className="py-20 sm:py-32 bg-luxury-bg-sec transition-colors duration-500">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-12 sm:gap-20">
                    {/* Info Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/3 p-8 sm:p-12 bg-luxury-bg border border-luxury-border shadow-2xl relative overflow-hidden transition-colors duration-500"
                    >
                        <h3 className="text-2xl sm:text-3xl font-serif font-bold text-luxury-text mb-8 text-center sm:text-left">Direct Channels</h3>

                        <div className="space-y-8 sm:space-y-12">
                            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 sm:gap-6">
                                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-luxury-bg-sec border border-luxury-border flex items-center justify-center text-luxury-gold transition-colors duration-500 flex-shrink-0">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase tracking-widest font-bold text-luxury-gold mb-1">Direct Line</p>
                                    <p className="text-lg sm:text-xl font-bold text-luxury-text">+91 90829 01231</p>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 sm:gap-6">
                                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-luxury-bg-sec border border-luxury-border flex items-center justify-center text-luxury-gold transition-colors duration-500 flex-shrink-0">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase tracking-widest font-bold text-luxury-gold mb-1">Email</p>
                                    <p className="text-lg sm:text-xl font-bold text-luxury-text">contact@deepakdhumak.com</p>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 sm:gap-6">
                                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-luxury-bg-sec border border-luxury-border flex items-center justify-center text-luxury-gold transition-colors duration-500 flex-shrink-0">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase tracking-widest font-bold text-luxury-gold mb-1">Studio / Location</p>
                                    <p className="text-lg sm:text-xl font-bold text-luxury-text">Mumbai, India</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 sm:mt-16 pt-8 sm:pt-12 border-t border-luxury-border transition-colors duration-500 text-center sm:text-left">
                            <p className="text-luxury-text-sec text-xs sm:text-sm italic">
                                For urgent bookings or inquiries, feel free to call directly.
                            </p>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-2/3 text-center sm:text-left"
                    >
                        <span className="section-subtitle">Let's Connect</span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-8 transition-colors duration-500 text-luxury-text">Send a Message</h2>

                        <form className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mt-12 text-left">
                            <div className="space-y-2">
                                <label className="text-[10px] uppercase font-bold text-luxury-text-sec">Full Name</label>
                                <input type="text" className="w-full p-4 bg-luxury-bg border-transparent border-b-2 border-b-luxury-gold/20 focus:border-b-luxury-gold outline-none transition-all placeholder:text-luxury-text-sec/30 text-luxury-text" placeholder="John Doe" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] uppercase font-bold text-luxury-text-sec">Email Address</label>
                                <input type="email" className="w-full p-4 bg-luxury-bg border-transparent border-b-2 border-b-luxury-gold/20 focus:border-b-luxury-gold outline-none transition-all placeholder:text-luxury-text-sec/30 text-luxury-text" placeholder="john@example.com" />
                            </div>
                            <div className="space-y-2 sm:col-span-2">
                                <label className="text-[10px] uppercase font-bold text-luxury-text-sec">Subject</label>
                                <input type="text" className="w-full p-4 bg-luxury-bg border-transparent border-b-2 border-b-luxury-gold/20 focus:border-b-luxury-gold outline-none transition-all placeholder:text-luxury-text-sec/30 text-luxury-text" placeholder="Wedding Shoot, Portrait Session, etc." />
                            </div>
                            <div className="sm:col-span-2 space-y-2">
                                <label className="text-[10px] uppercase font-bold text-luxury-text-sec">Message</label>
                                <textarea className="w-full p-4 bg-luxury-bg border-transparent border-b-2 border-b-luxury-gold/20 focus:border-b-luxury-gold outline-none transition-all placeholder:text-luxury-text-sec/30 resize-none h-40 sm:h-48 text-luxury-text" placeholder="Describe your photography needs..."></textarea>
                            </div>

                            <div className="sm:col-span-2 flex justify-center sm:justify-end">
                                <button type="submit" className="btn-gold !px-10 sm:!px-16 w-full sm:w-auto flex items-center justify-center gap-4 group">
                                    Send Message <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
