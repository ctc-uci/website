import { Heading, Stack, Text, VStack, Wrap } from "@chakra-ui/react";

import { headingStyle } from "../../styles/shared";

const STATS = [
  {
    stat: "14",
    text: "Partner non-profit organizations",
  },
  {
    stat: "2000+",
    text: "Cumulative hours volunteered",
  },
  {
    stat: "4000+",
    text: "Hours on League of Legends",
  },
];

export function Stats() {
  return (
    <Stack
      spacing={10}
      sx={{ paddingY: 16 }}
    >
      <Heading sx={headingStyle}>By the Numbers</Heading>
      <Wrap
        spacing={{ base: 5, lg: 10 }}
        sx={{ marginX: "auto", justifyContent: "center" }}
      >
        {STATS.map((stat, index) => (
          <VStack
            key={stat.stat}
            bg="ctc.purple"
            spacing={2}
            sx={{
              paddingX: { base: 10, md: 20 },
              paddingY: 4,
              textAlign: "center",
              borderRadius: "lg",
              // the below is bad styling!
              width: { base: "100%", xs: 350, mdlg: 375 },
              marginLeft: {
                base: "auto",
                mdlg: index === 1 ? "unset" : "auto",
              },
              marginRight: {
                base: "auto",
                mdlg: index === 0 ? "unset" : "auto",
              },
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
