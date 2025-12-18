import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const RenderText = (
  text: string,
  className: string,
  baseWeight: number = 400
) => {
  return [...text].map((char, index) => (
    <span
      key={index}
      className={className}
      style={
        {
          "--wght": baseWeight,
          fontVariationSettings: `'wght' var(--wght)`,
          display: "inline-block",
        } as React.CSSProperties
      }
    >
      {char === " " ? "\u00A0" : char}
    </span>
  ));
};

const FONT_WEIGHTS: any = {
  subtitle: { min: 100, max: 500, default: 100 },
  title: { min: 400, max: 900, default: 400 },
};

const setupTextHover = (container: any, type: any) => {
  if (!container) return;

  const letters = container.querySelectorAll("span");
  const { min, max, default: base } = FONT_WEIGHTS[type];

  const animatedText = (letter: any, weight: any, duration: any = 0.25) => {
    return gsap.to(letter, {
      "--wght": weight,
      duration,
      ease: "power2.out",
    });
  };

  const handleMouseEnter = (e: any) => {
    const { left } = container.getBoundingClientRect();
    const mouseX = e.clientX - left;

    letters.forEach((letter: any) => {
      const { left: l, width: w } = letter.getBoundingClientRect();
      const distance = Math.abs(mouseX - (l - left + w / 2));
      const intensity = Math.exp(-(distance ** 2) / 20000);

      animatedText(letter, min + (max - min) * intensity);
    });
  };

  const handleMouseLeave = () => {
    letters.forEach((letter: any) => {
      animatedText(letter, base, 0.3);
    });
  };

  container.addEventListener("mousemove", handleMouseEnter);
  container.addEventListener("mouseleave", handleMouseLeave);
};

const DesktopText = () => {
  const TitleRef = useRef(null);
  const SubTitleRef = useRef(null);

  useGSAP(() => {
    gsap.from(TitleRef.current, {
      x: 20,
      opacity: 0,
      duration: 0.8,
      ease: "back.out(1.5)",
      delay: 0.8,
    });
    gsap.from(SubTitleRef.current, {
      x: -20,
      scale: 0,
      opacity: 0,
      duration: 0.8,
      ease: "power1.out",
      delay: 0.4,
    });

    setupTextHover(TitleRef.current, "title");
    setupTextHover(SubTitleRef.current, "subtitle");
  }, []);

  return (
    <div
      id="text-animation-desktop"
      className="cursor-default select-none pointer-events-auto whitespace-nowrap"
    >
      <p ref={SubTitleRef}>
        {" "}
        {RenderText(
          "Hello! , I'm Harsh Pandey, and welcome to",
          "text-[26px] tracking-wide",
          100
        )}
      </p>
      <h1 ref={TitleRef}>{RenderText("portfolio.", "text-9xl italic mt-5")}</h1>
    </div>
  );
};

export default DesktopText;
