"use client";
import { Box, VStack, Text, Flex, Container } from "@chakra-ui/react";

import {
 RECRUITMENT_EVENTS,
 RecruitmentEvent,
} from "@/utils/constants/recruitment-events";

export const RecruitmentTimeline = () => {
 return (
  <Container
   w="100%"
   maxW="container.md"
   py={{ base: 8, md: 16 }}
   px={{ base: 4, md: 8 }}
  >
   <VStack spacing={0} align="center">
    {/* Title */}
    <Text
     fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
     fontWeight="medium"
     color="black"
     textAlign="center"
     mb={{ base: 8, md: 12 }}
     fontFamily="Inter, sans-serif"
    >
     Timeline
    </Text>

    {/* Timeline Container */}
    <Box position="relative">
     {RECRUITMENT_EVENTS.map((event, index) => (
      <TimelineItem
       key={index}
       event={event}
       isFirst={index === 0}
       isLast={index === RECRUITMENT_EVENTS.length - 1}
      />
     ))}
    </Box>
   </VStack>
  </Container>
 );
};

interface TimelineItemProps {
 event: RecruitmentEvent;
 isFirst: boolean;
 isLast: boolean;
}

const TimelineItem = ({ event, isFirst, isLast }: TimelineItemProps) => {
 return (
  <Flex position="relative" pb={isLast ? 0 : 6} align="center">
   {/* Line from top to circle center (for non-first items) */}
   {!isFirst && (
    <Box
     position="absolute"
     left={{ base: "8px", md: "10px" }}
     top={0}
     bottom="50%"
     width="2px"
     bg="ctc.purple"
     transform="translateX(-50%)"
     zIndex={1}
    />
   )}

   {/* Line from circle center to bottom (for non-last items) */}
   {!isLast && (
    <Box
     position="absolute"
     left={{ base: "8px", md: "10px" }}
     top="50%"
     bottom={0}
     width="2px"
     bg="ctc.purple"
     transform="translateX(-50%)"
     zIndex={1}
    />
   )}

   {/* Circle */}
   <Box
    w={{ base: "16px", md: "20px" }}
    h={{ base: "16px", md: "20px" }}
    minW={{ base: "16px", md: "20px" }}
    borderRadius="full"
    bg="ctc.purple"
    position="relative"
    zIndex={2}
   />

   {/* Card */}
   <Box
    bg="white"
    borderRadius="lg"
    p={{ base: 4, md: 5 }}
    boxShadow="md"
    border="1px solid"
    borderColor="gray.100"
    ml={{ base: 6, md: 10 }}
    w={{ base: "240px", md: "320px" }}
    textAlign="center"
   >
    <Text fontSize={{ base: "xs", md: "sm" }} color="gray.500" mb={1}>
     {event.date}
    </Text>
    <Text
     fontSize={{ base: "md", md: "lg" }}
     fontWeight="semibold"
     color="black"
    >
     {event.title}
    </Text>
   </Box>
  </Flex>
 );
};
