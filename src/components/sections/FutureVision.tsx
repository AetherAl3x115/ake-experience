import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { EngineCore } from "../ui/EngineCore";
import { FUTURE_NODES } from "../../data/content";

export function FutureVision() {
  return (
    <section
      id="futuro"
      className="relative min-h-screen py-32 px-6 flex flex-col items-center justify-center overflow-hidden"
    >
      <SectionHeading
        eyebrow="Visión futura"
        align="center"
        title="El mismo motor alimentará todo lo que sigue"
        description="Cada proyecto nuevo deja de partir de cero. Reutiliza el mismo conocimiento verificado, gobernado desde un solo lugar."
      />

      <div className="relative w-full max-w-2xl aspect-square mt-16 flex items-center justify-center">
        <EngineCore size={140} />

        {FUTURE_NODES.map((node, i) => {
          const radius = 40;
          const rad = (node.angle * Math.PI) / 180;
          const x = 50 + Math.cos(rad) * radius;
          const y = 50 + Math.sin(rad) * radius;
          return (
            <div key={node.id}>
              <motion.div
                className="absolute w-px bg-border-strong origin-top"
                style={{
                  left: "50%",
                  top: "50%",
                  height: `${radius}%`,
                  transform: `rotate(${node.angle}deg)`,
                  transformOrigin: "top",
                }}
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
              />
              <motion.div
                className="absolute flex flex-col items-center gap-2"
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  transform: "translate(-50%, -50%)",
                }}
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.1 + 0.3 }}
              >
                <div className="w-3 h-3 rounded-full bg-indigo shadow-[0_0_10px_rgba(91,124,250,0.6)]" />
                <span className="font-mono text-[10px] text-ink-dim whitespace-nowrap uppercase tracking-wide">
                  {node.label}
                </span>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
