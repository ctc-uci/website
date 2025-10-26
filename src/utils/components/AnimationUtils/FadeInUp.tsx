"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type FadeInUpProps = {
 children: React.ReactNode;
 delay?: number;
 duration?: number;
 distance?: number;
};

export default function FadeInUp({
 children,
 delay = 0,
 duration = 0.6,
 distance = 30,
}: FadeInUpProps) {
 const ref = useRef(null);
 const isInView = useInView(ref, { once: true });

 return (
  <motion.div
   ref={ref}
   initial={{
    opacity: 0,
    y: distance,
   }}
   animate={
    isInView
     ? {
        opacity: 1,
        y: 0,
       }
     : {
        opacity: 0,
        y: distance,
       }
   }
   transition={{
    duration,
    delay,
    ease: "easeOut",
   }}
  >
   {children}
  </motion.div>
 );
}
