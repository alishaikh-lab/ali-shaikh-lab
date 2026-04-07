import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const AboutPreview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-20 items-start">
          {/* Left — editorial text block */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-[10px] sm:text-xs font-semibold tracking-[0.22em] uppercase text-muted-foreground mb-4 block">
              Who I am
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground leading-[1.05] mb-5">
              Not just building
              <br />
              <span className="text-gradient-muted">products — building</span>
              <br />
              a standard.
            </h2>
            <p className="text-sm sm:text-[15px] text-muted-foreground leading-[1.7] mb-6 max-w-md">
              Most people my age are figuring out what to study. I'm figuring out
              how to ship products that people actually use — combining design
              intuition, technical depth, and the urgency to make things real.
            </p>
            <Link
              to="/about"
              className="group inline-flex items-center gap-2 text-sm font-medium text-foreground border-b border-foreground/20 pb-1 hover:border-foreground transition-colors"
            >
              The full story
              <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Right — bento stat grid */}
          <div className="grid grid-cols-2 gap-3">
            {[
              { value: "16", label: "Age", sub: "Started at 14" },
              { value: "10+", label: "Products", sub: "Idea → shipped" },
              { value: "AI", label: "Primary lens", sub: "Design × intelligence" },
              { value: "∞", label: "Ambition", sub: "No ceiling" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.07 }}
                className="glass-card p-5 group cursor-default"
              >
                <span className="block font-heading text-3xl sm:text-4xl font-bold text-foreground mb-2 group-hover:text-gradient-muted transition-all">
                  {item.value}
                </span>
                <span className="block text-sm font-medium text-foreground">{item.label}</span>
                <span className="block text-[11px] text-muted-foreground mt-0.5">{item.sub}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
