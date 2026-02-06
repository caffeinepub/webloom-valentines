import { useState } from 'react';
import { Reveal } from '../motion/Reveal';
import { GlassCard } from '../GlassCard';
import { SectionHeader } from '../SectionHeader';
import { Button } from '../ui/button';
import { ChevronLeft, ChevronRight, BookOpen } from 'lucide-react';
import { cn } from '../../lib/utils';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';
import { flipbookPages } from '../../content/premiumInteractiveSections';

export function FlipbookLoveStorySection() {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState<'forward' | 'backward'>('forward');
  const prefersReducedMotion = usePrefersReducedMotion();

  const page = flipbookPages[currentPage];
  const isFirstPage = currentPage === 0;
  const isLastPage = currentPage === flipbookPages.length - 1;

  const handlePrevious = () => {
    if (!isFirstPage) {
      setDirection('backward');
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (!isLastPage) {
      setDirection('forward');
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <section className="relative py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <Reveal>
          <SectionHeader
            title="Our Love Story"
            subtitle="A flipbook of our journey"
          />
        </Reveal>

        <Reveal delay={0.2}>
          <GlassCard className="mt-12 p-8 md:p-12 relative overflow-hidden">
            <div className="flex justify-center mb-8">
              <BookOpen className="w-12 h-12 text-rose-500" />
            </div>

            <div
              key={page.id}
              className={cn(
                'min-h-[300px] flex flex-col justify-center space-y-6',
                !prefersReducedMotion && direction === 'forward' && 'animate-in fade-in slide-in-from-right-8 duration-700',
                !prefersReducedMotion && direction === 'backward' && 'animate-in fade-in slide-in-from-left-8 duration-700'
              )}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-center bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent">
                {page.scene}
              </h3>

              <div className="p-6 rounded-xl bg-gradient-to-br from-rose-50/80 to-pink-50/80 dark:from-rose-950/30 dark:to-pink-950/30 border border-rose-200 dark:border-rose-800">
                <p className="text-lg leading-relaxed text-center text-foreground/90 font-serif">
                  {page.text}
                </p>
              </div>
            </div>

            <div className="flex justify-between items-center mt-8 pt-6 border-t border-rose-200 dark:border-rose-800">
              <Button
                onClick={handlePrevious}
                disabled={isFirstPage}
                variant="ghost"
                size="icon"
                className="touch-target"
                aria-label="Previous page"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>

              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">
                  Page {currentPage + 1} of {flipbookPages.length}
                </span>
              </div>

              <Button
                onClick={handleNext}
                disabled={isLastPage}
                variant="ghost"
                size="icon"
                className="touch-target"
                aria-label="Next page"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>

            <div className="flex justify-center gap-1 mt-4">
              {flipbookPages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentPage ? 'forward' : 'backward');
                    setCurrentPage(index);
                  }}
                  className={cn(
                    'w-2 h-2 rounded-full transition-all duration-300',
                    'focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2',
                    index === currentPage
                      ? 'bg-rose-500 w-8'
                      : 'bg-rose-200 dark:bg-rose-800 hover:bg-rose-300 dark:hover:bg-rose-700'
                  )}
                  aria-label={`Go to page ${index + 1}`}
                />
              ))}
            </div>
          </GlassCard>
        </Reveal>
      </div>
    </section>
  );
}
