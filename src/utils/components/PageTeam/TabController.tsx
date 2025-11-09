"use client";
import { Box, Tabs, TabList, Tab } from "@chakra-ui/react";
import React from "react";

import { TabTransition } from "./TabTransition";

interface TabControllerProps {
 labels: string[];
 children: React.ReactNode[];
 activeTab: number;
 onTabChange: (index: number) => void;
}

export const TabController: React.FC<TabControllerProps> = ({
 labels,
 children,
 activeTab,
 onTabChange,
}) => {
 return (
  <>
   <Tabs
    index={activeTab}
    onChange={onTabChange}
    variant="line"
    colorScheme="ctc.purple"
    w="100%"
   >
    <TabList mb={6} flexWrap="wrap" justifyContent="center">
     {labels.map((label, index) => (
      <Tab
       key={index}
       fontSize="md"
       fontWeight="semibold"
       px={6}
       py={3}
       _selected={{
        color: "ctc.purple",
        textDecoration: "underline",
        textUnderlineOffset: "6px",
        textDecorationThickness: "2px",
       }}
       _hover={{
        color: "ctc.purple",
       }}
       _active={{
        bg: "ctc.200",
       }}
       mb={2}
       mx={1}
      >
       {label}
      </Tab>
     ))}
    </TabList>
   </Tabs>
   {/* Render visible tab with transition */}
   <TabTransition activeTab={activeTab}>{children[activeTab]}</TabTransition>
   {/* Preload images from all tabs by rendering them off-screen */}
   <Box
    position="absolute"
    top="-9999px"
    left="-9999px"
    width="1px"
    height="1px"
    overflow="hidden"
    aria-hidden="true"
   >
    {children.map((child, index) =>
     index !== activeTab ? <Box key={index}>{child}</Box> : null
    )}
   </Box>
  </>
 );
};
