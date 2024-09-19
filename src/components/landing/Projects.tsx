import { Button, Link as ChakraLink, Heading, Stack } from "@chakra-ui/react";

import { Link } from "react-router-dom";

import { headingStyle } from "../../styles/shared";
import { PROJECT_DATA } from "../projects/projects-data";
import { ProjectsRow } from "../projects/ProjectsRow";

export function Projects() {
  return (
    <Stack spacing={10}>
      <Heading sx={headingStyle}>Our Projects</Heading>

      <Stack spacing={5}>
        <ProjectsRow data={PROJECT_DATA} />

        <ChakraLink
          as={Link}
          to={"/projects"}
        >
          <Button variant={"ctc"}>View all Projects</Button>
        </ChakraLink>
      </Stack>
    </Stack>
  );
}
