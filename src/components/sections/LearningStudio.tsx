import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { LEARNING_STUDIO_FEATURES } from "../../data/content";
import { Reveal } from "../ui/Reveal";
import { fadeUp, stagger, staggerItem } from "../../animations/variants";

import plataformasShot from "../../assets/screenshots/ls-01-plataformas.png";
import cursosShot from "../../assets/screenshots/ls-02-cursos.png";
import plantillasShot from "../../assets/screenshots/ls-03-plantillas.png";
import constructorShot from "../../assets/screenshots/ls-04-constructor.png";
import ejercicioFiscalShot from "../../assets/screenshots/ls-05-ejercicio-fiscal.png";
import ejercicioFinanciamientoShot from "../../assets/screenshots/ls-06-ejercicio-financiamiento.png";
import ejercicioSociologiaShot from "../../assets/screenshots/ls-07-ejercicio-sociologia.png";
import ejercicioEmocionesShot from "../../assets/screenshots/ls-08-ejercicio-emociones.png";

function Shot({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption: string;
}) {
  return (
    <figure className="w-full">
      <motion.div
        className="rounded-2xl overflow-hidden border border-border-strong shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]"
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.4 }}
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-auto block"
          loading="lazy"
        />
      </motion.div>
      <figcaption className="mt-3 font-mono text-xs text-ink-faint tracking-wide">
        {caption}
      </figcaption>
    </figure>
  );
}

export function LearningStudio() {
  return (
    <section
      id="learning-studio"
      className="relative min-h-screen py-32 px-6 flex flex-col items-center"
    >
      <SectionHeading
        eyebrow="Constructor de Producción Académica"
        align="center"
        title="Más que un constructor: un sistema completo"
        description="Constructor de Producción Académica no solo arma objetos de aprendizaje. Gestiona plantillas, usuarios, versiones, respaldos y su propia integración con Moodle — con IA integrada en cada paso."
      />

      <div className="flex flex-col gap-6 mt-16 max-w-5xl w-full">
        {/* Fila 1 — dashboard principal, sola */}
        <Reveal variants={fadeUp}>
          <Shot
            src={plataformasShot}
            alt="Panel principal de plataformas Moodle administradas desde Constructor de Producción Académica"
            caption="Panel principal — plataformas Moodle administradas"
          />
        </Reveal>

        {/* Fila 2 — cursos y plantillas, una junto a la otra */}
        <div className="grid md:grid-cols-2 gap-6">
          <Reveal variants={fadeUp} delay={0.05}>
            <Shot
              src={cursosShot}
              alt="Cursos disponibles dentro de una carrera en el constructor de Producción Académica"
              caption="Cursos disponibles por carrera"
            />
          </Reveal>
          <Reveal variants={fadeUp} delay={0.1}>
            <Shot
              src={plantillasShot}
              alt="Plantillas guardadas y creación de nuevas plantillas"
              caption="Plantillas guardadas y creación de nuevas"
            />
          </Reveal>
        </div>

        {/* Fila 3 — constructor, solo */}
        <Reveal variants={fadeUp} delay={0.05}>
          <Shot
            src={constructorShot}
            alt="Constructor de actividades de constructor de Producción Académica con canvas y vista previa en tiempo real"
            caption="Constructor de actividades — edición en tiempo real"
          />
        </Reveal>

        {/* Fila 4 — 4 ejercicios en 2x2 */}
        <div className="grid sm:grid-cols-2 gap-6">
          <Reveal variants={fadeUp} delay={0}>
            <Shot
              src={ejercicioFiscalShot}
              alt="Ejercicio interactivo sobre recursos en materia fiscal"
              caption="Ejercicio interactivo — recursos en materia fiscal"
            />
          </Reveal>
          <Reveal variants={fadeUp} delay={0.05}>
            <Shot
              src={ejercicioFinanciamientoShot}
              alt="Ejercicio interactivo sobre ingresos derivados de financiamientos"
              caption="Ejercicio interactivo — ingresos derivados de financiamientos"
            />
          </Reveal>
          <Reveal variants={fadeUp} delay={0.1}>
            <Shot
              src={ejercicioSociologiaShot}
              alt="Ejercicio interactivo sobre psicología social desde la sociología"
              caption="Ejercicio interactivo — psicología social y sociología"
            />
          </Reveal>
          <Reveal variants={fadeUp} delay={0.15}>
            <Shot
              src={ejercicioEmocionesShot}
              alt="Ejercicio interactivo sobre las emociones en la psicología social"
              caption="Ejercicio interactivo — las emociones en la psicología social"
            />
          </Reveal>
        </div>
      </div>

      <motion.ul
        className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-4 mt-16 max-w-4xl w-full"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={stagger(0.05)}
      >
        {LEARNING_STUDIO_FEATURES.map((feature) => (
          <motion.li
            key={feature}
            variants={staggerItem}
            className="flex items-center gap-2.5 text-sm text-ink-dim"
          >
            <Check size={15} className="text-gold shrink-0" />
            {feature}
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}
