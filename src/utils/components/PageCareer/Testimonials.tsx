"use client";
import { VStack } from "@chakra-ui/react";

import TestimonialCard from "@/utils/components/CardUtils/TestimonialCard";
import { ALUMNI_TESTIMONIALS } from "@/utils/constants/AlumniTestimonials";

function Testimonials() {
 return (
  <VStack spacing={6} py={10} width="full">
   {ALUMNI_TESTIMONIALS.map((testimonial) => (
    <TestimonialCard
     key={testimonial.name}
     name={testimonial.name}
     role={testimonial.role.join(" | ")}
     company={testimonial.company}
     testimonial={testimonial.testimonial}
     image={testimonial.image}
     easterEgg={testimonial.easterEgg}
     easterEggText={testimonial.easterEggText}
    />
   ))}
  </VStack>
 );
}

export default Testimonials;
