import { motion } from "framer-motion";
import { PageTransition } from "@/components/PageTransition";
import { Footer } from "@/components/Footer";

const Blog = () => {
  return (
    <PageTransition>
      <main>
        <section className="px-4 sm:px-6 md:px-12 lg:px-20 py-20 md:py-28 pt-32 relative min-h-[70vh] flex items-center">
          <div className="liquid-blob w-72 h-72 bg-foreground/5 bottom-10 right-10 animate-blob" />

          <div className="max-w-6xl mx-auto relative z-10 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-2xl mx-auto"
            >
              <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-muted-foreground mb-3 block">Blog</span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-foreground mb-5 tracking-tight">
                Thoughts & <span className="text-gradient">insights</span>
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-10">
                Articles on technology, AI, product building, and the journey of a young innovator. Stay tuned for deep dives and fresh perspectives.
              </p>
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border text-sm text-muted-foreground">
                <span className="w-2 h-2 rounded-full bg-foreground/30 animate-pulse" />
                First articles dropping soon
              </div>
            </motion.div>
          </div>
        </section>
        <Footer />
      </main>
    </PageTransition>
  );
};

export default Blog;
