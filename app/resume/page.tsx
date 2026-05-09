"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ResumePage() {
  return (
    <div className="w-full h-screen bg-[#0a0a0a] flex flex-col">
      {/* Header Bar */}
      <div className="h-16 border-b border-white/10 bg-black/80 backdrop-blur-xl flex items-center px-4 md:px-8 shrink-0 shadow-[0_4px_30px_rgba(0,0,0,0.5)] z-10">
        <Link href="/">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all duration-300 cursor-pointer"
          >
            <svg 
              className="w-4 h-4 text-cyan-400 group-hover:-translate-x-1 transition-transform duration-300" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="text-gray-300 group-hover:text-white text-sm font-medium tracking-wide">
              Return to Website
            </span>
          </motion.div>
        </Link>
        <div className="ml-auto flex items-center gap-4">
          <span className="text-gray-500 font-mono text-sm hidden md:block">
            resume.pdf
          </span>
          <motion.a
            href="/resume.pdf"
            download="Meet_Desai_Resume.pdf"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/20 rounded-full transition-all duration-300 text-sm font-medium cursor-pointer"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            <span className="hidden sm:block">Download</span>
          </motion.a>
        </div>
      </div>

      {/* PDF Viewer */}
      <div className="flex-1 w-full h-full relative bg-zinc-900/50">
        <object 
          data="/resume.pdf" 
          type="application/pdf" 
          className="w-full h-full border-none absolute inset-0"
        >
          <div className="flex flex-col items-center justify-center w-full h-full gap-4 text-center px-4">
            <svg className="w-16 h-16 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <p className="text-gray-400">Your browser does not support inline PDF viewing.</p>
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-4 px-6 py-3 bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400 border border-cyan-500/30 rounded-full transition-all duration-300 font-medium"
            >
              Open PDF Directly
            </a>
          </div>
        </object>
      </div>
    </div>
  );
}
