"use client";

import { Roller } from "@fecapark/number-rolling";

export default function Home() {
  return (
    <main className="">
      {/* <ModeToggle /> */}
      <div>
        <Roller
          value={13000}
          suffix=""
          suffixPosition="back"
          align="center"
          fontSize={48}
          rollDuration={0.6}
          shiftDuration={0.45}
          staggering={false}
          diff={false}
          rollWay="down"
        />
      </div>
    </main>
  );
}
