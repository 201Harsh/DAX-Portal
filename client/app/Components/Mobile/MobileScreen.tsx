"use client";
import Image from "next/image";
import DesktopText from "../Desktop/DesktopText";
import MobileNavbar from "./MobileNavbar";
import MobileDock from "./MobileDock";
import MobileHome from "./MobileHome";
import {
  MobileBrowser,
  MobileContact,
  MobileFinder,
  MobileGalley,
  MobileImg,
  MobileResume,
  MobileTerminal,
  MobileText,
} from "./windows";

const MobileScreen = () => {
  return (
    <>
      <div className="h-screen w-full overflow-hidden relative">
        <Image
          src="/images/wallpapers/wallpaper2.jpg"
          alt="Desktop Background"
          className="h-full w-full object-cover absolute top-0 left-0 -z-10"
          draggable={false}
          fill={true}
          sizes="100vw"
          unoptimized
          priority={true}
        />

        {/* navbar */}
        <MobileNavbar />

        <div className="absolute top-[70%] -translate-x-1/2 -translate-y-1/2 left-1/2 text-center text-white font-bold pointer-events-none">
          <DesktopText />
        </div>

        {/* Mobile Dock */}
        <MobileDock />

        {/* MobileHome*/}
        <MobileTerminal />
        <MobileHome />
        <MobileResume />
        <MobileBrowser />
        <MobileGalley />
        <MobileContact />
        <MobileFinder />
        <MobileText />
        <MobileImg />
      </div>
    </>
  );
};

export default MobileScreen;
