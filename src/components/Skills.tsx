"use client";

import React, { useState } from "react";
import {
  Code, Layout, Server, Database, Settings, Cpu, UserCheck,
  Terminal, FileJson, Coffee, FileCode, Paintbrush, Atom, Laptop,
  Globe, Brain, Eye, Camera, MessageSquareCode, Bot, Sparkles,
  GitBranch, Compass, Cloud, HardDrive, Send, Gauge, Zap
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");

  const featuredMLSkills = [
    { name: "Python", level: 95, icon: Terminal, metric: "Primary Dev Language", color: "from-cyan-400 to-blue-600" },
    { name: "OpenCV", level: 90, icon: Camera, metric: "Computer Vision 60FPS", color: "from-purple-400 to-pink-600" },
    { name: "YOLOv8", level: 88, icon: Eye, metric: "87.4% mAP Detection", color: "from-emerald-400 to-teal-600" },
    { name: "PyTorch", level: 85, icon: Brain, metric: "Neural Network Training", color: "from-yellow-400 to-orange-600" },
    { name: "TensorFlow", level: 82, icon: Cpu, metric: "Deep Learning Models", color: "from-orange-400 to-red-600" },
    { name: "Django REST", level: 92, icon: Server, metric: "Scalable Microservices", color: "from-teal-400 to-cyan-600" },
  ];

  const categories = [
    { id: "all", label: "All Skills", icon: Code },
    { id: "languages", label: "Languages", icon: Code },
    { id: "frontend", label: "Frontend", icon: Layout },
    { id: "backend", label: "Backend", icon: Server },
    { id: "databases", label: "Databases", icon: Database },
    { id: "ml_ai", label: "AI & ML", icon: Cpu },
    { id: "tools", label: "Tools & Cloud", icon: Settings },
    { id: "soft_skills", label: "Professional Skills", icon: UserCheck },
  ];

  const skillsData = [
    // Languages
    { name: "Python", category: "languages", icon: Terminal, level: 95 },
    { name: "JavaScript", category: "languages", icon: FileJson, level: 85 },
    { name: "Java", category: "languages", icon: Coffee, level: 75 },
    { name: "SQL", category: "languages", icon: Database, level: 80 },
    { name: "C", category: "languages", icon: Code, level: 70 },

    // Frontend
    { name: "HTML5", category: "frontend", icon: FileCode, level: 90 },
    { name: "CSS3 / Tailwind", category: "frontend", icon: Paintbrush, level: 85 },
    { name: "React.js", category: "frontend", icon: Atom, level: 85 },
    { name: "Responsive Design", category: "frontend", icon: Laptop, level: 90 },

    // Backend
    { name: "Node.js", category: "backend", icon: Server, level: 80 },
    { name: "Express.js", category: "backend", icon: Server, level: 80 },
    { name: "Django REST Framework", category: "backend", icon: Server, level: 92 },
    { name: "REST API Architecture", category: "backend", icon: Globe, level: 90 },

    // Databases
    { name: "PostgreSQL", category: "databases", icon: Database, level: 85 },
    { name: "MySQL", category: "databases", icon: Database, level: 80 },
    { name: "MongoDB", category: "databases", icon: Database, level: 75 },

    // AI/ML
    { name: "PyTorch", category: "ml_ai", icon: Brain, level: 85 },
    { name: "YOLOv8", category: "ml_ai", icon: Eye, level: 88 },
    { name: "OpenCV", category: "ml_ai", icon: Camera, level: 90 },
    { name: "TensorFlow", category: "ml_ai", icon: Cpu, level: 82 },
    { name: "NLP", category: "ml_ai", icon: MessageSquareCode, level: 80 },
    { name: "LLMs Integration", category: "ml_ai", icon: Bot, level: 88 },
    { name: "Google Gemini API", category: "ml_ai", icon: Sparkles, level: 92 },

    // Tools & Cloud
    { name: "Git", category: "tools", icon: GitBranch, level: 85 },
    { name: "GitHub", category: "tools", icon: FaGithub, level: 85 },
    { name: "Prisma ORM", category: "tools", icon: Compass, level: 80 },
    { name: "AWS", category: "tools", icon: Cloud, level: 75 },
    { name: "AWS S3", category: "tools", icon: HardDrive, level: 80 },
    { name: "Google Cloud", category: "tools", icon: Cloud, level: 75 },
    { name: "Postman", category: "tools", icon: Send, level: 85 },

    // Professional Soft Skills
    { name: "Problem Solving", category: "soft_skills", icon: UserCheck, level: 90 },
    { name: "Team Collaboration", category: "soft_skills", icon: UserCheck, level: 85 },
    { name: "System Debugging", category: "soft_skills", icon: UserCheck, level: 90 },
    { name: "Technical Communication", category: "soft_skills", icon: UserCheck, level: 85 },
  ];

  const filteredSkills =
    activeCategory === "all"
      ? skillsData
      : skillsData.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative px-6 bg-slate-50/50 dark:bg-slate-950/20">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-indigo-500/5 dark:bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-xs font-bold text-indigo-600 dark:text-cyan-400 uppercase tracking-widest flex items-center justify-center gap-2">
            <Gauge size={14} className="animate-pulse" />
            <span>AI Telemetry &amp; Technical Meters</span>
          </h2>
          <h3 className="text-3xl md:text-5xl font-montserrat font-extrabold text-slate-900 dark:text-white mt-2 tracking-tight">
            Machine Learning &amp; Engineering Stack
          </h3>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-emerald-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Featured ML Progress Rings Dashboard Grid */}
        <div className="mb-16">
          <div className="text-xs font-mono font-bold text-slate-400 uppercase mb-6 flex items-center gap-2">
            <Zap size={14} className="text-yellow-400" />
            <span>Core Computer Vision &amp; AI Framework Gauges</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {featuredMLSkills.map((item, idx) => {
              const Icon = item.icon;
              const radius = 34;
              const circumference = 2 * Math.PI * radius;
              const strokeOffset = circumference - (item.level / 100) * circumference;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="telemetry-card p-4 text-center flex flex-col items-center justify-between group hover:-translate-y-1 transition-all"
                >
                  <div className="relative w-24 h-24 flex items-center justify-center mb-2">
                    {/* SVG Ring */}
                    <svg className="w-full h-full transform -rotate-90">
                      <circle
                        cx="48"
                        cy="48"
                        r={radius}
                        className="stroke-slate-200 dark:stroke-slate-800"
                        strokeWidth="6"
                        fill="transparent"
                      />
                      <circle
                        cx="48"
                        cy="48"
                        r={radius}
                        className="progress-ring-circle stroke-indigo-600 dark:stroke-cyan-400"
                        strokeWidth="6"
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeOffset}
                        strokeLinecap="round"
                        fill="transparent"
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center font-mono">
                      <Icon size={18} className="text-indigo-600 dark:text-cyan-300 mb-0.5 group-hover:scale-110 transition-transform" />
                      <span className="text-xs font-extrabold text-slate-900 dark:text-white">{item.level}%</span>
                    </div>
                  </div>

                  <h4 className="font-bold text-sm text-slate-900 dark:text-white">{item.name}</h4>
                  <span className="text-[10px] text-cyan-400 font-mono font-semibold mt-1">
                    {item.metric}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Categories Tab Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl border text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? "bg-gradient-to-r from-cyan-500 via-purple-600 to-emerald-500 border-transparent text-white shadow-lg shadow-cyan-500/20 scale-105"
                    : "bg-white dark:bg-slate-900/80 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700 shadow-xs"
                }`}
              >
                <Icon size={16} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredSkills.map((skill) => {
            const Icon = skill.icon;
            return (
              <motion.div
                layout
                key={skill.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="group relative bg-white/80 dark:bg-slate-900/60 hover:bg-white dark:hover:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 hover:border-cyan-400 dark:hover:border-cyan-500/40 p-6 rounded-3xl glassmorphism hover:shadow-xl hover:shadow-cyan-500/10 flex flex-col justify-between transition-all duration-300"
              >
                {/* Background glow hover */}
                <div className="absolute top-0 right-0 w-28 h-28 bg-indigo-500/5 dark:bg-cyan-500/5 rounded-full blur-2xl group-hover:bg-cyan-500/10 transition-colors pointer-events-none" />

                <div className="space-y-4">
                  {/* Skill title & icon */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-3 bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-cyan-400 rounded-2xl group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all duration-300 shadow-xs">
                        <Icon size={20} />
                      </div>
                      <span className="font-poppins font-bold text-slate-900 dark:text-white text-sm sm:text-base tracking-wide">
                        {skill.name}
                      </span>
                    </div>
                  </div>

                  {/* Level & progress bar */}
                  <div className="space-y-2 pt-1">
                    <div className="flex items-center justify-between text-xs font-semibold text-slate-600 dark:text-slate-400 font-mono">
                      <span>Proficiency</span>
                      <span className="text-cyan-400 font-bold">{skill.level}%</span>
                    </div>
                    {/* Progress track */}
                    <div className="w-full h-2 bg-slate-200 dark:bg-slate-950 rounded-full overflow-hidden border border-slate-200/60 dark:border-slate-800/60">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-emerald-400 rounded-full shadow-xs"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}


