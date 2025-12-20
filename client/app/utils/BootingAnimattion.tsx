"use client";

import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { motion, AnimatePresence } from "framer-motion";
import { SiLinux } from "react-icons/si";
import { FaShieldAlt } from "react-icons/fa";

const BOOT_LOGS = [
  "BIOS_CHECK: OK",
  "CPU_CORE_1: ACTIVE",
  "MEMORY_ALLOC: 64TB [OK]",
  "LOADING_KERNEL: DAX_V1.0.4",
  "ENCRYPTING_FS... DONE",
  "NETWORK_INTERFACE: UP",
  "ESTABLISHING_SECURE_LINK...",
  "ACCESS_GRANTED: WELCOME TO DAX PORTAL",
];

interface BootProps {
  onComplete: () => void;
}

const BootSequence = ({ onComplete }: BootProps) => {
  const [stage, setStage] = useState<0 | 1 | 2>(0);
  const [logs, setLogs] = useState<string[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    let delay = 0;
    BOOT_LOGS.forEach((log, index) => {
      delay += Math.random() * 150 + 50;
      setTimeout(() => {
        setLogs((prev) => [...prev, log]);
        if (containerRef.current) {
          containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
        if (index === BOOT_LOGS.length - 1) {
          setTimeout(() => setStage(1), 100);
        }
      }, delay);
    });
  }, []);

  useGSAP(() => {
    if (stage === 1 && logoRef.current) {
      const tl = gsap.timeline({
        onComplete: () => {
          gsap.to(".boot-screen", { opacity: 0, duration: 0.8, onComplete });
        },
      });

      tl.to(".boot-screen", { backgroundColor: "#000000", duration: 0.5 })
        .to(".scanlines", { opacity: 0, duration: 0.5 }, "<")

        .fromTo(
          logoRef.current.querySelectorAll("path"),
          { strokeDasharray: 1000, strokeDashoffset: 1000, opacity: 0 },
          {
            strokeDashoffset: 0,
            opacity: 1,
            duration: 1.6,
            ease: "power3.inOut",
            stagger: 0.1,
          }
        )

        .to(
          logoRef.current,
          { filter: "drop-shadow(0 0 15px #dc2626)", duration: 0.5 },
          "-=0.5"
        )

        .to(
          logoRef.current,
          { fill: "rgba(220, 38, 38, 0.05)", duration: 0.5 },
          "-=0.5"
        )

        .to(
          ".progress-bar",
          { width: "100%", duration: 1.5, ease: "power2.inOut" },
          "-=0.5"
        )

        .to(logoRef.current, {
          scale: 1.05,
          filter: "drop-shadow(0 0 30px #ef4444)",
          duration: 0.3,
          ease: "back.out(1.7)",
        })
        .to(logoRef.current, {
          scale: 1,
          filter: "drop-shadow(0 0 15px #dc2626)",
          duration: 0.3,
        });
    }
  }, [stage]);

  return (
    <div className="fixed inset-0 bg-black z-9999 flex flex-col items-center justify-center overflow-hidden boot-screen font-mono text-xs md:text-sm select-none cursor-wait">
      <div className="scanlines absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(50,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-size-[100%_4px,6px_100%] z-0" />

      <AnimatePresence mode="wait">
        {stage === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.98, filter: "blur(5px)" }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-2xl h-full p-10 flex flex-col justify-center items-center text-red-500 z-10"
          >
            <div className="flex items-center gap-4 mb-6 border-b border-red-900/30 pb-2">
              <SiLinux className="text-3xl animate-pulse text-red-600" />
              <div>
                <h1 className="text-xl font-bold tracking-widest text-gray-100">
                  DAX KERNEL{" "}
                  <span className="text-red-600 text-xs">v1.0.4</span>
                </h1>
                <p className="text-gray-500 text-[10px]">
                  COPYRIGHT (C) {new Date().getFullYear()} HARSH PANDEY CORP.
                </p>
              </div>
            </div>

            <div
              ref={containerRef}
              className="flex flex-col gap-1 overflow-hidden h-64 w-full md:w-125 mask-image-gradient"
            >
              {logs.map((log, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-center gap-3"
                >
                  <span className="text-gray-600 shrink-0">
                    [{new Date().toLocaleTimeString()}]
                  </span>
                  <span
                    className={`truncate font-semibold ${
                      log.includes("ERROR")
                        ? "text-white bg-red-600 px-1"
                        : "text-red-500"
                    }`}
                  >
                    {log}
                  </span>
                  {log.includes("OK") && (
                    <FaShieldAlt className="text-[10px] text-red-400 ml-auto" />
                  )}
                </motion.div>
              ))}
              <motion.div
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="w-3 h-5 bg-red-600 mt-2"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {stage === 1 && (
        <div className="relative z-20 flex flex-col items-center gap-12">
          <svg
            ref={logoRef}
            className="w-32 h-32 md:w-40 md:h-40"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M50 5 L95 25 L95 75 L50 95 L5 75 L5 25 Z"
              stroke="#dc2626"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M50 20 L50 80 M20 50 L80 50"
              stroke="#dc2626"
              strokeWidth="1"
              className="opacity-50"
            />
            <circle
              cx="50"
              cy="50"
              r="4"
              fill="#ef4444" 
              className="animate-pulse"
            />
          </svg>

          <div className="flex flex-col items-center gap-3">
            <h2 className="text-white text-xl font-light tracking-[0.4em] drop-shadow-[0_0_10px_rgba(220,38,38,0.5)]">
              DAX OS
            </h2>

            <div className="w-48 h-0.75 bg-gray-900/80 rounded-full overflow-hidden relative backdrop-blur-sm">
              <div className="progress-bar w-0 h-full bg-linear-to-r from-red-600 via-red-400 to-red-600 shadow-[0_0_10px_#dc2626]" />
            </div>

            <span className="text-neutral-500 text-[9px] mt-2 tracking-widest font-medium">
              SYSTEM READY
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default BootSequence;
