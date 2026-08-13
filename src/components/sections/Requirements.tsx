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
        description="Para que este motor pueda operar necesitamos siete cosas: capacidad de cómputo, conocimiento representado y almacenado, modelos de lenguaje como capacidad de generación, mecanismos de integración, seguridad y gobernanza, el equipo humano que lo mantiene, y el presupuesto que se deriva de todo lo anterior."
      />

      <motion.div
        className="grid lg:grid-cols-2 gap-5 mt-16 max-w-6xl w-full"
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
            <p className="font-mono text-xs text-gold mt-2 tracking-wide">
              {area.tagline}
            </p>

            <div className="mt-5 flex flex-col gap-4">
              {area.groups.map((group, gi) => (
                <div key={group.label ?? gi}>
                  {group.label && (
                    <span className="font-mono text-[10px] text-ink-faint uppercase tracking-wide">
                      {group.label}
                    </span>
                  )}
                  <ul
                    className={
                      group.label ? "mt-1.5 space-y-1.5" : "space-y-1.5"
                    }
                  >
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="text-sm text-ink-dim leading-relaxed pl-4 border-l border-border-strong"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {area.note && (
              <p className="text-sm text-ink-faint leading-relaxed mt-5 pt-4 border-t border-border italic">
                {area.note}
              </p>
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
