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
      name: "IRIS AI",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5",
      windowPosition: "top-[30vh] left-[18vw]",
      children: [
        {
          id: 1,
          name: "IRIS AI.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "IRIS AI is an autonomous neural operating system designed to execute real-world tasks through intelligent agents and system tooling.",
            "It combines natural language understanding, memory systems, MCP integrations, web intelligence, and workflow automation into a unified AI runtime.",
            "Built as a local-first platform, IRIS can search, reason, execute actions, manage context, and assist developers through a powerful agent architecture.",
            "Designed as an open-source AI OS focused on execution, privacy, extensibility, and real-world productivity.",
          ],
        },
        {
          id: 2,
          name: "iris-ai.system",
          icon: "/images/daxb.png",
          kind: "file",
          fileType: "url",
          href: "https://irisaiw.vercel.app/",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "iris-ai.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/iris-ai.png",
        },
        {
          id: 5,
          name: "SourceCode.git",
          icon: "/images/gitCode.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/IRISX-AI/IRIS-AI",
          position: "top-60 right-20",
        },
      ],
    },

    // ▶ Project 2
    {
      id: 6,
      name: "IRIS Mini",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[42vh] left-[32vw]",
      children: [
        {
          id: 1,
          name: "IRIS Mini.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "IRIS Mini is a lightweight desktop voice assistant featuring both a premium graphical interface and a powerful command-line experience.",
            "Powered by Google Gemini Live API, it delivers real-time voice conversations, web intelligence, application control, and workflow automation.",
            "Users can interact through voice, terminal commands, or a modern React interface with immersive visual feedback.",
            "Built using React, Node.js, Socket.io, Three.js, and advanced agent tooling for developers and power users.",
          ],
        },
        {
          id: 2,
          name: "iris-mini.system",
          icon: "/images/daxb.png",
          kind: "file",
          fileType: "url",
          href: "https://irisaiw.vercel.app",
          position: "top-20 left-20",
        },
        {
          id: 4,
          name: "iris-mini.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/iris-mini.png",
        },
        {
          id: 5,
          name: "SourceCode.git",
          icon: "/images/gitCode.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/IRISX-AI/IRIS-Mini",
          position: "top-60 left-5",
        },
      ],
    },

    {
      id: 8,
      name: "IRIS Zero",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 left-20",
      windowPosition: "top-[45vh] left-7",
      children: [
        {
          id: 1,
          name: "IRIS Zero.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "IRIS Zero is a fully local-first AI terminal built for developers, privacy-focused users, and offline productivity.",
            "It uses local AI models through Ollama, Whisper, and Kokoro to provide voice interaction, reasoning, and real command execution without cloud services.",
            "Users can manage projects, automate workflows, control the filesystem, and execute terminal operations entirely on-device.",
            "With zero APIs, zero telemetry, and zero subscriptions, IRIS Zero transforms the terminal into a private neural execution environment.",
          ],
        },
        {
          id: 2,
          name: "iris-zero.system",
          icon: "/images/daxb.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/IRISX-AI/IRIS-Zero",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "iris-zero.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/iris-zero.png",
        },
        {
          id: 5,
          name: "SourceCode.git",
          icon: "/images/gitCode.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/IRISX-AI/IRIS-Zero",
          position: "top-60 right-20",
        },
      ],
    },

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
      imageUrl: "/images/dev1.png",
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
      imageUrl: "/images/gallery/6.png",
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
  })),
);

export default useLocationStore;
