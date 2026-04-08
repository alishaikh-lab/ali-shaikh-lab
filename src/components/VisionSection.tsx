import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const principles = [
  { num: "01", title: "Ship with intent", text: "Every feature earns its place through clarity. Good ideas die in drafts — great ones ship." },
  { num: "02", title: "Design is strategy", text: "The gap between tolerable and lovable? Intentional design at every touchpoint." },
  { num: "03", title: "Speed is a signal", text: "Fast execution proves deep understanding. Moving slow is the real risk." },
  { num: "04", title: "Build in public", text: "Transparency compounds trust. Every launch, every lesson — shared openly." },
];

export const VisionSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="section-padding section-spacing">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 sm:mb-20"
        >
          <span className="eyebrow mb-4 block">Operating system</span>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.8rem] font-heading font-bold text-foreground leading-[1.08]">
            How I approach
            <br />
            <span className="shimmer-text">building things.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border/30 rounded-2xl overflow-hidden">
          {principles.map((p, i) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.08 }}
              className="bg-background p-7 sm:p-10 group cursor-default hover:bg-muted/20 transition-colors duration-700"
            >
              <span className="eyebrow text-foreground/10 mb-5 block">{p.num}</span>
              <h3 className="font-heading text-lg sm:text-xl font-bold text-foreground mb-3 group-hover:translate-x-1 transition-transform duration-500">
                {p.title}
              </h3>
              <p className="text-[13px] sm:text-sm text-muted-foreground leading-[1.7]">{p.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
