import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Lightbulb, Rocket, Sparkles } from "lucide-react";

const traits = [
  { icon: Code2, label: "Programming", desc: "Crafting clean, efficient code that solves real problems." },
  { icon: Lightbulb, label: "Innovation", desc: "Thinking beyond the obvious to create what doesn't exist yet." },
  { icon: Rocket, label: "Product Building", desc: "Turning ideas from concept to shipped product — fast." },
  { icon: Sparkles, label: "AI & Technology", desc: "Exploring the frontier of artificial intelligence and emerging tech." },
];

export const AboutPreview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding relative">
      <div className="liquid-blob w-72 h-72 bg-muted-foreground/5 top-0 right-0 animate-blob" style={{ animationDelay: "4s" }} />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-xs font-medium tracking-wider uppercase text-muted-foreground mb-3 block">Who is Ali Shaikh</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 max-w-2xl">
            A 16-year-old with a vision to <span className="text-gradient">reshape the future</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
            Based in Pune, India — Ali Shaikh is driven by one belief: every great product starts as a dream. He bridges the gap between imagination and reality, building digital solutions that matter.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {traits.map((trait, i) => (
            <motion.div
              key={trait.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-2xl p-6 hover:scale-[1.02] transition-transform duration-300"
            >
              <trait.icon size={24} className="text-foreground mb-4" strokeWidth={1.5} />
              <h3 className="font-heading font-semibold text-foreground mb-2">{trait.label}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{trait.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
