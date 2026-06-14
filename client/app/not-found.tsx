"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import { motion } from "framer-motion";

const NotFound = () => {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [hoveredButton, setHoveredButton] = useState(false);
  const [glitchActive, setGlitchActive] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();

    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+-=[]{}|;:,.<>?/~`";
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops: number[] = Array(Math.floor(columns)).fill(1);

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#0f0";
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillStyle = Math.random() > 0.98 ? "#ff0033" : "#0f0";
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 33);
    window.addEventListener("resize", resize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", resize);
    };
  }, []);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      ".window-control",
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        stagger: 0.1,
        duration: 0.5,
        ease: "back.out(1.7)",
      },
    );

    tl.fromTo(
      ".title-bar",
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
      "-=0.3",
    );

    tl.fromTo(
      ".glitch-text",
      { scale: 2, opacity: 0, filter: "blur(10px)" },
      {
        scale: 1,
        opacity: 1,
        filter: "blur(0px)",
        duration: 0.8,
        ease: "power4.out",
      },
      "-=0.2",
    );

    tl.fromTo(
      ".terminal-line",
      { width: 0, opacity: 0 },
      {
        width: "100%",
        opacity: 1,
        stagger: 0.15,
        duration: 0.5,
        ease: "steps(20)",
      },
      "-=0.4",
    );

    gsap.to(".neon-glow", {
      boxShadow:
        "0 0 30px rgba(255, 0, 51, 0.6), 0 0 60px rgba(255, 0, 51, 0.3)",
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(".particle", {
      y: "random(-20, 20)",
      x: "random(-10, 10)",
      rotation: "random(-5, 5)",
      duration: "random(2, 4)",
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: {
        each: 0.2,
        from: "random",
      },
    });
  }, []);

  const triggerGlitch = () => {
    setGlitchActive(true);
    setTimeout(() => setGlitchActive(false), 300);
  };

  const handleGoBack = () => {
    const tl = gsap.timeline({
      onComplete: () => router.push("/"),
    });

    tl.to(".window-frame", {
      scale: 0.9,
      opacity: 0,
      duration: 0.3,
      ease: "power2.in",
    });
  };

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen w-full bg-black overflow-hidden font-mono selection:bg-red-500 selection:text-black"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-20 pointer-events-none"
      />

      <div className="absolute inset-0 pointer-events-none opacity-10 bg-[linear-linear(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-linear(90deg,rgba(255,0,51,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-size-[100%_2px,3px_100%]" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-red-600/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="window-frame relative z-10 flex items-center justify-center min-h-screen p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative w-full max-w-2xl"
        >
          <div className="title-bar flex items-center justify-between bg-neutral-900 border border-red-900/50 rounded-t-lg px-4 py-3 backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <div className="window-control w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 cursor-pointer transition-colors shadow-[0_0_8px_rgba(239,68,68,0.5)]" />
              <div className="window-control w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 cursor-pointer transition-colors shadow-[0_0_8px_rgba(234,179,8,0.5)]" />
              <div className="window-control w-3 h-3 rounded-full bg-green-500 hover:bg-green-400 cursor-pointer transition-colors shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
            </div>

            <div className="flex items-center gap-2 text-xs text-red-400/70 font-mono">
              <span className="hidden sm:inline">root@system:~</span>
              <span className="text-red-500">●</span>
              <span>404_NOT_FOUND</span>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-4 h-4 flex items-center justify-center text-red-500/50 hover:text-red-400 cursor-pointer">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <line x1="2" y1="6" x2="10" y2="6" />
                </svg>
              </div>
              <div className="w-4 h-4 flex items-center justify-center text-red-500/50 hover:text-red-400 cursor-pointer">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <rect x="1" y="1" width="10" height="10" rx="1" />
                </svg>
              </div>
              <div className="w-4 h-4 flex items-center justify-center text-red-500/50 hover:text-red-500 cursor-pointer hover:bg-red-500/20 rounded">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <line x1="2" y1="2" x2="10" y2="10" />
                  <line x1="10" y1="2" x2="2" y2="10" />
                </svg>
              </div>
            </div>
          </div>

          <div className="relative bg-black/80 border-x border-b border-red-900/50 rounded-b-lg p-8 sm:p-12 backdrop-blur-md overflow-hidden">
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-red-500" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-red-500" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-red-500" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-red-500" />

            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="particle absolute w-1 h-1 bg-red-500 rounded-full shadow-[0_0_6px_rgba(255,0,51,0.8)]"
                style={{
                  top: `${20 + Math.random() * 60}%`,
                  left: `${10 + Math.random() * 80}%`,
                }}
              />
            ))}

            <div
              ref={textRef}
              className="relative text-center mb-8"
              onMouseEnter={triggerGlitch}
            >
              <motion.div
                className="glitch-text relative inline-block"
                animate={
                  glitchActive
                    ? {
                        x: [0, -5, 5, -5, 0],
                        filter: [
                          "hue-rotate(0deg)",
                          "hue-rotate(90deg)",
                          "hue-rotate(0deg)",
                        ],
                      }
                    : {}
                }
                transition={{ duration: 0.3 }}
              >
                <h1 className="text-8xl sm:text-9xl font-black text-transparent bg-clip-text bg-linear-to-b from-red-400 via-red-600 to-red-900 tracking-tighter drop-shadow-[0_0_15px_rgba(255,0,51,0.5)]">
                  404
                </h1>

                <span className="absolute top-0 left-0 -ml-1 text-8xl sm:text-9xl font-black text-red-500/30 tracking-tighter animate-pulse">
                  404
                </span>
                <span className="absolute top-0 left-0 ml-1 text-8xl sm:text-9xl font-black text-cyan-500/20 tracking-tighter mix-blend-screen">
                  404
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-2 text-red-500/60 text-sm tracking-[0.3em] uppercase font-bold"
              >
                System Error
              </motion.div>
            </div>

            <div className="space-y-2 mb-8 font-mono text-sm sm:text-base">
              <div className="terminal-line overflow-hidden whitespace-nowrap">
                <span className="text-green-500">user@nextjs</span>
                <span className="text-white">:</span>
                <span className="text-blue-400">~</span>
                <span className="text-white">$</span>
                <span className="text-red-400 ml-2">
                  find / -name "page" -type f
                </span>
              </div>
              <div className="terminal-line overflow-hidden whitespace-nowrap text-red-500">
                <span className="text-red-600">[ERROR]</span> Page not found in
                filesystem
              </div>
              <div className="terminal-line overflow-hidden whitespace-nowrap text-red-400/80">
                <span className="text-yellow-500">[WARN]</span> Route /
                {`{path}`} does not exist in router manifest
              </div>
              <div className="terminal-line overflow-hidden whitespace-nowrap">
                <span className="text-green-500">user@nextjs</span>
                <span className="text-white">:</span>
                <span className="text-blue-400">~</span>
                <span className="text-white">$</span>
                <motion.span
                  className="inline-block w-2 h-4 bg-red-500 ml-2 align-middle"
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                />
              </div>
            </div>

            <div className="flex items-center justify-between mb-8 px-4 py-2 bg-neutral-900/80 rounded border border-red-900/30 text-xs font-mono">
              <div className="flex items-center gap-4 text-red-400/60">
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  KERNEL_PANIC
                </span>
                <span className="hidden sm:inline">|</span>
                <span className="hidden sm:inline">PID: 404</span>
              </div>
              <div className="flex items-center gap-4 text-red-400/60">
                <span>MEM: 0.0%</span>
                <span>CPU: 0.0%</span>
                <span className="text-red-500">ERR: 100%</span>
              </div>
            </div>

            <div className="flex justify-center">
              <motion.button
                onClick={handleGoBack}
                onMouseEnter={() => setHoveredButton(true)}
                onMouseLeave={() => setHoveredButton(false)}
                className="neon-glow group relative px-8 py-4 bg-transparent border-2 border-red-600 text-red-500 font-mono font-bold tracking-wider uppercase transition-all duration-300 hover:bg-red-600 hover:text-black hover:shadow-[0_0_30px_rgba(255,0,51,0.6)] active:scale-95 rounded-sm overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-red-600"
                  initial={{ x: "-100%" }}
                  animate={{ x: hoveredButton ? "0%" : "-100%" }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />

                <span className="relative z-10 flex items-center gap-3">
                  <svg
                    className="w-5 h-5 transition-transform group-hover:-translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    />
                  </svg>
                  <span className="group-hover:text-black transition-colors">
                    Return to Root
                  </span>
                  <span className="text-xs opacity-60 group-hover:text-black/60 transition-colors">
                    [~/]
                  </span>
                </span>

                <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-red-500 group-hover:border-black transition-colors" />
                <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-red-500 group-hover:border-black transition-colors" />
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-red-500 group-hover:border-black transition-colors" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-red-500 group-hover:border-black transition-colors" />
              </motion.button>
            </div>

            <div className="mt-8 text-center text-xs text-red-500/40 font-mono space-y-1">
              <p>
                Press{" "}
                <kbd className="px-1.5 py-0.5 bg-red-900/30 rounded border border-red-900/50 text-red-400/60">
                  Esc
                </kbd>{" "}
                to abort
              </p>
              <p className="text-[10px] uppercase tracking-widest">
                Next.js 14 + React + TypeScript + GSAP + Framer Motion
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="fixed top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-red-600/50 to-transparent pointer-events-none" />
      <div className="fixed bottom-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-red-600/50 to-transparent pointer-events-none" />
    </div>
  );
};

export default NotFound;
