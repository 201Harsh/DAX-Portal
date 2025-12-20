import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const WORK_LOCATION: any = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "Cobra AI 2.0",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5",
      windowPosition: "top-[30vh] left-[18vw]",
      children: [
        {
          id: 1,
          name: "Cobra AI 2.0.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Cobra AI 2.0 is an AI-powered web platform that allows non-coders to create full-stack websites using natural language.",
            "Users describe what they want, and the system generates, previews, and deploys production-ready applications.",
            "It features real-time collaborative coding, AI error detection, live previews, and automated deployment.",
            "Built using the MERN stack with advanced AI agent orchestration for a startup-level experience.",
          ],
        },
        {
          id: 2,
          name: "cobra-ai.live",
          icon: "/images/daxb.png",
          kind: "file",
          fileType: "url",
          href: "https://cobra-aing.vercel.app",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "cobra-ai.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/cobra.png",
        },
        {
          id: 5,
          name: "SourceCode.git",
          icon: "/images/gitCode.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/201Harsh/Cobra-AI-2.0",
          position: "top-60 right-20",
        },
      ],
    },

    // ▶ Project 2
    {
      id: 6,
      name: "RAVX OS",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[42vh] left-[32vw]",
      children: [
        {
          id: 1,
          name: "RAVX OS.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "RAVX OS is a personal AI avatar platform designed for non-coders and creators.",
            "Users can build intelligent AI avatars that execute tasks, generate content, and interact using natural voice.",
            "The system uses AI memory, personality instructions, and MCP server tooling for real-world actions.",
            "Built with Next.js, Tailwind CSS, MongoDB, and Gemini AI APIs for production deployment.",
          ],
        },
        {
          id: 2,
          name: "ravx-os.system",
          icon: "/images/daxb.png",
          kind: "file",
          fileType: "url",
          href: "https://ravx-os.vercel.app",
          position: "top-20 left-20",
        },
        {
          id: 4,
          name: "ravx-os.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/ravx.png",
        },
        {
          id: 5,
          name: "SourceCode.git",
          icon: "/images/gitCode.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/201Harsh/RAVX-OS",
          position: "top-60 left-5",
        },
      ],
    },

    // ▶ Project 3
    {
      id: 7,
      name: "Varon AI",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[28vh] left-[48vw]",
      children: [
        {
          id: 1,
          name: "Varon AI.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Varon AI is a boss-level AI system that orchestrates multiple specialist AI agents.",
            "It intelligently delegates tasks like web search, scraping, coding, document generation, and automation.",
            "The system uses real-time WebSocket streaming to coordinate agents and display live execution logs.",
            "Designed as a production-ready AI OS concept with modular intelligence units.",
          ],
        },
        {
          id: 2,
          name: "varon-ai.system",
          icon: "/images/daxb.png",
          kind: "file",
          fileType: "url",
          href: "https://varonai.vercel.app",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "varon-ai.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/varon.png",
        },
        {
          id: 5,
          name: "SourceCode.git",
          icon: "/images/gitCode.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/201Harsh/Varon-AI",
          position: "top-60 right-20",
        },
      ],
    },
    // ▶ Project 4
    {
      id: 8,
      name: "RaktFlow",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 left-20",
      windowPosition: "top-[45vh] left-7",
      children: [
        {
          id: 1,
          name: "RaktFlow.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "RaktFlow is a real-time, private 1v1 chat application focused on speed, privacy, and minimal UI.",
            "Users can securely register, search for other users, and initiate private conversations instantly.",
            "It supports real-time messaging with WebSockets, authentication, and session-based access control.",
            "Built using the MERN stack, RaktFlow is designed as a scalable foundation for modern chat systems.",
          ],
        },
        {
          id: 2,
          name: "raktflow.app",
          icon: "/images/daxb.png",
          kind: "file",
          fileType: "url",
          href: "https://raktflow.vercel.app",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "raktflow.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/rakt.png",
        },
        {
          id: 5,
          name: "SourceCode.git",
          icon: "/images/gitCode.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/201Harsh/RaktFlow",
          position: "top-60 right-20",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION: any = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/dev.jpg",
    },
    {
      id: 2,
      name: "casual-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-28 right-72",
      imageUrl: "/images/gallery/8.jpeg",
    },
    {
      id: 3,
      name: "gamer-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-52 left-80",
      imageUrl: "/images/gallery/4.png",
    },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Creator of the System You’re Exploring",
      image: "/images/gallery/2.png",
      description: [
        "I build visually striking, highly animated web interfaces that feel smooth, modern, and product-ready — not just static websites.",
        "Alongside UI, I develop full-stack web applications using React, Next.js, Node.js, MongoDB, and real-time systems.",
        "My work also focuses on Web-based AI agents and AI-powered platforms, combining intelligent logic with clean, usable interfaces.",
        "From frontend animations to backend architecture and AI workflows, I design and build complete systems end-to-end.",
        "I don’t create clones or demos — I build original, scalable products.",
      ],
    },
  ],
};

const RESUME_LOCATION: any = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
    },
  ],
};

const TRASH_LOCATION: any = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/trash-2.png",
    },
  ],
};

export const locations: any = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const DEFAULT_LOCATION = locations.work;

const useLocationStore = create(
  immer((set: any) => ({
    activeLocation: DEFAULT_LOCATION,

    setActiveLocation: (location = null) => {
      set((state: any) => {
        state.activeLocation = location;
      });
    },

    resetActiveLocation: () => {
      set((state: any) => {
        state.activeLocation = DEFAULT_LOCATION;
      });
    },
  }))
);

export default useLocationStore;
