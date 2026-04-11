import { motion } from "framer-motion";
import { Mail, ArrowUpRight, MessageCircle } from "lucide-react";
import { PageTransition } from "@/components/PageTransition";
import { Footer } from "@/components/Footer";
import { SocialLinks } from "@/components/SocialLinks";

const Contact = () => (
  <PageTransition>
    <main>
      <section className="section-padding pt-28 sm:pt-36 pb-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-lg mb-12"
          >
            <span className="eyebrow mb-5 block">Contact</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground leading-[1.06] mb-6">
              Let's start a <span className="shimmer-text">conversation.</span>
            </h1>
            <p className="text-[13px] sm:text-[15px] text-muted-foreground leading-[1.85]">
              Have a product idea, collaboration, or challenge worth solving? I'd love to hear from you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
            <motion.a
              href="mailto:hello@alishaikh.dev"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="group block p-5 sm:p-6 glass-card"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-foreground text-background flex items-center justify-center flex-shrink-0">
                  <Mail size={15} strokeWidth={1.5} />
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="font-heading text-sm font-bold text-foreground">Email</h2>
                  <p className="text-[10px] text-muted-foreground mt-0.5 font-mono tracking-wide">hello@alishaikh.dev</p>
                </div>
                <ArrowUpRight size={13} className="text-muted-foreground/20 group-hover:text-foreground transition-colors duration-300" />
              </div>
            </motion.a>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="p-5 sm:p-6 glass-card"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center flex-shrink-0">
                  <MessageCircle size={15} strokeWidth={1.5} className="text-foreground" />
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="font-heading text-sm font-bold text-foreground">Social DMs</h2>
                  <p className="text-[10px] text-muted-foreground mt-0.5 font-mono tracking-wide">Available on all platforms</p>
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
