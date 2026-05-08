"use client";

import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";

const skills = [
  { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" },
  { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" },
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
  { name: "Kotlin", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg" },
  { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg" },
  { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg" },
  { name: "VB.NET", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original.svg" },
  { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
];

const SkillCard = ({ skill, index, scrollYProgress }: { skill: any, index: number, scrollYProgress: any }) => {
    const getScatterValues = (index: number) => {
        const xPositions = [-300, 200, -400, 300, -200, 400, -350, 250, -150, 350, -250];
        const yPositions = [-200, 300, 150, -350, 250, -150, 350, -250, 100, -400, 400];
        const rotations = [-60, 45, -90, 60, -45, 90, -30, 75, -75, 30, -120];
        return {
            x: xPositions[index % xPositions.length],
            y: yPositions[index % yPositions.length],
            rotate: rotations[index % rotations.length]
        };
    };

    const scatter = getScatterValues(index);
    const x = useTransform(scrollYProgress, [0, 1], [scatter.x, 0]);
    const y = useTransform(scrollYProgress, [0, 1], [scatter.y, 0]);
    const rotate = useTransform(scrollYProgress, [0, 1], [scatter.rotate, 0]);
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 1]);

    return (
        <motion.div
            style={{ x, y, rotate, opacity }}
            whileHover={{ scale: 1.1, zIndex: 30, transition: { duration: 0.2 } }}
            className="flex flex-col items-center justify-center p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md transition-colors hover:bg-white/10 hover:border-white/20 hover:shadow-xl hover:shadow-purple-500/20 z-10 cursor-pointer"
        >
            <div className="w-16 h-16 mb-4 relative">
                <img
                    src={skill.icon}
                    alt={`${skill.name} icon`}
                    className="w-full h-full object-contain filter drop-shadow-md pointer-events-none"
                />
            </div>
            <span className="text-white font-medium tracking-wide">
                {skill.name}
            </span>
        </motion.div>
    );
};

export default function Skills() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "center center"],
    });

    // Mouse interaction for the background
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
        const { currentTarget, clientX, clientY } = e;
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    };

    return (
        <section 
            ref={containerRef} 
            onMouseMove={handleMouseMove}
            className="relative z-20 bg-transparent py-32 px-4 md:px-12 overflow-hidden"
        >
            {/* Interactive Background Balls */}
            <div className="absolute inset-0 pointer-events-none z-0">
                {/* Mouse-following ball */}
                <motion.div 
                    style={{ 
                        x: useSpring(mouseX, { stiffness: 40, damping: 20 }), 
                        y: useSpring(mouseY, { stiffness: 40, damping: 20 }) 
                    }}
                    className="absolute w-[200px] h-[200px] -left-[100px] -top-[100px] rounded-full bg-gradient-to-br from-purple-400 to-purple-900 shadow-[inset_0_-15px_30px_rgba(0,0,0,0.6),_0_0_40px_rgba(168,85,247,0.3)] opacity-80"
                />
                
                {/* Floating ball 1 */}
                <motion.div 
                    animate={{ 
                        x: [0, 200, -100, 0], 
                        y: [0, -150, 100, 0],
                        rotate: [0, 180, 360]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/4 left-1/4 w-[250px] h-[250px] rounded-full bg-gradient-to-br from-blue-400 to-blue-900 shadow-[inset_0_-20px_40px_rgba(0,0,0,0.6),_0_0_40px_rgba(59,130,246,0.3)] opacity-70"
                />
                
                {/* Floating ball 2 */}
                <motion.div 
                    animate={{ 
                        x: [0, -200, 150, 0], 
                        y: [0, 200, -150, 0],
                        rotate: [0, -180, -360]
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-1/4 right-1/4 w-[180px] h-[180px] rounded-full bg-gradient-to-br from-emerald-400 to-emerald-900 shadow-[inset_0_-15px_30px_rgba(0,0,0,0.6),_0_0_40px_rgba(16,185,129,0.3)] opacity-70"
                />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-8xl font-bold mb-24 tracking-tighter text-white text-center drop-shadow-lg"
                >
                    Tech Stack
                </motion.h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 relative">
                    {skills.map((skill, index) => (
                        <SkillCard key={index} skill={skill} index={index} scrollYProgress={scrollYProgress} />
                    ))}
                </div>
            </div>
        </section>
    );
}
