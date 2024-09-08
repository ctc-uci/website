import { useState } from "react";

import { Button, Heading, Stack, Wrap } from "@chakra-ui/react";

import { headingStyle } from "../../../styles/shared";
import { ProfileCard } from "./ProfileCard";
import { TeamData, type Profile } from "./team-data";

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
              <ProfileCard profile={profile} />
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
