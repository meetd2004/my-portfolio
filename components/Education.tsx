"use client";

import { motion } from "framer-motion";

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
        description: "Certifications:\n• Prompt Engineering for ChatGPT\n• Basic Android Mobile Development\n\nSkills:\n• Languages: Python, Java, C, C++, Kotlin, Flutter\n• Databases: MySQL, SQL, Firebase",
    }
];

export default function Education() {
    return (
        <section className="relative z-20 bg-transparent py-32 px-4 md:px-12 border-t border-white/5">
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
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
