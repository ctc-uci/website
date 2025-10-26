"use client";
import {
 Box,
 Text,
 HStack,
 VStack,
 useBreakpointValue,
} from "@chakra-ui/react";

import { ValueCard } from "./ValueCard";

const valuesData = [
 {
  icon: "/assets/icons/file-code.svg",
  title: "Build Enduring Projects",
  description:
   "Create products that are efficient and maintainable for the long term, focusing on quality development, design, and documentation.",
  rotation: -8,
 },
 {
  icon: "/assets/icons/heart.svg",
  title: "Foster Authenticity",
  description:
   "We encourage every member to be honest and true to themselves, respecting diverse opinions and perspectives.",
  rotation: 4,
 },
 {
  icon: "/assets/icons/users.svg",
  title: "Develop Community",
  description:
   "We strive to unite the organization as a strong, supportive community of friends and teammates.",
  rotation: -6,
 },
 {
  icon: "/assets/icons/speech.svg",
  title: "Take Initiative",
  description:
   "We support members' learning through experience and embracing failure as a step toward growth.",
  rotation: 5,
 },
 {
  icon: "/assets/icons/heart-handshake.svg",
  title: "Striving for Social Good",
  description:
   "We design innovative solutions for meaningful impact, partnering with organizations that need our help most.",
  rotation: -3,
 },
];

export const ValuesSection = () => {
 const isMobile = useBreakpointValue({ base: true, md: false });
 const shouldWrap = useBreakpointValue({ base: true, xl: false });

 return (
  <VStack spacing={12} py={20} px={4} maxW="7xl" mx="auto">
   {/* Title */}
   <Box textAlign="center">
    <Text
     fontSize="5xl"
     fontWeight="bold"
     fontFamily="Inter, sans-serif"
     lineHeight="1.2"
    >
     <Text as="span" color="black">
      Our{" "}
     </Text>
     <Text as="span" color="ctc.purple" fontWeight="bold">
      Values
     </Text>
    </Text>
   </Box>

   {/* Cards Container */}
   <Box
    position="relative"
    w="100%"
    display="flex"
    justifyContent="center"
    alignItems="center"
    minH="400px"
    overflow="visible"
   >
    <HStack
     spacing={isMobile ? 4 : -4}
     alignItems="center"
     justifyContent="center"
     flexWrap={shouldWrap ? "wrap" : "nowrap"}
     maxW="100%"
     gap={isMobile ? 4 : 0}
    >
     {valuesData.map((value, index) => (
      <ValueCard
       key={index}
       icon={value.icon}
       title={value.title}
       description={value.description}
       rotation={value.rotation}
       isMobile={isMobile}
      />
     ))}
    </HStack>
   </Box>
  </VStack>
 );
};
