"use client";
import Image from "next/image";
import DesktopNavbar from "./DesktopNavbar";
import DesktopText from "./DesktopText";
import DesktopDock from "./DesktopDock";
import { Browser, Resume, Terminal } from "./windows";

const DesktopScreen = () => {
  return (
    <>
      <div className="h-screen w-full overflow-hidden">
        <Image
          src="/images/wallpaper.jpg"
          alt="Desktop Background"
          className="h-full w-full object-cover absolute top-0 left-0 -z-10"
          width={100}
          height={100}
          priority
          unoptimized
        />
        {/* Navbar */}
        <DesktopNavbar />

        {/* Animated Text Area */}
        <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 left-1/2 text-center text-white font-bold">
          <DesktopText />
        </div>

        {/* Dock */}
        <DesktopDock />

        {/* Windows Stuff */}
        <Terminal />
        <Browser />
        <Resume />
      </div>
    </>
  );
};

export default DesktopScreen;
