import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const NewsletterCTA = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="section-padding pb-20 sm:pb-28">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="max-w-5xl mx-auto"
      >
        <div className="relative rounded-3xl overflow-hidden bg-foreground text-background p-8 sm:p-12 md:p-16">
          <div className="relative z-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <span className="eyebrow !text-background/40 mb-5 block">What's next</span>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-heading font-bold text-background leading-[1.1] mb-5">
                Got an idea worth
                <br />
                building?
              </h2>
              <p className="text-[14px] sm:text-[15px] text-background/50 leading-[1.75] max-w-md">
                I'm always hunting for the next challenge — products that push
                boundaries, brands that need sharpening, ideas that deserve
                world-class execution.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-background text-foreground px-6 py-4 text-sm font-medium transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 w-full"
              >
                Start the conversation
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-background/15 px-6 py-4 text-sm font-medium text-background/70 transition-all duration-300 hover:bg-background/10 w-full"
              >
                See past work
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
