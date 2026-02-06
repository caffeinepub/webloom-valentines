import { useState } from 'react';
import { Reveal } from '../motion/Reveal';
import { GlassCard } from '../GlassCard';
import { SectionHeader } from '../SectionHeader';
import { Button } from '../ui/button';
import { MapPin, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { cn } from '../../lib/utils';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';
import { travelMemories } from '../../content/premiumInteractiveSections';

export function TravelMemoriesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  const currentMemory = travelMemories[currentIndex];

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? travelMemories.length - 1 : prev - 1));
    setIsExpanded(false);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === travelMemories.length - 1 ? 0 : prev + 1));
    setIsExpanded(false);
  };

  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className="relative py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <Reveal>
          <SectionHeader
            title="Travel Memories"
            subtitle="Adventures around the world together"
          />
        </Reveal>

        <Reveal delay={0.2}>
          <GlassCard className="mt-12 p-8 md:p-12">
            <div className="flex justify-center gap-2 mb-8">
              {travelMemories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    setIsExpanded(false);
                  }}
                  className={cn(
                    'w-3 h-3 rounded-full transition-all duration-300',
                    'focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2',
                    index === currentIndex
                      ? 'bg-rose-500 scale-125'
                      : 'bg-rose-200 dark:bg-rose-800 hover:bg-rose-300 dark:hover:bg-rose-700'
                  )}
                  aria-label={`Go to memory ${index + 1}`}
                />
              ))}
            </div>

            <div
              key={currentMemory.id}
              className={cn(
                'space-y-6',
                !prefersReducedMotion && 'animate-in fade-in slide-in-from-right-4 duration-500'
              )}
            >
              <div className="text-center space-y-2">
                <div className="flex items-center justify-center gap-2">
                  <MapPin className="w-6 h-6 text-rose-500" />
                  <h3 className="text-2xl md:text-3xl font-bold text-rose-600 dark:text-rose-400">
                    {currentMemory.destination}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground italic">{currentMemory.date}</p>
              </div>

              <div className="aspect-video bg-gradient-to-br from-rose-100 to-pink-100 dark:from-rose-950/40 dark:to-pink-950/40 rounded-xl overflow-hidden flex items-center justify-center border border-rose-200 dark:border-rose-800">
                <div className="text-6xl">🌍</div>
              </div>

              <div
                className={cn(
                  'overflow-hidden transition-all duration-500',
                  isExpanded ? 'max-h-96' : 'max-h-0'
                )}
              >
                <div className="pt-4 space-y-4">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-rose-50/80 to-pink-50/80 dark:from-rose-950/30 dark:to-pink-950/30 border border-rose-200 dark:border-rose-800">
                    <p className="text-base leading-relaxed text-foreground/90">
                      {currentMemory.narrative}
                    </p>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-br from-pink-50/80 to-rose-50/80 dark:from-pink-950/30 dark:to-rose-950/30 border border-pink-200 dark:border-pink-800">
                    <Sparkles className="w-5 h-5 text-pink-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-pink-600 dark:text-pink-400 mb-1">
                        Highlight
                      </p>
                      <p className="text-sm text-foreground/90">{currentMemory.highlight}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <Button
                  onClick={handleToggleExpand}
                  variant="outline"
                  className="touch-target"
                >
                  {isExpanded ? 'Show Less' : 'Read More'}
                </Button>
              </div>
            </div>

            <div className="flex justify-between items-center mt-8 pt-6 border-t border-rose-200 dark:border-rose-800">
              <Button
                onClick={handlePrevious}
                variant="ghost"
                size="icon"
                className="touch-target"
                aria-label="Previous memory"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <span className="text-sm text-muted-foreground">
                {currentIndex + 1} of {travelMemories.length}
              </span>
              <Button
                onClick={handleNext}
                variant="ghost"
                size="icon"
                className="touch-target"
                aria-label="Next memory"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </GlassCard>
        </Reveal>
      </div>
    </section>
  );
}
