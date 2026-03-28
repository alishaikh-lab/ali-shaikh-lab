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
    <section ref={ref} className="px-4 sm:px-6 md:px-12 lg:px-20 py-20 md:py-32 relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-14 md:mb-20"
        >
          <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-muted-foreground mb-3 block">Philosophy</span>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-foreground leading-[1.05]">
            What I <span className="text-gradient">believe in</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-px bg-border rounded-3xl overflow-hidden">
          {beliefs.map((b, i) => (
            <motion.div
              key={b.num}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-background p-6 sm:p-8 lg:p-10 group hover:bg-secondary/40 transition-colors duration-500"
            >
              <span className="text-[10px] font-mono font-bold text-muted-foreground/50 tracking-widest mb-4 block">{b.num}</span>
              <h3 className="font-heading text-lg sm:text-xl font-bold text-foreground mb-2">{b.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{b.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
