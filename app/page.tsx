import CntDwnT from "@/components/blocks/countdownTitle";
import ToM3 from "@/components/blocks/tom3";

export default function Home() {
  return (
    <main className="px-5">
      <div className="">
        <div>
          <p className="text-center text-3xl pb-3">you only have</p>
          <CntDwnT />
          <p className="text-center pt-3 text-3xl">
            until your friends will be gone
          </p>
        </div>
        <div className="pt-3">
          <ToM3 />
        </div>
      </div>
    </main>
  );
}
