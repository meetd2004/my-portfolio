"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

export default function Contact() {
    const containerRef = useRef<HTMLDivElement>(null);

    const socials = [
        { name: "GitHub", url: "https://github.com/meetd2004", icon: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" },
        { name: "LinkedIn", url: "https://www.linkedin.com/in/meet-desai-916b62346/", icon: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" },
        { name: "Twitter", url: "https://x.com/Meetdes52788638", icon: "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" },
        { name: "Resume", url: "/resume", icon: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm4 18H6V4h7v5h5v11zM8 14h8v-2H8v2zm0 4h8v-2H8v2z" }
    ];

    return (
        <section 
            ref={containerRef}
            className="relative w-full py-32 px-4 md:px-12 overflow-hidden border-t border-white/5"
        >
            <div className="max-w-5xl mx-auto relative z-10 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h2 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter text-white drop-shadow-xl">
                        Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Connect</span>
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-400 mb-16 max-w-2xl mx-auto font-light leading-relaxed">
                        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>
                </motion.div>

                {/* Button that links to email client */}
                <motion.a
                    href="mailto:desaimeet1428@gmail.com"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false, amount: 0.2 }}
                    whileHover={{ scale: 1.05, transition: { type: "spring", stiffness: 400, damping: 15 } }}
                    whileTap={{ scale: 0.95, transition: { type: "spring", stiffness: 400, damping: 15 } }}
                    className="relative group overflow-hidden rounded-full p-[1px] mb-24 cursor-pointer block"
                >
                    <span className="absolute inset-0 bg-gradient-to-r from-purple-500 via-cyan-500 to-purple-500 opacity-70 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300" />
                    <div className="relative px-12 py-5 bg-[#0a0a0a] rounded-full flex items-center gap-3 transition-all duration-300 group-hover:bg-opacity-80">
                        <span className="text-white text-lg font-medium tracking-wide">
                            Say Hello
                        </span>
                        <svg className="w-5 h-5 text-white transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </div>
                </motion.a>

                {/* Interactive Social Links */}
                <div className="flex gap-6 md:gap-10">
                    {socials.map((social, index) => {
                        const isInternal = social.url.startsWith('/');
                        return (
                        <motion.a
                            key={social.name}
                            href={social.url}
                            target={isInternal ? undefined : "_blank"}
                            rel={isInternal ? undefined : "noopener noreferrer"}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.1 }}
                            transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
                            whileHover={{ y: -8, scale: 1.1, transition: { type: "spring", stiffness: 400, damping: 12 } }}
                            className="group flex flex-col items-center gap-3"
                        >
                            <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 group-hover:text-white group-hover:bg-white/10 group-hover:border-cyan-500/50 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all duration-300">
                                <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
                                    <path d={social.icon} />
                                </svg>
                            </div>
                            <span className="text-xs uppercase tracking-widest font-mono text-gray-500 group-hover:text-cyan-400 transition-colors duration-300">
                                {social.name}
                            </span>
                        </motion.a>
                    )})}
                </div>
                
                {/* Copyright Footer inside Contact */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="mt-32 text-gray-600 text-sm font-mono"
                >
                    © {new Date().getFullYear()} Meet Jignesh Desai.
                </motion.div>
            </div>
            
            {/* Animated Bottom Glow */}
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-30" />
            
        </section>
    );
}
