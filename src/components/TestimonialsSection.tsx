import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const convictions = [
  "The future belongs to people willing to build it — not just debate it.",
  "Good taste is the rarest competitive advantage. Most underestimate it.",
  "Ship fast, learn faster. Perfection is a trap disguised as professionalism.",
];

export const TestimonialsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIdx((p) => (p + 1) % convictions.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section ref={ref} className="section-padding section-spacing">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="eyebrow mb-8 block">Convictions</span>

          <div className="relative min-h-[100px] sm:min-h-[130px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.p
                key={idx}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.5 }}
                className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-foreground leading-[1.25] px-4"
              >
                "{convictions[idx]}"
              </motion.p>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-2 mt-10">
            {convictions.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className={`h-1.5 rounded-full transition-all duration-600 ${
                  idx === i ? "w-8 bg-foreground" : "w-1.5 bg-border hover:bg-muted-foreground/30"
                }`}
                aria-label={`Quote ${i + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
