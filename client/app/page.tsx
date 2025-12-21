"use client";
import { useEffect, useState } from "react";
import Desktop from "./Components/Desktop/Desktop";
import Mobile from "./Components/Mobile/Mobile";
import BootSequence from "./utils/BootingAnimattion";

const Page = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isBooted, setIsBooted] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 769) {
        setIsMobile(true);
        setIsBooted(false);
      } else {
        setIsMobile(false);
        setIsBooted(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <main className="h-screen w-screen overflow-hidden bg-black text-white relative z-100">
      <div
        className={`w-full h-full transition-opacity duration-1000 ${
          isBooted ? "opacity-100" : "opacity-0"
        }`}
      >
        {isMobile ? <Mobile /> : <Desktop />}
      </div>

      {!isBooted && (
        <div className="absolute inset-0 z-50">
          <BootSequence onComplete={() => setIsBooted(true)} />
        </div>
      )}
    </main>
  );
};

export default Page;
