"use client";
import { Box } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TabTransitionProps {
 children: React.ReactNode;
 activeTab: number;
}

export const TabTransition: React.FC<TabTransitionProps> = ({
 children,
 activeTab,
}) => {
 const [isVisible, setIsVisible] = useState(true);
 const [displayChildren, setDisplayChildren] = useState(children);
 const prevActiveTabRef = useRef(activeTab);

 useEffect(() => {
  if (activeTab !== prevActiveTabRef.current && children) {
   // Tab changed - start fade out
   // eslint-disable-next-line react-hooks/set-state-in-effect
   setIsVisible(false);

   const timer = setTimeout(() => {
    // After fade out, update content and fade in
    setDisplayChildren(children);
    setIsVisible(true);
    prevActiveTabRef.current = activeTab;
   }, 150); // Match exit animation duration

   return () => clearTimeout(timer);
  } else if (children && activeTab === prevActiveTabRef.current) {
   // Initial render or children updated without tab change
   setDisplayChildren(children);
   setIsVisible(true);
  }
 }, [activeTab, children]);

 return (
  <Box position="relative" width="100%" minHeight="200px">
   <AnimatePresence mode="wait">
    {isVisible && displayChildren && (
     <motion.div
      key={activeTab}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
       duration: 0.15,
       ease: "easeInOut",
      }}
     >
      {displayChildren}
     </motion.div>
    )}
   </AnimatePresence>
  </Box>
 );
};
