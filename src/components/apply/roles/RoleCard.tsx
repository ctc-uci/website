import {
  Button,
  Center,
  Link as ChakraLink,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";

import { buttonStyle } from "../../../styles/shared";

interface RoleCardProps {
  role: string;
  description: string;
  image: string;
  buttonIcon: React.ReactElement;
  href: string;
}

export function RoleCard({
  role,
  description,
  image,
  buttonIcon,
  href,
}: RoleCardProps) {
  return (
    <Stack
      spacing={8}
      sx={{
        maxWidth: "700",
        padding: 8,
        bgColor: "ctc.white",
        borderBottomRadius: "lg",
        boxShadow: "lg",
        flexGrow: 1,
      }}
    >
      <Center
        sx={{
          width: "full",
          height: { base: 200, xs: 300 },
          borderColor: "ctc.purple",
          borderWidth: "0.5px",
          borderRadius: "lg",
          backgroundColor: "#F5F2FD",
        }}
      >
        <Image
          src={image}
          alt={`svg icon of ${role}`}
          sx={{ maxWidth: "80%", maxHeight: "80%" }}
        />
      </Center>

      <Stack
        spacing={2}
        sx={{ marginBottom: "auto" }}
      >
        <Text sx={{ fontWeight: "semibold", fontSize: "xl" }}>{role}</Text>
        <Text>{description}</Text>
      </Stack>

      <ChakraLink
        as={Link}
        href={href}
        sx={{ width: "fit-content", marginLeft: "auto", marginTop: "auto" }}
      >
        <Button
          variant={"ctc"}
          leftIcon={buttonIcon}
          sx={buttonStyle}
        >
          Apply as {role}
        </Button>
      </ChakraLink>
    </Stack>
  );
}
