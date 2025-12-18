"use client";
import { useLayoutEffect, useRef } from "react";
import useWindowsStore from "../WindowsStore";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Draggable } from "gsap/all";

const WindowWrapper = (Componet: any, windowKey: string) => {
  const Wrapped = (props: any) => {
    const { focusWindow, windows } = useWindowsStore();
    const { isOpen, zIndex, position, size } = windows[windowKey];
    const Ref = useRef<HTMLDivElement | null>(null);

    useGSAP(() => {
      const el = Ref.current;

      if (!el || !isOpen) return;

      el.style.display = "block";

      gsap.fromTo(
        el,
        {
          opacity: 0,
          scale: 0.6,
          y: 50,
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.5,
          ease: "power3.out",
        }
      );
    }, [isOpen]);

    useGSAP(() => {
      const el = Ref.current;

      if (!el) return;

      Draggable.create(el, {
        onPress: () => {
          focusWindow(windowKey);
        },
      });
    }, []);

    useLayoutEffect(() => {
      const el = Ref.current;

      if (!el) return;

      el.style.display = isOpen ? "block" : "none";
    }, [isOpen]);

    return (
      <section
        id={windowKey}
        ref={Ref}
        style={{
          zIndex,
          top: position.y,
          left: position.x,
          width: size.w,
          height: size.h,
        }}
        className="absolute"
      >
        <Componet {...props} />
      </section>
    );
  };

  Wrapped.displayName = `WindowWrapper(${
    Componet.displayName || Componet.name || "Component"
  })`;

  return Wrapped;
};

export default WindowWrapper;
