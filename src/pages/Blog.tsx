import { motion } from "framer-motion";
import { Footer } from "@/components/Footer";
import { PenLine } from "lucide-react";

const Blog = () => {
  return (
    <main>
      <section className="section-padding pt-32 relative min-h-[70vh] flex items-center">
        <div className="liquid-blob w-72 h-72 bg-foreground/5 bottom-10 right-10 animate-blob" />

        <div className="max-w-6xl mx-auto relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mx-auto mb-8">
              <PenLine size={28} className="text-foreground" strokeWidth={1.5} />
            </div>
            <span className="text-xs font-medium tracking-wider uppercase text-muted-foreground mb-3 block">Blog</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Thoughts & <span className="text-gradient">insights</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Articles on technology, AI, product building, and the journey of a young innovator are coming soon. Stay tuned for deep dives and fresh perspectives.
            </p>
            <div className="glass rounded-2xl p-8 inline-block">
              <p className="text-muted-foreground text-sm">✦ First articles dropping soon</p>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Blog;
