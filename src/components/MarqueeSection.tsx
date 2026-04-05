import { motion } from "framer-motion";

const words = [
  "Builder", "Innovator", "Dreamer", "Creator", "Visionary",
  "Tech", "AI", "Design", "Products", "Future",
  "Builder", "Innovator", "Dreamer", "Creator", "Visionary",
  "Tech", "AI", "Design", "Products", "Future",
];

export const MarqueeSection = () => {
  return (
    <section className="py-10 sm:py-14 overflow-hidden border-y border-border/30">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex animate-marquee whitespace-nowrap">
          {words.map((word, i) => (
            <span
              key={i}
              className="mx-4 sm:mx-6 text-xl sm:text-2xl md:text-3xl font-heading font-bold text-foreground/[0.07] select-none"
            >
              {word}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
