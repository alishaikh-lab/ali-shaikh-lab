import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Flame, Eye, Layers } from "lucide-react";

const values = [
  { icon: Target, title: "Purpose-Driven", text: "Every line of code serves a purpose. No fluff, no filler, only what matters." },
  { icon: Flame, title: "Relentless Energy", text: "The pace comes from curiosity, discipline, and the willingness to keep refining the work." },
  { icon: Eye, title: "Vision-First", text: "See what others miss. Think long-term, then translate that direction into practical moves today." },
  { icon: Layers, title: "Craft Over Hype", text: "Trends come and go. Quality craft, clean code, and strong design outlast hype." },
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
          className="mb-12 md:mb-16 max-w-xl"
        >
          <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-muted-foreground mb-4 block">Core Values</span>
          <h2 className="text-2xl sm:text-3xl lg:text-[2.5rem] font-heading font-bold text-foreground leading-[1.1]">
            What drives <span className="shimmer-text">everything</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
              className="group relative p-5 sm:p-6 rounded-2xl glass-card cursor-default"
            >
              <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-foreground group-hover:text-background transition-all duration-500">
                <v.icon size={18} strokeWidth={1.5} />
              </div>
              <h3 className="font-heading font-bold text-foreground text-sm sm:text-base mb-1.5">{v.title}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{v.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
