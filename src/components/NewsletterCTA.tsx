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
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <div className="glass-card p-7 sm:p-10 md:p-14">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <span className="eyebrow mb-5">Let's Build</span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-foreground leading-[1.1] mb-4">
                Ready to create something{" "}
                <span className="shimmer-text">exceptional</span>?
              </h2>
              <p className="text-sm sm:text-[15px] text-muted-foreground leading-relaxed max-w-lg">
                From structure and positioning to visual polish and conversion-focused UX — if your next project needs to feel sharper, let's build it properly.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <Link to="/contact" className="group btn-primary w-full justify-center">
                Start the Conversation
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/projects" className="btn-secondary w-full justify-center">
                Review the Work
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
