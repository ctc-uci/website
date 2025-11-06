"use client";
import {
 Box,
 HStack,
 VStack,
 Text,
 Avatar,
 Image,
 useBreakpointValue,
} from "@chakra-ui/react";

import { EasterEggType } from "@/utils/constants/AlumniTestimonials";

interface TestimonialCardProps {
 name: string;
 role: string;
 company: string;
 testimonial: string;
 image?: string;
 easterEgg?: EasterEggType;
 easterEggText?: string;
}

export default function TestimonialCard({
 name,
 role,
 company,
 testimonial,
 image,
 easterEgg,
 easterEggText,
}: TestimonialCardProps) {
 const isMobile = useBreakpointValue({ base: true, md: false });

 // Compact profile display shared by both layouts
 const ProfileInfo = (
  <>
   <Text
    fontSize={isMobile ? "md" : "lg"}
    fontWeight="bold"
    color="gray.800"
    textAlign={isMobile ? "center" : "left"}
   >
    {name}{" "}
    <Text as="span" fontWeight="normal" color="white">
     {easterEgg === EasterEggType.HIGHLIGHT_NAME ? easterEggText : ""}
    </Text>
   </Text>
   <Text
    fontSize={isMobile ? "sm" : "md"}
    color="gray.600"
    textAlign={isMobile ? "center" : "left"}
   >
    <Text as="span" fontWeight="semibold">
     {company}
    </Text>{" "}
    {role}
   </Text>
  </>
 );

 return (
  <Box
   width="100%"
   maxWidth="800px"
   bg="white"
   borderRadius="16px"
   boxShadow="0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)"
   p={isMobile ? 6 : 0}
   transition="all 0.2s ease-in-out"
  >
   {isMobile ? (
    <VStack spacing={4} align="start">
     <HStack spacing={4} align="center">
      <Avatar size="xl" name={name} src={image} bg="gray.200" />
      <VStack spacing={0} align="start">
       {ProfileInfo}
      </VStack>
     </HStack>
     <Text fontSize="md" color="gray.700" lineHeight="1.6" textAlign="left">
      {testimonial}
     </Text>
    </VStack>
   ) : (
    <HStack spacing={6} align="start">
     <Box flexShrink={0}>
      <Image
       src={image}
       alt={name}
       borderLeftRadius="md"
       objectFit="cover"
       w="150px"
       h="200px"
      />
     </Box>
     <VStack spacing={2} align="start" flex={1}>
      {ProfileInfo}
      <Text fontSize="md" color="gray.700" lineHeight="1.6">
       {testimonial}
      </Text>
     </VStack>
    </HStack>
   )}
  </Box>
 );
}
