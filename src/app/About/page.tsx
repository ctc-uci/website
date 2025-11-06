"use client";
import { VStack, Text } from "@chakra-ui/react";

import { AnimatedTyping } from "@/utils/components";
import { Footer } from "@/utils/components/Footer";
import { Gallery } from "@/utils/components/Gallery";
import Hero from "@/utils/components/Hero";
import { ValuesSection } from "@/utils/components/PageAbout";
import HistorySection from "@/utils/components/PageAbout/HistorySection";
import MissionSection from "@/utils/components/PageAbout/MissionSection";
import BreakText from "@/utils/components/TextUtils/BreakText";
import { photos } from "@/utils/constants/GallaryPhotos";

export default function AboutPage() {
 return (
  <VStack spacing={0}>
   <Hero>
    <VStack alignItems="start" spacing={0} zIndex={1}>
     <Text
      as="span"
      fontSize={{ base: "xl", md: "3xl", xl: "4xl" }}
      pl={{ base: 4, sm: 0 }}
      color="black"
      fontFamily="Inter, sans-serif"
     >
      <AnimatedTyping text="Nice to meet you!" speed={80} />
     </Text>

     <Text
      fontSize={{ base: "2xl", md: "4xl", xl: "6xl" }}
      pl={{ base: 4, sm: 0 }}
      color="black"
      fontFamily="Inter, sans-serif"
      lineHeight="1.1"
     >
      We are a collaborative development
      <BreakText />
      team at UC Irvine designing and
      <BreakText />
      developing{" "}
      <Text as="span" fontWeight="bold">
       technology
      </Text>{" "}
      for{" "}
      <Text as="span" fontWeight="bold">
       social good
      </Text>
      .
     </Text>
    </VStack>
   </Hero>

   <MissionSection />
   <HistorySection />
   <ValuesSection />
   <Gallery images={photos} />
   <Footer />
  </VStack>
 );
}
