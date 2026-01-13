'use client';

import { motion } from 'framer-motion';
import { Mail, MessageSquare, Facebook, Github, Send, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Contact() {
    const contactLinks = [
        {
            name: 'Email',
            value: 'ckhang177@gmail.com',
            icon: Mail,
            href: 'mailto:ckhang177@gmail.com',
            color: 'text-blue-500',
            bg: 'bg-blue-500/10'
        },
        {
            name: 'Zalo',
            value: '0357534716',
            icon: MessageSquare,
            href: 'tel:0357534716',
            color: 'text-cyan-500',
            bg: 'bg-cyan-500/10'
        },
        {
            name: 'Facebook',
            value: 'Cao Vu Khang',
            icon: Facebook,
            href: 'https://www.facebook.com/it.html.ccs/',
            color: 'text-indigo-500',
            bg: 'bg-indigo-500/10'
        },
        {
            name: 'GitHub',
            value: 'github.com/caovukhang',
            icon: Github,
            href: 'https://github.com/khangkhongnoi',
            color: 'text-slate-200',
            bg: 'bg-slate-200/10'
        }
    ];

    return (
        <section id="contact" className="bg-dark-lighter py-32 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-primary/20 blur-[120px] rounded-full pointer-events-none opacity-40"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <div className="flex items-center justify-center gap-4">
                            <div className="h-[2px] w-12 bg-primary"></div>
                            <h3 className="text-sm font-bold text-primary uppercase tracking-[0.3em]">
                                Connectivity
                            </h3>
                            <div className="h-[2px] w-12 bg-primary"></div>
                        </div>
                        <h2 className="text-5xl md:text-6xl font-bold text-white uppercase tracking-tighter">
                            Let&apos;s Build <span className="text-primary italic">Together</span>
                        </h2>
                        <p className="text-text-secondary text-xl max-w-2xl mx-auto font-medium">
                            Currently open to high-impact collaborations and architectural opportunities.
                        </p>
                    </motion.div>
                </div>

                {/* Contact Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-32">
                    {contactLinks.map((contact, index) => (
                        <motion.a
                            key={contact.name}
                            href={contact.href}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-dark p-8 rounded-[2rem] border border-white/5 hover:border-primary/20 transition-all duration-300 group relative overflow-hidden h-full"
                        >
                            <div className="relative z-10">
                                <div className={cn("inline-flex p-4 rounded-2xl mb-8 transition-transform duration-300 group-hover:scale-110", contact.bg)}>
                                    <contact.icon className={cn("w-8 h-8", contact.color)} />
                                </div>
                                <h3 className="text-xl font-black text-white mb-2 uppercase tracking-wide">
                                    {contact.name}
                                </h3>
                                <p className="text-text-secondary text-sm break-all font-medium">
                                    {contact.value}
                                </p>
                            </div>
                            <ArrowUpRight size={24} className="absolute top-8 right-8 text-white/10 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                        </motion.a>
                    ))}
                </div>

                {/* Main CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center bg-dark py-20 px-8 rounded-[3rem] border border-white/5 relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent"></div>
                    <div className="relative z-10 max-w-2xl mx-auto space-y-10">
                        <h3 className="text-3xl md:text-4xl font-bold text-white">
                            Thank you for taking the time <span className="text-primary italic">to explore my journey.</span>
                        </h3>
                        <a href="mailto:ckhang177@gmail.com" className="group inline-flex items-center gap-4 bg-primary hover:bg-primary-dark text-white font-black px-12 py-6 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/40">
                            Let&apos;s Connect
                            <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Footer */}
            <footer className="pt-32 pb-16 relative z-10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                        <div className="flex items-center gap-6">
                            <span className="text-2xl font-black text-white tracking-tighter">CVK<span className="text-primary">.</span></span>
                            <p className="text-text-secondary text-sm font-medium">© 2026 CAO VU KHANG. All rights reserved.</p>
                        </div>
                        <div className="flex gap-8 text-text-secondary text-sm font-bold uppercase tracking-widest">
                            <a href="#home" className="hover:text-primary transition-colors">Origins</a>
                            <a href="#projects" className="hover:text-primary transition-colors">Manifesto</a>
                            <a href="#contact" className="hover:text-primary transition-colors">Transmit</a>
                        </div>
                    </div>
                    <div className="mt-12 text-center text-[10px] text-white/20 font-black uppercase tracking-[0.8em]">
                        Developed with Next.js • Tailwind • Framer Motion
                    </div>
                </div>
            </footer>
        </section>
    );
}
