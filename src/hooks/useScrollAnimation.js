import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const useScrollAnimation = (selector, animationProps = {}) => {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    
    if (elements.length === 0) return;

    elements.forEach((el) => {
      gsap.fromTo(el, 
        { 
          opacity: 0, 
          y: 50, 
          ...animationProps.from 
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
            ...animationProps.scrollTrigger
          },
          ...animationProps.to
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [selector, animationProps]);
};

export default useScrollAnimation;
