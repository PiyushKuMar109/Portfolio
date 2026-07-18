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
import GitHubActivity from "@/components/GitHubActivity";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AIDashboardWidget from "@/components/AIDashboardWidget";

export type ThemeMode = "light" | "dark" | "ai";
export type ColorPalette =
  | "cyber-blue"
  | "purple-neon"
  | "matrix-green"
  | "cyberpunk"
  | "amber"
  | "emerald"
  | "orange"
  | "monochrome";

export default function Home() {
  const [theme, setTheme] = useState<ThemeMode>("ai");
  const [colorPalette, setColorPalette] = useState<ColorPalette>("cyber-blue");

  useEffect(() => {
    // Check saved theme & palette in localStorage
    const savedTheme = localStorage.getItem("piyush_portfolio_theme") as ThemeMode | null;
    if (savedTheme && ["light", "dark", "ai"].includes(savedTheme)) {
      setTheme(savedTheme);
    }

    const savedPalette = localStorage.getItem("piyush_portfolio_palette") as ColorPalette | null;
    if (
      savedPalette &&
      [
        "cyber-blue",
        "purple-neon",
        "matrix-green",
        "cyberpunk",
        "amber",
        "emerald",
        "orange",
        "monochrome",
      ].includes(savedPalette)
    ) {
      setColorPalette(savedPalette);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("piyush_portfolio_theme", theme);
    localStorage.setItem("piyush_portfolio_palette", colorPalette);
    const root = document.documentElement;

    root.classList.remove("dark", "ai-theme");

    if (theme === "ai") {
      root.classList.add("dark", "ai-theme");
      root.style.setProperty("--background", "#030712");
      root.style.setProperty("--foreground", "#F0FDF4");
    } else if (theme === "dark") {
      root.classList.add("dark");
      root.style.setProperty("--background", "#0B0F19");
      root.style.setProperty("--foreground", "#F8FAFC");
    } else {
      root.style.setProperty("--background", "#FAFAFC");
      root.style.setProperty("--foreground", "#090D16");
    }
  }, [theme, colorPalette]);

  // Backward compatibility prop helper
  const isDarkMode = theme === "dark" || theme === "ai";

  return (
    <div className={`relative min-h-screen flex flex-col transition-colors duration-500 palette-${colorPalette} ${theme === "ai" ? "ai-theme" : ""} overflow-x-hidden w-full max-w-full`}>
      {/* Visual background decorations */}
      <ParticleBackground theme={theme} />
      <AnimatedCursor />

      {/* Header Sticky Navigation */}
      <Navbar
        theme={theme}
        setTheme={setTheme}
        colorPalette={colorPalette}
        setColorPalette={setColorPalette}
        darkMode={isDarkMode}
        setDarkMode={(val) => setTheme(val ? "dark" : "light")}
      />

      {/* Main Sections */}
      <main className="flex-grow overflow-x-hidden w-full max-w-full">
        <Hero theme={theme} setTheme={setTheme} colorPalette={colorPalette} />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <GitHubActivity theme={theme} colorPalette={colorPalette} />
        <Certifications />
        <Contact />
      </main>

      {/* AI Dashboard Floating Telemetry Widget */}
      <AIDashboardWidget theme={theme} setTheme={setTheme} />

      {/* Footer Details */}
      <Footer />
    </div>
  );
}


