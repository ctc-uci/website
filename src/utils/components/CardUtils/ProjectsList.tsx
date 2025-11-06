import { Box, HStack } from "@chakra-ui/react";
import React, { useRef, useState } from "react";

import { Project } from "../../constants/project-data";

import ProjectCard from "./ProjectCard";

interface HorizontalProjectScrollProps {
 projects: Project[];
 width?: string;
}

export default function HorizontalProjectScroll({
 projects,
 width = "450px",
}: HorizontalProjectScrollProps) {
 const scrollRef = useRef<HTMLDivElement | null>(null);
 const [isDragging, setIsDragging] = useState(false);
 const dragStartXRef = useRef<number>(0);
 const dragStartScrollLeftRef = useRef<number>(0);
 const lastMoveXRef = useRef<number>(0);
 const lastMoveTimeRef = useRef<number>(0);
 const velocityRef = useRef<number>(0);
 const rafIdRef = useRef<number | null>(null);

 const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
  if (!scrollRef.current) return;
  if (rafIdRef.current !== null) {
   cancelAnimationFrame(rafIdRef.current);
   rafIdRef.current = null;
  }
  setIsDragging(true);
  dragStartXRef.current = e.clientX;
  dragStartScrollLeftRef.current = scrollRef.current.scrollLeft;
  lastMoveXRef.current = e.clientX;
  lastMoveTimeRef.current = performance.now();
  velocityRef.current = 0;
 };

 const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
  if (!isDragging || !scrollRef.current) return;
  e.preventDefault();
  const deltaX = e.clientX - dragStartXRef.current;
  scrollRef.current.scrollLeft = dragStartScrollLeftRef.current - deltaX;

  // Track velocity
  const now = performance.now();
  const dtMs = now - lastMoveTimeRef.current;
  if (dtMs > 0) {
   const dx = e.clientX - lastMoveXRef.current;
   velocityRef.current = dx / dtMs; // px per ms
   lastMoveXRef.current = e.clientX;
   lastMoveTimeRef.current = now;
  }
 };

 const endDrag = () => {
  if (!isDragging) return;
  setIsDragging(false);
  // Start inertia if velocity is significant
  if (!scrollRef.current) return;
  const startVelocity = velocityRef.current; // px/ms
  const minVelocity = 0.02; // threshold to stop (px/ms)
  const friction = 0.95; // decay per frame
  let v = startVelocity;
  let lastTs = performance.now();

  const step = (ts: number) => {
   if (!scrollRef.current) return;
   const dt = ts - lastTs; // ms
   lastTs = ts;
   // Apply velocity to scroll (invert to match drag direction)
   scrollRef.current.scrollLeft -= v * dt;
   // Apply friction
   v *= Math.pow(friction, dt / (1000 / 60));
   if (Math.abs(v) > minVelocity) {
    rafIdRef.current = requestAnimationFrame(step);
   } else {
    rafIdRef.current = null;
   }
  };

  if (Math.abs(startVelocity) > minVelocity) {
   rafIdRef.current = requestAnimationFrame(step);
  }
 };

 // Basic touch support
 const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
  if (!scrollRef.current) return;
  if (rafIdRef.current !== null) {
   cancelAnimationFrame(rafIdRef.current);
   rafIdRef.current = null;
  }
  setIsDragging(true);
  dragStartXRef.current = e.touches[0].clientX;
  dragStartScrollLeftRef.current = scrollRef.current.scrollLeft;
  lastMoveXRef.current = e.touches[0].clientX;
  lastMoveTimeRef.current = performance.now();
  velocityRef.current = 0;
 };

 const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
  if (!isDragging || !scrollRef.current) return;
  const x = e.touches[0].clientX;
  const deltaX = x - dragStartXRef.current;
  scrollRef.current.scrollLeft = dragStartScrollLeftRef.current - deltaX;

  // Track velocity
  const now = performance.now();
  const dtMs = now - lastMoveTimeRef.current;
  if (dtMs > 0) {
   const dx = x - lastMoveXRef.current;
   velocityRef.current = dx / dtMs; // px per ms
   lastMoveXRef.current = x;
   lastMoveTimeRef.current = now;
  }
 };

 const handleTouchEnd = () => endDrag();

 return (
  <Box
   overflowX="auto"
   overflowY="hidden"
   display="block"
   position="relative"
   css={{
    "&::-webkit-scrollbar": {
     display: "none",
    },
    msOverflowStyle: "none",
    scrollbarWidth: "none",
   }}
  >
   {/* Fade overlay on the right side */}
   <Box
    position="absolute"
    top={0}
    right={0}
    width="25px"
    height="100%"
    background="linear-gradient(to left, rgba(255, 255, 255, 0.9), transparent)"
    pointerEvents="none"
    zIndex={1}
   />
   <Box
    position="absolute"
    top={0}
    left={0}
    width={6}
    height="100%"
    background="linear-gradient(to right, rgb(255, 255, 255), transparent)"
    pointerEvents="none"
    zIndex={1}
   />

   <HStack
    spacing={6}
    align="stretch"
    minWidth="300px"
    position="relative"
    width={{
     base: "300px",
     sm: "400px",
     md: "350px",
     lg: width,
     xl: "600px",
    }}
    overflowX="auto"
    paddingY={4}
    paddingX={2}
    ref={scrollRef}
    onMouseDown={handleMouseDown}
    onMouseMove={handleMouseMove}
    onMouseLeave={endDrag}
    onMouseUp={endDrag}
    onTouchStart={handleTouchStart}
    onTouchMove={handleTouchMove}
    onTouchEnd={handleTouchEnd}
    css={{
     "&::-webkit-scrollbar": {
      display: "none",
     },
     msOverflowStyle: "none",
     scrollbarWidth: "none",
     cursor: isDragging ? "grabbing" : "grab",
     userSelect: isDragging ? "none" : undefined,
     //  scrollSnapType: "x mandatory",
     //  scrollBehavior: "smooth",
    }}
   >
    {projects.map((project, index) => (
     <ProjectCard key={index} project={project} />
    ))}
   </HStack>
  </Box>
 );
}
