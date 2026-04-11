import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const Footer = () => (
  <footer className="section-padding py-12 sm:py-14">
    <div className="max-w-5xl mx-auto">
      <div className="section-divider mb-10" />
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Link to="/" className="font-heading font-bold text-foreground text-sm tracking-tight">
            Ali Shaikh
          </Link>
          <p className="text-[10px] text-muted-foreground mt-1.5 max-w-xs leading-relaxed font-mono tracking-wide">
            Building products that feel like they matter.
          </p>
        </motion.div>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          {["About", "Projects", "Blog", "Contact"].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase()}`}
              className="text-[11px] text-muted-foreground hover:text-foreground transition-colors duration-300 font-mono tracking-wide"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-10 pt-6 border-t border-border/15">
        <span className="text-[9px] text-muted-foreground/40 font-mono tracking-wider">
          © {new Date().getFullYear()} ALI SHAIKH — BUILT WITH OBSESSION
        </span>
      </div>
    </div>
  </footer>
);
