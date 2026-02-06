import { ReactNode, createContext, useContext, useState, useRef, useEffect } from 'react';

interface BackgroundMusicContextValue {
  isPlaying: boolean;
  volume: number;
  play: () => void;
  pause: () => void;
  setVolume: (volume: number) => void;
}

const BackgroundMusicContext = createContext<BackgroundMusicContextValue | undefined>(undefined);

export function useBackgroundMusic() {
  const context = useContext(BackgroundMusicContext);
  if (!context) {
    throw new Error('useBackgroundMusic must be used within BackgroundMusicProvider');
  }
  return context;
}

interface BackgroundMusicProviderProps {
  children: ReactNode;
}

export function BackgroundMusicProvider({ children }: BackgroundMusicProviderProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolumeState] = useState(0.3);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create a silent audio element (placeholder for actual music)
    audioRef.current = new Audio();
    audioRef.current.loop = true;
    audioRef.current.volume = volume;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const play = () => {
    if (audioRef.current) {
      // Fade in
      let currentVolume = 0;
      audioRef.current.volume = 0;
      audioRef.current.play().catch(() => {
        // Handle autoplay restrictions
      });

      const fadeIn = setInterval(() => {
        if (currentVolume < volume) {
          currentVolume += 0.05;
          if (audioRef.current) {
            audioRef.current.volume = Math.min(currentVolume, volume);
          }
        } else {
          clearInterval(fadeIn);
        }
      }, 50);

      setIsPlaying(true);
    }
  };

  const pause = () => {
    if (audioRef.current) {
      // Fade out
      let currentVolume = audioRef.current.volume;
      const fadeOut = setInterval(() => {
        if (currentVolume > 0) {
          currentVolume -= 0.05;
          if (audioRef.current) {
            audioRef.current.volume = Math.max(currentVolume, 0);
          }
        } else {
          clearInterval(fadeOut);
          if (audioRef.current) {
            audioRef.current.pause();
          }
        }
      }, 50);

      setIsPlaying(false);
    }
  };

  const setVolume = (newVolume: number) => {
    setVolumeState(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  return (
    <BackgroundMusicContext.Provider value={{ isPlaying, volume, play, pause, setVolume }}>
      {children}
    </BackgroundMusicContext.Provider>
  );
}
