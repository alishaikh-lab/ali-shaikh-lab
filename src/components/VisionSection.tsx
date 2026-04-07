import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const beliefs = [
  { num: "01", title: "Ship with intent", text: "Good ideas die in drafts. Every feature earns its place through clarity, not complexity." },
  { num: "02", title: "Design is strategy", text: "It's not decoration. It's the difference between a product people tolerate and one they love." },
  { num: "03", title: "Speed is a signal", text: "Fast execution isn't reckless — it's proof you understand the problem deeply enough to move." },
  { num: "04", title: "Build in public", text: "Transparency compounds trust. Every launch, every failure, every iteration — visible." },
];

export const VisionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="section-padding relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <span className="text-[10px] sm:text-xs font-semibold tracking-[0.22em] uppercase text-muted-foreground mb-3 block">
            Operating principles
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground leading-[1.05]">
            How I think about
            <br className="hidden sm:block" />
            <span className="shimmer-text">building things</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border/40 rounded-2xl overflow-hidden">
          {beliefs.map((b, i) => (
            <motion.div
              key={b.num}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-background p-7 sm:p-8 group cursor-default hover:bg-muted/30 transition-colors duration-500"
            >
              <span className="text-[11px] font-heading font-bold text-muted-foreground/30 tracking-[0.2em] mb-4 block">
                {b.num}
              </span>
              <h3 className="font-heading text-lg sm:text-xl font-bold text-foreground mb-2">{b.title}</h3>
              <p className="text-sm text-muted-foreground leading-[1.65]">{b.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
