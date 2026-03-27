export const Footer = () => {
  return (
    <footer className="px-6 md:px-12 lg:px-20 py-12 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Ali Shaikh. All rights reserved.
        </span>
        <span className="text-sm text-muted-foreground">
          Built with vision & code.
        </span>
      </div>
    </footer>
  );
};
