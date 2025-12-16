"use client";
import Image from "next/image";
import { FaWindows } from "react-icons/fa6";
import { FiSearch, FiUser, FiWifi } from "react-icons/fi";
import { Tooltip } from "react-tooltip";

const DesktopNavbar = () => {
  return (
    <div className="w-full absolute top-0 z-60 bg-gray-900/40 backdrop-blur-md border-b border-gray-700 font-semibold">
      <div className="h-full w-full flex justify-between items-center px-10 py-2">
        <div className="flex items-center gap-4 text-white">
          <FiUser className="h-4 w-4" />
          Harsh's portfolio
          <div className="flex items-center justify-center gap-4 ml-5">
            {["Projects", "About", "Contact"].map((item) => (
              <button
                key={item}
                data-tooltip-id="navItems-tooltip"
                data-tooltip-content={item}
                className="cursor-pointer underline-offset-2 hover:underline"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
        <div className="lg:flex hidden items-center gap-4 text-white font-bold">
          <div
            className="flex items-center cursor-pointer"
            data-tooltip-id="navItems-tooltip"
            data-tooltip-content="DAX PORTAL"
          >
            <Image
              src="/logo.png"
              alt="Profile Picture"
              width={100}
              height={100}
              className="h-10 w-10 cursor-pointer"
            />
            DAX PORTAL
          </div>
        </div>
        <div className="flex items-center gap-5 text-white">
          {[
            { Icon: FiSearch, name: "Search" },
            { Icon: FiWifi, name: "DAX Internal Wifi" },
            { Icon: FaWindows, name: "Start" },
          ].map(({ Icon, name }, index) => (
            <Icon
              key={index}
              className="cursor-pointer w-4 h-4"
              data-tooltip-id="navItems-tooltip"
              data-tooltip-content={name}
            />
          ))}
          <div
            data-tooltip-id="navItems-tooltip"
            data-tooltip-content="Date"
            className="cursor-pointer"
          >
            {new Date().toDateString()}
          </div>
        </div>
      </div>
      <Tooltip id="navItems-tooltip" place="bottom" className="tooltip" delayShow={150} />
    </div>
  );
};

export default DesktopNavbar;
