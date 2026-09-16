import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin, MessagesSquare, ArrowRight } from "lucide-react";

const tools = [
  {
    icon: Mail,
    title: "Tailored cover letters",
    desc: "Generated from the exact role you matched with — not a template.",
  },
  {
    icon: Linkedin,
    title: "LinkedIn aligned to your track",
    desc: "Headline and keywords tuned to the roles you're now targeting.",
  },
  {
    icon: MessagesSquare,
    title: "Interview prep for your specific match",
    desc: "Practice the questions your matched roles actually ask.",
  },
];

const ToolsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 px-6 lg:px-12 bg-[hsl(222,40%,96%)]">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="text-[10px] uppercase tracking-widest text-primary/80 font-medium mb-2">Once you're matched</p>
          <h2 className="text-xl lg:text-2xl font-semibold text-gray-900 tracking-tight mb-3">
            We help you close the gap.
          </h2>
          <p className="text-sm text-gray-500 mb-8 max-w-xl mx-auto">
            Not another toolbox — each of these is generated from your specific matches.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {tools.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
              className="bg-white border border-gray-200 rounded-xl p-5 text-left"
            >
              <t.icon className="w-4 h-4 text-gray-400 mb-3" />
              <h3 className="text-sm font-semibold text-gray-900 mb-1.5">{t.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{t.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.a
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.35 }}
          href="/demo"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
        >
          See the full platform <ArrowRight className="w-3.5 h-3.5" />
        </motion.a>
      </div>
    </section>
  );
};

export default ToolsSection;
