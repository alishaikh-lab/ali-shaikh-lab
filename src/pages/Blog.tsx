import { motion } from "framer-motion";
import { PageTransition } from "@/components/PageTransition";
import { Footer } from "@/components/Footer";

const Blog = () => (
  <PageTransition>
    <main>
      <section className="px-5 sm:px-6 md:px-10 lg:px-20 py-16 md:py-24 pt-24 sm:pt-28 min-h-[70vh] flex items-center">
        <div className="max-w-6xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-xl mx-auto"
          >
            <span className="text-[10px] sm:text-xs font-semibold tracking-[0.22em] uppercase text-muted-foreground mb-3 block">Blog</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
              Notes on building & <span className="shimmer-text">product thinking</span>
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-8">
              Practical writing on design decisions, product execution, AI workflows, and lessons from shipping.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full glass text-sm text-muted-foreground"
            >
              <motion.span
                animate={{ scale: [1, 1.4, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1.5 h-1.5 rounded-full bg-foreground/30"
              />
              First articles dropping soon
            </motion.div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </main>
  </PageTransition>
);

export default Blog;
