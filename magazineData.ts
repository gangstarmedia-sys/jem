export type MagazineSection = 'School Messages' | 'Literary Corner' | 'Student Creative Canvas' | 'Achievements & Student Spotlight';
export type MagazineLanguage = 'English' | 'Malayalam' | 'Hindi';

export type MagazineEntry = {
  id: string;
  title: string;
  student: string;
  className: string;
  category: MagazineSection;
  language: MagazineLanguage;
  readTime: string;
  excerpt: string;
  content: string;
  image: string;
};

export type MagazineHubSection = {
  title: MagazineSection | 'Interactive Memories';
  description: string;
  icon: 'messages' | 'literary' | 'creative' | 'achievements' | 'memories';
  image: string;
  entries: MagazineEntry[];
};

const images = {
  messages: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=85',
  literary: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1200&q=85',
  creative: 'https://images.pexels.com/photos/8617765/pexels-photo-8617765.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  achievements: 'https://images.pexels.com/photos/8927012/pexels-photo-8927012.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  memories: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=85',
};

export const magazineEntries: MagazineEntry[] = [
  {
    id: 'principal-message-2026',
    title: 'A year of brave questions',
    student: 'Dr. Ananya Rao',
    className: 'Principal',
    category: 'School Messages',
    language: 'English',
    readTime: '4 min read',
    excerpt: 'A welcome note about curiosity, kindness, and the courage to keep learning.',
    content: 'Every school year begins with possibility. At YAMS CBSE HSS, TVM, we ask our students to look closely, listen generously, and bring their own questions to every lesson. The strongest learning often begins with a moment of wonder, followed by the confidence to try again.\n\nThis magazine celebrates that spirit: the thoughtful ideas, patient practice, joyful performances, and friendships that make our community special. May these pages remind us that achievement is not only a destination, but also the care we bring to each step along the way.',
    image: images.messages,
  },
  {
    id: 'editorial-board-note',
    title: 'The stories between the lines',
    student: 'Editorial Board',
    className: 'Senior Editorial Team',
    category: 'School Messages',
    language: 'English',
    readTime: '3 min read',
    excerpt: 'The editorial board reflects on listening to many voices and shaping one shared issue.',
    content: 'A school magazine is built from many small acts of attention. We read drafts during lunch, listened to stories after class, and discovered that the most meaningful moments were often the simplest ones.\n\nOur pages hold different languages, interests, and ways of seeing. Together they make a record of this year at YAMS CBSE HSS, TVM: open-hearted, curious, and full of promise.',
    image: images.messages,
  },
  {
    id: 'management-message',
    title: 'Growing with purpose',
    student: 'Management Committee',
    className: 'School Community',
    category: 'School Messages',
    language: 'English',
    readTime: '3 min read',
    excerpt: 'A message on building a learning environment where every student can belong and contribute.',
    content: 'A strong school grows through shared purpose. We are proud of the teachers, families, staff, and students who make learning feel both ambitious and welcoming.\n\nOur commitment is to provide spaces where every learner can discover a strength, meet a challenge, and make a meaningful contribution to the community around them.',
    image: images.messages,
  },
  {
    id: 'after-the-rain',
    title: 'After the Rain',
    student: 'Isha Menon',
    className: 'Class VII',
    category: 'Literary Corner',
    language: 'English',
    readTime: '2 min read',
    excerpt: 'Puddles hold the sky, and the playground starts to shine.',
    content: 'Puddles hold the sky,\nthe playground starts to shine,\nand every shoe remembers\nthe music of the rain.\n\nA silver leaf is floating\nwhere yesterday was dust;\nthe sun returns so softly\nwe learn again to trust.',
    image: images.literary,
  },
  {
    id: 'the-bell',
    title: 'The Bell',
    student: 'Kabir Nair',
    className: 'Class V',
    category: 'Literary Corner',
    language: 'English',
    readTime: '2 min read',
    excerpt: 'One bright note, and a hundred stories begin down corridors of light.',
    content: 'One bright note,\nand a hundred stories begin,\ndown corridors of light\nwhere the day is waiting.\n\nBooks open like windows,\nvoices gather, footsteps fly;\nthe bell is small, but carries\na whole horizon through the sky.',
    image: images.literary,
  },
  {
    id: 'ente-vidyalayam',
    title: 'എന്റെ വിദ്യാലയം',
    student: 'Aadhya Suresh',
    className: 'Class VI',
    category: 'Literary Corner',
    language: 'Malayalam',
    readTime: '2 min read',
    excerpt: 'പഠനവും സൗഹൃദവും നിറഞ്ഞ എന്റെ പ്രിയപ്പെട്ട വിദ്യാലയത്തെക്കുറിച്ചുള്ള ഒരു കുറിപ്പ്.',
    content: 'എന്റെ വിദ്യാലയം അറിവിന്റെ മാത്രമല്ല, സൗഹൃദത്തിന്റെയും സ്വപ്നങ്ങളുടെയും ഇടമാണ്. ഓരോ ദിവസവും പുതിയൊരു ചോദ്യം ചോദിക്കാനും, കൂട്ടുകാരോടൊപ്പം പുതിയൊരു കാര്യം കണ്ടെത്താനും ഇവിടെ അവസരമുണ്ട്.\n\nഅധ്യാപകരുടെ സ്നേഹവും കൂട്ടുകാരുടെ ചിരിയും നിറഞ്ഞ ഈ ഇടം എന്റെ ഓർമ്മകളിലെ ഏറ്റവും മനോഹരമായ അധ്യായമാണ്.',
    image: images.literary,
  },
  {
    id: 'colours-of-curiosity',
    title: 'Colours of Curiosity',
    student: 'Mira Thomas',
    className: 'Class VIII',
    category: 'Student Creative Canvas',
    language: 'English',
    readTime: '3 min read',
    excerpt: 'A reflection on turning observation, sketches, and questions into visual art.',
    content: 'My artwork began with three things I noticed on campus: a bright window, a fallen leaf, and the careful hands of a friend making a model. I drew each one, then joined them with colours that felt like morning.\n\nArt gives us time to notice. It helps an ordinary scene become a question, and a question become something we can share with another person.',
    image: images.creative,
  },
  {
    id: 'designing-a-kinder-campus',
    title: 'Designing a kinder campus',
    student: 'Innovation Club',
    className: 'Class IX',
    category: 'Student Creative Canvas',
    language: 'English',
    readTime: '4 min read',
    excerpt: 'Students imagine welcoming, sustainable spaces that help everyone feel they belong.',
    content: 'Our design challenge began with a simple question: what helps a person feel welcome? We mapped quiet corners, shaded paths, accessible entrances, and places where students can work together.\n\nThe final ideas were not just about buildings. They were about listening, sharing resources, and designing a campus that makes care visible in everyday life.',
    image: images.creative,
  },
  {
    id: 'my-digital-world',
    title: 'My Digital World',
    student: 'Rahul Joseph',
    className: 'Class VIII',
    category: 'Student Creative Canvas',
    language: 'English',
    readTime: '3 min read',
    excerpt: 'An essay on using technology with imagination, balance, and responsibility.',
    content: 'Technology is most useful when it helps us make, understand, and connect. In our classroom projects, a screen can become a window into a distant place, a canvas for a new idea, or a tool for testing a solution.\n\nThe important question is not only what technology can do, but what we choose to do with it. Thoughtful digital citizens make room for curiosity, kindness, and time away from the screen too.',
    image: images.creative,
  },
  {
    id: 'quiz-finalists',
    title: 'The questions that took us further',
    student: 'Senior Quiz Team',
    className: 'Class X',
    category: 'Achievements & Student Spotlight',
    language: 'English',
    readTime: '3 min read',
    excerpt: 'How patient research and teamwork carried the senior team to the regional final.',
    content: 'Preparation for the inter-school quiz taught us that achievement is built long before the final round. We divided topics, challenged one another, and learned to be comfortable saying, “I do not know yet.”\n\nThe final score mattered, but so did the habit we developed: staying curious together. Every question became an invitation to learn one more thing.',
    image: images.achievements,
  },
  {
    id: 'personal-bests',
    title: 'A season of personal bests',
    student: 'Athletics Squad',
    className: 'Classes VI–X',
    category: 'Achievements & Student Spotlight',
    language: 'English',
    readTime: '3 min read',
    excerpt: 'Small habits, steady practice, and teammates who celebrate every step forward.',
    content: 'This season was measured in more than medals. It was measured in early practice sessions, encouraging words, and the quiet satisfaction of improving by one small step.\n\nOur athletes learned that personal bests belong to everyone. Whether the finish line came first or later, every student who showed up helped strengthen the spirit of the team.',
    image: images.achievements,
  },
  {
    id: 'young-leader-spotlight',
    title: 'Leading by making space',
    student: 'Devika Ramesh',
    className: 'Class IX',
    category: 'Achievements & Student Spotlight',
    language: 'English',
    readTime: '4 min read',
    excerpt: 'A student spotlight on listening carefully, sharing responsibility, and helping others begin.',
    content: 'Devika believes leadership starts with noticing who has not yet had a chance to speak. As a house representative, she has helped turn suggestions into small, practical changes, from peer study circles to a more welcoming assembly routine.\n\nHer advice to younger students is simple: start with one helpful action, and invite someone else to join you.',
    image: images.achievements,
  },
];

export const magazineSections: MagazineHubSection[] = [
  { title: 'School Messages', description: 'Voices of guidance, gratitude, and shared purpose from our school community.', icon: 'messages', image: images.messages, entries: magazineEntries.filter(entry => entry.category === 'School Messages') },
  { title: 'Literary Corner', description: 'Poems, stories, and reflections in English, Malayalam, and Hindi.', icon: 'literary', image: images.literary, entries: magazineEntries.filter(entry => entry.category === 'Literary Corner') },
  { title: 'Student Creative Canvas', description: 'Artwork, digital creations, and essays shaped by young imaginations.', icon: 'creative', image: images.creative, entries: magazineEntries.filter(entry => entry.category === 'Student Creative Canvas') },
  { title: 'Achievements & Student Spotlight', description: 'Celebrating effort, excellence, and students who make a difference.', icon: 'achievements', image: images.achievements, entries: magazineEntries.filter(entry => entry.category === 'Achievements & Student Spotlight') },
  { title: 'Interactive Memories', description: 'Turn the pages of our campus memories and leave a note in the autograph book.', icon: 'memories', image: images.memories, entries: [] },
];

export const memoryPages = [
  { title: 'A year to remember', text: 'From first-day nerves to final-day laughter, every page carries a moment worth keeping.', image: images.memories },
  { title: 'Write your autograph', text: '“Stay curious, stay kind, and keep making room for new ideas.” — Class X', image: images.messages },
  { title: 'Our shared campus', text: 'The places we pass each day become landmarks when we fill them with friendship.', image: images.creative },
  { title: 'Until the next chapter', text: 'May the memories of this year travel with every student into the adventures ahead.', image: images.achievements },
];
