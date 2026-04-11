import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const words = [
  "Product Design", "AI Systems", "Brand Strategy", "Digital Craft",
  "User Experience", "Clean Code", "Fast Execution", "Visual Identity",
  "Product Design", "AI Systems", "Brand Strategy", "Digital Craft",
  "User Experience", "Clean Code", "Fast Execution", "Visual Identity",
];

export const MarqueeSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);

  return (
    <section ref={ref} className="relative overflow-hidden py-10 sm:py-14">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-background to-transparent" />

      <div className="section-divider mb-10 sm:mb-14" />

      <motion.div style={{ x }}>
        <div className="flex animate-marquee whitespace-nowrap">
          {words.map((word, i) => (
            <span
              key={`${word}-${i}`}
              className="mx-6 sm:mx-12 text-3xl sm:text-5xl font-heading font-bold tracking-tight text-foreground/[0.03] select-none uppercase"
            >
              {word}
            </span>
          ))}
        </div>
      </motion.div>

      <div className="section-divider mt-10 sm:mt-14" />
    </section>
  );
};
