"use client";

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "@/lib/utils";

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      "relative h-4 w-full overflow-hidden rounded-full bg-neutral-700",
      className
    )}
    {...props}
    aria-label="a progress bar"
  >
    <ProgressPrimitive.Indicator
      className="h-full w-full flex-1 bg-primary transition-all duration-500 ease-in-out rounded-full"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      aria-label="a progress bar"
    />
  </ProgressPrimitive.Root>
));
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
