import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const values = [
  { icon: "◆", title: "Taste", text: "Great products feel intentional. Every pixel, every word, every interaction — considered and purposeful." },
  { icon: "→", title: "Velocity", text: "Speed isn't recklessness. It's proof of deep understanding and sharp, confident decision-making." },
  { icon: "✦", title: "Craft", text: "The gap between good and great is obsession with detail. That's where the magic happens." },
  { icon: "◎", title: "Signal", text: "In a world of noise, clarity wins. My work cuts through — no filler, no fluff, just substance." },
];

export const BrandValues = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="section-padding section-spacing">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-14 sm:mb-20 max-w-lg"
        >
          <span className="eyebrow mb-4 block">What defines me</span>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.8rem] font-heading font-bold text-foreground leading-[1.08]">
            The DNA of <span className="text-outline">everything</span> I build.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.08 }}
              className="glass-card p-6 sm:p-8 group cursor-default"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-xl text-foreground/10 group-hover:text-foreground/40 transition-colors duration-500">
                  {v.icon}
                </span>
                <h3 className="font-heading text-lg font-bold text-foreground">{v.title}</h3>
              </div>
              <p className="text-[13px] sm:text-sm text-muted-foreground leading-[1.7]">{v.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
