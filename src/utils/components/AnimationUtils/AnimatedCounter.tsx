"use client";
import { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type AnimatedCounterProps = {
 value: number;
 duration?: number;
 suffix?: string;
};

export default function AnimatedCounter({
 value,
 duration = 2,
 suffix = "",
}: AnimatedCounterProps) {
 const ref = useRef(null);
 const isInView = useInView(ref, { once: true });
 const [count, setCount] = useState(0);

 useEffect(() => {
  if (isInView) {
   const startTime = Date.now();
   const startValue = 0;
   const endValue = value;

   const animate = () => {
    const elapsed = Date.now() - startTime;
    const progress = Math.min(elapsed / (duration * 1000), 1);

    // Linear easing for consistent speed
    const currentValue = Math.floor(
     startValue + (endValue - startValue) * progress
    );
    setCount(currentValue);

    if (progress < 1) {
     requestAnimationFrame(animate);
    } else {
     setCount(endValue);
    }
   };

   requestAnimationFrame(animate);
  }
 }, [isInView, value, duration]);

 return (
  <motion.span
   ref={ref}
   initial={{ opacity: 0 }}
   animate={{ opacity: isInView ? 1 : 0 }}
   transition={{ duration: 0.5 }}
  >
   {count}
   {suffix}
  </motion.span>
 );
}
