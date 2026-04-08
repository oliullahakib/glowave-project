import Button from '../ui/Button';
import AnimatedWrapper from '../ui/AnimatedWrapper';

const CTA = () => {
  return (
    <section className="section-spacing relative overflow-hidden bg-glowave-dark-bg">
      <div className="container mx-auto px-6">
        <div className="glass-effect rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
          {/* Background Glows */}
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-glowave-primary-blue/20 rounded-full blur-[100px]" />
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-glowave-primary-blue/20 rounded-full blur-[100px]" />

          <AnimatedWrapper>
            <h2 className="text-display-medium tracking-tighter mb-10">
              Ready to Accelerate Your <br />
              <span className="text-gradient">Digital Growth?</span>
            </h2>
            <p className="text-white/60 text-xl max-w-2xl mx-auto mb-16 leading-relaxed font-medium tracking-tight">
              Join hundreds of high-growth companies that trust Glowave to scale their digital presence and maximize ROI.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <Button variant="primary" className="w-full sm:w-auto text-lg py-5 px-12">
                Book a Strategy Call
              </Button>
              <Button variant="secondary" className="w-full sm:w-auto text-lg py-5 px-12">
                Read Case Studies
              </Button>
            </div>
          </AnimatedWrapper>
        </div>
      </div>
    </section>
  );
};

export default CTA;
