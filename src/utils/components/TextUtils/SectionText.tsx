import { FadeInUp } from "../AnimationUtils";
import { Stack, Text, Hide, Show, Spacer } from "@chakra-ui/react";

type SectionTextProps = {
 topText: string;
 bottomText: string;
};

export default function SectionText({ topText, bottomText }: SectionTextProps) {
 return (
  <Stack
   direction={{ md: "column" }}
   alignItems={{ base: "center", md: "start" }}
   spacing={0}
  >
   <Hide below="md">
    <FadeInUp delay={0.1}>
     <Text fontSize="6xl" lineHeight="1.5" letterSpacing="-0.025rem">
      {topText}
     </Text>
    </FadeInUp>
    <FadeInUp delay={0.2}>
     <Text
      fontSize="7xl"
      fontWeight="bold"
      textColor="ctc.purple"
      lineHeight="1"
      letterSpacing="-0.025rem"
     >
      {bottomText}
     </Text>
    </FadeInUp>
   </Hide>

   <Show below="md">
    <Text fontSize="5xl" lineHeight="1.5" letterSpacing="-0.025rem">
     {topText}
    </Text>
    <Spacer h={4} w="3" />
    <Text
     fontSize="5xl"
     fontWeight="bold"
     textColor="ctc.purple"
     lineHeight="1"
     letterSpacing="-0.025rem"
    >
     {bottomText}
    </Text>
   </Show>
  </Stack>
 );
}
