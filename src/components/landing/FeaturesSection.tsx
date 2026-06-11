import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, FileText, MessagesSquare, Lightbulb, Mail, ListChecks } from "lucide-react";

type Feature = {
  num: string;
  icon: typeof Briefcase;
  title: string;
  desc: string;
  visual: "jobs" | "resume" | "interview" | "case" | "cover" | "tracker";
};

const features: Feature[] = [
  {
    num: "01",
    icon: Briefcase,
    title: "Smart Job Matching",
    desc: "An intelligent feed that surfaces roles where you're genuinely competitive — based on your CV, skills, and goals. No more endless scrolling.",
    visual: "jobs",
  },
  {
    num: "02",
    icon: FileText,
    title: "Resume Lab",
    desc: "AI-powered, line-by-line CV feedback that strengthens impact statements, fixes formatting, and closes keyword gaps for every role you target.",
    visual: "resume",
  },
  {
    num: "03",
    icon: MessagesSquare,
    title: "Interview Prep",
    desc: "Practice behavioral and technical interviews with realistic AI mock sessions. Get instant feedback on clarity, structure, and confidence.",
    visual: "interview",
  },
  {
    num: "04",
    icon: Lightbulb,
    title: "Case Study Prep",
    desc: "Master consulting and product cases with guided frameworks, worked examples, and on-demand practice cases across industries.",
    visual: "case",
  },
  {
    num: "05",
    icon: Mail,
    title: "Cover Letter AI",
    desc: "Generate tailored, recruiter-ready cover letters in seconds. Personalised to the role, the company, and your actual experience.",
    visual: "cover",
  },
  {
    num: "06",
    icon: ListChecks,
    title: "Application Tracker",
    desc: "A visual pipeline that auto-syncs every application — applied, interview, offer, accepted. One place for your entire search.",
    visual: "tracker",
  },
];

const FeaturesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14 max-w-3xl"
        >
          <p className="text-xs uppercase tracking-widest text-primary font-medium mb-3">Features</p>
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-[1.1]">
            Everything you need to land your next role.
          </h2>
          <p className="text-base text-gray-500 mt-4 leading-relaxed">
            One platform for finding jobs, sharpening your CV, prepping for any interview, and tracking every step.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {features.map((feature, i) => (
            <motion.div
              key={feature.num}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-[hsl(220,25%,10%)] rounded-2xl p-7 flex flex-col gap-5"
            >
              <div className="flex items-start justify-between">
                <div className="w-11 h-11 rounded-xl bg-sky-400/10 flex items-center justify-center">
                  <feature.icon className="w-5 h-5 text-sky-400" />
                </div>
                <span className="text-xs text-gray-500 font-mono mt-1">{feature.num}</span>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{feature.desc}</p>
              </div>

              <FeatureVisual variant={feature.visual} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureVisual = ({ variant }: { variant: Feature["visual"] }) => {
  if (variant === "jobs") {
    return (
      <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-3 space-y-2 mt-auto">
        {[
          { letter: "L", color: "bg-blue-500", role: "Product Designer", company: "Linear", score: "98%" },
          { letter: "V", color: "bg-white", role: "Frontend Engineer", company: "Vercel", score: "95%" },
          { letter: "S", color: "bg-green-500", role: "Marketing Intern", company: "Spotify", score: "92%" },
        ].map((item) => (
          <div key={item.role} className="flex items-center gap-3 bg-white/[0.04] rounded-lg p-2.5">
            <div className={`w-7 h-7 rounded-md ${item.color} flex items-center justify-center text-[11px] font-bold ${item.color === "bg-white" ? "text-gray-900" : "text-white"}`}>
              {item.letter}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium text-white truncate">{item.role}</p>
              <p className="text-[11px] text-gray-500 truncate">{item.company}</p>
            </div>
            <span className="text-[11px] text-emerald-400 font-medium">{item.score} Match</span>
          </div>
        ))}
      </div>
    );
  }

  if (variant === "resume") {
    return (
      <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-4 space-y-3 mt-auto">
        <div className="flex items-baseline gap-2">
          <span className="text-xs text-gray-500">Resume Score</span>
          <span className="text-2xl font-bold text-white">92/100</span>
        </div>
        <div className="flex gap-2">
          {["Impact", "Keywords", "Format"].map((l) => (
            <span key={l} className="text-[10px] px-2 py-1 rounded bg-white/[0.04] text-gray-400 border border-white/[0.06]">{l}</span>
          ))}
        </div>
        <p className="text-[11px] text-gray-400 bg-white/[0.04] rounded p-2 border border-white/[0.06]">
          Suggestion: Add metrics to your 2nd bullet point.
        </p>
      </div>
    );
  }

  if (variant === "interview") {
    return (
      <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-3 space-y-2 mt-auto">
        <div className="flex gap-2 items-start">
          <div className="w-6 h-6 rounded-full bg-sky-400/20 flex-shrink-0 mt-0.5" />
          <div className="bg-white/[0.04] rounded-lg p-2.5 text-[11px] text-gray-400 flex-1 border border-white/[0.06]">
            Tell me about a time you led under pressure.
          </div>
        </div>
        <div className="flex gap-2 items-start justify-end">
          <div className="bg-primary/15 text-white rounded-lg p-2.5 text-[11px] flex-1 border border-primary/30">
            At my last role, I led a 6-person launch with a 2-week deadline…
          </div>
          <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex-shrink-0 mt-0.5" />
        </div>
        <p className="text-[10px] text-emerald-400">+12 clarity · +8 structure</p>
      </div>
    );
  }

  if (variant === "case") {
    return (
      <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-3 space-y-2 mt-auto">
        <p className="text-[10px] uppercase tracking-wider text-gray-500">Case framework</p>
        <div className="grid grid-cols-4 gap-1.5">
          {["Clarify", "Structure", "Analyze", "Recommend"].map((s, idx) => (
            <div key={s} className={`rounded-md p-2 text-center text-[10px] font-medium border ${
              idx === 1 ? "bg-primary/15 text-white border-primary/40" : "bg-white/[0.04] text-gray-400 border-white/[0.06]"
            }`}>
              {s}
            </div>
          ))}
        </div>
        <p className="text-[11px] text-gray-400 bg-white/[0.04] rounded p-2 border border-white/[0.06]">
          Profitability case · Airline industry
        </p>
      </div>
    );
  }

  if (variant === "cover") {
    return (
      <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-3 space-y-2 mt-auto">
        <div className="flex items-center gap-2 text-[10px] text-gray-500">
          <span className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.06]">To</span>
          <span className="text-gray-400">Hiring Team · Linear</span>
        </div>
        <div className="bg-white/[0.04] rounded-lg p-3 border border-white/[0.06] text-[11px] text-gray-300 leading-relaxed">
          Dear Linear team,<br />
          Your work on issue tracking is exactly where I want to push my craft as a Product Designer…
        </div>
        <p className="text-[10px] text-emerald-400">Tailored to Product Designer · Linear</p>
      </div>
    );
  }

  // tracker
  return (
    <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-4 mt-auto">
      <div className="flex items-center gap-2 flex-wrap">
        {["Applied", "Interview", "Offer", "Accepted!"].map((stage, j, arr) => (
          <div key={stage} className="flex items-center gap-2">
            <div className={`px-3 py-1.5 rounded-lg text-[11px] font-medium border ${
              j === arr.length - 1
                ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/30"
                : "bg-white/[0.04] text-gray-400 border-white/[0.06]"
            }`}>
              {stage}
            </div>
            {j < arr.length - 1 && <div className="w-3 h-px bg-white/10" />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
