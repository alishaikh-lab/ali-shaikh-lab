import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
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
        <div className="section-panel panel-noise overflow-hidden p-7 sm:p-10 md:p-14">
          <div className="relative z-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <span className="eyebrow mb-5">
                <Sparkles size={12} className="text-[hsl(var(--highlight))]" />
                Final Call To Action
              </span>
              <h2 className="max-w-3xl text-2xl sm:text-3xl lg:text-[3.1rem] font-heading font-bold tracking-[-0.04em] text-foreground leading-[1.02]">
                Want the next version of your brand or product to feel <span className="shimmer-text">this considered</span>?
              </h2>
              <p className="mt-5 max-w-2xl text-sm sm:text-[15px] leading-relaxed text-muted-foreground">
                From structure and positioning to visual polish and conversion-focused UX, this is where better digital presence begins. If the work needs to feel sharper, cleaner, and more confident, let&apos;s build it properly.
              </p>
            </div>

            <div className="grid gap-4">
              <div className="glass-card p-5">
                <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">Best for</p>
                <p className="mt-3 text-lg font-heading font-bold text-foreground">Personal brands, product pages, and modern portfolio experiences</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/contact"
                  className="group inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_44px_rgba(15,23,42,0.18)]"
                >
                  Start the Conversation
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/projects"
                  className="inline-flex flex-1 items-center justify-center rounded-full glass px-6 py-3.5 text-sm font-medium text-foreground transition-all duration-300 hover:-translate-y-0.5"
                >
                  Review the Work
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
