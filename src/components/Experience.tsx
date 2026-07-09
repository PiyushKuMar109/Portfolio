"use client";

import React from "react";
import { Briefcase, Calendar, MapPin, CheckCircle2, Cpu } from "lucide-react";
import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      company: "VAAAN Infra",
      role: "Technical Engineer Intern",
      duration: "Aug 2025 – Nov 2025",
      location: "Faridabad, Haryana",
      responsibilities: [
        "Built a Python automation tool to analyze FASTag–ANPR mismatch data from CSV files, eliminating manual verification and improving operational efficiency.",
        "Generated automated plaza-wise mismatch and accuracy reports, enabling faster resolution of incorrect number plate reads and billing discrepancies.",
        "Diagnosed and resolved system-level issues using debugging workflows and log analysis.",
        "Improved operational efficiency through troubleshooting documentation and workflow optimization.",
      ],
      technologies: ["Python", "CSV Analysis Tools", "Debugging Workflows", "Log Analysis", "Process Automation"],
      achievements: [
        "Successfully eliminated manual verification workflows by implementing Python scripts.",
        "Optimized plaza-wise operations, reducing discrepancies in billing and incorrect reads.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 relative px-6">
      {/* Background Glow */}
      <div className="absolute bottom-10 left-1/4 w-[350px] h-[350px] bg-primary/5 rounded-full blur-[90px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-cyan-400 uppercase tracking-widest">
            Experience
          </h2>
          <h3 className="text-3xl md:text-4xl font-montserrat font-extrabold text-white mt-2">
            Work History
          </h3>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full" />
        </div>

        {/* Timeline container */}
        <div className="relative border-l-2 border-slate-800 max-w-4xl mx-auto pl-8 md:pl-12 py-4 space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[43px] md:-left-[59px] top-1.5 w-6 h-6 md:w-8 md:h-8 rounded-full bg-slate-900 border-2 border-cyan-400 flex items-center justify-center text-cyan-400 shadow-md shadow-cyan-400/10">
                <Briefcase size={12} className="md:w-3.5 md:h-3.5" />
              </div>

              {/* Experience Card */}
              <div className="glassmorphism p-6 md:p-8 rounded-3xl border border-slate-850 hover:border-cyan-500/20 transition-all space-y-6">
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="space-y-1">
                    <span className="text-xs text-cyan-400 font-extrabold tracking-wider uppercase">
                      Internship Position
                    </span>
                    <h4 className="text-xl md:text-2xl font-montserrat font-extrabold text-white">
                      {exp.role}
                    </h4>
                    <span className="text-slate-300 font-poppins font-semibold text-base block mt-0.5">
                      {exp.company}
                    </span>
                  </div>

                  <div className="flex flex-col sm:items-end space-y-1 text-xs md:text-sm text-slate-400 font-mono">
                    <span className="flex items-center space-x-1.5 px-3 py-1 bg-slate-900 border border-slate-850 rounded-full text-cyan-400 font-semibold">
                      <Calendar size={12} />
                      <span>{exp.duration}</span>
                    </span>
                    <span className="flex items-center space-x-1.5 pl-3 pt-1">
                      <MapPin size={12} className="text-slate-500" />
                      <span>{exp.location}</span>
                    </span>
                  </div>
                </div>

                {/* Responsibilities list */}
                <div className="space-y-3">
                  <h5 className="font-poppins font-bold text-slate-200 text-sm">
                    Key Responsibilities:
                  </h5>
                  <ul className="space-y-3 pl-1">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="text-slate-300 text-xs md:text-sm leading-relaxed flex items-start space-x-2.5">
                        <CheckCircle2 className="text-cyan-400 shrink-0 mt-0.5" size={14} />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Achievements block */}
                <div className="space-y-3 pt-2">
                  <h5 className="font-poppins font-bold text-slate-200 text-sm">
                    Achievements:
                  </h5>
                  <ul className="space-y-2.5 pl-1">
                    {exp.achievements.map((ach, i) => (
                      <li key={i} className="text-slate-300 text-xs md:text-sm flex items-start space-x-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0"></span>
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies used */}
                <div className="space-y-3 pt-2">
                  <h5 className="font-poppins font-bold text-slate-400 text-xs uppercase tracking-wider">
                    Core Focus Technologies:
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-slate-900 border border-slate-800 text-slate-300 text-xs font-semibold rounded-lg font-mono flex items-center space-x-1.5"
                      >
                        <Cpu size={10} className="text-cyan-400" />
                        <span>{tech}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
