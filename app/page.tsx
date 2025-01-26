import CntDwnT from "@/components/blocks/countdownTitle";
import M3Shalf from "@/components/blocks/m3Shalf";
import ToM3 from "@/components/blocks/tom3";
import TotM3 from "@/components/blocks/totm3";

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto flex flex-col px-3">
      <div className="">
        <div className="p-5 mt-10 rounded">
          <p className="text-center text-3xl pb-3">you have approximately</p>
          <CntDwnT />
          <p className="text-center pt-3 text-3xl">until you finishes M3</p>
        </div>
        <div className="bg-neutral-800 p-5 mt-10 rounded relative border-neutral-700 border">
          <p className="">Total progress</p>
          <div className="pt-2">
            <ToM3 />
          </div>
        </div>

        <div className="bg-neutral-800 p-5 mt-10 rounded relative border-neutral-700 border">
          <p className="">Total M3 progress</p>
          <div className="pt-2">
            <TotM3 />
          </div>
        </div>

        <div className="bg-neutral-800 p-5 mt-10 rounded relative border-neutral-700 border">
          <p className="">M3, Term 2 progress</p>
          <div className="pt-2">
            <M3Shalf />
          </div>
        </div>
      </div>
    </main>
  );
}
