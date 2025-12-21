"use client";

import { useState, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

interface BootProps {
  onComplete: () => void;
}

const BootSequence = ({ onComplete }: BootProps) => {
  const [stage] = useState<0 | 1 | 2>(1);
  const logoRef = useRef<SVGSVGElement>(null);

  useGSAP(() => {
    if (stage === 1 && logoRef.current) {
      const tl = gsap.timeline({
        onComplete: () => {
          gsap.to(".boot-screen", { opacity: 0, duration: 0.5, onComplete });
        },
      });

      tl.to(".boot-screen", { backgroundColor: "#000000", duration: 0.2 })
        .to(".scanlines", { opacity: 0, duration: 0.4 }, "<")

        .fromTo(
          logoRef.current.querySelectorAll("path"),
          { strokeDasharray: 1000, strokeDashoffset: 1000, opacity: 0 },
          {
            strokeDashoffset: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power3.inOut",
            stagger: 0.1,
          }
        )

        .to(
          logoRef.current,
          { filter: "drop-shadow(0 0 15px #dc2626)", duration: 0.2 },
          "-=0.5"
        )

        .to(
          logoRef.current,
          { fill: "rgba(220, 38, 38, 0.05)", duration: 0.4 },
          "-=0.5"
        )

        .to(
          ".progress-bar",
          { width: "100%", duration: 0.8, ease: "power2.inOut" },
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
            <h2 className="text-white text-5xl font-light tracking-[0.4em] drop-shadow-[0_0_10px_rgba(220,38,38,0.5)]">
              DAX PORTAL
            </h2>

            <div className="w-80 h-0.75 bg-gray-900/80 rounded-full overflow-hidden relative backdrop-blur-sm">
              <div className="progress-bar w-0 h-full bg-linear-to-r from-red-600 via-red-400 to-red-600 shadow-[0_0_10px_#dc2626]" />
            </div>

            <span className="text-neutral-500 text-[14px] mt-2 tracking-widest font-medium">
              SYSTEM READY
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default BootSequence;
