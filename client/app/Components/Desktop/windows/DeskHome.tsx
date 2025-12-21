"use client";
import { useMemo } from "react";
import Image from "next/image";
import clsx from "clsx";
import { useGSAP } from "@gsap/react";
import { Draggable } from "gsap/all";

import useLocationStore, { locations } from "../Hooks/LocationStore";
import useWindowsStore from "../Hooks/WindowsStore";

type ItemType = "folder" | "app" | "file" | "url" | "pdf" | "txt";

interface DesktopItem {
  id: string;
  name: string;
  icon: string;
  type: ItemType;
  payload: any;
  position?: string;
  kind?: string;
  subtitle?: string;
  image?: string;
  description?: string | string[];
}

const DeskHome = () => {
  const { openWindow } = useWindowsStore();
  const { setActiveLocation } = useLocationStore();

  const desktopItems: DesktopItem[] = useMemo(() => {
    const folderItems = (locations.work?.children ?? []).map((folder: any) => ({
      id: folder.id,
      name: folder.name,
      icon: folder.icon || "/icons/folder-blue.png",
      type: "folder" as ItemType,
      payload: folder,
      position: folder.windowPosition,
    }));

    const appItems: DesktopItem[] = [
      {
        id: "daxbrowser",
        name: "Browser",
        icon: "/images/daxb.png",
        type: "app",
        payload: "browser",
        position: "top-24 left-10",
      },
      {
        id: "contact",
        name: "Contact Me",
        icon: "/images/contact.png",
        type: "app",
        payload: "contact",
        position: "top-44 left-20",
      },
    ];

    const fileItems: any = [
      {
        id: 1,
        name: "Resume.pdf",
        icon: "/images/pdf.png",
        kind: "file",
        type: "pdf",
        position: "top-[32vh] right-24",
      },
      {
        id: 4,
        name: "about-me.txt",
        icon: "/images/txt.png",
        kind: "file",
        type: "txt",
        position: "bottom-24 left-14",
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
    ];

    return [...folderItems, ...appItems, ...fileItems];
  }, []);

  const handleInteraction = (item: DesktopItem) => {
    switch (item.type) {
      case "folder":
        setActiveLocation(item.payload);
        openWindow("finder");
        break;
      case "app":
        openWindow(item.payload);
        break;
      case "txt":
        openWindow(`${item.type}${item.kind}`, item);
        break;
      case "pdf":
        openWindow("resume");
        break;
      default:
        console.warn("Unknown item type");
    }
  };

  useGSAP(() => {
    Draggable.create(".deskItems", {
      type: "x,y",
      bounds: "body",
      inertia: true,
      edgeResistance: 0.65,
    });
  }, []);

  return (
    <section className="absolute top-0 left-0 w-full h-full z-0 p-4 pointer-events-none mt-12">
      <ul className="grid grid-cols-4 gap-5 w-fit pointer-events-auto mt-12 ml-10">
        {desktopItems.map((item) => (
          <li
            key={item.id}
            onClick={() => handleInteraction(item)}
            className={clsx(
              "deskItems group relative flex flex-col items-center justify-start gap-1 p-2 w-24 h-24 rounded-lg cursor-pointer transition-colors border border-transparent",
              "hover:bg-white/10 hover:backdrop-blur-sm hover:border-white/5 active:bg-blue-500/20 active:border-blue-500/30"
            )}
          >
            <div className="relative w-14 h-14 drop-shadow-2xl transition-transform duration-200 group-hover:scale-105 group-active:scale-95">
              <Image
                src={item.icon}
                alt={item.name}
                fill
                sizes="100%"
                className="object-contain"
                priority
                draggable={false}
              />
            </div>

            <p
              className="text-xs font-medium text-white text-center leading-tight line-clamp-2 px-1 rounded-sm select-none"
              style={{ textShadow: "0px 1px 3px rgba(0,0,0,0.8)" }}
            >
              {item.name}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default DeskHome;
