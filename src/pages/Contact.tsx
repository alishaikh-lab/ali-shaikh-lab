import { motion } from "framer-motion";
import { PageTransition } from "@/components/PageTransition";
import { Footer } from "@/components/Footer";
import { SocialLinks } from "@/components/SocialLinks";
import { Mail, ArrowUpRight } from "lucide-react";

const Contact = () => {
  return (
    <PageTransition>
      <main>
        <section className="px-4 sm:px-6 md:px-12 lg:px-20 py-20 md:py-28 pt-32 relative">
          <div className="liquid-blob w-96 h-96 bg-foreground/5 top-20 left-10 animate-blob" />

          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl mb-12"
            >
              <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-muted-foreground mb-3 block">Contact</span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-foreground mb-5 tracking-tight">
                Let's create something <span className="text-gradient">extraordinary</span>
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Have an idea, a collaboration in mind, or just want to connect? I'm always open to meaningful conversations.
              </p>
            </motion.div>

            <motion.a
              href="mailto:hello@alishaikh.dev"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group block p-6 sm:p-8 rounded-2xl border border-border hover:border-foreground/20 hover:bg-secondary/20 transition-all duration-300"
            >
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-xl bg-foreground text-background flex items-center justify-center flex-shrink-0">
                  <Mail size={20} strokeWidth={1.5} />
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="font-heading text-lg font-bold text-foreground mb-0.5">Email</h2>
                  <p className="text-sm text-muted-foreground">Drop a message — I read every one.</p>
                </div>
                <ArrowUpRight size={18} className="text-muted-foreground group-hover:text-foreground transition-colors hidden sm:block" />
              </div>
            </motion.a>
          </div>
        </section>
        <SocialLinks />
        <Footer />
      </main>
    </PageTransition>
  );
};

export default Contact;
