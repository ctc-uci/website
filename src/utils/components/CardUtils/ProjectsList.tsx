import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Box, HStack, IconButton } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";

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
 // Tracks whether there is more content to reveal on either side, so we can
 // show/hide the scroll affordances (arrows + fades) accordingly.
 const [canScrollLeft, setCanScrollLeft] = useState(false);
 const [canScrollRight, setCanScrollRight] = useState(false);

 const updateScrollState = () => {
  const el = scrollRef.current;
  if (!el) return;
  setCanScrollLeft(el.scrollLeft > 4);
  setCanScrollRight(
   el.scrollLeft < el.scrollWidth - el.clientWidth - 4
  );
 };

 useEffect(() => {
  updateScrollState();
  const el = scrollRef.current;
  if (!el) return undefined;

  const handleResize = () => updateScrollState();
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
   
 }, [projects]);

 const scrollByAmount = (direction: "left" | "right") => {
  const el = scrollRef.current;
  if (!el) return;
  const amount = Math.min(el.clientWidth * 0.8, 340);
  el.scrollBy({
   left: direction === "left" ? -amount : amount,
   behavior: "smooth",
  });
 };

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
   role="group"
   css={{
    "&::-webkit-scrollbar": {
     display: "none",
    },
    msOverflowStyle: "none",
    scrollbarWidth: "none",
   }}
  >
   {/* Fade overlay on the right side, hinting there is more to scroll */}
   <Box
    position="absolute"
    top={0}
    right={0}
    width={{ base: "36px", md: "56px" }}
    height="100%"
    background="linear-gradient(to left, rgba(255, 255, 255, 0.95), transparent)"
    pointerEvents="none"
    zIndex={1}
    opacity={canScrollRight ? 1 : 0}
    transition="opacity 0.2s ease-in-out"
   />
   <Box
    position="absolute"
    top={0}
    left={0}
    width={{ base: "24px", md: "40px" }}
    height="100%"
    background="linear-gradient(to right, rgb(255, 255, 255), transparent)"
    pointerEvents="none"
    zIndex={1}
    opacity={canScrollLeft ? 1 : 0}
    transition="opacity 0.2s ease-in-out"
   />

   {/* Left/right arrow buttons make the horizontal scroll affordance obvious */}
   <IconButton
    aria-label="Scroll left"
    icon={<ChevronLeftIcon boxSize={6} />}
    onClick={() => scrollByAmount("left")}
    position="absolute"
    left={{ base: 0, md: 1 }}
    top="50%"
    transform="translateY(-50%)"
    zIndex={2}
    borderRadius="full"
    size="sm"
    boxShadow="md"
    bg="white"
    opacity={canScrollLeft ? 1 : 0}
    pointerEvents={canScrollLeft ? "auto" : "none"}
    visibility={canScrollLeft ? "visible" : "hidden"}
    transition="opacity 0.2s ease-in-out"
    _hover={{ bg: "gray.100" }}
   />
   <IconButton
    aria-label="Scroll right"
    icon={<ChevronRightIcon boxSize={6} />}
    onClick={() => scrollByAmount("right")}
    position="absolute"
    right={{ base: 0, md: 1 }}
    top="50%"
    transform="translateY(-50%)"
    zIndex={2}
    borderRadius="full"
    size="sm"
    boxShadow="md"
    bg="white"
    opacity={canScrollRight ? 1 : 0}
    pointerEvents={canScrollRight ? "auto" : "none"}
    visibility={canScrollRight ? "visible" : "hidden"}
    transition="opacity 0.2s ease-in-out"
    _hover={{ bg: "gray.100" }}
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
    onScroll={updateScrollState}
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
