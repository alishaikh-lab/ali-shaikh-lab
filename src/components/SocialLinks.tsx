import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const socials = [
  { name: "Instagram", handle: "@alishaikh.79", url: "https://www.instagram.com/alishaikh.79" },
  { name: "LinkedIn", handle: "Ali Shaikh", url: "https://www.linkedin.com/in/ali-shaikh-2965a93a9" },
  { name: "Twitter / X", handle: "@AliShaikh79", url: "https://x.com/AliShaikh79" },
  { name: "Threads", handle: "@alishaikh.79", url: "https://www.threads.com/@alishaikh.79" },
  { name: "YouTube", handle: "@alishaikh.79", url: "https://youtube.com/@alishaikh.79" },
  { name: "Pinterest", handle: "Ali Shaikh", url: "https://pin.it/7EgqezxXL" },
];

export const SocialLinks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="px-4 sm:px-6 md:px-12 lg:px-20 py-16 md:py-24 lg:py-32 relative">
      <div className="liquid-blob w-80 h-80 bg-foreground/5 top-10 right-10 animate-blob" style={{ animationDelay: "6s" }} />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10 md:mb-12"
        >
          <span className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-3 block">Connect</span>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-foreground leading-tight">
            Let's stay <span className="text-gradient">connected</span>
          </h2>
        </motion.div>

        {/* List-style links for a cleaner, editorial feel */}
        <div className="divide-y divide-border">
          {socials.map((s, i) => (
            <motion.a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              whileHover={{ x: 6, transition: { duration: 0.2 } }}
              className="group flex items-center justify-between py-4 sm:py-5 px-1"
            >
              <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                <span className="font-heading font-bold text-foreground text-base sm:text-lg">{s.name}</span>
                <span className="text-xs sm:text-sm text-muted-foreground truncate hidden sm:block">{s.handle}</span>
              </div>
              <ArrowUpRight size={18} className="text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
