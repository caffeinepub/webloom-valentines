import { LoveLetter } from '../components/sections/LoveLetter';
import { ValentineCountdown } from '../components/sections/ValentineCountdown';
import { Reveal } from '../components/motion/Reveal';
import { GlassCard } from '../components/GlassCard';
import { SectionHeader } from '../components/SectionHeader';
import { Heart } from 'lucide-react';

export default function FinalePage() {
  return (
    <div className="relative py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <LoveLetter />

        <div className="mt-24">
          <Reveal>
            <SectionHeader
              title="Counting Down"
              subtitle="Until our special day"
            />
          </Reveal>

          <Reveal delay={0.3}>
            <ValentineCountdown />
          </Reveal>
        </div>

        <div className="mt-24">
          <Reveal delay={0.5}>
            <GlassCard className="p-12 text-center bg-gradient-to-br from-rose-50/50 to-pink-50/50 dark:from-rose-950/20 dark:to-pink-950/20">
              <Heart className="w-16 h-16 mx-auto mb-6 text-rose-500 animate-pulse" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent">
                Forever & Always
              </h2>
              <p className="text-lg md:text-xl leading-relaxed text-foreground/90 mb-6">
                Thank you for being my partner, my best friend, and my greatest love. 
                Every day with you is a gift, and I can't wait to create countless more 
                memories together.
              </p>
              <p className="text-2xl font-semibold text-rose-600 dark:text-rose-400">
                Happy Valentine's Day, My Love ❤️
              </p>
            </GlassCard>
          </Reveal>
        </div>

        <footer className="mt-16 text-center text-sm text-muted-foreground">
          <Reveal delay={0.7}>
            <p>© 2026. Built with <Heart className="inline w-4 h-4 text-rose-500" /> using <a href="https://caffeine.ai" target="_blank" rel="noopener noreferrer" className="hover:text-rose-500 transition-colors">caffeine.ai</a></p>
          </Reveal>
        </footer>
      </div>
    </div>
  );
}
