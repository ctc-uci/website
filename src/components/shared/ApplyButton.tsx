import {
  Button,
  ButtonProps,
  Link as ChakraLink,
  Text,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";

import { buttonStyle } from "../../styles/shared";

interface ApplyButtonProps extends ButtonProps {
  handleClickLink?: VoidFunction;
}

export function ApplyButton({ handleClickLink, ...rest }: ApplyButtonProps) {
  return (
    <ChakraLink
      as={Link}
      to="/apply"
      onClick={handleClickLink}
    >
      <Button
        sx={{
          ...buttonStyle,
          ...rest,
        }}
        variant={"ctc"}
      >
        <Text sx={{ fontWeight: 600, fontSize: "xl" }}>Apply</Text>
      </Button>
    </ChakraLink>
  );
}
