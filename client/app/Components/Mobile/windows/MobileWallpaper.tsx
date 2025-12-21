import { useState } from "react";
import Image from "next/image";
import { MdWallpaper, MdCheckCircle } from "react-icons/md";
import clsx from "clsx";
import useWindowsStore from "../../Desktop/Hooks/WindowsStore";
import MobileWindowWrapper from "../Hooks/MobileWindowWrapper";

const WALLPAPERS = [
  { id: "1", name: "Gradient Solid", src: "/images/wallpapers/wallpaper.jpg" },
  {
    id: "2",
    name: "Aurora Borealis",
    src: "/images/wallpapers/wallpaper1.jpg",
  },
  { id: "3", name: "Hitman Reborn", src: "/images/wallpapers/wallpaper2.jpg" },
  {
    id: "4",
    name: "Pink Sunset City",
    src: "/images/wallpapers/wallpaper3.jpg",
  },
  {
    id: "5",
    name: "Moonlight Love",
    src: "/images/wallpapers/wallpaper4.jpg",
  },
];

const MobileWallpaper = () => {
  const { changeWallpaper, wallpaper, closeWindow } = useWindowsStore();
  const [activeId, setActiveId] = useState("3");
  const [activeSrc, setActiveSrc] = useState(wallpaper.mobile);

  const handleWallpaperChange = (id: string, src: string) => {
    setActiveId(id);
    setActiveSrc(src);
    changeWallpaper(id, src, "mobile");
    closeWindow("wallpapers");
  };
  return (
    <div className="bg-[#1e1e1e]/95 backdrop-blur-2xl text-gray-300  rounded-xl font-sans text-sm shadow-2xl flex flex-col overflow-hidden border border-white/10 ring-1 ring-white/5">
      <div className="flex items-center justify-between px-4 py-3 bg-[#181818] border-b border-white/5 select-none relative z-10 shrink-0">
        <div className="flex items-center gap-3">
          <div className="p-1.5 bg-pink-500/10 rounded-md">
            <MdWallpaper className="text-red-400 text-sm" />
          </div>
          <span className="font-semibold text-xs tracking-wide text-gray-200">
            Wallpaper & Appearance
          </span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-6 custom-scrollbar bg-[#121212]">
        <div className="max-w-4xl mx-auto space-y-8">
          <section>
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4 px-1">
              Current Desktop
            </h3>
            <div className="relative w-full aspect-video md:aspect-21/9 rounded-xl overflow-hidden shadow-2xl border border-white/10 group">
              <Image
                src={activeSrc}
                alt="Current Wallpaper"
                fill
                sizes="auto"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 flex items-center gap-2">
                <MdCheckCircle className="text-green-400" />
                <span className="text-xs font-medium text-white">Active</span>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4 px-1">
              Collections
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {WALLPAPERS.map((wp) => {
                const isActive = activeId === wp.id;

                return (
                  <div
                    key={wp.id}
                    onClick={() => handleWallpaperChange(wp.id, wp.src)}
                    className={clsx(
                      "group relative aspect-video rounded-lg overflow-hidden cursor-pointer transition-all duration-200",
                      isActive
                        ? "ring-2 ring-blue-500 ring-offset-2 ring-offset-[#121212] scale-[1.02]"
                        : "hover:scale-[1.02] hover:ring-2 hover:ring-white/20"
                    )}
                  >
                    <Image
                      src={wp.src}
                      alt={wp.name}
                      fill
                      sizes="(max-width: 768px) 50vw, 33vw"
                      className="object-cover"
                      priority={wp.id === "3"}
                    />

                    <div
                      className={clsx(
                        "absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-200",
                        isActive
                          ? "opacity-0"
                          : "opacity-0 group-hover:opacity-100"
                      )}
                    >
                      <span className="text-white font-medium text-xs tracking-wide bg-black/50 px-2 py-1 rounded-md backdrop-blur-sm">
                        {wp.name}
                      </span>
                    </div>

                    {isActive && (
                      <div className="absolute top-2 right-2 bg-blue-500 rounded-full p-0.5 shadow-lg">
                        <MdCheckCircle className="text-white text-xs" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

const MobileWallpaperWrapper = MobileWindowWrapper(
  MobileWallpaper,
  "wallpapers"
);

export default MobileWallpaperWrapper;
