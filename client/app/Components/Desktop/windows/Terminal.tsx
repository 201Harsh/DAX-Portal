import WindowWrapper from "../Hooks/HOC/WindowWrapper";
import { SiTicktick } from "react-icons/si";
import WindowController from "../WindowController";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Terminal = () => {
  const techStack = [
    { category: "Core", stack: "Full Stack Web Development" },
    { category: "Frameworks", stack: "Next.js, React, Express.js" },
    { category: "Styling", stack: "Tailwind CSS, GSAP, Framer Motion" },
    { category: "Tools", stack: "Git, GitHub, Postman" },
    { category: "AI Integration", stack: "Google Gemini API, MCP Servers" },
  ];

  useGSAP(() => {
    gsap.to("#animate-terminal", {
      y: 100,
      opacity: 1,
      duration: 0.5,
      ease: "circ.out",
      delay: 0.4,
    });
  }, []);

  return (
    <>
      <div
        id="animate-terminal"
        className="bg-[#181818] opacity-0 h-full w-full backdrop-blur-lg text-gray-300 rounded-lg font-mono text-sm shadow-xl flex flex-col overflow-hidden border border-gray-700"
      >
        <div className="flex items-center justify-between px-4 py-2 bg-[#1a1a1a] border-b border-gray-600 select-none">
          <div className="flex items-center gap-2 opacity-80">
            <span className="text-blue-400">⚡</span>
            <span className="font-semibold text-xs tracking-wide">
              dax@tech-stack:~
            </span>
          </div>

          <WindowController windowKey="terminal" />
        </div>

        <div className="p-6 flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent">
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <span className="text-green-400 font-bold">➜</span>
            <span className="text-cyan-400 font-bold">~</span>
            <span className="opacity-90">neofetch --tech-stack</span>
          </div>

          <div className="flex flex-col gap-1">
            <div className="grid grid-cols-12 gap-4 border-b border-gray-600 pb-2 mb-2 text-gray-300 font-bold uppercase tracking-wider text-xs">
              <div className="col-span-3">Category</div>
              <div className="col-span-9">Technologies</div>
            </div>

            {techStack.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-12 gap-4 py-1 hover:bg-white/5 transition-colors rounded px-1 -mx-1 font-semibold"
              >
                <div className="col-span-3 text-emerald-400 font-semibold">
                  {item.category}
                </div>
                <div className="col-span-9 text-gray-300">{item.stack}</div>
              </div>
            ))}

            <div className="flex items-center gap-2 mt-6">
              <span className="text-green-400 font-bold">
                <SiTicktick />
              </span>
              <span className="text-cyan-400 font-bold">
                5 out 5 Tech Stack Loaded
              </span>
            </div>

            <div className="flex items-center gap-2 mt-6">
              <span className="text-green-400 font-bold">➜</span>
              <span className="text-cyan-400 font-bold">dax@root~</span>
              <span className="animate-pulse bg-gray-400 h-5 w-2.5 inline-block align-middle"></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const TerminalWindow = WindowWrapper(Terminal, "terminal");

export default TerminalWindow;
