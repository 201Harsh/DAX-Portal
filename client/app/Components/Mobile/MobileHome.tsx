import Image from "next/image";
import { Tooltip } from "react-tooltip";

const MobileHome = () => {
  const dockApps = [
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
  ];

  const toogleApp = (app: { id: string; canOpen: boolean }) => {
    // if (!app.canOpen) return;
    // const window = windows[app.id];
    // if (!window) {
    //   console.log("Window Not Found!");
    //   return;
    // }
    // if (window.isOpen) {
    //   closeWindow(app.id);
    // } else {
    //   openWindow(app.id);
    // }
  };

  return (
    <>
      <div className="p-4">
        <div className="flex items-center justify-start gap-2">
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

export default MobileHome;
