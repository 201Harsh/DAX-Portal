import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useRef } from "react";
import { Tooltip } from "react-tooltip";
import { gsap } from "gsap";

const DesktopDock = () => {
  const dockApps = [
    {
      id: "finder",
      name: "Portfolio",
      icon: "finder.png",
      canOpen: true,
    },
    {
      id: "safari",
      name: "Browser",
      icon: "safari.png",
      canOpen: true,
    },
    {
      id: "photos",
      name: "Gallery",
      icon: "photos.png",
      canOpen: true,
    },
    {
      id: "contact",
      name: "Contact",
      icon: "contact.png",
      canOpen: true,
    },
    {
      id: "spotify",
      name: "Spotify",
      icon: "spotify.png",
      canOpen: true,
    },
    {
      id: "terminal",
      name: "Skills",
      icon: "terminal.png",
      canOpen: true,
    },
    {
      id: "vsCode",
      name: "VS Code",
      icon: "vscode.png",
      canOpen: true,
    },
    {
      id: "trash",
      name: "Trash Bin",
      icon: "trash.png",
      canOpen: false,
    },
  ];

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

  return (
    <>
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-3xl bg-gray-400/40 backdrop-blur-sm p-2 main-dock">
        <div ref={DockRef} className="flex items-center justify-center gap-2">
          {dockApps.map(({ id, name, icon, canOpen }) => (
            <button
              data-tooltip-id="dock-tooltip"
              data-tooltip-content={name}
              key={id}
              className={`h-20 w-20 rounded-2xl flex items-center justify-center cursor-pointer dock-icon ${
                canOpen ? "hover:bg-gray-900/40" : "cursor-not-allowed"
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
