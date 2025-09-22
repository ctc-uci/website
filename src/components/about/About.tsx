import {
  Box,
  Center,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

import { headingStyle, imageStyle, pageStyle } from "../../styles/shared";
import { FadeInText_BottomUp } from "../animated/FadeInText_BottomUp";
import { Hero } from "../landing/hero/Hero";
import { SideSection } from "../section/SideSection";
import about from "/public/about.jpg";

export function About() {
  return (
    <Stack
      sx={pageStyle}
      spacing={0}
    >
      <Hero>
        <Stack
          borderRadius="lg"
          marginLeft={24}
        >
          <Text fontSize="xl">Nice to meet you!</Text>
          <Stack
            fontSize="6xl"
            width="5xl"
          >
            <Text>
              <Text>We are a collaborative development</Text>
              <Text>team at UC Irvine designing and </Text>
              <Text
                fontWeight={600}
                display={"inline"}
              >
                developing technology for social good.
              </Text>{" "}
            </Text>
          </Stack>
        </Stack>
      </Hero>
      <SideSection>
        <HStack spacing={180}>
          <FadeInText_BottomUp>
            <Text
              fontSize="7xl"
              lineHeight="92px"
            >
              Our
            </Text>
            <Text
              fontSize="7xl"
              color="ctc.purple"
              fontWeight={600}
              lineHeight="92px"
            >
              Mission
            </Text>
            <Text
              fontSize="md"
              width="45%"
              lineHeight="28px"
            >
              At Commit the Change, our mission is to build end-to-end,
              high-quality products for non-profit organizations, while
              empowering UC Irvine designers and developers to create technology
              with purpose.
            </Text>
          </FadeInText_BottomUp>
        </HStack>
      </SideSection>
      <SideSection>
        <HStack spacing={180}>
          <FadeInText_BottomUp>
            <Text
              fontSize="7xl"
              lineHeight="92px"
            >
              Our
            </Text>
            <Text
              fontSize="7xl"
              color="ctc.purple"
              fontWeight={600}
              lineHeight="92px"
            >
              History
            </Text>
            <Text
              fontSize="md"
              width="45%"
              lineHeight="28px"
            >
              Founded in 2020, Commit the Change started as a small group of
              undergraduate students with a shared love for coding and finding
              fulfillment through positive social impacts on their communities.
              <br />
              <br />
              After merging with Blueprint in 2021, Commit the Change is now an
              established student organization at UC Irvine with a team of
              skilled designers and developers.
            </Text>
          </FadeInText_BottomUp>
        </HStack>
      </SideSection>
    </Stack>
  );
}
