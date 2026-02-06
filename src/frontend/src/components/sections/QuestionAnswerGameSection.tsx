import { useState } from 'react';
import { Reveal } from '../motion/Reveal';
import { GlassCard } from '../GlassCard';
import { SectionHeader } from '../SectionHeader';
import { Button } from '../ui/button';
import { Heart, RotateCcw, ChevronRight } from 'lucide-react';
import { cn } from '../../lib/utils';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';
import { qaPrompts } from '../../content/premiumInteractiveSections';

export function QuestionAnswerGameSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResponse, setShowResponse] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  const currentPrompt = qaPrompts[currentIndex];
  const isLastQuestion = currentIndex === qaPrompts.length - 1;

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
    setShowResponse(true);
  };

  const handleNext = () => {
    if (isLastQuestion) {
      handleRestart();
    } else {
      setCurrentIndex(currentIndex + 1);
      setSelectedAnswer(null);
      setShowResponse(false);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setShowResponse(false);
  };

  return (
    <section className="relative py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <Reveal>
          <SectionHeader
            title="Our Love Q&A"
            subtitle="Answer from the heart"
          />
        </Reveal>

        <Reveal delay={0.2}>
          <GlassCard className="mt-12 p-8 md:p-12">
            <div className="mb-6 flex justify-between items-center">
              <span className="text-sm text-muted-foreground">
                Question {currentIndex + 1} of {qaPrompts.length}
              </span>
              <div className="flex gap-2">
                {qaPrompts.map((_, index) => (
                  <div
                    key={index}
                    className={cn(
                      'w-2 h-2 rounded-full transition-colors',
                      index === currentIndex
                        ? 'bg-rose-500'
                        : index < currentIndex
                        ? 'bg-rose-300'
                        : 'bg-rose-100 dark:bg-rose-900'
                    )}
                  />
                ))}
              </div>
            </div>

            <div
              key={currentPrompt.id}
              className={cn(
                'space-y-6',
                !prefersReducedMotion && 'animate-in fade-in slide-in-from-right-4 duration-500'
              )}
            >
              <h3 className="text-xl md:text-2xl font-semibold text-center text-rose-600 dark:text-rose-400">
                {currentPrompt.question}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {currentPrompt.answers.map((answer) => (
                  <button
                    key={answer}
                    onClick={() => handleAnswerSelect(answer)}
                    disabled={showResponse}
                    className={cn(
                      'touch-target p-4 rounded-xl text-left transition-all duration-300',
                      'border-2 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2',
                      selectedAnswer === answer
                        ? 'bg-gradient-to-br from-rose-100 to-pink-100 dark:from-rose-950/60 dark:to-pink-950/60 border-rose-400 dark:border-rose-600 shadow-lg scale-105'
                        : 'bg-white/40 dark:bg-neutral-900/40 border-rose-200 dark:border-rose-800 hover:border-rose-300 dark:hover:border-rose-700 hover:scale-102',
                      showResponse && selectedAnswer !== answer && 'opacity-50',
                      !showResponse && 'cursor-pointer hover:shadow-md',
                      prefersReducedMotion && 'transition-none'
                    )}
                    aria-pressed={selectedAnswer === answer}
                  >
                    <span className="font-medium">{answer}</span>
                  </button>
                ))}
              </div>

              {showResponse && (
                <div
                  className={cn(
                    'mt-6 p-6 rounded-xl bg-gradient-to-br from-rose-50/80 to-pink-50/80 dark:from-rose-950/30 dark:to-pink-950/30 border border-rose-200 dark:border-rose-800',
                    !prefersReducedMotion && 'animate-in fade-in slide-in-from-bottom-4 duration-500'
                  )}
                >
                  <div className="flex items-start gap-3">
                    <Heart className="w-6 h-6 text-rose-500 flex-shrink-0 mt-1" />
                    <p className="text-base leading-relaxed text-foreground/90">
                      {currentPrompt.response}
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div className="flex justify-center gap-4 mt-8">
              {showResponse && (
                <Button
                  onClick={handleNext}
                  className="touch-target gap-2 bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600"
                >
                  {isLastQuestion ? (
                    <>
                      <RotateCcw className="w-4 h-4" />
                      Start Over
                    </>
                  ) : (
                    <>
                      Next Question
                      <ChevronRight className="w-4 h-4" />
                    </>
                  )}
                </Button>
              )}
            </div>
          </GlassCard>
        </Reveal>
      </div>
    </section>
  );
}
