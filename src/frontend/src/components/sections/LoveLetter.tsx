import { useEffect, useRef, useState } from 'react';
import { Reveal } from '../motion/Reveal';
import { GlassCard } from '../GlassCard';
import { SectionHeader } from '../SectionHeader';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

const letterText = `My Dearest Love,

Words cannot fully express the depth of my feelings for you, but I'll try. From the moment you entered my life, everything changed. You brought color to my world, music to my days, and warmth to my heart.

Every morning I wake up grateful for another day with you. Your smile is my sunshine, your laughter is my favorite song, and your love is my greatest treasure.

Thank you for being my partner in this beautiful journey called life. Thank you for your patience, your kindness, and your unwavering support. You make me want to be a better person every single day.

I promise to love you through every season, to hold your hand through every challenge, and to celebrate every joy with you. You are my today and all of my tomorrows.

Forever yours,
With all my love ❤️`;

export function LoveLetter() {
  const [displayedText, setDisplayedText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    if (prefersReducedMotion) {
      setDisplayedText(letterText);
      return;
    }

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= letterText.length) {
        setDisplayedText(letterText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 20);

    return () => clearInterval(interval);
  }, [isVisible, prefersReducedMotion]);

  return (
    <div ref={sectionRef}>
      <Reveal>
        <SectionHeader
          title="A Letter From My Heart"
          subtitle="Words written just for you"
        />
      </Reveal>

      <Reveal delay={0.3}>
        <GlassCard className="mt-12 p-8 md:p-12 bg-gradient-to-br from-cream-50/80 to-rose-50/80 dark:from-neutral-900/80 dark:to-rose-950/80">
          <div className="prose prose-lg max-w-none">
            <pre className="font-handwriting text-lg md:text-xl leading-relaxed whitespace-pre-wrap text-foreground/90">
              {displayedText}
              {!prefersReducedMotion && displayedText.length < letterText.length && (
                <span className="inline-block w-0.5 h-6 bg-rose-500 animate-pulse ml-1" />
              )}
            </pre>
          </div>
        </GlassCard>
      </Reveal>
    </div>
  );
}
