"use client";

import React, { useState } from "react";
import {
  Code, Layout, Server, Database, Settings, Cpu, UserCheck,
  Terminal, FileJson, Coffee, FileCode, Paintbrush, Atom, Laptop,
  Globe, Brain, Eye, Camera, MessageSquareCode, Bot, Sparkles,
  GitBranch, Compass, Cloud, HardDrive, Send
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Skills", icon: Code },
    { id: "languages", label: "Languages", icon: Code },
    { id: "frontend", label: "Frontend", icon: Layout },
    { id: "backend", label: "Backend", icon: Server },
    { id: "databases", label: "Databases", icon: Database },
    { id: "ml_ai", label: "AI / ML", icon: Cpu },
    { id: "tools", label: "Tools & Cloud", icon: Settings },
    { id: "soft_skills", label: "Soft Skills", icon: UserCheck },
  ];

  const skillsData = [
    // Languages
    { name: "Python", category: "languages", icon: Terminal, level: 90 },
    { name: "JavaScript", category: "languages", icon: FileJson, level: 85 },
    { name: "Java", category: "languages", icon: Coffee, level: 75 },
    { name: "SQL", category: "languages", icon: Database, level: 80 },
    { name: "C", category: "languages", icon: Code, level: 70 },

    // Frontend
    { name: "HTML", category: "frontend", icon: FileCode, level: 90 },
    { name: "CSS", category: "frontend", icon: Paintbrush, level: 85 },
    { name: "React.js", category: "frontend", icon: Atom, level: 85 },
    { name: "Responsive Design", category: "frontend", icon: Laptop, level: 90 },

    // Backend
    { name: "Node.js", category: "backend", icon: Server, level: 80 },
    { name: "Express.js", category: "backend", icon: Server, level: 80 },
    { name: "Django REST Framework", category: "backend", icon: Server, level: 85 },
    { name: "REST APIs", category: "backend", icon: Globe, level: 90 },

    // Databases
    { name: "PostgreSQL", category: "databases", icon: Database, level: 85 },
    { name: "MySQL", category: "databases", icon: Database, level: 80 },
    { name: "MongoDB", category: "databases", icon: Database, level: 75 },

    // AI/ML
    { name: "PyTorch", category: "ml_ai", icon: Brain, level: 80 },
    { name: "YOLOv8", category: "ml_ai", icon: Eye, level: 85 },
    { name: "OpenCV", category: "ml_ai", icon: Camera, level: 80 },
    { name: "NLP", category: "ml_ai", icon: MessageSquareCode, level: 75 },
    { name: "LLMs", category: "ml_ai", icon: Bot, level: 85 },
    { name: "Google Gemini API", category: "ml_ai", icon: Sparkles, level: 90 },

    // Tools & Cloud
    { name: "Git", category: "tools", icon: GitBranch, level: 85 },
    { name: "GitHub", category: "tools", icon: FaGithub, level: 85 },
    { name: "Prisma ORM", category: "tools", icon: Compass, level: 80 },
    { name: "AWS", category: "tools", icon: Cloud, level: 75 },
    { name: "AWS S3", category: "tools", icon: HardDrive, level: 80 },
    { name: "Google Cloud", category: "tools", icon: Cloud, level: 75 },
    { name: "Postman", category: "tools", icon: Send, level: 85 },

    // Soft Skills (Placeholder clearly marked)
    { name: "Problem Solving", category: "soft_skills", icon: UserCheck, level: 90, isPlaceholder: true },
    { name: "Team Collaboration", category: "soft_skills", icon: UserCheck, level: 85, isPlaceholder: true },
    { name: "System Debugging", category: "soft_skills", icon: UserCheck, level: 90, isPlaceholder: true },
    { name: "Effective Communication", category: "soft_skills", icon: UserCheck, level: 80, isPlaceholder: true },
  ];

  const filteredSkills =
    activeCategory === "all"
      ? skillsData
      : skillsData.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative px-6">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-cyan-400 uppercase tracking-widest">
            Skills
          </h2>
          <h3 className="text-3xl md:text-4xl font-montserrat font-extrabold text-white mt-2">
            Technical Proficiency
          </h3>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full" />
        </div>

        {/* Categories Tab Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl border text-sm font-medium transition-all ${
                  activeCategory === cat.id
                    ? "bg-gradient-to-r from-primary to-secondary border-transparent text-white shadow-lg shadow-primary/20 scale-105"
                    : "bg-slate-800/60 border-slate-700/50 text-slate-300 hover:text-white hover:border-slate-600"
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
                transition={{ duration: 0.2 }}
                className="group relative bg-slate-800/55 hover:bg-slate-800/80 border border-slate-700/40 hover:border-cyan-400/40 p-6 rounded-2xl glassmorphism glassmorphism-hover shadow-md flex flex-col justify-between"
              >
                {/* Background glow hover */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-full blur-2xl group-hover:bg-cyan-500/10 transition-colors pointer-events-none" />

                <div className="space-y-4">
                  {/* Skill title & icon */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-3 bg-slate-900 border border-slate-750 text-cyan-400 rounded-xl group-hover:scale-110 group-hover:text-white transition-all duration-350">
                        <Icon size={20} />
                      </div>
                      <span className="font-poppins font-bold text-white text-base tracking-wide">
                        {skill.name}
                      </span>
                    </div>

                    {/* Placeholder indicator */}
                    {skill.isPlaceholder && (
                      <span className="text-[9px] font-extrabold text-yellow-400 border border-yellow-500/25 px-1.5 py-0.5 rounded bg-yellow-950/20">
                        Placeholder
                      </span>
                    )}
                  </div>

                  {/* Level & progress bar */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs font-semibold text-slate-400">
                      <span>Proficiency</span>
                      <span className="text-cyan-400">{skill.level}%</span>
                    </div>
                    {/* Progress track */}
                    <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
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
