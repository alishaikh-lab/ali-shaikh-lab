import { motion } from "framer-motion";

const words = [
  "Product Design", "AI Systems", "Brand Strategy", "UI Engineering",
  "Fast Shipping", "User Experience", "Clean Code", "Digital Innovation",
  "Product Design", "AI Systems", "Brand Strategy", "UI Engineering",
  "Fast Shipping", "User Experience", "Clean Code", "Digital Innovation",
];

export const MarqueeSection = () => {
  return (
    <section className="relative overflow-hidden py-8 sm:py-12">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent" />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="border-y border-border/50 py-5"
      >
        <div className="flex animate-marquee whitespace-nowrap">
          {words.map((word, i) => (
            <span
              key={`${word}-${i}`}
              className="mx-4 sm:mx-6 text-lg sm:text-2xl font-heading font-bold tracking-tight text-foreground/8 select-none"
            >
              {word}
              <span className="ml-4 sm:ml-6 inline-block h-1.5 w-1.5 rounded-full bg-foreground/10" />
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
