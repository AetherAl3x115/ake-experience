import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import {
  ECOSYSTEM_NODES,
  ECOSYSTEM_EDGES,
  CONSUMER_INFO,
} from "../../data/content";

const CORE_EDGES: [string, string][] = [
  ["sources", "ingestion"],
  ["sources", "repository"],
  ["ingestion", "vector"],
  ["repository", "vector"],
  ["vector", "orchestrator"],
];

function findNode(id: string) {
  return ECOSYSTEM_NODES.find((n) => n.id === id)!;
}

export function Ecosystem() {
  const [active, setActive] = useState<string | null>(null);
  const activeInfo = active ? CONSUMER_INFO.find((c) => c.id === active) : null;
  const consumerEdges = ECOSYSTEM_EDGES.filter(
    ([from]) => from === "orchestrator",
  );

  return (
    <section
      id="arquitectura"
      className="relative min-h-screen py-32 px-6 flex flex-col items-center overflow-hidden"
    >
      <SectionHeading
        eyebrow="Arquitectura general del ecosistema"
        align="center"
        title="Un motor, múltiples consumidores"
        description="El Motor de Producción Académica Inteligente no alimenta solo un chatbot. Pasa el cursor sobre cada consumidor para ver qué recibe del motor y qué produce con ello."
      />

      <div className="mt-16 max-w-6xl w-full grid lg:grid-cols-[1fr_320px] gap-8 items-start">
        <div className="w-full overflow-x-auto">
          <svg
            viewBox="0 0 900 570"
            className="w-full min-w-[680px] h-auto"
            role="img"
            aria-label="Diagrama del ecosistema del Motor de Producción Académica Inteligente"
          >
            {CORE_EDGES.map(([from, to]) => {
              const a = findNode(from);
              const b = findNode(to);
              return (
                <motion.line
                  key={`${from}-${to}`}
                  x1={a.x}
                  y1={a.y}
                  x2={b.x}
                  y2={b.y}
                  stroke="rgba(244,241,232,0.22)"
                  strokeWidth={1.5}
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9 }}
                />
              );
            })}

            {consumerEdges.map(([from, to]) => {
              const a = findNode(from);
              const b = findNode(to);
              const isActive = active === to;
              const isDimmed = active !== null && !isActive;
              return (
                <g key={`${from}-${to}`}>
                  <motion.line
                    x1={a.x}
                    y1={a.y}
                    x2={b.x}
                    y2={b.y}
                    stroke={isActive ? "#ecca8e" : "rgba(244,241,232,0.22)"}
                    strokeWidth={isActive ? 2.5 : 1.5}
                    animate={{ opacity: isDimmed ? 0.12 : 1 }}
                    transition={{ duration: 0.35 }}
                  />
                  {isActive && (
                    <motion.circle
                      r={4}
                      fill="#ecca8e"
                      initial={{ offsetDistance: "0%", opacity: 0 }}
                      animate={{
                        offsetDistance: "100%",
                        opacity: [0, 1, 1, 0],
                      }}
                      transition={{
                        duration: 1.4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      style={{
                        offsetPath: `path("M ${a.x} ${a.y} L ${b.x} ${b.y}")`,
                      }}
                    />
                  )}
                </g>
              );
            })}

            {ECOSYSTEM_NODES.map((node, i) => {
              const isConsumer = node.kind === "consumer";
              const isActive = active === node.id;
              const isDimmed = isConsumer && active !== null && !isActive;
              const radius =
                node.kind === "orchestrator"
                  ? 22
                  : node.kind === "core"
                    ? 13
                    : 11;

              return (
                <motion.g
                  key={node.id}
                  initial={{ opacity: 0, scale: 0.6 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.04 }}
                  onMouseEnter={() => isConsumer && setActive(node.id)}
                  onMouseLeave={() => isConsumer && setActive(null)}
                  onClick={() =>
                    isConsumer && setActive(active === node.id ? null : node.id)
                  }
                  style={{ cursor: isConsumer ? "pointer" : "default" }}
                >
                  <motion.circle
                    cx={node.x}
                    cy={node.y}
                    r={radius}
                    fill={
                      node.kind === "orchestrator"
                        ? "#d7a758"
                        : isActive
                          ? "#d7a758"
                          : "#131727"
                    }
                    stroke={
                      isActive || node.kind === "orchestrator"
                        ? "#ecca8e"
                        : "rgba(244,241,232,0.35)"
                    }
                    strokeWidth={1.5}
                    animate={{
                      opacity: isDimmed ? 0.25 : 1,
                      scale: isActive ? 1.15 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.text
                    x={node.x}
                    y={node.y + radius + 18}
                    textAnchor="middle"
                    fontFamily="IBM Plex Mono, monospace"
                    fontSize={13}
                    fill={isActive ? "#ecca8e" : "rgba(244,241,232,0.6)"}
                    letterSpacing={0.4}
                    animate={{ opacity: isDimmed ? 0.3 : 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {node.label}
                  </motion.text>
                </motion.g>
              );
            })}
          </svg>
          <p className="mt-2 text-center lg:text-left font-mono text-[12px] text-ink-faint tracking-wide">
            Pasa el cursor (o toca) cada consumidor para ver su detalle →
          </p>
        </div>

        <div className="min-h-[220px] rounded-2xl border border-border bg-surface/50 backdrop-blur p-6">
          <AnimatePresence mode="wait">
            {activeInfo ? (
              <motion.div
                key={activeInfo.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
              >
                <span className="font-mono text-xs text-gold uppercase tracking-wide">
                  Consumidor
                </span>
                <h3 className="font-display text-2xl text-ink mt-2">
                  {activeInfo.label}
                </h3>
                <p className="text-sm text-ink-dim mt-3 leading-relaxed">
                  {activeInfo.does}
                </p>
                <div className="mt-5 pt-4 border-t border-border space-y-3">
                  <div>
                    <span className="font-mono text-[10px] text-ink-faint uppercase tracking-wide">
                      Consume
                    </span>
                    <p className="text-sm text-ink-dim mt-1">
                      {activeInfo.consumes}
                    </p>
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-ink-faint uppercase tracking-wide">
                      Produce
                    </span>
                    <p className="text-sm text-ink-dim mt-1">
                      {activeInfo.produces}
                    </p>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="placeholder"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="h-full flex flex-col justify-center"
              >
                <span className="font-mono text-xs text-ink-faint uppercase tracking-wide">
                  Detalle del consumidor
                </span>
                <p className="text-sm text-ink-dim mt-3 leading-relaxed">
                  Selecciona un nodo del diagrama — Chatbot, Constructor de
                  Producción Académica, Learning Bridge, Cursos, Exámenes o
                  Simuladores — para ver qué recibe del motor y qué entrega de
                  vuelta al ecosistema.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
