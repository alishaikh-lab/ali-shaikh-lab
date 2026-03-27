import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Lightbulb, Rocket, Sparkles } from "lucide-react";

const traits = [
  { icon: Code2, label: "Programming", desc: "Clean, efficient code that solves real-world problems." },
  { icon: Lightbulb, label: "Innovation", desc: "Creating what doesn't exist yet — beyond the obvious." },
  { icon: Rocket, label: "Product Building", desc: "From concept to shipped product, fast." },
  { icon: Sparkles, label: "AI & Technology", desc: "Exploring the frontier of artificial intelligence." },
];

export const AboutPreview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="px-4 sm:px-6 md:px-12 lg:px-20 py-16 md:py-24 lg:py-32 relative">
      <div className="liquid-blob w-72 h-72 bg-muted-foreground/5 top-0 right-0 animate-blob" style={{ animationDelay: "4s" }} />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <span className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-3 block">Who is Ali Shaikh</span>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 max-w-2xl leading-tight">
            A 16-year-old with a vision to{" "}
            <span className="text-gradient">reshape the future</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl">
            Based in Pune, India — Ali is driven by one belief: every great product starts as a dream. He bridges the gap between imagination and reality, building digital solutions that matter.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {traits.map((trait, i) => (
            <motion.div
              key={trait.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group glass rounded-2xl p-4 sm:p-6 hover:bg-secondary/50 transition-all duration-500 cursor-default"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-secondary flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-500">
                <trait.icon size={18} className="text-foreground sm:w-5 sm:h-5" strokeWidth={1.5} />
              </div>
              <h3 className="font-heading font-semibold text-foreground text-sm sm:text-base mb-1 sm:mb-2">{trait.label}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{trait.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
