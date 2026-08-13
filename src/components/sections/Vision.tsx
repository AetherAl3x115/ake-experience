import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { EngineCore } from "../ui/EngineCore";
import { SCATTERED_SOURCES } from "../../data/content";

export function Vision() {
  return (
    <section
      id="vision"
      className="relative min-h-screen py-32 px-6 flex flex-col items-center justify-center overflow-hidden"
    >
      <SectionHeading
        eyebrow="La visión"
        align="center"
        title="Todo el conocimiento converge en un solo motor"
        description="El Motor de Producción Académica Inteligente se convierte en el núcleo del ecosistema. Cada fuente deja de estar aislada y pasa a formar parte de un mismo cuerpo de conocimiento, gobernado y auditable."
      />

      <div className="relative w-full max-w-2xl aspect-square mt-16 flex items-center justify-center">
        <EngineCore size={180} />

        {SCATTERED_SOURCES.map((source, i) => {
          const angle = (i / SCATTERED_SOURCES.length) * Math.PI * 2;
          const radius = 42;
          const startX = 50 + Math.cos(angle) * radius;
          const startY = 50 + Math.sin(angle) * radius;

          return (
            <motion.div
              key={source.id}
              className="absolute w-3 h-3 rounded-full bg-gold-soft"
              style={{
                boxShadow: "0 0 10px 2px rgba(215,167,88,0.6)",
                transform: "translate(-50%, -50%)",
              }}
              initial={{
                left: `${startX}%`,
                top: `${startY}%`,
                opacity: 0,
              }}
              whileInView={{
                left: "50%",
                top: "50%",
                opacity: [0, 1, 0.9],
              }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                duration: 2.2,
                delay: i * 0.18,
                ease: [0.16, 1, 0.3, 1],
              }}
            />
          );
        })}
      </div>

      <p className="mt-6 font-mono text-sm text-gold tracking-wide">
        Motor de Producción Académica Inteligente
      </p>
    </section>
  );
}
