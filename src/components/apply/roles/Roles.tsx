import { Heading, SimpleGrid, Stack } from "@chakra-ui/react";

import { BsCodeSlash, BsPen } from "react-icons/bs";

import { headingStyle } from "../../../styles/shared";
import { MenuBar } from "../MenuBar";
import { RoleCard } from "./RoleCard";
import designer from "/public/designer.svg";
import developer from "/public/developer.svg";

export function Roles() {
  return (
    <Stack spacing={10}>
      <Heading sx={headingStyle}>Roles</Heading>

      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, lg: 16 }}
        sx={{ marginX: "auto" }}
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
      </SimpleGrid>
    </Stack>
  );
}
