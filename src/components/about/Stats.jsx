import AnimatedWrapper from '../ui/AnimatedWrapper';

const Stats = () => {
  const stats = [
    { label: "Founded", value: "2020" },
    { label: "Global Clients", value: "250+" },
    { label: "Digital Growth", value: "140%" },
    { label: "Team Members", value: "45" }
  ];

  return (
    <section className="py-20 border-y border-white/5 bg-dark-900/50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-16">
          {stats.map((stat, index) => (
            <AnimatedWrapper key={index} delay={index * 0.1} className="text-center">
              <p className="text-4xl md:text-6xl font-bold font-display text-white mb-2">{stat.value}</p>
              <p className="text-white/40 text-xs md:text-sm font-semibold uppercase tracking-widest">{stat.label}</p>
            </AnimatedWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
