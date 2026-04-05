import { motion } from "framer-motion";
import { Mail, ArrowUpRight, MessageCircle } from "lucide-react";
import { PageTransition } from "@/components/PageTransition";
import { Footer } from "@/components/Footer";
import { SocialLinks } from "@/components/SocialLinks";

const Contact = () => {
  return (
    <PageTransition>
      <main>
        <section className="px-4 sm:px-6 md:px-12 lg:px-20 py-20 md:py-28 pt-28 sm:pt-32 relative">
          <motion.div
            animate={{ x: [0, 20, -15, 0], y: [0, -15, 10, 0] }}
            transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
            className="liquid-blob w-96 h-96 bg-foreground/5 top-20 left-10"
          />

          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl mb-10"
            >
              <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-muted-foreground mb-3 block">Contact</span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-5 tracking-tight">
                Start the next <span className="shimmer-text">serious conversation</span>
              </h1>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                If you have a product idea, a collaboration, or a challenge that needs sharp execution, this is the fastest way to connect.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <motion.a
                href="mailto:hello@alishaikh.dev"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ y: -4, transition: { duration: 0.25 } }}
                className="group block p-6 rounded-2xl glass-card"
              >
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-foreground text-background flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Mail size={18} strokeWidth={1.5} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="font-heading text-base font-bold text-foreground mb-0.5">Email</h2>
                    <p className="text-xs text-muted-foreground">hello@alishaikh.dev</p>
                  </div>
                  <ArrowUpRight size={16} className="text-muted-foreground group-hover:text-foreground transition-colors" />
                </div>
              </motion.a>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="p-6 rounded-2xl glass-card"
              >
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
                    <MessageCircle size={18} strokeWidth={1.5} className="text-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="font-heading text-base font-bold text-foreground mb-0.5">Social DMs</h2>
                    <p className="text-xs text-muted-foreground">Available across the platforms below</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        <SocialLinks />
        <Footer />
      </main>
    </PageTransition>
  );
};

export default Contact;
