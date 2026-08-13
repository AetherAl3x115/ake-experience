import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { ENGINE_LAYERS } from "../../data/content";
import { stagger, staggerItem } from "../../animations/variants";

export function Engine() {
  return (
    <section
      id="motor"
      className="relative min-h-screen py-32 px-6 flex flex-col items-center bg-bg-alt border-y border-border"
    >
      <SectionHeading
        eyebrow="Motor de Producción Académica Inteligente"
        align="center"
        title="La infraestructura que gobierna el conocimiento"
        description="No es un chatbot ni un buscador. Es la capa que adquiere, organiza, versiona y sirve conocimiento académico a todo lo demás."
      />

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-16 max-w-5xl w-full"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger(0.1)}
      >
        {ENGINE_LAYERS.map((layer, i) => (
          <motion.div
            key={layer.id}
            variants={staggerItem}
            className="group relative rounded-2xl border border-border bg-surface/60 backdrop-blur p-6 hover:border-gold/40 transition-colors"
          >
            <span className="font-mono text-xs text-ink-faint">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="font-display text-xl mt-3 text-ink">
              {layer.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-dim">
              {layer.body}
            </p>
            <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-gold/0 group-hover:via-gold/50 to-transparent transition-all duration-500" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
