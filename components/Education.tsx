"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const education = [
    {
        institution: "SDJ International College & C.B Patel Computer College",
        degree: "Bachelor of Computer Applications (BCA)",
        period: "2023 – 2026",
        description: "CGPA: 8.00. Participated in college technical events, seminars, and organized college events. Group project leader for BookMyChef and FixMyVehicle.",
    },
    {
        institution: "C.C Shah Sarvajanik English High School",
        degree: "Higher Secondary Certificate (HSC) – GSEB",
        period: "2022 – 2023",
        description: "Percentage: 71.02%",
    },
    {
        institution: "Lancers Army School",
        degree: "Secondary School Certificate (SSC) – GSEB",
        period: "2020 – 2021",
        description: "Percentage: 61.83%",
    },
    {
        institution: "Certifications & Skills",
        degree: "Professional Development",
        period: "Ongoing",
        description: "Skills:\n• Languages: Python, Java, C, C++, Kotlin, Flutter\n• Databases: MySQL, SQL, Firebase",
        certifications: [
            { name: "Prompt Engineering for ChatGPT", image: null },
            { name: "Basic Android Mobile Development", image: null },
            { name: "Deloitte Cyber Job Simulation", image: "/certs/deloitte.png" },
            { name: "Mastercard Cybersecurity Job Simulation", image: "/certs/mastercard.png" },
        ]
    }
];

export default function Education() {
    const [selectedCert, setSelectedCert] = useState<string | null>(null);

    return (
        <section className="relative z-[100] bg-transparent py-32 px-4 md:px-12 border-t border-white/5">
            <div className="max-w-4xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-7xl font-bold mb-20 tracking-tighter text-white text-center"
                >
                    Education & Certifications
                </motion.h2>

                <div className="relative border-l border-white/20 ml-4 md:ml-0 md:pl-0 space-y-12">
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative pl-8 md:pl-12"
                        >
                            <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]" />

                            <div className="text-sm text-gray-500 font-mono mb-2 uppercase tracking-widest">{edu.period}</div>
                            <h3 className="text-3xl font-bold text-white mb-1">{edu.institution}</h3>
                            <h4 className="text-xl text-gray-400 mb-4">{edu.degree}</h4>
                            <p className="text-gray-300 leading-relaxed max-w-2xl whitespace-pre-line">
                                {edu.description}
                            </p>
                            
                            {/* Render Interactive Certifications if they exist */}
                            {edu.certifications && (
                                <div className="mt-6 space-y-3">
                                    <h5 className="text-white font-semibold text-lg">Certifications:</h5>
                                    <div className="flex flex-col gap-3">
                                        {edu.certifications.map((cert, i) => (
                                            <div key={i} className="flex flex-wrap items-center gap-3">
                                                <span className="text-gray-300">• {cert.name}</span>
                                                {cert.image && (
                                                    <button 
                                                        onClick={() => setSelectedCert(cert.image)}
                                                        className="text-xs px-4 py-1.5 bg-white/5 hover:bg-purple-500/20 text-white rounded-full transition-all border border-white/10 hover:border-purple-500/50 hover:shadow-[0_0_10px_rgba(168,85,247,0.3)] flex items-center gap-1"
                                                    >
                                                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                        </svg>
                                                        View Certificate
                                                    </button>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Certificate Modal Overlay */}
            <AnimatePresence>
                {selectedCert && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedCert(null)}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 sm:p-8 cursor-zoom-out"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            transition={{ type: "spring", stiffness: 300, damping: 25 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative max-w-5xl w-full bg-[#111] rounded-2xl overflow-hidden border border-white/10 shadow-2xl flex flex-col cursor-default"
                        >
                            <div className="flex justify-between items-center p-4 border-b border-white/10 bg-white/5">
                                <h3 className="text-white font-medium ml-2">Certificate of Completion</h3>
                                <button 
                                    onClick={() => setSelectedCert(null)}
                                    className="text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-full p-2 transition-colors flex items-center justify-center"
                                >
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            <div className="p-4 sm:p-8 bg-[#0a0a0a] flex justify-center items-center overflow-hidden">
                                <img 
                                    src={selectedCert} 
                                    alt="Certificate" 
                                    className="max-w-full max-h-[75vh] object-contain rounded shadow-lg ring-1 ring-white/10" 
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
