import { motion } from "framer-motion";
import { Mail, ArrowUpRight, MessageCircle } from "lucide-react";
import { PageTransition } from "@/components/PageTransition";
import { Footer } from "@/components/Footer";
import { SocialLinks } from "@/components/SocialLinks";

const Contact = () => (
  <PageTransition>
    <main>
      <section className="px-5 sm:px-6 md:px-10 lg:px-20 py-16 md:py-24 pt-24 sm:pt-28">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-xl mb-8"
          >
            <span className="text-[10px] sm:text-xs font-semibold tracking-[0.22em] uppercase text-muted-foreground mb-3 block">Contact</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
              Let's start a <span className="shimmer-text">conversation</span>
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Have a product idea, collaboration, or challenge? This is the fastest way to connect.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
            <motion.a
              href="mailto:hello@alishaikh.dev"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="group block p-5 glass-card"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-foreground text-background flex items-center justify-center flex-shrink-0">
                  <Mail size={16} strokeWidth={1.5} />
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="font-heading text-sm font-bold text-foreground">Email</h2>
                  <p className="text-[11px] text-muted-foreground">hello@alishaikh.dev</p>
                </div>
                <ArrowUpRight size={14} className="text-muted-foreground group-hover:text-foreground transition-colors" />
              </div>
            </motion.a>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-5 glass-card"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center flex-shrink-0">
                  <MessageCircle size={16} strokeWidth={1.5} className="text-foreground" />
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="font-heading text-sm font-bold text-foreground">Social DMs</h2>
                  <p className="text-[11px] text-muted-foreground">Available on all platforms below</p>
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

export default Contact;
