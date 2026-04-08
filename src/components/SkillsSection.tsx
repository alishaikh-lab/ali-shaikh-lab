import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const milestones = [
  { year: "2024", title: "First line of code", desc: "Taught myself to build at 14 — curiosity met craft and never looked back." },
  { year: "2025", title: "Launched Aircle", desc: "A privacy-first, room-based chat platform. No login, no friction, pure connection." },
  { year: "2025", title: "Built a personal brand", desc: "Not just products — a digital identity rooted in taste, velocity, and builder ethos." },
  { year: "Now", title: "Scaling the vision", desc: "AI-powered tools, ambitious ideas, and building toward something that lasts." },
];

export const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="section-padding section-spacing">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-14 sm:mb-20"
        >
          <span className="eyebrow mb-4 block">Journey</span>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.8rem] font-heading font-bold text-foreground leading-[1.08]">
            Key <span className="text-outline">moments</span> so far.
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-[7px] sm:left-[9px] top-2 bottom-2 w-px bg-border/40" />

          <div className="space-y-0">
            {milestones.map((m, i) => (
              <motion.div
                key={m.title}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 + i * 0.1 }}
                className="relative pl-10 sm:pl-12 py-6 sm:py-8 group"
              >
                <div className="absolute left-[3px] sm:left-[5px] top-8 sm:top-10 w-[9px] h-[9px] rounded-full border-2 border-border bg-background group-hover:bg-foreground group-hover:border-foreground transition-all duration-400" />
                <span className="eyebrow text-foreground/20 block mb-2">{m.year}</span>
                <h3 className="font-heading text-base sm:text-lg font-bold text-foreground mb-1.5 group-hover:translate-x-1 transition-transform duration-500">
                  {m.title}
                </h3>
                <p className="text-[13px] sm:text-sm text-muted-foreground leading-[1.7] max-w-md">{m.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
