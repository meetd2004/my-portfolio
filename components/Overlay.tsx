"use client";

import { useScroll, useTransform, motion, MotionValue } from "framer-motion";

const Section = ({
    text,
    subText,
    align = "center",
    start,
    end,
    scrollYProgress,
}: {
    text: string;
    subText?: string;
    align?: "left" | "center" | "right";
    start: number;
    end: number;
    scrollYProgress: MotionValue<number>;
}) => {
    const opacity = useTransform(
        scrollYProgress,
        [start - 0.05, start, end, end + 0.05],
        [0, 1, 1, 0]
    );

    const y = useTransform(
        scrollYProgress,
        [start - 0.05, end + 0.05],
        [50, -50]
    );

    const alignClass =
        align === "left"
            ? "items-center text-center md:items-start md:text-left"
            : align === "right"
                ? "items-center text-center md:items-end md:text-right"
                : "items-center text-center";

    return (
        <motion.div
            style={{ opacity, y }}
            className={`fixed top-0 left-0 w-full h-full pointer-events-none flex flex-col justify-center px-8 md:px-20 ${alignClass}`}
        >
            <h2 className="text-4xl md:text-7xl font-bold tracking-tighter text-white drop-shadow-lg">
                {text}
            </h2>
            {subText && (
                <p className="text-xl md:text-2xl text-gray-300 mt-4 font-light tracking-wide max-w-lg text-balance opacity-90">
                    {subText}
                </p>
            )}
        </motion.div>
    );
};

const ScrollIndicator = ({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) => {
    const scrollOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);

    return (
        <motion.div
            style={{ opacity: scrollOpacity }}
            className="fixed bottom-12 left-6 md:left-12 flex flex-col items-center gap-6 pointer-events-none z-50"
        >
            <motion.span
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 1, ease: "easeOut" }}
                className="text-gray-300 text-sm tracking-[0.4em] uppercase font-mono drop-shadow-md font-medium"
                style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
            >
                Scroll
            </motion.span>
            
            <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "120px" }}
                transition={{ delay: 2, duration: 1, ease: "easeOut" }}
                className="relative w-[2px] h-[120px] bg-white/20 overflow-hidden rounded-full"
            >
                <motion.div 
                    animate={{ y: ["-100%", "200%"] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                    className="absolute inset-0 w-full h-1/2 bg-gradient-to-b from-transparent via-cyan-400 to-transparent"
                />
            </motion.div>
        </motion.div>
    );
};

export default function Overlay({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
    return (
        <>
            <ScrollIndicator scrollYProgress={scrollYProgress} />
            <Section
                text="Meet Jignesh Desai."
                subText="Cybersecurity Student & App Developer"
                align="center"
                start={0.05}
                end={0.2}
                scrollYProgress={scrollYProgress}
            />
            <Section
                text="Android & Web Dev."
                subText="Specializing in Kotlin, Java, PHP, and Firebase."
                align="left"
                start={0.3}
                end={0.45}
                scrollYProgress={scrollYProgress}
            />
            <Section
                text="Future-Ready."
                subText="Always adapting and exploring next-generation technologies to build scalable solutions."
                align="right"
                start={0.6}
                end={0.75}
                scrollYProgress={scrollYProgress}
            />
        </>
    );
}
