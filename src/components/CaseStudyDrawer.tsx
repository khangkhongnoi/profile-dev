'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useEffect } from 'react';

interface CaseStudyProps {
    isOpen: boolean;
    onClose: () => void;
    project: {
        title: string;
        description: string;
        tech: string[];
        category: string;
        detailedDescription?: string;
        problem?: string;
        solution?: string;
        features?: string[];
        results?: string[];
        github?: string;
        live?: string;
    } | null;
}

export default function CaseStudyDrawer({ isOpen, onClose, project }: CaseStudyProps) {
    // Prevent scroll when drawer is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!project) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-dark/80 backdrop-blur-sm z-[99]"
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed right-0 top-0 h-full w-full max-w-2xl bg-dark-lighter border-l border-white/10 z-[100] overflow-y-auto shadow-2xl"
                    >
                        {/* Header */}
                        <div className="sticky top-0 bg-dark-lighter/80 backdrop-blur-md p-6 border-b border-white/10 z-10 flex items-center justify-between">
                            <div>
                                <span className="text-[10px] font-black text-primary uppercase tracking-widest mb-1 block">
                                    {project.category}
                                </span>
                                <h2 className="text-2xl md:text-3xl font-black text-white">{project.title}</h2>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-2 hover:bg-white/5 rounded-full transition-colors group"
                            >
                                <X className="text-text-secondary group-hover:text-white transition-colors" />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="p-6 md:p-10 space-y-12">
                            {/* Overview */}
                            <section className="space-y-4">
                                <h3 className="text-lg font-black text-white uppercase tracking-wider flex items-center gap-2">
                                    <div className="w-1.5 h-6 bg-primary" />
                                    Project Overview
                                </h3>
                                <p className="text-text-secondary leading-relaxed text-lg italic">
                                    {project.detailedDescription || project.description}
                                </p>
                            </section>

                            {/* Problem & Solution */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <section className="space-y-4">
                                    <h4 className="text-sm font-black text-red-400 uppercase tracking-widest flex items-center gap-2">
                                        <AlertCircle size={16} />
                                        The Challenge
                                    </h4>
                                    <p className="text-text-secondary text-sm leading-relaxed">
                                        {project.problem || "Addressing complex institutional workflows and ensuring data integrity across multiple departments."}
                                    </p>
                                </section>
                                <section className="space-y-4">
                                    <h4 className="text-sm font-black text-green-400 uppercase tracking-widest flex items-center gap-2">
                                        <CheckCircle2 size={16} />
                                        The Solution
                                    </h4>
                                    <p className="text-text-secondary text-sm leading-relaxed">
                                        {project.solution || "Implemented a robust microservices architecture with automated reporting and real-time synchronisation."}
                                    </p>
                                </section>
                            </div>

                            {/* Tech Stack */}
                            <section className="space-y-4">
                                <h3 className="text-lg font-black text-white uppercase tracking-wider">Technologies Used</h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((t) => (
                                        <span key={t} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-bold text-white/70">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </section>

                            {/* Key Features */}
                            <section className="space-y-4">
                                <h3 className="text-lg font-black text-white uppercase tracking-wider">Key Modules</h3>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {(project.features || ["User Authentication", "Dashboard Analytics", "Resource Management", "Automated Notifications"]).map((feature, i) => (
                                        <li key={i} className="flex items-center gap-3 text-sm text-text-secondary font-medium">
                                            <ArrowRight size={14} className="text-primary" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </section>

                            {/* Results & Impact */}
                            {project.results && project.results.length > 0 && (
                                <section className="space-y-4">
                                    <h3 className="text-lg font-black text-white uppercase tracking-wider flex items-center gap-2">
                                        <div className="w-1.5 h-6 bg-green-500" />
                                        Results & Impact
                                    </h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {project.results.map((result, i) => (
                                            <div key={i} className="bg-green-500/5 border border-green-500/20 rounded-xl p-4">
                                                <p className="text-sm text-text-secondary font-medium flex items-start gap-2">
                                                    <CheckCircle2 size={16} className="text-green-400 mt-0.5 flex-shrink-0" />
                                                    <span>{result}</span>
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            )}

                            {/* Footer Links */}
                            <div className="pt-8 border-t border-white/5 flex flex-wrap gap-4">
                                {project.live && (
                                    <a href={project.live} target="_blank" className="flex-1 bg-primary hover:bg-primary-dark text-white font-black py-4 rounded-2xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-primary/20">
                                        Live Demo <ExternalLink size={18} />
                                    </a>
                                )}
                                {project.github && (
                                    <a href={project.github} target="_blank" className="flex-1 bg-white/5 hover:bg-white/10 text-white font-black py-4 rounded-2xl flex items-center justify-center gap-2 transition-all border border-white/10">
                                        View Code <Github size={18} />
                                    </a>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
