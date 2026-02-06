import { GlassCard } from '../GlassCard';
import { Music } from 'lucide-react';

export function FavoriteSongEmbed() {
  return (
    <GlassCard className="mt-12 p-8 md:p-12">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-rose-400 to-pink-500 flex items-center justify-center">
          <Music className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-rose-600 dark:text-rose-400">
            Our Special Song
          </h3>
          <p className="text-sm text-muted-foreground">
            The melody that reminds us of each other
          </p>
        </div>
      </div>

      <div className="aspect-video bg-gradient-to-br from-rose-100 to-pink-100 dark:from-rose-950 to-pink-950 rounded-lg overflow-hidden flex items-center justify-center">
        <div className="text-center p-8">
          <Music className="w-16 h-16 mx-auto mb-4 text-rose-400 animate-pulse" />
          <p className="text-lg text-foreground/70">
            Your favorite song embed would go here
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            (YouTube, Spotify, or SoundCloud embed)
          </p>
        </div>
      </div>

      <p className="mt-6 text-center text-foreground/80 italic">
        "Every time I hear this song, I think of you and smile."
      </p>
    </GlassCard>
  );
}
