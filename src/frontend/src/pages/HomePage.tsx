import { ValentineHero } from '../components/sections/ValentineHero';
import { Reveal } from '../components/motion/Reveal';
import { GlassCard } from '../components/GlassCard';
import { SectionHeader } from '../components/SectionHeader';
import { ParallaxLayer } from '../components/motion/ParallaxLayer';
import { LovePuzzleSection } from '../components/sections/LovePuzzleSection';
import { QuestionAnswerGameSection } from '../components/sections/QuestionAnswerGameSection';

export default function HomePage() {
  return (
    <div className="relative">
      <ParallaxLayer speed={0.5} className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-radial from-rose-200/20 via-transparent to-transparent" />
      </ParallaxLayer>

      <ValentineHero />

      <section className="relative py-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <Reveal delay={0.2}>
            <SectionHeader
              title="Our Love Story"
              subtitle="Where two hearts became one"
            />
          </Reveal>

          <Reveal delay={0.4}>
            <GlassCard className="mt-12 p-8 md:p-12">
              <p className="text-lg md:text-xl leading-relaxed text-foreground/90 mb-6">
                Every love story is beautiful, but ours is my favorite. From the moment our paths crossed, 
                I knew there was something magical about you. Your smile lit up my world, and your laughter 
                became my favorite melody.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-foreground/90">
                Through every season, every challenge, and every joy, we've grown together. This is our 
                journey—a testament to the power of love, patience, and the beautiful connection we share.
              </p>
            </GlassCard>
          </Reveal>

          <Reveal delay={0.6}>
            <GlassCard className="mt-8 p-8 md:p-12 bg-gradient-to-br from-rose-50/50 to-pink-50/50 dark:from-rose-950/20 dark:to-pink-950/20">
              <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-rose-600 dark:text-rose-400">
                How We Met
              </h3>
              <p className="text-lg leading-relaxed text-foreground/90">
                It was a beautiful autumn day when fate brought us together. The coffee shop was bustling, 
                and there was only one seat left—right next to you. What started as a simple "Is this seat 
                taken?" turned into hours of conversation, laughter, and an undeniable connection that neither 
                of us could ignore.
              </p>
            </GlassCard>
          </Reveal>
        </div>
      </section>

      <LovePuzzleSection />
      <QuestionAnswerGameSection />
    </div>
  );
}
