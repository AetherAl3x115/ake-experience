import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface CTAButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: "solid" | "ghost";
}

export function CTAButton({ children, onClick, variant = "solid" }: CTAButtonProps) {
  const base =
    "inline-flex items-center gap-3 rounded-full px-7 py-3.5 text-sm font-medium tracking-wide transition-colors";
  const styles =
    variant === "solid"
      ? "bg-gold text-[#0a0b10] hover:bg-gold-soft"
      : "border border-border-strong text-ink hover:border-gold hover:text-gold";

  return (
    <motion.button
      onClick={onClick}
      className={`${base} ${styles}`}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.button>
  );
}
