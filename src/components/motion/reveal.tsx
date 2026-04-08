"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

export function Reveal({
  children,
  className,
  delay = 0,
  y = 18,
}: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y, filter: "blur(4px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.15, margin: "0px 0px -8% 0px" }}
      transition={{
        duration: 1.05,
        ease: [0.22, 1, 0.36, 1],
        delay,
        opacity: { duration: 0.95 },
        filter: { duration: 1.15 },
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
