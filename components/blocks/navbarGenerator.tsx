"use client";

import Navbar from "../ui/nav";
import { usePathname } from "next/navigation";

export default function NavbarGenerator() {
  const pathname = usePathname();

  return (
    <>
      {pathname === "/board" ? (
        <Navbar textColor="black" selfDestruct />
      ) : (
        <Navbar textColor="white" />
      )}
    </>
  );
}
