import { motion } from "framer-motion";
import { Footer } from "@/components/Footer";
import { SocialLinks } from "@/components/SocialLinks";
import { Mail, ArrowUpRight } from "lucide-react";

const Contact = () => {
  return (
    <main>
      <section className="section-padding pt-32 relative">
        <div className="liquid-blob w-96 h-96 bg-foreground/5 top-20 left-10 animate-blob" />

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mb-16"
          >
            <span className="text-xs font-medium tracking-wider uppercase text-muted-foreground mb-3 block">Contact</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Let's create something <span className="text-gradient">extraordinary</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Have an idea, a collaboration in mind, or just want to connect? Reach out through any of the channels below. I'm always open to meaningful conversations.
            </p>
          </motion.div>

          <motion.a
            href="mailto:hello@alishaikh.dev"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group glass rounded-3xl p-8 md:p-10 flex items-center gap-6 hover:scale-[1.01] transition-transform duration-300 mb-6"
          >
            <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center flex-shrink-0">
              <Mail size={24} className="text-foreground" strokeWidth={1.5} />
            </div>
            <div className="flex-1">
              <h2 className="font-heading text-xl font-bold text-foreground mb-1">Email</h2>
              <p className="text-muted-foreground">Drop a message — I read every one.</p>
            </div>
            <ArrowUpRight size={20} className="text-muted-foreground group-hover:text-foreground transition-colors hidden sm:block" />
          </motion.a>
        </div>
      </section>
      <SocialLinks />
      <Footer />
    </main>
  );
};

export default Contact;
