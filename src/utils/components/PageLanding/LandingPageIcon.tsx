import { useInView } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import { Box } from "@chakra-ui/react";

type LandingPageIconBoxProps = {
 children: React.ReactNode;
 rotation?: string;
 positionOverride?: {
  left?: string;
  top?: string;
  right?: string;
  bottom?: string;
 };
 fadeInDelay?: number;
 fadeInDuration?: number;
};

export default function LandingPageIconBox({
 children,
 rotation = "rotate(-10deg)",
 positionOverride,
 fadeInDelay = 0,
 fadeInDuration = 0.6,
 ...boxProps
}: LandingPageIconBoxProps) {
 const boxRef = useRef(null);
 const isInView = useInView(boxRef, { once: true });

 return (
  <motion.div
   ref={boxRef}
   initial={{ opacity: 0, scale: 0.8 }}
   animate={isInView ? { opacity: 0.5, scale: 1 } : { opacity: 0, scale: 0.8 }}
   transition={{
    duration: fadeInDuration,
    delay: fadeInDelay,
    ease: "easeOut",
   }}
   style={{
    position: "absolute",
    left: positionOverride?.left,
    top: positionOverride?.top,
    right: positionOverride?.right,
    bottom: positionOverride?.bottom,
    zIndex: 0,
   }}
  >
   <Box
    width="124px"
    height="124px"
    backgroundColor="ctc.purple"
    borderRadius="md"
    display="flex"
    alignItems="center"
    justifyContent="center"
    color="white"
    p={30}
    transform={rotation}
    {...boxProps}
   >
    {children}
   </Box>
  </motion.div>
 );
}
