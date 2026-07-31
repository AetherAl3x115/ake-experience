import { motion } from "framer-motion";
import { NAV_SECTIONS } from "../../data/content";
import { useActiveSection } from "../../hooks/useActiveSection";
import { useScrollProgress } from "../../hooks/useScrollProgress";

export function Nav() {
  const progress = useScrollProgress();
  const active = useActiveSection(NAV_SECTIONS.map((s) => s.id));

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 h-[2px] z-50 bg-border">
        <motion.div
          className="h-full bg-gold origin-left"
          style={{ scaleX: progress }}
        />
      </div>

      <nav
        aria-label="Navegación de secciones"
        className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-4"
      >
        {NAV_SECTIONS.map((section) => {
          const isActive = active === section.id;
          return (
            <button
              key={section.id}
              onClick={() => scrollTo(section.id)}
              className="group relative flex items-center justify-end"
              aria-label={section.label}
              aria-current={isActive}
            >
              <span
                className={`absolute right-6 whitespace-nowrap font-mono text-[11px] tracking-wide transition-all duration-300 ${
                  isActive
                    ? "opacity-100 translate-x-0 text-gold"
                    : "opacity-0 translate-x-2 text-ink-dim group-hover:opacity-70 group-hover:translate-x-0"
                }`}
              >
                {section.label}
              </span>
              <span
                className={`block rounded-full transition-all duration-300 ${
                  isActive
                    ? "w-2.5 h-2.5 bg-gold shadow-[0_0_12px_rgba(215,167,88,0.7)]"
                    : "w-1.5 h-1.5 bg-ink-faint group-hover:bg-ink-dim"
                }`}
              />
            </button>
          );
        })}
      </nav>
    </>
  );
}
