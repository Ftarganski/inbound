import { useEffect, useState } from "react";

export const useWindowResize = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Check the window width on initial load

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isMobile;
};