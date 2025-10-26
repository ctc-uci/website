import { useState, useEffect } from "react";

export const useScrollDirection = () => {
 const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up");
 const [prevScrollY, setPrevScrollY] = useState(0);

 useEffect(() => {
  const handleScroll = () => {
   const currentScrollY = window.scrollY;

   // Only update direction if scroll difference is significant (more than 5px)
   if (Math.abs(currentScrollY - prevScrollY) > 5) {
    if (currentScrollY > prevScrollY) {
     setScrollDirection("down");
    } else {
     setScrollDirection("up");
    }
    setPrevScrollY(currentScrollY);
   }
  };

  window.addEventListener("scroll", handleScroll, { passive: true });

  return () => {
   window.removeEventListener("scroll", handleScroll);
  };
 }, [prevScrollY]);

 return scrollDirection;
};
