import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const beliefs = [
  { num: "01", title: "Build, don't talk", text: "Ideas are free. Execution is everything. Ship it or it doesn't exist." },
  { num: "02", title: "Think in decades", text: "Build products that compound. Short-term hype fades — long-term impact stays." },
  { num: "03", title: "Simplicity wins", text: "The best products feel invisible. Strip away the noise, keep the essence." },
  { num: "04", title: "Learn by doing", text: "Books teach theory. Building teaches truth. Every shipped product is a lesson." },
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
            What I <span className="shimmer-text">believe in</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-3">
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
