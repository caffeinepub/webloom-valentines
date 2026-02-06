import { useState, useEffect } from 'react';
import { Reveal } from '../motion/Reveal';
import { GlassCard } from '../GlassCard';
import { SectionHeader } from '../SectionHeader';
import { Button } from '../ui/button';
import { X, Heart } from 'lucide-react';
import { cn } from '../../lib/utils';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';
import { polaroidWallItems } from '../../content/premiumInteractiveSections';

export function PolaroidLoveWallSection() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  const selectedItem = polaroidWallItems.find((item) => item.id === selectedId);

  useEffect(() => {
    if (selectedId !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedId]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedId !== null) {
        setSelectedId(null);
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [selectedId]);

  const handleClose = () => {
    setSelectedId(null);
  };

  return (
    <section className="relative py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <Reveal>
          <SectionHeader
            title="Polaroid Love Wall"
            subtitle="Snapshots of our beautiful moments"
          />
        </Reveal>

        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {polaroidWallItems.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.05}>
              <button
                onClick={() => setSelectedId(item.id)}
                className={cn(
                  'group relative cursor-pointer focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 rounded-lg',
                  !prefersReducedMotion && 'transition-transform duration-300 hover:scale-110 hover:z-10'
                )}
                style={{
                  transform: `rotate(${(index % 3 - 1) * 3}deg)`,
                }}
                aria-label={`View ${item.caption}`}
              >
                <div className="relative bg-white dark:bg-neutral-100 p-3 pb-12 shadow-xl">
                  <div className="aspect-square bg-gradient-to-br from-rose-100 to-pink-100 rounded-sm overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center text-rose-300 text-4xl">
                      ❤️
                    </div>
                  </div>
                  <p className="mt-3 text-center text-xs font-handwriting text-neutral-700">
                    {item.caption}
                  </p>
                  <div
                    className={cn(
                      'absolute inset-0 bg-gradient-to-br from-rose-500/0 to-pink-500/0 rounded-sm pointer-events-none',
                      !prefersReducedMotion && 'group-hover:from-rose-500/10 group-hover:to-pink-500/10 transition-all duration-300'
                    )}
                  />
                </div>
              </button>
            </Reveal>
          ))}
        </div>

        {selectedId !== null && selectedItem && (
          <div
            className={cn(
              'fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm',
              !prefersReducedMotion && 'animate-in fade-in duration-300'
            )}
            onClick={handleClose}
            role="dialog"
            aria-modal="true"
            aria-labelledby="polaroid-title"
          >
            <div
              className={cn(
                'relative max-w-2xl w-full',
                !prefersReducedMotion && 'animate-in zoom-in-95 duration-300'
              )}
              onClick={(e) => e.stopPropagation()}
            >
              <GlassCard className="p-8 md:p-12">
                <Button
                  onClick={handleClose}
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 touch-target"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </Button>

                <div className="space-y-6">
                  <div className="aspect-square bg-gradient-to-br from-rose-100 to-pink-100 dark:from-rose-950/40 dark:to-pink-950/40 rounded-xl overflow-hidden flex items-center justify-center border border-rose-200 dark:border-rose-800">
                    <div className="text-8xl">❤️</div>
                  </div>

                  <div className="text-center space-y-4">
                    <div className="flex items-center justify-center gap-2">
                      <Heart className="w-6 h-6 text-rose-500" />
                      <h3
                        id="polaroid-title"
                        className="text-2xl md:text-3xl font-bold text-rose-600 dark:text-rose-400"
                      >
                        {selectedItem.caption}
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground italic">{selectedItem.date}</p>
                    <div className="p-6 rounded-xl bg-gradient-to-br from-rose-50/80 to-pink-50/80 dark:from-rose-950/30 dark:to-pink-950/30 border border-rose-200 dark:border-rose-800">
                      <p className="text-lg leading-relaxed text-foreground/90">
                        {selectedItem.memory}
                      </p>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
