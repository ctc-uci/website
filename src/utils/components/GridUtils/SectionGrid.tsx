"use client";
import { Box, BoxProps, Grid, GridProps } from "@chakra-ui/react";

type SectionGridProps = {
 children: React.ReactNode;
 maxW?: string;
 px?: BoxProps["px"];
 pt?: BoxProps["pt"];
 gap?: GridProps["gap"];
 minH?: BoxProps["minH"];
 pb?: BoxProps["pb"];
};

export default function SectionGrid({
 children,
 maxW = "1200px",
 px = { base: 4, md: 8 },
 pt = { base: 14, md: 6 },
 pb = { base: 14, md: 6 },
 gap = { base: 8, md: 12 },
 minH = { base: "auto", md: "400px" },
}: SectionGridProps) {
 return (
  <Box w="100%" maxW={maxW} mx="auto" px={px} pt={pt} pb={pb} bgColor="white">
   <Grid
    templateColumns={{ base: "1fr", md: "1fr 1fr" }}
    gap={gap}
    alignItems="center"
    minH={minH}
   >
    {children}
   </Grid>
  </Box>
 );
}
