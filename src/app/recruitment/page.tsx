"use client";
import { VStack, Text, Box, Button, HStack } from "@chakra-ui/react";

import { Footer } from "@/utils/components";
import Hero from "@/utils/components/Hero";
import LookingForSection from "@/utils/components/PageRecruitment/LookingForSection";
import RecruitmentFAQ from "@/utils/components/PageRecruitment/RecruitmentFAQ";
import { RecruitmentTimeline } from "@/utils/components/PageRecruitment/RecruitmentTimeline";
import BreakText from "@/utils/components/TextUtils/BreakText";
import {
 RECRUITMENT_OPEN,
 DESIGNER_FORM_URL,
 DEVELOPER_FORM_URL,
} from "@/utils/constants/settings";

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
      <>
       <Text
        fontSize={{ base: "sm", md: "xl", lg: "2xl" }}
        paddingX={{ base: 3, md: 0 }}
        textAlign="center"
       >
        Applications are currently open, and will close{" "}
        <Text as="span" fontWeight="bold">
         Saturday, September 26th @ 11:59 PM
        </Text>
        .
       </Text>
       <Text
        fontSize={{ base: "sm", md: "xl", lg: "2xl" }}
        paddingX={{ base: 3, md: 0 }}
        textAlign="center"
       >
        We encourage everyone of all skill levels to apply!
       </Text>
       <HStack spacing={{ base: 3, md: 5 }} flexWrap="wrap" justify="center">
        <Button
         variant="purple"
         size="lg"
         as="a"
         href={DESIGNER_FORM_URL}
         target="_blank"
         rel="noopener noreferrer"
        >
         Designer Application
        </Button>
        <Button
         variant="purple"
         size="lg"
         as="a"
         href={DEVELOPER_FORM_URL}
         target="_blank"
         rel="noopener noreferrer"
        >
         Developer Application
        </Button>
       </HStack>
      </>
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
   <LookingForSection />
   <Box bg="white" w="100%">
    <RecruitmentTimeline />
   </Box>
   <RecruitmentFAQ />
   <Footer />
  </VStack>
 );
}
