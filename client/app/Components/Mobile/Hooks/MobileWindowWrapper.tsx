"use client";
import { useLayoutEffect, useRef } from "react";
import useWindowsStore from "../../Desktop/Hooks/WindowsStore";
import { FaChevronLeft } from "react-icons/fa6";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const MobileWindowWrapper = (Componet: any, windowKey: any) => {
  const Wrapped = (props: any) => {
    const MRef = useRef<HTMLDivElement | null>(null);
    const { windows, closeWindow } = useWindowsStore();
    const { isOpen, zIndex } = windows[windowKey];

    useGSAP(() => {
      const el = MRef.current;

      if (!el || !isOpen) return;

      el.style.display = "block";

      gsap.fromTo(
        el,
        {
          opacity: 0,
          scale: 0.85,
          y: 50,
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.4,
          ease: "power3.out",
        }
      );
    }, [isOpen]);

    useLayoutEffect(() => {
      const el = MRef.current;
      if (!el) return;
      el.style.display = isOpen ? "flex" : "none";
    }, [isOpen]);

    return (
      <section
        ref={MRef}
        style={{ zIndex: zIndex }}
        className="fixed inset-0 w-full h-full bg-[#000000] flex-col overflow-hidden"
      >
        <div className="flex items-center justify-between px-4 h-14 bg-[#121212]/80 backdrop-blur-md border-b border-white/10 shrink-0 relative z-50">
          <button
            onClick={() => closeWindow(windowKey)}
            className="flex items-center gap-1 text-blue-500 active:opacity-60 transition-opacity p-2 -ml-2"
          >
            <FaChevronLeft className="w-5 h-5" />
            <span className="text-[17px] font-medium leading-none pb-0.5">
              Back
            </span>
          </button>

          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <h4 className="text-white font-semibold text-[17px] capitalize tracking-wide">
              {windowKey}
            </h4>
          </div>

          <div className="w-16"></div>
        </div>

        <div className="flex-1 overflow-y-auto relative bg-[#000000]">
          <Componet {...props} />
        </div>
      </section>
    );
  };

  Wrapped.displayName = `MobileWindowWrapper(${
    Componet.displayName || Componet.name || "Component"
  })`;

  return Wrapped;
};

export default MobileWindowWrapper;
