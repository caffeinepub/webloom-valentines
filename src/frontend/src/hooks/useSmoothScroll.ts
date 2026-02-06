import { useEffect, useRef } from 'react';
import { usePrefersReducedMotion } from './usePrefersReducedMotion';

export function useSmoothScroll() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const scrollingRef = useRef(false);

  useEffect(() => {
    if (prefersReducedMotion) return;

    let currentScroll = window.scrollY;
    let targetScroll = window.scrollY;
    let animationFrameId: number;

    const smoothScroll = () => {
      const diff = targetScroll - currentScroll;
      const delta = diff * 0.1;

      if (Math.abs(diff) > 0.5) {
        currentScroll += delta;
        window.scrollTo(0, currentScroll);
        animationFrameId = requestAnimationFrame(smoothScroll);
      } else {
        currentScroll = targetScroll;
        window.scrollTo(0, currentScroll);
        scrollingRef.current = false;
      }
    };

    const handleWheel = (e: WheelEvent) => {
      if (scrollingRef.current) return;
      
      targetScroll = Math.max(
        0,
        Math.min(
          document.documentElement.scrollHeight - window.innerHeight,
          targetScroll + e.deltaY
        )
      );
    };

    window.addEventListener('wheel', handleWheel, { passive: true });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [prefersReducedMotion]);

  const scrollToPosition = (position: number) => {
    if (prefersReducedMotion) {
      window.scrollTo({ top: position, behavior: 'smooth' });
      return;
    }

    scrollingRef.current = true;
    const start = window.scrollY;
    const distance = position - start;
    const duration = 1000;
    let startTime: number | null = null;

    const easeInOutCubic = (t: number): number => {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    };

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeInOutCubic(progress);

      window.scrollTo(0, start + distance * eased);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        scrollingRef.current = false;
      }
    };

    requestAnimationFrame(animate);
  };

  return { scrollToPosition };
}
