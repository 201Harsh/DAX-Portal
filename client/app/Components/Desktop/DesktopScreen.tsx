"use client";
import Image from "next/image";
import DesktopNavbar from "./DesktopNavbar";
import DesktopText from "./DesktopText";
import DesktopDock from "./DesktopDock";
import {
  Browser,
  Contact,
  DaxCode,
  DeskHome,
  Finder,
  Gallery,
  ImageWin,
  Resume,
  Terminal,
  Text,
  Wallpapers,
} from "./windows";
import DropDownMenu from "./DropDownMenu";
import { useState } from "react";
import useWindowsStore from "./Hooks/WindowsStore";

const DesktopScreen = () => {
  const [menu, setMenu] = useState({
    x: 0,
    y: 0,
    visible: false,
  });
  const { wallpaper } = useWindowsStore();

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    let adjustedX = e.clientX;
    let adjustedY = e.clientY;

    if (adjustedX + 208 > window.innerWidth) {
      adjustedX = window.innerWidth - 220;
    }
    if (adjustedY + 300 > window.innerHeight) {
      adjustedY = window.innerHeight - 310;
    }

    setMenu({
      x: adjustedX,
      y: adjustedY,
      visible: true,
    });
  };

  const handleCloseMenu = () => {
    if (menu.visible) {
      setMenu((prev) => ({ ...prev, visible: false }));
    }
  };

  return (
    <>
      <div
        className="h-screen w-full overflow-hidden relative"
        onContextMenu={handleContextMenu}
        onClick={handleCloseMenu}
      >
        <Image
          src={wallpaper.desktop}
          alt="Desktop Background"
          className="h-full w-full object-cover absolute top-0 left-0 -z-10"
          draggable={false}
          fill={true}
          unoptimized
        />

        {/* Navbar */}

        <DesktopNavbar />

        {/* Animated Text Area */}

        <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 left-1/2 text-center text-white font-bold pointer-events-none">
          <DesktopText />
        </div>

        {/* Dock */}

        <DesktopDock />

        {/* Windows Stuff */}

        <Terminal />
        <Browser />
        <Resume />
        <Gallery />
        <Finder />
        <Text />
        <ImageWin />
        <Contact />
        <Wallpapers />
        <DaxCode />

        {/* Desktop Icons */}

        <DeskHome />

        {/* Desktop Drop Down Menu */}

        <DropDownMenu {...menu} />
      </div>
    </>
  );
};

export default DesktopScreen;
