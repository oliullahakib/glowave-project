import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollReveal = ({ children, direction = 'up', distance = 60, duration = 1, delay = 0, stagger = 0 }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    
    const x = direction === 'left' ? -distance : direction === 'right' ? distance : 0;
    const y = direction === 'up' ? distance : direction === 'down' ? -distance : 0;

    const anim = gsap.fromTo(
      el.children,
      {
        opacity: 0,
        x: x,
        y: y,
      },
      {
        opacity: 1,
        x: 0,
        y: 0,
        duration: duration,
        delay: delay,
        stagger: stagger,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    );

    return () => {
      if (anim.scrollTrigger) anim.scrollTrigger.kill();
      anim.kill();
    };
  }, [direction, distance, duration, delay, stagger]);

  return (
    <div ref={sectionRef} className="will-change-transform">
      {children}
    </div>
  );
};

export default ScrollReveal;
