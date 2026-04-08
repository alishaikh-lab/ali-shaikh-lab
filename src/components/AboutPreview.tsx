import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const AboutPreview = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding section-spacing">
      <div className="max-w-5xl mx-auto">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24 items-start">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="eyebrow mb-5 block">About me</span>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.8rem] font-heading font-bold text-foreground leading-[1.08] mb-6">
              Not just shipping code —
              <br />
              <span className="text-gradient-muted">raising the standard.</span>
            </h2>
            <p className="text-[14px] sm:text-[15px] text-muted-foreground leading-[1.8] mb-8 max-w-md">
              While most 16-year-olds are exploring career paths, I'm
              already building products people use — bridging design
              instinct with technical precision and a bias for action.
            </p>
            <Link
              to="/about"
              className="group inline-flex items-center gap-2 text-sm font-medium text-foreground"
            >
              <span className="border-b border-foreground/20 pb-0.5 group-hover:border-foreground transition-colors duration-300">
                Read the full story
              </span>
              <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Stats grid — golden ratio spacing */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: "16", label: "Age", sub: "Started building at 14" },
              { value: "10+", label: "Products", sub: "From idea to launch" },
              { value: "AI", label: "Primary focus", sub: "Design × Intelligence" },
              { value: "∞", label: "Ambition", sub: "Zero ceiling thinking" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.08 }}
                className="glass-card p-5 sm:p-6 group cursor-default"
              >
                <span className="block font-heading text-3xl sm:text-4xl font-bold text-foreground mb-3 transition-all duration-500 group-hover:shimmer-text">
                  {item.value}
                </span>
                <span className="block text-[13px] font-medium text-foreground">{item.label}</span>
                <span className="block text-[11px] text-muted-foreground mt-0.5 leading-relaxed">{item.sub}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
