import {
  Button,
  ButtonProps,
  Link as ChakraLink,
  Text,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";

export function ApplyButton(props: ButtonProps) {
  return (
    <ChakraLink
      as={Link}
      to="/apply"
    >
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
    </ChakraLink>
  );
}
