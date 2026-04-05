import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Rocket, Zap, Globe, TrendingUp } from "lucide-react";

const milestones = [
  {
    year: "2024",
    icon: Rocket,
    title: "Started Building",
    desc: "Began the journey into tech at 14, learning how to code, design, and turn ideas into something tangible.",
  },
  {
    year: "2025",
    icon: Zap,
    title: "Launched Aircle",
    desc: "Shipped a privacy-first chat app focused on real-time communication without login or identity.",
  },
  {
    year: "2025",
    icon: Globe,
    title: "Built a Brand",
    desc: "Built a sharper digital identity around product thinking, experimentation, and consistent execution.",
  },
  {
    year: "Now",
    icon: TrendingUp,
    title: "Scaling Up",
    desc: "Working on AI-powered products and expanding into new markets. The best is yet to come.",
  },
];

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="section-padding relative overflow-hidden">
      <motion.div
        animate={{ x: [0, 30, -20, 0], y: [0, -20, 15, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="liquid-blob w-80 h-80 bg-foreground/5 -bottom-20 -left-20"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-12 md:mb-16"
        >
          <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-muted-foreground mb-4 block">
            Journey
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[2.75rem] font-heading font-bold text-foreground leading-[1.1]">
            Building the <span className="shimmer-text">path forward</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-5 sm:left-8 top-0 bottom-0 w-px bg-border/60 hidden sm:block" />

          <div className="space-y-6 sm:space-y-8">
            {milestones.map((m, i) => {
              const Icon = m.icon;
              return (
                <motion.div
                  key={m.title}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ x: 6, transition: { duration: 0.25 } }}
                  className="relative flex gap-5 sm:gap-8 group"
                >
                  <div className="relative z-10 flex-shrink-0">
                    <motion.div
                      whileHover={{ scale: 1.15 }}
                      className="w-10 h-10 sm:w-16 sm:h-16 rounded-2xl glass-strong flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-all duration-500 shadow-lg"
                    >
                      <Icon size={18} strokeWidth={1.5} />
                    </motion.div>
                  </div>

                  <div className="flex-1 pb-2">
                    <span className="text-[10px] font-heading font-bold text-muted-foreground/50 tracking-[0.2em] uppercase block mb-1.5">
                      {m.year}
                    </span>
                    <h3 className="font-heading text-base sm:text-lg font-bold text-foreground mb-1.5">{m.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-md">{m.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
