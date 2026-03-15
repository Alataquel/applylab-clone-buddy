import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Finally, real visibility into what our students are doing. The placement data lets us adjust curriculum in real-time, not a year later.",
    name: "Dr. Marcus Cole",
    role: "Director of Careers",
    initials: "MC",
    color: "bg-emerald-500",
  },
  {
    quote: "The resume builder taught me how to write better impact bullets—it's not a template filler. My response rate tripled.",
    name: "James Wilson",
    role: "Business Graduate",
    initials: "JW",
    color: "bg-blue-500",
  },
  {
    quote: "Smart Job Discovery surfaced roles I didn't know existed. Matched me with a B-Corp that fits my values perfectly.",
    name: "Elena Rodriguez",
    role: "Marketing Graduate",
    initials: "ER",
    color: "bg-teal-500",
  },
  {
    quote: "The engagement dashboard changed how counsellors spend their time. We now proactively reach at-risk students before they vanish.",
    name: "Prof. Aisha Patel",
    role: "Head of Employability",
    initials: "AP",
    color: "bg-purple-500",
  },
  {
    quote: "I used to track applications in a spreadsheet. ApplyLab feels like having a career assistant. Landed my role in three weeks.",
    name: "Sarah Chen",
    role: "Student",
    initials: "SC",
    color: "bg-indigo-500",
  },
  {
    quote: "We saw a 40% increase in student engagement with career services within the first semester of using the platform.",
    name: "Dr. Thomas Bauer",
    role: "VP Academic Affairs",
    initials: "TB",
    color: "bg-rose-500",
  },
];

const SocialProofSection = () => {
  return (
    <section className="py-20 px-6 lg:px-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-xs uppercase tracking-widest text-primary font-medium mb-3">Testimonials</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
            What people are saying.
          </h2>
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

        <div className="flex gap-6 animate-marquee-slow">
          {[...testimonials, ...testimonials].map((t, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[340px] bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <svg className="w-8 h-8 text-primary/20 mb-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
              </svg>
              <p className="text-sm text-gray-600 leading-relaxed mb-5">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div className={`w-9 h-9 rounded-full ${t.color} flex items-center justify-center text-[10px] font-bold text-white`}>
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
