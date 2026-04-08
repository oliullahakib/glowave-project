import { testimonials } from '../../data/testimonials';
import SectionHeading from '../ui/SectionHeading';
import Card from '../ui/Card';
import { FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
  return (
    <section className="section-spacing bg-glowave-dark-bg">
      <div className="container mx-auto px-6">
        <SectionHeading 
          subtitle="Testimonials" 
          title="What Our Partners Say" 
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={testimonial.id} className="pt-12">
              <div className="absolute top-8 left-8 text-glowave-primary-blue/20 text-5xl">
                <FaQuoteLeft />
              </div>
              <p className="text-white/70 italic mb-8 relative z-10">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.author} 
                  className="w-12 h-12 rounded-full border border-glowave-primary-blue/50"
                />
                <div>
                  <h4 className="font-bold text-white text-sm">{testimonial.author}</h4>
                  <p className="text-white/40 text-xs">{testimonial.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
