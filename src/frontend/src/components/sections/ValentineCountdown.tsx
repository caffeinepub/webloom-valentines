import { GlassCard } from '../GlassCard';
import { useCountdown } from '../../hooks/useCountdown';
import { Heart } from 'lucide-react';

export function ValentineCountdown() {
  const valentineDate = new Date('2026-02-14T00:00:00');
  const countdown = useCountdown(valentineDate);

  if (countdown.isPast) {
    return (
      <GlassCard className="mt-12 p-12 text-center bg-gradient-to-br from-rose-50/50 to-pink-50/50 dark:from-rose-950/20 dark:to-pink-950/20">
        <Heart className="w-16 h-16 mx-auto mb-6 text-rose-500 fill-rose-500 animate-pulse" />
        <h3 className="text-3xl font-bold text-rose-600 dark:text-rose-400 mb-4">
          Happy Valentine's Day!
        </h3>
        <p className="text-lg text-foreground/80">
          Today is our special day. I love you more than words can say! ❤️
        </p>
      </GlassCard>
    );
  }

  return (
    <GlassCard className="mt-12 p-8 md:p-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
        <div className="text-center">
          <div className="text-4xl md:text-6xl font-bold text-rose-600 dark:text-rose-400 mb-2">
            {countdown.days}
          </div>
          <div className="text-sm md:text-base text-muted-foreground uppercase tracking-wider">
            Days
          </div>
        </div>
        <div className="text-center">
          <div className="text-4xl md:text-6xl font-bold text-pink-600 dark:text-pink-400 mb-2">
            {countdown.hours}
          </div>
          <div className="text-sm md:text-base text-muted-foreground uppercase tracking-wider">
            Hours
          </div>
        </div>
        <div className="text-center">
          <div className="text-4xl md:text-6xl font-bold text-rose-500 dark:text-rose-400 mb-2">
            {countdown.minutes}
          </div>
          <div className="text-sm md:text-base text-muted-foreground uppercase tracking-wider">
            Minutes
          </div>
        </div>
        <div className="text-center">
          <div className="text-4xl md:text-6xl font-bold text-pink-500 dark:text-pink-400 mb-2">
            {countdown.seconds}
          </div>
          <div className="text-sm md:text-base text-muted-foreground uppercase tracking-wider">
            Seconds
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="text-lg text-foreground/80">
          Until Valentine's Day 2026
        </p>
      </div>
    </GlassCard>
  );
}
