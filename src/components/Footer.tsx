import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="px-5 sm:px-6 md:px-12 lg:px-20 py-10 border-t border-border/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <div>
            <Link to="/" className="font-heading font-bold text-foreground text-sm mb-0.5 block">Ali Shaikh</Link>
            <p className="text-[10px] text-muted-foreground">India's Youngest Digital Innovator in Tech & AI</p>
          </div>
          <div className="flex gap-5">
            {["About", "Projects", "Blog", "Contact"].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase()}`}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-6 pt-5 border-t border-border/30">
          <span className="text-[10px] text-muted-foreground">
            © {new Date().getFullYear()} Ali Shaikh. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};
