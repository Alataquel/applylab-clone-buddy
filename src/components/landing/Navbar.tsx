import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Globe, ChevronDown, Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.2, 0, 0, 1] }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 lg:px-12 py-4 bg-background/80 backdrop-blur-xl"
        style={{ boxShadow: "0 1px 0 rgba(255,255,255,0.05)" }}
      >
        <a href="/" className="flex items-center gap-2">
          <span className="text-foreground font-bold text-xl tracking-tight">applylab</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="/students" className="text-sm text-muted-foreground hover:text-foreground transition-colors">For Students</a>
          <a href="/universities" className="text-sm text-muted-foreground hover:text-foreground transition-colors">For Universities</a>
          <a href="/ambassador" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Ambassador</a>
          <a href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</a>
        </div>

        <div className="flex items-center gap-3">
          <button className="hidden md:flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors px-3 py-1.5 rounded-lg">
            <Globe className="w-4 h-4" />
            English
            <ChevronDown className="w-3 h-3" />
          </button>
          <a href="/login" className="hidden md:inline text-sm text-muted-foreground hover:text-foreground transition-colors">Log In</a>
          <a
            href="/request-pilot"
            className="hidden md:inline text-sm font-medium bg-foreground text-background px-4 py-2 rounded-full hover:opacity-90 transition-opacity"
          >
            Request pilot
          </a>

          {/* Mobile: language + hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <button className="flex items-center gap-1.5 text-sm text-muted-foreground px-2 py-1.5 rounded-lg">
              <Globe className="w-4 h-4" />
              English
              <ChevronDown className="w-3 h-3" />
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-1.5 text-foreground"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed top-[60px] left-0 right-0 z-40 bg-background overflow-hidden"
            style={{ boxShadow: "0 1px 0 rgba(255,255,255,0.05)" }}
          >
            <div className="px-6 py-4 space-y-0">
              {[
                { label: "For Students", href: "/students" },
                { label: "For Universities", href: "/universities" },
                { label: "About", href: "/about" },
                { label: "Log In", href: "/login" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-4 text-base text-muted-foreground hover:text-foreground transition-colors border-b border-border/30"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 pb-2">
                <a
                  href="/request-pilot"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full text-center bg-primary text-primary-foreground font-medium py-3.5 rounded-lg text-sm hover:opacity-90 transition-opacity"
                >
                  Request pilot
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
