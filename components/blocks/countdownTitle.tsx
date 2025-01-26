"use client";

import { useState, useEffect } from "react";
import { Roller } from "@fecapark/number-rolling";

export default function CountdownTitle() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2025-02-13T00:00:00");

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();

    return () => clearInterval(timer);
  }, []);

  const formatUnit = (value: number, unit: string) => {
    return `${unit}${value === 1 ? "" : "s"}`;
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="flex items-center gap-2 text-2xl">
        <Roller
          value={timeLeft.days}
          suffix={` ${formatUnit(timeLeft.days, "Day")}`}
          suffixPosition="back"
          align="center"
          fontSize={48}
          rollDuration={0.6}
          shiftDuration={0.45}
          staggering={false}
          diff={false}
          rollWay="down"
        />
        <Roller
          value={timeLeft.hours}
          suffix={` ${formatUnit(timeLeft.hours, "Hour")}`}
          suffixPosition="back"
          align="center"
          fontSize={48}
          rollDuration={0.6}
          shiftDuration={0.45}
          staggering={false}
          diff={false}
          rollWay="down"
        />
        <Roller
          value={timeLeft.minutes}
          suffix={` ${formatUnit(timeLeft.minutes, "Minute")}`}
          suffixPosition="back"
          align="center"
          fontSize={48}
          rollDuration={0.6}
          shiftDuration={0.45}
          staggering={false}
          diff={false}
          rollWay="down"
        />
        <Roller
          value={timeLeft.seconds}
          suffix={` ${formatUnit(timeLeft.seconds, "Second")}`}
          suffixPosition="back"
          align="center"
          fontSize={48}
          rollDuration={0.6}
          shiftDuration={0.45}
          staggering={true}
          diff={true}
          rollWay="up"
        />
      </div>
    </div>
  );
}
