import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const stats = [
  { value: "16", label: "Years old", note: "Started at 14" },
  { value: "2+", label: "Years building", note: "Consistent output" },
  { value: "10+", label: "Products shipped", note: "Idea → live" },
  { value: "24/7", label: "Learning", note: "Always curious" },
];

export const AboutPreview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-[10px] sm:text-xs font-semibold tracking-[0.22em] uppercase text-muted-foreground mb-3 block">
              The Story
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4 leading-[1.1]">
              From raw ideas to{" "}
              <span className="shimmer-text">real products</span>
            </h2>
            <p className="text-sm sm:text-[15px] text-muted-foreground leading-relaxed mb-5 max-w-lg">
              Based in Pune, Ali approaches building with a simple filter: solve a real problem, make it elegant, and ship it fast. Every product is a step toward making technology feel more useful and more human.
            </p>
            <Link
              to="/about"
              className="group inline-flex items-center gap-2 text-sm font-medium text-foreground"
            >
              Read the full story
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-2 gap-3">
            {stats.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.06 }}
                className="p-5 glass-card cursor-default"
              >
                <span className="block font-heading text-2xl font-bold text-foreground mb-1">
                  {item.value}
                </span>
                <span className="block text-sm font-medium text-foreground">{item.label}</span>
                <span className="block text-[11px] text-muted-foreground mt-0.5">{item.note}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
