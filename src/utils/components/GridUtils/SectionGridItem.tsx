"use client";
import { GridItem, GridItemProps } from "@chakra-ui/react";

type SectionGridItemProps = {
 children: React.ReactNode;
 order?: GridItemProps["order"];
 display?: GridItemProps["display"];
 flexDirection?: GridItemProps["flexDirection"];
 justifyContent?: GridItemProps["justifyContent"];
 alignItems?: GridItemProps["alignItems"];
 textAlign?: GridItemProps["textAlign"];
};

export default function SectionGridItem({
 children,
 order = { base: 1, md: 1 },
 display = "flex",
 flexDirection = "column",
 justifyContent = "center",
 alignItems = { base: "center" },
 textAlign = { base: "center" },
}: SectionGridItemProps) {
 return (
  <GridItem
   display={display}
   flexDirection={flexDirection}
   justifyContent={justifyContent}
   alignItems={alignItems}
   textAlign={textAlign}
   order={order}
  >
   {children}
  </GridItem>
 );
}
