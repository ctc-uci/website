import { ChangeEvent, useCallback, useState } from "react";

import {
  Box,
  Button,
  Heading,
  HStack,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";

import { headingStyle } from "../../../styles/shared";
import { ProfileCard } from "./ProfileCard";
import { ProfileCardGrid } from "./ProfileCardGrid";
import { BOARD_DATA, CLCHC_DATA, ELDR_DATA, GCF_DATA } from "./team-data";

const TABS = ["Board", "CLCHC", "GCF", "ELDR"];

export function Team() {
  const [activeTab, setActiveTab] = useState(0);

  function handleTeamChange(e: ChangeEvent<HTMLSelectElement>) {
    setActiveTab(Number(e.currentTarget.value));
  }

  function handleClick(index: number) {
    setActiveTab(index);
  }

  const getData = useCallback((activeTab: number) => {
    switch (activeTab) {
      case 1:
        return CLCHC_DATA;
      case 2:
        return GCF_DATA;
      case 3:
        return ELDR_DATA;
      default:
        // this should never happen
        return [];
    }
  }, []);

  return (
    <Stack
      spacing={10}
      sx={{ width: "100%", paddingY: 100, marginX: "auto" }}
    >
      <Stack
        sx={{
          flexDirection: { base: "column", sm: "row", lg: "column" },
          justifyContent: "space-between",
        }}
        spacing={{ base: 2.5, sm: 5 }}
      >
        <Heading sx={headingStyle}>Meet the Team</Heading>

        <Box
          sx={{
            maxWidth: "fit-content",
            display: { base: "flex", lg: "none" },
          }}
        >
          <Select
            defaultValue={0}
            value={activeTab}
            onChange={handleTeamChange}
            sx={{
              backgroundColor: "ctc.secondary",
              _focus: { backgroundColor: "ctc.lilac", color: "ctc.text" },
              _hover: { backgroundColor: "ctc.lilac", color: "ctc.text" },
            }}
            variant={"filled"}
          >
            <option value={0}>Board</option>
            <option value={1}>Colette's Childrens Home</option>
            <option value={2}>Center Stage</option>
            <option value={3}>La Peña</option>
          </Select>
        </Box>

        <HStack
          spacing={2.5}
          sx={{
            padding: 1,
            borderRadius: "10px",
            backgroundColor: "ctc.secondary",
            width: "fit-content",
            display: { base: "none", lg: "flex" },
          }}
        >
          {TABS.map((tab, index) => (
            <Button
              key={tab}
              sx={{
                paddingX: 10,
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
        </HStack>
      </Stack>

      <Box sx={{ width: "fit-content", marginX: "auto" }}>
        {activeTab === 0 ? (
          <ProfileCardGrid>
            {BOARD_DATA.map((profile) => (
              <ProfileCard
                profile={profile}
                key={profile.name + profile.role + profile.linkedin}
              />
            ))}
          </ProfileCardGrid>
        ) : (
          <ProfileCardGrid>
            {getData(activeTab).map((profile) => (
              <ProfileCard
                profile={profile}
                key={profile.name + profile.role + profile.linkedin}
              />
            ))}
          </ProfileCardGrid>
          // to be uncommented once there are devs and designers
          // <Stack spacing={10}>
          //   <Stack spacing={5}>
          //     <Text sx={{ fontSize: "xl", fontWeight: "semibold" }}>Leads</Text>
          //     <ProfileCardGrid>
          //       {getData(activeTab)
          //         .filter(
          //           (profile) =>
          //             profile.role === "Tech Lead" ||
          //             profile.role === "Design Lead"
          //         )
          //         .map((profile) => (
          //           <ProfileCard
          //             profile={profile}
          //             key={profile.name + profile.role + profile.linkedin}
          //           />
          //         ))}
          //     </ProfileCardGrid>
          //   </Stack>
          //   <Stack spacing={5}>
          //     <Text sx={{ fontSize: "xl", fontWeight: "semibold" }}>
          //       Designers
          //     </Text>
          //     <ProfileCardGrid>
          //       {getData(activeTab)
          //         .filter((profile) => profile.role === "Designer")
          //         .map((profile) => (
          //           <ProfileCard
          //             profile={profile}
          //             key={profile.name + profile.role + profile.linkedin}
          //           />
          //         ))}
          //     </ProfileCardGrid>
          //   </Stack>
          //   <Stack spacing={5}>
          //     <Text sx={{ fontSize: "xl", fontWeight: "semibold" }}>
          //       Developers
          //     </Text>
          //     <ProfileCardGrid>
          //       {getData(activeTab)
          //         .filter((profile) => profile.role === "Developer")
          //         .map((profile) => (
          //           <ProfileCard
          //             profile={profile}
          //             key={profile.name + profile.role + profile.linkedin}
          //           />
          //         ))}
          //     </ProfileCardGrid>
          //   </Stack>
          // </Stack>
        )}
      </Box>
    </Stack>
  );
}
