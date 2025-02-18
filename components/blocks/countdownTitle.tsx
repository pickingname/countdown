"use client";

import { useState, useEffect, useRef } from "react";
import NumberFlow, { NumberFlowGroup } from "@number-flow/react";
import { Roller } from "@fecapark/number-rolling";
import confetti from "canvas-confetti";

interface TimeBoxProps {
  value: number;
  unit: string;
  useRoller?: boolean;
}

const TimeBox = ({ value, unit, useRoller = true }: TimeBoxProps) => {
  return (
    <div className="flex items-center gap-2 -mx-1">
      <div className="w-[80px] h-[80px] bg-neutral-800 rounded-lg flex items-center justify-center">
        {useRoller ? (
          <Roller
            value={value}
            align="center"
            fontSize={48}
            rollDuration={0.6}
            shiftDuration={0.45}
            staggering={false}
            diff={false}
            rollWay="down"
          />
        ) : (
          <NumberFlow
            className="text-5xl"
            trend={-1}
            value={value}
            digits={{ 1: { max: 5 } }}
            format={{ minimumIntegerDigits: 2 }}
          />
        )}
      </div>
      <div className="text-xl w-[70px]">
        <span>{unit}</span>
        <span className="absolute">{value === 1 ? "" : "s"}</span>
      </div>
    </div>
  );
};

export default function CountdownTitle() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const fireworksTriggered = useRef(false);

  useEffect(() => {
    // Create target date at 14:40 GMT+8
    const targetDate = new Date("2025-02-20T06:40:00Z");

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
      } else if (!fireworksTriggered.current) {
        triggerFireworks();
        fireworksTriggered.current = true;
      }
    };

    const triggerFireworks = () => {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });

      setTimeout(() => {
        const end = Date.now() + 3 * 1000;
        const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"];

        const frame = () => {
          if (Date.now() > end) return;

          confetti({
            particleCount: 2,
            angle: 60,
            spread: 55,
            startVelocity: 60,
            origin: { x: 0, y: 0.5 },
            colors: colors,
          });
          confetti({
            particleCount: 2,
            angle: 120,
            spread: 55,
            startVelocity: 60,
            origin: { x: 1, y: 0.5 },
            colors: colors,
          });

          requestAnimationFrame(frame);
        };

        frame();
      }, 2000);
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <NumberFlowGroup>
        <div className="flex items-center justify-center">
          <div className="flex flex-col md:flex-row justify-center gap-6 w-full md:w-auto">
            <div className="flex justify-center gap-6">
              <TimeBox value={timeLeft.days} unit="Day" />
              <TimeBox value={timeLeft.hours} unit="Hour" />
            </div>
            <div className="flex justify-center gap-6">
              <TimeBox value={timeLeft.minutes} unit="Minute" />
              <TimeBox
                value={timeLeft.seconds}
                unit="Second"
                useRoller={false}
              />
            </div>
          </div>
        </div>
      </NumberFlowGroup>
    </div>
  );
}
