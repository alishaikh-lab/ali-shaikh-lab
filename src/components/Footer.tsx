import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="px-5 sm:px-6 md:px-10 lg:px-20 py-8 border-t border-border/40">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <Link to="/" className="font-heading font-bold text-foreground text-sm block">
              Ali Shaikh
            </Link>
            <p className="text-[11px] text-muted-foreground mt-0.5 max-w-xs">
              Building polished digital products with better ideas and sharper execution.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
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
        <div className="mt-5 pt-4 border-t border-border/30">
          <span className="text-[10px] text-muted-foreground">
            © {new Date().getFullYear()} Ali Shaikh. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};
