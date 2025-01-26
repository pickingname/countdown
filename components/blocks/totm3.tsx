"use client";

import { Progress } from "../ui/progress";
import { useState, useEffect } from "react";

export default function TotM3() {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const startDate = new Date("2024-10-28").getTime();
    const endDate = new Date("2025-02-20T08:30:00Z").getTime();
    const totalDuration = endDate - startDate;

    const calculateProgress = () => {
      const now = new Date().getTime();
      const elapsed = now - startDate;
      const progress = (elapsed / totalDuration) * 100;
      setPercentage(Math.min(Math.max(progress, 0), 100));
    };

    const timer = setInterval(calculateProgress, 5000);
    calculateProgress();

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col gap-2 items-center">
      <Progress value={percentage} className="h-3" />
      <div className="flex justify-between text-sm w-full">
        <p>10 Oct 2024</p>
        <p>{percentage.toFixed(2)}%</p>
        <p>20 Feb 2025</p>
      </div>
    </div>
  );
}
