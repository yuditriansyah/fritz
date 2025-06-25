import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeVariants, slideVariants, scaleVariants, transitionConfigs } from '@/lib/animations';

interface PageTransitionProps {
  children: React.ReactNode;
  location: string;
  variant?: 'fade' | 'slide' | 'scale';
  transition?: 'smooth' | 'spring' | 'bouncy' | 'fast';
}

const PageTransition: React.FC<PageTransitionProps> = ({ 
  children, 
  location, 
  variant = 'fade',
  transition = 'smooth'
}) => {
  const getVariants = () => {
    switch (variant) {
      case 'slide':
        return slideVariants;
      case 'scale':
        return scaleVariants;
      default:
        return fadeVariants;
    }
  };

  const getTransition = () => {
    return transitionConfigs[transition];
  };

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location}
        initial="initial"
        animate="in"
        exit="out"
        variants={getVariants()}
        transition={getTransition()}
        className="w-full h-full"
        style={{
          position: 'relative',
          minHeight: '100vh'
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
