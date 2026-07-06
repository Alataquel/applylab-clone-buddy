import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

const allFeatures = [
  "Resume Builder + AI scoring",
  "AI Cover Letter Maker",
  "Job & Internship Board",
  "Smart Matching",
  "Automatic Application Tracker",
  "Interview & Case Prep",
];

const tiers = [
  {
    name: "Monthly",
    tagline: "Try ApplyLab risk-free.",
    price: "€12.99",
    period: "/month",
    billedNote: "Billed monthly",
    cta: "Start free",
    href: "/signup?plan=monthly",
    highlight: false,
    badge: undefined as string | undefined,
    features: allFeatures,
  },
  {
    name: "Quarterly",
    tagline: "Most flexible commitment.",
    price: "€9.99",
    period: "/month",
    billedNote: "€29.97 billed every 3 months",
    cta: "Start free",
    href: "/signup?plan=quarterly",
    highlight: false,
    badge: "Save 23%",
    features: allFeatures,
  },
  {
    name: "Annual",
    tagline: "Best value — save 38%.",
    price: "€7.99",
    period: "/month",
    billedNote: "€95.88 billed yearly",
    cta: "Start free",
    href: "/signup?plan=annual",
    highlight: true,
    badge: "Best value",
    features: allFeatures,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 max-w-2xl mx-auto"
        >
          <p className="text-xs uppercase tracking-widest text-primary font-medium mb-3">Pricing</p>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground tracking-tight mb-4 leading-[1.1]">
            One plan, <span className="text-gradient italic">your pace.</span>
          </h2>
          <p className="text-base text-muted-foreground">
            Full access to every feature. Pick the commitment that fits you — the longer you stay, the more you save.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`relative rounded-2xl p-8 border flex flex-col ${
                tier.highlight
                  ? "bg-card border-primary/50 shadow-lg md:scale-[1.03]"
                  : "bg-card/60 border-border/40"
              }`}
            >
              {tier.highlight && tier.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[10px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full">
                  {tier.badge}
                </span>
              )}
              <h3 className="text-lg font-semibold text-foreground">{tier.name}</h3>
              <p className="text-sm text-muted-foreground mt-1 mb-6 min-h-[40px]">{tier.tagline}</p>
              <div className="flex items-end gap-1 mb-1">
                <span className="text-4xl font-bold text-foreground tracking-tight">{tier.price}</span>
                <span className="text-sm text-muted-foreground mb-1.5">{tier.period}</span>
              </div>
              <p className="text-xs text-muted-foreground mb-6">{tier.billedNote}</p>

              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-foreground/90">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href={tier.href}
                className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-opacity ${
                  tier.highlight
                    ? "bg-foreground text-background hover:opacity-90"
                    : "border border-border text-foreground hover:bg-secondary"
                }`}
              >
                {tier.cta} <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-xs text-muted-foreground mt-8">
          Every plan includes all features and a 7-day free trial. Cancel anytime.
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
