const testimonials = [
  {
    quote: "I used to track applications in a spreadsheet. ApplyLab feels like a personal career assistant. Landed my internship in three weeks.",
    initials: "SC",
    name: "Sarah Chen",
    role: "Student",
  },
  {
    quote: "Finally, real visibility into what our students are doing. The placement data lets us adjust curriculum in real-time.",
    initials: "MC",
    name: "Dr. Marcus Cole",
    role: "Director of Careers",
  },
  {
    quote: "The resume builder taught me how to write better impact bullets—it's not a template filler. My response rate tripled.",
    initials: "JW",
    name: "James Wilson",
    role: "Business Graduate",
  },
  {
    quote: "Smart Job Discovery surfaced roles I didn't know existed. Matched me with a company that fits my values perfectly.",
    initials: "ER",
    name: "Elena Rodriguez",
    role: "Marketing Graduate",
  },
  {
    quote: "The engagement dashboard changed how counsellors spend their time. We now proactively reach at-risk students.",
    initials: "AP",
    name: "Prof. Aisha Patel",
    role: "Head of Employability",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto mb-12">
        <p className="text-xs uppercase tracking-widest text-primary font-medium mb-3">Social proof</p>
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
          Loved by students. <span className="text-gradient italic">Trusted by universities.</span>
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
