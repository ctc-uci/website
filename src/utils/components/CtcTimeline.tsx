"use client";
import { Box, VStack, Text, Button, Flex, Container } from "@chakra-ui/react";

interface TimelineEvent {
 date: string;
 title: string;
 hasButton?: boolean;
 buttonText?: string;
}

const CtcTimeline = () => {
 const designEvents: TimelineEvent[] = [
  {
   date: "November 2025",
   title: "Design Bootcamp",
  },
  {
   date: "December - January 2026",
   title: "Research & Lo-fis Wireframes",
  },
  {
   date: "January - March 2026",
   title: "Mid-fi & Hi-fi Wireframes",
  },
  {
   date: "March - April 2026",
   title: "User Testing & Dev Handoff",
  },
 ];

 const developmentEvents: TimelineEvent[] = [
  {
   date: "November 2025",
   title: "Developer Bootcamp",
  },
  {
   date: "December - January 2025",
   title: "SQL Tables & Database",
  },
  {
   date: "February - May 2026",
   title: "Coding & Debugging",
  },
 ];

 return (
  <Container maxW="600px" py={8}>
   <VStack spacing={0} align="stretch">
    {/* Title */}
    <Text
     fontSize="2xl"
     fontWeight="bold"
     color="black"
     textAlign="center"
     mb={8}
    >
     A year in CTC
    </Text>

    {/* Timeline Container */}
    <Box position="relative" minH="700px">
     {/* Central Timeline Line */}
     <Box
      position="absolute"
      left="50%"
      top="0"
      bottom="0"
      width="3px"
      bg="ctc.purple"
      transform="translateX(-50%)"
      zIndex={1}
     />

     {/* Timeline Content */}
     <Box position="relative" zIndex={2}>
      {/* Top Center Event */}
      <Flex justify="center" mb={8}>
       <TimelineCard
        event={{
         date: "October 2025",
         title: "Recruitment Process",
         hasButton: true,
         buttonText: "Learn More",
        }}
        isCenter={true}
       />
      </Flex>

      {/* Main Timeline Sections */}
      <Flex justify="space-between" align="flex-start" gap={4} mb={8}>
       {/* Left Side - Design */}
       <Box flex="1" maxW="240px">
        <Text
         fontSize="lg"
         fontWeight="bold"
         color="black"
         mb={6}
         textAlign="right"
        >
         Design
        </Text>
        <VStack spacing={6} align="stretch">
         {designEvents.map((event, index) => (
          <TimelineCard
           key={index}
           event={event}
           side="left"
           isCenter={false}
          />
         ))}
        </VStack>
       </Box>

       {/* Right Side - Development */}
       <Box flex="1" maxW="240px">
        <Text
         fontSize="lg"
         fontWeight="bold"
         color="black"
         mb={6}
         textAlign="left"
        >
         Development
        </Text>
        <VStack spacing={6} align="stretch">
         {developmentEvents.map((event, index) => (
          <TimelineCard
           key={index}
           event={event}
           side="right"
           isCenter={false}
          />
         ))}
        </VStack>
       </Box>
      </Flex>

      {/* Bottom Center Event */}
      <Flex justify="center">
       <TimelineCard
        event={{
         date: "June 2026",
         title: "Deployment",
        }}
        isCenter={true}
       />
      </Flex>
     </Box>
    </Box>
   </VStack>
  </Container>
 );
};

interface TimelineCardProps {
 event: TimelineEvent;
 side?: "left" | "right";
 isCenter: boolean;
}

const TimelineCard = ({ event, side, isCenter }: TimelineCardProps) => {
 if (isCenter) {
  return (
   <Box position="relative">
    {/* Event Card */}
    <Box
     bg="purple.100"
     borderRadius="md"
     p={4}
     boxShadow="sm"
     maxW="200px"
     mx="auto"
    >
     <Text fontSize="xs" color="gray.600" mb={1}>
      {event.date}
     </Text>
     <Text
      fontSize="sm"
      fontWeight="bold"
      color="black"
      mb={event.hasButton ? 3 : 0}
     >
      {event.title}
     </Text>
     {event.hasButton && (
      <Button
       bg="ctc.purple"
       color="white"
       size="xs"
       fontSize="xs"
       _hover={{ bg: "purple.700" }}
       _active={{ bg: "purple.800" }}
      >
       {event.buttonText}
      </Button>
     )}
    </Box>
   </Box>
  );
 }

 return (
  <Box position="relative" display="flex" alignItems="center">
   {/* Connecting Line */}
   <Box
    position="absolute"
    top="50%"
    width="80px"
    height="2px"
    bg="ctc.purple"
    zIndex={0}
    transform="translateY(-50%)"
    {...(side === "left" ? { left: "50%" } : { right: "50%" })}
   />

   {/* Event Card */}
   <Box
    bg="purple.100"
    borderRadius="md"
    p={4}
    boxShadow="sm"
    maxW="180px"
    ml={side === "left" ? "auto" : "0"}
    mr={side === "right" ? "auto" : "0"}
    position="relative"
    zIndex={1}
   >
    <Text fontSize="xs" color="gray.600" mb={1}>
     {event.date}
    </Text>
    <Text
     fontSize="sm"
     fontWeight="bold"
     color="black"
     mb={event.hasButton ? 3 : 0}
    >
     {event.title}
    </Text>
    {event.hasButton && (
     <Button
      bg="ctc.purple"
      color="white"
      size="xs"
      fontSize="xs"
      _hover={{ bg: "purple.700" }}
      _active={{ bg: "purple.800" }}
     >
      {event.buttonText}
     </Button>
    )}
   </Box>
  </Box>
 );
};

export default CtcTimeline;
