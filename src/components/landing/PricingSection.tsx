import { useState } from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

type Billing = "monthly" | "annual";

const tiers = [
  {
    name: "Free",
    tagline: "Get started and explore the basics.",
    priceMonthly: "$0",
    priceAnnual: "$0",
    cta: "Start free",
    href: "/signup",
    highlight: false,
    features: [
      "Personal job tracker",
      "Basic application templates",
      "Limited AI suggestions",
      "Community access",
    ],
  },
  {
    name: "Pro",
    tagline: "For serious job seekers who want an edge.",
    priceMonthly: "$XX",
    priceAnnual: "$XX",
    cta: "Start Pro",
    href: "/signup?plan=pro",
    highlight: true,
    features: [
      "Unlimited applications & tracking",
      "Full AI coaching & feedback",
      "CV + cover letter generator",
      "Interview prep tools",
      "Priority support",
    ],
  },
  {
    name: "Premium",
    tagline: "Everything in Pro, plus 1:1 support.",
    priceMonthly: "$XX",
    priceAnnual: "$XX",
    cta: "Start Premium",
    href: "/signup?plan=premium",
    highlight: false,
    features: [
      "Everything in Pro",
      "1:1 mentor sessions",
      "Personal career strategist",
      "Referral network access",
      "Done-for-you applications",
    ],
  },
];

const PricingSection = () => {
  const [billing, setBilling] = useState<Billing>("monthly");

  return (
    <section id="pricing" className="py-24 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-xs uppercase tracking-widest text-primary font-medium mb-3">Pricing</p>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground tracking-tight mb-4">
            Simple plans, <span className="text-gradient italic">real outcomes.</span>
          </h2>
          <p className="text-base text-muted-foreground max-w-xl mx-auto">
            Start free. Upgrade when you're ready to take your job search to the next level.
          </p>

          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/10 rounded-full p-1 gap-1 mt-8">
            <button
              onClick={() => setBilling("monthly")}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                billing === "monthly" ? "bg-foreground text-background shadow-md" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBilling("annual")}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                billing === "annual" ? "bg-foreground text-background shadow-md" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Annual <span className="text-xs opacity-70 ml-1">−20%</span>
            </button>
          </div>
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
                  ? "bg-card border-primary/40 shadow-lg scale-[1.02]"
                  : "bg-card/50 border-border/40"
              }`}
            >
              {tier.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[10px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full">
                  Most popular
                </span>
              )}
              <h3 className="text-lg font-semibold text-foreground">{tier.name}</h3>
              <p className="text-sm text-muted-foreground mt-1 mb-6 min-h-[40px]">{tier.tagline}</p>
              <div className="flex items-end gap-1 mb-6">
                <span className="text-4xl font-bold text-foreground tracking-tight">
                  {billing === "monthly" ? tier.priceMonthly : tier.priceAnnual}
                </span>
                <span className="text-sm text-muted-foreground mb-1.5">
                  /{billing === "monthly" ? "mo" : "mo, billed yearly"}
                </span>
              </div>
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
      </div>
    </section>
  );
};

export default PricingSection;
