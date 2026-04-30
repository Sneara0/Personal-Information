"use client";
import { motion } from "framer-motion";

export const FloatElement = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    animate={{ y: [0, -20, 0] }}
    transition={{
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
      delay: delay,
    }}
  >
    {children}
  </motion.div>
);