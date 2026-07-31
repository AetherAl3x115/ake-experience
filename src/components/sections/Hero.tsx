import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { EngineCore } from "../ui/EngineCore";
import { CTAButton } from "../ui/CTAButton";

export function Hero() {
  const scrollNext = () => {
    document.getElementById("problema")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_20%,rgba(91,124,250,0.14),transparent_55%)]" />
      <div className="absolute -z-10 opacity-70">
        <EngineCore size={620} />
      </div>

      <motion.span
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="font-mono text-xs tracking-[0.3em] uppercase text-gold mb-8"
      >
        Plataforma Institucional de Producción Académica Inteligente
      </motion.span>

      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="font-display text-balance text-center text-4xl sm:text-6xl md:text-7xl leading-[1.05] max-w-5xl text-ink"
      >
        ¿Qué pasaría si una universidad
        <br className="hidden md:block" /> pudiera aprender de sí misma?
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.7 }}
        className="mt-8 text-center text-ink-dim text-lg max-w-xl"
      >
        Un recorrido por el Academic Knowledge Engine: la infraestructura
        que convierte el conocimiento disperso en un activo institucional
        gobernado.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.95 }}
        className="mt-12"
      >
        <CTAButton onClick={scrollNext}>
          Comenzar recorrido
          <ArrowDown size={16} />
        </CTAButton>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-ink-faint"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowDown size={20} />
      </motion.div>
    </section>
  );
}
