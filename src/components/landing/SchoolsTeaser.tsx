import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, CalendarClock, GraduationCap, UserRoundCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const highlights = [
  {
    icon: GraduationCap,
    title: "Fit-based university matching",
    copy: "Ranked degree matches with clear reasons, admissions bands, costs, aid and outcomes.",
  },
  {
    icon: UserRoundCheck,
    title: "Counselor CRM",
    copy: "Rosters, notes, follow-up flags and recommendation-letter support in one lightweight view.",
  },
  {
    icon: CalendarClock,
    title: "Deadline control",
    copy: "Color-coded urgency, requirement checklists and one calendar for every application.",
  },
];

const SchoolsTeaser = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="for-schools" className="bg-light py-24 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs uppercase tracking-widest text-primary font-medium mb-3">For Schools</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-light-foreground tracking-tight leading-[1.12] mb-5">
            Fit-based guidance before students choose a degree.
          </h2>
          <p className="text-base text-light-muted leading-relaxed mb-8 max-w-xl">
            Build one profile at school, match students to universities and programs, then carry that profile into ApplyLab when they start applying for internships.
          </p>
          <Button asChild size="lg" className="rounded-full">
            <a href="/schools">
              Explore schools <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-4">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.12 + index * 0.08 }}
              className="rounded-2xl bg-blue-card border border-primary/20 p-5 min-h-[220px] flex flex-col"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.copy}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SchoolsTeaser;