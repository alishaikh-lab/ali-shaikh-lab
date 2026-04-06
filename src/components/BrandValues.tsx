import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Eye, Flame, Layers, Target } from "lucide-react";

const values = [
  { icon: Target, title: "Purpose-Driven", text: "Every decision pushes the experience forward. No filler, no clutter." },
  { icon: Flame, title: "High Momentum", text: "The work moves fast, but never casually. Speed with quality." },
  { icon: Eye, title: "Taste Matters", text: "Strong products feel composed, confident, and memorable." },
  { icon: Layers, title: "Systems First", text: "Better spacing, hierarchy, and consistency create trust." },
];

export const BrandValues = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10 md:mb-14 max-w-2xl"
        >
          <span className="eyebrow mb-4">
            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-foreground/40" />
            Core Values
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-foreground leading-[1.05]">
            Design decisions behind the <span className="shimmer-text">experience</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="glass-card p-6 group cursor-default"
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-foreground text-background transition-transform duration-300 group-hover:scale-105">
                  <value.icon size={16} strokeWidth={1.7} />
                </div>
                <span className="text-[10px] font-medium text-muted-foreground/40">0{i + 1}</span>
              </div>
              <h3 className="font-heading text-base font-bold text-foreground mb-2">{value.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{value.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
