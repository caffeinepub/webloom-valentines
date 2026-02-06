import { useState, useEffect } from 'react';
import { Reveal } from '../motion/Reveal';
import { GlassCard } from '../GlassCard';
import { SectionHeader } from '../SectionHeader';
import { Button } from '../ui/button';
import { Sparkles, RotateCcw } from 'lucide-react';
import { cn } from '../../lib/utils';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';
import { lovePuzzlePieces, puzzleCompletionMessage } from '../../content/premiumInteractiveSections';

export function LovePuzzleSection() {
  const [pieces, setPieces] = useState(() => 
    [...lovePuzzlePieces].sort(() => Math.random() - 0.5)
  );
  const [isComplete, setIsComplete] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const complete = pieces.every((piece, index) => piece.correctPosition === index);
    setIsComplete(complete);
  }, [pieces]);

  const handleSwap = (index: number) => {
    if (isComplete) return;
    
    if (index < pieces.length - 1) {
      const newPieces = [...pieces];
      [newPieces[index], newPieces[index + 1]] = [newPieces[index + 1], newPieces[index]];
      setPieces(newPieces);
    }
  };

  const handleReset = () => {
    setPieces([...lovePuzzlePieces].sort(() => Math.random() - 0.5));
    setIsComplete(false);
  };

  return (
    <section className="relative py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <Reveal>
          <SectionHeader
            title="Love Puzzle"
            subtitle="Arrange the pieces to reveal our message"
          />
        </Reveal>

        <Reveal delay={0.2}>
          <GlassCard className="mt-12 p-8 md:p-12">
            <div className="flex flex-wrap gap-3 justify-center mb-8">
              {pieces.map((piece, index) => (
                <button
                  key={piece.id}
                  onClick={() => handleSwap(index)}
                  disabled={isComplete}
                  className={cn(
                    'touch-target px-6 py-4 rounded-xl font-semibold text-lg transition-all duration-300',
                    'bg-gradient-to-br from-rose-100 to-pink-100 dark:from-rose-950/40 dark:to-pink-950/40',
                    'border-2 border-rose-200 dark:border-rose-800',
                    'hover:scale-105 hover:shadow-lg active:scale-95',
                    'focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2',
                    isComplete && 'cursor-default',
                    !isComplete && 'cursor-pointer',
                    prefersReducedMotion && 'transition-none'
                  )}
                  aria-label={`Puzzle piece: ${piece.content}`}
                >
                  {piece.content}
                </button>
              ))}
            </div>

            {isComplete && (
              <div
                className={cn(
                  'text-center space-y-4',
                  !prefersReducedMotion && 'animate-in fade-in slide-in-from-bottom-4 duration-700'
                )}
              >
                <div className="flex justify-center">
                  <Sparkles className="w-12 h-12 text-rose-500 animate-pulse" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent">
                  {puzzleCompletionMessage.title}
                </h3>
                <p className="text-lg text-foreground/90 max-w-2xl mx-auto">
                  {puzzleCompletionMessage.message}
                </p>
              </div>
            )}

            <div className="flex justify-center mt-8">
              <Button
                onClick={handleReset}
                variant="outline"
                className="touch-target gap-2"
              >
                <RotateCcw className="w-4 h-4" />
                Reset Puzzle
              </Button>
            </div>
          </GlassCard>
        </Reveal>
      </div>
    </section>
  );
}
