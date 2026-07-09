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
    <footer className="relative bg-slate-950 border-t border-slate-900 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left branding */}
        <div className="flex items-center space-x-2 font-montserrat font-bold text-lg text-white">
          <div className="bg-gradient-to-tr from-primary to-secondary p-1 rounded-lg text-white">
            <Terminal size={14} />
          </div>
          <span>Piyush Kumar</span>
        </div>

        {/* Center quick links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-inter">
          <a href="#home" className="hover:text-cyan-400 transition-colors">Home</a>
          <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
          <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
          <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a>
          <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
          <a href="#certifications" className="hover:text-cyan-400 transition-colors">Certifications</a>
          <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
        </div>

        {/* Right socials & copyright */}
        <div className="flex flex-col items-center md:items-end gap-3">
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/piyushkumar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="GitHub Profile"
            >
              <FaGithub size={16} />
            </a>
            <a
              href="https://linkedin.com/in/piyushkumar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin size={16} />
            </a>
            <a
              href="mailto:piyushbaskar4@gmail.com"
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="Email Address"
            >
              <Mail size={16} />
            </a>
          </div>
          <p className="text-[10px] text-slate-500 font-mono">
            © {currentYear} Piyush Kumar. All rights reserved.
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
            className="fixed bottom-6 right-6 p-3 bg-gradient-to-r from-primary to-secondary text-white rounded-full shadow-lg shadow-primary/20 hover:brightness-110 hover:-translate-y-1 transition-all z-40 cursor-pointer"
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
