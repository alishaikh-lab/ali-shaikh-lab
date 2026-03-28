import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const AboutPreview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="px-4 sm:px-6 md:px-12 lg:px-20 py-20 md:py-32 relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-20 items-center">
          {/* Left — big statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-muted-foreground mb-3 block">The Story</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6 leading-[1.08] tracking-tight">
              A 16-year-old turning{" "}
              <span className="text-gradient">dreams into products</span>
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6 max-w-md">
              From Pune, India — driven by one belief: every great product starts as an idea nobody else believes in. I build those ideas into reality.
            </p>
            <Link
              to="/about"
              className="group inline-flex items-center gap-2 text-sm font-medium text-foreground hover:gap-3 transition-all duration-300"
            >
              Read the full story
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Right — metric cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-10 lg:mt-0 grid grid-cols-2 gap-3"
          >
            {[
              { big: "16", label: "Years old", sub: "Started early" },
              { big: "2+", label: "Years building", sub: "Shipping products" },
              { big: "10+", label: "Projects shipped", sub: "Ideas → reality" },
              { big: "∞", label: "Curiosity", sub: "Never stops" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                className="p-5 sm:p-6 rounded-2xl border border-border hover:border-foreground/20 hover:bg-secondary/30 transition-all duration-500 group"
              >
                <span className="block font-heading text-3xl sm:text-4xl font-extrabold text-foreground mb-1 group-hover:scale-105 transition-transform duration-300 origin-left">
                  {item.big}
                </span>
                <span className="block text-sm font-medium text-foreground mb-0.5">{item.label}</span>
                <span className="block text-[11px] text-muted-foreground">{item.sub}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
