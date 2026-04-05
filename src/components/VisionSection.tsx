import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const beliefs = [
  { num: "01", title: "Execution over noise", text: "Strong ideas only matter when they become usable products. Shipping creates proof, momentum, and trust." },
  { num: "02", title: "Design for clarity", text: "The best interfaces reduce friction. They feel calm, obvious, and sharp on every screen size." },
  { num: "03", title: "Build with intent", text: "Every feature should earn its place. Simplicity is not less effort, it is more discipline." },
  { num: "04", title: "Learn in public", text: "Every launch is feedback. Every iteration is a step toward stronger products and better judgment." },
];

export const VisionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="section-padding relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-12 md:mb-16"
        >
          <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-muted-foreground mb-4 block">
            Philosophy
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[2.5rem] font-heading font-bold text-foreground leading-[1.1]">
            Principles behind the <span className="shimmer-text">work</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {beliefs.map((b, i) => (
            <motion.div
              key={b.num}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              className="glass-card p-6 sm:p-8 cursor-default"
            >
              <span className="text-[10px] font-heading font-bold text-muted-foreground/40 tracking-widest mb-4 block">
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
