import { ReactNode, createContext, useContext } from 'react';
import { useSmoothScroll } from '../../hooks/useSmoothScroll';

interface SmoothScrollContextValue {
  scrollToPosition: (position: number) => void;
}

const SmoothScrollContext = createContext<SmoothScrollContextValue | undefined>(undefined);

export function useSmoothScrollContext() {
  const context = useContext(SmoothScrollContext);
  if (!context) {
    throw new Error('useSmoothScrollContext must be used within SmoothScrollProvider');
  }
  return context;
}

interface SmoothScrollProviderProps {
  children: ReactNode;
}

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  const { scrollToPosition } = useSmoothScroll();

  return (
    <SmoothScrollContext.Provider value={{ scrollToPosition }}>
      {children}
    </SmoothScrollContext.Provider>
  );
}
