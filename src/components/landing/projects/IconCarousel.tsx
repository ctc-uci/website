// https://levelup.gitconnected.com/implementing-an-infinite-autoplay-carousel-in-react-with-splide-cac6355ba435

import { Center, Divider, HStack, Image, Tooltip } from "@chakra-ui/react";

// @ts-expect-error trust me bro
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

import "@splidejs/react-splide/css";

import { PREVIOUS_DATA, PROJECT_DATA } from "../../projects/projects-data";

const SPLIDE_OPTIONS = {
  type: "loop",
  perPage: 4,
  perMove: 1,
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
};

export function IconCarousel() {
  return (
    <Splide
      options={SPLIDE_OPTIONS}
      extensions={{ AutoScroll }}
    >
      {[...PROJECT_DATA, ...PREVIOUS_DATA].map((project) => (
        <SplideSlide
          key={project.name + project.startYear + project.endYear}
          style={{ minWidth: "fit-content", width: "fit-content" }}
        >
          <HStack spacing={0}>
            <Tooltip label={project.name}>
              <Image
                src={`/projects/${project.image}`}
                alt={`image of ${project.name}`}
                sx={{
                  height: 100,
                  maxHeight: 100,
                  width: "fit-content",
                  maxWidth: 250,
                  objectFit: "contain",
                  paddingX: { base: 5, md: 20 },
                }}
              />
            </Tooltip>

            <Center sx={{ height: 4 }}>
              <Divider
                orientation="vertical"
                sx={{
                  width: 1,
                  backgroundColor: "#5457AF",
                  borderRadius: "lg",
                }}
              />
            </Center>
          </HStack>
        </SplideSlide>
      ))}
    </Splide>
  );
}
