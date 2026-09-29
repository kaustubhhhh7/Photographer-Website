import { useState } from 'react';
import type { FC } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ChevronRight, Check } from 'lucide-react';

const timeSlots = ["09:00 AM", "10:30 AM", "01:00 PM", "02:30 PM", "04:00 PM"];
const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];

const BookingUI: FC = () => {
    const [selectedDay, setSelectedDay] = useState("Mon");
    const [selectedTime, setSelectedTime] = useState("");
    const [step, setStep] = useState(1);

    return (
        <section id="booking" className="py-20 sm:py-32 bg-luxury-bg relative overflow-hidden transition-colors duration-500">
            <div className="container mx-auto px-6">
                <div className="max-w-5xl mx-auto bg-luxury-bg-sec shadow-[0_50px_100px_rgba(0,0,0,0.1)] flex flex-col lg:flex-row overflow-hidden border border-luxury-border transition-colors duration-500">

                    {/* Left Side - Info */}
                    <div className="w-full lg:w-1/3 p-8 sm:p-12 bg-luxury-gold text-white flex flex-col justify-between relative">
                        <div className="text-center sm:text-left">
                            <span className="text-luxury-bg/40 font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">Priority Booking</span>
                            <h3 className="text-2xl sm:text-3xl font-serif font-bold mb-6 text-luxury-bg uppercase">Book a <br />Photoshoot</h3>
                            <p className="text-luxury-bg/70 text-sm leading-relaxed mb-8 max-w-sm mx-auto sm:mx-0">
                                Schedule your session to create beautiful, lasting images tailored to your vision.
                            </p>

                            <ul className="space-y-4 text-left inline-block sm:block">
                                {["Pre-Shoot Consultation", "Creative Direction", "High-Res Gallery"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm font-bold text-luxury-bg">
                                        <div className="w-5 h-5 bg-white/30 rounded-full flex items-center justify-center flex-shrink-0">
                                            <Check size={12} />
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="mt-8 sm:mt-12 pt-8 border-t border-luxury-bg/10 flex items-center justify-center sm:justify-start gap-4">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-luxury-bg/20 flex items-center justify-center">
                                <Calendar size={18} className="text-luxury-bg" />
                            </div>
                            <div className="text-left">
                                <p className="text-[10px] uppercase font-bold text-luxury-bg/60">Limited Availability</p>
                                <p className="text-sm font-bold text-luxury-bg">Book for Next Week</p>
                            </div>
                        </div>

                        {/* Motif */}
                        <div className="absolute top-0 right-0 p-4 opacity-10 hidden sm:block">
                            <Calendar size={120} />
                        </div>
                    </div>

                    {/* Right Side - Interactive Picker */}
                    <div className="w-full lg:w-2/3 p-8 sm:p-12 bg-luxury-bg-sec flex flex-col relative transition-colors duration-500">
                        {step === 1 ? (
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="h-full flex flex-col"
                            >
                                <h4 className="text-xl sm:text-2xl font-serif font-bold text-luxury-text mb-8 text-center sm:text-left">Select Availability</h4>

                                <div className="mb-8">
                                    <p className="text-xs uppercase tracking-widest font-bold text-luxury-text-sec mb-4 flex items-center justify-center sm:justify-start gap-2">
                                        <Calendar size={14} /> Preferred Workday
                                    </p>
                                    <div className="flex flex-wrap justify-center sm:justify-start gap-3 sm:gap-4">
                                        {days.map((day) => (
                                            <button
                                                key={day}
                                                onClick={() => setSelectedDay(day)}
                                                className={`w-12 h-12 sm:w-14 sm:h-14 rounded-sm border transition-all duration-300 font-bold text-sm sm:text-base ${selectedDay === day ? 'bg-luxury-text text-luxury-bg border-luxury-text shadow-lg scale-110' : 'bg-luxury-bg text-luxury-text-sec border-luxury-border hover:border-luxury-gold'}`}
                                            >
                                                {day}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="mb-8">
                                    <p className="text-xs uppercase tracking-widest font-bold text-luxury-text-sec mb-4 flex items-center justify-center sm:justify-start gap-2">
                                        <Clock size={14} /> Available Slots
                                    </p>
                                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                                        {timeSlots.map((time) => (
                                            <button
                                                key={time}
                                                onClick={() => setSelectedTime(time)}
                                                className={`py-3 sm:py-4 px-2 rounded-sm border transition-all duration-300 text-xs sm:text-sm font-medium ${selectedTime === time ? 'bg-luxury-gold text-white border-luxury-gold shadow-md' : 'bg-luxury-bg border-luxury-border text-luxury-text hover:border-luxury-gold'}`}
                                            >
                                                {time}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-auto pt-8 flex justify-center sm:justify-end">
                                    <button
                                        disabled={!selectedTime}
                                        onClick={() => setStep(2)}
                                        className={`btn-gold !px-10 w-full sm:w-auto flex items-center justify-center gap-3 ${!selectedTime ? 'opacity-50 cursor-not-allowed grayscale' : ''}`}
                                    >
                                        Next Step <ChevronRight size={18} />
                                    </button>
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="h-full flex flex-col"
                            >
                                <h4 className="text-xl sm:text-2xl font-serif font-bold text-luxury-text mb-8 text-center sm:text-left">Client Details</h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 text-left">
                                    <div className="space-y-2">
                                        <label className="text-[10px] uppercase font-bold text-luxury-text-sec">Full Name</label>
                                        <input type="text" className="w-full p-4 bg-luxury-bg border-transparent border-b-2 border-b-luxury-gold/20 focus:border-b-luxury-gold outline-none transition-all placeholder:text-luxury-text-sec/30 text-luxury-text" placeholder="Johnathan Sterling" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] uppercase font-bold text-luxury-text-sec">Email Address</label>
                                        <input type="email" className="w-full p-4 bg-luxury-bg border-transparent border-b-2 border-b-luxury-gold/20 focus:border-b-luxury-gold outline-none transition-all placeholder:text-luxury-text-sec/30 text-luxury-text" placeholder="j.sterling@example.com" />
                                    </div>
                                    <div className="sm:col-span-2 space-y-2">
                                        <label className="text-[10px] uppercase font-bold text-luxury-text-sec">Photoshoot Details</label>
                                        <textarea className="w-full p-4 bg-luxury-bg border-transparent border-b-2 border-b-luxury-gold/20 focus:border-b-luxury-gold outline-none transition-all placeholder:text-luxury-text-sec/30 resize-none h-32 text-luxury-text" placeholder="Briefly describe what kind of shoot you are looking for..."></textarea>
                                    </div>
                                </div>

                                <div className="mt-auto pt-8 flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-4">
                                    <button onClick={() => setStep(1)} className="text-xs uppercase font-bold text-luxury-text-sec hover:text-luxury-gold transition-colors">Go Back</button>
                                    <button className="btn-gold !px-12 w-full sm:w-auto shadow-2xl">Confirm Appointment</button>
                                </div>
                            </motion.div>
                        )}

                        {/* Progress Line */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-luxury-bg">
                            <div className={`h-full bg-luxury-gold transition-all duration-700 ${step === 1 ? 'w-1/2' : 'w-full'}`}></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Background design elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-luxury-gold/5 blur-3xl -z-10"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-luxury-text/5 blur-3xl -z-10"></div>
        </section>
    );
};

export default BookingUI;
