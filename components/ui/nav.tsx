"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

interface NavbarProps {
  textColor: string;
}

export default function Navbar({ textColor }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isMobileScreen, setIsMobileScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 840);
      setIsMobileScreen(window.innerWidth < 590);
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
        h-14 px-6 backdrop-blur-md text-${textColor} rounded-2xl 
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
          <Link href={"/"}>
            <span className="mr-2 text-yellow-400">🔥</span> 157
          </Link>
        </span>
        <span className="text-sm font-medium leading-none pb-[1px]">
          <Link href={"/"}>Archival</Link>
        </span>
      </div>

      {/* desktop UI */}
      <div
        className={`${
          isMobileScreen ? "hidden" : "flex"
        } items-center space-x-2`}
      >
        <Link href={"/"} aria-label="google">
          <button
            className="flex items-center justify-center h-8 px-3 text-xs font-medium text-neutral-300 bg-neutral-800 rounded-lg hover:bg-neutral-700 border-neutral-700 border transition-colors ease-in-out duration-150"
            aria-label="link to the countdown page"
          >
            <span className="leading-none">Countdown</span>
          </button>
        </Link>
        <Link href={"/models"} aria-label="google">
          <button
            className="flex items-center justify-center h-8 px-3 text-xs font-medium text-neutral-300 bg-neutral-800 rounded-lg hover:bg-neutral-700 border-neutral-700 border transition-colors ease-in-out duration-150"
            aria-label="link to the models page"
          >
            <span className="leading-none">3D Models</span>
          </button>
        </Link>
        <Link href={"/board"} target="_top" aria-label="google">
          <button
            className="flex items-center justify-center gap-1 h-8 px-3 text-xs font-medium text-neutral-300 bg-neutral-800 rounded-lg hover:bg-neutral-700 border-neutral-700 border transition-colors ease-in-out duration-150"
            aria-label="go to the board page"
          >
            <span className="leading-none">Board</span>
          </button>
        </Link>
      </div>

      {/* small ass UI */}
      <div
        className={`${
          isMobileScreen
            ? "block border border-neutral-700 rounded-lg"
            : "hidden"
        }`}
      >
        <DropdownMenu modal={false} aria-label="progress bar from m1 to m3">
          <DropdownMenuTrigger className="flex items-center justify-center h-8 w-8 text-neutral-300 hover:bg-neutral-800 rounded-lg">
            <Menu size={20} className={`text-${textColor}`} />
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className={`${
              isMobileScreen
                ? "block rounded-lg bg-transparent backdrop-blur-md"
                : "hidden"
            }`}
          >
            <DropdownMenuLabel className={`font-normal text-${textColor}`}>
              Where to go?
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <Link href={"/"} aria-label="google">
              <DropdownMenuItem className={`text-${textColor}`}>
                Countdown
              </DropdownMenuItem>
            </Link>
            <Link href={"/models"} aria-label="google">
              <DropdownMenuItem className={`text-${textColor}`}>
                3D Models
              </DropdownMenuItem>
            </Link>
            <Link href={"/board"} target="_top" aria-label="google">
              <DropdownMenuItem className={`text-${textColor}`}>
                Board
              </DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}
