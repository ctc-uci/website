import { Heading, HStack, Stack, Text, VStack } from "@chakra-ui/react";

import { headingStyle } from "../../../styles/shared";
import { MenuBar } from "../MenuBar";
import { ItemLine } from "./ItemLine";
import { SearchBar } from "./SearchBar";
import { TIMELINE_EVENTS } from "./timeline-data";

export function Timeline() {
  return (
    <Stack spacing={10}>
      <Stack spacing={5}>
        <Heading sx={headingStyle}>Application Timeline</Heading>
        <Text sx={{ fontSize: "lg" }}>
          All applicants will follow the same process, regardless of role
          applied for.
        </Text>
      </Stack>

      <Stack
        spacing={2.5}
        sx={{ alignItems: { base: "unset", md: "center" } }}
      >
        <Text
          as={"span"}
          sx={{
            display: "inline-flex",
            fontSize: "xl",
            color: "ctc.purple",
            flexWrap: "wrap",
          }}
        >
          <Text sx={{ fontWeight: "bold" }}>Applications Open:&nbsp;</Text>
          <Text>Sunday, Sept 22nd @ 12:00 AM</Text>
        </Text>
        <Text
          as={"span"}
          sx={{
            display: "inline-flex",
            fontSize: "xl",
            color: "ctc.purple",
            flexWrap: "wrap",
          }}
        >
          <Text sx={{ fontWeight: "bold" }}>Applications Close:&nbsp;</Text>
          <Text>Sunday, Sept 29th @ 11:59 PM</Text>
        </Text>
      </Stack>

      <MenuBar>
        <VStack
          sx={{
            boxShadow: "lg",
            backgroundColor: "ctc.white",
            paddingX: { base: 4, md: 12 },
            paddingY: 10,
            borderBottomRadius: "lg",
          }}
          spacing={10}
        >
          <SearchBar />

          <Stack spacing={8}>
            {TIMELINE_EVENTS.map((event) => (
              <HStack
                key={event.event}
                sx={{ alignItems: "top" }}
                spacing={{ base: 5, md: 10 }}
              >
                <ItemLine event={event} />

                <Stack spacing={5}>
                  <Stack spacing={1}>
                    <Text
                      sx={{
                        lineHeight: "normal",
                        ...(event.majorEvent
                          ? { fontSize: "3xl", fontWeight: "bold" }
                          : {
                              fontSize: "2xl",
                              color: "ctc.purple",
                            }),
                      }}
                    >
                      {event.date}
                    </Text>

                    <Text sx={{ fontSize: "2xl", lineHeight: "normal" }}>
                      {event.event}
                    </Text>
                  </Stack>

                  {/* rendered, even if empty */}
                  <Text sx={{ fontSize: "lg" }}>{event.description}</Text>

                  {event.importantDetail ? (
                    <Text
                      sx={{
                        fontSize: "lg",
                        fontWeight: "semibold",
                        color: "ctc.purple",
                      }}
                    >
                      {event.importantDetail}
                    </Text>
                  ) : null}
                </Stack>
              </HStack>
            ))}
          </Stack>
        </VStack>
      </MenuBar>
    </Stack>
  );
}
