"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import ParticleBackground from "@/components/ParticleBackground";
import AnimatedCursor from "@/components/AnimatedCursor";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      document.documentElement.style.setProperty("--background", "#0F172A");
      document.documentElement.style.setProperty("--foreground", "#F8FAFC");
    } else {
      document.documentElement.classList.remove("dark");
      // Premium warm light theme
      document.documentElement.style.setProperty("--background", "#F8FAFC");
      document.documentElement.style.setProperty("--foreground", "#0F172A");
    }
  }, [darkMode]);

  return (
    <div className="relative min-h-screen flex flex-col transition-colors duration-300">
      {/* Visual background decorations */}
      <ParticleBackground />
      <AnimatedCursor />

      {/* Header Sticky Navigation */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Main Sections */}
      <main className="flex-grow">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>

      {/* Footer Details */}
      <Footer />
    </div>
  );
}
