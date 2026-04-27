"use client";
import { Button, Text, VStack } from "@chakra-ui/react";
import NextLink from "next/link";

import { Footer } from "@/utils/components/Footer";
import Hero from "@/utils/components/Hero";

export default function NotFound() {
  return (
    <VStack spacing={0}>
      <Hero>
        <VStack alignItems="center" spacing={{ base: 3, md: 5 }} zIndex={1}>
          <Text
            fontSize={{ base: "8xl", md: "9xl" }}
            fontWeight="semibold"
            color="purple.700"
            lineHeight="1"
          >
            404
          </Text>
          <Text
            fontSize={{ base: "xl", md: "2xl" }}
            fontWeight="semibold"
          >
            Page not found
          </Text>
          <Text
            fontSize={{ base: "sm", md: "xl", lg: "2xl" }}
            paddingX={{ base: 3, md: 0 }}
            textAlign="center"
          >
            The page you&apos;re looking for doesn&apos;t exist or may have
            moved.
          </Text>
          <Button as={NextLink} href="/" variant="purple" size="lg">
            Back to Home
          </Button>
        </VStack>
      </Hero>
      <Footer />
    </VStack>
  );
}
