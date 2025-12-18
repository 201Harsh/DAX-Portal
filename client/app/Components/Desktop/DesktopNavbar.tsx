"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { FaWindows } from "react-icons/fa6";
import { FiSearch, FiUser, FiWifi } from "react-icons/fi";
import { Tooltip } from "react-tooltip";
import useWindowsStore from "./Hooks/WindowsStore";

const DesktopNavbar = () => {
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from("#DeskNav", {
      y: -20,
      opacity: 0,
      duration: 0.95,
      ease: "back.out(1.7)",
      delay: 0.4,
    });

    tl.from("#DeskLeftNavItems", {
      x: 20,
      opacity: 0,
      duration: 0.2,
      ease: "power2.out",
      stagger: 0.06,
    });

    tl.from("#DeskRightNavItems", {
      x: -20,
      opacity: 0,
      duration: 0.2,
      ease: "power2.out",
      stagger: 0.02,
    });
  }, []);

  const navbarItems = [
    { id: "about", name: "About" },
    { id: "contact", name: "Contact" },
    { id: "resume", name: "Resume" },
  ];

  const { openWindow } = useWindowsStore();

  return (
    <div
      className="w-full bg-gray-900/40 backdrop-blur-md border-b border-gray-700 font-semibold py-4 px-12"
      id="DeskNav"
    >
      <div className="h-full w-full flex justify-between items-center pt-2">
        <div className="flex items-center gap-4 text-white">
          <FiUser className="h-4 w-4" />
          Harsh's portfolio
          <div className="flex items-center justify-center gap-4 ml-5">
            {navbarItems.map((item) => (
              <button
                onClick={() => openWindow(item.id)}
                key={item.id}
                data-tooltip-id="navItems-tooltip"
                data-tooltip-content={item.name}
                className="cursor-pointer underline-offset-2 hover:underline"
                id="DeskLeftNavItems"
              >
                {item.name}
              </button>
            ))}
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
              className="cursor-pointer w-4 h-4 outline-none"
              data-tooltip-id="navItems-tooltip"
              data-tooltip-content={name}
              id="DeskRightNavItems"
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
      <Tooltip
        id="navItems-tooltip"
        place="bottom"
        className="tooltip"
        delayShow={150}
      />
    </div>
  );
};

export default DesktopNavbar;
