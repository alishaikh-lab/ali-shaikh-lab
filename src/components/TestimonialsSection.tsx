import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const quotes = [
  { text: "The future belongs to the people willing to build it, refine it, and ship it.", source: "Ali Shaikh" },
  { text: "Capability is not a headline. It is the quality of work you can consistently deliver.", source: "Ali Shaikh" },
  { text: "Every product starts as an idea. The craft is turning that into an experience people trust.", source: "Ali Shaikh" },
];

export const TestimonialsSection = () => {
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
            Mindset
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-foreground leading-[1.1]">
            Words I <span className="shimmer-text">live by</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-3">
          {quotes.map((q, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-card p-6 cursor-default"
            >
              <p className="text-sm sm:text-[15px] text-foreground leading-relaxed mb-4 font-medium">
                "{q.text}"
              </p>
              <span className="text-[11px] text-muted-foreground font-heading font-semibold tracking-wider uppercase">
                — {q.source}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
