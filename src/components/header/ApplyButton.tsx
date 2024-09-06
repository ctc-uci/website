import { Button, Text } from "@chakra-ui/react";

export function ApplyButton() {
  return (
    <Button
      sx={{
        paddingX: 8,
        paddingY: 2.5,
      }}
      variant={"ctc"}
      width={{ base: "75%", md: "unset" }}
    >
      <Text sx={{ fontWeight: 600, fontSize: "xl" }}>Apply</Text>
    </Button>
  );
}
