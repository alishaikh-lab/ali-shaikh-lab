import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const ManifestoSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="section-padding relative overflow-hidden">
      <motion.div
        animate={{ x: [0, 20, -15, 0], y: [0, -15, 10, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="liquid-blob w-[350px] h-[350px] bg-foreground/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-muted-foreground mb-6 block">
            Manifesto
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-heading font-bold text-foreground leading-[1.15] mb-8">
            I don&apos;t wait for the future.{" "}
            <motion.span
              className="relative inline-block"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <motion.span
                className="absolute -bottom-1 left-0 right-0 h-[35%] bg-foreground/10 rounded-sm"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ delay: 0.6, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                style={{ originX: 0 }}
              />
              <span className="relative z-10 shimmer-text">I build it.</span>
            </motion.span>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-sm sm:text-[15px] text-muted-foreground leading-relaxed max-w-2xl mx-auto"
          >
            The goal is simple: build products that make technology feel more useful, more elegant, and more human. Start with clarity, keep the standards high, and let the work speak.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};
