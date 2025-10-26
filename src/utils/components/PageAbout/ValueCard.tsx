"use client";
import { Box, Text, VStack, Image } from "@chakra-ui/react";
import { ReactNode } from "react";

interface ValueCardProps {
 icon: ReactNode;
 title: string;
 description: string;
 rotation?: number;
 isMobile?: boolean;
}

export const ValueCard = ({
 icon,
 title,
 description,
 rotation = 0,
 isMobile = false,
}: ValueCardProps) => {
 return (
  <Box
   transform={isMobile ? "none" : `rotate(${rotation}deg)`}
   transition="transform 0.3s ease"
   _hover={{
    transform: isMobile ? "scale(1.05)" : `rotate(${rotation}deg) scale(1.05)`,
   }}
   cursor="pointer"
  >
   <Box
    w="280px"
    h="320px"
    bg="white"
    borderRadius="16px"
    border="1px solid"
    borderColor="gray.100"
    boxShadow="0 8px 32px rgba(0, 0, 0, 0.1)"
    overflow="hidden"
    position="relative"
   >
    {/* Gradient Header Section */}
    <Box
     h="140px"
     bgGradient="linear(to-br, purple.400 0%, ctc.purple 35%, ctc.purple 65%, purple.400 100%)"
     display="flex"
     alignItems="center"
     justifyContent="center"
     position="relative"
    >
     {/* Icon */}
     <Box
      fontSize="48px"
      color="white"
      filter="drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2))"
     >
      <Image src={icon as string} alt={title} width={32} height={32} />
     </Box>
    </Box>

    {/* Content Section */}
    <VStack
     p={6}
     spacing={3}
     alignItems="start"
     h="180px"
     justifyContent="space-between"
    >
     <Text fontSize="lg" fontWeight="bold" color="gray.800" lineHeight="1.3">
      {title}
     </Text>

     <Text fontSize="sm" color="gray.600" lineHeight="1.5" textAlign="left">
      {description}
     </Text>
    </VStack>
   </Box>
  </Box>
 );
};
