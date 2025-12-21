import Image from "next/image";
import { Tooltip } from "react-tooltip";
import useWindowsStore from "../Desktop/Hooks/WindowsStore";
import { useGSAP } from "@gsap/react";
import { Draggable } from "gsap/all";

const MobileHome = () => {
  const dockApps = [
    {
      id: "terminal",
      name: "Skills",
      icon: "terminal.png",
      canOpen: true,
      postion: "left-0 top-8",
    },
    {
      id: "resume",
      name: "Resume",
      icon: "pdf.png",
      canOpen: true,
      postion: "right-8 top-44",
    },
    {
      id: "finder",
      name: "Projects",
      icon: "finder.png",
      canOpen: true,
      postion: "left-8 top-64",
    },
    {
      id: "wallpapers",
      name: "Wallpapers",
      icon: "gallery.png",
      canOpen: true,
      postion: "right-2 top-4",
    },
  ];
  const { windows, closeWindow, openWindow } = useWindowsStore();

  const toogleApp = (app: { id: string; canOpen: boolean }) => {
    if (!app.canOpen) return;
    const window = windows[app.id];
    if (!window) {
      console.log("Window Not Found!");
      return;
    }
    if (window.isOpen) {
      closeWindow(app.id);
    } else {
      openWindow(app.id);
    }
  };

  useGSAP(() => {
    Draggable.create(".mdock-icon", {
      type: "x,y",
      bounds: "body",
      inertia: true,
      edgeResistance: 0.65,
      zIndexBoost: false,
    });
  });

  return (
    <>
      <div className="p-4">
        <div className="flex items-center justify-start gap-2 relative h-full">
          {dockApps.map(({ id, name, icon, canOpen, postion }) => (
            <button
              onClick={() => toogleApp({ id, canOpen })}
              disabled={!canOpen}
              data-tooltip-id="dock-tooltip"
              data-tooltip-content={name}
              key={id}
              className={`h-25 w-25 rounded-2xl flex flex-col items-center justify-center cursor-pointer mdock-icon absolute ${
                canOpen ? "" : "cursor-not-allowed opacity-55"
              } ${postion}`}
            >
              <Image
                src={`/images/${icon}`}
                alt={name}
                className="h-full w-full"
                width={95}
                height={95}
                loading="lazy"
              />
              <p>{name}</p>
            </button>
          ))}
        </div>

        <Tooltip
          id="dock-tooltip"
          place="top"
          className="tooltip"
          delayShow={50}
          delayHide={100}
        />
      </div>
    </>
  );
};

export default MobileHome;
