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
      const intensity = Math.exp(-(distance ** 2) / 10000);

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
    setupTextHover(TitleRef.current, "title");
    setupTextHover(SubTitleRef.current, "subtitle");
  }, []);

  return (
    <div
      id="text-animation-desktop"
      className="cursor-default select-none pointer-events-auto whitespace-nowrap "
    >
      <p ref={SubTitleRef}>
        {" "}
        {RenderText(
          "Hello! , I'm Harsh Pandey, a Full Stack Web Developer.",
          "text-[25px] tracking-wider"
        )}
      </p>
      <h1 ref={TitleRef}>
        {RenderText("portfolio.", "text-9xl italic mt-7 font-thin -tracking-noramal")}
      </h1>
    </div>
  );
};

export default DesktopText;
