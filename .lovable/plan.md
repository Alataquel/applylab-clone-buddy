

## Plan: Match applylab.software's Exact Design with B2B Focus

### Current vs. Original Structure

The original applylab.software follows this section order:
1. Hero (dark bg + dashboard mockup + floating cards)
2. Company Marquee (white bg, two rows)
3. Stats (3 count-up numbers)
4. Platform (3 bento cards: Smart Matching, Resume Lab, Command Centre)
5. Features (tabbed: "For Students" / "For Career Teams" with 01/02/03 cards)
6. Testimonials (horizontal marquee cards)
7. FAQ (accordion)
8. CTA (two-button layout: For Students / For Universities)
9. Footer

**Your current site is missing** PlatformSection, FeaturesSection, and TestimonialsSection from the page -- the components exist but aren't imported in `Index.tsx`. It also includes a ProblemSection (bento grid) that doesn't exist on the original.

### Changes

**1. Restructure `Index.tsx`** to match the original order:
- Add imports for PlatformSection, FeaturesSection, TestimonialsSection
- Remove ProblemSection from the page
- Order: Hero → CompanyMarquee → Stats → Platform → Features → Testimonials → FAQ → CTA → Footer

**2. Update `HeroSection.tsx` floating cards** to match the original's style:
- Replace "Placement rate +12%" card with an "Interview scheduled" card (Figma, Tomorrow 10:00 AM, Confirmed)
- Replace "716 active students" card with an "ATS Score / Resume ready" card
- Keep the B2B hero copy as-is

**3. Update `CTASection.tsx`** to match the original's two-column CTA:
- Heading: "Make your career _activity visible._"
- Two side-by-side cards: "For Students / Apply for early access" and "For Universities / Pilot programme"

**4. Update `StatsSection.tsx`** stats to match original:
- Change to: "0+ University partners", "0% ATS pass rate", "0k+ Students helped" (with count-up)
- These are the original's three stats

**5. Minor color/style alignment** across sections to ensure the white-bg sections (Stats, Marquee, Problem-replacement) and dark-bg sections match the original's contrast pattern.

All B2B messaging in existing components (PlatformSection, FeaturesSection, TestimonialsSection) is already written with the institutional/B2B angle, so no content rewrites needed there.

