"use client";

import { Canvas } from "@react-three/fiber";
import {
  useGLTF,
  Environment,
  OrbitControls,
  Html,
  useProgress,
} from "@react-three/drei";
import { Suspense } from "react";
import { useErrorBoundary } from "use-error-boundary";

function LoadingSpinner() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="flex flex-col items-center justify-center text-white">
        <p className="text-3xl pb-2 animate-pulse">Loading</p>
        <div className="text-center">
          Backboard model is {Math.round(progress)}% loaded
        </div>
      </div>
    </Html>
  );
}

interface ModelProps {
  url: string;
}

function Model({ url }: ModelProps) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} />;
}

interface BackboardProps {
  modelUrl: string;
}

export default function Backboard({ modelUrl }: BackboardProps) {
  const { ErrorBoundary, didCatch, error } = useErrorBoundary();

  if (didCatch) {
    return (
      <div className="w-content h-[500px] flex items-center justify-center text-white bg-black pt-5">
        <div className="text-center">
          <h2 className="text-xl mb-2">Error Loading 3D Scene</h2>
          <p>{error.message}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-content h-[500px] pt-5">
      <ErrorBoundary>
        <Canvas
          camera={{ position: [0, 0, 5], fov: 60 }}
          style={{ background: "#000000" }}
          className="rounded-md border border-neutral-700"
        >
          <Suspense fallback={<LoadingSpinner />}>
            <Model url={modelUrl} />
            <Environment preset="warehouse" />
            <OrbitControls />
          </Suspense>
        </Canvas>
      </ErrorBoundary>
    </div>
  );
}
