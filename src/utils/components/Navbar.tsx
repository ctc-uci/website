"use client";
import { Hide, Show } from "@chakra-ui/react";
import { usePathname } from "next/navigation";

import DesktopNavbar from "./Navbars/DesktopNavbar";
import MobileNavbar from "./Navbars/MobileNavbar";

const Navbar = () => {
 const pathname = usePathname();

 const navItems = [
  { label: "About", href: "/about" },
  { label: "Team", href: "/team" },
  { label: "Projects", href: "/projects" },
  { label: "Career", href: "/career" },
  { label: "Recruitment", href: "/recruitment" },
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
