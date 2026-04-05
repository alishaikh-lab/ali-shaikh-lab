import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const NewsletterCTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="section-padding">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="max-w-6xl mx-auto"
      >
        <div className="relative glass-strong rounded-[2rem] p-7 sm:p-10 md:p-14 overflow-hidden">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 right-0 w-56 h-56 bg-foreground/5 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.3, 0.15] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-0 left-0 w-40 h-40 bg-muted-foreground/5 rounded-full blur-3xl"
          />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="max-w-lg">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-heading font-bold text-foreground mb-2 leading-tight">
                Want to build together?
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Whether it's a collaboration, a conversation, or just saying hello — 
                I'm always open to connecting with people who think big.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-foreground text-background font-medium text-sm hover:shadow-2xl hover:scale-[1.03] active:scale-[0.98] transition-all duration-300"
              >
                Get in Touch
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-border/50 glass font-medium text-sm text-foreground hover:scale-[1.03] active:scale-[0.98] transition-all duration-300"
              >
                See My Work
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
