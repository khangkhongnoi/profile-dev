'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, GraduationCap, Building2, Bed, ArrowRight, LayoutDashboard, Globe, Smartphone, Bell, Calendar, ClipboardCheck } from 'lucide-react';
import { cn } from '@/lib/utils';
import CaseStudyDrawer from './CaseStudyDrawer';

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState<any>(null);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const projects = [
        {
            title: 'Student Schedule App',
            description: 'Cross-platform mobile application helping university students manage class schedules, exams, and attendance with smart notifications.',
            detailedDescription: 'A comprehensive student companion app built with Flutter and Golang backend, integrated with Firebase for real-time synchronization. The app serves the student body at Vo Truong Toan University and Hospital, providing bilingual support (English/Vietnamese) with dark and light themes.',
            tech: ['Flutter', 'Dart', 'Golang', 'Firebase', 'REST API'],
            category: 'Mobile App',
            icon: Smartphone,
            gradient: 'from-blue-400 to-indigo-600',
            problem: 'Students frequently missed classes and exams due to schedule changes, lacked centralized access to academic information, and had no reliable notification system for important updates. Manual checking of multiple portals was time-consuming and error-prone.',
            solution: 'Developed a native mobile app with real-time push notifications, offline-first architecture for schedule viewing, facial recognition for event check-ins to earn training points, and multi-device login management. Integrated bilingual UI with automatic theme switching.',
            features: [
                'Class & Exam Schedule Viewer',
                'Smart Reminder Notifications',
                'Attendance Result Tracking',
                'Facial Recognition Check-in',
                'Training Points Management',
                'Bilingual Support (EN/VI)',
                'Dark/Light Theme',
                'Multi-device Management',
                'Student Feedback System',
                'Profile Information Editor'
            ],
            results: [
                'Significant reduction in missed classes through smart notifications',
                'Successfully deployed for the university student body',
                'High user satisfaction scores',
                'Strong user retention rate after initial rollout'
            ],
            github: '#',
            live: '#'
        },
        {
            title: 'Admission Management System',
            description: 'Enterprise admission platform streamlining candidate data entry, automatic score calculation, and enrollment processing for university admissions office.',
            detailedDescription: 'A full-stack admission management system built with Java Spring Boot and ReactJS, designed to handle the complete admission workflow from candidate registration to tuition fee verification. Deployed at Vo Truong Toan University and Hospital, processing candidate applications annually.',
            tech: ['C#', '.NET Core', 'ASP.NET Core', 'SQL Server', 'REST API'],
            category: 'Institutional',
            icon: GraduationCap,
            gradient: 'from-emerald-500/20 to-teal-500/20',
            problem: 'The admissions office relied on manual Excel-based processes, leading to data entry errors, slow processing times, inconsistent score calculations, and difficulty tracking application statuses. Printing admission letters and managing submitted documents was labor-intensive.',
            solution: 'Built an automated system with bulk data import, rule-based score calculation engine, template-based admission letter generation, digital document management, and integrated tuition fee approval workflow. Implemented role-based access control for different departments.',
            features: [
                'Candidate Information Management',
                'Automated Score Calculation',
                'Bulk Data Import/Export',
                'Admission Letter Generation',
                'Document Archive System',
                'Tuition Fee Approval Workflow',
                'Real-time Application Status',
                'Statistical Reports & Analytics',
                'Multi-criteria Search & Filter',
                'Audit Trail & History Tracking'
            ],
            results: [
                'Significant reduction in application processing time',
                'Improved data accuracy and calculation reliability',
                'Streamlined application handling per admission cycle',
                'Saved substantial manual work hours per semester'
            ],
            github: '#'
        },
        {
            title: 'Intelligent Course Scheduler',
            description: 'AI-powered scheduling system that automatically generates optimized class timetables based on constraints like rooms, instructors, and time slots.',
            detailedDescription: 'An advanced scheduling platform built with Node.js and ReactJS, replacing manual Excel-based scheduling with intelligent automation. The system considers multiple complex constraints including course codes, credit hours, instructor availability, room capacity, and time preferences to generate conflict-free optimal schedules.',
            tech: ['Node.js', 'Express', 'ReactJS', 'SQL Server', 'Optimization Algorithms'],
            category: 'Academic',
            icon: Calendar,
            gradient: 'from-violet-500/20 to-purple-500/20',
            problem: 'The academic affairs office spent weeks manually creating schedules in Excel, frequently encountering conflicts, room double-bookings, and instructor availability issues. Making changes required extensive manual rework, and there was no way to optimize for efficiency.',
            solution: 'Developed an intelligent scheduling engine using constraint satisfaction algorithms that automatically generates optimal timetables in minutes. The system validates all constraints, suggests alternatives for conflicts, and allows easy modifications with automatic conflict detection and resolution.',
            features: [
                'Automated Schedule Generation',
                'Constraint-based Optimization',
                'Room Capacity Management',
                'Instructor Availability Tracking',
                'Time Slot Preferences',
                'Conflict Detection & Resolution',
                'Multiple Schedule Scenarios',
                'Visual Schedule Editor',
                'Export to Multiple Formats',
                'Historical Data Analysis'
            ],
            results: [
                'Drastic reduction in schedule creation time',
                'Optimized room utilization and resource allocation',
                'Improved instructor and staff coordination',
                'Zero scheduling conflicts in production deployment'
            ],
            github: '#'
        },
        {
            title: 'Golden Era Hotel Platform',
            description: 'Full-stack hotel ecosystem with public booking website and comprehensive management system for operations, reservations, and analytics.',
            detailedDescription: 'A complete hotel digital transformation solution built with ReactJS/Next.js, Java Spring, and Node.js. The platform consists of two main components: a customer-facing booking website with hotel showcase and online reservations, and an internal management system for staff to handle bookings, forecasting, and statistical analysis.',
            tech: ['Next.js', 'ReactJS', 'Java Spring', 'Node.js', 'PostgreSQL', 'Redis'],
            category: 'Hospitality',
            icon: Bed,
            gradient: 'from-amber-500/20 to-orange-500/20',
            problem: 'The hotel relied on phone bookings and manual reservation tracking, resulting in overbookings, poor revenue forecasting, and inability to analyze booking patterns. No online presence meant missing out on digital-savvy customers.',
            solution: 'Created a dual-platform solution: a modern, SEO-optimized booking website with real-time availability and secure payment integration, plus a comprehensive management dashboard with forecasting algorithms, occupancy analytics, revenue reports, and automated booking confirmations.',
            features: [
                'Online Booking System',
                'Real-time Room Availability',
                'Secure Payment Gateway',
                'Hotel Showcase Website',
                'Reservation Management',
                'Occupancy Forecasting',
                'Revenue Analytics & Reports',
                'Customer Database',
                'Automated Email Confirmations',
                'Multi-language Support',
                'Mobile-responsive Design',
                'Admin Dashboard'
            ],
            results: [
                'Increased efficiency of online booking operations',
                'Improved occupancy tracking and management',
                'Enhanced revenue forecasting accuracy',
                'Streamlined reservation and confirmation process'
            ],
            github: '#',
            live: '#'
        },
        {
            title: 'Supporting Systems Suite',
            description: 'Collection of specialized automation tools including email signatures, work hour tracking, data synchronization, grade management, and automated mailing systems.',
            detailedDescription: 'A comprehensive suite of supporting systems developed to streamline various administrative tasks across university departments. These tools range from simple utilities to complex automation systems, all designed to reduce manual work and improve operational efficiency at Vo Truong Toan University and Hospital.',
            tech: ['Node.js', 'ReactJS', 'Python', 'Java', 'PostgreSQL', 'Cron Jobs'],
            category: 'Automation',
            icon: ClipboardCheck,
            gradient: 'from-cyan-500/20 to-blue-500/20',
            problem: 'Various departments faced repetitive manual tasks including creating email signatures, tracking work hours, synchronizing data between systems, managing student grades, and sending bulk emails. These tasks consumed significant staff time and were prone to human error.',
            solution: 'Developed a collection of specialized automation tools: an email signature generator for staff and students with template customization, a work hour tracking system with automatic calculations, a data synchronization service for cross-system integration, a comprehensive grade management system, and an automated email delivery system with scheduling and templates.',
            features: [
                'Email Signature Generator (Staff & Students)',
                'Work Hour Tracking & Reports',
                'Cross-system Data Synchronization',
                'Student Grade Management',
                'Automated Email Delivery',
                'Template Management',
                'Scheduled Task Execution',
                'Error Logging & Monitoring',
                'Bulk Operations Support',
                'API Integration Framework'
            ],
            results: [
                'Improved operational efficiency across departments',
                'Automated various previously manual processes',
                'Enhanced data integrity and entry accuracy',
                'Streamlined inter-departmental communication'
            ],
            github: '#'
        },
        {
            title: 'Student Grade Management System',
            description: 'Comprehensive academic performance tracking system for university-wide grade management, transcripts, and GPA calculations.',
            detailedDescription: 'A mission-critical enterprise system built with C# and .NET Core, managing student academic records for the entire university. It features automated grade weightage calculation, semester GPA/CGPA processing, official transcript generation, and secure portal access for students and instructors.',
            tech: ['C#', '.NET Core', 'ASP.NET Core', 'SQL Server', 'Entity Framework'],
            category: 'Academic',
            icon: ClipboardCheck,
            gradient: 'from-blue-500/20 to-indigo-500/20',
            problem: 'The university lacked a unified, secure system for managing grades across departments. Instructors relied on disparate spreadsheets, making it difficult to maintain data integrity, calculate honors/rankings accurately, and provide students with real-time access to their academic progress.',
            solution: 'Developed a centralized grade management platform with robust encryption, automated calculation engines for complex weighted grading systems, bulk result publication workflows, and a secure student dashboard for transcript requests and history tracking.',
            features: [
                'University-wide Grade Entry',
                'Automated GPA/CGPA Calculation',
                'Official Transcript Generation',
                'Weighted Grade Management',
                'Bulk Result Publication',
                'Secure Student Result Portal',
                'Academic Standing Analysis',
                'Instructor Grade Submission Workflow',
                'Dean Review & Approval System',
                'Audit Trails for Grade Changes'
            ],
            results: [
                'Centralized academic records university-wide',
                'Enhanced result processing efficiency',
                'Improved data integrity and record security',
                'Providing students with efficient result access'
            ],
            github: '#'
        }
    ];

    const openCaseStudy = (project: any) => {
        setSelectedProject(project);
        setIsDrawerOpen(true);
    };

    return (
        <section id="projects" className="bg-dark py-20 md:py-32 relative">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                {/* Section Header */}
                <div className="text-center mb-16 md:mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-4 md:space-y-6"
                    >
                        <div className="flex items-center justify-center gap-4">
                            <div className="h-[2px] w-12 bg-primary"></div>
                            <h3 className="text-xs font-black text-primary uppercase tracking-[0.3em]">
                                Featured
                            </h3>
                            <div className="h-[2px] w-12 bg-primary"></div>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black text-white">
                            Selected <span className="text-primary italic">Projects</span>
                        </h2>
                        <p className="text-text-secondary text-base md:text-xl max-w-2xl mx-auto font-bold opacity-80 px-4">
                            From complex institutional systems to innovative mobile solutions.
                        </p>
                    </motion.div>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group relative bg-[#0F172A] rounded-[2rem] md:rounded-[2.5rem] border border-white/5 hover:border-primary/30 transition-all duration-500 overflow-hidden flex flex-col h-full shadow-2xl"
                        >
                            {/* Visual Asset Overlay */}
                            <div className={cn("relative h-40 md:h-48 overflow-hidden bg-gradient-to-br", project.gradient)}>
                                <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:scale-125 transition-transform duration-700">
                                    <project.icon size={100} strokeWidth={1} className="text-white" />
                                </div>
                                <div className="absolute inset-0 bg-dark/20 backdrop-blur-[1px]"></div>
                                <div className="absolute bottom-4 md:bottom-6 left-6 md:left-8">
                                    <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[9px] md:text-[10px] font-black text-white uppercase tracking-widest">
                                        {project.category}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8 md:p-10 flex flex-col flex-1">
                                <h3 className="text-xl md:text-2xl font-black text-white mb-3 md:mb-4 group-hover:text-primary transition-colors leading-tight">
                                    {project.title}
                                </h3>
                                <p className="text-sm md:text-base text-text-secondary leading-relaxed mb-6 md:mb-8 flex-1 font-medium italic opacity-90">
                                    {project.description}
                                </p>

                                <div className="space-y-6 md:space-y-8">
                                    {/* Tech Icons Row */}
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((t) => (
                                            <span key={t} className="text-[9px] md:text-[10px] font-black text-white/40 border border-white/5 px-2 md:px-3 py-1 rounded-lg bg-white/5 group-hover:border-primary/20 transition-colors">
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Actions */}
                                    <div className="flex gap-3 md:gap-4">
                                        <button
                                            onClick={() => openCaseStudy(project)}
                                            className="flex-1 bg-primary hover:bg-primary-dark text-white font-black py-3.5 md:py-4 rounded-xl md:rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 text-xs md:text-sm shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1"
                                        >
                                            Case Study
                                            <ExternalLink size={16} />
                                        </button>
                                        {/* <a href="#" className="bg-white/5 hover:bg-white/10 text-white p-3.5 md:p-4 rounded-xl md:rounded-2xl transition-all duration-300 border border-white/10 hover:border-white/20 hover:-translate-y-1">
                                            <Github className="w-[18px] h-[18px] md:w-[20px] md:h-[20px]" />
                                        </a> */}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* View More Button */}
                {/* <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mt-16 md:mt-24"
                >
                    <button className="group relative inline-flex items-center gap-3 px-8 md:px-10 py-4 md:py-5 bg-transparent border-2 border-white/10 hover:border-primary rounded-xl md:rounded-2xl text-white font-black transition-all duration-500 overflow-hidden w-full sm:w-auto">
                        <span className="relative z-10 uppercase tracking-widest text-xs md:text-sm">Explore Archive</span>
                        <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-10 transition-opacity"></div>
                        <ArrowRight className="w-[18px] h-[18px] md:w-[20px] md:h-[20px] group-hover:translate-x-1 transition-transform text-primary" />
                    </button>
                </motion.div> */}
            </div>

            <CaseStudyDrawer
                isOpen={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}
                project={selectedProject}
            />
        </section>
    );
}
