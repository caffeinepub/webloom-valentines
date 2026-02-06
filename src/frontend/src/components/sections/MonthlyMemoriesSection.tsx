import { useState } from 'react';
import { Reveal } from '../motion/Reveal';
import { GlassCard } from '../GlassCard';
import { SectionHeader } from '../SectionHeader';
import { Button } from '../ui/button';
import { ChevronLeft, ChevronRight, Calendar } from 'lucide-react';
import { cn } from '../../lib/utils';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';
import { monthlyMemories } from '../../content/premiumInteractiveSections';

export function MonthlyMemoriesSection() {
  const [selectedMonth, setSelectedMonth] = useState(0);
  const prefersReducedMotion = usePrefersReducedMotion();

  const currentMemory = monthlyMemories[selectedMonth];

  const handlePrevious = () => {
    setSelectedMonth((prev) => (prev === 0 ? monthlyMemories.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSelectedMonth((prev) => (prev === monthlyMemories.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <Reveal>
          <SectionHeader
            title="Monthly Memories"
            subtitle="A year of love, month by month"
          />
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-12">
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 mb-8">
              {monthlyMemories.map((memory, index) => (
                <button
                  key={memory.month}
                  onClick={() => setSelectedMonth(index)}
                  className={cn(
                    'touch-target p-3 rounded-xl text-sm font-medium transition-all duration-300',
                    'focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2',
                    selectedMonth === index
                      ? 'bg-gradient-to-br from-rose-500 to-pink-500 text-white shadow-lg scale-105'
                      : 'bg-white/40 dark:bg-neutral-900/40 border border-rose-200 dark:border-rose-800 hover:border-rose-300 dark:hover:border-rose-700 hover:scale-102',
                    prefersReducedMotion && 'transition-none'
                  )}
                  aria-pressed={selectedMonth === index}
                >
                  {memory.month.slice(0, 3)}
                </button>
              ))}
            </div>

            <GlassCard className="p-8 md:p-12">
              <div
                key={selectedMonth}
                className={cn(
                  'space-y-6',
                  !prefersReducedMotion && 'animate-in fade-in slide-in-from-bottom-4 duration-500'
                )}
              >
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Calendar className="w-8 h-8 text-rose-500" />
                  <h3 className="text-3xl md:text-4xl font-bold text-rose-600 dark:text-rose-400">
                    {currentMemory.month}
                  </h3>
                </div>

                <div className="text-center space-y-4">
                  <h4 className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent">
                    {currentMemory.title}
                  </h4>
                  <div className="p-6 rounded-xl bg-gradient-to-br from-rose-50/80 to-pink-50/80 dark:from-rose-950/30 dark:to-pink-950/30 border border-rose-200 dark:border-rose-800">
                    <p className="text-lg leading-relaxed text-foreground/90">
                      {currentMemory.text}
                    </p>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-6 border-t border-rose-200 dark:border-rose-800">
                  <Button
                    onClick={handlePrevious}
                    variant="ghost"
                    size="icon"
                    className="touch-target"
                    aria-label="Previous month"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </Button>
                  <span className="text-sm text-muted-foreground">
                    {selectedMonth + 1} of {monthlyMemories.length}
                  </span>
                  <Button
                    onClick={handleNext}
                    variant="ghost"
                    size="icon"
                    className="touch-target"
                    aria-label="Next month"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </GlassCard>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
