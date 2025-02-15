import React from "react";
import Link from "next/link";
import { File, Folder, Tree } from "@/components/magicui/file-tree";

const ELEMENTS = [
  {
    id: "1",
    isSelectable: true,
    name: "models",
    children: [
      {
        id: "2",
        isSelectable: true,
        name: "frontboard",
        children: [
          {
            id: "3",
            isSelectable: true,
            name: "left",
          },
          {
            id: "4",
            isSelectable: true,
            name: "right",
          },
        ],
      },
      {
        id: "5",
        isSelectable: true,
        name: "backboard",
      },
    ],
  },
];

export default function Page() {
  return (
    <main className="max-w-3xl mx-auto flex flex-col pt-3 pb-8">
      <div className="">
        <div className="bg-neutral-800 border border-neutral-700 mt-5 p-5 rounded-md">
          <p className="text-xl pb-2 text-center">Model directory</p>
          <p className="text-xl">
            Currently we serve 3 models, click on the model to load
          </p>
          <div className="relative flex flex-col items-center justify-center overflow-hidden px-0 text-nowrap">
            <Tree
              className="overflow-hidden py-2 px-0"
              initialExpandedItems={["1", "2"]}
              elements={ELEMENTS}
            >
              <Folder element="models" value="1">
                <Folder value="2" element="frontboard">
                  <File value="3">
                    <Link href="/models/frontboard/left">
                      <p>
                        left
                        <span className="text-neutral-400 pl-2">10.23MB</span>
                      </p>
                    </Link>
                  </File>
                  <File value="4">
                    <Link href="/models/frontboard/right">
                      <p>
                        right
                        <span className="text-neutral-400 pl-2">11.12MB</span>
                      </p>
                    </Link>
                  </File>
                </Folder>
                <File value="5">
                  <Link href="/models/backboard">
                    <p>
                      backboard{" "}
                      <span className="text-neutral-400 pl-2">90.63MB</span>
                    </p>
                  </Link>
                </File>
              </Folder>
            </Tree>
          </div>
        </div>
      </div>
    </main>
  );
}
