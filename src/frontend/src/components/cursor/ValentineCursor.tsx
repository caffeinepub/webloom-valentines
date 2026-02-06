import { useEffect, useRef, useState } from 'react';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

export function ValentineCursor() {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    let mouseX = 0;
    let mouseY = 0;
    let dotX = 0;
    let dotY = 0;
    let ringX = 0;
    let ringY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.classList.contains('cursor-pointer') ||
        target.closest('button') ||
        target.closest('a')
      ) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    const animate = () => {
      // Smooth follow for dot (faster)
      dotX += (mouseX - dotX) * 0.25;
      dotY += (mouseY - dotY) * 0.25;

      // Smooth follow for ring (slower, trailing effect)
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;

      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate(${dotX}px, ${dotY}px)`;
      }

      if (cursorRingRef.current) {
        cursorRingRef.current.style.transform = `translate(${ringX}px, ${ringY}px)`;
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);

    const animationFrame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
      cancelAnimationFrame(animationFrame);
    };
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) return null;

  return (
    <>
      {/* Inner glowing dot */}
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 w-3 h-3 pointer-events-none z-[9999] transition-all duration-200"
        style={{
          transform: 'translate(-50%, -50%)',
          willChange: 'transform',
        }}
      >
        <div
          className={`w-full h-full rounded-full bg-rose-500 transition-all duration-300 ${
            isHovering ? 'scale-150' : 'scale-100'
          }`}
          style={{
            boxShadow: '0 0 20px rgba(244, 63, 94, 0.8)',
          }}
        />
      </div>

      {/* Outer trailing ring */}
      <div
        ref={cursorRingRef}
        className="fixed top-0 left-0 w-10 h-10 pointer-events-none z-[9998] transition-all duration-300"
        style={{
          transform: 'translate(-50%, -50%)',
          willChange: 'transform',
        }}
      >
        <div
          className={`w-full h-full rounded-full border-2 border-rose-400/50 transition-all duration-300 ${
            isHovering ? 'scale-150 border-pink-500/70' : 'scale-100'
          }`}
        />
      </div>
    </>
  );
}
