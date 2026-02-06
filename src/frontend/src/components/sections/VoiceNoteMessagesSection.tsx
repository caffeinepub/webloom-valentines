import { useState, useRef, useEffect } from 'react';
import { Reveal } from '../motion/Reveal';
import { GlassCard } from '../GlassCard';
import { SectionHeader } from '../SectionHeader';
import { Button } from '../ui/button';
import { Play, Pause, Volume2 } from 'lucide-react';
import { cn } from '../../lib/utils';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';
import { voiceNotes } from '../../content/premiumInteractiveSections';

export function VoiceNoteMessagesSection() {
  const [activeNoteId, setActiveNoteId] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const handlePlayPause = (noteId: number, audioPath: string) => {
    if (activeNoteId === noteId && audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
      }

      const audio = new Audio(audioPath);
      audioRef.current = audio;
      setActiveNoteId(noteId);
      setCurrentTime(0);

      audio.addEventListener('loadedmetadata', () => {
        setDuration(audio.duration);
      });

      audio.addEventListener('timeupdate', () => {
        setCurrentTime(audio.currentTime);
      });

      audio.addEventListener('ended', () => {
        setIsPlaying(false);
        setCurrentTime(0);
      });

      audio.play().catch(() => {
        // Handle autoplay restrictions
        setIsPlaying(false);
      });
      setIsPlaying(true);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <section className="relative py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <Reveal>
          <SectionHeader
            title="Voice Messages"
            subtitle="Listen to my heart speak"
          />
        </Reveal>

        <div className="mt-12 space-y-6">
          {voiceNotes.map((note, index) => {
            const isActive = activeNoteId === note.id;
            const isCurrentlyPlaying = isActive && isPlaying;
            const progress = isActive && duration > 0 ? (currentTime / duration) * 100 : 0;

            return (
              <Reveal key={note.id} delay={index * 0.1}>
                <GlassCard
                  className={cn(
                    'p-6 transition-all duration-300',
                    isActive && 'ring-2 ring-rose-500 shadow-lg',
                    !prefersReducedMotion && 'hover:shadow-xl'
                  )}
                >
                  <div className="flex items-start gap-4">
                    <Button
                      onClick={() => handlePlayPause(note.id, note.audioPath)}
                      size="icon"
                      className={cn(
                        'touch-target flex-shrink-0 rounded-full',
                        'bg-gradient-to-br from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600',
                        isCurrentlyPlaying && 'animate-pulse'
                      )}
                      aria-label={isCurrentlyPlaying ? 'Pause' : 'Play'}
                    >
                      {isCurrentlyPlaying ? (
                        <Pause className="w-5 h-5" />
                      ) : (
                        <Play className="w-5 h-5 ml-0.5" />
                      )}
                    </Button>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <div>
                          <h3 className="text-lg font-semibold text-rose-600 dark:text-rose-400">
                            {note.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">{note.caption}</p>
                        </div>
                        <Volume2 className="w-5 h-5 text-rose-500 flex-shrink-0" />
                      </div>

                      {isActive && (
                        <div
                          className={cn(
                            'space-y-2',
                            !prefersReducedMotion && 'animate-in fade-in slide-in-from-bottom-2 duration-300'
                          )}
                        >
                          <div className="relative h-2 bg-rose-100 dark:bg-rose-900 rounded-full overflow-hidden">
                            <div
                              className="absolute inset-y-0 left-0 bg-gradient-to-r from-rose-500 to-pink-500 transition-all duration-200"
                              style={{ width: `${progress}%` }}
                            />
                          </div>
                          <div className="flex justify-between text-xs text-muted-foreground">
                            <span>{formatTime(currentTime)}</span>
                            <span>{formatTime(duration || note.duration)}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </GlassCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
