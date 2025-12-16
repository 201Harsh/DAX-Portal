import Image from "next/image";
import { Tooltip } from "react-tooltip";

const DesktopDock = () => {
  const dockApps = [
    {
      id: "finder",
      name: "Portfolio", // was "Finder"
      icon: "finder.png",
      canOpen: true,
    },
    {
      id: "safari",
      name: "Articles", // was "Safari"
      icon: "safari.png",
      canOpen: true,
    },
    {
      id: "photos",
      name: "Gallery", // was "Photos"
      icon: "photos.png",
      canOpen: true,
    },
    {
      id: "contact",
      name: "Contact", // or "Get in touch"
      icon: "contact.png",
      canOpen: true,
    },
    {
      id: "terminal",
      name: "Skills", // was "Terminal"
      icon: "terminal.png",
      canOpen: true,
    },
    {
      id: "trash",
      name: "Archive", // was "Trash"
      icon: "trash.png",
      canOpen: false,
    },
  ];

  return (
    <>
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-3xl bg-gray-400/40 backdrop-blur-sm p-2">
        <div className="flex items-center justify-center gap-2">
          {dockApps.map(({ id, name, icon, canOpen }) => (
            <div
              data-tooltip-id="dock-tooltip"
              data-tooltip-content={name}
              key={id}
              className={`h-20 w-20 rounded-2xl flex items-center justify-center cursor-pointer ${
                canOpen ? "hover:bg-gray-900/40" : "cursor-not-allowed"
              }`}
            >
              <Image
                src={`/images/${icon}`}
                alt={name}
                className="h-full w-full"
                width={100}
                height={100}
                unoptimized
              />
            </div>
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
