import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, Bot, Terminal, Sparkles, Palette } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeMode, ColorPalette } from "@/app/page";

interface NavbarProps {
  darkMode?: boolean;
  setDarkMode?: (val: boolean) => void;
  theme?: ThemeMode;
  setTheme?: (val: ThemeMode) => void;
  colorPalette?: ColorPalette;
  setColorPalette?: (cp: ColorPalette) => void;
}

export default function Navbar({ 
  darkMode, 
  setDarkMode, 
  theme = "ai", 
  setTheme,
  colorPalette = "cyber-blue",
  setColorPalette,
}: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const handleSetTheme = (newTheme: ThemeMode) => {
    if (setTheme) {
      setTheme(newTheme);
    } else if (setDarkMode) {
      setDarkMode(newTheme !== "light");
    }
  };

  const paletteOptions: Array<{ id: ColorPalette; name: string; color: string }> = [
    { id: "cyber-blue", name: "Cyber Blue", color: "bg-blue-500" },
    { id: "purple-neon", name: "Purple Neon", color: "bg-purple-500" },
    { id: "matrix-green", name: "Matrix Code Green", color: "bg-emerald-400" },
    { id: "cyberpunk", name: "Cyberpunk Magenta", color: "bg-pink-500" },
    { id: "amber", name: "Amber Radar", color: "bg-amber-500" },
    { id: "emerald", name: "Emerald", color: "bg-teal-500" },
    { id: "orange", name: "Orange", color: "bg-orange-500" },
    { id: "monochrome", name: "Monochrome", color: "bg-zinc-200" },
  ];

  const navLinks = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Experience", id: "experience" },
    { label: "Projects", id: "projects" },
    { label: "Achievements", id: "achievements" },
    { label: "Certifications", id: "certifications" },
    { label: "Contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple scroll spy
      const sections = navLinks.map((link) => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          scrolled
            ? theme === "ai"
              ? "py-3 bg-slate-950/90 backdrop-blur-xl border-b border-cyan-500/30 shadow-[0_4px_25px_rgba(0,243,255,0.15)]"
              : "py-3 bg-white/85 dark:bg-slate-950/85 backdrop-blur-xl border-b border-slate-200/80 dark:border-slate-800/80 shadow-md shadow-slate-200/40 dark:shadow-black/20"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "home")}
            className="flex items-center space-x-2.5 font-montserrat font-bold text-xl tracking-tight text-slate-900 dark:text-white group"
          >
            <div className={`p-2 rounded-xl text-white group-hover:scale-105 transition-transform duration-200 shadow-md ${
              theme === "ai"
                ? "bg-gradient-to-tr from-cyan-500 via-purple-600 to-emerald-400 shadow-cyan-500/30"
                : "bg-gradient-to-tr from-indigo-600 via-sky-500 to-emerald-500 shadow-indigo-500/20"
            }`}>
              <Terminal size={18} />
            </div>
            <span className={`bg-clip-text text-transparent group-hover:opacity-90 transition-opacity font-extrabold ${
              theme === "ai"
                ? "bg-gradient-to-r from-cyan-300 via-purple-300 to-emerald-300"
                : "bg-gradient-to-r from-slate-900 via-indigo-900 to-sky-600 dark:from-white dark:via-slate-100 dark:to-cyan-400"
            }`}>
              Piyush Kumar
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-7 font-inter">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`relative text-xs font-semibold transition-colors hover:text-slate-900 dark:hover:text-white ${
                  activeSection === link.id
                    ? theme === "ai" ? "text-cyan-300 shadow-[0_0_12px_rgba(0,243,255,0.6)]" : "text-indigo-600 dark:text-cyan-400"
                    : "text-slate-600 dark:text-slate-400"
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <motion.span
                    layoutId="underline"
                    className={`absolute -bottom-1.5 left-0 w-full h-[2.5px] rounded-full ${
                      theme === "ai"
                        ? "bg-gradient-to-r from-cyan-400 via-purple-500 to-emerald-400 shadow-[0_0_8px_#00f3ff]"
                        : "bg-gradient-to-r from-indigo-600 via-sky-500 to-emerald-500"
                    }`}
                  />
                )}
              </a>
            ))}
          </nav>

          {/* Multi-Theme & Palette controls */}
          <div className="flex items-center space-x-3">
            {/* AI Color Palette Selector Dots */}
            {theme === "ai" && setColorPalette && (
              <div className="hidden sm:flex items-center space-x-1.5 bg-slate-900/80 px-2.5 py-1.5 rounded-xl border border-cyan-500/30">
                <Palette size={13} className="text-cyan-400 mr-0.5" />
                {paletteOptions.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setColorPalette(p.id)}
                    className={`w-3.5 h-3.5 rounded-full ${p.color} transition-transform cursor-pointer ${
                      colorPalette === p.id ? "scale-125 ring-2 ring-white" : "opacity-60 hover:opacity-100"
                    }`}
                    title={`Theme Palette: ${p.name}`}
                  />
                ))}
              </div>
            )}

            {/* High-Tech Theme Selector Segmented Pill */}
            <div className={`p-1 rounded-2xl flex items-center space-x-1 border transition-all duration-300 ${
              theme === "ai"
                ? "bg-slate-900/90 border-cyan-500/40 shadow-[0_0_15px_rgba(0,243,255,0.2)]"
                : "bg-slate-100 dark:bg-slate-900/90 border-slate-200 dark:border-slate-800"
            }`}>
              <button
                onClick={() => handleSetTheme("light")}
                className={`px-2.5 py-1.5 rounded-xl text-xs font-semibold flex items-center space-x-1 transition-all cursor-pointer ${
                  theme === "light"
                    ? "bg-white text-indigo-600 shadow-sm"
                    : "text-slate-500 hover:text-slate-900 dark:hover:text-slate-200"
                }`}
                title="Light Theme"
              >
                <Sun size={14} />
              </button>

              <button
                onClick={() => handleSetTheme("dark")}
                className={`px-2.5 py-1.5 rounded-xl text-xs font-semibold flex items-center space-x-1 transition-all cursor-pointer ${
                  theme === "dark"
                    ? "bg-slate-800 text-cyan-400 shadow-sm"
                    : "text-slate-500 hover:text-slate-900 dark:hover:text-slate-200"
                }`}
                title="Dark Theme"
              >
                <Moon size={14} />
              </button>

              <button
                onClick={() => handleSetTheme("ai")}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center space-x-1.5 transition-all cursor-pointer ${
                  theme === "ai"
                    ? "bg-gradient-to-r from-cyan-500 via-purple-600 to-emerald-500 text-white shadow-[0_0_15px_rgba(0,243,255,0.5)] border border-cyan-300/40"
                    : "text-slate-500 hover:text-cyan-400"
                }`}
                title="AI Dashboard Theme (Favorite)"
              >
                <Bot size={14} className={theme === "ai" ? "animate-pulse text-cyan-200" : ""} />
                <span className="hidden sm:inline tracking-wider">AI MODE</span>
                <span className="flex h-1.5 w-1.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-cyan-300"></span>
                </span>
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 rounded-xl bg-white dark:bg-slate-900/90 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800 transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-[60px] z-30 w-full h-[calc(100vh-60px)] bg-slate-950/95 backdrop-blur-xl md:hidden px-6 py-8 flex flex-col justify-between"
          >
            <div className="flex flex-col space-y-5 font-inter">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={`text-lg font-semibold py-2 border-b border-slate-800/50 transition-colors ${
                    activeSection === link.id
                      ? "text-cyan-400 pl-2 border-l-2 border-l-cyan-400"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
            {/* Quick social footer in mobile menu */}
            <div className="border-t border-slate-800 pt-6 text-center text-xs text-slate-500">
              © {new Date().getFullYear()} Piyush Kumar. Portfolio Project.
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
