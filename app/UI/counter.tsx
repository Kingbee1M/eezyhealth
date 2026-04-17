'use client'
import { useEffect, useRef } from "react";
import { useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { motion } from "framer-motion";

interface CounterProps {
  first: number;
  second: number | null;
  icon?: React.ReactNode | null;
  suffix?: string;
}

const Counter = ({ first, second, icon, suffix = "" }: CounterProps) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  // 1. Independent Motion Values
  const countFirst = useMotionValue(0);
  const countSecond = useMotionValue(0);

  // 2. Independent Transforms (Formatting)
  const displayFirst = useTransform(countFirst, (latest) => 
    Math.round(latest).toLocaleString()
  );
  const displaySecond = useTransform(countSecond, (latest) => 
    Math.round(latest).toString()
  );

  useEffect(() => {
    if (inView) {
      // Animate the first number
      animate(countFirst, first, { duration: 2, ease: "easeOut" });

      // Animate the second number only if it exists
      if (second !== null) {
        animate(countSecond, second, { duration: 2, ease: "easeOut" });
      }
    }
  }, [inView, first, second, countFirst, countSecond]);

  return (
    <div ref={ref} className="flex ">
      {/* Optional Icon (e.g., < ) */}
      {icon && <span className="mt-2 text-lg font-bold">{icon}</span>}

      {/* The Primary Number */}
      <motion.span className=" mt-0.5 text-lg font-bold">
        {displayFirst}
      </motion.span>

      {/* The Secondary Number (Acting independently) */}
      {second !== null && (
          <motion.span className=" text-lg font-bold">
            {displaySecond}
          </motion.span>
      )}

      {/* The Suffix (e.g., M, %, min) */}
      <span className=" text-lg font-bold">{suffix}</span>
    </div>
  );
};

export default Counter;