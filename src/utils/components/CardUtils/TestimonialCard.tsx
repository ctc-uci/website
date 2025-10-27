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

interface TestimonialCardProps {
 name: string;
 role: string;
 company: string;
 testimonial: string;
 image?: string;
}

export default function TestimonialCard({
 name,
 role,
 company,
 testimonial,
 image,
}: TestimonialCardProps) {
 const isMobile = useBreakpointValue({ base: true, md: false });

 return (
  <Box
   width="100%"
   maxWidth="800px"
   backgroundColor="white"
   borderRadius="16px"
   boxShadow="0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
   padding={isMobile ? 6 : 0}
   transition="all 0.2s ease-in-out"
  >
   {isMobile ? (
    // Mobile Layout: Avatar, Name, Role on top; Testimonial on bottom
    <VStack spacing={4} align="center">
     {/* Profile Section */}
     <VStack spacing={2} align="center">
      <Avatar size="xl" name={name} src={image} bg="gray.200" />
      <VStack spacing={0} align="center">
       <Text
        fontSize="md"
        fontWeight="bold"
        color="gray.800"
        textAlign="center"
       >
        {name}
       </Text>
       <Text fontSize="sm" color="gray.600" textAlign="center">
        <Text as="span" fontWeight="semibold">
         {company}
        </Text>{" "}
        | {role}
       </Text>
      </VStack>
     </VStack>

     {/* Testimonial Text */}
     <Text fontSize="md" color="gray.700" lineHeight="1.6" textAlign="center">
      {testimonial}
     </Text>
    </VStack>
   ) : (
    // Desktop Layout: Horizontal layout with rectangular image
    <HStack spacing={6} align="start">
     {/* Profile Image */}
     <Box flexShrink={0}>
      <Image
       src={image}
       alt={name}
       borderLeftRadius="md"
       objectFit="cover"
       width="150px"
       height="200px"
      />
     </Box>

     {/* Text Content */}
     <VStack spacing={2} align="start" flex={1}>
      {/* Name */}
      <Text fontSize="lg" fontWeight="bold" color="gray.800">
       {name}
      </Text>

      {/* Company | Role */}
      <Text fontSize="md" color="gray.600">
       <Text as="span" fontWeight="semibold">
        {company}
       </Text>{" "}
       | {role}
      </Text>

      {/* Testimonial */}
      <Text fontSize="md" color="gray.700" lineHeight="1.6">
       {testimonial}
      </Text>
     </VStack>
    </HStack>
   )}
  </Box>
 );
}
