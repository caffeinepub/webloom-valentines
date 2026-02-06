import { PolaroidGallery } from '../components/sections/PolaroidGallery';
import { FavoriteSongEmbed } from '../components/sections/FavoriteSongEmbed';
import { MiniPlayer } from '../components/music/MiniPlayer';
import { Reveal } from '../components/motion/Reveal';
import { SectionHeader } from '../components/SectionHeader';
import { ParallaxLayer } from '../components/motion/ParallaxLayer';
import { PolaroidLoveWallSection } from '../components/sections/PolaroidLoveWallSection';
import { VoiceNoteMessagesSection } from '../components/sections/VoiceNoteMessagesSection';

export default function GalleryMusicPage() {
  return (
    <div className="relative py-24 px-4">
      <ParallaxLayer speed={0.3} className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-rose-300/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-300/10 rounded-full blur-3xl" />
      </ParallaxLayer>

      <div className="container mx-auto max-w-6xl">
        <Reveal>
          <SectionHeader
            title="Our Memories"
            subtitle="Captured moments of love and laughter"
          />
        </Reveal>

        <PolaroidGallery />

        <div className="mt-24">
          <Reveal delay={0.3}>
            <SectionHeader
              title="Our Song"
              subtitle="The melody that brings us together"
            />
          </Reveal>

          <Reveal delay={0.5}>
            <FavoriteSongEmbed />
          </Reveal>
        </div>

        <div className="fixed bottom-8 right-8 z-50">
          <MiniPlayer />
        </div>
      </div>

      <PolaroidLoveWallSection />
      <VoiceNoteMessagesSection />
    </div>
  );
}
