import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useSectionReveal } from "@/hooks/useParallax";

const socials = [
  { name: "Instagram", handle: "@alishaikh.79", url: "https://www.instagram.com/alishaikh.79" },
  { name: "LinkedIn", handle: "Ali Shaikh", url: "https://www.linkedin.com/in/ali-shaikh-2965a93a9" },
  { name: "X", handle: "@AliShaikh79", url: "https://x.com/AliShaikh79" },
  { name: "Threads", handle: "@alishaikh.79", url: "https://www.threads.com/@alishaikh.79" },
  { name: "YouTube", handle: "@alishaikh.79", url: "https://youtube.com/@alishaikh.79" },
  { name: "Pinterest", handle: "Ali Shaikh", url: "https://pin.it/7EgqezxXL" },
];

export const SocialLinks = () => {
  const { ref, opacity, y } = useSectionReveal();

  return (
    <section ref={ref} className="section-padding section-spacing">
      <motion.div style={{ opacity, y }} className="max-w-5xl mx-auto">
        <div className="mb-14 sm:mb-20">
          <span className="eyebrow mb-4 block">Connect</span>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.8rem] font-heading font-bold text-foreground leading-[1.06]">
            Let's be <span className="shimmer-text">internet friends.</span>
          </h2>
        </div>

        <div className="border-t border-border/20">
          {socials.map((s, i) => (
            <motion.a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className="group flex items-center justify-between py-5 sm:py-6 border-b border-border/20 hover:pl-3 transition-all duration-500"
            >
              <div className="flex items-center gap-4 sm:gap-6">
                <span className="font-heading font-bold text-foreground text-base sm:text-lg">{s.name}</span>
                <span className="text-[10px] text-muted-foreground hidden sm:inline font-mono tracking-wide">{s.handle}</span>
              </div>
              <ArrowUpRight
                size={14}
                className="text-muted-foreground/20 group-hover:text-foreground group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300"
              />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
