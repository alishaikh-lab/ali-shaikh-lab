import { motion } from "framer-motion";

const words = [
  "Product Strategy",
  "Interface Taste",
  "Responsive Systems",
  "AI Experiments",
  "Clear Execution",
  "Beautiful Details",
  "Fast Shipping",
  "Product Strategy",
  "Interface Taste",
  "Responsive Systems",
  "AI Experiments",
  "Clear Execution",
  "Beautiful Details",
  "Fast Shipping",
];

export const MarqueeSection = () => {
  return (
    <section className="relative overflow-hidden py-10 sm:py-14">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-background to-transparent" />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="section-panel panel-noise mx-4 sm:mx-6 md:mx-10 lg:mx-16 xl:mx-20 rounded-[1.8rem] py-6"
      >
        <div className="flex animate-marquee whitespace-nowrap">
          {words.map((word, i) => (
            <span
              key={`${word}-${i}`}
              className="mx-4 inline-flex items-center gap-4 text-lg sm:mx-6 sm:text-2xl md:text-[2rem] font-heading font-bold tracking-[-0.04em] text-foreground/14 select-none"
            >
              {word}
              <span className="h-2.5 w-2.5 rounded-full bg-[hsl(var(--highlight-soft)/0.55)]" />
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
