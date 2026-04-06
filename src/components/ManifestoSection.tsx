import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const ManifestoSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="section-padding">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-[10px] sm:text-xs font-semibold tracking-[0.22em] uppercase text-muted-foreground mb-5 block">
            Manifesto
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-foreground leading-[1.15] mb-6">
            I don't wait for the future.{" "}
            <span className="shimmer-text">I build it.</span>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-sm sm:text-[15px] text-muted-foreground leading-relaxed max-w-xl mx-auto"
          >
            Build products that make technology feel more useful, more elegant, and more human. Start with clarity, keep the standards high, and let the work speak.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};
