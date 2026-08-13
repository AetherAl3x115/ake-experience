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
              {/* Pulso viajero — sale del núcleo (50%,50%), llega al nodo,
                  desaparece, repite en loop. Delay escalonado por nodo
                  (i * 0.3) para que no salgan todos al mismo tiempo —
                  se ve como si el núcleo "explorara" cada rama por turnos.
                  Reemplaza la línea estática de rotate() que no coincidía
                  con el ángulo real usado para calcular x/y de cada nodo. */}
              <motion.div
                className="absolute w-1.5 h-1.5 rounded-full bg-gold shadow-[0_0_8px_rgba(215,167,88,0.8)]"
                style={{ left: "50%", top: "50%" }}
                initial={{ x: "-50%", y: "-50%", opacity: 0 }}
                animate={{
                  left: ["50%", "50%", `${x}%`, `${x}%`],
                  top: ["50%", "50%", `${y}%`, `${y}%`],
                  opacity: [0, 1, 1, 0],
                }}
                transition={{
                  duration: 2.2,
                  times: [0, 0.05, 0.85, 1],
                  repeat: Infinity,
                  repeatDelay: 0.6,
                  delay: i * 0.3,
                  ease: "easeInOut",
                }}
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
                <span className="font-mono text-[12px] text-ink-dim whitespace-nowrap uppercase tracking-wide">
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
