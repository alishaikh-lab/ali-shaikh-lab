import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const socials = [
  { name: "Instagram", handle: "@alishaikh.79", url: "https://www.instagram.com/alishaikh.79" },
  { name: "LinkedIn", handle: "Ali Shaikh", url: "https://www.linkedin.com/in/ali-shaikh-2965a93a9" },
  { name: "X", handle: "@AliShaikh79", url: "https://x.com/AliShaikh79" },
  { name: "Threads", handle: "@alishaikh.79", url: "https://www.threads.com/@alishaikh.79" },
  { name: "YouTube", handle: "@alishaikh.79", url: "https://youtube.com/@alishaikh.79" },
  { name: "Pinterest", handle: "Ali Shaikh", url: "https://pin.it/7EgqezxXL" },
];

export const SocialLinks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10 md:mb-14"
        >
          <span className="text-[10px] sm:text-xs font-semibold tracking-[0.22em] uppercase text-muted-foreground mb-3 block">Connect</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground leading-[1.05]">
            Let's be <span className="shimmer-text">internet friends</span>
          </h2>
        </motion.div>

        <div className="space-y-0 border-t border-border/40">
          {socials.map((s, i) => (
            <motion.a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="group flex items-center justify-between py-4 sm:py-5 border-b border-border/40 hover:pl-3 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <span className="font-heading font-bold text-foreground text-base sm:text-lg">{s.name}</span>
                <span className="text-[11px] sm:text-xs text-muted-foreground">{s.handle}</span>
              </div>
              <ArrowUpRight size={16} className="text-muted-foreground/40 group-hover:text-foreground group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
