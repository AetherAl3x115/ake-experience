import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUp } from "../../animations/variants";

interface RevealProps {
  children: ReactNode;
  variants?: Variants;
  className?: string;
  delay?: number;
  once?: boolean;
  amount?: number;
}

export function Reveal({
  children,
  variants = fadeUp,
  className,
  delay = 0,
  once = true,
  amount = 0.35,
}: RevealProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      transition={{ delay }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
