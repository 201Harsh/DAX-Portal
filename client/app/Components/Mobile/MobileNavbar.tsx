import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { BsBatteryHalf } from "react-icons/bs";
import { FiWifi } from "react-icons/fi";

const MobileNavbar = () => {
  useGSAP(() => {
    gsap.from(".mobile-nav", {
      y: -40,
      opacity: 0,
      duration: 0.5,
      ease: "power4.out",
      delay: 5,
    });
  }, []);

  return (
    <>
      <div className="w-full mobile-nav">
        <div className="h-full w-full flex justify-between items-center px-4 py-5">
          <h5 className="text-md">
            {new Date().toLocaleTimeString("en-In", {
              hour12: true,
              hour: "numeric",
              minute: "numeric",
            })}
          </h5>
          <div className="py-5 bg-white/80 rounded-full w-60"></div>
          <div className="flex items-center justify-center">
            <FiWifi className="w-5 h-5" />
            <BsBatteryHalf className="w-5 h-5 ml-2" />
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNavbar;
