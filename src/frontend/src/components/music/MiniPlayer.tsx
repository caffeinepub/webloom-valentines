import { useState } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { useBackgroundMusic } from './BackgroundMusicProvider';
import { GlassCard } from '../GlassCard';

export function MiniPlayer() {
  const { isPlaying, volume, play, pause, setVolume } = useBackgroundMusic();
  const [showVolume, setShowVolume] = useState(false);

  const togglePlay = () => {
    if (isPlaying) {
      pause();
    } else {
      play();
    }
  };

  return (
    <GlassCard className="p-4 flex items-center gap-3">
      <button
        onClick={togglePlay}
        className="w-10 h-10 rounded-full bg-gradient-to-br from-rose-400 to-pink-500 flex items-center justify-center hover:scale-110 transition-transform cursor-pointer"
        aria-label={isPlaying ? 'Pause music' : 'Play music'}
      >
        {isPlaying ? (
          <Pause className="w-5 h-5 text-white fill-white" />
        ) : (
          <Play className="w-5 h-5 text-white fill-white ml-0.5" />
        )}
      </button>

      <div className="relative">
        <button
          onClick={() => setShowVolume(!showVolume)}
          className="w-8 h-8 flex items-center justify-center text-rose-500 hover:text-rose-600 transition-colors cursor-pointer"
          aria-label="Volume control"
        >
          {volume === 0 ? (
            <VolumeX className="w-5 h-5" />
          ) : (
            <Volume2 className="w-5 h-5" />
          )}
        </button>

        {showVolume && (
          <div className="absolute bottom-full right-0 mb-2 p-3 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-xl rounded-lg shadow-xl">
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={volume}
              onChange={(e) => setVolume(parseFloat(e.target.value))}
              className="w-24 h-2 bg-rose-200 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-rose-500"
            />
          </div>
        )}
      </div>

      <div className="text-sm text-muted-foreground">
        Background Music
      </div>
    </GlassCard>
  );
}
