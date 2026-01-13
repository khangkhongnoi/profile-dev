'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [mounted, setMounted] = useState(false);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    useEffect(() => {
        setMounted(true);
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -70% 0px',
            threshold: 0
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        const sections = ['home', 'about', 'skills', 'projects', 'contact'];
        sections.forEach((id) => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            observer.disconnect();
        };
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
                isScrolled
                    ? "bg-dark/80 backdrop-blur-xl border-b border-white/5 py-4"
                    : "bg-transparent py-4 md:py-6"
            )}
        >
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <a href="#home" className="text-xl md:text-2xl font-bold text-white group flex items-center gap-2">
                        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-sm group-hover:rotate-12 transition-transform duration-300">
                            CVK
                        </div>
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
                            CAO VU KHANG
                        </span>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-1 bg-white/5 backdrop-blur-md px-2 py-1.5 rounded-full border border-white/10">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setActiveSection(link.href.replace('#', ''))}
                                className={cn(
                                    "relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300",
                                    activeSection === link.href.replace('#', '')
                                        ? "text-white"
                                        : "text-text-secondary hover:text-white"
                                )}
                            >
                                {mounted && activeSection === link.href.replace('#', '') && (
                                    <motion.div
                                        layoutId="active-nav"
                                        className="absolute inset-0 bg-primary/20 border border-primary/50 rounded-full -z-10"
                                        transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                                    />
                                )}
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-2 text-white/70 hover:text-white transition-colors bg-white/5 rounded-xl border border-white/10"
                    >
                        {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden overflow-hidden"
                        >
                            <div className="py-10 flex flex-col gap-6">
                                {navLinks.map((link, idx) => (
                                    <motion.a
                                        initial={{ x: -20, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: idx * 0.05 }}
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => {
                                            setIsMobileMenuOpen(false);
                                            setActiveSection(link.href.replace('#', ''));
                                        }}
                                        className={cn(
                                            "text-3xl font-black transition-all flex items-center justify-between group",
                                            activeSection === link.href.replace('#', '')
                                                ? "text-primary translate-x-3"
                                                : "text-text-secondary hover:text-white"
                                        )}
                                    >
                                        <span>{link.name}</span>
                                        <div className={cn(
                                            "w-2 h-2 rounded-full bg-primary opacity-0 transition-opacity",
                                            activeSection === link.href.replace('#', '') && "opacity-100"
                                        )} />
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );
}
