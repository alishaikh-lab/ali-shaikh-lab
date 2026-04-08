import { motion } from "framer-motion";
import { Mail, ArrowUpRight, MessageCircle } from "lucide-react";
import { PageTransition } from "@/components/PageTransition";
import { Footer } from "@/components/Footer";
import { SocialLinks } from "@/components/SocialLinks";

const Contact = () => (
  <PageTransition>
    <main>
      <section className="section-padding pt-28 sm:pt-32 pb-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-lg mb-10"
          >
            <span className="eyebrow mb-4 block">Contact</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground leading-[1.08] mb-5">
              Let's start a <span className="shimmer-text">conversation.</span>
            </h1>
            <p className="text-[14px] sm:text-[15px] text-muted-foreground leading-[1.75]">
              Have a product idea, collaboration, or challenge worth solving? Let's connect.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <motion.a
              href="mailto:hello@alishaikh.dev"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="group block p-5 sm:p-6 glass-card"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-foreground text-background flex items-center justify-center flex-shrink-0">
                  <Mail size={16} strokeWidth={1.5} />
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="font-heading text-sm font-bold text-foreground">Email</h2>
                  <p className="text-[11px] text-muted-foreground mt-0.5">hello@alishaikh.dev</p>
                </div>
                <ArrowUpRight size={14} className="text-muted-foreground/30 group-hover:text-foreground transition-colors" />
              </div>
            </motion.a>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-5 sm:p-6 glass-card"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center flex-shrink-0">
                  <MessageCircle size={16} strokeWidth={1.5} className="text-foreground" />
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="font-heading text-sm font-bold text-foreground">Social DMs</h2>
                  <p className="text-[11px] text-muted-foreground mt-0.5">Available on all platforms below</p>
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
