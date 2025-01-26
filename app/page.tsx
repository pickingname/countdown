import CntDwnT from "@/components/blocks/countdownTitle";
import ToM3 from "@/components/blocks/tom3";
import TotM3 from "@/components/blocks/totm3";

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto flex flex-col px-3 pt-10">
      <div className="">
        <div className="p-5 mt-10 rounded">
          <p className="text-center text-3xl pb-3">you have approximately</p>
          <CntDwnT />
          <p className="text-center pt-3 text-3xl">until school ends</p>
        </div>
        <div className="bg-neutral-800 p-5 mt-10 rounded relative">
          <p className="">Total progress</p>
          <div className="pt-2">
            <ToM3 />
          </div>
        </div>

        <div className="bg-neutral-800 p-5 mt-10 rounded relative">
          <p className="">M3 progress</p>
          <div className="pt-2">
            <TotM3 />
          </div>
        </div>
      </div>
    </main>
  );
}
