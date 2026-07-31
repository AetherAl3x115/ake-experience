# Academic Knowledge Engine — Experiencia Institucional

Landing page tipo *keynote* con scroll storytelling, construida para
presentar el Academic Knowledge Engine (AKE) y Learning Studio ante
Rectoría. No es documentación: es una narrativa visual de un solo
sitio, sin páginas separadas.

## Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS v4 (CSS-first, `@theme` en `src/index.css`)
- Framer Motion (animaciones de scroll, stagger, paths animados)
- lucide-react (iconografía)
- Fraunces / Inter / IBM Plex Mono vía Fontsource (sin llamadas externas)

## Cómo correrlo

```bash
npm install
npm run dev
```

Para generar la build de producción:

```bash
npm run build
npm run preview
```

## Estructura

```
src/
  components/
    sections/   → una sección de la narrativa por archivo (Hero, Problem, Vision, Engine, ...)
    ui/          → piezas reutilizables (Nav, SectionHeading, CTAButton, Reveal, EngineCore)
  data/          → content.ts — todo el copy y los datos de cada sección
  animations/    → variantes de Framer Motion reutilizables
  hooks/         → useScrollProgress, useActiveSection
  types/         → tipos compartidos
  assets/screenshots/ → capturas reales de Learning Studio usadas en su sección
```

## Contenido

El copy y los diagramas están basados en el Documento Maestro de
Arquitectura del AKE y en Arquitectura IA v6 (roadmap de 10 fases,
capas del motor, casos de uso, filosofía del sistema). Las capturas de
Learning Studio son las reales, provistas para este proyecto.

## Narrativa (secciones)

1. Hero — pregunta central
2. El problema — conocimiento disperso
3. La visión — convergencia en el AKE
4. El motor — chunking, embeddings, Qdrant, Banco Maestro, RAG
5. Learning Studio — capturas reales del sistema
6. Learning Bridge — flujo Profesor → AKE → Moodle → SCORM → Curso
7. Flujo completo — diagrama animado de toda la arquitectura
8. Beneficios — docentes, estudiantes, universidad, escalabilidad
9. Roadmap — 10 fases
10. Visión futura — nuevos consumidores del mismo motor
