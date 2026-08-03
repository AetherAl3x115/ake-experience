import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { ROADMAP } from "../../data/content";

export function Roadmap() {
  return (
    <section
      id="roadmap"
      className="relative min-h-screen py-32 px-6 flex flex-col items-center bg-bg-alt border-y border-border overflow-hidden"
    >
      <SectionHeading
        eyebrow="Roadmap"
        align="center"
        title="Diez posibilidades, una sola infraestructura"
        description="El roadmap no entrega funcionalidades sueltas: construye, fase por fase, una plataforma de conocimiento institucional."
      />

      <div className="relative mt-20 max-w-5xl w-full">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border-strong md:-translate-x-1/2" />
        <motion.div
          className="absolute left-4 md:left-1/2 top-0 w-px bg-gold origin-top md:-translate-x-1/2"
          style={{ height: "100%" }}
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1.6, ease: "easeInOut" }}
        />

        <div className="flex flex-col gap-10">
          {ROADMAP.map((phase, i) => {
            const isEven = i % 2 === 0;
            return (
              <div
                key={phase.number}
                className={`relative flex items-start md:items-center gap-5 md:gap-0 pl-12 md:pl-0 ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div
                  className={`hidden md:block md:w-1/2 ${isEven ? "pr-12 text-right" : "pl-12 text-left"}`}
                >
                  <RoadmapCard phase={phase} delay={i * 0.05} />
                </div>

                <motion.div
                  className="absolute left-4 md:left-1/2 top-1.5 -translate-x-1/2 w-3 h-3 rounded-full bg-gold shadow-[0_0_10px_rgba(215,167,88,0.7)] z-10"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, amount: 0.8 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                />

                <div className="md:hidden w-full">
                  <RoadmapCard phase={phase} delay={i * 0.05} />
                </div>
                <div className="hidden md:block md:w-1/2" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function RoadmapCard({
  phase,
  delay,
}: {
  phase: (typeof ROADMAP)[number];
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.5, delay }}
    >
      <span className="font-mono text-xs text-gold">{phase.number}</span>
      <h4 className="font-display text-lg text-ink mt-1">{phase.title}</h4>
      <p className="text-sm text-ink-dim mt-1.5 leading-relaxed">
        {phase.description}
      </p>
    </motion.div>
  );
}
