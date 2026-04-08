import SectionHeading from '../ui/SectionHeading';
import { FiAward, FiGlobe, FiTarget, FiTrendingUp } from 'react-icons/fi';

const Achievements = () => {
  const items = [
    { icon: FiAward, title: "Industry Leader", desc: "Recognized as a Top 10 Growth Agency by Digital Insider 2023." },
    { icon: FiTrendingUp, title: "150% Avg Growth", desc: "Our partners see an average digital ROI increase of 150% in Year 1." },
    { icon: FiGlobe, title: "Global Reach", desc: "Successfully scaled brands across 15+ countries and 4 continents." },
    { icon: FiTarget, title: "Precision Scaling", desc: "Over $500M in digital revenue managed for our enterprise clients." }
  ];

  return (
    <section className="py-24 bg-dark-900">
      <div className="container mx-auto px-6">
        <SectionHeading 
          subtitle="Our Impact" 
          title="Proven Results that Speak for Themselves" 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center p-8 glass-effect rounded-3xl border border-white/10 hover:border-glowave-primary-blue/50 transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-glowave-primary-blue/10 flex items-center justify-center text-glowave-primary-blue text-3xl mb-6 shadow-[0_0_20px_rgba(0,98,224,0.1)]">
                <item.icon />
              </div>
              <h4 className="text-xl font-bold mb-3">{item.title}</h4>
              <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
