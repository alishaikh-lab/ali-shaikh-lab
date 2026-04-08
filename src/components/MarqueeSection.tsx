import { motion } from "framer-motion";

const words = [
  "Product Design", "AI Systems", "Brand Strategy", "Digital Craft",
  "User Experience", "Clean Code", "Fast Execution", "Visual Identity",
  "Product Design", "AI Systems", "Brand Strategy", "Digital Craft",
  "User Experience", "Clean Code", "Fast Execution", "Visual Identity",
];

export const MarqueeSection = () => (
  <section className="relative overflow-hidden py-8 sm:py-12">
    <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
    <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />

    <div className="section-divider mb-8 sm:mb-12" />

    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="flex animate-marquee whitespace-nowrap">
        {words.map((word, i) => (
          <span
            key={`${word}-${i}`}
            className="mx-6 sm:mx-10 text-2xl sm:text-4xl font-heading font-bold tracking-tight text-foreground/[0.04] select-none uppercase"
          >
            {word}
          </span>
        ))}
      </div>
    </motion.div>

    <div className="section-divider mt-8 sm:mt-12" />
  </section>
);
