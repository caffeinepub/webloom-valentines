// Premium Interactive Sections Content
// All content is curated and English-only

export interface PuzzlePiece {
  id: number;
  content: string;
  correctPosition: number;
}

export interface QAPrompt {
  id: number;
  question: string;
  answers: string[];
  response: string;
}

export interface TravelMemory {
  id: number;
  destination: string;
  date: string;
  narrative: string;
  highlight: string;
}

export interface VoiceNote {
  id: number;
  title: string;
  caption: string;
  audioPath: string;
  duration: number;
}

export interface FlipbookPage {
  id: number;
  scene: string;
  text: string;
}

export interface MonthMemory {
  month: string;
  title: string;
  text: string;
}

export interface PolaroidItem {
  id: number;
  caption: string;
  date: string;
  memory: string;
}

// Love Puzzle - reveals romantic message when completed
export const lovePuzzlePieces: PuzzlePiece[] = [
  { id: 1, content: 'You', correctPosition: 0 },
  { id: 2, content: 'are', correctPosition: 1 },
  { id: 3, content: 'my', correctPosition: 2 },
  { id: 4, content: 'forever', correctPosition: 3 },
  { id: 5, content: 'and', correctPosition: 4 },
  { id: 6, content: 'always', correctPosition: 5 },
];

export const puzzleCompletionMessage = {
  title: 'You Did It!',
  message: 'Just like this puzzle, every piece of our love story fits perfectly together. You complete me in every way.',
};

// Question-Answer Game
export const qaPrompts: QAPrompt[] = [
  {
    id: 1,
    question: 'What was the first thing you noticed about me?',
    answers: ['Your smile', 'Your eyes', 'Your laugh', 'Your kindness'],
    response: 'Your smile lit up the entire room and I knew I had to know you better. It still makes my heart skip a beat.',
  },
  {
    id: 2,
    question: 'What is our perfect date night?',
    answers: ['Cozy movie night', 'Fancy dinner', 'Adventure outdoors', 'Dancing under stars'],
    response: 'Every moment with you is perfect, but there\'s something magical about being close, sharing laughter, and just being us.',
  },
  {
    id: 3,
    question: 'What makes our love special?',
    answers: ['We laugh together', 'We support each other', 'We grow together', 'All of the above'],
    response: 'It\'s everything—the laughter, the support, the growth. We\'re not just lovers, we\'re best friends building a beautiful life together.',
  },
  {
    id: 4,
    question: 'What do you love most about us?',
    answers: ['Our adventures', 'Our quiet moments', 'Our silly jokes', 'Our deep talks'],
    response: 'I love how we can be anything together—adventurous, peaceful, silly, or profound. With you, every moment feels right.',
  },
];

// Travel Memories
export const travelMemories: TravelMemory[] = [
  {
    id: 1,
    destination: 'Paris',
    date: 'Spring 2024',
    narrative: 'Walking hand in hand along the Seine, we watched the Eiffel Tower sparkle at midnight. You said it was magical, but I was only looking at you.',
    highlight: 'Our first kiss under the Eiffel Tower',
  },
  {
    id: 2,
    destination: 'Santorini',
    date: 'Summer 2024',
    narrative: 'The sunset painted the white buildings in shades of pink and gold. We sat on the edge of the caldera, and I knew I wanted to watch every sunset with you for the rest of my life.',
    highlight: 'Sunset dinner overlooking the Aegean',
  },
  {
    id: 3,
    destination: 'Tokyo',
    date: 'Fall 2024',
    narrative: 'Lost in translation but never lost with you. We wandered through neon streets, tried every street food, and laughed at our terrible attempts to order in Japanese.',
    highlight: 'Cherry blossom picnic in Ueno Park',
  },
  {
    id: 4,
    destination: 'New York',
    date: 'Winter 2024',
    narrative: 'Ice skating in Central Park, hot chocolate warming our hands, and the city lights reflecting in your eyes. You made the cold feel warm.',
    highlight: 'New Year\'s Eve in Times Square',
  },
];

// Voice Note Messages (predefined audio notes)
export const voiceNotes: VoiceNote[] = [
  {
    id: 1,
    title: 'Good Morning, My Love',
    caption: 'A sweet message to start your day',
    audioPath: '/assets/audio/voice-note-01.mp3',
    duration: 45,
  },
  {
    id: 2,
    title: 'Why I Love You',
    caption: 'All the reasons my heart belongs to you',
    audioPath: '/assets/audio/voice-note-02.mp3',
    duration: 60,
  },
  {
    id: 3,
    title: 'Our Future Together',
    caption: 'Dreams and promises for tomorrow',
    audioPath: '/assets/audio/voice-note-03.mp3',
    duration: 52,
  },
];

// Flipbook Love Story
export const flipbookPages: FlipbookPage[] = [
  {
    id: 1,
    scene: 'Chapter 1: The Beginning',
    text: 'Once upon a time, in a crowded coffee shop, two souls found each other. It was an ordinary day that became extraordinary.',
  },
  {
    id: 2,
    scene: 'Chapter 2: First Words',
    text: '"Is this seat taken?" Those four words changed everything. What started as a simple question became the beginning of our story.',
  },
  {
    id: 3,
    scene: 'Chapter 3: Connection',
    text: 'Hours passed like minutes. We talked about everything and nothing, laughed until our sides hurt, and felt a connection neither of us could deny.',
  },
  {
    id: 4,
    scene: 'Chapter 4: First Date',
    text: 'Three days later, we met again. This time it was intentional, planned, and even more magical than the first time.',
  },
  {
    id: 5,
    scene: 'Chapter 5: Falling',
    text: 'With every conversation, every laugh, every shared moment, we fell deeper. It wasn\'t just attraction—it was recognition. Like coming home.',
  },
  {
    id: 6,
    scene: 'Chapter 6: Forever',
    text: 'And so our story continues, each day a new page, each moment a new memory. This isn\'t the end—it\'s just the beginning of forever.',
  },
];

// Monthly Memories
export const monthlyMemories: MonthMemory[] = [
  { month: 'January', title: 'New Year, New Adventures', text: 'We started the year with promises and dreams, hand in hand, ready for anything.' },
  { month: 'February', title: 'Valentine\'s Magic', text: 'Our first Valentine\'s Day together. You gave me flowers and I gave you my heart.' },
  { month: 'March', title: 'Spring Awakening', text: 'We watched the world bloom together, just like our love was blooming.' },
  { month: 'April', title: 'Rainy Day Cuddles', text: 'Dancing in the rain, laughing like children, falling more in love with every drop.' },
  { month: 'May', title: 'Road Trip Adventures', text: 'Miles of highway, terrible singing, and the best conversations. Just you, me, and the open road.' },
  { month: 'June', title: 'Summer Begins', text: 'Beach days, sunset walks, and the feeling that summer would last forever with you.' },
  { month: 'July', title: 'Fireworks & Forever', text: 'Under the fireworks, you whispered "I love you" and my world exploded with color.' },
  { month: 'August', title: 'Lazy Summer Days', text: 'Slow mornings, iced coffee, and the luxury of having nowhere to be but with you.' },
  { month: 'September', title: 'Autumn Arrives', text: 'Sweater weather, pumpkin spice, and falling leaves. But I was already fallen—for you.' },
  { month: 'October', title: 'Cozy Nights', text: 'Movie marathons, blanket forts, and the warmth of your arms around me.' },
  { month: 'November', title: 'Grateful Hearts', text: 'Thanksgiving reminded me how thankful I am for you, for us, for this beautiful life we\'re building.' },
  { month: 'December', title: 'Holiday Magic', text: 'Twinkling lights, warm cocoa, and the best gift of all—another year with you ahead.' },
];

// Polaroid Love Wall
export const polaroidWallItems: PolaroidItem[] = [
  {
    id: 1,
    caption: 'First Coffee Date',
    date: 'Where it all began',
    memory: 'I was so nervous I spilled my coffee. You laughed and said it was charming. That\'s when I knew you were special.',
  },
  {
    id: 2,
    caption: 'Sunset at the Pier',
    date: 'Golden hour magic',
    memory: 'The sun painted the sky in shades of pink and orange, but I couldn\'t take my eyes off you.',
  },
  {
    id: 3,
    caption: 'Cooking Disaster',
    date: 'Burnt but beautiful',
    memory: 'We tried to make dinner together and failed spectacularly. Ordered pizza and laughed until we cried.',
  },
  {
    id: 4,
    caption: 'Concert Night',
    date: 'Dancing in the crowd',
    memory: 'Our song came on and we danced like no one was watching. In that moment, it was just us.',
  },
  {
    id: 5,
    caption: 'Lazy Sunday',
    date: 'Perfect simplicity',
    memory: 'No plans, no agenda. Just us, coffee, and the Sunday paper. Sometimes the simple moments are the best.',
  },
  {
    id: 6,
    caption: 'Adventure Awaits',
    date: 'Ready for anything',
    memory: 'Packed bags, open road, and endless possibilities. With you, every journey is an adventure.',
  },
  {
    id: 7,
    caption: 'Rainy Day Love',
    date: 'Storms and smiles',
    memory: 'Caught in the rain without an umbrella. We ran, laughed, and kissed in the downpour.',
  },
  {
    id: 8,
    caption: 'Home Sweet Home',
    date: 'Our first place',
    memory: 'The day we got the keys. Empty rooms full of dreams. This is where our forever begins.',
  },
];
