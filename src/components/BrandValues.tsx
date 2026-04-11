import { motion } from "framer-motion";
import { useSectionReveal } from "@/hooks/useParallax";

const values = [
  { icon: "◆", title: "Taste", text: "Great products feel intentional — every pixel, every word, every interaction is considered." },
  { icon: "→", title: "Velocity", text: "Speed isn't recklessness. It's proof of deep understanding and sharp decision-making." },
  { icon: "✦", title: "Craft", text: "The gap between good and great is obsession with detail. That's where magic happens." },
  { icon: "◎", title: "Signal", text: "In a world of noise, clarity wins. No filler, no fluff — just substance that resonates." },
];

export const BrandValues = () => {
  const { ref, opacity, y } = useSectionReveal();

  return (
    <section ref={ref} className="section-padding section-spacing">
      <motion.div style={{ opacity, y }} className="max-w-5xl mx-auto">
        <div className="mb-16 sm:mb-24 max-w-lg">
          <span className="eyebrow mb-4 block">Core values</span>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.8rem] font-heading font-bold text-foreground leading-[1.06]">
            The DNA of <span className="text-outline">everything</span> I build.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="glass-card p-6 sm:p-8 group cursor-default"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-xl text-foreground/8 group-hover:text-foreground/30 transition-colors duration-700">
                  {v.icon}
                </span>
                <h3 className="font-heading text-lg font-bold text-foreground">{v.title}</h3>
              </div>
              <p className="text-[12px] sm:text-[13px] text-muted-foreground leading-[1.8]">{v.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
