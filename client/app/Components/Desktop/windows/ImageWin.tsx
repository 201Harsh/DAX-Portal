import { BsImage } from "react-icons/bs";
import useWindowsStore from "../Hooks/WindowsStore";
import WindowController from "../WindowController";
import Image from "next/image";
import WindowWrapper from "../Hooks/HOC/WindowWrapper";

const ImageWin = () => {
  const { windows } = useWindowsStore();

  const data = windows.imgfile.data;

  if (!data) return null;

  const { name, imageUrl } = data;

  return (
    <>
      <div className="bg-[#1e1e1e] backdrop-blur-2xl text-gray-300 rounded-xl font-sans text-sm shadow-2xl flex flex-col overflow-hidden border border-white/10 ring-1 ring-white/5">
        <div className="flex items-center justify-between px-4 py-3 bg-[#181818] border-b border-white/5 select-none relative z-10 shrink-0">
          <div className="flex items-center gap-3 min-w-max">
            <div className="p-1.5 bg-red-400/15 rounded-md">
              <BsImage className="text-red-500 text-xs" />
            </div>
            <span className="font-semibold text-xs tracking-wide text-gray-200 truncate max-w-50">
              {name || "Untitled.txt"}
            </span>
          </div>
          <div className="min-w-max">
            <WindowController windowKey="imgfile" />
          </div>
        </div>

        <div className="p-2">
          {imageUrl ? (
            <Image
              width={1920}
              height={1080}
              src={imageUrl}
              alt={name || "Preview"}
              className="object-cover transition-transform duration-700 ease-out"
              priority
            />
          ) : null}
        </div>
      </div>
    </>
  );
};

const ImageWrapper = WindowWrapper(ImageWin, "imgfile");

export default ImageWrapper;
