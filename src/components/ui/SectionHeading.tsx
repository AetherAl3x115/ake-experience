import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
}: SectionHeadingProps) {
  const isCenter = align === "center";
  return (
    <div className={isCenter ? "text-center mx-auto" : ""}>
      <Reveal>
        <span
          className={`font-mono text-xs tracking-[0.25em] uppercase ${
            tone === "light" ? "text-gold" : "text-bg/60"
          }`}
        >
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2
          className={`font-display text-balance mt-4 leading-[1.05] ${
            tone === "light" ? "text-ink" : "text-bg"
          } ${isCenter ? "text-4xl md:text-6xl mx-auto max-w-4xl" : "text-4xl md:text-6xl max-w-3xl"}`}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.16}>
          <p
            className={`mt-6 text-lg leading-relaxed ${
              tone === "light" ? "text-ink-dim" : "text-bg/70"
            } ${isCenter ? "max-w-2xl mx-auto" : "max-w-xl"}`}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
