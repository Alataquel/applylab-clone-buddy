import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Monitor, GraduationCap, Building2 } from "lucide-react";
import DashboardMockup from "./DashboardMockup";
import StudentDashboardMockup from "./StudentDashboardMockup";

const DemoToggleSection = () => {
  const [activeDemo, setActiveDemo] = useState<"university" | "student">("university");

  return (
    <section className="py-20 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-xs font-semibold mb-4">
            <Monitor className="w-3.5 h-3.5" />
            Interactive Demo
          </div>
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 tracking-tight mb-3">
            See the platform in action.
          </h2>
          <p className="text-sm text-gray-500 max-w-xl mx-auto leading-relaxed mb-8">
            Explore fully interactive previews of both portals — click through tabs, drill into profiles, and see how data flows in real time.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center bg-gray-100 rounded-full p-1 gap-1">
            <button
              onClick={() => setActiveDemo("university")}
              className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeDemo === "university"
                  ? "bg-gray-900 text-white shadow-md"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              <Building2 className="w-4 h-4" />
              University Portal
            </button>
            <button
              onClick={() => setActiveDemo("student")}
              className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeDemo === "student"
                  ? "bg-gray-900 text-white shadow-md"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              Student Portal
            </button>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeDemo}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {activeDemo === "university" ? <DashboardMockup /> : <StudentDashboardMockup />}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default DemoToggleSection;
