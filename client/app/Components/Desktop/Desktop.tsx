"use client";
import { Draggable } from "gsap/Draggable";
import gsap from "gsap";
import DesktopScreen from "./DesktopScreen";
gsap.registerPlugin(Draggable);


const Desktop = () => {
  return (
    <>
      <DesktopScreen />
    </>
  );
};

export default Desktop;
