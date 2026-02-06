import { ReactNode, useEffect, useRef } from 'react';
import { cn } from '../../lib/utils';
import { useScrollProgress } from '../../hooks/useScrollProgress';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

interface ParallaxLayerProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

export function ParallaxLayer({ children, speed = 0.5, className }: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const scrollProgress = useScrollProgress();
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (!ref.current || prefersReducedMotion) return;

    const element = ref.current;
    const rect = element.getBoundingClientRect();
    const elementTop = rect.top + window.scrollY;
    const elementHeight = rect.height;
    const viewportHeight = window.innerHeight;

    const scrollRange = elementHeight + viewportHeight;
    const scrolled = Math.max(0, scrollProgress - elementTop + viewportHeight);
    const progress = Math.min(1, scrolled / scrollRange);

    const translateY = progress * 100 * speed;
    element.style.transform = `translate3d(0, ${translateY}px, 0)`;
  }, [scrollProgress, speed, prefersReducedMotion]);

  return (
    <div ref={ref} className={cn('will-change-transform', className)}>
      {children}
    </div>
  );
}
