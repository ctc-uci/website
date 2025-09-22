import { HStack, Image, Stack, Text, VStack } from "@chakra-ui/react";

import { pageStyle } from "../../styles/shared";
import { Team } from "../about/team/Team";
import { Hero } from "../landing/hero/Hero";
import about from "/public/about.jpg";

export function TeamPage() {
  return (
    <Stack
      sx={pageStyle}
      spacing={0}
    >
      <Hero>
        <VStack>
          <HStack
            spacing={180}
            marginLeft={24}
          >
            <VStack alignItems="flex-start">
              <Text fontSize="xl">Hello! We are</Text>
              <Text
                fontSize="7xl"
                fontWeight={500}
                lineHeight="92px"
              >
                CTC
              </Text>
              <Text
                fontSize="7xl"
                fontWeight={500}
                lineHeight="92px"
              >
                `25-`26
              </Text>
            </VStack>
            <Image
              src={about}
              alt="team"
              width={600}
              rounded="lg"
            />
          </HStack>
        </VStack>
      </Hero>
      <Team />
    </Stack>
  );
}
