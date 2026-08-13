import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { INSTITUTIONS } from "../../data/content";
import { stagger, staggerItem } from "../../animations/variants";

export function Institutions() {
  return (
    <section
      id="instituciones"
      className="relative min-h-screen py-32 px-6 flex flex-col items-center bg-bg-alt border-y border-border"
    >
      <SectionHeading
        eyebrow="Referentes"
        align="center"
        title="Instituciones y empresas que siguen esta dirección"
        description="Esto no significa que operen con la misma arquitectura. Significa que la dirección tecnológica del Motor de Producción Académica Inteligente — conocimiento propio, gobernado, y recuperado antes de generar — está alineada con hacia dónde se mueve la vanguardia."
      />

      <motion.div
        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-16 max-w-6xl w-full"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        variants={stagger(0.06)}
      >
        {INSTITUTIONS.map((inst) => (
          <motion.div
            key={inst.id}
            variants={staggerItem}
            className="group relative rounded-2xl border border-border bg-surface/40 backdrop-blur p-6 hover:border-gold/40 transition-colors flex flex-col"
          >
            <div className="w-10 h-10 rounded-full border border-border-strong flex items-center justify-center font-display text-lg text-gold-soft">
              {inst.name.charAt(0)}
            </div>
            <h3 className="font-display text-lg text-ink mt-4 leading-tight">
              {inst.name}
            </h3>
            <span className="font-mono text-[10px] text-gold uppercase tracking-wide mt-1">
              {inst.category}
            </span>
            <p className="text-sm text-ink-dim mt-3 leading-relaxed">
              {inst.description}
            </p>
            <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-gold/0 group-hover:via-gold/50 to-transparent transition-all duration-500" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
