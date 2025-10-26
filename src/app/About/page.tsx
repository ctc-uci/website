"use client";
import { VStack, Text } from "@chakra-ui/react";
import Hero from "@/utils/components/Hero";
import { ValuesSection } from "@/utils/components";

export default function AboutPage() {
 return (
  <VStack spacing={0}>
   <Hero>
    <VStack alignItems="start" spacing={0} zIndex={1}>
     <Text fontSize="4xl" color="black" fontFamily="Inter, sans-serif">
      Nice to meet you!
     </Text>

     <Text
      fontSize="6xl"
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

   <ValuesSection />
  </VStack>
 );
}
