import {
  Button,
  ButtonProps,
  Link as ChakraLink,
  LinkProps,
  SystemStyleObject,
  Text,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";

import { buttonStyle } from "../../styles/shared";

interface ApplyButtonProps {
  handleClickLink?: VoidFunction;
  buttonProps?: ButtonProps;
  buttonSx?: SystemStyleObject;
  linkProps?: LinkProps;
}

export function ApplyButton({
  handleClickLink,
  buttonProps,
  buttonSx,
  linkProps,
}: ApplyButtonProps) {
  return (
    <ChakraLink
      as={Link}
      to="/apply"
      onClick={handleClickLink}
      {...linkProps}
    >
      <Button
        sx={{
          ...buttonStyle,
          ...buttonSx,
        }}
        variant={"ctc"}
        {...buttonProps}
      >
        <Text sx={{ fontWeight: 600, fontSize: "xl" }}>Apply</Text>
      </Button>
    </ChakraLink>
  );
}
