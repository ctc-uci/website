import { SearchIcon } from "@chakra-ui/icons";
import { Heading, HStack, Icon, Stack, Text, VStack } from "@chakra-ui/react";

import { headingStyle } from "../../styles/shared";
import { MenuBar } from "./MenuBar";

export function Timeline() {
  return (
    <Stack spacing={10}>
      <Stack spacing={5}>
        <Heading sx={headingStyle}>Application Timeline</Heading>
        <Text sx={{ fontSize: "lg", color: "ctc.text" }}>
          All applicants will follow the same process, regardless of role
          applied for.
        </Text>
      </Stack>

      <VStack spacing={2.5}>
        <Text
          as={"span"}
          sx={{ display: "inline-flex", fontSize: "xl", color: "ctc.purple" }}
        >
          <Text sx={{ fontWeight: "bold" }}>Applications Open:&nbsp;</Text>
          <Text>Sunday, Sept 22nd @ 12 AM</Text>
        </Text>
        <Text
          as={"span"}
          sx={{ display: "inline-flex", fontSize: "xl", color: "ctc.purple" }}
        >
          <Text sx={{ fontWeight: "bold" }}>Applications Close:&nbsp;</Text>
          <Text>Sunday, Sept 29th @ 11:59 PM</Text>
        </Text>
      </VStack>

      <MenuBar>
        <VStack
          sx={{
            boxShadow: "lg",
            backgroundColor: "ctc.white",
            paddingX: 12,
            paddingY: 10,
          }}
        >
          <HStack
            sx={{
              width: "50%",
              backgroundColor: "ctc.gray",
              borderRadius: 20,
              paddingX: 10,
              paddingY: 2.5,
            }}
            spacing={4}
          >
            <Icon
              as={SearchIcon}
              sx={{ color: "#8E84CB" }}
            />
            <Text sx={{ fontSize: "lg", color: "#8E84CB" }}>
              What should I expect?
            </Text>
          </HStack>
        </VStack>
      </MenuBar>
    </Stack>
  );
}
