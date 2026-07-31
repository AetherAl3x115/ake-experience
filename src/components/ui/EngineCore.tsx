import { motion } from "framer-motion";

interface EngineCoreProps {
  size?: number;
  className?: string;
}

export function EngineCore({ size = 340, className = "" }: EngineCoreProps) {
  return (
    <div
      className={`relative ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(215,167,88,0.35) 0%, rgba(215,167,88,0.08) 45%, transparent 70%)",
        }}
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      {[0.92, 0.68, 0.44].map((scale, i) => (
        <div
          key={i}
          className={`absolute inset-0 rounded-full border border-gold/20 ${
            i % 2 === 0 ? "animate-spin-slow" : "animate-spin-slower"
          }`}
          style={{
            transform: `scale(${scale})`,
            borderStyle: "dashed",
          }}
        />
      ))}
      <div
        className="absolute rounded-full"
        style={{
          inset: "38%",
          background:
            "radial-gradient(circle, #f4e3bd 0%, #d7a758 55%, #8a6427 100%)",
          boxShadow:
            "0 0 60px 12px rgba(215,167,88,0.45), 0 0 120px 40px rgba(215,167,88,0.15)",
        }}
      />
    </div>
  );
}
