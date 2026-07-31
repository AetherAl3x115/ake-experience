import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { TIMELINE } from "../../data/content";

export function WhyNow() {
  return (
    <section
      id="por-que-ahora"
      className="relative min-h-screen py-32 px-6 flex flex-col items-center bg-bg-alt border-y border-border overflow-hidden"
    >
      <SectionHeading
        eyebrow="¿Por qué ahora?"
        align="center"
        title="La evolución natural de dos décadas de educación digital"
        description="Cada etapa resolvió un problema y expuso el siguiente. El Academic Knowledge Engine no aparece de la nada: es donde converge todo lo que la educación digital llevaba años construyendo."
      />

      <div className="relative mt-20 max-w-2xl w-full">
        <div className="absolute left-[26px] md:left-1/2 top-0 bottom-0 w-px bg-border-strong md:-translate-x-1/2" />
        <motion.div
          className="absolute left-[26px] md:left-1/2 top-0 w-px bg-gold origin-top md:-translate-x-1/2"
          style={{ height: "100%" }}
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
        />

        <div className="flex flex-col gap-14">
          {TIMELINE.map((milestone, i) => (
            <motion.div
              key={milestone.year}
              className="relative flex items-start gap-6 pl-16 md:pl-0 md:justify-center"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.div
                className={`absolute left-[26px] md:left-1/2 top-1.5 -translate-x-1/2 rounded-full z-10 ${
                  milestone.highlight
                    ? "w-4 h-4 bg-gold shadow-[0_0_16px_rgba(215,167,88,0.8)]"
                    : "w-3 h-3 bg-ink-faint"
                }`}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              />

              <div
                className={`w-full md:w-[calc(50%-2.5rem)] ${
                  i % 2 === 0 ? "md:mr-auto md:text-right" : "md:ml-auto"
                }`}
              >
                <div
                  className={`inline-flex flex-col rounded-2xl border px-6 py-5 backdrop-blur ${
                    milestone.highlight
                      ? "border-gold/50 bg-gold/[0.07]"
                      : "border-border bg-surface/50"
                  } ${i % 2 === 0 ? "md:items-end" : "md:items-start"}`}
                >
                  <span
                    className={`font-mono text-sm tracking-wide ${
                      milestone.highlight ? "text-gold" : "text-ink-faint"
                    }`}
                  >
                    {milestone.year}
                  </span>
                  <h3 className="font-display text-xl mt-1 text-ink">
                    {milestone.title}
                  </h3>
                  <p className="text-sm text-ink-dim mt-2 leading-relaxed max-w-xs">
                    {milestone.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
