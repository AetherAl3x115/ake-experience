import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { EXECUTION_PHASES } from "../../data/content";
import { stagger, staggerItem } from "../../animations/variants";
import type { ExecutionPhase } from "../../types";

const RADIUS = 34;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export function ExecutionPhases() {
  return (
    <section
      id="fases-ejecucion"
      className="relative min-h-screen py-32 px-6 flex flex-col items-center bg-bg-alt border-y border-border"
    >
      <SectionHeading
        eyebrow="Plan de ejecución"
        align="center"
        title="Dónde estamos hoy, fase por fase"
        description="No arrancamos de cero: el Constructor ya está en producción. Cada fase siguiente se construye sobre la anterior — sin saltar pasos."
      />

      <motion.div
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-16 max-w-6xl w-full"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        variants={stagger(0.08)}
      >
        {EXECUTION_PHASES.map((phase) => (
          <motion.div
            key={phase.id}
            variants={staggerItem}
            className={`rounded-2xl border p-8 ${
              phase.optional
                ? "border-border/60 bg-surface/25"
                : "border-border bg-surface/50"
            }`}
          >
            <div className="flex items-start gap-5">
              <ProgressRing phase={phase} />
              <div className="flex-1 min-w-0">
                <span className="font-mono text-xs text-gold">
                  {phase.number}
                </span>
                <h4 className="font-display text-lg text-ink mt-1">
                  {phase.title}
                </h4>
                <StatusBadge status={phase.status} />
              </div>
            </div>
            <p className="text-sm text-ink-dim mt-4 leading-relaxed">
              {phase.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

function ProgressRing({ phase }: { phase: ExecutionPhase }) {
  const offset = CIRCUMFERENCE * (1 - phase.progress / 100);

  return (
    <div className="relative w-20 h-20 flex-shrink-0 flex items-center justify-center">
      <svg className="w-20 h-20 -rotate-90" viewBox="0 0 80 80">
        <circle
          cx="40"
          cy="40"
          r={RADIUS}
          fill="none"
          stroke="rgba(244,241,232,0.12)"
          strokeWidth="5"
        />
        <motion.circle
          cx="40"
          cy="40"
          r={RADIUS}
          fill="none"
          stroke="#d7a758"
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray={CIRCUMFERENCE}
          initial={{ strokeDashoffset: CIRCUMFERENCE }}
          whileInView={{ strokeDashoffset: offset }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </svg>
      <span className="absolute font-mono text-xs text-ink">
        {phase.progress}%
      </span>
    </div>
  );
}

function StatusBadge({ status }: { status: ExecutionPhase["status"] }) {
  const label =
    status === "completado"
      ? "Completado"
      : status === "en_progreso"
        ? "En progreso"
        : "Pendiente";

  const dotColor =
    status === "completado"
      ? "bg-gold"
      : status === "en_progreso"
        ? "bg-gold/70"
        : "bg-ink-faint/40";

  return (
    <div className="flex items-center gap-1.5 mt-1.5">
      <span className={`w-1.5 h-1.5 rounded-full ${dotColor}`} />
      <span className="font-mono text-[10px] text-ink-faint uppercase tracking-wide">
        {label}
      </span>
    </div>
  );
}
