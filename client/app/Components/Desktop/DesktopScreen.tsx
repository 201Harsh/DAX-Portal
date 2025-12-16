"use client";
import Image from "next/image";
import DesktopNavbar from "./DesktopNavbar";

const DesktopScreen = () => {
  return (
    <>
      <div className="h-screen w-full overflow-hidden">
        <Image
          src="/images/wallpaper.png"
          alt="Desktop Background"
          fill
          loading="lazy"
          className="h-full w-full object-cover"
          unoptimized
        />
        {/* Navbar */}
        <DesktopNavbar />
      </div>
    </>
  );
};

export default DesktopScreen;
