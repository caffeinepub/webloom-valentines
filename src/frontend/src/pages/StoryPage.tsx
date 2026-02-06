import { Reveal } from '../components/motion/Reveal';
import { GlassCard } from '../components/GlassCard';
import { SectionHeader } from '../components/SectionHeader';
import { SectionTimeline } from '../components/motion/SectionTimeline';
import { Heart, Calendar, Sparkles, Coffee } from 'lucide-react';
import { FlipbookLoveStorySection } from '../components/sections/FlipbookLoveStorySection';
import { TravelMemoriesSection } from '../components/sections/TravelMemoriesSection';
import { MonthlyMemoriesSection } from '../components/sections/MonthlyMemoriesSection';

const specialMoments = [
  {
    icon: Coffee,
    title: 'First Date',
    date: 'A Day to Remember',
    description: 'Our first official date was at that cozy Italian restaurant downtown. You wore that beautiful dress, and I couldn\'t take my eyes off you. We talked until they had to politely ask us to leave because they were closing.',
  },
  {
    icon: Heart,
    title: 'First "I Love You"',
    date: 'The Moment Everything Changed',
    description: 'Under the stars on that beach walk, with the waves gently crashing beside us, I finally found the courage to say those three words. Your eyes sparkled brighter than any star that night when you said them back.',
  },
  {
    icon: Sparkles,
    title: 'Our First Adventure',
    date: 'Making Memories',
    description: 'That spontaneous road trip to the mountains where we got lost, laughed until our stomachs hurt, and discovered that getting lost together is better than being found alone.',
  },
  {
    icon: Calendar,
    title: 'Moving In Together',
    date: 'Building Our Home',
    description: 'The day we got the keys to our first place together. Surrounded by boxes, we danced in the empty living room and knew that anywhere with you is home.',
  },
];

export default function StoryPage() {
  return (
    <div className="relative">
      <div className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <Reveal>
            <SectionHeader
              title="Our Journey Together"
              subtitle="Every moment with you is a treasure"
            />
          </Reveal>

          <SectionTimeline stagger={0.15}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
              {specialMoments.map((moment, index) => {
                const Icon = moment.icon;
                return (
                  <Reveal key={index} delay={index * 0.1}>
                    <GlassCard className="p-8 h-full hover-lift group cursor-pointer">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-rose-400 to-pink-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl md:text-2xl font-semibold mb-2 text-rose-600 dark:text-rose-400">
                            {moment.title}
                          </h3>
                          <p className="text-sm text-muted-foreground mb-3 italic">
                            {moment.date}
                          </p>
                          <p className="text-base leading-relaxed text-foreground/90">
                            {moment.description}
                          </p>
                        </div>
                      </div>
                    </GlassCard>
                  </Reveal>
                );
              })}
            </div>
          </SectionTimeline>
        </div>
      </div>

      <FlipbookLoveStorySection />
      <TravelMemoriesSection />
      <MonthlyMemoriesSection />
    </div>
  );
}
