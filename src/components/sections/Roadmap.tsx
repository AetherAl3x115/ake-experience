import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { ROADMAP } from "../../data/content";
import { stagger, staggerItem } from "../../animations/variants";

export function Roadmap() {
  return (
    <section
      id="roadmap"
      className="relative min-h-screen py-32 px-6 flex flex-col items-center bg-bg-alt border-y border-border"
    >
      <SectionHeading
        eyebrow="Roadmap"
        align="center"
        title="Diez posibilidades, una sola infraestructura"
        description="El roadmap no entrega funcionalidades sueltas: construye, fase por fase, una plataforma de conocimiento institucional."
      />

      <motion.div
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-16 max-w-6xl w-full"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        variants={stagger(0.08)}
      >
        {ROADMAP.map((phase) => (
          <motion.div
            key={phase.number}
            variants={staggerItem}
            className="rounded-2xl border border-border bg-surface/50 p-8"
          >
            <span className="font-mono text-xs text-gold">{phase.number}</span>
            <h4 className="font-display text-lg text-ink mt-2">
              {phase.title}
            </h4>
            <p className="text-sm text-ink-dim mt-2.5 leading-relaxed">
              {phase.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
