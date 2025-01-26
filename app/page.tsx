import CntDwnT from "@/components/blocks/countdownTitle";
import ToM3 from "@/components/blocks/tom3";

export default function Home() {
  return (
    <main className="px-5 pt-10">
      <div className="">
        <div>
          <p className="text-center text-3xl pb-3">you have approximately</p>
          <CntDwnT />
          <p className="text-center pt-3 text-3xl">until we finished finals</p>
        </div>
        <div className="pt-3">
          <ToM3 />
        </div>
      </div>
    </main>
  );
}
