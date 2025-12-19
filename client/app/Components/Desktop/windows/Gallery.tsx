"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import WindowWrapper from "../Hooks/HOC/WindowWrapper";
import WindowController from "../WindowController";
import {
  FiArrowLeft,
  FiArrowRight,
  FiHome,
  FiSearch,
  FiGrid,
  FiMoreHorizontal,
} from "react-icons/fi"; // Ensure you have react-icons installed

const images = [
  {
    id: 1,
    alt: "Aesthetics",
    src: "1.jpg",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    id: 2,
    alt: "AI Enhanced",
    src: "2.png",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    id: 3,
    alt: "Mirror Selfie",
    src: "3.png",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    id: 4,
    alt: "Gaming Setup",
    src: "4.png",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    id: 5,
    alt: "Sunset Vibezz",
    src: "6.jpg",
    className: "md:col-span-2 md:row-span-1",
  },
];

const Gallery = () => {
  return (
    <div className="bg-[#131313] text-gray-300 w-full h-full rounded-lg font-sans shadow-2xl flex flex-col overflow-hidden border border-white/10 relative">
      <div className="flex items-center justify-between px-4 py-3 bg-[#0a0a0a] border-b border-white/5 select-none shrink-0 z-20">
        <div className="flex items-center gap-3 opacity-90">
          {/* App Icon */}
          <div className="w-6 h-6 rounded-md bg-linear-to-br from-red-500 to-rose-600 flex items-center justify-center text-[10px] text-white font-bold shadow-lg shadow-blue-500/20">
            G
          </div>
          <span className="font-medium text-xs tracking-wide text-gray-200">
            Gallery
          </span>
        </div>
        <WindowController windowKey="gallery" />
      </div>

      <div className="flex items-center justify-between px-4 py-2 bg-[#1a1a1a]/50 backdrop-blur-md border-b border-white/5 shrink-0 z-10">
        <div className="flex items-center gap-4">
          <div className="flex gap-2 text-gray-500">
            <FiArrowLeft className="hover:text-white cursor-pointer transition-colors" />
            <FiArrowRight className="hover:text-white cursor-pointer transition-colors opacity-50" />
          </div>

          <div className="flex items-center gap-2 bg-[#000000] px-3 py-1 rounded-md border border-white/10 text-xs text-gray-400 min-w-50">
            <FiHome className="text-gray-500" />
            <span>/</span>
            <span className="hover:text-red-400 cursor-pointer transition-colors">
              Users
            </span>
            <span>/</span>
            <span className="hover:text-red-400 cursor-pointer transition-colors">
              Harsh
            </span>
            <span>/</span>
            <span className="text-red-400 font-semibold">Gallery</span>
          </div>
        </div>

        <div className="flex items-center gap-3 text-gray-500">
          <FiSearch className="hover:text-white cursor-pointer" />
          <div className="h-4 w-px bg-gray-700"></div>
          <FiGrid className="text-white cursor-pointer" />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-5 custom-scrollbar">
        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[250px] gap-4 max-w-5xl mx-auto">
          {images.map((img, index) => (
            <motion.div
              key={img.id}
              className={`relative overflow-hidden rounded-xl border border-white/5 group ${img.className}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-4 bg-linear-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ease-out">
                  <p className="text-xs text-blue-400 font-mono mb-1">
                    IMG_00{img.id}.RAW
                  </p>
                  <h3 className="text-white font-medium text-base tracking-tight">
                    {img.alt}
                  </h3>
                </div>
              </div>

              <motion.div
                className="w-full h-full relative"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <Image
                  src={`/images/gallery/${img.src}`}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                  priority={index < 2}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const GalleryWrapper = WindowWrapper(Gallery, "gallery");
export default GalleryWrapper;
