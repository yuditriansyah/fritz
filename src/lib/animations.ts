import { Variants } from 'framer-motion';

export interface PageTransitionVariants {
  initial: object;
  in: object;
  out: object;
}

// Fade transition
export const fadeVariants: Variants = {
  initial: { 
    opacity: 0, 
    y: 30,
    filter: 'blur(8px)'
  },
  in: { 
    opacity: 1, 
    y: 0,
    filter: 'blur(0px)'
  },
  out: { 
    opacity: 0, 
    y: -30,
    filter: 'blur(8px)'
  },
};

// Slide transition
export const slideVariants: Variants = {
  initial: { 
    opacity: 0, 
    x: 100,
    scale: 0.95
  },
  in: { 
    opacity: 1, 
    x: 0,
    scale: 1
  },
  out: { 
    opacity: 0, 
    x: -100,
    scale: 0.95
  },
};

// Scale transition
export const scaleVariants: Variants = {
  initial: { 
    opacity: 0, 
    scale: 0.8,
    rotateY: -15
  },
  in: { 
    opacity: 1, 
    scale: 1,
    rotateY: 0
  },
  out: { 
    opacity: 0, 
    scale: 1.1,
    rotateY: 15
  },
};

// Flip transition
export const flipVariants: Variants = {
  initial: { 
    opacity: 0, 
    rotateX: 90,
    perspective: 1000
  },
  in: { 
    opacity: 1, 
    rotateX: 0,
    perspective: 1000
  },
  out: { 
    opacity: 0, 
    rotateX: -90,
    perspective: 1000
  },
};

// Transition configurations
export const transitionConfigs = {
  smooth: {
    duration: 0.8,
    ease: [0.25, 0.46, 0.45, 0.94] as const,
  },
  spring: {
    type: 'spring' as const,
    stiffness: 260,
    damping: 20,
    mass: 1,
  },
  bouncy: {
    type: 'spring' as const,
    stiffness: 400,
    damping: 10,
  },
  fast: {
    duration: 0.4,
    ease: 'easeOut' as const,
  }
};

// Container animation variants
export const containerVariants: Variants = {
  initial: {},
  in: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
  out: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

// Child animation variants
export const childVariants: Variants = {
  initial: { 
    opacity: 0, 
    y: 50,
    scale: 0.9
  },
  in: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
  out: { 
    opacity: 0, 
    y: -30,
    scale: 0.9,
    transition: {
      duration: 0.4,
    },
  },
};
