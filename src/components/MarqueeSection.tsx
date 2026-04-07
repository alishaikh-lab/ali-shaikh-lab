import { motion } from "framer-motion";

const words = [
  "Product Design", "AI Systems", "Brand Strategy", "UI Engineering",
  "Fast Execution", "User Experience", "Clean Code", "Digital Craft",
  "Product Design", "AI Systems", "Brand Strategy", "UI Engineering",
  "Fast Execution", "User Experience", "Clean Code", "Digital Craft",
];

export const MarqueeSection = () => {
  return (
    <section className="relative overflow-hidden py-6 sm:py-8">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-background to-transparent" />

      <div className="section-divider mb-6 sm:mb-8" />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="flex animate-marquee whitespace-nowrap">
          {words.map((word, i) => (
            <span
              key={`${word}-${i}`}
              className="mx-5 sm:mx-8 text-xl sm:text-3xl font-heading font-bold tracking-tight text-foreground/[0.06] select-none uppercase"
            >
              {word}
            </span>
          ))}
        </div>
      </motion.div>

      <div className="section-divider mt-6 sm:mt-8" />
    </section>
  );
};
