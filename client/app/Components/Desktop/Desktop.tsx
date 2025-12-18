"use client";

import gsap from "gsap";
import DesktopScreen from "./DesktopScreen";
import { Draggable } from "gsap/all";
gsap.registerPlugin(Draggable);


const Desktop = () => {
  return (
    <>
      <DesktopScreen />
    </>
  );
};

export default Desktop;
