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
        <div className="relative rounded-3xl overflow-hidden bg-foreground text-background p-8 sm:p-12 md:p-16">
          {/* Noise texture */}
          <div className="noise-overlay absolute inset-0 opacity-[0.03]" />

          <div className="relative z-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <span className="text-[10px] sm:text-xs font-semibold tracking-[0.22em] uppercase text-background/50 mb-4 block">
                What's next
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-background leading-[1.05] mb-4">
                Got an idea worth
                <br />
                building?
              </h2>
              <p className="text-sm sm:text-[15px] text-background/60 leading-[1.7] max-w-md">
                I'm always looking for the next challenge — products that push
                boundaries, brands that need sharpening, ideas that deserve great execution.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <Link to="/contact" className="group inline-flex items-center justify-center gap-2 rounded-full bg-background text-foreground px-6 py-4 text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 w-full">
                Start the conversation
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/projects" className="inline-flex items-center justify-center gap-2 rounded-full border border-background/20 px-6 py-4 text-sm font-medium text-background/80 transition-all duration-300 hover:bg-background/10 w-full">
                See past work
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
