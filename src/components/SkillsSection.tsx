import { motion } from "framer-motion";
import { useSectionReveal } from "@/hooks/useParallax";

const milestones = [
  { year: "2024", title: "First line of code", desc: "Taught myself to build at 14 — curiosity met craft and something clicked." },
  { year: "2025", title: "Launched Aircle", desc: "A privacy-first, room-based chat platform. Zero friction, zero login, pure connection." },
  { year: "2025", title: "Personal brand", desc: "Not just shipping products — building a digital identity rooted in taste and velocity." },
  { year: "Now", title: "Scaling the vision", desc: "AI-powered tools, ambitious ideas, and building toward something that genuinely lasts." },
];

export const SkillsSection = () => {
  const { ref, opacity, y } = useSectionReveal();

  return (
    <section ref={ref} className="section-padding section-spacing">
      <motion.div style={{ opacity, y }} className="max-w-5xl mx-auto">
        <div className="mb-16 sm:mb-24">
          <span className="eyebrow mb-4 block">Journey</span>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.8rem] font-heading font-bold text-foreground leading-[1.06]">
            Key <span className="text-outline">moments</span> so far.
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-[7px] sm:left-[9px] top-2 bottom-2 w-px bg-border/30" />

          <div className="space-y-0">
            {milestones.map((m, i) => (
              <motion.div
                key={m.title}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="relative pl-10 sm:pl-14 py-7 sm:py-10 group"
              >
                <motion.div
                  whileHover={{ scale: 1.6 }}
                  className="absolute left-[3px] sm:left-[5px] top-9 sm:top-12 w-[9px] h-[9px] rounded-full border-2 border-border bg-background group-hover:bg-foreground group-hover:border-foreground transition-all duration-500"
                />
                <span className="eyebrow text-foreground/15 block mb-2">{m.year}</span>
                <h3 className="font-heading text-base sm:text-lg font-bold text-foreground mb-2 group-hover:translate-x-1.5 transition-transform duration-500">
                  {m.title}
                </h3>
                <p className="text-[12px] sm:text-[13px] text-muted-foreground leading-[1.8] max-w-md">{m.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};
