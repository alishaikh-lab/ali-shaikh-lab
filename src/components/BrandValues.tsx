import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const values = [
  { title: "Taste", emoji: "◆", text: "Great products feel intentional. Every pixel, every word, every interaction — considered." },
  { title: "Velocity", emoji: "→", text: "Execution speed isn't recklessness. It's proof of deep understanding and sharp decision-making." },
  { title: "Craft", emoji: "✦", text: "The gap between good and great is obsession with detail. That's where I live." },
  { title: "Signal", emoji: "◎", text: "In a world of noise, clarity wins. My work cuts through — no filler, no fluff." },
];

export const BrandValues = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16 max-w-2xl"
        >
          <span className="text-[10px] sm:text-xs font-semibold tracking-[0.22em] uppercase text-muted-foreground mb-3 block">
            What sets me apart
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground leading-[1.05]">
            The DNA of <span className="text-outline">everything</span> I do
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="glass-card p-6 sm:p-7 group cursor-default"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xl text-foreground/20 group-hover:text-foreground transition-colors duration-300">
                  {value.emoji}
                </span>
                <h3 className="font-heading text-lg font-bold text-foreground">{value.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-[1.65]">{value.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
