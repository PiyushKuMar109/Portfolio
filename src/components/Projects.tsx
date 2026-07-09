"use client";

import React, { useState } from "react";
import { Search, ExternalLink, BookOpen, Clock, Tag, Cpu, X, Terminal, ChevronRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

interface Project {
  id: string;
  name: string;
  shortDesc: string;
  description: string;
  problem: string;
  solution: string;
  features: string[];
  technologies: string[];
  architecture: string;
  role: string;
  timeline: string;
  achievements: string[];
  github: string;
  live: string;
  category: string; // frontend, backend, ml_ai
  gradient: string;
}

export default function Projects() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("all");
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);

  const projectsData: Project[] = [
    {
      id: "resume-iq",
      name: "ResumeIQ — AI Resume Analyzer",
      shortDesc: "Full-stack resume analysis platform with real-time ATS scoring, AI mock interviews, and Kanban application tracking.",
      description: "A comprehensive ATS score and interview feedback platform integrating generative AI architectures. It analyzes resumes in real-time to find gap analyses, suggests bullet point edits, and enables users to simulate mock interviews.",
      problem: "Job seekers lack actionable insight into why their resumes fail automated Applicant Tracking Systems (ATS), and they enter mock interview rounds without specialized, role-focused feedback.",
      solution: "Designed a multi-service Django and React stack leveraging the Google Gemini API to analyze uploaded resumes against targeted schemas, matching terms dynamically and scoring ATS readiness.",
      features: [
        "Real-time ATS scoring, keyword gap analysis, and tailored bullet-point revision suggestions.",
        "Google Gemini API integration with structured JSON schema responses to ensure parser reliability.",
        "Role-based AI mock interview engine simulating real-world engineering questions.",
        "Interactive scheduling marketplace for peer-to-peer live mock sessions.",
        "Kanban Job Application Tracker enabling candidates to track applications from bookmarking to active offers.",
      ],
      technologies: ["React.js", "Django REST Framework", "PostgreSQL", "Google Gemini API", "JWT", "AWS S3", "Vite"],
      architecture: "React.js frontend -> Django REST API -> Google Gemini LLM API (Structured JSON Schemas) & PostgreSQL database. Media files stored in AWS S3.",
      role: "Lead Full-Stack & AI Developer",
      timeline: "2026",
      achievements: [
        "Successfully enforced LLM output consistency through Gemini JSON Schema prompting.",
        "Engineered the interview scheduling marketplace flow.",
      ],
      github: "https://github.com/piyushkumar/resume-iq", // Placeholder from resume
      live: "https://resumeiq-demo.vercel.app", // Placeholder
      category: "ml_ai",
      gradient: "from-indigo-650 via-cyan-550 to-blue-600",
    },
    {
      id: "saas-task",
      name: "SaaS Task Tracker",
      shortDesc: "Multi-tenant SaaS task management platform with role-based access control (RBAC) and tenant-level isolation.",
      description: "A secure task-management platform designed for corporate environments. It supports multi-tenant database isolation, allowing multiple companies to run on the same API instance safely.",
      problem: "Small to medium companies require task management solutions with strict access control and separation of organizational data on shared database instances.",
      solution: "Developed an Express.js API utilizing Prisma ORM to isolate database queries at the tenant layer, coupled with JWT authorization implementing roles (Admin, Manager, Employee).",
      features: [
        "Multi-tenant SaaS data isolation protecting organization records on a shared database.",
        "Role-based access control (RBAC) with granular security gates for Admin, Manager, and Employee levels.",
        "Secure cookie-based and header-based JWT authentication.",
        "Fully documented RESTful endpoints for integration.",
      ],
      technologies: ["React.js", "Node.js", "Express.js", "PostgreSQL", "Prisma ORM", "JWT"],
      architecture: "React.js Frontend -> Express.js API Gateway -> Prisma ORM -> PostgreSQL database server. Tenant context is injected on every request.",
      role: "Backend & Database Architect",
      timeline: "2025",
      achievements: [
        "Implemented custom Prisma middlewares to inject organization IDs, mitigating data leak hazards.",
        "Secured critical endpoints achieving complete separation of user privileges.",
      ],
      github: "https://github.com/piyushkumar/saas-task-tracker",
      live: "https://saas-task-tracker.vercel.app",
      category: "backend",
      gradient: "from-blue-650 to-cyan-500",
    },
    {
      id: "ray-voice",
      name: "Ray Voice Assistant",
      shortDesc: "Intelligent local voice assistant supporting 15+ command classes, speech-to-text processing, and workflow automation.",
      description: "A hands-free local automation voice assistant built in Python. It captures audio input, converts it to structured commands using NLP, and executes scripts to manage desktop processes.",
      problem: "Traditional computing workflows require physical interaction (keyboard/mouse) for minor tasks, which can be inefficient for automated desktop routines.",
      solution: "Built a Python-based utility using Speech Recognition libraries and NLTK for intent recognition to classify spoken commands and execute subprocess controllers.",
      features: [
        "Hands-free voice recognition supporting 15+ distinct command categories.",
        "Local Natural Language Processing for intent understanding and arguments mapping.",
        "Integration with speech synthesis engines for audio response.",
        "Process-automation hooks for opening software, file management, and system tasks.",
      ],
      technologies: ["Python", "NLP", "Speech Recognition", "OS Automation"],
      architecture: "Speech capture stream -> SpeechToText Engine -> Intent Classification Module (Python NLP) -> Local Process Controller / Desktop Automator.",
      role: "Python Engineer & NLP Specialist",
      timeline: "2025",
      achievements: [
        "Engineered custom local intent parser minimizing network lookups.",
        "Automated desktop browser routines and log extractions by audio prompt.",
      ],
      github: "https://github.com/piyushkumar/ray-voice-assistant",
      live: "https://github.com/piyushkumar/ray-voice-assistant",
      category: "ml_ai",
      gradient: "from-emerald-600 via-teal-500 to-cyan-500",
    },
    {
      id: "object-detect",
      name: "Real-Time Object Detection System",
      shortDesc: "Computer vision application powered by YOLOv8, OpenCV, and PyTorch, achieving 87% mAP on custom datasets.",
      description: "An optimized computer vision pipeline that processes real-time camera streams to localize and classify custom targets. Developed primarily for automated inspection scenarios.",
      problem: "Industrial processing environments need high-accuracy visual scanning tools that can localize objects quickly on low-powered edge systems.",
      solution: "Deployed a customized YOLOv8 model trained on custom annotated files, optimized with quantization in PyTorch and rendering pipelines via OpenCV.",
      features: [
        "YOLOv8-based object detection model achieving 87% mean Average Precision (mAP).",
        "Optimized frame processing with CUDA acceleration and PyTorch model quantization.",
        "Live camera feed overlays displaying boundary boxes, labels, and inference speeds.",
        "Object localization and classification pipelines.",
      ],
      technologies: ["YOLOv8", "OpenCV", "PyTorch", "Python", "Computer Vision"],
      architecture: "Video frame capture (OpenCV) -> Quantized YOLOv8 weight loading (PyTorch) -> Inference Engine -> Output Overlay Rendering.",
      role: "Machine Learning Engineer",
      timeline: "2024",
      achievements: [
        "Achieved 87% mAP on a custom dataset of industrial objects.",
        "Reduced model inference lag, facilitating standard 30 FPS feeds on standard platforms.",
      ],
      github: "https://github.com/piyushkumar/object-detection",
      live: "https://github.com/piyushkumar/object-detection",
      category: "ml_ai",
      gradient: "from-cyan-600 to-indigo-650",
    },
  ];

  // Search & Filter
  const allTags = ["all", "React.js", "Python", "Node.js", "Express.js", "Django REST Framework", "YOLOv8", "PostgreSQL", "Google Gemini API"];

  const filteredProjects = projectsData.filter((proj) => {
    const matchesSearch =
      proj.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      proj.shortDesc.toLowerCase().includes(searchTerm.toLowerCase()) ||
      proj.technologies.some((tech) => tech.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesTag =
      selectedTag === "all" || proj.technologies.includes(selectedTag);

    return matchesSearch && matchesTag;
  });

  return (
    <section id="projects" className="py-24 relative px-6 bg-slate-900/50">
      {/* Background decoration */}
      <div className="absolute top-10 left-10 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[80px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-cyan-400 uppercase tracking-widest">
            Portfolio
          </h2>
          <h3 className="text-3xl md:text-4xl font-montserrat font-extrabold text-white mt-2">
            Featured Projects
          </h3>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full" />
        </div>

        {/* Search and Tag filter wrapper */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-12">
          {/* Search bar */}
          <div className="relative w-full md:w-[350px]">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              type="text"
              placeholder="Search by project name or tech..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-800/60 border border-slate-700/50 focus:border-cyan-400 focus:outline-none rounded-xl py-3 pl-12 pr-4 text-sm text-white placeholder:text-slate-500 transition-colors"
            />
          </div>

          {/* Technology dropdown filter */}
          <div className="flex items-center space-x-2 w-full md:w-auto">
            <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider whitespace-nowrap hidden sm:inline">
              Filter by Tech:
            </span>
            <select
              value={selectedTag}
              onChange={(e) => setSelectedTag(e.target.value)}
              className="w-full md:w-auto bg-slate-800/60 border border-slate-700/50 text-slate-300 hover:text-white focus:border-cyan-400 focus:outline-none rounded-xl py-3 px-4 text-sm transition-colors cursor-pointer"
            >
              {allTags.map((tag) => (
                <option key={tag} value={tag} className="bg-slate-900 text-slate-300">
                  {tag === "all" ? "All Technologies" : tag}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="group bg-slate-800/40 border border-slate-700/30 hover:border-cyan-400/35 rounded-2xl overflow-hidden glassmorphism flex flex-col justify-between"
            >
              {/* Dynamic Abstract Card Header instead of placeholder image */}
              <div className={`h-48 bg-gradient-to-tr ${project.gradient} p-6 flex flex-col justify-between relative overflow-hidden`}>
                {/* Visual grid lines background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:14px_24px]" />
                
                {/* Floating terminal code tag */}
                <div className="flex justify-between items-center z-10">
                  <span className="px-3 py-1 bg-black/30 backdrop-blur-md border border-white/10 text-white rounded-full text-xs font-mono">
                    &lt;{project.category}/&gt;
                  </span>
                  <div className="text-white/60 font-mono text-xs flex items-center gap-1.5">
                    <Clock size={12} />
                    <span>{project.timeline}</span>
                  </div>
                </div>

                <div className="z-10 space-y-1">
                  <h4 className="text-xl md:text-2xl font-montserrat font-extrabold text-white tracking-wide">
                    {project.name.split(" — ")[0]}
                  </h4>
                  <p className="text-white/80 font-mono text-xs truncate max-w-sm">
                    {project.technologies.slice(0, 4).join(" | ")}
                  </p>
                </div>

                <div className="absolute -right-6 -bottom-6 opacity-10 group-hover:scale-110 group-hover:opacity-20 transition-all duration-350 pointer-events-none">
                  <Terminal size={150} className="text-white" />
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                <div className="space-y-3">
                  <p className="text-slate-300 font-inter text-sm leading-relaxed">
                    {project.shortDesc}
                  </p>

                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded-md bg-slate-900/60 border border-slate-700/60 text-slate-400 text-xs font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2.5 py-0.5 rounded-md bg-slate-900/60 border border-slate-700/60 text-cyan-400 text-xs font-bold">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center space-x-3 pt-6 border-t border-slate-800/80">
                  <button
                    onClick={() => setActiveProjectModal(project)}
                    className="flex-1 bg-slate-800 border border-slate-750 hover:border-cyan-400/40 text-cyan-400 hover:text-cyan-300 py-2.5 px-4 rounded-xl text-xs font-semibold flex items-center justify-center space-x-2 transition-all"
                  >
                    <BookOpen size={14} />
                    <span>View Case Study</span>
                  </button>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white rounded-xl text-xs transition-colors"
                    title="GitHub Repository"
                  >
                    <FaGithub size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty Search State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12 text-slate-500 font-mono text-sm">
            No projects match search/filter selections.
          </div>
        )}

        {/* Case Study Modal Dialog */}
        <AnimatePresence>
          {activeProjectModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveProjectModal(null)}
                className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
              />

              {/* Modal Body */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: "spring", duration: 0.4 }}
                className="bg-slate-900 border border-slate-800 w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-3xl z-10 shadow-2xl relative"
              >
                {/* Sticky Header */}
                <div className="sticky top-0 bg-slate-900/90 backdrop-blur-md px-6 md:px-8 py-5 border-b border-slate-800/80 flex items-center justify-between z-10">
                  <div className="space-y-1">
                    <span className="text-[10px] text-cyan-400 font-bold uppercase tracking-wider">
                      Project Details / Case Study
                    </span>
                    <h4 className="text-lg md:text-xl font-montserrat font-extrabold text-white flex items-center space-x-2">
                      <span>{activeProjectModal.name}</span>
                    </h4>
                  </div>
                  <button
                    onClick={() => setActiveProjectModal(null)}
                    className="p-2 bg-slate-800/60 hover:bg-slate-800 hover:text-white text-slate-400 rounded-full border border-slate-750 transition-colors"
                  >
                    <X size={18} />
                  </button>
                </div>

                {/* Modal Content */}
                <div className="p-6 md:p-8 space-y-6">
                  {/* General Info Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-slate-850 p-4 rounded-2xl border border-slate-800 text-xs">
                    <div>
                      <span className="text-slate-500 font-semibold block">Role</span>
                      <span className="text-slate-200 font-bold mt-0.5 block">{activeProjectModal.role}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 font-semibold block">Timeline</span>
                      <span className="text-slate-200 font-bold mt-0.5 block">{activeProjectModal.timeline}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 font-semibold block">Category</span>
                      <span className="text-slate-200 font-bold mt-0.5 block capitalize">{activeProjectModal.category.replace("_", " / ")}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 font-semibold block">Status</span>
                      <span className="text-accent font-bold mt-0.5 block flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping inline-block"></span>
                        Completed
                      </span>
                    </div>
                  </div>

                  {/* Summary */}
                  <div className="space-y-2">
                    <h5 className="font-poppins font-bold text-slate-200 text-sm md:text-base border-l-2 border-primary pl-2.5">
                      Overview
                    </h5>
                    <p className="text-slate-300 text-sm leading-relaxed font-inter">
                      {activeProjectModal.description}
                    </p>
                  </div>

                  {/* Problem Statement */}
                  <div className="space-y-2">
                    <h5 className="font-poppins font-bold text-slate-200 text-sm md:text-base border-l-2 border-red-500/80 pl-2.5">
                      Problem Statement
                    </h5>
                    <p className="text-slate-300 text-sm leading-relaxed font-inter">
                      {activeProjectModal.problem}
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="space-y-2">
                    <h5 className="font-poppins font-bold text-slate-200 text-sm md:text-base border-l-2 border-green-500/80 pl-2.5">
                      Proposed Solution
                    </h5>
                    <p className="text-slate-300 text-sm leading-relaxed font-inter">
                      {activeProjectModal.solution}
                    </p>
                  </div>

                  {/* Key Features */}
                  <div className="space-y-2">
                    <h5 className="font-poppins font-bold text-slate-200 text-sm md:text-base border-l-2 border-cyan-400 pl-2.5">
                      Key Features
                    </h5>
                    <ul className="space-y-2.5 pl-1.5 pt-1">
                      {activeProjectModal.features.map((feat, i) => (
                        <li key={i} className="text-slate-300 text-xs md:text-sm leading-relaxed flex items-start space-x-2">
                          <ChevronRight size={14} className="text-cyan-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Architecture */}
                  <div className="space-y-2">
                    <h5 className="font-poppins font-bold text-slate-200 text-sm md:text-base border-l-2 border-primary pl-2.5">
                      Architecture & Data Flow
                    </h5>
                    <div className="bg-slate-850 p-4 rounded-xl border border-slate-800 text-xs md:text-sm font-mono text-cyan-200">
                      {activeProjectModal.architecture}
                    </div>
                  </div>

                  {/* Key Achievements */}
                  <div className="space-y-2">
                    <h5 className="font-poppins font-bold text-slate-200 text-sm md:text-base border-l-2 border-accent pl-2.5">
                      Key Achievements
                    </h5>
                    <ul className="space-y-2 pl-1.5 pt-1">
                      {activeProjectModal.achievements.map((ach, i) => (
                        <li key={i} className="text-slate-300 text-xs md:text-sm flex items-start space-x-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0"></span>
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech stack Tags */}
                  <div className="space-y-2">
                    <h5 className="font-poppins font-bold text-slate-400 text-xs uppercase tracking-wider">
                      Technologies Leveraged:
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {activeProjectModal.technologies.map((t) => (
                        <span key={t} className="px-2.5 py-1 bg-slate-800 text-slate-200 border border-slate-750 text-xs rounded-lg font-mono">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Visual mockup / screenshot placeholder */}
                  <div className="border border-dashed border-slate-800 rounded-2xl p-8 text-center bg-slate-850/50 flex flex-col items-center justify-center space-y-2 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400/5 to-transparent pointer-events-none" />
                    <Terminal size={32} className="text-slate-500 mb-1" />
                    <span className="font-semibold text-white text-xs md:text-sm">Screenshots / Architecture Diagram Placeholder</span>
                    <span className="text-[10px] text-cyan-400 font-mono bg-cyan-950/40 px-2 py-0.5 border border-cyan-500/20 rounded">
                      Placeholder - Add your assets inside /public/projects/
                    </span>
                  </div>
                </div>

                {/* Footer Action Bar */}
                <div className="px-6 md:px-8 py-5 border-t border-slate-800 bg-slate-950/40 flex items-center justify-end gap-3 rounded-b-3xl">
                  {/* Case Study marker */}
                  <span className="text-[10px] text-yellow-400 bg-yellow-950/30 border border-yellow-500/25 px-2 py-1 rounded font-bold mr-auto">
                    Interactive Case Study Placeholder
                  </span>
                  
                  <a
                    href={activeProjectModal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-semibold flex items-center space-x-1.5 transition-colors border border-slate-700/50"
                  >
                    <FaGithub size={14} />
                    <span>View Repository</span>
                  </a>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      alert("Live Demo Placeholder: Deploy your project and assign the URL here.");
                    }}
                    className="px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-xl text-xs font-semibold flex items-center space-x-1.5 hover:brightness-110 hover:-translate-y-0.5 transition-all group relative"
                  >
                    <ExternalLink size={14} />
                    <span>Live Demo</span>
                    <span className="absolute bottom-full right-0 mb-2 w-max bg-slate-950 text-[10px] text-cyan-400 border border-cyan-500/20 px-2 py-1 rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200">
                      Placeholder - Custom Live Deployment Link
                    </span>
                  </a>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
