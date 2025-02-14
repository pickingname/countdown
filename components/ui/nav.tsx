"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Instagram, Menu } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isMobileScreen, setIsMobileScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 840);
      setIsMobileScreen(window.innerWidth < 500);
    };

    const handleScroll = () => {
      if (!isSmallScreen) {
        setIsScrolled(window.scrollY > 50);
      }
    };

    handleResize();
    handleScroll();

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isSmallScreen]);

  return (
    <nav
      className={`
        fixed z-50 
        border-neutral-700 border flex items-center justify-between 
        h-14 px-6 backdrop-blur-md text-white rounded-2xl 
        shadow-lg mx-auto mt-4 
        ${isSmallScreen ? "left-4 right-4" : "left-0 right-0"}
        ${
          !isSmallScreen
            ? `transition-all duration-300 ease-in-out ${
                isScrolled ? "max-w-[51rem]" : "max-w-3xl"
              }`
            : "max-w-3xl"
        }
      `}
    >
      <div className="flex items-center space-x-4">
        <span className="text-lg flex items-center leading-none mb-0.5">
          <span className="mr-2 text-yellow-400">🔥</span> 157
        </span>
        <span className="text-sm font-medium leading-none pb-[1px]">
          Archival
        </span>
      </div>

      {/* desktop UI */}
      <div
        className={`${
          isMobileScreen ? "hidden" : "flex"
        } items-center space-x-2`}
      >
        <Link
          href={"https://www.instagram.com/ps.onefiveseven"}
          target="_blank"
        >
          <button className="flex items-center justify-center gap-1 h-8 px-3 text-xs font-medium text-neutral-300 bg-neutral-800 rounded-lg hover:bg-neutral-700">
            <Instagram size={17} />
            <span className="leading-none">157 IG</span>
          </button>
        </Link>
        <button className="flex items-center justify-center h-8 px-3 text-xs font-medium text-neutral-300 bg-neutral-800 rounded-lg hover:bg-neutral-700">
          <span className="leading-none">Countdown</span>
        </button>
        <button className="flex items-center justify-center h-8 px-3 text-xs font-medium text-neutral-900 bg-yellow-200 rounded-lg hover:bg-yellow-300">
          <span className="leading-none">Board</span>
        </button>
      </div>

      {/* small ass UI */}
      <div
        className={`${
          isMobileScreen
            ? "block border border-neutral-700 rounded-lg"
            : "hidden"
        }`}
      >
        <DropdownMenu modal={false}>
          <DropdownMenuTrigger className="flex items-center justify-center h-8 w-8 text-neutral-300 hover:bg-neutral-800 rounded-lg">
            <Menu size={20} />
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className={`${
              isMobileScreen
                ? "block rounded-lg bg-transparent backdrop-blur-md"
                : "hidden"
            }`}
          >
            <DropdownMenuLabel className="font-normal">
              Where to go?
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <Link
              href={
                "https://www.instagram.com/ps.onefiveseven?igsh=aDFjbGk4YnM4bHZz"
              }
              target="_blank"
            >
              <DropdownMenuItem>157 IG</DropdownMenuItem>
            </Link>
            <Link href={""}>
              <DropdownMenuItem>Countdown</DropdownMenuItem>
            </Link>
            <Link href={""}>
              <DropdownMenuItem>Board</DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}
