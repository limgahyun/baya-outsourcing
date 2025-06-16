"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export function FadeInSection({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export function SlideFromLeft({
  children,
  delay,
}: {
  children: ReactNode;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1, ease: "easeOut", delay: delay }}
    >
      {children}
    </motion.div>
  );
}

export function SlideFromRight({
  children,
  delay,
}: {
  children: ReactNode;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1, ease: "easeOut", delay: delay }}
    >
      {children}
    </motion.div>
  );
}
