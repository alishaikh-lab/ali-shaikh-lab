import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const stats = [
  { value: "16", label: "Years old", note: "Started at 14" },
  { value: "2+", label: "Years building", note: "Consistent shipping" },
  { value: "10+", label: "Products shipped", note: "From idea to live" },
  { value: "24/7", label: "Curiosity", note: "Always learning" },
];

export const AboutPreview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="section-padding relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-start gap-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-muted-foreground mb-4 block">
              The Story
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[2.5rem] font-heading font-bold text-foreground mb-5 leading-[1.1]">
              From raw ideas to <span className="shimmer-text">launch-ready products</span>
            </h2>
            <p className="text-sm sm:text-[15px] text-muted-foreground leading-relaxed mb-6 max-w-xl">
              Based in Pune, Ali approaches building with a simple filter: solve a real problem, make the experience elegant, and ship work that feels clear from the first click.
            </p>
            <Link
              to="/about"
              className="group inline-flex items-center gap-2 text-sm font-medium text-foreground hover:gap-3 transition-all duration-300"
            >
              Read the full story
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>

          <div className="mt-10 lg:mt-0 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {stats.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 25, scale: 0.96 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.15 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
                className="p-5 rounded-2xl glass-card group cursor-default"
              >
                <span className="block font-heading text-2xl sm:text-3xl font-bold text-foreground mb-1 group-hover:scale-105 transition-transform duration-300 origin-left">
                  {item.value}
                </span>
                <span className="block text-sm font-medium text-foreground mb-0.5">{item.label}</span>
                <span className="block text-[11px] text-muted-foreground">{item.note}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
