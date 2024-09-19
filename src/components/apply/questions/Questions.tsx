import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";

import { headingStyle } from "../../../styles/shared";
import { QUESTIONS } from "./questions-data";

export function Questions() {
  return (
    <Stack
      spacing={8}
      sx={{ paddingBottom: 16 }}
    >
      <Stack spacing={5}>
        <Heading sx={headingStyle}>Questions?</Heading>
        <Text sx={{ fontSize: "lg" }}>
          Couldn’t find your answer? Email us at ctc@uci.edu, or reach out to us
          on any of our socials.
        </Text>
      </Stack>

      <Accordion allowToggle>
        {QUESTIONS.map((question) => (
          <AccordionItem key={question.question}>
            <AccordionButton
              sx={{
                display: "flex",
                gap: 5,
                paddingY: 3,
              }}
            >
              <AccordionIcon
                sx={{ color: "ctc.purple", width: 6, height: 6 }}
              />

              <Text sx={{ fontSize: "lg", textAlign: "left" }}>
                {question.question}
              </Text>
            </AccordionButton>
            <AccordionPanel sx={{ whiteSpace: "pre-wrap", paddingBottom: 6 }}>
              <Text sx={{ fontSize: "md", lineHeight: 4 }}>
                {question.answer}
              </Text>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Stack>
  );
}
