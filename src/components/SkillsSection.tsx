import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Rocket, Zap, Globe, TrendingUp } from "lucide-react";

const milestones = [
  { year: "2024", icon: Rocket, title: "Started Building", desc: "Began the journey at 14 — learning to code, design, and turn ideas into real products." },
  { year: "2025", icon: Zap, title: "Launched Aircle", desc: "Shipped a privacy-first chat app focused on real-time communication without login." },
  { year: "2025", icon: Globe, title: "Built a Brand", desc: "Created a digital identity around product thinking, experimentation, and execution." },
  { year: "Now", icon: TrendingUp, title: "Scaling Up", desc: "Working on AI-powered products and expanding into new markets." },
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
          className="mb-10 md:mb-14"
        >
          <span className="text-[10px] sm:text-xs font-semibold tracking-[0.22em] uppercase text-muted-foreground mb-3 block">
            Journey
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-foreground leading-[1.1]">
            Building the <span className="shimmer-text">path forward</span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {milestones.map((m, i) => {
            const Icon = m.icon;
            return (
              <motion.div
                key={m.title}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-4 sm:gap-6 group"
              >
                <div className="flex-shrink-0">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl glass-card flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-all duration-400"
                  >
                    <Icon size={18} strokeWidth={1.5} />
                  </motion.div>
                </div>
                <div className="flex-1 pb-4 border-b border-border/30 last:border-0">
                  <span className="text-[10px] font-heading font-bold text-muted-foreground/50 tracking-[0.15em] uppercase block mb-1">
                    {m.year}
                  </span>
                  <h3 className="font-heading text-base sm:text-lg font-bold text-foreground mb-1">{m.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-md">{m.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
