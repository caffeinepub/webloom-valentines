import { useNavigate } from '@tanstack/react-router';
import { Heart, ArrowDown } from 'lucide-react';
import { Reveal } from '../motion/Reveal';
import { ParallaxLayer } from '../motion/ParallaxLayer';
import { useSmoothScroll } from '../../hooks/useSmoothScroll';

export function ValentineHero() {
  const navigate = useNavigate();
  const { scrollToPosition } = useSmoothScroll();

  const handleCTAClick = () => {
    const nextSection = document.querySelector('section');
    if (nextSection) {
      scrollToPosition(nextSection.offsetTop);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-20">
      <ParallaxLayer speed={0.2} className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-rose-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </ParallaxLayer>

      <div className="container mx-auto max-w-5xl text-center relative z-10">
        <Reveal>
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <Heart className="w-20 h-20 text-rose-500 fill-rose-500 animate-pulse" />
              <div className="absolute inset-0 w-20 h-20 bg-rose-500/30 rounded-full blur-xl animate-pulse" />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-rose-500 via-pink-500 to-rose-500 bg-clip-text text-transparent leading-tight">
            Our Love Story
          </h1>
        </Reveal>

        <Reveal delay={0.4}>
          <p className="text-xl md:text-2xl lg:text-3xl text-foreground/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            A journey of two hearts, countless memories, and endless love
          </p>
        </Reveal>

        <Reveal delay={0.6}>
          <button
            onClick={handleCTAClick}
            className="group relative inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-rose-500 to-pink-500 rounded-full overflow-hidden cursor-pointer hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-rose-500/50"
          >
            <span className="relative z-10">Begin Our Journey</span>
            <ArrowDown className="relative z-10 w-5 h-5 group-hover:translate-y-1 transition-transform" />
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-rose-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-0 bg-white/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300" />
          </button>
        </Reveal>

        <Reveal delay={0.8}>
          <div className="mt-16 flex justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-rose-500 rounded-full animate-pulse" />
              <span>Made with Love</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
              <span>Forever & Always</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
