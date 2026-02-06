import { useState } from 'react';
import { Reveal } from '../motion/Reveal';
import { cn } from '../../lib/utils';

const galleryImages = [
  {
    id: 1,
    caption: 'Our first adventure together',
    rotation: -3,
  },
  {
    id: 2,
    caption: 'Sunset at the beach',
    rotation: 2,
  },
  {
    id: 3,
    caption: 'Cozy winter nights',
    rotation: -2,
  },
  {
    id: 4,
    caption: 'Dancing in the rain',
    rotation: 4,
  },
  {
    id: 5,
    caption: 'Our favorite coffee spot',
    rotation: -4,
  },
  {
    id: 6,
    caption: 'Making memories',
    rotation: 3,
  },
];

export function PolaroidGallery() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
      {galleryImages.map((image, index) => (
        <Reveal key={image.id} delay={index * 0.1}>
          <div
            className="group relative cursor-pointer"
            onMouseEnter={() => setHoveredId(image.id)}
            onMouseLeave={() => setHoveredId(null)}
            style={{
              transform: `rotate(${image.rotation}deg)`,
            }}
          >
            <div
              className={cn(
                'relative bg-white dark:bg-neutral-100 p-4 pb-16 shadow-xl transition-all duration-500',
                hoveredId === image.id
                  ? 'scale-110 rotate-0 shadow-2xl z-10'
                  : 'hover:scale-105'
              )}
            >
              <div className="aspect-square bg-gradient-to-br from-rose-100 to-pink-100 rounded-sm overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-rose-300 text-6xl">
                  ❤️
                </div>
              </div>
              <p className="mt-4 text-center text-sm font-handwriting text-neutral-700">
                {image.caption}
              </p>
              <div className="absolute inset-0 bg-gradient-to-br from-rose-500/0 to-pink-500/0 group-hover:from-rose-500/5 group-hover:to-pink-500/5 transition-all duration-500 pointer-events-none rounded-sm" />
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
