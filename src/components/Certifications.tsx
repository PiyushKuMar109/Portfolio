"use client";

import React from "react";
import { Award, ExternalLink, ShieldCheck, Calendar, Server, Cloud, Globe, Sparkles, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Certifications() {
  const certs = [
    {
      name: "AWS Academy Cloud Foundations",
      org: "Amazon Web Services",
      icon: Cloud,
      iconColor: "text-amber-400",
      status: "Verified Credential",
      link: "https://aws.amazon.com/training/academy/",
      desc: "Fundamental concepts of AWS Cloud, core services architecture, security, compliance, billing models, and serverless compute.",
    },
    {
      name: "Google Cloud Study Jams – Generative AI",
      org: "Google Cloud",
      icon: Globe,
      iconColor: "text-cyan-400",
      status: "Verified Badge",
      link: "https://cloud.google.com/innovators/studyjams",
      desc: "Practical exploration of Generative AI concepts, LLMs, prompt engineering, and utilizing Google Cloud AI frameworks.",
    },
    {
      name: "HackerRank Problem Solving (Basic)",
      org: "HackerRank",
      icon: ShieldCheck,
      iconColor: "text-emerald-400",
      status: "Skill Certificate",
      link: "https://www.hackerrank.com/certificates",
      desc: "Validation of algorithmic parsing, logic formulation, standard library data structures, and efficient code execution capability.",
    },
  ];

  return (
    <section id="certifications" className="py-24 relative px-6 bg-slate-100/50 dark:bg-slate-900/40">
      {/* Background glow */}
      <div className="absolute top-1/3 right-1/4 w-[350px] h-[350px] bg-emerald-500/10 dark:bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none -z-10 animate-pulse" />

      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-xs font-bold text-indigo-600 dark:text-cyan-400 uppercase tracking-widest flex items-center justify-center gap-2">
            <Sparkles size={14} />
            Credentials
          </h2>
          <h3 className="text-3xl md:text-5xl font-montserrat font-extrabold text-slate-900 dark:text-white mt-2 tracking-tight">
            Certifications &amp; Badges
          </h3>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 via-sky-500 to-emerald-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certs.map((cert, idx) => {
            const Icon = cert.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="group relative bg-white/80 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-cyan-500/40 p-7 rounded-3xl glassmorphism flex flex-col justify-between hover:shadow-xl hover:shadow-indigo-500/10 dark:hover:shadow-cyan-500/10 transition-all duration-300"
              >
                <div className="space-y-4">
                  {/* Top Header */}
                  <div className="flex items-start justify-between">
                    <div className="p-3 bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 rounded-2xl group-hover:scale-105 transition-transform duration-200 shadow-xs">
                      <Icon className={`w-6 h-6 ${cert.iconColor}`} />
                    </div>
                    <span className="text-xs text-emerald-700 dark:text-emerald-400 font-mono flex items-center gap-1 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-500/20 px-2.5 py-1 rounded-full font-semibold">
                      <CheckCircle2 size={12} />
                      <span>{cert.status}</span>
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="space-y-2 pt-2">
                    <span className="text-[10px] text-indigo-600 dark:text-cyan-400 font-extrabold uppercase tracking-widest block font-mono">
                      {cert.org}
                    </span>
                    <h4 className="text-base md:text-lg font-poppins font-bold text-slate-900 dark:text-white leading-snug group-hover:text-indigo-600 dark:group-hover:text-cyan-300 transition-colors">
                      {cert.name}
                    </h4>
                    <p className="text-slate-700 dark:text-slate-300 text-xs leading-relaxed font-inter">
                      {cert.desc}
                    </p>
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="flex items-center justify-end pt-6 border-t border-slate-200 dark:border-slate-800/80 mt-6 text-xs font-semibold">
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1.5 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors cursor-pointer"
                  >
                    <span>Verify Credential</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

