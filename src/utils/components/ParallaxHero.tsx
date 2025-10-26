"use client";

import { Box } from "@chakra-ui/react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

import Navbar from "@/utils/components/Navbar";

type ParallaxHeroProps = {
 children: React.ReactNode;
 landing?: boolean;
 backgroundImage?: string;
};

export default function ParallaxHero({
 children,
 landing = false,
 backgroundImage = "/assets/ctc-white.svg",
}: ParallaxHeroProps) {
 const { scrollY } = useScroll();

 // Create parallax effect - background moves down slower than scroll
 const backgroundY = useTransform(scrollY, [0, 1000], [0, 300]);
 const logoY = useTransform(scrollY, [0, 1000], [0, 200]);
 // Keep opacity constant instead of fading out

 const landingPageImageSize = landing
  ? { width: "70%", height: "70%" }
  : { width: "75%", height: "50%" };

 return (
  <Box
   minH="100vh"
   w="100%"
   position="relative"
   bgGradient="linear(180deg, #FFF 0%, #E9D5FF 100%)"
   display="flex"
   alignItems="center"
   justifyContent="center"
   overflow="hidden"
  >
   <Navbar />

   {/* Parallax Background Image */}
   <motion.div
    style={{
     position: "absolute",
     top: "50%",
     left: "50%",
     transform: "translate(-50%, -50%)",
     width: landingPageImageSize.width,
     height: landingPageImageSize.height,
     opacity: 0.3,
     zIndex: 0,
     y: logoY,
    }}
   >
    <Image
     src={backgroundImage}
     alt="CTC Logo"
     fill
     style={{ objectFit: "contain" }}
    />
   </motion.div>

   {/* Parallax Background Pattern (optional additional layer) */}
   <motion.div
    style={{
     position: "absolute",
     top: 0,
     left: 0,
     width: "100%",
     height: "120%",
     backgroundImage:
      "radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.1) 0%, transparent 50%)",
     y: backgroundY,
     zIndex: -1,
    }}
   />

   {/* Content */}
   <Box zIndex={1}>{children}</Box>
  </Box>
 );
}
