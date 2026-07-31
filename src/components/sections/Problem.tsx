import { motion } from "framer-motion";
import { FileText, BookOpen, Video, GraduationCap, Package, ScrollText } from "lucide-react";
import { SCATTERED_SOURCES } from "../../data/content";
import { SectionHeading } from "../ui/SectionHeading";

const ICONS: Record<string, typeof FileText> = {
  pdf: FileText,
  cursos: GraduationCap,
  scorm: Package,
  docs: ScrollText,
  libros: BookOpen,
  videos: Video,
  apuntes: FileText,
  examenes: ScrollText,
};

export function Problem() {
  return (
    <section
      id="problema"
      className="relative min-h-screen py-32 px-6 flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(196,106,68,0.08),transparent_60%)]" />

      <SectionHeading
        eyebrow="El problema"
        align="center"
        title="El conocimiento institucional vive disperso"
        description="Cada documento, curso y examen existe por su cuenta. Sin una fuente común, el mismo concepto puede explicarse de formas distintas — y hasta contradictorias — según quién lo escribió y cuándo."
      />

      <div className="relative w-full max-w-3xl aspect-square mt-16">
        {SCATTERED_SOURCES.map((source) => {
          const Icon = ICONS[source.id] ?? FileText;
          return (
            <motion.div
              key={source.id}
              className="absolute flex flex-col items-center gap-2"
              style={{ left: `${source.x}%`, top: `${source.y}%` }}
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: source.delay * 0.15 }}
            >
              <motion.div
                className="w-14 h-14 rounded-2xl border border-rust/40 bg-surface/80 backdrop-blur flex items-center justify-center text-rust"
                animate={{ y: [0, -8, 0], rotate: [0, 2, -2, 0] }}
                transition={{
                  duration: 6 + source.delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Icon size={22} strokeWidth={1.5} />
              </motion.div>
              <span className="font-mono text-[10px] tracking-wide text-ink-dim uppercase">
                {source.label}
              </span>
            </motion.div>
          );
        })}
      </div>

      <p className="mt-16 max-w-lg text-center text-ink-faint font-mono text-sm tracking-wide">
        Sin gobierno del conocimiento, cada nuevo sistema repite el mismo trabajo.
      </p>
    </section>
  );
}
