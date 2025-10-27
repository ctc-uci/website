"use client";
import { VStack } from "@chakra-ui/react";

import TestimonialCard from "@/utils/components/CardUtils/TestimonialCard";

function Testimonials() {
 return (
  <VStack spacing={6} py={10} width="full">
   <TestimonialCard
    name="Zion Mateo '25"
    role="Developer"
    company=""
    testimonial="As a developer for two years at Commit the Change, I think this club effectively encapsulates the idea of empowering communities through technology. The fun & social camaraderie I've had with everyone has been such an irreplaceable college experience, highly recommend! "
    image="/alumni/zion-mateo.jpg"
   />
  </VStack>
 );
}

export default Testimonials;
