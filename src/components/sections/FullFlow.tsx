import { motion } from "framer-motion";

const NODES = [
  { id: "sources", x: 80, y: 260, label: "Fuentes" },
  { id: "ingestion", x: 260, y: 140, label: "Ingesta" },
  { id: "repository", x: 260, y: 380, label: "Repositorio" },
  { id: "vector", x: 460, y: 260, label: "Vector Layer" },
  { id: "orchestrator", x: 660, y: 260, label: "AI Orchestrator" },
  { id: "chatbot", x: 860, y: 100, label: "Chatbot" },
  { id: "courses", x: 860, y: 200, label: "Cursos" },
  { id: "exams", x: 860, y: 300, label: "Exámenes" },
  { id: "sims", x: 860, y: 400, label: "Simuladores" },
];

const EDGES: [string, string][] = [
  ["sources", "ingestion"],
  ["sources", "repository"],
  ["ingestion", "vector"],
  ["repository", "vector"],
  ["vector", "orchestrator"],
  ["orchestrator", "chatbot"],
  ["orchestrator", "courses"],
  ["orchestrator", "exams"],
  ["orchestrator", "sims"],
];

function findNode(id: string) {
  return NODES.find((n) => n.id === id)!;
}

export function FullFlow() {
  return (
    <section
      id="flujo"
      className="relative min-h-screen py-24 px-6 flex flex-col items-center justify-center overflow-hidden"
    >
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="font-mono text-xs tracking-[0.25em] uppercase text-gold mb-10"
      >
        La arquitectura completa, en movimiento
      </motion.span>

      <div className="w-full max-w-6xl overflow-x-auto">
        <svg
          viewBox="0 0 940 480"
          className="w-full min-w-[720px] h-auto"
          aria-hidden="true"
        >
          {EDGES.map(([from, to], i) => {
            const a = findNode(from);
            const b = findNode(to);
            const pathId = `${from}-${to}`;
            return (
              <g key={pathId}>
                <motion.line
                  x1={a.x}
                  y1={a.y}
                  x2={b.x}
                  y2={b.y}
                  stroke="rgba(244,241,232,0.14)"
                  strokeWidth={1.5}
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.05 }}
                />
                <motion.circle
                  r={3.5}
                  fill="#ecca8e"
                  initial={{ offsetDistance: "0%", opacity: 0 }}
                  animate={{ offsetDistance: "100%", opacity: [0, 1, 1, 0] }}
                  transition={{
                    duration: 2.4,
                    repeat: Infinity,
                    delay: 1.2 + i * 0.3,
                    ease: "easeInOut",
                  }}
                  style={{
                    offsetPath: `path("M ${a.x} ${a.y} L ${b.x} ${b.y}")`,
                  }}
                />
              </g>
            );
          })}

          {NODES.map((node, i) => (
            <motion.g
              key={node.id}
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <circle
                cx={node.x}
                cy={node.y}
                r={node.id === "orchestrator" ? 22 : 14}
                fill={node.id === "orchestrator" ? "#d7a758" : "#131727"}
                stroke={node.id === "orchestrator" ? "#ecca8e" : "rgba(244,241,232,0.3)"}
                strokeWidth={1.5}
              />
              <text
                x={node.x}
                y={node.y + (node.id === "orchestrator" ? 40 : 32)}
                textAnchor="middle"
                fontFamily="IBM Plex Mono, monospace"
                fontSize={11}
                fill="rgba(244,241,232,0.55)"
                letterSpacing={0.5}
              >
                {node.label}
              </text>
            </motion.g>
          ))}
        </svg>
      </div>
    </section>
  );
}
