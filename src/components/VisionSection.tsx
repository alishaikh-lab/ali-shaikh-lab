import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const beliefs = [
  { num: "01", title: "Ship with intent", text: "Ideas mean nothing without execution. Every feature earns its place through clarity and discipline." },
  { num: "02", title: "Design for humans", text: "The best interfaces reduce friction. They feel calm, obvious, and elegant on every screen." },
  { num: "03", title: "Stay fast, stay sharp", text: "Speed without quality is noise. The work moves quickly, but the standards never drop." },
  { num: "04", title: "Build in public", text: "Every launch is feedback. Every iteration is a step toward stronger products and better craft." },
];

export const VisionSection = () => {
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
            Philosophy
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-foreground leading-[1.1]">
            Principles behind the <span className="shimmer-text">work</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {beliefs.map((b, i) => (
            <motion.div
              key={b.num}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-card p-6 cursor-default"
            >
              <span className="text-[10px] font-heading font-bold text-muted-foreground/40 tracking-widest mb-3 block">
                {b.num}
              </span>
              <h3 className="font-heading text-base sm:text-lg font-bold text-foreground mb-2">{b.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{b.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
