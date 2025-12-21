import Image from "next/image";
import { Tooltip } from "react-tooltip";
import useWindowsStore from "../Desktop/Hooks/WindowsStore";

const MobileDock = () => {
  const dockApps = [
    {
      id: "finder",
      name: "Portfolio",
      icon: "finder.png",
      canOpen: true,
    },
    {
      id: "browser",
      name: "Dax Blog",
      icon: "safari.png",
      canOpen: true,
    },
    {
      id: "gallery",
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
  ];

  const { windows, openWindow, closeWindow } = useWindowsStore();

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
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-2xl bg-gray-500/25 backdrop-blur-xs p-2 main-dock">
        <div className="flex items-center justify-center gap-2">
          {dockApps.map(({ id, name, icon, canOpen }) => (
            <button
              onClick={() => toogleApp({ id, canOpen })}
              disabled={!canOpen}
              data-tooltip-id="dock-tooltip"
              data-tooltip-content={name}
              key={id}
              className={`h-21 w-21 rounded-2xl flex items-center justify-center cursor-pointer dock-icon ${
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
          delayShow={50}
          delayHide={100}
        />
      </div>
    </>
  );
};

export default MobileDock;
