import { ReactNode } from 'react';

interface SectionTimelineProps {
  children: ReactNode;
  stagger?: number;
}

export function SectionTimeline({ children }: SectionTimelineProps) {
  return <div>{children}</div>;
}
