"use client";

import React from "react";
import { GitCommit, GitPullRequest, Flame, Trophy, Award, Star, ExternalLink, Activity } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { ThemeMode } from "@/app/page";

interface GitHubActivityProps {
  theme?: ThemeMode;
  colorPalette?: string;
}

export default function GitHubActivity({ theme = "ai", colorPalette = "cyber-blue" }: GitHubActivityProps) {
  // Deterministically generate 52 weeks x 7 days GitHub contribution grid data (avoids hydration mismatch)
  const generateContributionData = () => {
    const data: number[] = [];
    for (let i = 0; i < 364; i++) {
      // Pseudo-random formula based on index i for deterministic hydration match
      const pseudoRand = ((i * 37 + 17) % 100) / 100;
      if (pseudoRand < 0.35) data.push(0);
      else if (pseudoRand < 0.65) data.push(1);
      else if (pseudoRand < 0.88) data.push(2);
      else if (pseudoRand < 0.96) data.push(3);
      else data.push(4);
    }
    return data;
  };

  const contributionGrid = generateContributionData();

  const achievements = [
    {
      title: "YOLOv8 Real-Time Vision Master",
      category: "Computer Vision",
      description: "Trained high-speed YOLOv8 object detection pipelines achieving 87.4% mAP for traffic analysis.",
      icon: <Trophy className="text-yellow-400" size={24} />,
      badge: "87.4% mAP",
    },
    {
      title: "Full-Stack AI Integration Lead",
      category: "AI SaaS Architecture",
      description: "Engineered LLM embedding workflows & Django REST microservices for automated resume evaluation.",
      icon: <Award className="text-cyan-400" size={24} />,
      badge: "ResumeIQ SaaS",
    },
    {
      title: "Python Backend Engineering Specialist",
      category: "VAAAN Infra Internship",
      description: "Architected high-throughput backend APIs and SQL database schemas serving computer vision nodes.",
      icon: <Star className="text-purple-400" size={24} />,
      badge: "Industry Experience",
    },
  ];

  const getCellColor = (level: number) => {
    if (level === 0) return theme === "light" ? "bg-slate-100 border-slate-200" : "bg-slate-900 border-slate-800/80";
    if (colorPalette === "matrix-green") {
      if (level === 1) return "bg-emerald-950/80 border-emerald-800/50";
      if (level === 2) return "bg-emerald-700/70 border-emerald-500/60";
      if (level === 3) return "bg-emerald-500 border-emerald-300 shadow-[0_0_8px_#10b981]";
      return "bg-emerald-300 border-emerald-100 shadow-[0_0_12px_#00ff66]";
    } else if (colorPalette === "cyberpunk") {
      if (level === 1) return "bg-pink-950/80 border-pink-800/50";
      if (level === 2) return "bg-pink-700/70 border-pink-500/60";
      if (level === 3) return "bg-pink-500 border-pink-300 shadow-[0_0_8px_#ec4899]";
      return "bg-cyan-300 border-white shadow-[0_0_12px_#00f3ff]";
    } else if (colorPalette === "amber") {
      if (level === 1) return "bg-amber-950/80 border-amber-800/50";
      if (level === 2) return "bg-amber-700/70 border-amber-500/60";
      if (level === 3) return "bg-amber-500 border-amber-300 shadow-[0_0_8px_#f59e0b]";
      return "bg-amber-300 border-amber-100 shadow-[0_0_12px_#facc15]";
    } else if (colorPalette === "purple-neon") {
      if (level === 1) return "bg-purple-950/80 border-purple-800/50";
      if (level === 2) return "bg-purple-800/70 border-purple-600/60";
      if (level === 3) return "bg-purple-600 border-purple-400 shadow-[0_0_8px_#a855f7]";
      return "bg-purple-400 border-purple-200 shadow-[0_0_12px_#c084fc]";
    } else if (colorPalette === "emerald") {
      if (level === 1) return "bg-emerald-950/80 border-emerald-800/50";
      if (level === 2) return "bg-emerald-800/70 border-emerald-600/60";
      if (level === 3) return "bg-emerald-500 border-emerald-300 shadow-[0_0_8px_#10b981]";
      return "bg-emerald-300 border-emerald-100 shadow-[0_0_12px_#6ee7b7]";
    } else if (colorPalette === "orange") {
      if (level === 1) return "bg-orange-950/80 border-orange-800/50";
      if (level === 2) return "bg-orange-800/70 border-orange-600/60";
      if (level === 3) return "bg-orange-500 border-orange-300 shadow-[0_0_8px_#f97316]";
      return "bg-orange-300 border-orange-100 shadow-[0_0_12px_#fdba74]";
    } else if (colorPalette === "monochrome") {
      if (level === 1) return "bg-zinc-800 border-zinc-700";
      if (level === 2) return "bg-zinc-600 border-zinc-500";
      if (level === 3) return "bg-zinc-400 border-zinc-300 shadow-[0_0_8px_#a1a1aa]";
      return "bg-zinc-100 border-white shadow-[0_0_12px_#ffffff]";
    }
    // Default Cyber Blue
    if (level === 1) return "bg-sky-950/80 border-sky-800/50";
    if (level === 2) return "bg-blue-800/70 border-blue-600/60";
    if (level === 3) return "bg-cyan-500 border-cyan-300 shadow-[0_0_8px_#00f3ff]";
    return "bg-cyan-300 border-white shadow-[0_0_12px_#38bdf8]";
  };

  return (
    <section id="achievements" className="py-20 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-indigo-50 dark:bg-cyan-500/10 text-indigo-600 dark:text-cyan-400 border border-indigo-200 dark:border-cyan-500/30 text-xs font-semibold uppercase tracking-widest mb-3">
            <Activity size={14} className="animate-pulse" />
            <span>Telemetry &amp; Code Contributions</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-montserrat font-extrabold text-slate-900 dark:text-white">
            GitHub Activity &amp; <span className="gradient-text-ai">Achievements</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mt-3 text-sm sm:text-base font-inter">
            Real-time open source telemetry, commit frequency, and milestone achievements in Machine Learning &amp; Computer Vision.
          </p>
        </div>

        {/* GitHub Contribution Heatmap Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="telemetry-card p-6 sm:p-8 mb-12 relative overflow-hidden"
        >
          {/* Header Stats Bar */}
          <div className="flex flex-wrap items-center justify-between gap-6 pb-6 mb-6 border-b border-slate-200 dark:border-slate-800">
            <div className="flex items-center space-x-3">
              <div className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white shadow-xs">
                <FaGithub size={24} />
              </div>
              <div>
                <a
                  href="https://github.com/PiyushKuMar109"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-lg text-slate-900 dark:text-white flex items-center gap-1.5 hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors"
                >
                  @PiyushKuMar109
                  <ExternalLink size={14} className="text-slate-400" />
                </a>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                  640+ Contributions in the last year
                </div>
              </div>
            </div>

            {/* Quick Stat Counters */}
            <div className="grid grid-cols-3 gap-4 font-mono text-xs">
              <div className="bg-slate-50 dark:bg-slate-900/90 px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-800">
                <div className="text-slate-500 dark:text-slate-400 text-[10px] uppercase flex items-center gap-1">
                  <GitCommit size={12} className="text-indigo-600 dark:text-cyan-400" /> Total Commits
                </div>
                <div className="text-indigo-600 dark:text-cyan-300 font-extrabold text-base">642</div>
              </div>
              <div className="bg-slate-50 dark:bg-slate-900/90 px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-800">
                <div className="text-slate-500 dark:text-slate-400 text-[10px] uppercase flex items-center gap-1">
                  <Flame size={12} className="text-orange-500 dark:text-orange-400" /> Current Streak
                </div>
                <div className="text-orange-600 dark:text-orange-400 font-extrabold text-base">14 Days</div>
              </div>
              <div className="bg-slate-50 dark:bg-slate-900/90 px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-800">
                <div className="text-slate-500 dark:text-slate-400 text-[10px] uppercase flex items-center gap-1">
                  <GitPullRequest size={12} className="text-purple-600 dark:text-purple-400" /> Pull Requests
                </div>
                <div className="text-purple-600 dark:text-purple-300 font-extrabold text-base">48 PRs</div>
              </div>
            </div>
          </div>

          {/* Heatmap Grid Visual */}
          <div className="overflow-x-auto pb-2">
            <div className="min-w-[700px]">
              <div className="grid grid-flow-col grid-rows-7 gap-1.5 justify-between">
                {contributionGrid.map((level, idx) => (
                  <div
                    key={idx}
                    className={`w-3 h-3 rounded-[3px] border transition-all hover:scale-125 cursor-pointer ${getCellColor(
                      level
                    )}`}
                    title={`Day ${idx + 1}: ${level * 3 + 1} contributions`}
                  />
                ))}
              </div>
              <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 mt-4">
                <span>365 Days Ago</span>
                <div className="flex items-center space-x-1.5">
                  <span>Less</span>
                  <div className="w-2.5 h-2.5 rounded-[2px] bg-slate-900 border border-slate-800" />
                  <div className="w-2.5 h-2.5 rounded-[2px] bg-sky-950 border border-sky-800" />
                  <div className="w-2.5 h-2.5 rounded-[2px] bg-blue-800" />
                  <div className="w-2.5 h-2.5 rounded-[2px] bg-cyan-400" />
                  <span>More</span>
                </div>
                <span>Today</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Achievements Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="telemetry-card p-6 relative group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 text-[11px] font-mono font-bold">
                    {item.badge}
                  </span>
                </div>
                <div className="text-xs text-cyan-400 font-mono font-semibold uppercase tracking-wider mb-1">
                  {item.category}
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-inter">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
