import { Button, Heading, Stack } from "@chakra-ui/react";

import { headingStyle } from "../../../styles/shared";

interface TeamTabsProps {
  activeTab: number;
  handleClick: (index: number) => unknown;
}

export function TeamTabs({ activeTab, handleClick }: TeamTabsProps) {
  return (
    <Stack spacing={5}>
      <Heading sx={headingStyle}>Meet the Team</Heading>
      <Stack
        spacing={2.5}
        sx={{
          flexDirection: { base: "column", mdlg: "row" },
          padding: 1,
          borderRadius: "10px",
          backgroundColor: "ctc.secondary",
          width: { base: "unset", mdlg: "fit-content" },
          // marginX: { base: "auto", mdlg: "unset" },
        }}
      >
        {TABS.map((tab, index) => (
          <Button
            key={tab}
            sx={{
              paddingX: { base: 5, mdlg: 10 },
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
  );
}

const TABS = [
  "Board",
  "Collete's Childrens Home",
  "Working Wardrobes",
  "La Peña",
];
