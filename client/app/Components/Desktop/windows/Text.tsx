"use client";
import Image from "next/image";
import WindowWrapper from "../Hooks/HOC/WindowWrapper";
import useWindowsStore from "../Hooks/WindowsStore";
import WindowController from "../WindowController";
import { BsFileTextFill } from "react-icons/bs";
import { useGSAP } from "@gsap/react";

const Text = () => {
  const { windows } = useWindowsStore();
  const data = windows.txtfile.data;

  if (!data)
    return (
      <div className="flex items-center justify-center h-full text-gray-500 text-xs">
        No content loaded.
      </div>
    );

  const { name, image, subtitle, description } = data;

  return (
    <div className="bg-[#1e1e1e] backdrop-blur-2xl text-gray-300 w-full h-full scrollbar-small rounded-xl font-sans text-sm shadow-2xl flex flex-col overflow-hidden border border-white/10 ring-1 ring-white/5">
      <div className="flex items-center justify-between px-4 py-3 bg-[#181818] border-b border-white/5 select-none relative z-10 shrink-0">
        <div className="flex items-center gap-3 min-w-max">
          <div className="p-1.5 bg-white/10 rounded-md">
            <BsFileTextFill className="text-gray-300 text-xs" />
          </div>
          <span className="font-semibold text-xs tracking-wide text-gray-200 truncate max-w-50">
            {name || "Untitled.txt"}
          </span>
        </div>
        <div className="min-w-max">
          <WindowController windowKey="txtfile" />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto custom-scrollbar p-6 bg-[#1e1e1e]">
        <div className="max-w-3xl mx-auto flex flex-col gap-6 items-center">
          {image && (
            <div className="relative w-72 h-72 rounded-full overflow-hidden border border-white/10 shadow-lg bg-black/20 shrink-0">
              <Image
                src={image}
                alt={name || "Preview"}
                fill
                className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 800px"
                priority
              />
            </div>
          )}

          <div className="space-y-4">
            {subtitle && (
              <h1 className="text-2xl md:text-3xl font-bold text-transparent bg-linear-to-br from-rose-700 via-red-200 to-pink-600 bg-clip-text tracking-tight border-b border-white/10 pb-4">
                {subtitle}
              </h1>
            )}

            {Array.isArray(description) && description.length > 0 ? (
              <div className="space-y-4 text-base leading-relaxed text-gray-300 font-normal">
                {description.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
              </div>
            ) : (
              description && (
                <p className="text-base leading-relaxed text-gray-300">
                  {description}
                </p>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const TextWrapper = WindowWrapper(Text, "txtfile");
export default TextWrapper;
