"use client";
import Image from "next/image";
import { BsImage } from "react-icons/bs";
import useWindowsStore from "../../Desktop/Hooks/WindowsStore";
import MobileWindowWrapper from "../Hooks/MobileWindowWrapper";

const MobileImg = () => {
  const { windows } = useWindowsStore();
  const data = windows.imgfile.data;

  if (!data)
    return (
      <div className="flex items-center justify-center h-full text-gray-500 bg-black">
        <p>No image loaded</p>
      </div>
    );

  const { name, imageUrl } = data;

  return (
    <div className="bg-black w-full h-full flex flex-col relative overflow-hidden font-sans">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src={imageUrl}
          alt="background"
          fill
          className="object-cover opacity-30 blur-3xl scale-125"
          priority
        />
        <div className="absolute inset-0 bg-black/20" /> 
      </div>

      <div className="relative z-10 flex-1 w-full h-full flex items-center justify-center p-0">
        <div className="relative w-full h-full">
          <Image
            src={imageUrl}
            alt={name || "Preview"}
            fill
            className="object-contain drop-shadow-2xl"
            sizes="100vw"
            priority
          />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full z-20 bg-linear-to-t from-black/90 via-black/50 to-transparent px-6 pb-8 pt-12">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-white/10 backdrop-blur-md rounded-lg">
            <BsImage className="text-white" />
          </div>
          <div>
            <h2 className="text-white font-semibold text-sm tracking-wide line-clamp-1">
              {name || "Untitled Image"}
            </h2>
            <p className="text-gray-400 text-[10px] uppercase tracking-wider">
              Preview Mode
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const MobileImgWrapper = MobileWindowWrapper(MobileImg, "imgfile");

export default MobileImgWrapper;
