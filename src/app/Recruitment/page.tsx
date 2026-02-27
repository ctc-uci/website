"use client";
import { VStack, Text } from "@chakra-ui/react";

import { Footer } from "@/utils/components";
import Hero from "@/utils/components/Hero";
import { RecruitmentTimeline } from "@/utils/components/PageRecruitment/RecruitmentTimeline";
import BreakText from "@/utils/components/TextUtils/BreakText";
import { RECRUITMENT_OPEN } from "@/utils/constants/Settings";

export default function RecruitmentPage() {
 return (
  <VStack spacing={0}>
   <Hero>
    <VStack alignItems="center" spacing={{ base: 3, md: 5 }} zIndex={1}>
     <Text
      fontSize={{ base: "4xl", md: "6xl", lg: "7xl" }}
      fontWeight="semibold"
      fontFamily="Inter, sans-serif"
     >
      Recruitment
     </Text>
     {RECRUITMENT_OPEN ? (
      <Text
       fontSize={{ base: "sm", md: "xl", lg: "2xl" }}
       paddingX={{ base: 3, md: 0 }}
       textAlign="center"
      >
       Applications are currently open!
      </Text>
     ) : (
      <Text
       fontSize={{ base: "sm", md: "xl", lg: "2xl" }}
       paddingX={{ base: 3, md: 0 }}
       textAlign="center"
      >
       Applications are currently closed and will reopen in the Fall.{" "}
       <BreakText /> Follow us on{" "}
       <a
        href="https://www.instagram.com/ctc.uci/"
        target="_blank"
        rel="noopener noreferrer"
       >
        <Text
         as="span"
         color="ctc.purple"
         textDecoration="underline"
         fontWeight="bold"
         _hover={{ color: "purple.500" }}
         transition="color 0.3s ease-out"
        >
         social media
        </Text>
       </a>{" "}
       to stay up to date!
      </Text>
     )}
    </VStack>
   </Hero>
   <RecruitmentTimeline />
   <Footer />
  </VStack>
 );
}
