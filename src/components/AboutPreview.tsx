import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useSectionReveal } from "@/hooks/useParallax";

export const AboutPreview = () => {
  const { ref, opacity, y } = useSectionReveal();

  return (
    <section ref={ref} className="section-padding section-spacing">
      <motion.div style={{ opacity, y }} className="max-w-5xl mx-auto">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-24 items-start">
          <div>
            <span className="eyebrow mb-5 block">About</span>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.8rem] font-heading font-bold text-foreground leading-[1.06] mb-6">
              Not just shipping code —
              <br />
              <span className="text-gradient-muted">raising the bar.</span>
            </h2>
            <p className="text-[13px] sm:text-[15px] text-muted-foreground leading-[1.85] mb-8 max-w-md">
              While most are still exploring career paths, I'm already
              building products people use — bridging design instinct
              with technical precision and relentless execution.
            </p>
            <Link
              to="/about"
              className="group inline-flex items-center gap-2 text-sm font-medium text-foreground"
            >
              <span className="border-b border-foreground/20 pb-0.5 group-hover:border-foreground transition-colors duration-500">
                Read the full story
              </span>
              <ArrowRight size={13} className="group-hover:translate-x-1.5 transition-transform duration-300" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {[
              { value: "16", label: "Age", sub: "Started building at 14" },
              { value: "10+", label: "Products", sub: "Shipped & live" },
              { value: "AI", label: "Focus area", sub: "Design × Intelligence" },
              { value: "∞", label: "Ambition", sub: "Zero ceiling thinking" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.08 }}
                className="glass-card p-5 sm:p-6 group cursor-default"
              >
                <span className="block font-heading text-3xl sm:text-4xl font-bold text-foreground mb-3 tracking-tight">
                  {item.value}
                </span>
                <span className="block text-[12px] font-medium text-foreground">{item.label}</span>
                <span className="block text-[10px] text-muted-foreground mt-1 leading-relaxed">{item.sub}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};
