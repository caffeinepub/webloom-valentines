import { ReactNode } from 'react';
import { PremiumNavbar } from '../nav/PremiumNavbar';
import { ValentineCursor } from '../cursor/ValentineCursor';
import { HeartRippleLayer } from '../cursor/HeartRippleLayer';
import { SmoothScrollProvider } from '../scroll/SmoothScrollProvider';
import { BackgroundMusicProvider } from '../music/BackgroundMusicProvider';
import { FilmGrainOverlay } from '../background/FilmGrainOverlay';
import { useIsTouchDevice } from '../../hooks/useIsTouchDevice';

interface SiteLayoutProps {
  children: ReactNode;
}

export function SiteLayout({ children }: SiteLayoutProps) {
  const isTouchDevice = useIsTouchDevice();

  return (
    <BackgroundMusicProvider>
      <SmoothScrollProvider>
        <div className="relative min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-cream-50 dark:from-rose-950 dark:via-pink-950 dark:to-neutral-950">
          <div className="fixed inset-0 bg-[url('/assets/generated/valentine-gradient-bg.dim_1920x1080.png')] bg-cover bg-center opacity-30 pointer-events-none" />
          <FilmGrainOverlay />
          
          {!isTouchDevice && (
            <>
              <ValentineCursor />
              <HeartRippleLayer />
            </>
          )}

          <PremiumNavbar />
          
          <main className="relative z-10">
            {children}
          </main>
        </div>
      </SmoothScrollProvider>
    </BackgroundMusicProvider>
  );
}
