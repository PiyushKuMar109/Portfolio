"use client";

import React, { useEffect, useRef } from "react";
import { ThemeMode } from "@/app/page";

interface ParticleBackgroundProps {
  theme?: ThemeMode;
}

export default function ParticleBackground({ theme = "ai" }: ParticleBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      alpha: number;
    }> = [];

    // Colors aligned with current active theme
    const colors =
      theme === "ai"
        ? ["rgba(0, 243, 255, 0.6)", "rgba(168, 85, 247, 0.6)", "rgba(0, 255, 157, 0.5)", "rgba(236, 72, 153, 0.5)"]
        : theme === "dark"
        ? ["rgba(79, 70, 229, 0.4)", "rgba(6, 182, 212, 0.4)", "rgba(34, 197, 94, 0.25)"]
        : ["rgba(99, 102, 241, 0.25)", "rgba(14, 165, 233, 0.25)", "rgba(16, 185, 129, 0.2)"];

    // Initialize particles
    const particleCount = Math.min(
      theme === "ai" ? 80 : 60,
      Math.floor((width * height) / (theme === "ai" ? 18000 : 25000))
    );
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * (theme === "ai" ? 0.6 : 0.4),
        vy: (Math.random() - 0.5) * (theme === "ai" ? 0.6 : 0.4),
        size: Math.random() * (theme === "ai" ? 3.5 : 3) + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.5 + 0.3,
      });
    }

    const mouse = { x: 0, y: 0, radius: theme === "ai" ? 150 : 120, active: false };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("resize", handleResize);

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        // Move particle
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around screen edges
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Mouse hover interaction: gentle push
        if (mouse.active) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < mouse.radius) {
            const force = (mouse.radius - distance) / mouse.radius;
            const angle = Math.atan2(dy, dx);
            p.x += Math.cos(angle) * force * (theme === "ai" ? 2.2 : 1.5);
            p.y += Math.sin(angle) * force * (theme === "ai" ? 2.2 : 1.5);
          }
        }

        // Render particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowBlur = theme === "ai" ? 12 : 8;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.shadowBlur = 0; // reset shadow
      });

      // Draw light lines connecting close particles
      const maxDistance = theme === "ai" ? 125 : 100;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const alpha = ((maxDistance - dist) / maxDistance) * (theme === "ai" ? 0.28 : 0.15);
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle =
              theme === "ai"
                ? `rgba(0, 243, 255, ${alpha})`
                : theme === "dark"
                ? `rgba(6, 182, 212, ${alpha})`
                : `rgba(99, 102, 241, ${alpha})`;
            ctx.lineWidth = theme === "ai" ? 0.75 : 0.5;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 w-full h-full pointer-events-none -z-10 transition-colors duration-500 ${
        theme === "ai"
          ? "bg-[#030712]"
          : theme === "dark"
          ? "bg-[#0F172A]"
          : "bg-[#F8FAFC]"
      }`}
    />
  );
}

