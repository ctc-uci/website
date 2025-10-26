"use client";
import { VStack, Text } from "@chakra-ui/react";
import { Footer } from "@/utils/components/Footer";
import Hero from "@/utils/components/Hero";
import { AnimatedTyping, ValuesSection } from "@/utils/components";
import MissionSection from "@/utils/components/PageAbout/MissionSection";
import HistorySection from "@/utils/components/PageAbout/HistorySection";

export default function AboutPage() {
 return (
  <VStack spacing={0}>
   <Hero>
    <VStack alignItems="start" spacing={0} zIndex={1}>
     <Text
      as="span"
      fontSize={{ base: "xl", md: "3xl", xl: "4xl" }}
      color="black"
      fontFamily="Inter, sans-serif"
     >
      <AnimatedTyping text="Nice to meet you!" speed={90} />
     </Text>

     <Text
      fontSize={{ base: "2xl", md: "4xl", xl: "6xl" }}
      color="black"
      fontFamily="Inter, sans-serif"
      lineHeight="1.1"
     >
      We are a collaborative development
      <br />
      team at UC Irvine designing and
      <br />
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
   <Footer />
  </VStack>
 );
}
