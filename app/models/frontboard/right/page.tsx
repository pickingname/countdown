"use client";

import Backboard from "@/components/ui/backboard";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRef } from "react";

export default function Page() {
  const modelRef = useRef<HTMLDivElement>(null);

  const scrollToModel = () => {
    modelRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="max-w-3xl mx-auto flex flex-col pt-3 pb-8">
      <div className="">
        <div className="bg-neutral-800 border border-neutral-700 mt-5 p-5 rounded-md">
          <p className="text-xl pb-2 text-center">
            Welcome to the Right frontboard model
          </p>
          <p className="text-xl">How to control?</p>
          <p className="pl-4 text-pretty text-neutral-300">
            On a computer, To navigate the model, use the{" "}
            <span className="underline">left click to rotate</span> it by
            dragging your mouse, and the{" "}
            <span className="underline">right click to pan</span> by moving your
            mouse while holding the button.{" "}
            <span className="underline">
              Zoom in and out using the scroll wheel
            </span>{" "}
            on your mouse.
          </p>
          <p className="pl-4 text-pretty pt-2 text-neutral-300 pb-2">
            On a mobile device,{" "}
            <span className="underline">use one of your finger to rotate</span>{" "}
            the model by dragging it,{" "}
            <span className="underline">pinch to zoom</span> in and out, and{" "}
            <span className="underline">pinch and drag to pan</span>. Happy
            exploring!
          </p>
          <div className="flex space-x-2">
            <Button onClick={scrollToModel}>Click here to jump to model</Button>
            <Link href="/models">
              <Button>Go back</Button>
            </Link>
          </div>
        </div>
        <div ref={modelRef}>
          <Backboard modelUrl="https://3jcyw639he.ufs.sh/f/Ij2Ry4WvTSFuZCrDu3I4foOyQCzUdKNkt7HJsRI8hecx9Xag" />
        </div>
      </div>
    </main>
  );
}
