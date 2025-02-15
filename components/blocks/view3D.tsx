"use client";

import Backboard from "@/components/ui/backboard";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Download } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface View3DProps {
  name: string;
  modelURL: string;
}

export default function View3D({ name, modelURL }: View3DProps) {
  const modelRef = useRef<HTMLDivElement>(null);

  const scrollToModel = () => {
    modelRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="max-w-3xl mx-auto flex flex-col pt-3 pb-8">
      <div className="">
        <div className="bg-neutral-800 border border-neutral-700 mt-5 p-5 rounded-md">
          <div className="bg-neutral-700 p-3 rounded-md border-neutral-600 border mb-3">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-xl">{name}</p>
                <p className="text-sm text-neutral-400">
                  Taken on Feb 15, 2025
                </p>
              </div>

              <div className="flex space-x-2">
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link href={"/models"}>
                        <Button
                          variant="outline"
                          size="icon"
                          className="bg-neutral-600 border-neutral-500"
                        >
                          <ChevronLeft />
                        </Button>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Go back to models page</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link href={modelURL}>
                        <Button
                          variant="outline"
                          size="icon"
                          className="bg-neutral-600 border-neutral-500"
                        >
                          <Download />
                        </Button>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>3D file is in .glb format</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          </div>
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
            <Button onClick={scrollToModel}>Jump to model</Button>
          </div>
        </div>
        <div ref={modelRef}>
          <Backboard modelUrl={modelURL} />
        </div>
      </div>
    </main>
  );
}
