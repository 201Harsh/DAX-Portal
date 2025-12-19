import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useRef } from "react";
import { Tooltip } from "react-tooltip";
import { gsap } from "gsap";
import useWindowsStore from "./Hooks/WindowsStore";

const DesktopDock = () => {
  const dockApps = [
    {
      id: "finder",
      name: "Portfolio",
      icon: "daxfinder.png",
      canOpen: true,
    },
    {
      id: "browser",
      name: "Dax Blog",
      icon: "daxb.png",
      canOpen: true,
    },
    {
      id: "gallery",
      name: "Gallery",
      icon: "gallery.png",
      canOpen: true,
    },
    {
      id: "contact",
      name: "Contact",
      icon: "contact.png",
      canOpen: true,
    },
    {
      id: "terminal",
      name: "Skills",
      icon: "dterminal.png",
      canOpen: true,
    },
    {
      id: "daxcode",
      name: "Dax Code",
      icon: "daxcode.png",
      canOpen: true,
    },
    {
      id: "trash",
      name: "Trash Bin",
      icon: "bin.png",
      canOpen: true,
    },
  ];

  const { windows, openWindow, closeWindow } = useWindowsStore();

  const DockRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".main-dock", {
      y: 20,
      opacity: 0,
      duration: 1.2,
      ease: "back.out(1.7)",
      delay: 1,
    });

    const dock: any = DockRef.current;

    if (!dock) return;

    const icons = dock.querySelectorAll(".dock-icon");

    const animateIcons = (mouseX: any) => {
      const { left } = dock.getBoundingClientRect();

      icons.forEach((icon: any) => {
        const { left: IconLeft, width } = icon.getBoundingClientRect();
        const center = IconLeft - left + width / 2;
        const distance = Math.abs(mouseX - center);
        const intensity = Math.exp(-(distance ** 2.5) / 20000);

        gsap.to(icon, {
          scale: 1 + 0.25 * intensity,
          y: -15 * intensity,
          duration: 0.25,
          ease: "power1.out",
        });
      });
    };

    const handleMouseEnter = (e: any) => {
      const { left } = dock.getBoundingClientRect();
      const mouseX = e.clientX - left;
      animateIcons(mouseX);
    };

    const handleMouseLeave = () => {
      icons.forEach((icon: any) => {
        gsap.to(icon, {
          scale: 1,
          y: 0,
          duration: 0.3,
          ease: "power1.out",
        });
      });
    };

    dock.addEventListener("mousemove", handleMouseEnter);
    dock.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      dock.removeEventListener("mousemove", handleMouseEnter);
      dock.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

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

  return (
    <>
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-3xl bg-gray-800/5 backdrop-blur-xs p-2 main-dock">
        <div ref={DockRef} className="flex items-center justify-center gap-2">
          {dockApps.map(({ id, name, icon, canOpen }) => (
            <button
              onClick={() => toogleApp({ id, canOpen })}
              disabled={!canOpen}
              data-tooltip-id="dock-tooltip"
              data-tooltip-content={name}
              key={id}
              className={`h-18.5 w-18.5 rounded-2xl flex items-center justify-center cursor-pointer dock-icon ${
                canOpen ? "" : "cursor-not-allowed opacity-55"
              }`}
            >
              <Image
                src={`/images/${icon}`}
                alt={name}
                className="h-full w-full"
                width={100}
                height={100}
                loading="lazy"
              />
            </button>
          ))}
        </div>

        <Tooltip
          id="dock-tooltip"
          place="top"
          className="tooltip"
          delayShow={150}
          delayHide={100}
        />
      </div>
    </>
  );
};

export default DesktopDock;
