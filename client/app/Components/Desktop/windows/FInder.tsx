import React from "react";
import { FiSearch, FiGrid, FiList, FiClock } from "react-icons/fi";
import { BsFillFolderFill } from "react-icons/bs";
import Image from "next/image";
import clsx from "clsx";

import WindowWrapper from "../Hooks/HOC/WindowWrapper";
import WindowController from "../WindowController";
import useLocationStore, { locations } from "../Hooks/LocationStore";
import useWindowsStore from "../Hooks/WindowsStore";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Finder = () => {
  const { activeLocation, setActiveLocation } = useLocationStore();
  const { openWindow } = useWindowsStore();

  const SidebarSection = ({
    title,
    items,
  }: {
    title: string;
    items: any[];
  }) => {
    if (!items || items.length === 0) return null;

    return (
      <div className="mb-6">
        <h3 className="px-3 mb-2 text-[10px] font-bold text-gray-500 uppercase tracking-wider font-sans">
          {title}
        </h3>
        <ul className="space-y-0.5">
          {items.map((item: any) => {
            const isActive = activeLocation.id === item.id;
            return (
              <li
                key={item.id}
                onClick={() => setActiveLocation(item)}
                className={clsx(
                  "flex items-center gap-3 px-3 py-2 mx-1 rounded-md cursor-pointer transition-all duration-200 text-xs font-medium select-none",
                  isActive
                    ? "bg-blue-600/20 text-blue-400"
                    : "text-gray-400 hover:bg-white/5 hover:text-gray-200"
                )}
              >
                {item.icon ? (
                  <Image
                    src={item.icon}
                    alt={item.name}
                    width={16}
                    height={16}
                    className={clsx(
                      "w-4 h-4",
                      isActive ? "opacity-100" : "opacity-70"
                    )}
                  />
                ) : (
                  <BsFillFolderFill className="w-4 h-4" />
                )}
                <span>{item.name}</span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  const handleItemClick = (item: any) => {
    if (item.fileType === "pdf") return openWindow("resume");
    if (item.kind === "folder") return setActiveLocation(item);
  };

  useGSAP(() => {
    gsap.to("#animate-finder", {
      opacity: 1,
      duration: 0.5,
      ease: "circ.out",
      delay: 0.4,
    });
  }, []);

  return (
    <div
      id="animate-finder"
      className="bg-[#1e1e1e]/95 opacity-0 backdrop-blur-2xl text-gray-300 rounded-xl font-sans text-sm shadow-2xl flex flex-col overflow-hidden border border-white/10 ring-1 ring-white/5"
    >
      <div className="flex items-center justify-between px-4 py-3 bg-[#181818] border-b border-white/5 select-none relative z-10 shrink-0">
        <div className="flex items-center gap-3 min-w-max">
          <div className="p-1.5 bg-blue-500/10 rounded-md">
            <BsFillFolderFill className="text-red-500 text-sm" />
          </div>
          <span className="font-semibold text-xs tracking-wide text-gray-200">
            DAX_File_Manager
          </span>
        </div>

        <div className="flex-1 max-w-lg mx-6 group">
          <div className="flex items-center gap-2 bg-[#0a0a0a] border border-white/10 group-hover:border-white/20 transition-colors rounded-lg px-3 py-1.5 shadow-inner">
            <FiSearch className="text-gray-500 w-3 h-3 shrink-0" />
            <div className="flex items-center gap-0.5 text-[11px] overflow-hidden whitespace-nowrap font-mono">
              <span className="text-red-400/90 font-bold">dax@root://</span>
              <span className="text-gray-400">system/201harsh/</span>
              <span className="text-blue-400">
                {activeLocation.name.toLowerCase()}
              </span>
            </div>
          </div>
        </div>

        <div className="min-w-max">
          <WindowController windowKey="finder" />
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        <div className="w-52 bg-[#151515]/90 border-r border-white/5 flex flex-col pt-4 pb-2 overflow-y-auto backdrop-blur-md custom-scrollbar">
          <SidebarSection title="Favorites" items={Object.values(locations)} />

          {locations.work && locations.work.children && (
            <SidebarSection title="My Work" items={locations.work.children} />
          )}

          <div className="mt-auto px-4 py-4 text-[10px] text-gray-600 font-mono text-center">
            v2.0.1 • Stable
          </div>
        </div>

        <div className="flex-1 bg-[#1e1e1e] relative overflow-y-auto p-6 custom-scrollbar">
          <div className="flex justify-between items-end mb-6 border-b border-white/5 pb-2">
            <h2 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
              {activeLocation.name}
            </h2>
            <div className="flex items-center gap-3 text-gray-500">
              <FiClock className="hover:text-white cursor-pointer transition-colors" />
              <FiList className="hover:text-white cursor-pointer transition-colors" />
              <FiGrid className="text-white cursor-pointer" />
            </div>
          </div>

          {activeLocation.children && activeLocation.children.length > 0 ? (
            <div className="grid grid-cols-3 gap-4">
              {activeLocation.children.map((item: any) => (
                <div
                  key={item.id}
                  onClick={() => handleItemClick(item)}
                  className="group flex flex-col items-center p-3 rounded-xl hover:bg-blue-500/10 border border-transparent hover:border-blue-500/30 cursor-pointer transition-all duration-200"
                >
                  <div className="relative w-14 h-14 mb-2 transition-transform duration-200 group-hover:scale-105">
                    <Image
                      src={item.icon}
                      alt={item.name}
                      fill
                      className="object-contain drop-shadow-lg"
                    />
                  </div>
                  <span className="text-xs text-center text-gray-400 group-hover:text-white font-medium truncate w-full px-1">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-[60%] opacity-40 select-none">
              <BsFillFolderFill className="text-6xl text-gray-700 mb-4" />
              <p className="text-gray-500 text-sm">Folder is empty</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const FinderWrapper = WindowWrapper(Finder, "finder");
export default FinderWrapper;
