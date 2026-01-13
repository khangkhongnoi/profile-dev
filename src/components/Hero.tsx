'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
    return (
        <section id="home" className="min-h-screen flex items-center relative overflow-hidden bg-dark pt-20 md:pt-0">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-primary/10 blur-[80px] md:blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-blue-500/5 blur-[70px] md:blur-[100px] rounded-full translate-y-1/2 -translate-x-1/4"></div>

            <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 w-full py-12 md:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left Side - Text Content */}
                    <div className="space-y-8 md:space-y-10 text-center lg:text-left">
                        <div className="space-y-4 md:space-y-6">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary-light text-xs md:text-sm font-medium"
                            >
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                                </span>
                                Available for new opportunities
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black leading-[1.1]"
                            >
                                Hello<span className="text-primary italic">!</span><br />
                                I&apos;m <span className="text-white relative inline-block">
                                    CAO VU KHANG
                                    <svg className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-2 md:h-3 text-primary/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                                        <path d="M0 5 Q 25 0, 50 5 T 100 5" stroke="currentColor" strokeWidth="4" fill="transparent" />
                                    </svg>
                                </span>
                            </motion.h1>

                            <motion.h3
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="text-xl sm:text-2xl md:text-3xl font-bold text-text-secondary max-w-xl mx-auto lg:mx-0"
                            >
                                Building <span className="text-white">robust management software</span> & <span className="text-white">scalable digital systems</span>.
                            </motion.h3>
                        </div>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex flex-wrap gap-4 justify-center lg:justify-start"
                        >
                            <a href="#projects" className="group bg-primary hover:bg-primary-dark text-white font-black px-6 md:px-8 py-3.5 md:py-4 rounded-xl md:rounded-2xl transition-all duration-300 flex items-center gap-2 shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-1 text-sm md:text-base">
                                Explore My Work
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a href="#about" className="group border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 text-white font-black px-6 md:px-8 py-3.5 md:py-4 rounded-xl md:rounded-2xl transition-all duration-300 flex items-center gap-2 hover:-translate-y-1 text-sm md:text-base">
                                My Story
                                <ArrowRight size={18} className="text-text-secondary group-hover:text-white transition-colors rotate-90" />
                            </a>
                        </motion.div>

                        {/* Tech Stack Mini */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="pt-4"
                        >
                            <p className="text-[10px] md:text-xs font-black text-text-secondary mb-4 uppercase tracking-[0.3em]">Core Technologies</p>
                            <div className="flex flex-wrap justify-center lg:justify-start gap-5 md:gap-8 items-center opacity-30 grayscale">
                                <span className="text-lg md:text-xl font-black">C#/.NET</span>
                                <span className="text-lg md:text-xl font-black">NEXT.JS</span>
                                <span className="text-lg md:text-xl font-black">NODE.JS</span>
                                <span className="text-lg md:text-xl font-black">JAVA</span>
                                <span className="text-lg md:text-xl font-black">GOLANG</span>
                                {/* <span className="text-lg md:text-xl font-black">SPRING</span> */}


                                <span className="text-lg md:text-xl font-black">K8S</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Side - Photo with Background Decor */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative"
                    >
                        {/* Decorative Circles */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] md:w-[120%] h-[110%] md:h-[120%] -z-10 opacity-20 lg:opacity-10">
                            <svg viewBox="0 0 100 100" className="w-full h-full animate-spin-slow">
                                <circle cx="50" cy="50" r="48" stroke="white" strokeWidth="0.5" fill="none" strokeDasharray="4 4" />
                                <circle cx="50" cy="50" r="38" stroke="white" strokeWidth="0.5" fill="none" strokeDasharray="1 10" />
                            </svg>
                        </div>

                        {/* Image Container with Glow */}
                        <div className="relative aspect-square max-w-[320px] sm:max-w-[400px] lg:max-w-[500px] mx-auto lg:ml-auto">
                            <div className="absolute inset-0 bg-primary/20 rounded-full blur-[40px] md:blur-[60px] animate-pulse"></div>
                            <div className="relative h-full w-full rounded-[2.5rem] lg:rounded-3xl overflow-hidden border border-white/10 bg-dark-card shadow-2xl">
                                <Image
                                    src="/IMG_20251230_103745.jpg"
                                    alt="CAO VU KHANG"
                                    fill
                                    className="object-cover transition-transform duration-700 hover:scale-105"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent opacity-60"></div>
                            </div>

                            {/* Floating Stats */}
                            <motion.div
                                animate={{ y: [0, -8, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -left-4 md:-left-10 top-10 md:top-20 p-3 md:p-4 bg-dark-lighter/80 backdrop-blur-md border border-white/10 rounded-xl md:rounded-2xl shadow-xl z-20"
                            >
                                <span className="text-2xl md:text-3xl font-black text-primary">3+</span>
                                <p className="text-[10px] md:text-xs text-text-secondary font-black uppercase tracking-wider">Years Exp.</p>
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 8, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute -right-4 md:-right-6 bottom-10 md:bottom-20 p-3 md:p-4 bg-dark-lighter/80 backdrop-blur-md border border-white/10 rounded-xl md:rounded-2xl shadow-xl z-20"
                            >
                                <span className="text-2xl md:text-3xl font-black text-primary">Active</span>
                                <p className="text-[10px] md:text-xs text-text-secondary font-black uppercase tracking-wider">Projects</p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
