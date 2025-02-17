"use client";

import Navbar from "../ui/nav";
import LightNav from "../ui/lightNav";
import { usePathname } from "next/navigation";

export default function NavbarGenerator() {
  const pathname = usePathname();

  return <>{pathname === "/board" ? <LightNav /> : <Navbar />}</>;
}
