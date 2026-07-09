"use client";

import React from "react";
import { Award, ExternalLink, ShieldCheck, Calendar, Server, Cloud, Globe } from "lucide-react";
import { motion } from "framer-motion";

export default function Certifications() {
  const certs = [
    {
      name: "AWS Academy Cloud Foundations",
      org: "Amazon Web Services",
      icon: Cloud,
      iconColor: "text-amber-500",
      date: "Placeholder (Date)",
      link: "#",
      desc: "Fundamental concepts of AWS Cloud, billing, pricing, services architecture, security and compliance models.",
    },
    {
      name: "Google Cloud Study Jams – Generative AI",
      org: "Google Cloud",
      icon: Globe,
      iconColor: "text-blue-500",
      date: "Placeholder (Date)",
      link: "#",
      desc: "Practical exploration of Generative AI concepts, LLMs, prompt engineering, and utilizing Vertex AI frameworks.",
    },
    {
      name: "HackerRank Problem Solving (Basic)",
      org: "HackerRank",
      icon: ShieldCheck,
      iconColor: "text-green-500",
      date: "Placeholder (Date)",
      link: "#",
      desc: "Validation of algorithmic parsing, logic formulation, standard library data structures, and code execution capability.",
    },
  ];

  return (
    <section id="certifications" className="py-24 relative px-6 bg-slate-900/50">
      {/* Background glow */}
      <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[80px] pointer-events-none -z-10 animate-pulse" />

      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-cyan-400 uppercase tracking-widest">
            Credentials
          </h2>
          <h3 className="text-3xl md:text-4xl font-montserrat font-extrabold text-white mt-2">
            Certifications & Badges
          </h3>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full" />
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
                className="group relative bg-slate-800/40 border border-slate-700/30 hover:border-cyan-400/40 p-6 rounded-2xl glassmorphism glassmorphism-hover flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Top Header */}
                  <div className="flex items-start justify-between">
                    <div className="p-3 bg-slate-900 border border-slate-750 text-slate-300 rounded-2xl group-hover:scale-105 transition-transform duration-200">
                      <Icon className={`w-6 h-6 ${cert.iconColor}`} />
                    </div>
                    <span className="text-[10px] text-slate-400 font-mono flex items-center gap-1">
                      <Calendar size={10} />
                      <span>{cert.date}</span>
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="space-y-2">
                    <span className="text-[10px] text-cyan-400 font-extrabold uppercase tracking-widest block">
                      {cert.org}
                    </span>
                    <h4 className="text-base md:text-lg font-poppins font-bold text-white leading-snug group-hover:text-cyan-400 transition-colors">
                      {cert.name}
                    </h4>
                    <p className="text-slate-400 text-xs leading-relaxed font-inter">
                      {cert.desc}
                    </p>
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="flex items-center justify-between pt-6 border-t border-slate-800/80 mt-6 text-xs font-semibold">
                  <div className="text-yellow-500/80 border border-yellow-500/20 px-2 py-0.5 rounded bg-yellow-950/20 text-[9px] font-extrabold uppercase">
                    Placeholder Link
                  </div>
                  <a
                    href={cert.link}
                    onClick={(e) => {
                      if (cert.link === "#") {
                        e.preventDefault();
                        alert(
                          "Certification Link Placeholder: Update public/resume credentials or link to your actual AWS/Google/HackerRank credentials inside src/components/Certifications.tsx."
                        );
                      }
                    }}
                    className="flex items-center space-x-1 text-slate-400 hover:text-cyan-400 transition-colors relative group"
                  >
                    <span>Verify Credential</span>
                    <ExternalLink size={12} />
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
