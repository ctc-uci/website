"use client";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Text,
  VStack,
} from "@chakra-ui/react";

import { QUESTIONS } from "@/utils/constants/faq-data";

export default function RecruitmentFAQ() {
  return (
    <VStack
      width="100%"
      maxWidth="1200px"
      paddingX={{ base: 6, md: 12, lg: 20 }}
      paddingY={{ base: 12, md: 20 }}
      spacing={6}
      alignSelf="center"
    >
      <VStack spacing={3} textAlign="center">
        <Text fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }} fontWeight="medium">
          Frequently Asked Questions
        </Text>
        <Text fontSize={{ base: "sm", md: "md" }} color="gray.600">
          Couldn&apos;t find your answer? Email us at ctc@uci.edu, or reach out
          to any of our socials.
        </Text>
      </VStack>
      <Accordion allowToggle width="100%">
        {QUESTIONS.map((item, index) => (
          <AccordionItem key={index}>
            <AccordionButton
              paddingY={5}
              _hover={{ backgroundColor: "transparent" }}
            >
              <Box flex="1" textAlign="left">
                <Text fontSize={{ base: "sm", md: "md" }} fontWeight="medium">
                  {item.question}
                </Text>
              </Box>
              <AccordionIcon color="ctc.purple" />
            </AccordionButton>
            <AccordionPanel paddingBottom={5}>
              <Text
                fontSize={{ base: "sm", md: "md" }}
                color="gray.600"
                whiteSpace="pre-line"
              >
                {item.answer}
              </Text>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </VStack>
  );
}
