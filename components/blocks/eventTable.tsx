"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Input } from "../ui/input";

const evList = [
  {
    evName: "28 Oct 2024",
    evDesc: "M3 2nd term start",
  },
  {
    evName: "29 Jan 2025",
    evDesc: "Chinese new year",
  },
  {
    evName: "31 Jan 2025",
    evDesc: "New year party",
  },
  {
    evName: "9 Feb 2025",
    evDesc: "M1/M4 Pre exam",
  },
  {
    evName: "17 Feb 2025",
    evDesc: "M3 Final exam",
  },
  {
    evName: "15 Mar 2025",
    evDesc: "M1/M4 Entering exam",
  },
  {
    evName: "21 April 2025",
    evDesc: "Supplement week",
  },
  {
    evName: "--",
    evDesc: "2568 AC Start",
  },
];

const getTimeLeft = (eventDate: string) => {
  const now = new Date();
  const event = new Date(eventDate);
  const diff = event.getTime() - now.getTime();

  if (diff <= 0) return "Passed";

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  if (isNaN(days) || isNaN(hours)) return "Unknown";

  const dayText = days === 1 ? "day" : "days";
  const hourText = hours === 1 ? "hour" : "hours";

  return `${days} ${dayText}, ${hours} ${hourText}`;
};

export function Evnt() {
  const [, setTime] = useState(new Date());
  const [searchText, setSearchText] = useState("");

  // Filter events based on search text
  const filteredEvents = evList.filter((event) =>
    event.evDesc.toLowerCase().includes(searchText.toLowerCase())
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 60000);

    return () => clearInterval(timer);
  }, []);
  return (
    <main>
      <div>
        <div className="pt-3">
          <Input
            placeholder="Find events"
            className="h-8 bg-neutral-700 shadow-lg shadow-black/20"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
      </div>
      <Table>
        <TableCaption className="text-balance">
          Only important events are shown. Source:{" "}
          <Link
            href="https://www.ps.ac.th/psth/?page_id=13935"
            target="_blank"
            className="underline hover:text-blue-500 transition-colors duration-150 ease-in-out"
          >
            https://www.ps.ac.th/psth/?page_id=13935
          </Link>
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[150px]">Date</TableHead>
            <TableHead className="">Event</TableHead>
            <TableHead className="text-right">TTL</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredEvents.map((evName) => (
            <TableRow key={evName.evName}>
              <TableCell className="font-medium">{evName.evName}</TableCell>
              <TableCell className="">{evName.evDesc}</TableCell>
              <TableCell className="text-right">
                {getTimeLeft(evName.evName)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter></TableFooter>
      </Table>
    </main>
  );
}
