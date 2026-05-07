"use client";

import { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import Overlay from "./Overlay";
import Image from "next/image";

export default function ScrollyCanvas() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Add a subtle zoom and pan effect to simulate a 3D side look/pan as you scroll
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "5%"]);

    return (
        <div ref={containerRef} className="h-[500vh] relative bg-transparent">
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                <motion.div style={{ scale, x }} className="absolute inset-0 w-full h-full">
                    <Image
                        src="/hero_photo.jpg"
                        alt="Profile Photo"
                        fill
                        className="object-cover"
                        priority
                    />
                </motion.div>
                <Overlay scrollYProgress={scrollYProgress} />
            </div>
        </div>
    );
}
