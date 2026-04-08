import { motion } from "framer-motion";
import { PageTransition } from "@/components/PageTransition";
import { Footer } from "@/components/Footer";

const Blog = () => (
  <PageTransition>
    <main>
      <section className="section-padding pt-28 sm:pt-32 min-h-[70vh] flex items-center">
        <div className="max-w-5xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-lg mx-auto"
          >
            <span className="eyebrow mb-4 block">Blog</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground leading-[1.08] mb-5">
              Notes on building &{" "}
              <span className="shimmer-text">thinking.</span>
            </h1>
            <p className="text-[14px] sm:text-[15px] text-muted-foreground leading-[1.75] mb-10">
              Practical writing on design decisions, product strategy,
              AI workflows, and lessons from shipping real products.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full glass text-sm text-muted-foreground"
            >
              <motion.span
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2.5, repeat: Infinity }}
                className="w-1.5 h-1.5 rounded-full bg-foreground/25"
              />
              First articles coming soon
            </motion.div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </main>
  </PageTransition>
);

export default Blog;
