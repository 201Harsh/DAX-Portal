import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";

const DeskAbout = () => {
  const [shownContent, setshownContent] = useState(false);

  const handleClose = () => {
    gsap.to("#show-desk", {
      opacity: 0,
      duration: 0.4,
      ease: "power3.out",
      delay: 0.2,
      zIndex: -10,
    });
  };

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to(".vi-mask-group", {
      duration: 1.8,
      rotate: 10,
      ease: "Power4.easeInOut",
      transformOrigin: "center",
    }).to(".vi-mask-group", {
      scale: 10,
      duration: 1.2,
      delay: -1.8,
      ease: "Expo.easeInOut",
      transformOrigin: "center",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          setshownContent(true);
          const svg = document.querySelector(".svg");
          if (svg) svg.remove();
          this.kill();
        }
      },
    });
  });

  useGSAP(() => {
    const main = document.getElementById("about-main");

    if (!main) return;

    const handleMove = (e: any) => {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      gsap.to(".main .text", { x: `${xMove * 0.4}%`, duration: 0.6 });
      gsap.to(".sky", { x: xMove, duration: 0.6 });
      gsap.to(".bg", { x: xMove * 1.6, duration: 0.6 });
    };

    main.addEventListener("mousemove", handleMove);

    return () => {
      main.removeEventListener("mousemove", handleMove);
    };
  }, []);

  return (
    <>
      <div className="svg flex justify-center items-center h-screen w-full bg-black fixed top-0 left-0 z-100 overflow-hidden">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  201
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="/images/About/city.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>

      {shownContent && (
        <div
          id="show-desk"
          className="w-full bg-neutral-900 absolute -mt-10 -z-10 opacity-0 overflow-x-hidden scrollbar-small"
        >
          <nav className="fixed top-0 left-0 w-full flex justify-between items-center p-8 z-60 text-white mix-blend-difference">
            <div className="cursor-pointer text-2xl font-bold tracking-tighter">
              Harsh's About
            </div>
            <div
              onClick={handleClose}
              className="cursor-pointer flex items-center gap-2 hover:opacity-70 transition-opacity"
            >
              <span className="text-lg font-medium">Go Back</span>
              <FaArrowLeft className="rotate-180" />
            </div>
          </nav>

          <div
            id="about-main"
            className="h-screen w-full relative overflow-hidden mt-10 main"
          >
            <div className="text text-white flex flex-col gap-3 absolute top-52 lg:top-20 left-1/2 -translate-x-1/2 z-10 text-center price text">
              <h3 className="text-9xl lg:text-[11rem] font-bold leading-none ml-0 sm:-ml-40">
                Harsh
              </h3>
              <h3 className="text-9xl lg:text-[11rem] font-bold leading-none ml-0 sm:ml-80 whitespace-nowrap">
                Full Stack
              </h3>
              <h3 className="text-9xl lg:text-[11rem] font-bold leading-none ml-0 sm:-ml-40">
                Developer
              </h3>
            </div>
            <img
              src="/images/About/me.png"
              alt="about"
              className=" absolute top-1/4 left-1/2 -translate-x-1/2 z-10 object-contain h-full w-full"
            />
            <Image
              src="/images/About/nsky.png"
              alt="about"
              fill
              sizes="100% 100% auto"
              className=" absolute z-1 h-full w-full object-cover sky scale-[1.1]"
              unoptimized
            />
            <Image
              src="/images/About/city.png"
              alt="about"
              fill
              sizes="100% 100% auto"
              className=" absolute z-5 h-full w-full object-cover bg scale-[1.1]"
              unoptimized
            />
          </div>

          <div className="min-h-screen w-full bg-black text-white z-210 flex items-center justify-center p-10 py-24 absolute">
            <div className="w-full max-w-[90%] flex flex-col md:flex-row gap-20 items-center">
              <div className="w-full md:w-1/2 h-150 relative rounded-2xl overflow-hidden transition-all duration-500">
                <Image
                  src="/images/About/iamdev.png"
                  alt="Harsh Projects"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="w-full md:w-1/2 flex flex-col gap-8">
                <div>
                  <h2 className="text-6xl font-bold mb-4">My Skills</h2>
                  <p className="text-gray-400 text-xl leading-relaxed">
                    I specialize in building scalable applications using the
                    modern web stack. From pixel-perfect Frontends to complex
                    Backend architectures.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  {[
                    "React",
                    "Next.js",
                    "Node",
                    "Three.js",
                    "GSAP",
                    "Tailwind",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-5 py-2 border border-white/20 rounded-full text-sm uppercase tracking-wide"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="w-full h-px bg-white/10 my-4"></div>

                <div>
                  <h2 className="text-6xl font-bold mb-4">Selected Projects</h2>
                  <ul className="flex flex-col gap-4 text-2xl font-light text-gray-300">
                    <li className="flex justify-between items-center group cursor-pointer border-b border-white/10 pb-4">
                      <span className="group-hover:text-white transition-colors">
                        AI Image Generator
                      </span>
                      <span className="text-sm border border-white/20 px-3 py-1 rounded-full">
                        2024
                      </span>
                    </li>
                    <li className="flex justify-between items-center group cursor-pointer border-b border-white/10 pb-4">
                      <span className="group-hover:text-white transition-colors">
                        E-Commerce Dashboard
                      </span>
                      <span className="text-sm border border-white/20 px-3 py-1 rounded-full">
                        2023
                      </span>
                    </li>
                    <li className="flex justify-between items-center group cursor-pointer border-b border-white/10 pb-4">
                      <span className="group-hover:text-white transition-colors">
                        3D Portfolio
                      </span>
                      <span className="text-sm border border-white/20 px-3 py-1 rounded-full">
                        2023
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DeskAbout;
