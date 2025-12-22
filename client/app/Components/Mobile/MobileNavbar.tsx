import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { BsBatteryHalf, BsReception4 } from "react-icons/bs";
import { FiWifi } from "react-icons/fi";
import { useEffect, useState } from "react";

const MobileNavbar = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    setTime(new Date().toLocaleTimeString("en-US", { hour: "numeric", minute: "numeric", hour12: true }));
    const interval = setInterval(() => {
        setTime(new Date().toLocaleTimeString("en-US", { hour: "numeric", minute: "numeric", hour12: true }));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useGSAP(() => {
    gsap.from(".mobile-nav", {
      y: -20,
      opacity: 0,
      duration: 0.6,
      ease: "power3.out",
      delay: 0.5,
    });
  }, []);

  return (
    <div className="w-full mobile-nav text-white pt-2 px-6">
      <div className="flex justify-between items-center h-8">
        
        <h5 className="text-[13px] font-semibold tracking-wide w-16 text-left">
          {time}
        </h5>

        <div className="h-7 w-28 bg-black rounded-full absolute left-1/2 -translate-x-1/2 top-2 shadow-lg hidden sm:block"></div>

        <div className="flex items-center gap-1.5 w-16 justify-end">
          <BsReception4 className="w-3.5 h-3.5" />
          <FiWifi className="w-3.5 h-3.5" />
          <BsBatteryHalf className="w-4 h-4" />
        </div>

      </div>
    </div>
  );
};

export default MobileNavbar;