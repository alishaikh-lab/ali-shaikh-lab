import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

const quotes = [
  {
    text: "The future belongs to those who build it — not those who predict it.",
    source: "Ali Shaikh",
  },
  {
    text: "Age doesn't define capability. Shipping real products does.",
    source: "Ali Shaikh",
  },
  {
    text: "Every product I build is a conversation between a dream and reality.",
    source: "Ali Shaikh",
  },
];

export const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="section-padding relative overflow-hidden">
      <motion.div
        animate={{ x: [0, -20, 15, 0], y: [0, 15, -10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="liquid-blob w-[300px] h-[300px] bg-foreground/5 top-10 right-0"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-12 md:mb-16"
        >
          <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-muted-foreground mb-4 block">
            Thoughts
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[2.75rem] font-heading font-bold text-foreground leading-[1.1]">
            Words I <span className="shimmer-text">live by</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4">
          {quotes.map((q, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
              className="relative p-6 sm:p-8 rounded-2xl glass-strong group cursor-default"
            >
              <Quote size={20} className="text-foreground/10 mb-4" strokeWidth={1.5} />
              <p className="text-sm sm:text-[15px] text-foreground leading-relaxed mb-5 font-medium">
                "{q.text}"
              </p>
              <span className="text-[11px] text-muted-foreground font-heading font-semibold tracking-wider uppercase">
                — {q.source}
              </span>
              {/* Subtle shimmer on hover */}
              <motion.div
                className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-foreground/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
