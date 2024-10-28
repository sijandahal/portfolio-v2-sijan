// data/navItems.js
import { IoIosHome } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { PiSuitcaseSimple } from "react-icons/pi";

// Array of navigation items
const navItems = [
  { href: "/", label: "Home", icon: <IoIosHome /> },
  { href: "/about", label: "About", icon: <CgProfile /> },
  { href: "/works", label: "Works", icon: <PiSuitcaseSimple /> },
];

export default navItems;
