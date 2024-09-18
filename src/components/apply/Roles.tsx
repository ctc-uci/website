import {
  Button,
  Center,
  Link as ChakraLink,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

import { BsCodeSlash, BsPen } from "react-icons/bs";
import { Link } from "react-router-dom";

import { headingStyle } from "../../styles/shared";
import { MenuBar } from "./MenuBar";
import designer from "/public/designer.svg";
import developer from "/public/developer.svg";

export function Roles() {
  return (
    <Stack spacing={10}>
      <Heading sx={headingStyle}>Roles</Heading>

      <Stack
        sx={{
          flexDirection: { base: "column", lg: "row" },
          alignItems: "center",
        }}
        spacing={{ base: 8, lg: 16 }}
      >
        <MenuBar>
          <RoleCard
            role={"Designer"}
            description={`Designers will work in a cross functional team, using Figma and the design process (research, wireframing, prototyping, usability testing) to create innovative designs for non-profit organizations.`}
            image={designer}
            buttonIcon={<BsPen />}
            href={"/"}
          />
        </MenuBar>

        <MenuBar>
          <RoleCard
            role={"Developer"}
            description={`Developers will utilize frontend technologies (React, Javascript/Typescript, HTML, and CSS/SASS) and backend technologies (APIs, databases, & middleware) to implement real-life applications.`}
            image={developer}
            buttonIcon={<BsCodeSlash />}
            href={"/"}
          />
        </MenuBar>
      </Stack>
    </Stack>
  );
}

interface RoleCardProps {
  role: string;
  description: string;
  image: string;
  buttonIcon: React.ReactElement;
  href: string;
}

function RoleCard({
  role,
  description,
  image,
  buttonIcon,
  href,
}: RoleCardProps) {
  return (
    <>
      <Stack
        spacing={8}
        sx={{
          maxWidth: "700",
          padding: 8,
          bgColor: "ctc.white",
          borderBottomRadius: "lg",
          boxShadow: "lg",
        }}
      >
        <Center
          sx={{
            width: "full",
            height: { base: 200, xs: 300 },
            borderColor: "ctc.purple",
            borderWidth: "0.5px",
            borderRadius: "lg",
            backgroundColor: "ctc.magnolia",
          }}
        >
          <Image
            src={image}
            alt={`svg icon of ${role}`}
            sx={{ maxWidth: "80%", maxHeight: "80%" }}
          />
        </Center>
        <Stack spacing={2}>
          <Text sx={{ fontWeight: "semibold", fontSize: "xl" }}>{role}</Text>
          <Text>{description}</Text>
        </Stack>
        <ChakraLink
          as={Link}
          href={href}
        >
          <Button
            variant={"ctc"}
            leftIcon={buttonIcon}
            sx={{ width: "fit-content", marginLeft: "auto", marginTop: "auto" }}
          >
            Apply as {role}
          </Button>
        </ChakraLink>
      </Stack>
    </>
  );
}
