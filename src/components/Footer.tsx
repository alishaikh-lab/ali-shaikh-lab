import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="px-4 sm:px-6 md:px-12 lg:px-20 py-10 sm:py-14 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <Link to="/" className="font-heading font-bold text-foreground text-lg mb-1 block">Ali Shaikh</Link>
            <p className="text-xs text-muted-foreground">India's Youngest Digital Innovator in Tech & AI</p>
          </div>
          <div className="flex gap-6">
            {["About", "Projects", "Blog", "Contact"].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase()}`}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Ali Shaikh. All rights reserved.
          </span>
          <span className="text-xs text-muted-foreground">
            Built with vision & code.
          </span>
        </div>
      </div>
    </footer>
  );
};
