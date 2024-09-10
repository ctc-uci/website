import { useCallback, useState } from "react";

import { Stack, Text } from "@chakra-ui/react";

import { ProfileCard } from "./ProfileCard";
import { ProfileCardGrid } from "./ProfileCardGrid";
import { BOARD_DATA, CCH_DATA, LP_DATA, WW_DATA } from "./team-data";
import { TeamTabs } from "./TeamTabs";

export function Team() {
  const [activeTab, setActiveTab] = useState(0);

  function handleClick(index: number) {
    setActiveTab(index);
  }

  const getData = useCallback((activeTab: number) => {
    switch (activeTab) {
      case 1:
        return CCH_DATA;
      case 2:
        return WW_DATA;
      case 3:
        return LP_DATA;
      default:
        // this should never happen
        return [];
    }
  }, []);

  return (
    <Stack sx={{ paddingY: 100, marginX: "auto" }}>
      <Stack spacing={10}>
        <TeamTabs
          activeTab={activeTab}
          handleClick={handleClick}
        />

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
      </Stack>
    </Stack>
  );
}
