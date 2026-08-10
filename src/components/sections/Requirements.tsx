import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { REQUIREMENTS } from "../../data/content";
import { stagger, staggerItem } from "../../animations/variants";

export function Requirements() {
  return (
    <section
      id="requisitos"
      className="relative min-h-screen py-32 px-6 flex flex-col items-center bg-bg-alt border-y border-border"
    >
      <SectionHeading
        eyebrow="Qué se requiere"
        align="center"
        title="¿Qué se requiere para hacerlo posible?"
        description="Ninguna infraestructura de conocimiento se sostiene sola. Esto es lo que el Academic Knowledge Engine necesita para operar — sin atarnos a un proveedor específico."
      />

      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-16 max-w-6xl w-full"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        variants={stagger(0.08)}
      >
        {REQUIREMENTS.map((area) => (
          <motion.div
            key={area.id}
            variants={staggerItem}
            className="rounded-2xl border border-border bg-surface/50 p-7 flex flex-col"
          >
            <h3 className="font-display text-xl text-ink">{area.title}</h3>
            <p className="text-sm text-ink-dim mt-3 leading-relaxed">
              {area.description}
            </p>
            <ul className="mt-5 space-y-2.5 pt-1">
              {area.items.map((item) => (
                <li
                  key={item}
                  className="text-sm text-ink-dim leading-relaxed pl-4 border-l border-border-strong"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
