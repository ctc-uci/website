import { ReactNode, useRef } from "react";

import { motion, useInView } from "framer-motion";

interface FadeInText_BottomUpProps {
  children: ReactNode;
  duration?: number;
  delay?: number;
  yOffset?: number;
}

export const FadeInText_BottomUp = ({
  children,
  duration = 0.7,
  delay = 0,
  yOffset = 50,
}: FadeInText_BottomUpProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: yOffset }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: yOffset }}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};
