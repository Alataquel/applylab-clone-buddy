const companies = [
  { name: "McKinsey", color: "#00a0dc" },
  { name: "Deloitte", color: "#86bc25" },
  { name: "KPMG", color: "#00338d" },
  { name: "EY", color: "#ffe600" },
  { name: "PwC", color: "#d93900" },
  { name: "Accenture", color: "#a100ff" },
  { name: "JP Morgan", color: "#003b70" },
  { name: "Barclays", color: "#00aeef" },
  { name: "HSBC", color: "#db0011" },
  { name: "Amazon", color: "#ff9900" },
  { name: "Google", color: "#4285f4" },
  { name: "Meta", color: "#0668e1" },
  { name: "Microsoft", color: "#00a4ef" },
  { name: "Apple", color: "#555555" },
  { name: "BCG", color: "#00a651" },
  { name: "Nike", color: "#111111" },
  { name: "Unilever", color: "#1f36c7" },
  { name: "Diageo", color: "#002d6b" },
  { name: "Clifford Chance", color: "#c8102e" },
  { name: "Goldman Sachs", color: "#7399c6" },
];

const universities = [
  { name: "German UDS", color: "#0033a0" },
  { name: "XU Exponential University", color: "#e4002b" },
  { name: "IE University", color: "#003da5" },
  { name: "Saint Louis University", color: "#003da5" },
];

const CompanyMarquee = () => {
  const doubledCompanies = [...companies, ...companies];
  const doubledUnis = [...universities, ...universities, ...universities, ...universities];

  return (
    <section className="py-12 bg-white overflow-hidden">
      <p className="text-center text-xs uppercase tracking-[0.2em] text-gray-400 font-medium mb-8 px-6">
        Explore opportunities at leading organisations
      </p>

      {/* Companies row */}
      <div className="relative mb-4">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />
        <div className="flex animate-marquee whitespace-nowrap">
          {doubledCompanies.map((c, i) => (
            <span
              key={`company-${i}`}
              className="mx-5 inline-flex items-center gap-2 text-sm text-gray-600 font-medium"
            >
              <span
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ backgroundColor: c.color }}
              />
              {c.name}
            </span>
          ))}
        </div>
      </div>

      {/* Universities row */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />
        <div className="flex animate-marquee-slow whitespace-nowrap">
          {doubledUnis.map((u, i) => (
            <span
              key={`uni-${i}`}
              className="mx-5 inline-flex items-center gap-2 text-sm text-gray-600 font-medium"
            >
              <span
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ backgroundColor: u.color }}
              />
              {u.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyMarquee;
