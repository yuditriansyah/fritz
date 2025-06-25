import { AnimatePresence, motion } from 'framer-motion';
import { useLocation, Routes, Route } from 'react-router-dom';
import { fadeVariants, slideVariants, scaleVariants, transitionConfigs } from '@/lib/animations';
import Index from './pages/Index';
import Gallery from './pages/Gallery';
import Schedule from './pages/Schedule';
import Timeline from './pages/Timeline';
import NotFound from './pages/NotFound';

const AnimatedRoutes = () => {
  const location = useLocation();
  
  // You can easily switch between different transition styles here
  const currentVariants = fadeVariants; // Change to slideVariants, scaleVariants, etc.
  const currentTransition = transitionConfigs.smooth; // Change to spring, bouncy, fast
  
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.pathname}
        initial="initial"
        animate="in"
        exit="out"
        variants={currentVariants}
        transition={currentTransition}
        style={{ 
          minHeight: '100vh',
          width: '100%',
          position: 'relative'
        }}
      >
        <Routes location={location}>
          <Route path="/" element={<Index />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
