"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface NumberRollerProps {
  value: number;
  suffix?: string;
  duration?: number;
  onlyShowChangedValues?: boolean;
}

export const NumberRoller: React.FC<NumberRollerProps> = ({
  value,
  suffix = "",
  duration = 0.5,
  onlyShowChangedValues = false,
}) => {
  const [prevValue, setPrevValue] = useState(value);
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    if (value !== prevValue) {
      setDisplayValue(value);
      setPrevValue(value);
    }
  }, [value, prevValue]);

  const digits = displayValue.toString().split("");
  const prevDigits = prevValue.toString().split("");

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      {digits.map((digit, i) => {
        const prevDigit = prevDigits[i] || "0";
        const shouldAnimate = !onlyShowChangedValues || prevDigit !== digit;

        return (
          <div
            key={i}
            style={{
              height: "1em",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <AnimatePresence initial={false}>
              <motion.span
                key={`${i}-${digit}`}
                initial={{
                  y: shouldAnimate ? 100 : 0,
                }}
                animate={{
                  y: 0,
                }}
                exit={{
                  y: shouldAnimate ? -100 : 0,
                }}
                transition={{
                  duration: shouldAnimate ? duration : 0,
                  ease: "anticipate",
                }}
                style={{
                  position: "absolute",
                  display: "block",
                }}
              >
                {digit}
              </motion.span>
            </AnimatePresence>
          </div>
        );
      })}
      {suffix && (
        <motion.span
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          {suffix}
        </motion.span>
      )}
    </div>
  );
};
