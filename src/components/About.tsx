"use client";

import React from "react";
import { GraduationCap, Briefcase, Award, Milestone, Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  const stats = [
    { label: "Projects Completed", value: "4+" },
    { label: "Internship Duration", value: "4 Months" },
    { label: "Certifications", value: "3" },
    { label: "Technical Skills", value: "30+" },
  ];

  return (
    <section id="about" className="py-24 relative px-6 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-cyan-400 uppercase tracking-widest">
            About Me
          </h2>
          <h3 className="text-3xl md:text-4xl font-montserrat font-extrabold text-white mt-2">
            My Professional Story
          </h3>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Block - Bio & Stats */}
          <div className="lg:col-span-6 space-y-8">
            <div className="glassmorphism p-8 rounded-2xl border border-slate-800 space-y-6">
              <h4 className="text-xl font-poppins font-bold text-white flex items-center space-x-2">
                <span className="text-cyan-400">Professional Summary</span>
              </h4>
              <p className="text-slate-300 font-inter leading-relaxed text-sm md:text-base">
                I am a focused B.Tech Computer Science Engineering student with practical hands-on experience in full-stack web application development, automated systems testing, and artificial intelligence implementations. Throughout my studies and internships, I have focused on solving operational issues by utilizing automated pipelines and machine learning algorithms.
              </p>
              
              <h4 className="text-xl font-poppins font-bold text-white flex items-center space-x-2 pt-2">
                <span className="text-cyan-400">Career Objective</span>
              </h4>
              <p className="text-slate-300 font-inter leading-relaxed text-sm md:text-base">
                Seeking a Software Engineer, Full Stack Developer, Python/Django Developer, AI Engineer, or Machine Learning role where I can apply my experience in automation, REST APIs, web application design, and computer vision (YOLOv8, OpenCV) to design robust scalable architectures.
              </p>

              {/* Languages Spoken (Placeholder) */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center space-x-4 text-xs">
                <span className="text-slate-400 font-medium">Languages Known:</span>
                <span className="px-2.5 py-1 bg-slate-850 border border-slate-700/60 text-slate-300 rounded font-semibold flex items-center gap-1.5">
                  English <span className="text-[10px] text-cyan-400 font-bold bg-cyan-950/60 px-1 rounded">Placeholder</span>
                </span>
                <span className="px-2.5 py-1 bg-slate-850 border border-slate-700/60 text-slate-300 rounded font-semibold flex items-center gap-1.5">
                  Hindi <span className="text-[10px] text-cyan-400 font-bold bg-cyan-950/60 px-1 rounded">Placeholder</span>
                </span>
              </div>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-slate-800/40 border border-slate-850 p-6 rounded-2xl text-center hover:border-cyan-500/25 transition-colors"
                >
                  <div className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-400 font-semibold mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Block - Education Timeline */}
          <div className="lg:col-span-6 space-y-6">
            <h4 className="text-xl font-poppins font-bold text-white flex items-center space-x-2.5 px-2">
              <GraduationCap className="text-cyan-400" size={24} />
              <span>Education Journey</span>
            </h4>

            <div className="relative border-l border-slate-800 ml-4 pl-8 space-y-8">
              {/* Timeline Item */}
              <div className="relative">
                {/* Node icon */}
                <div className="absolute -left-[45px] top-1 bg-slate-900 border-2 border-cyan-400 p-2 rounded-full text-cyan-400 shadow-lg">
                  <GraduationCap size={16} />
                </div>

                <div className="glassmorphism p-6 rounded-2xl hover:border-cyan-500/20 transition-all space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h5 className="font-poppins font-bold text-lg text-white">
                      B.Tech in Computer Science Engineering
                    </h5>
                    <span className="px-3 py-1 bg-slate-800 text-cyan-400 border border-slate-700/50 rounded-full text-xs font-semibold flex items-center space-x-1.5">
                      <Calendar size={12} />
                      <span>2022 – 2026</span>
                    </span>
                  </div>

                  <p className="text-slate-300 font-medium text-sm flex items-center space-x-1.5">
                    <span>Satyug Darshan Institute of Engineering & Technology</span>
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 mt-2">
                    <span className="flex items-center space-x-1">
                      <MapPin size={12} />
                      <span>Faridabad, Haryana</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Fun Fact / Career Highlight Banner */}
            <div className="glassmorphism p-6 rounded-2xl border-l-4 border-l-accent flex items-start space-x-4">
              <Award className="text-accent shrink-0 mt-0.5" size={24} />
              <div className="space-y-1">
                <h5 className="font-poppins font-semibold text-white text-sm">
                  Quick Highlight
                </h5>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Proven ability to deploy machine learning tools (like YOLOv8) reaching an 87% mAP detection accuracy, alongside API orchestrations utilizing Node.js/Express, Python/Django, and Google Gemini API integration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
