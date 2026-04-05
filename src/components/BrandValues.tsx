import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Eye, Flame, Layers, Target } from "lucide-react";

const values = [
  { icon: Target, title: "Purpose-Driven", text: "Every decision should push the experience forward. No filler, no clutter, no wasted attention." },
  { icon: Flame, title: "High Momentum", text: "The work moves fast, but never casually. Speed only matters when quality keeps up." },
  { icon: Eye, title: "Taste Matters", text: "Strong products do not just work, they feel composed, confident, and memorable." },
  { icon: Layers, title: "Systems First", text: "Better spacing, better hierarchy, and better consistency create better trust." },
];

export const BrandValues = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="section-padding relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-12 md:mb-16 max-w-2xl"
        >
          <span className="eyebrow mb-5">
            <span className="inline-flex h-2 w-2 rounded-full bg-[hsl(var(--highlight-soft))]" />
            Core Values
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[2.8rem] font-heading font-bold text-foreground leading-[1.02] tracking-[-0.04em]">
            The design decisions behind the <span className="shimmer-text">experience</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="glass-card group relative overflow-hidden p-6 sm:p-7"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[hsl(var(--highlight)/0.5)] to-transparent opacity-70" />
              <div className="mb-5 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[hsl(var(--foreground))] text-background shadow-lg transition-transform duration-500 group-hover:scale-105">
                  <value.icon size={18} strokeWidth={1.7} />
                </div>
                <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
                  0{i + 1}
                </span>
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground">{value.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{value.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
