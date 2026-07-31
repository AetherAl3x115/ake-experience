import { Reveal } from "../ui/Reveal";
import { fadeUp } from "../../animations/variants";

export function Closing() {
  return (
    <footer className="relative py-32 px-6 flex flex-col items-center text-center border-t border-border">
      <Reveal variants={fadeUp}>
        <span className="font-mono text-xs tracking-[0.25em] uppercase text-gold">
          Academic Knowledge Engine
        </span>
      </Reveal>
      <Reveal variants={fadeUp} delay={0.1}>
        <h2 className="font-display text-balance text-3xl md:text-5xl max-w-2xl mt-6 leading-tight text-ink">
          Una universidad que aprende de sí misma, y nunca deja de hacerlo.
        </h2>
      </Reveal>
      <Reveal variants={fadeUp} delay={0.2}>
        <p className="mt-10 font-mono text-xs text-ink-faint tracking-wide">
          UVEG — Universidad Virtual del Estado de Guanajuato
        </p>
      </Reveal>
    </footer>
  );
}
