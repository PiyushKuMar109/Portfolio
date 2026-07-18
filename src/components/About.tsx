"use client";

import React from "react";
import { GraduationCap, Briefcase, Award, Milestone, Calendar, MapPin, Sparkles, Languages, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  const stats = [
    { label: "Projects Built", value: "4+" },
    { label: "Internship Duration", value: "4 Months" },
    { label: "Certifications", value: "3" },
    { label: "Technical Skills", value: "30+" },
  ];

  return (
    <section id="about" className="py-24 relative px-6 bg-slate-100/50 dark:bg-slate-900/40">
      {/* Glow Backdrop */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-xs font-bold text-indigo-600 dark:text-cyan-400 uppercase tracking-widest flex items-center justify-center gap-2">
            <Sparkles size={14} />
            About Me
          </h2>
          <h3 className="text-3xl md:text-5xl font-montserrat font-extrabold text-slate-900 dark:text-white mt-2 tracking-tight">
            Professional Story &amp; Background
          </h3>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 via-sky-500 to-emerald-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Block - Bio & Stats */}
          <div className="lg:col-span-6 space-y-8">
            <div className="glassmorphism p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 space-y-6 shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 dark:bg-cyan-500/5 rounded-full blur-2xl group-hover:bg-indigo-500/10 transition-colors pointer-events-none" />

              <h4 className="text-xl font-poppins font-bold flex items-center space-x-2">
                <span className="bg-gradient-to-r from-indigo-600 to-sky-600 dark:from-cyan-400 dark:to-indigo-400 bg-clip-text text-transparent font-extrabold">
                  Professional Summary
                </span>
              </h4>
              <p className="text-slate-700 dark:text-slate-300 font-inter leading-relaxed text-sm md:text-base">
                I am a focused B.Tech Computer Science Engineering student with practical hands-on experience in full-stack web application development, automated systems testing, and artificial intelligence implementations. Throughout my studies and internship at VAAAN Infra, I have specialized in creating automated data pipelines and practical ML workflows.
              </p>
              
              <h4 className="text-xl font-poppins font-bold flex items-center space-x-2 pt-2">
                <span className="bg-gradient-to-r from-indigo-600 to-emerald-600 dark:from-cyan-400 dark:to-emerald-400 bg-clip-text text-transparent font-extrabold">
                  Career Objective
                </span>
              </h4>
              <p className="text-slate-700 dark:text-slate-300 font-inter leading-relaxed text-sm md:text-base">
                Seeking Software Engineering, Full Stack Developer, Python/Django, AI, or Machine Learning roles where I can leverage my expertise in automation, REST APIs, responsive web design, and computer vision (YOLOv8, OpenCV) to engineer high-impact scalable software.
              </p>

              {/* Languages Spoken */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80 flex items-center space-x-3 text-xs">
                <span className="text-slate-600 dark:text-slate-400 font-medium flex items-center gap-1.5">
                  <Languages size={14} className="text-indigo-600 dark:text-cyan-400" />
                  Languages Spoken:
                </span>
                <span className="px-3 py-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-750 text-slate-800 dark:text-slate-200 rounded-full font-semibold shadow-xs">
                  English
                </span>
                <span className="px-3 py-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-750 text-slate-800 dark:text-slate-200 rounded-full font-semibold shadow-xs">
                  Hindi
                </span>
              </div>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-white/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 p-5 rounded-2xl text-center hover:border-indigo-400 dark:hover:border-cyan-500/40 transition-all hover:-translate-y-1 shadow-md"
                >
                  <div className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-indigo-600 via-sky-600 to-emerald-600 dark:from-cyan-400 dark:via-indigo-400 dark:to-emerald-400 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-[11px] text-slate-600 dark:text-slate-400 font-semibold mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Block - Education Timeline & Highlights */}
          <div className="lg:col-span-6 space-y-6">
            <h4 className="text-xl font-poppins font-bold text-slate-900 dark:text-white flex items-center space-x-2.5 px-2">
              <GraduationCap className="text-indigo-600 dark:text-cyan-400" size={24} />
              <span>Education &amp; Background</span>
            </h4>

            <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 pl-8 space-y-8">
              {/* Timeline Item */}
              <div className="relative">
                {/* Node icon */}
                <div className="absolute -left-[45px] top-1 bg-white dark:bg-slate-900 border-2 border-indigo-600 dark:border-cyan-400 p-2 rounded-full text-indigo-600 dark:text-cyan-400 shadow-md">
                  <GraduationCap size={16} />
                </div>

                <div className="glassmorphism p-6 rounded-3xl border border-slate-200/80 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-cyan-500/30 transition-all space-y-3 shadow-lg">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h5 className="font-poppins font-bold text-lg text-slate-900 dark:text-white">
                      B.Tech in Computer Science Engineering
                    </h5>
                    <span className="px-3 py-1 bg-white dark:bg-slate-900 text-indigo-600 dark:text-cyan-400 border border-slate-200 dark:border-slate-750 rounded-full text-xs font-semibold flex items-center space-x-1.5 font-mono shadow-xs">
                      <Calendar size={12} />
                      <span>2022 – 2026</span>
                    </span>
                  </div>

                  <p className="text-slate-700 dark:text-slate-300 font-medium text-sm flex items-center space-x-1.5">
                    <span>Satyug Darshan Institute of Engineering &amp; Technology</span>
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600 dark:text-slate-400 mt-2">
                    <span className="flex items-center space-x-1">
                      <MapPin size={13} className="text-indigo-600 dark:text-cyan-400" />
                      <span>Faridabad, Haryana, India</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Highlight Banner */}
            <div className="glassmorphism p-6 rounded-3xl border-l-4 border-l-emerald-500 flex items-start space-x-4 shadow-lg">
              <Award className="text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" size={24} />
              <div className="space-y-1">
                <h5 className="font-poppins font-bold text-slate-900 dark:text-white text-sm">
                  Engineering Highlight
                </h5>
                <p className="text-slate-700 dark:text-slate-300 text-xs leading-relaxed">
                  Demonstrated ability to deploy computer vision models (YOLOv8) with 87% mAP accuracy, build automated CSV mismatch pipelines during internship, and build full-stack REST API architectures with React, Node, and Python/Django.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

