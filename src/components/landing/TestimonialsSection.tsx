const testimonials = [
  {
    quote: "Finally, real visibility into what our students are doing. The placement data lets us adjust curriculum in real-time, not a year later.",
    initials: "MC",
    name: "Dr. Marcus Cole",
    role: "Director of Careers",
  },
  {
    quote: "The engagement dashboard changed how counsellors spend their time. We now proactively reach at-risk students before they disengage.",
    initials: "AP",
    name: "Prof. Aisha Patel",
    role: "Head of Employability",
  },
  {
    quote: "We went from manual end-of-year surveys to live placement tracking. The data quality is incomparable.",
    initials: "RH",
    name: "Rachel Hughes",
    role: "Associate Dean, Careers",
  },
  {
    quote: "The qualifications insights showed us gaps in our programme we didn't know existed. We restructured two modules based on the data.",
    initials: "TK",
    name: "Dr. Thomas Keller",
    role: "Programme Director",
  },
  {
    quote: "Onboarding was fast — under two weeks. Students adopted the platform without any training because the tools are genuinely useful.",
    initials: "LM",
    name: "Laura Martinez",
    role: "Career Services Manager",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto mb-12">
        <p className="text-xs uppercase tracking-widest text-primary font-medium mb-3">From our partners</p>
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
          Trusted by career teams <span className="text-gradient italic">across Europe.</span>
        </h2>
      </div>

      <div className="overflow-hidden">
        <div className="flex animate-marquee-slow">
          {[...testimonials, ...testimonials, ...testimonials].map((t, i) => (
            <div
              key={`${t.initials}-${i}`}
              className="flex-shrink-0 w-80 mx-3 bg-card rounded-xl p-6 shadow-precision"
            >
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-xs font-bold text-foreground">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
