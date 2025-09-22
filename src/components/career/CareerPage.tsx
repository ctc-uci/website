import React from "react";

import { Text } from "@chakra-ui/react";

import { Hero } from "../landing/hero/Hero";
import career from "/public/career.jpg";

export function CareerPage() {
  return (
    <Hero>
      <Text
        fontSize="7xl"
        fontWeight={500}
      >
        Why CTC?
      </Text>
    </Hero>
  );
}
