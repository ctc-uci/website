// https://levelup.gitconnected.com/implementing-an-infinite-autoplay-carousel-in-react-with-splide-cac6355ba435

import { Box, Circle, HStack, Image, Tooltip } from "@chakra-ui/react";

// @ts-expect-error trust me bro
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

import "@splidejs/react-splide/css";

import { PREVIOUS_DATA, PROJECT_DATA } from "../../projects/projects-data";

const SPLIDE_OPTIONS = {
  perPage: 1,
  type: "loop",
  rewind: true,
  pagination: false,
  pauseOnHover: true,
  autoScroll: {
    speed: 0.5,
    pauseOnHover: true,
    pauseOnFocus: false,
  },
  arrows: false,
  drag: false,
  autoWidth: true,
};

export function IconCarousel() {
  return (
    <Splide
      options={SPLIDE_OPTIONS}
      extensions={{ AutoScroll }}
    >
      {[...PROJECT_DATA, ...PREVIOUS_DATA].map((project) => (
        <SplideSlide key={project.name + project.startYear + project.endYear}>
          <HStack spacing={0}>
            <Tooltip label={project.name}>
              <Box
                sx={{
                  height: 100,
                  maxHeight: 100,
                  width: "fit-content",
                  maxWidth: "fit-content",
                }}
              >
                <Image
                  src={`/projects/${project.image}`}
                  alt={`image of ${project.name}`}
                  sx={{
                    objectFit: "contain",
                    paddingX: { base: 5, md: 20 },
                  }}
                />
              </Box>
            </Tooltip>

            <Circle
              sx={{
                height: 1.5,
                width: 1.5,
                backgroundColor: "#5457AF",
                paddingX: 0,
              }}
            />
          </HStack>
        </SplideSlide>
      ))}
    </Splide>
  );
}
