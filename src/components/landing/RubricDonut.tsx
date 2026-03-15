import { motion } from "framer-motion";

const rubricData = [
  { criterion: "Quantified impact", weight: 30, color: "hsl(210, 100%, 50%)" },
  { criterion: "Skills & keywords", weight: 25, color: "hsl(160, 70%, 45%)" },
  { criterion: "Formatting", weight: 20, color: "hsl(45, 90%, 55%)" },
  { criterion: "Sector tailoring", weight: 15, color: "hsl(280, 60%, 55%)" },
  { criterion: "Extracurriculars", weight: 10, color: "hsl(350, 70%, 55%)" },
];

interface RubricDonutProps {
  variant?: "dark" | "themed";
}

const RubricDonut = ({ variant = "dark" }: RubricDonutProps) => {
  const size = 160;
  const strokeWidth = 28;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  let accumulated = 0;
  const segments = rubricData.map((d) => {
    const offset = accumulated;
    accumulated += d.weight;
    return { ...d, offset };
  });

  const textColor = variant === "dark" ? "text-white" : "text-foreground";
  const mutedColor = variant === "dark" ? "text-gray-400" : "text-muted-foreground";
  const labelBg = variant === "dark" ? "bg-white/5" : "bg-muted/50";

  return (
    <div className="flex flex-col lg:flex-row items-center gap-8">
      {/* Donut */}
      <div className="relative flex-shrink-0">
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="-rotate-90">
          {segments.map((seg, i) => {
            const segLength = (seg.weight / 100) * circumference;
            const segOffset = circumference - (seg.offset / 100) * circumference;
            return (
              <motion.circle
                key={seg.criterion}
                cx={size / 2}
                cy={size / 2}
                r={radius}
                fill="none"
                stroke={seg.color}
                strokeWidth={strokeWidth}
                strokeDasharray={`${segLength} ${circumference - segLength}`}
                strokeDashoffset={segOffset}
                strokeLinecap="round"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              />
            );
          })}
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <p className={`text-lg font-bold ${textColor}`}>100%</p>
          <p className={`text-[9px] ${mutedColor}`}>Total weight</p>
        </div>
      </div>

      {/* Legend */}
      <div className="space-y-2 flex-1 w-full">
        {segments.map((seg, i) => (
          <motion.div
            key={seg.criterion}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.3 + i * 0.08 }}
            className={`flex items-center gap-3 ${labelBg} rounded-md px-3 py-2`}
          >
            <div
              className="w-3 h-3 rounded-sm flex-shrink-0"
              style={{ backgroundColor: seg.color }}
            />
            <span className={`text-xs ${textColor} flex-1`}>{seg.criterion}</span>
            <span className={`text-xs font-semibold ${textColor}`}>{seg.weight}%</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default RubricDonut;
