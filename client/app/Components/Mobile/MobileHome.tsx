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
    },
    {
      id: "resume",
      name: "Resume",
      icon: "pdf.png",
      canOpen: true,
    },
    {
      id: "finder",
      name: "Projects",
      icon: "finder.png",
      canOpen: true,
    },
    {
      id: "wallpapers",
      name: "Wallpapers",
      icon: "gallery.png",
      canOpen: true,
    },
  ];
  const { windows, closeWindow, openWindow } = useWindowsStore();

  const toogleApp = (app: { id: string; canOpen: boolean }) => {
    if (!app.canOpen) return;
    const window = windows[app.id];
    if (!window) {
      return;
    }
    if (window.isOpen) {
      closeWindow(app.id);
    } else {
      openWindow(app.id);
    }
  };

  return (
    <>
      <div className="p-6">
        <div className="grid grid-cols-3 items-center justify-start gap-5 relative h-full mt-5 z-100">
          {dockApps.map(({ id, name, icon, canOpen }) => (
            <button
              onClick={() => toogleApp({ id, canOpen })}
              disabled={!canOpen}
              data-tooltip-id="dock-tooltip"
              data-tooltip-content={name}
              key={id}
              className={`h-16 w-16 rounded-2xl mt-5 flex flex-col items-center justify-center cursor-pointer mdock-icon ${
                canOpen ? "" : "cursor-not-allowed opacity-55"
              }`}
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
