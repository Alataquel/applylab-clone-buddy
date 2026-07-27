import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Palette, BarChart3, Zap } from "lucide-react";

const bullets = [
  {
    icon: Palette,
    title: "Branded platform",
    desc: "White-labelled to your university — colours, logo, domain.",
  },
  {
    icon: BarChart3,
    title: "Engagement analytics",
    desc: "Real-time visibility into student career activity and outcomes.",
  },
  {
    icon: Zap,
    title: "Zero-lift deployment",
    desc: "Launch in a day. No IT integration required.",
  },
];

const UniversitiesTeaser = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="for-universities" className="py-24 px-6 lg:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-[hsl(230,45%,10%)] p-10 lg:p-14 relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-40 bg-[radial-gradient(60%_60%_at_100%_0%,hsl(210_100%_50%/0.25),transparent_60%)]" />

          <div className="relative grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-xs uppercase tracking-widest text-sky-400 font-medium mb-3">For Universities</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight leading-[1.1] mb-4">
                ApplyLab for Universities.
              </h2>
              <p className="text-base text-gray-400 leading-relaxed mb-8 max-w-md">
                White-label career infrastructure for your career services team — real-time student visibility, branded tools, zero-lift deployment.
              </p>
              <a
                href="/universities"
                className="inline-flex items-center gap-2 bg-white text-[hsl(230,45%,10%)] font-medium px-6 py-3 rounded-full text-sm hover:opacity-90 transition-opacity"
              >
                Book a demo <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="space-y-4">
              {bullets.map((b, i) => (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="flex items-start gap-4 bg-white/[0.04] border border-white/[0.06] rounded-xl p-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-sky-400/10 flex items-center justify-center flex-shrink-0">
                    <b.icon className="w-5 h-5 text-sky-400" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white mb-1">{b.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{b.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UniversitiesTeaser;
