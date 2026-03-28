import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const NewsletterCTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="px-4 sm:px-6 md:px-12 lg:px-20 py-20 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="max-w-6xl mx-auto"
      >
        <div className="relative glass-strong rounded-[2rem] p-8 sm:p-12 md:p-16 overflow-hidden">
          {/* Decorative gradient orbs */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-foreground/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-muted-foreground/5 rounded-full blur-3xl" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-lg">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-foreground mb-3 leading-tight">
                Want to build together?
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Whether it's a collaboration, a conversation, or just saying hello — 
                I'm always open to connecting with people who think big.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-foreground text-background font-medium text-sm hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
              >
                Get in Touch
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl border border-border font-medium text-sm text-foreground hover:bg-secondary transition-all duration-300"
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
