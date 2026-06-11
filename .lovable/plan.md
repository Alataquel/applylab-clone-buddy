# ApplyLab Restructure: B2C-first

Reprioritize the site so the individual subscription product leads. Keep the existing design system (navy/blue, current components, typography) and reuse existing sections — only reframe copy and rearrange.

## 1. Homepage (`/`) — B2C-first

Reorder + reframe `src/pages/Index.tsx`:

```
Navbar
HeroSection          (B2C copy, primary CTA "Start free", secondary "See pricing")
CompanyMarquee
StatsSection         (reframed to individual outcomes)
ProblemSection       (job-seeker pain points)
SolutionSection      (individual product framing)
FeaturesSection      (existing, reframed for individuals)
HowItWorksSection    (existing/how-it-works content, individual flow)
PricingSection       (NEW — Free / Pro / Premium, monthly↔annual toggle)
SocialProofSection
FAQSection
CTASection           ("Start free")
Footer
```

- Hero headline shifts from "Career outcomes infrastructure" (B2B) to a B2C line, e.g. "Land your next role, faster." Primary CTA `Start free` → `/signup` (placeholder link), secondary `See pricing` scrolls to pricing.
- Keep the existing dashboard mockup + toggle. Default to the **Student** demo (B2C); University demo stays accessible via toggle.
- Remove the `InfrastructureSection` from the homepage (it's the B2B pitch) — relocate to `/universities`.

## 2. New `PricingSection` component

`src/components/landing/PricingSection.tsx`:
- Monthly ↔ Annual toggle (local state).
- Three tier cards: **Free**, **Pro**, **Premium**. Placeholder prices (`$0`, `$XX`, `$XX`) — user will edit later.
- Each card: name, price, short tagline, feature bullets (placeholder), CTA button (`Start free` / `Start Pro` / `Start Premium`).
- Highlight Pro as "Most popular".
- Reuses existing card/button styles and navy palette.

## 3. `/universities` — B2B home

Update `src/pages/ForUniversities.tsx`:
- Move the current B2B hero copy, `InfrastructureSection`, white-label / student-journey-tracking / behavioral-insights pitch here as the focal content.
- Primary CTA throughout: **Book a demo** → `/request-pilot`.
- Keep the University dashboard demo on this page.

## 4. `/ambassador` — refresh

Rework `src/pages/Ambassador.tsx` (keep route, content from existing memory) with these sections, navy/blue brand, ambassador-card look:

1. **Hero** — "Become an ApplyLab Ambassador" + `Apply now` CTA (scrolls to form).
2. **Benefits grid** (4 cards): earn per sign-up via personal referral code · personal dashboard · CV / experience booster · perks & community.
3. **Timeline** (3 steps): Onboarding now → Receive referral code + dashboard mid-Aug to early Sept → Start bringing users and grow. Horizontal on desktop, vertical on mobile.
4. **Application form**: name, email, university, socials, why you want to join. Submits to a placeholder handler (toast confirmation) — no backend wiring in this pass.
5. Existing program stats (100% CV, 3x internships, 12+ events) retained as a sub-section.

## 5. Navigation

Update `src/components/landing/Navbar.tsx` desktop + mobile menus to:

`How it works · Features · Pricing · For Universities · Ambassadors · Log in · Start free`

- `How it works`, `Features`, `Pricing` are homepage anchor links (`/#how-it-works`, `/#features`, `/#pricing`).
- `For Universities` → `/universities`, `Ambassadors` → `/ambassador`.
- Primary button text changes from `Request pilot` to `Start free`.
- Add matching IDs to the homepage sections.

## 6. Footer

Update `src/components/landing/Footer.tsx` link groups so `For Universities` and `Ambassadors` are reachable; update primary CTA copy to `Start free`.

## Out of scope (this pass)

- Real auth / signup flow (CTAs link to placeholder `/signup` route or `#pricing`).
- Real pricing numbers + feature lists — placeholders only; you'll send the real pricing next.
- Backend for ambassador form submissions.

## Technical notes

- No new dependencies; uses existing shadcn `Card`, `Button`, `Tabs`/`Switch` for the monthly/annual toggle, and `framer-motion` already in use.
- All colors via existing semantic tokens in `src/index.css` — no hardcoded hex.
- Anchor scrolling: add `id="pricing"`, `id="features"`, `id="how-it-works"` on the corresponding homepage sections so navbar links work.
- Keep existing demo dimensions (`h-[720px]`, `max-w-6xl`) untouched.
