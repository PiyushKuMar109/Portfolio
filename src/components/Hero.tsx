"use client";

import React, { useState, useEffect } from "react";
import { Mail, ArrowRight, Download, FileText } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Hero() {
  const words = [
    "Software Engineer",
    "Full Stack Developer",
    "Python/Django Developer",
    "AI Engineer",
    "Backend Developer",
    "Machine Learning Engineer",
  ];

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const handleType = () => {
      const fullWord = words[currentWordIndex];
      if (!isDeleting) {
        // Typing
        setCurrentText(fullWord.substring(0, currentText.length + 1));
        setTypingSpeed(100);

        if (currentText === fullWord) {
          // Pause before deleting
          setTypingSpeed(2000);
          setIsDeleting(true);
        }
      } else {
        // Deleting
        setCurrentText(fullWord.substring(0, currentText.length - 1));
        setTypingSpeed(50);

        if (currentText === "") {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, typingSpeed]);

  const handleScrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden px-6"
    >
      {/* Background Gradients & Glow */}
      <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-primary/20 rounded-full blur-[100px] pointer-events-none -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-secondary/15 rounded-full blur-[100px] pointer-events-none -z-10 animate-pulse" style={{ animationDelay: "2s" }} />

      {/* Floating Shapes */}
      <div className="absolute top-10 right-10 w-24 h-24 border border-slate-800 rounded-full animate-float-slow -z-10 pointer-events-none opacity-30" />
      <div className="absolute bottom-10 left-10 w-16 h-16 border border-slate-800 rounded-xl animate-float-medium -z-10 pointer-events-none opacity-20" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Text details */}
        <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full glassmorphism text-xs font-semibold text-cyan-400 w-fit"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span>Available for Work & Collaboration</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="text-slate-400 font-inter font-medium text-lg md:text-xl">
              Hello, My name is
            </h2>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-montserrat font-extrabold text-white mt-1 leading-tight tracking-tight">
              Piyush <span className="bg-gradient-to-r from-primary via-cyan-400 to-accent bg-clip-text text-transparent">Kumar</span>
            </h1>
            <div className="h-10 mt-3 flex items-center">
              <span className="text-xl md:text-3xl font-poppins font-semibold text-slate-300">
                I am a{" "}
                <span className="text-cyan-400 typing-cursor">{currentText}</span>
              </span>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-400 font-inter text-base md:text-lg leading-relaxed max-w-2xl"
          >
            A passionate engineer specializing in full-stack applications, intelligent AI models, Python backend systems, and automated machine learning workflows. Committed to building robust, high-performance software that solves real-world challenges.
          </motion.p>

          {/* Social Icons & Profiles */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center space-x-4"
          >
            <a
              href="https://github.com/piyushkumar"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 hover:text-white text-slate-300 border border-slate-700/50 hover:border-cyan-400/50 transition-all hover:scale-110"
              aria-label="GitHub Profile"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://linkedin.com/in/piyushkumar"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 hover:text-white text-slate-300 border border-slate-700/50 hover:border-cyan-400/50 transition-all hover:scale-110"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="mailto:piyushbaskar4@gmail.com"
              className="p-3 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 hover:text-white text-slate-300 border border-slate-700/50 hover:border-cyan-400/50 transition-all hover:scale-110"
              aria-label="Email Contact"
            >
              <Mail size={20} />
            </a>
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <a
              href="#contact"
              onClick={handleScrollToContact}
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-semibold text-sm flex items-center space-x-2 shadow-lg shadow-primary/20 hover:shadow-cyan-400/10 hover:brightness-110 hover:-translate-y-0.5 transition-all"
            >
              <span>Get In Touch</span>
              <ArrowRight size={16} />
            </a>

            {/* Resume button with tooltip indicating placeholder */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                alert(
                  "Resume Download Placeholder: To link your actual resume, place your 'piyush_kumar_resume.pdf' file inside the 'public/' directory and update the href in src/components/Hero.tsx to refer to '/piyush_kumar_resume.pdf'."
                );
              }}
              className="relative px-6 py-3.5 rounded-xl bg-slate-800/90 text-slate-200 hover:text-white hover:bg-slate-750 font-semibold text-sm flex items-center space-x-2 border border-slate-700 hover:border-cyan-400/50 hover:-translate-y-0.5 transition-all group"
            >
              <Download size={16} />
              <span>Download Resume</span>
              <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max bg-slate-950 text-[10px] text-cyan-400 border border-cyan-500/20 px-2 py-1 rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200">
                Placeholder - Custom Resume PDF
              </span>
            </a>
          </motion.div>
        </div>

        {/* Right Coding Avatar Visual */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-[300px] h-[300px] md:w-[380px] md:h-[380px] flex items-center justify-center"
          >
            {/* Pulsing ring wrapper */}
            <div className="absolute inset-0 rounded-full border border-dashed border-cyan-500/30 animate-spin" style={{ animationDuration: "30s" }} />
            <div className="absolute inset-4 rounded-full border border-primary/20 animate-spin" style={{ animationDuration: "20s", animationDirection: "reverse" }} />

            {/* Main Avatar Container */}
            <div className="w-[240px] h-[240px] md:w-[300px] md:h-[300px] rounded-full bg-gradient-to-tr from-[#1E293B] to-[#0F172A] border-2 border-slate-700/80 p-1 shadow-2xl flex flex-col items-center justify-center overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Sleek Terminal Avatar Placeholder */}
              <div className="text-center p-6 select-none font-mono">
                <div className="text-accent text-lg mb-2">&lt;PiyushKumar /&gt;</div>
                <div className="text-slate-400 text-xs flex flex-col space-y-1 mt-3">
                  <div>const dev = &#123;</div>
                  <div className="pl-4">role: &quot;Software Engineer&quot;,</div>
                  <div className="pl-4">skills: [&quot;React&quot;, &quot;Django&quot;],</div>
                  <div className="pl-4">stack: &quot;Full-Stack &amp; AI&quot;</div>
                  <div>&#125;;</div>
                </div>
                <div className="mt-5 inline-flex text-[10px] text-cyan-400 px-2 py-1 rounded bg-cyan-950/40 border border-cyan-500/20">
                  Photo Placeholder
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
