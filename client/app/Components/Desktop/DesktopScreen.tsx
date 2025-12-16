"use client";
import Image from "next/image";
import DesktopNavbar from "./DesktopNavbar";
import DesktopText from "./DesktopText";

const DesktopScreen = () => {
  return (
    <>
      <div className="h-screen w-full overflow-hidden">
        <Image
          src="/images/wallpaper.jpg"
          alt="Desktop Background"
          className="h-full w-full object-cover"
          width={100}
          height={100}
          unoptimized
        />
        {/* Navbar */}
        <DesktopNavbar />

        {/* Animated Text Area */}
        <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 left-1/2 text-center text-white font-bold">
          <DesktopText />
        </div>
      </div>
    </>
  );
};

export default DesktopScreen;
