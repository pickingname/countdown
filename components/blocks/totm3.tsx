"use client";

import { Progress } from "../ui/progress";
import { useState, useEffect } from "react";

export default function TotM3() {
  const [realPercentage, setRealPercentage] = useState(0);
  const [displayPercentage, setDisplayPercentage] = useState(0);

  useEffect(() => {
    const startDate = new Date("2024-5-16").getTime();
    const endDate = new Date("2025-02-20T08:30:00Z").getTime();
    const totalDuration = endDate - startDate;

    const calculateProgress = () => {
      const now = new Date().getTime();
      const elapsed = now - startDate;
      const progress = (elapsed / totalDuration) * 100;
      setRealPercentage(Math.min(Math.max(progress, 0), 100));
    };

    const timer = setInterval(calculateProgress, 5000);
    calculateProgress();

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const animationTimer = setTimeout(() => {
      setDisplayPercentage(realPercentage);
    }, 200);

    return () => clearTimeout(animationTimer);
  }, [realPercentage]);

  return (
    <div className="flex flex-col gap-2 items-center">
      <Progress value={displayPercentage} className="h-3" />
      <div className="flex justify-between text-sm w-full">
        <p>16 May 2024</p>
        <p>{displayPercentage.toFixed(2)}%</p>
        <p>20 Feb 2025</p>
      </div>
    </div>
  );
}
