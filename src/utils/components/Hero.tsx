"use client";
import { Box } from "@chakra-ui/react";
import Navbar from "@/utils/components/Navbar";
import Image from "next/image";

type HeroProps = {
 children: React.ReactNode;
 landing?: boolean;
};
export default function Hero({ children, landing = false }: HeroProps) {
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
   <Box
    position="absolute"
    top="50%"
    left="50%"
    transform="translate(-50%, -50%)"
    width={landingPageImageSize.width}
    height={landingPageImageSize.height}
    opacity={0.31}
    zIndex={0}
   >
    <Image
     src="/assets/ctc-white.svg"
     alt="CTC Logo"
     fill
     style={{ objectFit: "contain" }}
    />
   </Box>

   <Box zIndex={1}>{children}</Box>
  </Box>
 );
}
