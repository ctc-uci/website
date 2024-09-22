import {
  Button,
  ButtonProps,
  Link as ChakraLink,
  Text,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";

import { buttonStyle } from "../../styles/shared";

interface LearnMoreButtonProps extends ButtonProps {
  variant?: "ctc" | "ctc.secondary";
}

export function LearnMoreButton({
  variant = "ctc.secondary",
}: LearnMoreButtonProps) {
  return (
    <ChakraLink
      as={Link}
      to={"/about"}
    >
      <Button
        variant={variant}
        sx={buttonStyle}
      >
        <Text sx={{ fontWeight: 600, fontSize: "xl" }}>Learn More</Text>
      </Button>
    </ChakraLink>
  );
}
