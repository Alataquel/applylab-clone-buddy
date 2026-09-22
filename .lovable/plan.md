# ApplyLab Pitch + Schools Page

## Positioning recommendation

Lead with one focused promise:

**ApplyLab helps students discover where they truly fit — then gives them the tools to close the gap and get there.**

This keeps the platform from feeling like a menu of disconnected tools. The tools become part of one journey:

```text
Discover fit → Choose the right path → Close the gaps → Track every application
```

For students, the strongest landing-page hook is not “we have many tools.” It is:

**Stop guessing. Know where you fit, why you fit, and what to do next.**

The Forbes and SLU features should be used as trust proof near the top of the page, not as the main pitch.

## What I will build now

### 1. Add a new “For Schools” page

Create a new `/schools` page for high schools / secondary schools with the current ApplyLab navy/white visual system.

Page structure:

1. Hero
   - Headline: **ApplyLab for Schools**
   - Subheadline: fit-based guidance that follows each student into university
   - CTA: **Request a pilot** → `/request-pilot`

2. Three-pillar institutional section
   - **For students — guided discovery**
   - **For counselors — lightweight CRM**
   - **For IT & admin — enterprise-ready**

3. University Board / tracking highlights
   - 585+ undergraduate programs across 10 countries
   - Reach / Target / Likely admissions bands
   - costs, aid, visa/work-rights, outcomes, comparisons
   - deadline calendar and color-coded urgency

4. Continuity message
   - **Your profile doesn’t reset — it grows with you.**

### 2. Add a homepage “For Schools” teaser

Add a compact section on the main landing page near the existing universities teaser, so students still see the B2C story first while schools have a clear path.

### 3. Update navigation and footer

Add **For Schools** to the desktop/mobile navigation and footer, linking to `/schools`.

### 4. Add press credibility links

Add the Forbes Italy and SLU Madrid features to the proof/credibility area, using them as external trust signals without making the landing page feel like a press page.

## Technical notes

- Reuse existing React, Tailwind, Lucide, and framer-motion patterns.
- Keep colors within the existing navy/white/blue design system with varied section backgrounds.
- No backend work for this pass.
- No new dependencies.
