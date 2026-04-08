import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import Card from '../ui/Card';
import { FiCheck } from 'react-icons/fi';

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "1,499",
      description: "Perfect for emerging brands looking to establish a digital footprint.",
      features: ["Basic Growth Strategy", "Social Media Management", "Monthly Reporting", "Email Support"],
      buttonVariant: "secondary"
    },
    {
      name: "Professional",
      price: "3,999",
      description: "Ideal for growing companies needing advanced marketing solutions.",
      features: ["Advanced Growth Strategy", "Full Web Experience", "AI Marketing Automation", "Priority Support", "Bi-weekly Consulting"],
      buttonVariant: "primary",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Comprehensive solutions for industry leaders scaling at a global level.",
      features: ["Custom Strategy House", "Full Brand Transformation", "Dedicated Account Manager", "24/7 Premium Support", "Global Infrastructure"],
      buttonVariant: "secondary"
    }
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <SectionHeading 
          subtitle="Pricing Plans" 
          title="Invest in Your Growth" 
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`flex flex-col relative ${plan.popular ? 'border-2 border-glow-blue shadow-2xl shadow-glow-blue/10' : ''}`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-10 -translate-y-1/2 bg-glowave-primary-blue text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-bold font-display">{plan.price === 'Custom' ? '' : '$'}</span>
                  <span className="text-5xl font-bold font-display">{plan.price}</span>
                  <span className="text-white/40 text-sm">{plan.price === 'Custom' ? '' : '/mo'}</span>
                </div>
                <p className="text-white/50 text-sm leading-relaxed">{plan.description}</p>
              </div>

              <div className="flex-grow mb-10">
                <ul className="flex flex-col gap-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-white/70">
                      <FiCheck className="text-glowave-primary-blue shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <Button variant={plan.buttonVariant} className="w-full">
                {plan.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
