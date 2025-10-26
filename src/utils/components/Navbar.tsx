"use client";
import { Hide, Show } from "@chakra-ui/react";
import { usePathname } from "next/navigation";

import DesktopNavbar from "./Navbars/DesktopNavbar";
import MobileNavbar from "./Navbars/MobileNavbar";

const Navbar = () => {
 const pathname = usePathname();

 const navItems = [
  { label: "About", href: "/About" },
  { label: "Team", href: "/Team" },
  { label: "Projects", href: "/Projects" },
  { label: "Career", href: "/Career" },
  { label: "Recruitment", href: "/Recruitment" },
 ];

 return (
  <>
   {/* Desktop Navbar */}
   <Hide below="md">
    <DesktopNavbar pathname={pathname} navItems={navItems} />
   </Hide>

   {/* Mobile Navbar */}
   <Show below="md">
    <MobileNavbar pathname={pathname} navItems={navItems} />
   </Show>
  </>
 );
};

export default Navbar;
