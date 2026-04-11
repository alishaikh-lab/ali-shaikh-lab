import { motion } from "framer-motion";
import { PageTransition } from "@/components/PageTransition";
import { Footer } from "@/components/Footer";

const Blog = () => (
  <PageTransition>
    <main>
      <section className="section-padding pt-28 sm:pt-36 min-h-[70vh] flex items-center">
        <div className="max-w-5xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center max-w-lg mx-auto"
          >
            <span className="eyebrow mb-5 block">Blog</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground leading-[1.06] mb-6">
              Notes on building &{" "}
              <span className="shimmer-text">thinking.</span>
            </h1>
            <p className="text-[13px] sm:text-[15px] text-muted-foreground leading-[1.85] mb-12">
              Practical writing on design decisions, product strategy,
              AI workflows, and lessons from shipping real products.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full glass text-[11px] text-muted-foreground font-mono tracking-wider"
            >
              <motion.span
                animate={{ scale: [1, 1.6, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="w-1.5 h-1.5 rounded-full bg-foreground/20"
              />
              FIRST ARTICLES COMING SOON
            </motion.div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </main>
  </PageTransition>
);

export default Blog;
