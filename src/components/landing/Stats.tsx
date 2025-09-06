import { useEffect, useRef, useState } from "react";

import { Heading, Stack, Text, VStack, Wrap } from "@chakra-ui/react";

import { useInView } from "framer-motion";

import { headingStyle } from "../../styles/shared";

const STATS = [
  {
    stat: "2000+",
    text: "Hours volunteered",
    numericValue: 2000,
  },
  {
    stat: "17",
    text: "Software solutions",
    numericValue: 17,
  },
];

interface CountUpProps {
  end: number;
  duration?: number;
  suffix?: string;
  isInView: boolean;
}

const CountUp = ({
  end,
  duration = 2,
  suffix = "",
  isInView,
}: CountUpProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min(
        (currentTime - startTime) / (duration * 600),
        1
      );

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, isInView]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
};

export function Stats() {
  const statsRef = useRef(null);
  const isInView = useInView(statsRef, { once: true });

  return (
    <Stack
      spacing={10}
      ref={statsRef}
    >
      {STATS.map((stat) => (
        <VStack
          key={stat.stat}
          bg="ctc.purple"
          spacing={2}
          sx={{
            paddingX: { base: 10, md: 20 },
            paddingY: 4,
            textAlign: "center",
            borderRadius: "lg",
            width: { base: "100%", sm: 500, md: 350, mdlg: 350, xl: 400 },
          }}
        >
          <Text
            sx={{
              fontSize: "7xl",
              fontWeight: "semibold",
              lineHeight: "normal",
              color: "ctc.gray",
            }}
          >
            <CountUp
              end={stat.numericValue}
              suffix={stat.stat.includes("+") ? "+" : ""}
              isInView={isInView}
            />
          </Text>
          <Text
            sx={{
              fontSize: "xl",
              lineHeight: "normal",
              color: "ctc.gray",
              marginY: "auto",
            }}
          >
            {stat.text}
          </Text>
        </VStack>
      ))}
    </Stack>
  );
}
