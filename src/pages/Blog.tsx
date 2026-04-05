import { motion } from "framer-motion";
import { PageTransition } from "@/components/PageTransition";
import { Footer } from "@/components/Footer";

const Blog = () => {
  return (
    <PageTransition>
      <main>
        <section className="px-4 sm:px-6 md:px-12 lg:px-20 py-20 md:py-28 pt-28 sm:pt-32 relative min-h-[70vh] flex items-center">
          <motion.div
            animate={{ x: [0, -20, 15, 0], y: [0, 15, -10, 0] }}
            transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
            className="liquid-blob w-72 h-72 bg-foreground/5 bottom-10 right-10"
          />

          <div className="max-w-6xl mx-auto relative z-10 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-2xl mx-auto"
            >
              <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-muted-foreground mb-3 block">Blog</span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-5 tracking-tight">
                Thoughts & <span className="shimmer-text">insights</span>
              </h1>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-10">
                Articles on technology, AI, product building, and the journey of a young innovator. Stay tuned for deep dives and fresh perspectives.
              </p>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl glass-strong text-sm text-muted-foreground"
              >
                <motion.span
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-2 h-2 rounded-full bg-foreground/30"
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
};

export default Blog;
