import { ReactNode } from 'react';
import { cn } from '../lib/utils';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export function GlassCard({ children, className }: GlassCardProps) {
  return (
    <div
      className={cn(
        'relative rounded-2xl backdrop-blur-xl bg-white/40 dark:bg-neutral-900/40 border border-white/20 dark:border-neutral-700/20 shadow-xl overflow-hidden',
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
