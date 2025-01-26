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

const evList = [
  {
    evName: "28 Oct 2024",
    evDesc: "M2 2nd term start",
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
    evName: "17-21 Feb 2025",
    evDesc: "M3 Final exam",
  },
];

export function Evnt() {
  return (
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
        </TableRow>
      </TableHeader>
      <TableBody>
        {evList.map((evName) => (
          <TableRow key={evName.evName}>
            <TableCell className="font-medium">{evName.evName}</TableCell>
            <TableCell className="">{evName.evDesc}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter></TableFooter>
    </Table>
  );
}
