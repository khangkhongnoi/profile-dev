'use client';

import { motion, Variants } from 'framer-motion';
import { Database, Layout, Smartphone, Settings, Cpu, Shield, Globe, Zap, Code2, Cloud } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Skills() {
    const skillCategories = [
        {
            title: 'Backend',
            skills: ['Java', 'C# / .NET', 'Golang', 'Node.js', 'Python'],
            icon: Settings,
            color: 'text-orange-500',
            bg: 'bg-orange-500/5'
        },
        {
            title: 'Frontend',
            skills: ['React', 'Next.js', 'JavaScript', 'TypeScript'],
            icon: Layout,
            color: 'text-blue-500',
            bg: 'bg-blue-500/5'
        },
        {
            title: 'Mobile',
            skills: ['Flutter', 'React Native', 'Android', 'iOS'],
            icon: Smartphone,
            color: 'text-purple-500',
            bg: 'bg-purple-500/5'
        },
        {
            title: 'Database',
            skills: ['PostgreSQL', 'SQL Server', 'Firebase'],
            icon: Database,
            color: 'text-green-500',
            bg: 'bg-green-500/5'
        }
    ];

    const badges = [
        { name: 'Git', icon: Code2 },
        { name: 'Docker', icon: Cpu },
        { name: 'Kubernetes', icon: Cloud },
        // { name: 'AWS', icon: Cloud },
        { name: 'Linux', icon: Globe },
        { name: 'Nginx', icon: Zap },
        { name: 'Security', icon: Shield }
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item: Variants = {
        hidden: { opacity: 0, y: 30 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    return (
        <section id="skills" className="bg-dark-lighter py-20 md:py-32 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-30 pointer-events-none">
                <div className="absolute top-0 right-10 w-[400px] h-[400px] bg-primary/5 blur-[100px] rounded-full"></div>
                <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-blue-500/5 blur-[100px] rounded-full"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16 md:mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-4"
                    >
                        <div className="flex items-center justify-center gap-4">
                            <div className="h-[2px] w-12 bg-primary"></div>
                            <h3 className="text-xs font-black text-primary uppercase tracking-[0.3em]">
                                Expertise
                            </h3>
                            <div className="h-[2px] w-12 bg-primary"></div>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black text-white">
                            My Tech <span className="text-primary italic">Stack</span>
                        </h2>
                    </motion.div>
                </div>

                {/* Skills Grid */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
                >
                    {skillCategories.map((category) => (
                        <motion.div
                            key={category.title}
                            variants={item}
                            className="group bg-dark p-8 rounded-[2rem] md:rounded-[2.5rem] border border-white/5 hover:border-primary/20 transition-all duration-500 relative overflow-hidden"
                        >
                            {/* Card Glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            {/* Category Header */}
                            <div className="relative z-10 flex flex-col items-center mb-8 md:mb-10 text-center">
                                <div className={cn("p-5 md:p-6 rounded-2xl md:rounded-3xl mb-4 md:mb-6 transition-transform duration-500 group-hover:scale-110", category.bg)}>
                                    <category.icon className={cn("w-8 h-8 md:w-10 md:h-10", category.color)} />
                                </div>
                                <h3 className="text-xl md:text-2xl font-black text-white">{category.title}</h3>
                            </div>

                            {/* Skills List */}
                            <div className="relative z-10 grid grid-cols-1 gap-3 md:gap-4">
                                {category.skills.map((skill) => (
                                    <div
                                        key={skill}
                                        className="flex items-center gap-3 md:gap-4 group/skill"
                                    >
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary/30 group-hover/skill:bg-primary group-hover/skill:scale-125 transition-all" />
                                        <span className="text-sm md:text-base text-text-secondary group-hover/skill:text-white transition-colors font-bold">
                                            {skill}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Additional Tech Badges */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="mt-20 md:mt-32"
                >
                    <h4 className="text-center text-[10px] md:text-xs font-black text-text-secondary uppercase tracking-[0.4em] mb-8 md:mb-12">
                        Industry Standard toolkit
                    </h4>
                    <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-4xl mx-auto">
                        {badges.map((badge) => (
                            <div
                                key={badge.name}
                                className="flex items-center gap-2 md:gap-3 bg-white/[0.03] hover:bg-primary/20 border border-white/5 hover:border-primary/50 text-white/50 hover:text-white px-4 md:px-6 py-2.5 md:py-3 rounded-xl md:rounded-2xl transition-all duration-300 font-black text-[10px] md:text-xs"
                            >
                                <badge.icon size={16} className="text-primary shrink-0" />
                                {badge.name}
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
