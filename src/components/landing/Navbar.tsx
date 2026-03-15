import { motion } from "framer-motion";
import { Globe, ChevronDown } from "lucide-react";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.2, 0, 0, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 lg:px-12 py-4 bg-background/80 backdrop-blur-xl"
      style={{ boxShadow: "0 1px 0 rgba(255,255,255,0.05)" }}
    >
      <div className="flex items-center gap-2">
        <span className="text-foreground font-bold text-xl tracking-tight">applylab</span>
      </div>

      <div className="hidden md:flex items-center gap-8">
        <a href="/students" className="text-sm text-muted-foreground hover:text-foreground transition-colors">For Students</a>
        <a href="/universities" className="text-sm text-muted-foreground hover:text-foreground transition-colors">For Universities</a>
        <a href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</a>
      </div>

      <div className="flex items-center gap-3">
        <button className="hidden md:flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors px-3 py-1.5 rounded-lg">
          <Globe className="w-4 h-4" />
          English
          <ChevronDown className="w-3 h-3" />
        </button>
        <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Log In</a>
        <a
          href="/request-pilot"
          className="text-sm font-medium bg-foreground text-background px-4 py-2 rounded-full hover:opacity-90 transition-opacity"
        >
          Request pilot
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
