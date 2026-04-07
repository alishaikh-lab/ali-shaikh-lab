import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const quotes = [
  "The future belongs to the people willing to build it — not just discuss it.",
  "Good taste is the rarest competitive advantage. Most people underestimate it.",
  "Ship fast, learn faster. Perfection is a trap disguised as professionalism.",
];

export const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % quotes.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={ref} className="section-padding">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[10px] sm:text-xs font-semibold tracking-[0.22em] uppercase text-muted-foreground mb-6 block">
            Convictions
          </span>

          <div className="relative min-h-[120px] sm:min-h-[140px] flex items-center justify-center">
            {quotes.map((quote, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: activeIdx === i ? 1 : 0,
                  y: activeIdx === i ? 0 : 10,
                }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex items-center justify-center text-xl sm:text-2xl md:text-3xl font-heading font-bold text-foreground leading-[1.2] px-4"
              >
                "{quote}"
              </motion.p>
            ))}
          </div>

          <div className="flex items-center justify-center gap-2 mt-8">
            {quotes.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIdx(i)}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  activeIdx === i ? "w-8 bg-foreground" : "w-1.5 bg-border"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
