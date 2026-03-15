import { Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/30 py-12 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-sm font-bold text-foreground tracking-tight">applylab</span>
        <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} ApplyLab. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a
            href="https://www.linkedin.com/company/applylabofficial/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin className="w-3.5 h-3.5" />
            LinkedIn
          </a>
          <a href="/privacy" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Privacy</a>
          <a href="/terms" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Terms</a>
          <a href="/request-pilot" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
