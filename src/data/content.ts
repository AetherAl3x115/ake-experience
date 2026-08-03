import type {
  NavSection,
  FlowStep,
  BenefitGroup,
  RoadmapPhase,
  ScatteredSource,
  FutureNode,
  TimelineMilestone,
  EcosystemNode,
  ConsumerInfo,
  Institution,
} from "../types";

export const NAV_SECTIONS: NavSection[] = [
  { id: "hero", label: "Inicio" },
  { id: "problema", label: "El problema" },
  { id: "vision", label: "La visión" },
  { id: "por-que-ahora", label: "¿Por qué ahora?" },
  { id: "arquitectura", label: "Arquitectura general" },
  { id: "motor", label: "El motor" },
  { id: "learning-studio", label: "Learning Studio" },
  { id: "learning-bridge", label: "Learning Bridge" },
  { id: "beneficios", label: "Beneficios" },
  { id: "roadmap", label: "Roadmap" },
  { id: "instituciones", label: "Referentes" },
  { id: "futuro", label: "Visión futura" },
];

export const SCATTERED_SOURCES: ScatteredSource[] = [
  { id: "pdf", label: "PDF", x: 12, y: 18, delay: 0 },
  { id: "cursos", label: "Cursos", x: 78, y: 12, delay: 0.4 },
  { id: "scorm", label: "SCORM", x: 20, y: 68, delay: 0.8 },
  { id: "docs", label: "Documentos", x: 85, y: 62, delay: 1.2 },
  { id: "libros", label: "Libros", x: 50, y: 82, delay: 1.6 },
  { id: "videos", label: "Videos", x: 55, y: 22, delay: 2.0 },
  { id: "apuntes", label: "Apuntes", x: 8, y: 44, delay: 2.4 },
  { id: "examenes", label: "Exámenes", x: 90, y: 38, delay: 2.8 },
];

export const ENGINE_LAYERS = [
  {
    id: "chunking",
    title: "Chunking semántico",
    body: "Cada documento se fragmenta en unidades de conocimiento con sentido propio, no en cortes arbitrarios de texto.",
  },
  {
    id: "embeddings",
    title: "Embeddings",
    body: "Cada fragmento se traduce a una representación vectorial que captura su significado, no solo sus palabras.",
  },
  {
    id: "qdrant",
    title: "Qdrant · Vector Layer",
    body: "Un motor de búsqueda por similitud recupera, en milisegundos, los fragmentos más relevantes para cada consulta.",
  },
  {
    id: "banco",
    title: "Banco Maestro",
    body: "Reactivos y recursos reutilizables se generan una sola vez y se reaprovechan, sin volver a pagar por conocimiento ya procesado.",
  },
  {
    id: "rag",
    title: "Recuperación aumentada",
    body: "El conocimiento verificado se recupera antes de generar cualquier respuesta: primero la fuente, después la composición.",
  },
  {
    id: "ia",
    title: "IA como compositor",
    body: "El modelo generativo redacta, adapta y estructura. Nunca inventa el conocimiento: lo compone a partir de lo recuperado.",
  },
];

export const LEARNING_STUDIO_FEATURES = [
  "Plantillas reutilizables",
  "Gestión de usuarios y roles",
  "Versionado de objetos de aprendizaje",
  "Colaboración entre docentes",
  "Exportación SCORM 1.2",
  "Respaldos automáticos",
  "Tareas programadas (Cron Jobs)",
  "Panel de administración",
  "Componentes visuales arrastrables",
  "Generación asistida por IA",
  "Integración nativa con Moodle",
];

export const BRIDGE_FLOW: FlowStep[] = [
  { id: "Equipo institucional", label: "Equipo institucional", detail: "Solicita un objeto de aprendizaje" },
  { id: "boton", label: "Un botón", detail: "Dispara la solicitud desde Moodle" },
  { id: "ake", label: "Academic Knowledge Engine", detail: "Recupera y compone conocimiento verificado" },
  { id: "moodle", label: "Moodle", detail: "Recibe el contenido estructurado" },
  { id: "studio", label: "Learning Studio", detail: "Construye el objeto de aprendizaje" },
  { id: "scorm", label: "SCORM", detail: "Empaqueta el resultado final" },
  { id: "curso", label: "Curso terminado", detail: "Disponible para el estudiante" },
];

export const BENEFITS: BenefitGroup[] = [
  {
    eyebrow: "01",
   title: "Equipo institucional",
    items: [
      "Menos horas construyendo desde cero",
      "Contenido fundamentado, no improvisado",
      "Trazabilidad hacia la fuente de cada afirmación",
    ],
  },
  {
    eyebrow: "02",
    title: "Estudiantes",
    items: [
      "Cursos consistentes entre sí",
      "Evaluaciones alineadas al material real",
      "Menor riesgo de contenido inexacto",
    ],
  },
  {
    eyebrow: "03",
    title: "Universidad",
    items: [
      "Una sola fuente de verdad institucional",
      "Conocimiento auditable y gobernado",
      "Independencia de cualquier proveedor de IA",
    ],
  },
  {
    eyebrow: "04",
    title: "Escalabilidad e IA institucional",
    items: [
      "Arquitectura lista para millones de documentos",
      "Nuevos consumidores sin duplicar lógica",
      "Gobierno del conocimiento como activo permanente",
    ],
  },
];

export const ROADMAP: RoadmapPhase[] = [
  { number: "01", title: "Digitalización institucional", description: "Levantamiento y catalogación del conocimiento existente." },
  { number: "02", title: "Knowledge Repository", description: "Repositorio gobernado, versionado y consultable." },
  { number: "03", title: "Embeddings + Qdrant", description: "Recuperación semántica sobre el corpus institucional." },
  { number: "04", title: "AI Orchestrator", description: "Composición gobernada de conocimiento verificado." },
  { number: "05", title: "Chatbot institucional", description: "Primer consumidor conversacional en producción." },
  { number: "06", title: "Constructor inteligente", description: "Learning Studio migra a consumir el motor." },
  { number: "07", title: "Simuladores", description: "Casos con consistencia factual estricta." },
  { number: "08", title: "Knowledge Connectors", description: "Fuentes externas bajo la misma gobernanza." },
  { number: "09", title: "Aprendizaje incremental", description: "El motor detecta y cierra sus propios vacíos." },
  { number: "10", title: "Modelos locales", description: "Independencia total de proveedores externos." },
];

export const FUTURE_NODES: FutureNode[] = [
  { id: "chatbot", label: "Chatbot", angle: 0 },
  { id: "simuladores", label: "Simuladores", angle: 51 },
  { id: "cursos", label: "Cursos", angle: 102 },
  { id: "evaluaciones", label: "Evaluaciones", angle: 153 },
  { id: "scorm", label: "SCORM", angle: 204 },
  { id: "recursos", label: "Recursos", angle: 255 },
  { id: "nuevos", label: "Nuevos proyectos", angle: 306 },
];

export const TIMELINE: TimelineMilestone[] = [
  { year: "2005", title: "LMS tradicionales", description: "Moodle y plataformas similares organizan cursos, pero cada uno vive aislado del resto." },
  { year: "2012", title: "SCORM y Objetos de Aprendizaje", description: "Se estandariza el empaquetado de contenido, aunque cada objeto sigue siendo una isla." },
  { year: "2018", title: "Repositorios institucionales", description: "Las universidades empiezan a centralizar documentos, sin una capa que los interprete." },
  { year: "2023", title: "Modelos generativos (LLMs)", description: "La IA generativa entra al aula, pero sin anclaje al conocimiento propio de la institución." },
  { year: "2025", title: "RAG y búsqueda semántica", description: "La recuperación aumentada resuelve el problema de la alucinación: primero la fuente, después la respuesta." },
  { year: "2026", title: "Academic Knowledge Engine", description: "UVEG convierte su propio conocimiento en la infraestructura que gobierna todo lo anterior.", highlight: true },
];

export const ECOSYSTEM_NODES: EcosystemNode[] = [
  { id: "sources", label: "Fuentes", x: 60, y: 260, kind: "core" },
  { id: "ingestion", label: "Ingesta", x: 220, y: 150, kind: "core" },
  { id: "repository", label: "Repositorio", x: 220, y: 370, kind: "core" },
  { id: "vector", label: "Vector Layer", x: 400, y: 260, kind: "core" },
  { id: "orchestrator", label: "AI Orchestrator", x: 580, y: 260, kind: "orchestrator" },
  { id: "chatbot", label: "Chatbot", x: 800, y: 60, kind: "consumer" },
  { id: "learning-studio", label: "Learning Studio", x: 800, y: 150, kind: "consumer" },
  { id: "learning-bridge", label: "Learning Bridge", x: 800, y: 240, kind: "consumer" },
  { id: "cursos", label: "Cursos", x: 800, y: 330, kind: "consumer" },
  { id: "examenes", label: "Exámenes", x: 800, y: 420, kind: "consumer" },
  { id: "simuladores", label: "Simuladores", x: 800, y: 510, kind: "consumer" },
];

export const ECOSYSTEM_EDGES: [string, string][] = [
  ["sources", "ingestion"],
  ["sources", "repository"],
  ["ingestion", "vector"],
  ["repository", "vector"],
  ["vector", "orchestrator"],
  ["orchestrator", "chatbot"],
  ["orchestrator", "learning-studio"],
  ["orchestrator", "learning-bridge"],
  ["orchestrator", "cursos"],
  ["orchestrator", "examenes"],
  ["orchestrator", "simuladores"],
];

export const CONSUMER_INFO: ConsumerInfo[] = [
  {
    id: "chatbot",
    label: "Chatbot institucional",
    does: "Resuelve dudas de estudiantes y docentes en lenguaje natural, con respaldo documental verificable.",
    consumes: "Conocimiento institucional validado, recuperado por similitud semántica.",
    produces: "Respuestas conversacionales trazables a su fuente original.",
  },
  {
    id: "learning-studio",
    label: "Learning Studio",
    does: "Consume conocimiento institucional validado para generar Objetos de Aprendizaje, actividades SCORM, simuladores y recursos interactivos mediante Inteligencia Artificial.",
    consumes: "Fragmentos verificados, plantillas y componentes reutilizables del Banco Maestro.",
    produces: "Objetos de aprendizaje completos, empaquetados y listos para Moodle.",
  },
  {
    id: "learning-bridge",
    label: "Learning Bridge",
    does: "Actúa como integrador entre Moodle y el Academic Knowledge Engine, orquestando cada solicitud docente.",
    consumes: "Solicitudes del Equipo institucional disparadas desde Moodle.",
    produces: "Contenido estructurado listo para que Learning Studio lo construya.",
  },
  {
    id: "cursos",
    label: "Cursos",
    does: "Ensambla unidades y módulos completos a partir de conocimiento ya organizado por el motor.",
    consumes: "Fragmentos, referencias y estructura curricular verificada.",
    produces: "Cursos consistentes entre sí, con la misma fuente de verdad.",
  },
  {
    id: "examenes",
    label: "Exámenes",
    does: "Genera reactivos y evaluaciones alineadas estrictamente al material que el estudiante realmente vio.",
    consumes: "Contenido validado del Banco Maestro por tema o unidad.",
    produces: "Bancos de reactivos trazables, sin desalineación con el curso.",
  },
  {
    id: "simuladores",
    label: "Simuladores",
    does: "Construye casos y escenarios prácticos con consistencia factual estricta frente al conocimiento institucional.",
    consumes: "Conocimiento normativo y técnico verificado por dominio.",
    produces: "Casos interactivos que no contradicen el material oficial.",
  },
];

export const INSTITUTIONS: Institution[] = [
  {
    id: "stanford",
    name: "Stanford University",
    category: "Investigación · IA aplicada",
    description: "A través de su Institute for Human-Centered AI, impulsa investigación en IA aplicada a educación, ciencia y gobernanza del conocimiento.",
  },
  {
    id: "mit",
    name: "MIT",
    category: "Educación abierta · IA generativa",
    description: "MIT Open Learning explora IA generativa y recuperación de conocimiento para escalar educación a distancia sin perder rigor académico.",
  },
  {
    id: "cmu",
    name: "Carnegie Mellon University",
    category: "Tutores inteligentes",
    description: "Pionera histórica en sistemas adaptativos y tutores inteligentes que personalizan el aprendizaje a partir de conocimiento estructurado.",
  },
  {
    id: "microsoft",
    name: "Microsoft",
    category: "RAG empresarial",
    description: "Copilot y Azure AI Search adoptan la recuperación aumentada como patrón central para anclar respuestas de IA al conocimiento propio de cada organización.",
  },
  {
    id: "google",
    name: "Google",
    category: "Búsqueda semántica",
    description: "Vertex AI Search y NotebookLM aplican indexación semántica sobre conocimiento propio, priorizando fuentes verificables sobre generación libre.",
  },
  {
    id: "nvidia",
    name: "NVIDIA",
    category: "Infraestructura de RAG",
    description: "NeMo Retriever ofrece infraestructura especializada para desplegar recuperación aumentada a escala empresarial e institucional.",
  },
  {
    id: "openai",
    name: "OpenAI",
    category: "Conocimiento personalizado",
    description: "Sus herramientas empresariales incorporan recuperación sobre documentos propios como mecanismo para reducir alucinaciones.",
  },
  {
    id: "anthropic",
    name: "Anthropic",
    category: "IA con contexto propio",
    description: "Claude integra herramientas y contexto extendido para razonar sobre el conocimiento específico de cada organización, no solo su entrenamiento general.",
  },
];
