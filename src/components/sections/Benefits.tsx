import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { BENEFITS } from "../../data/content";
import { stagger, staggerItem } from "../../animations/variants";

export function Benefits() {
  return (
    <section
      id="beneficios"
      className="relative min-h-screen py-32 px-6 flex flex-col items-center"
    >
      <SectionHeading
        eyebrow="Beneficios"
        align="center"
        title="Un mismo motor, cuatro formas de generar valor"
      />

      <motion.div
        className="grid md:grid-cols-2 gap-5 mt-16 max-w-4xl w-full"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={stagger(0.12)}
      >
        {BENEFITS.map((group) => (
          <motion.div
            key={group.title}
            variants={staggerItem}
            className="rounded-2xl border border-border bg-surface/50 p-8"
          >
            <span className="font-mono text-xs text-gold">{group.eyebrow}</span>
            <h3 className="font-display text-2xl mt-2 text-ink">{group.title}</h3>
            <ul className="mt-5 space-y-2.5">
              {group.items.map((item) => (
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
