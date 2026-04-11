import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const ManifestoSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);

  return (
    <section ref={ref} className="section-padding section-spacing">
      <motion.div style={{ scale, opacity }} className="max-w-3xl mx-auto text-center">
        <span className="eyebrow mb-8 block">Manifesto</span>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground leading-[1.08] mb-8">
          I don't wait for{" "}
          <span className="text-outline">permission</span>.
          <br />
          I <span className="shimmer-text">build</span>.
        </h2>

        <p className="text-[13px] sm:text-[15px] text-muted-foreground leading-[1.85] max-w-md mx-auto">
          Technology should feel like it was made for humans —
          useful, elegant, and genuinely worth someone's time.
          That's the standard. Always.
        </p>
      </motion.div>
    </section>
  );
};
