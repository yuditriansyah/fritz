import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";

// Type for navigation button
export type NavButton = {
  label: string;
  to: string;
  ariaLabel: string;
};

// You can customize these navigation links as needed
const NAV_BUTTONS: NavButton[] = [
  { label: "Home", to: "/", ariaLabel: "Go to Home" },
  { label: "Gallery", to: "/gallery", ariaLabel: "Go to Gallery" },
  { label: "Schedule", to: "/schedule", ariaLabel: "Go to Schedule" },
  { label: "Timeline", to: "/timeline", ariaLabel: "Go to Timeline" },
];

const SCROLL_THRESHOLD = 0.9; // 90%

const easeInOutCubic = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

function smoothScrollToTop(duration = 600) {
  const start = window.scrollY;
  const startTime = performance.now();

  function scrollStep(currentTime: number) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = easeInOutCubic(progress);
    window.scrollTo(0, start * (1 - eased));
    if (progress < 1) {
      requestAnimationFrame(scrollStep);
    }
  }
  requestAnimationFrame(scrollStep);
}

const AutoScrollNavigation: React.FC = () => {
  const [atBottom, setAtBottom] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  // Detect if user is near the bottom of the page
  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    const viewportHeight = window.innerHeight;
    const fullHeight = document.documentElement.scrollHeight;
    const scrolledRatio = (scrollY + viewportHeight) / fullHeight;
    setAtBottom(scrolledRatio >= SCROLL_THRESHOLD);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Memoize navigation buttons for performance
  const navButtons = useMemo(
    () =>
      NAV_BUTTONS.map((btn) => (
        <a
          key={btn.to}
          href={btn.to}
          tabIndex={0}
          aria-label={btn.ariaLabel}
          className="px-4 py-2 rounded-lg bg-pink-100 text-pink-700 font-semibold shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400 transition hover:bg-pink-200"
          onClick={e => {
            if (atBottom) {
              e.preventDefault();
              smoothScrollToTop();
              setTimeout(() => {
                window.location.href = btn.to;
              }, 650);
            }
          }}
          onKeyDown={e => {
            if (atBottom && (e.key === "Enter" || e.key === " ")) {
              e.preventDefault();
              smoothScrollToTop();
              setTimeout(() => {
                window.location.href = btn.to;
              }, 650);
            }
          }}
        >
          {btn.label}
        </a>
      )),
    [atBottom]
  );

  return (
    <nav
      ref={navRef}
      aria-label="Main Navigation"
      className="fixed bottom-0 left-0 w-full flex justify-around bg-white/90 backdrop-blur-md py-2 z-50 shadow md:static md:justify-center md:bg-transparent md:shadow-none"
    >
      {navButtons}
    </nav>
  );
};

export default AutoScrollNavigation;
