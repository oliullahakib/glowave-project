import { motion, useInView, useMotionValue, useSpring, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

const Counter = ({ value, direction = "up", suffix = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const count = useMotionValue(direction === "down" ? value : 0);
  const rounded = useTransform(count, (latest) => {
    return Math.round(latest).toLocaleString() + suffix;
  });

  useEffect(() => {
    if (isInView) {
      const animation = animate(count, value, {
        duration: 2,
        ease: "easeOut",
      });

      return animation.stop;
    }
  }, [isInView, count, value]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

export default Counter;
