"use client";

import React, { useState } from "react";
import { Bot, X, Send, Sparkles, Cpu, Terminal, Zap, ExternalLink, ShieldCheck, ChevronRight, Activity } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeMode } from "@/app/page";

interface AIDashboardWidgetProps {
  theme?: ThemeMode;
  setTheme?: (t: ThemeMode) => void;
}

export default function AIDashboardWidget({ theme = "ai", setTheme }: AIDashboardWidgetProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<
    Array<{ sender: "user" | "ai"; text: string; chips?: string[] }>
  >([
    {
      sender: "ai",
      text: "Hello! I am Piyush's AI Assistant Persona. Ask me anything about Piyush's skills, Python/Django expertise, AI/ML projects, or internship at VAAAN Infra!",
      chips: ["AI & ML Skills", "ResumeIQ Project", "Internship Experience", "Contact Info"],
    },
  ]);

  const presetResponses: Record<string, string> = {
    "AI & ML Skills":
      "Piyush specializes in AI/ML engineering using PyTorch, OpenCV, YOLOv8 object detection, and Gemini/OpenAI API integrations. He has built automated computer vision pipelines and LLM-powered resume ranking platforms.",
    "ResumeIQ Project":
      "ResumeIQ is Piyush's flagship AI SaaS application that analyzes resume PDFs against job descriptions using NLP & LLM embeddings, providing instant match scoring and ATS feedback.",
    "Internship Experience":
      "Piyush interned at VAAAN Infra Pvt. Ltd. as a Python Developer, where he engineered backend microservices, optimized SQL queries, and integrated computer vision modules.",
    "Contact Info":
      "You can contact Piyush directly at piyushbaskar4@gmail.com, or reach out on GitHub (@PiyushKuMar109) and LinkedIn!",
  };

  const handleSend = (textToSend?: string) => {
    const promptText = textToSend || query;
    if (!promptText.trim()) return;

    // Add user message
    const newMessages = [...messages, { sender: "user" as const, text: promptText }];
    setMessages(newMessages);
    setQuery("");
    setIsTyping(true);

    // Simulate AI response stream delay
    setTimeout(() => {
      let replyText = presetResponses[promptText];
      if (!replyText) {
        if (promptText.toLowerCase().includes("skill") || promptText.toLowerCase().includes("stack")) {
          replyText = presetResponses["AI & ML Skills"];
        } else if (promptText.toLowerCase().includes("project") || promptText.toLowerCase().includes("resume")) {
          replyText = presetResponses["ResumeIQ Project"];
        } else if (promptText.toLowerCase().includes("experience") || promptText.toLowerCase().includes("work")) {
          replyText = presetResponses["Internship Experience"];
        } else {
          replyText = `Piyush is a Full Stack & AI Developer skilled in Python, Django, React, Next.js, and ML models. Feel free to explore his portfolio or reach out via email!`;
        }
      }

      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: replyText,
          chips: ["AI & ML Skills", "ResumeIQ Project", "Internship Experience"],
        },
      ]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-inter">
      {/* Floating Trigger Button */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`p-3.5 sm:p-4 rounded-2xl flex items-center space-x-2.5 shadow-2xl cursor-pointer border transition-all duration-300 ${
          theme === "ai"
            ? "bg-gradient-to-r from-cyan-500 via-purple-600 to-emerald-500 text-white border-cyan-300/50 shadow-[0_0_25px_rgba(0,243,255,0.4)]"
            : "bg-slate-900 text-white dark:bg-cyan-500 dark:text-slate-950 border-slate-700 dark:border-cyan-400"
        }`}
        aria-label="Toggle AI Assistant Dashboard"
      >
        <div className="relative">
          <Bot size={22} className={isOpen ? "" : "animate-bounce"} />
          <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-300"></span>
          </span>
        </div>
        <span className="font-bold text-xs sm:text-sm tracking-wider">
          {isOpen ? "CLOSE HUD" : "AI COPILOT"}
        </span>
      </motion.button>

      {/* Floating Interactive Drawer / HUD Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className={`fixed bottom-24 right-4 sm:right-6 w-[calc(100vw-2rem)] sm:w-[420px] max-w-[420px] rounded-3xl shadow-2xl overflow-hidden border backdrop-blur-2xl flex flex-col z-50 ${
              theme === "ai"
                ? "bg-slate-950/95 border-cyan-500/40 shadow-[0_0_40px_rgba(0,243,255,0.3)] text-slate-100"
                : "bg-white/95 dark:bg-slate-950/95 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100"
            }`}
          >
            {/* HUD Header */}
            <div className={`px-5 py-4 border-b flex items-center justify-between ${
              theme === "ai" ? "bg-slate-900/90 border-cyan-500/30" : "bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800"
            }`}>
              <div className="flex items-center space-x-2.5">
                <div className={`p-2 rounded-xl text-white ${
                  theme === "ai"
                    ? "bg-gradient-to-tr from-cyan-500 to-purple-600 shadow-[0_0_12px_rgba(0,243,255,0.5)]"
                    : "bg-indigo-600 dark:bg-cyan-500 dark:text-slate-950"
                }`}>
                  <Bot size={18} />
                </div>
                <div>
                  <div className="font-bold text-sm flex items-center gap-1.5">
                    <span>Piyush AI Telemetry</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono font-bold border border-emerald-500/30">
                      LIVE
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-400 font-mono flex items-center gap-1">
                    <Activity size={11} className="text-cyan-400" />
                    Model: Gemini 3.5 Flash (High)
                  </div>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            {/* Quick Telemetry Metrics Banner */}
            <div className={`px-5 py-2.5 text-[11px] font-mono flex items-center justify-between border-b ${
              theme === "ai" ? "bg-slate-900/60 border-cyan-500/20 text-cyan-300" : "bg-slate-100 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400"
            }`}>
              <span className="flex items-center gap-1">
                <Cpu size={12} className="text-purple-400" /> System: 100% OK
              </span>
              <span className="flex items-center gap-1">
                <Zap size={12} className="text-yellow-400" /> Token Latency: 12ms
              </span>
            </div>

            {/* Chat Messages Body */}
            <div className="p-5 space-y-4 max-h-[320px] overflow-y-auto font-sans text-xs">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col space-y-2 ${
                    msg.sender === "user" ? "items-end" : "items-start"
                  }`}
                >
                  <div
                    className={`max-w-[85%] p-3.5 rounded-2xl text-xs leading-relaxed ${
                      msg.sender === "user"
                        ? theme === "ai"
                          ? "bg-gradient-to-r from-cyan-600 to-purple-600 text-white shadow-md shadow-cyan-500/20"
                          : "bg-indigo-600 text-white dark:bg-cyan-500 dark:text-slate-950"
                        : theme === "ai"
                        ? "bg-slate-900/90 border border-cyan-500/30 text-slate-200 shadow-sm"
                        : "bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200"
                    }`}
                  >
                    {msg.text}
                  </div>

                  {/* Optional Preset Chips */}
                  {msg.chips && msg.sender === "ai" && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {msg.chips.map((chip, cIdx) => (
                        <button
                          key={cIdx}
                          onClick={() => handleSend(chip)}
                          className={`px-2.5 py-1 rounded-full text-[11px] font-semibold border transition-all cursor-pointer ${
                            theme === "ai"
                              ? "bg-slate-900/80 text-cyan-300 border-cyan-500/40 hover:bg-cyan-500/20 shadow-[0_0_8px_rgba(0,243,255,0.15)]"
                              : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-indigo-50 dark:hover:bg-slate-700"
                          }`}
                        >
                          ⚡ {chip}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {isTyping && (
                <div className="flex items-center space-x-2 text-cyan-400 text-xs font-mono">
                  <Sparkles size={14} className="animate-spin" />
                  <span>AI Agent processing response...</span>
                </div>
              )}
            </div>

            {/* Input Bar */}
            <div className={`p-4 border-t ${
              theme === "ai" ? "bg-slate-900/90 border-cyan-500/30" : "bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800"
            }`}>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="flex items-center space-x-2"
              >
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Ask AI Copilot about Piyush..."
                  className={`flex-grow px-3.5 py-2.5 rounded-xl text-xs border focus:outline-none transition-colors ${
                    theme === "ai"
                      ? "bg-slate-950 border-cyan-500/40 text-slate-100 focus:border-cyan-400 placeholder:text-slate-500"
                      : "bg-white dark:bg-slate-950 border-slate-300 dark:border-slate-800 text-slate-900 dark:text-slate-100 focus:border-indigo-500 dark:focus:border-cyan-400"
                  }`}
                />
                <button
                  type="submit"
                  className={`p-2.5 rounded-xl text-white transition-all cursor-pointer ${
                    theme === "ai"
                      ? "bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 shadow-md shadow-cyan-500/30"
                      : "bg-indigo-600 hover:bg-indigo-700 dark:bg-cyan-500 dark:hover:bg-cyan-400 dark:text-slate-950"
                  }`}
                >
                  <Send size={15} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
