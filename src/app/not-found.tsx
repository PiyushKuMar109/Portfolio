"use client";

import React from "react";
import Link from "next/link";
import { Terminal, ArrowRight } from "lucide-react";
import ParticleBackground from "@/components/ParticleBackground";
import AnimatedCursor from "@/components/AnimatedCursor";

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-6 bg-slate-950 text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200 overflow-hidden">
      {/* Particle background decor */}
      <ParticleBackground />
      <AnimatedCursor />

      {/* Glow */}
      <div className="absolute w-[300px] h-[300px] bg-primary/20 rounded-full blur-[100px] pointer-events-none -z-10 animate-pulse" />

      {/* 404 Layout Card */}
      <div className="max-w-md w-full glassmorphism border border-slate-800 p-8 rounded-3xl text-center space-y-6 shadow-2xl">
        <div className="inline-flex p-4 bg-slate-900 border border-slate-750 text-cyan-400 rounded-2xl mb-2 animate-float-medium">
          <Terminal size={32} />
        </div>

        <div className="space-y-2">
          <h1 className="text-6xl font-montserrat font-extrabold text-white tracking-wider">
            404
          </h1>
          <h2 className="text-lg font-poppins font-bold text-slate-200">
            Page Not Found
          </h2>
          <p className="text-slate-400 text-sm font-inter leading-relaxed">
            The script or page segment you are looking for does not exist. It might have been relocated or deleted.
          </p>
        </div>

        <Link
          href="/"
          className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-semibold text-sm hover:brightness-110 hover:-translate-y-0.5 transition-all shadow-md shadow-primary/20 w-full justify-center"
        >
          <span>Return to Dashboard</span>
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
