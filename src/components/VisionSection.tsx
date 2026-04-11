import { motion } from "framer-motion";
import { useSectionReveal } from "@/hooks/useParallax";

const principles = [
  { num: "01", title: "Ship with intent", text: "Every feature earns its place. Great ideas die in drafts — the best ones ship fast and iterate." },
  { num: "02", title: "Design is strategy", text: "The gap between tolerable and lovable is intentional design at every single touchpoint." },
  { num: "03", title: "Speed is a signal", text: "Fast execution proves deep understanding. Moving slow is the real risk in this game." },
  { num: "04", title: "Build in public", text: "Transparency compounds trust. Every launch, every lesson — shared openly with the world." },
];

export const VisionSection = () => {
  const { ref, opacity, y } = useSectionReveal();

  return (
    <section ref={ref} className="section-padding section-spacing">
      <motion.div style={{ opacity, y }} className="max-w-5xl mx-auto">
        <div className="mb-16 sm:mb-24">
          <span className="eyebrow mb-4 block">Philosophy</span>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.8rem] font-heading font-bold text-foreground leading-[1.06]">
            How I approach
            <br />
            <span className="shimmer-text">building things.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border/20 rounded-2xl overflow-hidden">
          {principles.map((p, i) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="bg-background p-7 sm:p-10 group cursor-default hover:bg-muted/30 transition-colors duration-700"
            >
              <span className="eyebrow text-foreground/8 mb-6 block">{p.num}</span>
              <h3 className="font-heading text-lg sm:text-xl font-bold text-foreground mb-3 group-hover:translate-x-1.5 transition-transform duration-500">
                {p.title}
              </h3>
              <p className="text-[12px] sm:text-[13px] text-muted-foreground leading-[1.8]">{p.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
