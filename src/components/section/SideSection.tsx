import React from "react";

import { Box, Center, HStack } from "@chakra-ui/react";

export const SideSection = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      paddingY={"100px"}
      paddingX={"192px"}
      width="100%"
    >
      <Center position="relative">
        <HStack spacing={180}>{children}</HStack>
      </Center>
    </Box>
  );
};
