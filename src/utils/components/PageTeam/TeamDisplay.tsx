import React, { useState } from "react";
import { Box, SimpleGrid, useBreakpointValue, VStack } from "@chakra-ui/react";
import { Profile } from "../../TeamData";
import { ProfileCard } from "./ProfileCard";
import { TabController } from "./TabController";
import { DropdownController } from "./DropdownController";

interface TeamDisplayProps {
 teamData: Profile[][];
 labels: string[];
}

export const TeamDisplay: React.FC<TeamDisplayProps> = ({
 teamData,
 labels,
}) => {
 const [activeTab, setActiveTab] = useState(0);

 // Use breakpoint to determine if we should show tabs or dropdown
 const showTabs = useBreakpointValue({ base: false, md: true });

 const handleTabChange = (index: number) => {
  setActiveTab(index);
 };

 const renderProfileGrid = (profiles: Profile[]) => (
  <SimpleGrid
   columns={{ base: 1, sm: 2, md: 3, lg: 4, xl: 5 }}
   spacing={6}
   w="100%"
   px={{ base: 20, md: 10 }}
  >
   {profiles.map((profile, index) => (
    <ProfileCard key={`${profile.name}-${index}`} profile={profile} />
   ))}
  </SimpleGrid>
 );

 return (
  <VStack spacing={6} w="100%" align="stretch">
   {showTabs ? (
    <TabController
     labels={labels}
     activeTab={activeTab}
     onTabChange={handleTabChange}
    >
     {teamData.map((profiles, index) => (
      <Box key={index}>{renderProfileGrid(profiles)}</Box>
     ))}
    </TabController>
   ) : (
    <>
     <DropdownController
      labels={labels}
      activeTab={activeTab}
      onTabChange={handleTabChange}
     />
     {renderProfileGrid(teamData[activeTab])}
    </>
   )}
  </VStack>
 );
};
