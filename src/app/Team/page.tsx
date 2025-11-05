"use client";
import { VStack, Text, Box, Grid, GridItem, Image } from "@chakra-ui/react";

import { AnimatedTyping } from "@/utils/components/AnimationUtils/AnimatedTyping";
import { Footer } from "@/utils/components/Footer";
import MeetTheTeam from "@/utils/components/PageTeam/MeetTheTeam";
import ParallaxHero from "@/utils/components/ParallaxHero";

export default function TeamPage() {
 const textContent = {
  topText: "Hello! We are",
  mainText: "CTC",
  bottomText: "'25 - '26",
 };
 const imageSrc = "/assets/about.jpeg";
 const imageAlt = "lol";
 return (
  <VStack spacing={0}>
   <ParallaxHero>
    {" "}
    <Grid
     templateColumns={{ base: "1fr", md: "1fr 2fr" }}
     gap={{ base: 6, md: 12 }}
     w="100%"
     maxW="1200px"
     mx="auto"
     px={{ base: 4, md: 8 }}
     alignItems="center"
    >
     {/* Text Content - Left side on desktop, top on mobile */}
     <GridItem
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems={{ base: "center", md: "flex-start" }}
      textAlign={{ base: "center", md: "left" }}
      order={{ base: 2, md: 1 }}
     >
      {textContent.topText && (
       <Text
        fontSize={{ base: "lg", md: "xl" }}
        color="gray.700"
        mb={2}
        fontWeight="400"
       >
        {textContent.topText}
       </Text>
      )}
      <Text
       fontSize={{ base: "4xl", md: "6xl", lg: "7xl" }}
       fontWeight="bold"
       color="black"
       lineHeight="1.1"
       mb={2}
      >
       {textContent.mainText}
      </Text>
      {textContent.bottomText && (
       <Text
        fontSize={{ base: "4xl", md: "6xl", lg: "7xl" }}
        color="gray.700"
        fontWeight="bold"
        as="span"
       >
        <AnimatedTyping text={textContent.bottomText} speed={200} />
       </Text>
      )}
     </GridItem>

     {/* Image Content - Right side on desktop, bottom on mobile */}
     <GridItem
      display="flex"
      justifyContent="center"
      alignItems="center"
      order={{ base: 1, md: 2 }}
     >
      <Box
       position="relative"
       w={{ base: "100%", md: "100%" }}
       h={{ base: "300px", md: "600px", lg: "700px" }}
       borderRadius="2xl"
       overflow="hidden"
       display="flex"
       alignItems="center"
       justifyContent="center"
      >
       <Image
        loading="eager"
        src={imageSrc}
        alt={imageAlt}
        borderRadius="inherit"
        style={{ objectFit: "contain" }}
       />
      </Box>
     </GridItem>
    </Grid>
   </ParallaxHero>
   <MeetTheTeam />
   <Footer />
  </VStack>
 );
}
