import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Heart } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/schedule', label: 'Schedule' },
    { path: '/timeline', label: 'Timeline' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-fritzy-pink/30"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/" className="flex items-center space-x-2 text-lg sm:text-xl font-poppins font-bold text-gray-800">
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  repeatDelay: 3 
                }}
              >
                <Heart className="h-5 w-5 sm:h-6 sm:w-6 text-fritzy-pink-dark fill-current" />
              </motion.div>
              <span className="hidden xs:inline">Fritzy Rosmerian</span>
              <span className="xs:hidden">Fritzy</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={item.path}
                  className={`relative font-nunito font-medium transition-colors duration-300 hover:text-fritzy-pink-dark ${
                    isActive(item.path)
                      ? 'text-fritzy-pink-dark'
                      : 'text-gray-700'
                  }`}
                >
                  {item.label}
                  {isActive(item.path) && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-fritzy-pink-dark"
                      layoutId="underline"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile menu button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-fritzy-pink/10 transition-colors"
            aria-label="Toggle mobile menu"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={isOpen ? "open" : "closed"}
          variants={{
            open: { 
              opacity: 1, 
              height: "auto",
              transition: { duration: 0.3, ease: "easeOut" }
            },
            closed: { 
              opacity: 0, 
              height: 0,
              transition: { duration: 0.3, ease: "easeIn" }
            }
          }}
          style={{ overflow: "hidden" }}
          className="md:hidden border-t border-fritzy-pink/30 bg-white/95 backdrop-blur-sm"
        >
          <motion.div 
            className="py-4"
            variants={{
              open: {
                transition: { staggerChildren: 0.07, delayChildren: 0.1 }
              },
              closed: {
                transition: { staggerChildren: 0.05, staggerDirection: -1 }
              }
            }}
          >
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <motion.div
                  key={item.path}
                  variants={{
                    open: {
                      y: 0,
                      opacity: 1,
                      transition: {
                        y: { stiffness: 1000, velocity: -100 }
                      }
                    },
                    closed: {
                      y: 50,
                      opacity: 0,
                      transition: {
                        y: { stiffness: 1000 }
                      }
                    }
                  }}
                  whileHover={{ scale: 1.05, x: 10 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`font-nunito font-medium px-3 py-2 rounded-lg transition-colors block ${
                      isActive(item.path)
                        ? 'text-fritzy-pink-dark bg-fritzy-pink/10'
                        : 'text-gray-700 hover:text-fritzy-pink-dark hover:bg-fritzy-pink/5'
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
