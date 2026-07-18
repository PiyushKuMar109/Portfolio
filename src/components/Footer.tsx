"use client";

import React, { useEffect, useState } from "react";
import { ArrowUp, Mail, Terminal } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900 py-12 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left branding */}
        <div className="flex items-center space-x-2 font-montserrat font-bold text-lg text-slate-900 dark:text-white">
          <div className="bg-gradient-to-tr from-indigo-600 via-sky-500 to-emerald-500 p-1.5 rounded-lg text-white shadow-xs">
            <Terminal size={14} />
          </div>
          <span>Piyush Kumar</span>
        </div>

        {/* Center quick links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-600 dark:text-slate-400 font-inter font-medium">
          <a href="#home" className="hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors">Home</a>
          <a href="#about" className="hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors">About</a>
          <a href="#skills" className="hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors">Skills</a>
          <a href="#experience" className="hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors">Experience</a>
          <a href="#projects" className="hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors">Projects</a>
          <a href="#certifications" className="hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors">Certifications</a>
          <a href="#contact" className="hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors">Contact</a>
        </div>

        {/* Right socials & copyright */}
        <div className="flex flex-col items-center md:items-end gap-3">
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/PiyushKuMar109"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-cyan-400 hover:border-indigo-400 dark:hover:border-cyan-500/30 transition-all hover:scale-110 shadow-xs"
              aria-label="GitHub Account"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/piyush-kumar-0b6024319/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-cyan-400 hover:border-indigo-400 dark:hover:border-cyan-500/30 transition-all hover:scale-110 shadow-xs"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin size={18} />
            </a>
            <a
              href="mailto:piyushbaskar4@gmail.com"
              className="p-2 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-cyan-400 hover:border-indigo-400 dark:hover:border-cyan-500/30 transition-all hover:scale-110 shadow-xs"
              aria-label="Email Address"
            >
              <Mail size={18} />
            </a>
          </div>
          <p className="text-xs text-slate-500 font-mono">
            © {currentYear} Piyush Kumar. Engineered with Next.js &amp; React.
          </p>
        </div>
      </div>

      {/* Back to top button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-24 right-6 p-3 bg-gradient-to-r from-indigo-600 via-sky-500 to-emerald-500 text-white rounded-full shadow-lg shadow-indigo-500/20 hover:brightness-110 hover:-translate-y-1 transition-all z-40 cursor-pointer"
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
