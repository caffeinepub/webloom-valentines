import { useEffect, useState } from 'react';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

interface Ripple {
  id: number;
  x: number;
  y: number;
}

export function HeartRippleLayer() {
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const handleClick = (e: MouseEvent) => {
      const newRipple: Ripple = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
      };

      setRipples((prev) => [...prev, newRipple]);

      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
      }, 1000);
    };

    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9997]">
      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          className="absolute w-8 h-8 -translate-x-1/2 -translate-y-1/2 animate-heart-ripple"
          style={{
            left: ripple.x,
            top: ripple.y,
          }}
        >
          <div className="w-full h-full text-rose-500 text-2xl flex items-center justify-center">
            ❤️
          </div>
        </div>
      ))}
    </div>
  );
}
