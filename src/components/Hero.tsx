"use client";

import React, { useState, useEffect } from "react";
import { Mail, ArrowRight, Download, Terminal, Sparkles, Code2, CheckCircle2, Cpu, Bot, Zap, Activity } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { ThemeMode, ColorPalette } from "@/app/page";

interface HeroProps {
  theme?: ThemeMode;
  setTheme?: (t: ThemeMode) => void;
  colorPalette?: ColorPalette;
}

export default function Hero({ theme = "ai", setTheme, colorPalette }: HeroProps) {
  const words = [
    "Software Engineer",
    "Full Stack Developer",
    "Python/Django Developer",
    "AI Engineer",
    "Backend Specialist",
    "Machine Learning Developer",
  ];

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);
  const [activeCodeTab, setActiveCodeTab] = useState<"profile" | "skills" | "status" | "ai">("ai");

  useEffect(() => {
    const handleType = () => {
      const fullWord = words[currentWordIndex];
      if (!isDeleting) {
        setCurrentText(fullWord.substring(0, currentText.length + 1));
        setTypingSpeed(90);

        if (currentText === fullWord) {
          setTypingSpeed(2200);
          setIsDeleting(true);
        }
      } else {
        setCurrentText(fullWord.substring(0, currentText.length - 1));
        setTypingSpeed(45);

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
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden px-6 bg-mesh-grid"
    >
      {/* Background Ambient Glowing Orbs */}
      <div className={`absolute top-1/4 left-1/5 w-[450px] h-[450px] rounded-full blur-[140px] pointer-events-none -z-10 animate-pulse ${
        theme === "ai" ? "bg-cyan-500/20" : "bg-indigo-500/10 dark:bg-indigo-600/15"
      }`} />
      <div
        className={`absolute bottom-1/4 right-1/5 w-[450px] h-[450px] rounded-full blur-[140px] pointer-events-none -z-10 animate-pulse ${
          theme === "ai" ? "bg-purple-600/25" : "bg-sky-400/15 dark:bg-cyan-500/15"
        }`}
        style={{ animationDelay: "2s" }}
      />
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full blur-[160px] pointer-events-none -z-10 ${
        theme === "ai" ? "bg-emerald-500/15" : "bg-teal-500/10 dark:bg-emerald-500/5"
      }`} />

      {/* Floating Geometric Elements */}
      <div className={`absolute top-16 right-16 w-32 h-32 border rounded-3xl rotate-12 animate-float-slow -z-10 pointer-events-none ${
        theme === "ai" ? "border-cyan-400/35 shadow-[0_0_20px_rgba(0,243,255,0.2)]" : "border-indigo-400/20 dark:border-cyan-500/20"
      }`} />
      <div className={`absolute bottom-20 left-12 w-24 h-24 border rounded-full animate-float-medium -z-10 pointer-events-none ${
        theme === "ai" ? "border-purple-400/35 shadow-[0_0_20px_rgba(168,85,247,0.2)]" : "border-sky-400/20 dark:border-indigo-500/20"
      }`} />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column - Headline & Summary */}
        <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`inline-flex items-center space-x-2.5 px-4 py-2 rounded-full text-xs font-semibold shadow-sm w-fit border ${
              theme === "ai"
                ? "bg-slate-900/90 text-cyan-300 border-cyan-500/40 shadow-[0_0_15px_rgba(0,243,255,0.2)]"
                : "bg-indigo-50/90 dark:bg-slate-900/80 text-indigo-700 dark:text-cyan-400 border-indigo-200/80 dark:border-cyan-500/30"
            }`}
          >
            <span className="flex h-2.5 w-2.5 relative">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                theme === "ai" ? "bg-cyan-400" : "bg-indigo-500 dark:bg-cyan-400"
              }`}></span>
              <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${
                theme === "ai" ? "bg-cyan-300 shadow-[0_0_8px_#00f3ff]" : "bg-indigo-600 dark:bg-cyan-400"
              }`}></span>
            </span>
            <span className="tracking-wide">
              {theme === "ai" ? "🤖 AI ENGINE ACTIVE • SYSTEM FULLY OPERATIONAL" : "Open for Software Engineering & AI Roles"}
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center space-x-4"
          >
            {/* Developer Photo / Avatar Container with Cyber Aura */}
            <div className="relative group shrink-0">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-tr from-cyan-400 via-purple-500 to-emerald-400 p-[2px] shadow-[0_0_20px_rgba(0,243,255,0.4)] group-hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center overflow-hidden relative">
                  <div className="text-xl sm:text-2xl font-extrabold text-cyan-300 font-mono tracking-tighter">
                    PK
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 to-transparent pointer-events-none" />
                </div>
              </div>
              <span className="absolute -bottom-1 -right-1 flex h-3.5 w-3.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400 border-2 border-slate-950"></span>
              </span>
            </div>

            <div>
              <h2 className="text-slate-600 dark:text-slate-400 font-inter font-medium text-base sm:text-lg tracking-wide">
                Hello, I am
              </h2>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-montserrat font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight">
                Piyush{" "}
                <span className={`bg-clip-text text-transparent ${
                  theme === "ai"
                    ? "bg-gradient-to-r from-cyan-400 via-purple-400 to-emerald-300 drop-shadow-[0_0_25px_rgba(0,243,255,0.4)]"
                    : "bg-gradient-to-r from-indigo-700 via-sky-600 to-teal-600 dark:from-cyan-400 dark:via-indigo-400 dark:to-emerald-400"
                }`}>
                  Kumar
                </span>
              </h1>
            </div>
          </motion.div>

          {/* Dynamic Typing Title */}
          <div className="h-10 sm:h-12 flex items-center">
            <span className={`text-lg sm:text-2xl font-bold font-inter ${
              theme === "ai" ? "text-cyan-200" : "text-slate-700 dark:text-slate-300"
            }`}>
              {currentText}
              <span className={`inline-block w-1.5 h-6 sm:h-7 ml-1 align-middle animate-pulse ${
                theme === "ai" ? "bg-cyan-400 shadow-[0_0_10px_#00f3ff]" : "bg-indigo-600 dark:bg-cyan-400"
              }`} />
            </span>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-inter max-w-2xl"
          >
            Passionate Machine Learning &amp; Computer Vision Engineer specializing in object detection (YOLOv8, OpenCV), PyTorch deep learning models, and full-stack Python/Django architectures.
          </motion.p>

          {/* Live AI Dashboard Telemetry Counter Strip */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="grid grid-cols-3 gap-3 p-3 rounded-2xl bg-white/90 dark:bg-slate-900/80 border border-slate-200 dark:border-cyan-500/30 shadow-md font-mono text-xs max-w-xl"
          >
            <div className="text-center">
              <div className="text-[10px] text-slate-500 dark:text-slate-400 uppercase">YOLOv8 mAP</div>
              <div className="text-indigo-600 dark:text-cyan-300 font-extrabold text-sm sm:text-base">87.4%</div>
            </div>
            <div className="text-center border-x border-slate-200 dark:border-slate-800">
              <div className="text-[10px] text-slate-500 dark:text-slate-400 uppercase">Vision Speed</div>
              <div className="text-purple-600 dark:text-purple-300 font-extrabold text-sm sm:text-base">60 FPS</div>
            </div>
            <div className="text-center">
              <div className="text-[10px] text-slate-500 dark:text-slate-400 uppercase">ML Parameters</div>
              <div className="text-emerald-600 dark:text-emerald-400 font-extrabold text-sm sm:text-base">25M+</div>
            </div>
          </motion.div>

          {/* Call to action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <a
              href="#contact"
              onClick={handleScrollToContact}
              className={`px-7 py-3.5 rounded-xl text-white font-semibold flex items-center space-x-2 transition-all transform hover:-translate-y-0.5 shadow-lg group cursor-pointer ${
                theme === "ai"
                  ? "bg-gradient-to-r from-cyan-500 via-purple-600 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 shadow-cyan-500/30 border border-cyan-300/40"
                  : "bg-gradient-to-r from-indigo-600 via-indigo-700 to-sky-600 hover:from-indigo-500 hover:to-sky-500 shadow-indigo-500/25"
              }`}
            >
              <span>Get In Touch</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-6 py-3.5 rounded-xl font-semibold border flex items-center space-x-2 transition-all transform hover:-translate-y-0.5 cursor-pointer ${
                theme === "ai"
                  ? "bg-slate-900/80 text-cyan-300 border-cyan-500/40 hover:bg-cyan-500/10 hover:border-cyan-400 shadow-[0_0_15px_rgba(0,243,255,0.15)]"
                  : "bg-white/80 dark:bg-slate-900/80 text-slate-700 dark:text-slate-200 border-slate-300 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 shadow-sm"
              }`}
            >
              <Download size={18} className={theme === "ai" ? "text-cyan-400" : ""} />
              <span>Resume</span>
            </a>

            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className={`px-6 py-3.5 rounded-xl font-semibold border flex items-center space-x-2 transition-all transform hover:-translate-y-0.5 cursor-pointer ${
                theme === "ai"
                  ? "bg-slate-900/80 text-purple-300 border-purple-500/40 hover:bg-purple-500/10 shadow-[0_0_15px_rgba(168,85,247,0.15)]"
                  : "bg-white/80 dark:bg-slate-900/80 text-slate-700 dark:text-slate-200 border-slate-300 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 shadow-sm"
              }`}
            >
              <Code2 size={18} className={theme === "ai" ? "text-purple-400" : ""} />
              <span>Explore Projects</span>
            </a>
          </motion.div>
        </div>


        {/* Right Column - Sleek Developer IDE / Interactive AI Telemetry HUD */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden relative group transition-all duration-300 ${
              theme === "ai"
                ? "bg-slate-950/90 border border-cyan-500/50 shadow-[0_0_35px_rgba(0,243,255,0.25)]"
                : "glassmorphism border border-slate-700/80"
            }`}
          >
            {/* Cyber scanline indicator */}
            {theme === "ai" && <div className="cyber-scanline" />}

            {/* Ambient edge glow */}
            <div className={`absolute inset-0 opacity-60 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${
              theme === "ai"
                ? "bg-gradient-to-tr from-cyan-500/15 via-purple-600/10 to-emerald-400/15"
                : "bg-gradient-to-tr from-indigo-500/10 via-cyan-500/5 to-emerald-500/10"
            }`} />

            {/* IDE Header Bar */}
            <div className="bg-slate-900/90 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-2 text-xs font-mono text-slate-400 font-medium flex items-center gap-1.5">
                  {theme === "ai" ? (
                    <>
                      <Bot size={14} className="text-cyan-400 animate-pulse" />
                      <span className="text-cyan-300 font-bold">ai_hud_telemetry.sys</span>
                    </>
                  ) : (
                    <>
                      <Terminal size={13} className="text-cyan-400" />
                      piyush_kumar.ts
                    </>
                  )}
                </span>
              </div>

              {/* IDE Code / HUD Tabs */}
              <div className="flex space-x-1 bg-slate-950/70 p-1 rounded-lg border border-slate-800">
                {theme === "ai" && (
                  <button
                    onClick={() => setActiveCodeTab("ai")}
                    className={`px-2.5 py-1 text-[11px] font-mono rounded transition-colors flex items-center gap-1 ${
                      activeCodeTab === "ai"
                        ? "bg-cyan-500/30 text-cyan-300 border border-cyan-400/50 shadow-[0_0_10px_rgba(0,243,255,0.4)]"
                        : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    <Activity size={12} />
                    AI HUD
                  </button>
                )}
                <button
                  onClick={() => setActiveCodeTab("profile")}
                  className={`px-2.5 py-1 text-[11px] font-mono rounded transition-colors ${
                    activeCodeTab === "profile"
                      ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  Profile
                </button>
                <button
                  onClick={() => setActiveCodeTab("skills")}
                  className={`px-2.5 py-1 text-[11px] font-mono rounded transition-colors ${
                    activeCodeTab === "skills"
                      ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  Stack
                </button>
                <button
                  onClick={() => setActiveCodeTab("status")}
                  className={`px-2.5 py-1 text-[11px] font-mono rounded transition-colors ${
                    activeCodeTab === "status"
                      ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  Status
                </button>
              </div>
            </div>

            {/* IDE / HUD Content Area */}
            <div className="p-6 font-mono text-xs leading-relaxed space-y-4 bg-slate-950/80 min-h-[300px] flex flex-col justify-between">
              {activeCodeTab === "ai" && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-3"
                >
                  <div className="flex items-center justify-between text-slate-400 text-[11px] border-b border-cyan-500/20 pb-2">
                    <span className="flex items-center gap-1.5 text-cyan-300 font-bold">
                      <Zap size={14} className="text-yellow-400 animate-bounce" />
                      NEURAL INFERENCE TELEMETRY
                    </span>
                    <span className="text-emerald-400 font-bold flex items-center gap-1">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping inline-block" />
                      99.8% LATENCY SYNC
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-[11px]">
                    <div className="bg-slate-900/90 p-2.5 rounded-xl border border-cyan-500/30 shadow-[0_0_10px_rgba(0,243,255,0.1)]">
                      <div className="text-cyan-400 font-bold mb-1 flex items-center gap-1">
                        <Bot size={13} /> Active Model
                      </div>
                      <div className="text-slate-200 font-semibold">Gemini 3.5 Flash (High)</div>
                    </div>

                    <div className="bg-slate-900/90 p-2.5 rounded-xl border border-purple-500/30 shadow-[0_0_10px_rgba(168,85,247,0.1)]">
                      <div className="text-purple-400 font-bold mb-1 flex items-center gap-1">
                        <Sparkles size={13} /> YOLOv8 Vision
                      </div>
                      <div className="text-slate-200 font-semibold">87.4% mAP Inference</div>
                    </div>
                  </div>

                  <div className="bg-slate-900/90 p-3 rounded-xl border border-emerald-500/30 text-[11px] space-y-1.5">
                    <div className="text-emerald-400 font-bold flex items-center justify-between">
                      <span>AI ASSISTANT AGENT</span>
                      <span className="text-cyan-300 text-[10px]">READY FOR PROMPTS</span>
                    </div>
                    <p className="text-slate-300 font-sans text-xs">
                      &quot;Hi! I am Piyush&apos;s AI Agent persona. Click the widget in the bottom right corner to query my experience or projects!&quot;
                    </p>
                  </div>
                </motion.div>
              )}

              {activeCodeTab === "profile" && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-2"
                >
                  <div>
                    <span className="text-purple-400">interface</span>{" "}
                    <span className="text-yellow-300">SoftwareEngineer</span> &#123;
                  </div>
                  <div className="pl-4">
                    <span className="text-cyan-300">name</span>:{" "}
                    <span className="text-emerald-300">&quot;Piyush Kumar&quot;</span>;
                  </div>
                  <div className="pl-4">
                    <span className="text-cyan-300">degree</span>:{" "}
                    <span className="text-emerald-300">&quot;B.Tech Computer Science &amp; Eng&quot;</span>;
                  </div>
                  <div className="pl-4">
                    <span className="text-cyan-300">specialization</span>: [
                    <span className="text-emerald-300">&quot;Full Stack Web&quot;</span>,{" "}
                    <span className="text-emerald-300">&quot;AI Models&quot;</span>];
                  </div>
                  <div className="pl-4">
                    <span className="text-cyan-300">github</span>:{" "}
                    <a
                      href="https://github.com/PiyushKuMar109"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 underline hover:text-cyan-300"
                    >
                      &quot;PiyushKuMar109&quot;
                    </a>
                    ;
                  </div>
                  <div className="pl-4">
                    <span className="text-cyan-300">location</span>:{" "}
                    <span className="text-emerald-300">&quot;Faridabad, HR, India&quot;</span>;
                  </div>
                  <div>&#125;</div>

                  <div className="pt-3 text-slate-400 flex items-center gap-2">
                    <Sparkles size={14} className="text-yellow-400 shrink-0" />
                    <span>const engineer = new SoftwareEngineer();</span>
                  </div>
                </motion.div>
              )}

              {activeCodeTab === "skills" && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-3"
                >
                  <div className="text-slate-400">// Core Tech Stack Breakdown</div>
                  <div className="grid grid-cols-2 gap-2 text-[11px]">
                    <div className="bg-slate-900/80 p-2.5 rounded-xl border border-slate-800">
                      <div className="text-cyan-400 font-bold mb-1">Frontend</div>
                      <div className="text-slate-300">React.js, HTML5, CSS3, Tailwind, Next.js</div>
                    </div>
                    <div className="bg-slate-900/80 p-2.5 rounded-xl border border-slate-800">
                      <div className="text-purple-400 font-bold mb-1">Backend</div>
                      <div className="text-slate-300">Python, Django REST, Node.js, Express</div>
                    </div>
                    <div className="bg-slate-900/80 p-2.5 rounded-xl border border-slate-800">
                      <div className="text-emerald-400 font-bold mb-1">AI & ML</div>
                      <div className="text-slate-300">YOLOv8, OpenCV, Gemini API, PyTorch</div>
                    </div>
                    <div className="bg-slate-900/80 p-2.5 rounded-xl border border-slate-800">
                      <div className="text-amber-400 font-bold mb-1">Databases</div>
                      <div className="text-slate-300">PostgreSQL, MySQL, Prisma ORM</div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeCodeTab === "status" && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-3"
                >
                  <div className="flex items-center justify-between bg-slate-900/80 p-2.5 rounded-xl border border-slate-800">
                    <span className="text-slate-300 flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-emerald-400" />
                      Model Accuracy (YOLOv8)
                    </span>
                    <span className="text-emerald-400 font-bold">87% mAP</span>
                  </div>
                  <div className="flex items-center justify-between bg-slate-900/80 p-2.5 rounded-xl border border-slate-800">
                    <span className="text-slate-300 flex items-center gap-2">
                      <Cpu size={14} className="text-cyan-400" />
                      Internship Experience
                    </span>
                    <span className="text-cyan-400 font-bold">VAAAN Infra</span>
                  </div>
                  <div className="flex items-center justify-between bg-slate-900/80 p-2.5 rounded-xl border border-slate-800">
                    <span className="text-slate-300 flex items-center gap-2">
                      <Sparkles size={14} className="text-purple-400" />
                      Featured AI SaaS
                    </span>
                    <span className="text-purple-300 font-bold">ResumeIQ</span>
                  </div>
                </motion.div>
              )}

              {/* Console Execution Line */}
              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center space-x-1.5">
                  <span className="text-cyan-400 font-bold">$</span>
                  <span className="text-slate-200">
                    {theme === "ai" ? "piyush.ai_agent.run()" : "piyush.build()"}
                  </span>
                </span>
                <span className={`px-2 py-0.5 rounded text-[10px] ${
                  theme === "ai"
                    ? "bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 font-bold shadow-[0_0_8px_rgba(0,243,255,0.4)]"
                    : "bg-emerald-950/60 border border-emerald-500/30 text-emerald-400"
                }`}>
                  {theme === "ai" ? "AI MODE ACTIVE" : "Build Success"}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
