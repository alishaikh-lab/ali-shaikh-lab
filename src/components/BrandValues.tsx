import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Flame, Eye, Layers } from "lucide-react";

const values = [
  { icon: Target, title: "Purpose-Driven", text: "Every line of code serves a purpose. No fluff, no filler — only what matters." },
  { icon: Flame, title: "Relentless Energy", text: "Age is just a number. Hunger to build, learn, and ship is what defines the pace." },
  { icon: Eye, title: "Vision-First", text: "See what others don't. Think 10 years ahead, then work backwards to today." },
  { icon: Layers, title: "Craft Over Hype", text: "Trends come and go. Quality craft — clean code, great design — is forever." },
];

export const BrandValues = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="px-4 sm:px-6 md:px-12 lg:px-20 py-20 md:py-32 relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-14 md:mb-20 max-w-xl"
        >
          <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-muted-foreground mb-3 block">Core Values</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-[1.05]">
            What drives <span className="text-gradient">everything</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative p-6 sm:p-7 rounded-2xl border border-border hover:border-foreground/20 hover:bg-secondary/30 transition-all duration-500"
            >
              <div className="w-11 h-11 rounded-xl bg-secondary flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-foreground group-hover:text-background transition-all duration-500">
                <v.icon size={20} strokeWidth={1.5} />
              </div>
              <h3 className="font-heading font-bold text-foreground text-base mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{v.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
