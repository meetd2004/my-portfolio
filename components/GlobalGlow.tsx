"use client";

import { motion, useMotionTemplate, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function GlobalGlow() {
    // We use a spring to make the glow trail the mouse slightly, creating a smooth, organic feel.
    const mouseX = useSpring(0, { stiffness: 50, damping: 20 });
    const mouseY = useSpring(0, { stiffness: 50, damping: 20 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    // clientX and clientY are relative to the viewport, which perfectly matches a 'fixed' position.
    const background = useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(168, 85, 247, 0.15), transparent 40%)`;

    return (
        <motion.div
            className="pointer-events-none fixed inset-0 z-[1] mix-blend-screen opacity-50"
            style={{ background }}
        />
    );
}
