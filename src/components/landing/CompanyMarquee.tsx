const companies = [
  "Goldman Sachs", "McKinsey", "Deloitte", "KPMG", "EY", "PwC",
  "Accenture", "JP Morgan", "Barclays", "HSBC", "Amazon", "Google",
  "Meta", "Microsoft", "Apple", "BCG", "Nike", "Unilever", "Diageo", "Clifford Chance",
];

const CompanyMarquee = () => {
  return (
    <section className="py-12 border-t border-b border-border/30 overflow-hidden">
      <p className="text-center text-xs uppercase tracking-widest text-muted-foreground mb-8 px-6">
        Explore opportunities at leading organisations
      </p>
      <div className="relative">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...companies, ...companies].map((c, i) => (
            <span
              key={`${c}-${i}`}
              className="mx-6 text-sm text-muted-foreground/60 font-medium"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyMarquee;
