import CntDwnT from "@/components/blocks/countdownTitle";

export default function Home() {
  return (
    <main className="px-5">
      <div className="">
        <div>
          <p className="text-center text-3xl">you only have</p>
          <CntDwnT />
          <p className="text-center pt-3 text-3xl">
            until your friends will be gone
          </p>
        </div>
      </div>
    </main>
  );
}
