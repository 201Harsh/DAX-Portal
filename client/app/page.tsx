"use client";
import { useEffect, useState } from "react";
import Desktop from "./Components/Desktop/Desktop";
import Mobile from "./Components/Mobile/Mobile";

const page = () => {
  const [IsMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 828) {
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
  }, []);

  return <>{!IsMobile ? <Desktop /> : <Mobile />}</>;
};

export default page;
