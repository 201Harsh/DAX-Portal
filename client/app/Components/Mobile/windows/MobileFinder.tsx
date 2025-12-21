import { useState } from "react";
import { FiSearch, FiGrid, FiList, FiClock, FiMenu, FiX } from "react-icons/fi";
import { BsFillFolderFill } from "react-icons/bs";
import Image from "next/image";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";

import useLocationStore, { locations } from "../../Desktop/Hooks/LocationStore";
import useWindowsStore from "../../Desktop/Hooks/WindowsStore";
import MobileWindowWrapper from "../Hooks/MobileWindowWrapper";

const MobileFinder = () => {
  const { activeLocation, setActiveLocation } = useLocationStore();
  const { openWindow } = useWindowsStore();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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
        <h3 className="px-4 mb-2 text-[10px] font-bold text-gray-500 uppercase tracking-wider font-sans">
          {title}
        </h3>
        <ul className="space-y-1 px-2">
          {items.map((item: any) => {
            const isActive = activeLocation.id === item.id;
            return (
              <li
                key={item.id}
                onClick={() => {
                  setActiveLocation(item);
                  setIsSidebarOpen(false); 
                }}
                className={clsx(
                  "flex items-center gap-3 px-3 py-3 rounded-lg cursor-pointer transition-all duration-200 text-sm font-medium select-none",
                  isActive
                    ? "bg-blue-600/20 text-blue-400"
                    : "text-gray-400 active:bg-white/10"
                )}
              >
                {item.icon ? (
                  <Image
                    src={item.icon}
                    alt={item.name}
                    width={18}
                    height={18}
                    className={clsx(
                      "w-5 h-5",
                      isActive ? "opacity-100" : "opacity-70"
                    )}
                  />
                ) : (
                  <BsFillFolderFill className="w-5 h-5" />
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
    if (item.fileType === "url") return window.open(item.href, "_blank");
    if (item.kind === "folder") return setActiveLocation(item);

    openWindow(`${item.fileType}${item.kind}`, item);
  };

  return (
    <div className="bg-[#121212] h-full w-full text-gray-300 flex flex-col overflow-hidden relative font-sans">
      <div className="flex items-center gap-3 px-4 py-3 bg-[#181818]/95 backdrop-blur-md border-b border-white/10 z-20 shrink-0">
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="p-2 -ml-2 text-gray-400 hover:text-white active:bg-white/10 rounded-full transition-colors"
        >
          <FiMenu className="w-5 h-5" />
        </button>

        <div className="flex-1 min-w-0 bg-[#0a0a0a] border border-white/10 rounded-full px-3 py-2 flex items-center gap-2 shadow-inner">
          <FiSearch className="text-gray-500 w-3.5 h-3.5 shrink-0" />
          <div className="flex items-center gap-0.5 text-[11px] overflow-hidden whitespace-nowrap font-mono w-full">
            <span className="text-red-400/90 font-bold hidden xs:inline">
              root://
            </span>
            <span className="text-gray-500 truncate">sys/</span>
            <span className="text-blue-400 truncate">
              {activeLocation.name.toLowerCase()}
            </span>
          </div>
        </div>
      </div>

      <div className="flex-1 relative overflow-hidden flex">
        <AnimatePresence>
          {isSidebarOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsSidebarOpen(false)}
                className="absolute inset-0 bg-black/60 z-40 backdrop-blur-sm"
              />

              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="absolute top-0 left-0 bottom-0 w-64 bg-[#181818] border-r border-white/10 z-50 flex flex-col shadow-2xl"
              >
                <div className="flex items-center justify-between px-4 py-4 border-b border-white/5">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 bg-blue-500/10 rounded-md">
                      <BsFillFolderFill className="text-blue-500 text-sm" />
                    </div>
                    <span className="font-bold text-sm tracking-wide text-gray-100">
                      Locations
                    </span>
                  </div>
                  <button
                    onClick={() => setIsSidebarOpen(false)}
                    className="p-1 text-gray-500 active:text-white"
                  >
                    <FiX className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto py-4 custom-scrollbar">
                  <SidebarSection
                    title="Favorites"
                    items={Object.values(locations)}
                  />
                  {locations.work && locations.work.children && (
                    <SidebarSection
                      title="My Work"
                      items={locations.work.children}
                    />
                  )}
                </div>

                <div className="p-4 border-t border-white/5 text-[10px] text-gray-600 text-center font-mono bg-[#151515]">
                  DaxOS Mobile v2.1
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        <div className="flex-1 bg-[#121212] overflow-y-auto p-4 custom-scrollbar relative z-0 w-full">
          <div className="flex justify-between items-end mb-4 border-b border-white/5 pb-2">
            <h2 className="text-lg font-bold text-white tracking-tight flex items-center gap-2 truncate pr-4">
              {activeLocation.name}
            </h2>
            <div className="flex items-center gap-3 text-gray-500 shrink-0">
              <FiClock className="w-4 h-4 active:text-white" />
              <FiList className="w-4 h-4 active:text-white" />
              <FiGrid className="w-4 h-4 text-white" />
            </div>
          </div>

          {/* File Grid */}
          {activeLocation.children && activeLocation.children.length > 0 ? (
            <div className="grid grid-cols-3 xs:grid-cols-4 gap-3 pb-20">
              {activeLocation.children.map((item: any) => (
                <div
                  key={item.id}
                  onClick={() => handleItemClick(item)}
                  className="group flex flex-col items-center p-2 rounded-xl active:bg-white/5 border border-transparent active:border-white/10 transition-all duration-200"
                >
                  <div className="relative w-12 h-12 mb-2">
                    <Image
                      src={item.icon}
                      alt={item.name}
                      fill
                      sizes="64px"
                      className="object-contain drop-shadow-lg"
                    />
                  </div>
                  <span className="text-[11px] text-center text-gray-400 group-active:text-white font-medium leading-tight line-clamp-2 w-full wrap-break-words">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-[60%] opacity-40 select-none">
              <BsFillFolderFill className="text-5xl text-gray-700 mb-4" />
              <p className="text-gray-500 text-sm">Empty</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const MobileFinderWrapper = MobileWindowWrapper(MobileFinder, "finder");

export default MobileFinderWrapper;
