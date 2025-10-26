"use client";
import { VStack, Text } from "@chakra-ui/react";
import Hero from "@/utils/components/Hero";
import { RECRUITMENT_OPEN } from "@/utils/Settings";
export default function RecruitmentPage() {
 return (
  <VStack spacing={0}>
   <Hero>
    <VStack alignItems="center" spacing={5} zIndex={1}>
     <Text fontSize="7xl" fontWeight="semibold" fontFamily="Inter, sans-serif">
      Recruitment
     </Text>
     {RECRUITMENT_OPEN ? (
      <Text fontSize="xl" textAlign="center">
       Applications are currently open!
      </Text>
     ) : (
      <Text fontSize="xl" textAlign="center">
       Applications are currently closed and will reopen in the Fall. <br />{" "}
       Follow us on social media to stay up to date!
      </Text>
     )}
    </VStack>
   </Hero>
  </VStack>
 );
}
