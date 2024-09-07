import { Button, ButtonProps, Text } from "@chakra-ui/react";

export function ApplyButton(props: ButtonProps) {
  return (
    <Button
      sx={{
        paddingX: 8,
        paddingY: 2.5,
        ...props,
      }}
      variant={"ctc"}
    >
      <Text sx={{ fontWeight: 600, fontSize: "xl" }}>Apply</Text>
    </Button>
  );
}
