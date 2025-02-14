import CntDwnT from "@/components/blocks/countdownTitle";
import { Evnt } from "@/components/blocks/eventTable";
import M3Shalf from "@/components/blocks/m3Shalf";
import ToM3 from "@/components/blocks/tom3";
import TotM3 from "@/components/blocks/totm3";
import LiveBadge from "@/components/ui/liveBadge";

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto flex flex-col pt-3 pb-8">
      <div className="">
        <div className="p-5 rounded">
          <p className="text-center text-3xl pb-3">you have approximately</p>
          <CntDwnT />
          <p className="text-center pt-3 text-3xl">until you finishes M3</p>
        </div>

        <div className="bg-neutral-800 p-5 rounded relative border-neutral-700 border">
          <LiveBadge text="Total progress" />
          <div className="pt-2">
            <ToM3 />
          </div>
        </div>

        <div className="bg-neutral-800 p-5 mt-10 rounded relative border-neutral-700 border">
          <LiveBadge text="Total M3 progress" />
          <div className="pt-2">
            <TotM3 />
          </div>
        </div>

        <div className="bg-neutral-800 p-5 mt-10 rounded relative border-neutral-700 border">
          <LiveBadge text="M3, Term 2 progress" />
          <div className="pt-2">
            <M3Shalf />
          </div>
        </div>

        <div className="bg-neutral-800 p-5 mt-10 rounded relative border-neutral-700 border">
          <LiveBadge text="Events Table" />
          <div>
            <Evnt />
          </div>
        </div>
      </div>
    </main>
  );
}
