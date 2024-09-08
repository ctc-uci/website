import { useState } from "react";

import {
  Button,
  Link as ChakraLink,
  Heading,
  HStack,
  Icon,
  Stack,
  Text,
  Wrap,
} from "@chakra-ui/react";

import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

import { headingStyle } from "../../../styles/shared";
import { Profile, TeamData } from "./team-data";

export function Team() {
  const [activeTab, setActiveTab] = useState(0);

  function handleClick(index: number) {
    setActiveTab(index);
  }

  return (
    <Stack sx={{ paddingY: 100 }}>
      <Stack spacing={10}>
        <Stack spacing={5}>
          <Heading sx={headingStyle}>Meet the Team</Heading>
          <Stack
            spacing={2.5}
            sx={{
              flexDirection: { base: "column", lg: "row" },
              padding: 1,
              borderRadius: "10px",
              backgroundColor: "ctc.secondary",
              width: "fit-content",
              marginX: { base: "auto", lg: "unset" },
            }}
          >
            {TABS.map((tab, index) => (
              <Button
                key={tab}
                sx={{
                  paddingX: { base: 5, lg: 10 },
                  paddingY: 2,
                  fontSize: "lg",
                  borderRadius: "lg",
                  fontWeight: "normal",
                }}
                variant={activeTab === index ? "ctc" : "ctc.secondary"}
                onClick={() => handleClick(index)}
              >
                {tab}
              </Button>
            ))}
          </Stack>
        </Stack>

        <Wrap
          spacing={5}
          justify={"center"}
        >
          {TeamData.filter((profile) => filterByTeam(profile, activeTab)).map(
            (profile) => (
              <Stack
                key={
                  profile.name + profile.role + profile.team + profile.linkedin
                }
                sx={{
                  width: 60,
                  height: 60,
                  paddingX: 3,
                  paddingY: 4,
                  borderRadius: "lg",
                  backgroundColor: "ctc.secondary",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundImage: profile.image,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  color: "ctc.gray",
                  position: "relative", // To position the overlay correctly
                  _after: {
                    content: '""',
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: "50%",
                    background:
                      "linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent)", // Adjust the gradient as needed
                    borderRadius: "inherit",
                    zIndex: 0,
                  },
                }}
                aria-label={`Image of ${profile.name}`}
                spacing={0}
              >
                <Text
                  sx={{
                    fontSize: "lg",
                    marginTop: "auto",
                    fontWeight: "medium",
                    zIndex: 1,
                  }}
                >
                  {profile.name}
                </Text>
                <Stack
                  spacing={2}
                  sx={{
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "row",
                    zIndex: 1,
                  }}
                >
                  <Text sx={{ fontSize: "sm" }}>{profile.role}</Text>
                  {profile.linkedin ? (
                    <ChakraLink
                      as={Link}
                      to={profile.linkedin}
                      sx={{ height: 5 }}
                    >
                      <Icon
                        as={FaLinkedin}
                        sx={{ color: "ctc.purple" }}
                      />
                    </ChakraLink>
                  ) : null}
                </Stack>
              </Stack>
            )
          )}
        </Wrap>
      </Stack>
    </Stack>
  );
}

const TABS = [
  "Board",
  "Collete's Childrens Home",
  "Working Wardrobes",
  "La Peña",
];

function filterByTeam(profile: Profile, index: number) {
  switch (index) {
    case 0:
      return profile.team === "board";
    case 1:
      return profile.team === "cch";
    case 2:
      return profile.team === "ww";
    case 3:
      return profile.team === "lp";
    default:
      return false;
  }
}
