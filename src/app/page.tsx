"use client";
import { VStack, Text, Button, Image } from "@chakra-ui/react";

import { Footer } from "@/utils/components/Footer";
import Hero from "@/utils/components/Hero";
import ClosingMessage from "@/utils/components/PageLanding/ClosingMessage";
import ImpactSection from "@/utils/components/PageLanding/ImpactSection";
import LandingPageIconBox from "@/utils/components/PageLanding/LandingPageIcon";
import LegacySection from "@/utils/components/PageLanding/LegacySection";
import WorkSection from "@/utils/components/PageLanding/WorkSection";

export default function Home() {
 return (
  <VStack spacing={0}>
   <Hero landing>
    <>
     {/* <Hide below="md"> */}
     <LandingPageIconBox
      rotation="rotate(-10deg)"
      positionOverride={{ left: "15%", top: "20%" }}
      fadeInDelay={0}
     >
      <Image
       src="/assets/LandingPageIcons/code.svg"
       alt="Code Icon"
       width="100%"
       height="100%"
      />
     </LandingPageIconBox>

     <LandingPageIconBox
      rotation="rotate(15deg)"
      positionOverride={{ right: "20%", top: "20%" }}
      fadeInDelay={0.2}
     >
      <Image
       src="/assets/LandingPageIcons/heart-handshake.svg"
       alt="Heart Handshake Icon"
       width="100%"
       height="100%"
      />
     </LandingPageIconBox>

     <LandingPageIconBox
      rotation="rotate(-15deg)"
      positionOverride={{ right: "10%", bottom: "20%" }}
      fadeInDelay={0.4}
     >
      <Image
       src="/assets/LandingPageIcons/heart-handshake.svg"
       alt="Heart Handshake Icon"
       width="100%"
       height="100%"
      />
     </LandingPageIconBox>

     <LandingPageIconBox
      rotation="rotate(13deg)"
      positionOverride={{ left: "20%", bottom: "20%" }}
      fadeInDelay={0.6}
     >
      <Image
       src="/assets/LandingPageIcons/mouse-pointer.svg"
       alt="Mouse Pointer Icon"
       width="100%"
       height="100%"
      />
     </LandingPageIconBox>
     {/* </Hide> */}

     <VStack alignItems="center" spacing={5} zIndex={1}>
      <Text
       fontSize="2xl"
       color="black"
       fontFamily="Inter, sans-serif"
       textAlign="center"
      >
       EST. 2020
      </Text>
      <Text
       lineHeight="5.75rem"
       fontSize="7xl"
       color="black"
       fontFamily="Inter, sans-serif"
       textAlign="center"
       fontWeight="600"
      >
       Commit The <br /> Change
      </Text>
      <Text
       fontSize="2xl"
       color="black"
       fontFamily="Inter, sans-serif"
       textAlign="center"
      >
       Creating tech for social good
      </Text>
      <Button backgroundColor="ctc.purple" variant="purple" color="white">
       Learn More
      </Button>
     </VStack>
    </>
   </Hero>
   <ImpactSection />
   <LegacySection />
   <WorkSection />
   <ClosingMessage />
   <Footer />
  </VStack>
 );
}
