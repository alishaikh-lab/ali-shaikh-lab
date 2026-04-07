import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const milestones = [
  { year: "2024", title: "First line of code", desc: "Taught myself to build at 14. Started with curiosity, stayed for the craft." },
  { year: "2025", title: "Shipped Aircle", desc: "A privacy-first chat platform — no login, no noise. Instant, room-based communication." },
  { year: "2025", title: "Built a brand", desc: "Not just products — a digital identity rooted in taste, speed, and builder culture." },
  { year: "Now", title: "Scaling the vision", desc: "Working on AI-powered tools and building toward something that lasts." },
];

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <span className="text-[10px] sm:text-xs font-semibold tracking-[0.22em] uppercase text-muted-foreground mb-3 block">
            Timeline
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground leading-[1.05]">
            Key <span className="text-outline">moments</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-5 top-0 bottom-0 w-px bg-border/50" />

          <div className="space-y-0">
            {milestones.map((m, i) => (
              <motion.div
                key={m.title}
                initial={{ opacity: 0, x: -16 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
                className="relative pl-12 sm:pl-14 py-6 group"
              >
                {/* Dot */}
                <div className="absolute left-[10px] sm:left-[14px] top-7 w-3 h-3 rounded-full border-2 border-foreground/20 bg-background group-hover:bg-foreground group-hover:border-foreground transition-all duration-300" />

                <span className="text-[10px] font-heading font-bold text-muted-foreground/40 tracking-[0.18em] uppercase block mb-1.5">
                  {m.year}
                </span>
                <h3 className="font-heading text-base sm:text-lg font-bold text-foreground mb-1">{m.title}</h3>
                <p className="text-sm text-muted-foreground leading-[1.65] max-w-md">{m.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
