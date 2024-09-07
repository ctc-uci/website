import { Heading, SimpleGrid, Stack, Text, VStack } from "@chakra-ui/react";

const STATS = [
  {
    stat: "14",
    text: "Partner non-profit organizations",
  },
  {
    stat: "2000+",
    text: "Total hours volunteered",
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
      <Heading sx={{ fontSize: "4xl", color: "ctc.purple" }}>
        By the Numbers
      </Heading>
      <SimpleGrid
        columns={{ base: 1, xl: 3 }}
        spacing={10}
        sx={{ marginX: "auto" }}
      >
        {STATS.map((stat) => (
          <VStack
            key={stat.stat}
            bg="ctc.purple"
            spacing={2}
            sx={{
              paddingX: 20,
              paddingY: 4,
              textAlign: "center",
              borderRadius: "lg",
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
      </SimpleGrid>
    </Stack>
  );
}
