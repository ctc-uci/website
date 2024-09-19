import { Center, Circle, Divider, VStack } from "@chakra-ui/react";

import { TimelineEvent } from "./timeline-data";

interface ItemLineProps {
  event: TimelineEvent;
}

export function ItemLine({ event }: ItemLineProps) {
  return (
    <VStack
      spacing={6}
      sx={{ marginTop: 2.5 }}
    >
      <Circle
        sx={{
          width: 5,
          height: 5,
          ...(event.majorEvent
            ? { backgroundColor: "ctc.purple" }
            : {
                borderWidth: 2,
                borderColor: "ctc.purple",
                borderStyle: "solid",
              }),
        }}
      />

      <Center sx={{ height: "100%" }}>
        <Divider
          orientation="vertical"
          sx={{
            width: 1,
            backgroundColor: "ctc.lilac",
            borderRadius: "xl",
          }}
        />
      </Center>
    </VStack>
  );
}
