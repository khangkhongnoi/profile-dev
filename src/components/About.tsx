'use client';

import { motion } from 'framer-motion';
import { Monitor, Building2, GraduationCap, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function About() {
    const services = [
        {
            title: 'University Solutions',
            description: 'Specialized management software for university departments, staff, and students.',
            icon: GraduationCap,
            color: 'text-blue-500',
            bg: 'bg-blue-500/10'
        },
        {
            title: 'Hospitality Tech',
            description: 'End-to-end hotel management systems and high-converting booking websites.',
            icon: Building2,
            color: 'text-purple-500',
            bg: 'bg-purple-500/10'
        },
        {
            title: 'Custom Web Apps',
            description: 'Building robust commercial web applications tailored to specific business logic.',
            icon: Monitor,
            color: 'text-green-500',
            bg: 'bg-green-500/10'
        }
    ];

    const stats = [
        { label: 'Uni Departments served', value: '5+' },
        { label: 'Happy Clients', value: '90%' },
        { label: 'Years Experience', value: '3+' }
    ];

    const highlights = [
        {
            title: 'Key Strengths',
            items: [
                'Deep logic optimization for institutional software.',
                'Cross-functional system integration (Internal + External).',
                'User-centric architecture for diverse user groups.'
            ],
            icon: Zap,
            color: 'text-primary'
        },
        {
            title: 'Improvement Areas',
            items: [
                'Obsessive focus on code-level optimization (Perfectionism).',
                'Aggressive tech-stack adoption (Always early experimenting).',
                'Detail-oriented UI/UX (Can lead to longer polish times).'
            ],
            icon: ShieldCheck,
            color: 'text-emerald-500'
        }
    ];

    return (
        <section id="about" className="bg-dark py-20 md:py-32 relative">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                    {/* Left Side - Services */}
                    <div className="space-y-10 md:space-y-12">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-center lg:text-left"
                        >
                            <div className="flex items-center justify-center lg:justify-start gap-4 mb-4 md:mb-6">
                                <div className="h-[2px] w-12 bg-primary"></div>
                                <h3 className="text-xs font-black text-primary uppercase tracking-[0.3em]">
                                    Expertise
                                </h3>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 md:mb-8">
                                Specialized <span className="text-primary italic">Systems</span>
                            </h2>
                        </motion.div>

                        <div className="space-y-4 md:space-y-6">
                            {services.map((service, index) => (
                                <motion.div
                                    key={service.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="group relative p-6 md:p-8 bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 rounded-2xl md:rounded-3xl transition-all duration-300"
                                >
                                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 md:gap-6 text-center sm:text-left">
                                        <div className={cn("p-4 rounded-2xl transition-transform duration-300 group-hover:scale-110", service.bg)}>
                                            <service.icon className={cn("w-6 h-6 md:w-8 md:h-8", service.color)} />
                                        </div>
                                        <div className="space-y-2">
                                            <h4 className="text-lg md:text-xl font-black text-white group-hover:text-primary transition-colors">
                                                {service.title}
                                            </h4>
                                            <p className="text-sm md:text-base text-text-secondary leading-relaxed font-medium">
                                                {service.description}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side - About Me Content */}
                    <div className="lg:sticky lg:top-32 space-y-10 md:space-y-12">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="space-y-6 md:space-y-8 text-center lg:text-left"
                        >
                            <h2 className="text-5xl md:text-7xl font-black text-white leading-none">
                                Over <span className="text-primary">3 Years</span>
                            </h2>
                            <p className="text-lg md:text-xl text-text-secondary leading-relaxed font-bold">
                                I specialize in building solutions that bridge the gap between
                                <span className="text-white border-b-2 border-primary/30"> institutional complexity</span> and <span className="text-white border-b-2 border-primary/30"> commercial efficiency</span>.
                            </p>
                            <p className="text-base md:text-lg text-text-secondary leading-relaxed font-medium">
                                &quot;My journey has been defined by architecting software that serves thousands of students and optimizing management workflows for the hospitality industry.&quot;
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                                {highlights.map((h) => (
                                    <div key={h.title} className="space-y-4">
                                        <div className="flex items-center gap-2 justify-center lg:justify-start">
                                            <h4 className="text-sm font-black text-white uppercase tracking-widest">{h.title}</h4>
                                        </div>
                                        <ul className="space-y-2 text-left">
                                            {h.items.map((item) => (
                                                <li key={item} className="flex items-start gap-2 text-text-secondary font-bold text-xs leading-relaxed">
                                                    <CheckCircle2 size={14} className={cn("mt-0.5 shrink-0", h.color)} />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>

                            {/* Workplace Information */}
                            <div className="pt-6 border-t border-white/5 space-y-4">
                                <div className="flex items-center gap-2 justify-center lg:justify-start">
                                    <Building2 size={16} className="text-primary" />
                                    <h4 className="text-sm font-black text-white uppercase tracking-widest">Current Position</h4>
                                </div>
                                <div className="space-y-2 text-center lg:text-left">
                                    <p className="text-base md:text-lg text-white font-bold">
                                        Software Developer
                                    </p>
                                    <p className="text-sm md:text-base text-text-secondary font-medium">
                                        Vo Truong Toan University and Hospital
                                    </p>
                                    <p className="text-xs md:text-sm text-text-secondary/80 font-medium italic">
                                        Quoc lo 1A, xa Thanh Xuan, TP Can Tho
                                    </p>
                                    <p className="text-xs md:text-sm text-text-secondary/70 font-medium pt-2 leading-relaxed">
                                        In addition to the main projects listed, I handle various supporting tasks as requested by the university and provide technical assistance to other departments, ensuring smooth operations across the institution.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                                    className={cn(
                                        "p-4 md:p-6 bg-dark-card border border-white/5 rounded-2xl text-center group hover:border-primary/30 transition-colors",
                                        index === 2 && "col-span-2 sm:col-span-1"
                                    )}
                                >
                                    <div className="text-2xl md:text-3xl font-black text-primary mb-1">
                                        {stat.value}
                                    </div>
                                    <div className="text-[9px] md:text-[10px] text-text-secondary uppercase tracking-widest font-black leading-tight">
                                        {stat.label}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
