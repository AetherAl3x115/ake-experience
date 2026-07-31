import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { BRIDGE_FLOW } from "../../data/content";

export function LearningBridge() {
  return (
    <section
      id="learning-bridge"
      className="relative min-h-screen py-32 px-6 flex flex-col items-center bg-bg-alt border-y border-border"
    >
      <SectionHeading
        eyebrow="Learning Bridge"
        align="center"
        title="Moodle y el motor, conectados por un solo puente"
        description="Un profesor no necesita saber qué ocurre por dentro. Presiona un botón, y el conocimiento verificado recorre el puente hasta convertirse en un curso terminado."
      />

      <div className="mt-16 max-w-md w-full flex flex-col items-center">
        {BRIDGE_FLOW.map((step, i) => (
          <div key={step.id} className="flex flex-col items-center w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className={`w-full rounded-xl border px-6 py-4 text-center backdrop-blur ${
                i === 2
                  ? "border-gold/50 bg-gold/[0.06]"
                  : "border-border bg-surface/60"
              }`}
            >
              <p
                className={`font-display text-lg ${
                  i === 2 ? "text-gold-soft" : "text-ink"
                }`}
              >
                {step.label}
              </p>
              {step.detail && (
                <p className="text-xs text-ink-faint mt-1 font-mono">{step.detail}</p>
              )}
            </motion.div>

            {i < BRIDGE_FLOW.length - 1 && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                whileInView={{ opacity: 1, height: 32 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.4, delay: i * 0.08 + 0.2 }}
                className="flex flex-col items-center justify-center py-1 text-ink-faint"
              >
                <ArrowDown size={16} />
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
