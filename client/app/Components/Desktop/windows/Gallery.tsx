"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import WindowWrapper from "../Hooks/HOC/WindowWrapper";
import WindowController from "../WindowController";

const images = [
  {
    id: 6,
    alt: "Sunset Vibezz",
    src: "6.jpg",
    className: "md:col-span-2 md:row-span-1",
  },
  {
    id: 1,
    alt: "Asthetics",
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
    alt: "Gaming",
    src: "4.png",
    className: "md:col-span-1 md:row-span-1",
  },
];

const Gallery = () => {
  return (
    <div className=" bg-[#131313] text-gray-300 w-full h-full rounded-lg font-mono text-sm shadow-xl flex flex-col overflow-hidden border border-gray-700">
      <div className="flex items-center justify-between px-4 py-2 bg-[#080808] border-b border-black select-none">
        <div className="flex items-center gap-2 opacity-80">
          <span className="text-blue-400">⚡</span>
          <span className="font-semibold text-xs tracking-wide">
            My Gallery
          </span>
        </div>

        <WindowController windowKey="gallery" />
      </div>

      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[250px] gap-4 max-w-5xl w-full p-5">
        {images.map((img, index) => (
          <motion.div
            key={img.id}
            className={`relative overflow-hidden rounded-2xl group ${img.className}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {/* Hover Overlay */}
            <div className="absolute inset-0 z-10 flex flex-col justify-end p-4 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h3 className="text-white font-medium text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                {img.alt}
              </h3>
            </div>

            {/* Image Component */}
            <motion.div
              className="w-full h-full"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
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
  );
};

const GalleryWrapper = WindowWrapper(Gallery, "gallery");

export default GalleryWrapper;
