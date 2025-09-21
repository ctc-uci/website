import { Heading, Stack, Text, VStack, Wrap } from "@chakra-ui/react";

import { headingStyle } from "../../styles/shared";

const STATS = [
  {
    stat: "17",
    text: "Partner non-profit organizations",
  },
  {
    stat: "2000+",
    text: "Cumulative hours volunteered",
  },
  {
    stat: "70+",
    text: "Designers and developers",
  },
];

export function Stats() {
  return (
    <Stack
      spacing={10}
      sx={{ paddingBottom: 16 }}
    >
      <Heading sx={headingStyle}>By the Numbers</Heading>
      <Wrap
        spacing={{ base: 5, lg: 10 }}
        justify={"center"}
      >
        {STATS.map((stat) => (
          <VStack
            key={stat.stat}
            bg="ctc.purple"
            spacing={2}
            sx={{
              paddingX: { base: 10, md: 20 },
              paddingY: 4,
              textAlign: "center",
              borderRadius: "lg",
              width: { base: "100%", sm: 500, md: 350, mdlg: 350, xl: 400 },
            }}
          >
            <Text
              sx={{
                fontSize: "4xl",
                fontWeight: "semibold",
                lineHeight: "normal",
                color: "ctc.gray",
              }}
            >
              {stat.stat}
            </Text>
            <Text
              sx={{
                fontSize: "2xl",
                lineHeight: "normal",
                color: "ctc.gray",
                marginY: "auto",
              }}
            >
              {stat.text}
            </Text>
          </VStack>
        ))}
      </Wrap>
    </Stack>
  );
}
