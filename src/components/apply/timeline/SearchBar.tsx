import { SearchIcon } from "@chakra-ui/icons";
import { HStack, Icon, Text } from "@chakra-ui/react";

export function SearchBar() {
  return (
    <HStack
      sx={{
        width: { base: "100%", md: "50%" },
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
  );
}
