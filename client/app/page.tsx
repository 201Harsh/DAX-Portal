"use client";
import { useEffect, useState } from "react";
import Desktop from "./Components/Desktop/Desktop";

const page = () => {
  const [IsMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [IsMobile]);

  return <>{!IsMobile && <Desktop />}</>;
};

export default page;
