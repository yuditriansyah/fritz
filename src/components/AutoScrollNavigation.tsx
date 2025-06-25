import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AutoScrollNavigation = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 w-10 h-10 sm:w-12 sm:h-12 rounded-full fritzy-button shadow-lg hover:shadow-xl transition-all duration-300 p-0"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5" />
        </Button>
      )}
    </>
  );
};

export default AutoScrollNavigation;
