export interface NavSection {
  id: string;
  label: string;
}

export interface FlowStep {
  id: string;
  label: string;
  detail?: string;
}

export interface BenefitGroup {
  title: string;
  eyebrow: string;
  items: string[];
}

export interface RoadmapPhase {
  number: string;
  title: string;
  description: string;
}

export interface ScatteredSource {
  id: string;
  label: string;
  x: number;
  y: number;
  delay: number;
}

export interface FutureNode {
  id: string;
  label: string;
  angle: number;
}

export interface TimelineMilestone {
  year: string;
  title: string;
  description: string;
  highlight?: boolean;
}

export interface EcosystemNode {
  id: string;
  label: string;
  x: number;
  y: number;
  kind: "core" | "orchestrator" | "consumer";
}

export interface ConsumerInfo {
  id: string;
  label: string;
  does: string;
  consumes: string;
  produces: string;
}

export interface Institution {
  id: string;
  name: string;
  category: string;
  description: string;
}

export interface RequirementArea {
  id: string;
  title: string;
  description: string;
  items: string[];
}
