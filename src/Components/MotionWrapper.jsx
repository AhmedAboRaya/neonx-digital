import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const MotionWrapper = ({
                         children,
                         animationType = "fade",
                         delay = 0,
                         duration = 0.8,
                         threshold = 0.2,
                       }) => {
  const [ref, inView] = useInView({ triggerOnce: false, threshold });

  const animations = {
    fade: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
    },
    slideUp: {
      initial: { opacity: 0, y: 50 },
      animate: { opacity: 1, y: 0 },
    },
    slideDown: {
      initial: { opacity: 0, y: -50 },
      animate: { opacity: 1, y: 0 },
    },
    slideLeft: {
      initial: { opacity: 0, x: 50 },
      animate: { opacity: 1, x: 0 },
    },
    slideRight: {
      initial: { opacity: 0, x: -50 },
      animate: { opacity: 1, x: 0 },
    },
    scale: {
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 1, scale: 1 },
    },
    rotate: {
      initial: { opacity: 0, scale: 0.8, rotate: 180, y: 50 },
      animate: { opacity: 1, scale: 1, rotate: 0, y: 0 },
    }
  };

  // Get the selected animation based on `animationType`
  const selectedAnimation = animations[animationType] || animations.fade;

  return (
      <motion.div
          ref={ref}
          initial={selectedAnimation.initial}
          animate={inView ? selectedAnimation.animate : selectedAnimation.initial}
          transition={{ duration, delay, ease: "easeOut" }}
      >
        {children}
      </motion.div>
  );
};

export default MotionWrapper;