import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const socials = [
  { name: "Instagram", handle: "@alishaikh.79", url: "https://www.instagram.com/alishaikh.79" },
  { name: "LinkedIn", handle: "Ali Shaikh", url: "https://www.linkedin.com/in/ali-shaikh-2965a93a9" },
  { name: "X (Twitter)", handle: "@AliShaikh79", url: "https://x.com/AliShaikh79" },
  { name: "Threads", handle: "@alishaikh.79", url: "https://www.threads.com/@alishaikh.79" },
  { name: "YouTube", handle: "@alishaikh.79", url: "https://youtube.com/@alishaikh.79" },
  { name: "Pinterest", handle: "Ali Shaikh", url: "https://pin.it/7EgqezxXL" },
];

export const SocialLinks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="section-padding relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10 md:mb-14"
        >
          <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-muted-foreground mb-4 block">Connect</span>
          <h2 className="text-2xl sm:text-3xl lg:text-[2.5rem] font-heading font-bold text-foreground leading-[1.1]">
            Reach out where you are already <span className="shimmer-text">active</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {socials.map((s, i) => (
            <motion.a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -3, transition: { duration: 0.25 } }}
              className="group flex items-center justify-between p-4 rounded-2xl glass-card"
            >
              <div className="min-w-0">
                <span className="block font-heading font-bold text-foreground text-sm">{s.name}</span>
                <span className="block text-[11px] text-muted-foreground mt-0.5 truncate">{s.handle}</span>
              </div>
              <ArrowUpRight size={15} className="text-muted-foreground group-hover:text-foreground transition-all flex-shrink-0 ml-2" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
