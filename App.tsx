import { useEffect, useMemo, useState } from 'react';
import DigitalMagazineHub from '@/components/DigitalMagazineHub';
import AboutSchool from '@/components/AboutSchool';
import AcademicAchievements from '@/components/AcademicAchievements';
import EditorialDesk from '@/components/EditorialDesk';
import PrincipalMessage from '@/components/PrincipalMessage';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Building2,
  Camera,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CircleUserRound,
  Diamond,
  Feather,
  GraduationCap,
  Lightbulb,
  Menu,
  Newspaper,
  PenLine,
  Quote,
  Sparkles,
  Trophy,
  X,
} from 'lucide-react';

type Icon = typeof BookOpen;
type Photo = { src: string; alt: string; caption: string };
type Album = { slug: string; title: string; count: number; description: string; cover: string; icon: Icon; photos: Photo[] };

const photos = {
  classroom: [
    ['https://images.unsplash.com/photo-1578574577315-3fbeb0cecdc2?auto=format&fit=crop&w=1200&q=85', 'A student proudly shares a classroom drawing', 'Ideas take shape in our creative classrooms.'],
    ['https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=85', 'Students focused on a classroom activity', 'Learning together, one discovery at a time.'],
    ['https://images.unsplash.com/photo-1611441176369-b6c14e67a8b7?auto=format&fit=crop&w=1200&q=85', 'Students collaborating during a lesson', 'Curiosity grows when we learn as a team.'],
  ],
  sports: [
    ['https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1200&q=85', 'Students playing football outdoors', 'Teamwork and determination on the field.'],
    ['https://images.pexels.com/photos/17113537/pexels-photo-17113537.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 'Students running together outside', 'Every step is a celebration of movement.'],
    ['https://images.pexels.com/photos/8927017/pexels-photo-8927017.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 'Children enjoying an outdoor school activity', 'Energy, joy, and a little friendly competition.'],
  ],
  arts: [
    ['https://images.unsplash.com/photo-1661199279554-4f8fefaff032?auto=format&fit=crop&w=1200&q=85', 'Students performing at a school ceremony', 'Our stage is a place for every voice.'],
    ['https://images.pexels.com/photos/12374479/pexels-photo-12374479.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 'Children performing a traditional dance', 'Celebrating the stories that connect us.'],
    ['https://images.pexels.com/photos/7320101/pexels-photo-7320101.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 'Young dancers standing together', 'Confidence shines through creative expression.'],
  ],
} as const;

const makePhotos = (items: readonly (readonly [string, string, string])[]): Photo[] => items.map(([src, alt, caption]) => ({ src, alt, caption }));

const albums: Album[] = [
  { slug: 'school-life', title: 'School Life', count: 18, description: 'The everyday moments that make our school special.', cover: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=85', icon: GraduationCap, photos: makePhotos([...photos.classroom, ...photos.sports]) },
  { slug: 'annual-day', title: 'Annual Day', count: 24, description: 'A celebration of talent, togetherness, and achievement.', cover: 'https://images.pexels.com/photos/12374479/pexels-photo-12374479.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', icon: Sparkles, photos: makePhotos([...photos.arts, ...photos.classroom]) },
  { slug: 'sports-day', title: 'Sports Day', count: 21, description: 'Victory through teamwork, spirit, and joyful effort.', cover: 'https://images.pexels.com/photos/17113537/pexels-photo-17113537.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', icon: Trophy, photos: makePhotos([...photos.sports, ...photos.classroom]) },
  { slug: 'arts-and-cultural-activities', title: 'Arts and Cultural Activities', count: 16, description: 'Creative expression inspired by our rich community.', cover: 'https://images.unsplash.com/photo-1661199279554-4f8fefaff032?auto=format&fit=crop&w=1200&q=85', icon: Feather, photos: makePhotos([...photos.arts, ...photos.sports]) },
  { slug: 'classroom-activities', title: 'Classroom Activities', count: 20, description: 'Learning becomes memorable when we explore together.', cover: 'https://images.unsplash.com/photo-1578574577315-3fbeb0cecdc2?auto=format&fit=crop&w=1200&q=85', icon: Lightbulb, photos: makePhotos([...photos.classroom, ...photos.arts]) },
  { slug: 'school-celebrations', title: 'School Celebrations', count: 14, description: 'Bright occasions, shared memories, and proud moments.', cover: 'https://images.pexels.com/photos/7320101/pexels-photo-7320101.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', icon: Diamond, photos: makePhotos([...photos.arts, ...photos.sports]) },
];

const photoHighlights = [
  { album: 'school-life', title: 'Learning together', caption: 'Curiosity grows in every classroom.', src: 'https://images.unsplash.com/photo-1578574577315-3fbeb0cecdc2?auto=format&fit=crop&w=1200&q=85', alt: 'Students learning together in a classroom' },
  { album: 'sports-day', title: 'Team spirit', caption: 'Every step is a celebration.', src: 'https://images.unsplash.com/photo-1611441176369-b6c14e67a8b7?auto=format&fit=crop&w=1200&q=85', alt: 'Students taking part in a school activity outdoors' },
  { album: 'arts-and-cultural-activities', title: 'Creative expression', caption: 'Our stage is a place for every voice.', src: 'https://images.unsplash.com/photo-1661199279554-4f8fefaff032?auto=format&fit=crop&w=1200&q=85', alt: 'Students participating in a creative school activity' },
  { album: 'annual-day', title: 'Proud moments', caption: 'Celebrating talent and togetherness.', src: 'https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?auto=format&fit=crop&w=1200&q=85', alt: 'Students celebrating together at school' },
];

const contentCards = [
  { slug: 'editorial-desk', title: 'Editorial Desk', subtitle: 'Thoughts that inspire and guide.', icon: PenLine },
  { slug: 'principals-message', title: "Principal's Message", subtitle: 'Leadership with vision and values.', icon: CircleUserRound },
  { slug: 'about-school', title: 'About School', subtitle: 'Our history, mission and journey.', icon: Building2 },
  { slug: 'school-news', title: 'School News', subtitle: 'Latest events and announcements.', icon: Newspaper },
  { slug: 'achievements', title: 'Achievements', subtitle: 'Celebrating excellence.', icon: Diamond },
  { slug: 'upcoming-events', title: 'Upcoming Events', subtitle: 'What is happening next on campus.', icon: Sparkles },
  { slug: 'short-stories', title: 'Short Stories', subtitle: 'Creative writing by students.', icon: BookOpen },
  { slug: 'poems', title: 'Poems', subtitle: 'Verses from young minds.', icon: Feather },
  { slug: 'student-artworks', title: 'Student Artworks', subtitle: 'A gallery of imagination and craft.', icon: Camera },
  { slug: 'science-technology', title: 'Science & Technology', subtitle: 'Innovation and discovery.', icon: Lightbulb },
  { slug: 'environment-club', title: 'Environment Club', subtitle: 'Caring for nature.', icon: Sparkles },
  { slug: 'sports-desk', title: 'Sports Desk', subtitle: 'Victory through teamwork.', icon: Trophy },
  { slug: 'alumni-network', title: 'Alumni Network', subtitle: 'Stories from our proud alumni.', icon: GraduationCap },
  { slug: 'gallery', title: 'Gallery', subtitle: 'Memories captured forever.', icon: Camera },
];

type SectionItem = { title: string; meta: string; text: string; image: string; alt: string };
type SchoolSection = { eyebrow: string; title: string; intro: string; image: string; imageAlt: string; items: SectionItem[] };

const sectionImages = {
  classroom: 'https://images.unsplash.com/photo-1578574577315-3fbeb0cecdc2?auto=format&fit=crop&w=1200&q=85',
  learning: 'https://images.pexels.com/photos/8617765/pexels-photo-8617765.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  students: 'https://images.pexels.com/photos/37898351/pexels-photo-37898351.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  sport: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1200&q=85',
  arts: 'https://images.unsplash.com/photo-1661199279554-4f8fefaff032?auto=format&fit=crop&w=1200&q=85',
  campus: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=85',
  science: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=85',
  nature: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=85',
  books: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1200&q=85',
  campus2: 'https://images.pexels.com/photos/2982449/pexels-photo-2982449.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  sport2: 'https://images.pexels.com/photos/8927012/pexels-photo-8927012.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  science2: 'https://images.pexels.com/photos/8471913/pexels-photo-8471913.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  nature2: 'https://images.pexels.com/photos/16682136/pexels-photo-16682136.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  arts2: 'https://images.pexels.com/photos/17222509/pexels-photo-17222509.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  books2: 'https://images.pexels.com/photos/38323235/pexels-photo-38323235.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
};

const sectionDetails: Record<string, SchoolSection> = {
  'editorial-desk': { eyebrow: 'About & Leadership', title: 'Editorial Desk', intro: 'A thoughtful collection of reflections, questions, and ideas from the people who make YAMS CBSE HSS, TVM a place of possibility.', image: sectionImages.books, imageAlt: 'Books arranged on a library shelf', items: [
    { title: 'The year we learned to wonder', meta: 'Editor’s note · 5 min read', text: 'This edition celebrates the questions behind every project, performance, friendship, and discovery.', image: sectionImages.classroom, alt: 'Students learning together in a classroom' },
    { title: 'Small voices, big ideas', meta: 'Student editorial · 3 min read', text: 'Our student writers share how curiosity turns an ordinary school day into something memorable.', image: sectionImages.learning, alt: 'Students engaged in a lesson' },
  ] },
  'principals-message': { eyebrow: 'About & Leadership', title: "Principal's Message", intro: 'Leadership with vision and values, rooted in kindness, courage, and a belief in every learner’s potential.', image: sectionImages.campus, imageAlt: 'Modern school campus building', items: [
    { title: 'A message for our community', meta: 'Dr. Ananya Rao · Principal', text: 'When children feel seen, they find the confidence to ask better questions and make a meaningful contribution.', image: sectionImages.campus2, alt: 'School campus viewed from outside' },
    { title: 'Learning beyond the timetable', meta: 'Leadership note', text: 'Clubs, teams, assemblies, and friendships are part of the education that stays with us for life.', image: sectionImages.students, alt: 'Students gathered outdoors' },
  ] },
  'about-school': { eyebrow: 'About & Leadership', title: 'About School', intro: 'YAMS CBSE HSS, TVM brings together rigorous learning, creative expression, and a warm community spirit.', image: sectionImages.campus2, imageAlt: 'School campus with landscaped grounds', items: [
    { title: 'Our story', meta: 'Since 1998', text: 'From a small group of eager learners to a thriving school community, YAMS CBSE HSS, TVM has grown without losing its personal touch.', image: sectionImages.campus, alt: 'School building and campus grounds' },
    { title: 'Our learning promise', meta: 'Mission and values', text: 'We help students become thoughtful, capable people who are ready to contribute with empathy and imagination.', image: sectionImages.learning, alt: 'Students engaged in a lesson' },
  ] },
  'school-news': { eyebrow: 'Campus Updates', title: 'School News', intro: 'The latest events, classroom discoveries, and community updates from across our campus.', image: sectionImages.students, imageAlt: 'Students enjoying time together', items: [
    { title: 'YAMS CBSE HSS, TVM hosts Community Reading Week', meta: '12 October 2026', text: 'Students, families, and teachers shared favourite books and stories across a week of reading circles.', image: sectionImages.books2, alt: 'Open books ready for a reading session' },
    { title: 'Young inventors present their ideas', meta: '28 September 2026', text: 'The innovation hall filled with models, questions, and practical solutions to everyday challenges.', image: sectionImages.science2, alt: 'Science laboratory equipment' },
  ] },
  achievements: { eyebrow: 'Campus Updates', title: 'Achievements', intro: 'Celebrating excellence in learning, leadership, service, creativity, and sport.', image: sectionImages.students, imageAlt: 'Students celebrating an achievement', items: [
    { title: 'Inter-school quiz finalists', meta: 'Academic achievement', text: 'Our senior team reached the regional final after a season of careful research and confident teamwork.', image: sectionImages.learning, alt: 'Students concentrating during a learning activity' },
    { title: 'A season of personal bests', meta: 'Sports achievement', text: 'The athletics squad returned with new personal bests and a renewed love of practice.', image: sectionImages.sport2, alt: 'Students taking part in sports' },
  ] },
  'upcoming-events': { eyebrow: 'Campus Updates', title: 'Upcoming Events', intro: 'Save the dates for the conversations, celebrations, and opportunities coming up this term.', image: sectionImages.arts2, imageAlt: 'Students performing at a school event', items: [
    { title: 'Founders’ Day Showcase', meta: '18 November 2026 · Main Hall', text: 'An evening of music, theatre, visual art, and student-led storytelling for families and friends.', image: sectionImages.arts, alt: 'Students performing on stage' },
    { title: 'Winter Science Fair', meta: '4 December 2026 · Innovation Lab', text: 'Explore student-built experiments and demonstrations from across the school.', image: sectionImages.science, alt: 'Science experiment materials' },
  ] },
  'short-stories': { eyebrow: 'Creative Corner', title: 'Short Stories', intro: 'Fiction, memory, and imagination from the writers of YAMS CBSE HSS, TVM.', image: sectionImages.books, imageAlt: 'Stack of books for creative inspiration', items: [
    { title: 'The Map in the Margins', meta: 'By Meera, Class VIII', text: 'A folded library map leads two friends to a forgotten corner of the school and an unexpected act of kindness.', image: sectionImages.campus, alt: 'School corridor and campus architecture' },
    { title: 'The Last Blue Kite', meta: 'By Aarav, Class VI', text: 'A windy afternoon becomes a lesson in patience, friendship, and knowing when to let something fly.', image: sectionImages.nature, alt: 'Green trees in a bright outdoor setting' },
  ] },
  poems: { eyebrow: 'Creative Corner', title: 'Poems', intro: 'Verses from young minds, noticing the world with freshness, rhythm, and feeling.', image: sectionImages.nature, imageAlt: 'Sunlight through green leaves', items: [
    { title: 'After the Rain', meta: 'By Isha, Class VII', text: 'Puddles hold the sky / the playground starts to shine / and every shoe remembers / the music of the rain.', image: sectionImages.nature2, alt: 'Sunlight shining through trees' },
    { title: 'The Bell', meta: 'By Kabir, Class V', text: 'One bright note / and a hundred stories begin / down corridors of light / where the day is waiting.', image: sectionImages.campus2, alt: 'School building details' },
  ] },
  'student-artworks': { eyebrow: 'Creative Corner', title: 'Student Artworks', intro: 'A colourful selection of drawings, paintings, sculpture, and design from our young artists.', image: sectionImages.arts, imageAlt: 'Students participating in a creative activity', items: [
    { title: 'Colour, line, and movement', meta: 'Visual arts studio', text: 'A collection of expressive studies inspired by music, nature, and the movement of people through a busy day.', image: sectionImages.arts2, alt: 'Students presenting creative work' },
    { title: 'Designing a kinder campus', meta: 'Design challenge', text: 'Students imagined welcoming, sustainable spaces that help everyone feel that they belong.', image: sectionImages.campus2, alt: 'School campus architecture' },
  ] },
  'science-technology': { eyebrow: 'Features & Specials', title: 'Science & Technology', intro: 'Innovation and discovery from the lab, the makerspace, and the curious minds of YAMS CBSE HSS, TVM.', image: sectionImages.science, imageAlt: 'Scientific equipment in a laboratory', items: [
    { title: 'The makerspace is open', meta: 'Innovation Lab · Feature', text: 'From simple circuits to prototypes made from recycled materials, students are learning by building and testing.', image: sectionImages.science2, alt: 'Laboratory glassware and equipment' },
    { title: 'Questions worth investigating', meta: 'Student research', text: 'Our young researchers explore water, energy, and the everyday science hiding in plain sight.', image: sectionImages.learning, alt: 'Students working together on a project' },
  ] },
  'environment-club': { eyebrow: 'Features & Specials', title: 'Environment Club', intro: 'Caring for nature through practical action, patient observation, and shared responsibility.', image: sectionImages.nature, imageAlt: 'Green trees and sunlight', items: [
    { title: 'Our campus pollinator garden', meta: 'Green campus project', text: 'The club is creating a small habitat for butterflies and bees beside the junior block.', image: sectionImages.nature2, alt: 'Lush green plants outdoors' },
    { title: 'A lighter lunch footprint', meta: 'Student initiative', text: 'Reusable containers and thoughtful food choices are helping us reduce everyday waste.', image: sectionImages.students, alt: 'Students participating in a group activity' },
  ] },
  'sports-desk': { eyebrow: 'Features & Specials', title: 'Sports Desk', intro: 'Victory through teamwork, discipline, and the joy of moving together.', image: sectionImages.sport, imageAlt: 'Players competing on a sports court', items: [
    { title: 'Training with purpose', meta: 'Coach’s notebook', text: 'The season is built on small habits: showing up, encouraging a teammate, and finishing strong.', image: sectionImages.sport2, alt: 'Athletes playing basketball' },
    { title: 'House Cup standings', meta: 'Term two update', text: 'Blue House leads the table, but the spirit award is still wide open after a thrilling week.', image: sectionImages.students, alt: 'Students celebrating outdoors' },
  ] },
  'alumni-network': { eyebrow: 'Features & Specials', title: 'Alumni Network', intro: 'Stories from our proud alumni and the many ways their YAMS CBSE HSS, TVM journeys continue.', image: sectionImages.campus2, imageAlt: 'School campus building', items: [
    { title: 'From school lab to clean energy', meta: 'Alumni spotlight · Class of 2011', text: 'Rohan shares how early experiments at YAMS CBSE HSS, TVM shaped his path into renewable energy research.', image: sectionImages.science2, alt: 'Science equipment in a laboratory' },
    { title: 'Keeping the circle connected', meta: 'Community update', text: 'Former students are returning as mentors, guest speakers, and generous supporters of new ideas.', image: sectionImages.campus, alt: 'School campus and grounds' },
  ] },
  gallery: { eyebrow: 'Media', title: 'Photo Gallery', intro: 'Memories captured across classrooms, sports grounds, performances, and the everyday life of our campus.', image: sectionImages.students, imageAlt: 'Students gathered together on campus', items: [] },
};

function navigate(path: string) {
  window.history.pushState({}, '', path);
  window.dispatchEvent(new PopStateEvent('popstate'));
  const hash = path.split('#')[1];
  window.setTimeout(() => {
    if (hash) {
      document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, 0);
}

function Crest() {
  return <img className="crest crest-image" src="/030bf74b-3a15-414e-a43d-b6b54942cbb2.jpeg" alt="YAMS CBSE HSS, TVM crest" />;
}

function Header({ onMenu }: { onMenu: () => void }) {
  const [open, setOpen] = useState(false);
  return <header className="site-header">
    <div className="header-inner">
      <button className="brand" onClick={() => navigate('/')} aria-label="YAMS CBSE HSS, TVM home"><Crest /><span><strong>YAMS CBSE</strong><b>HSS, TVM</b><em>Inspiring Minds. Shaping Futures.</em></span></button>
      <button className="mobile-menu" onClick={onMenu} aria-label="Open navigation"><Menu size={24} /></button>
      <nav className="desktop-nav" aria-label="Main navigation">
        <button onClick={() => navigate('/')}>Home</button>
        <button onClick={() => navigate('/#contents')}>Contents</button>
        <div className="nav-dropdown"><button onClick={() => setOpen(!open)} aria-expanded={open}>Magazine <ChevronDown size={14} /></button>{open && <div className="dropdown-panel">{albums.map(album => <button key={album.slug} onClick={() => navigate(`/magazine/${album.slug}`)}>{album.title}</button>)}</div>}</div>
        <button onClick={() => navigate('/section/about-school')}>About School</button>
        <button onClick={() => navigate('/#contact')}>Contact</button>
      </nav>
      <button className="header-cta" onClick={() => navigate('/magazine')}>Explore Magazine <ArrowRight size={16} /></button>
    </div>
  </header>;
}

function MobileNav({ onClose }: { onClose: () => void }) {
  return <div className="mobile-nav-backdrop" onClick={onClose}><aside className="mobile-nav" onClick={event => event.stopPropagation()}><div className="mobile-nav-head"><Crest /><button onClick={onClose} aria-label="Close navigation"><X /></button></div><p>Explore our pages of knowledge and imagination.</p><button onClick={() => { navigate('/'); onClose(); }}>Home</button><button onClick={() => { navigate('/#contents'); onClose(); }}>Contents</button><div className="mobile-albums"><span>Magazine Albums</span>{albums.map(album => <button key={album.slug} onClick={() => { navigate(`/magazine/${album.slug}`); onClose(); }}>{album.title}<ArrowRight size={14} /></button>)}</div><div className="mobile-albums"><span>Sections</span>{contentCards.slice(0, 6).map(card => <button key={card.slug} onClick={() => { navigate(`/section/${card.slug}`); onClose(); }}>{card.title}<ArrowRight size={14} /></button>)}</div><button onClick={() => { navigate('/section/about-school'); onClose(); }}>About School</button><button onClick={() => { navigate('/#contact'); onClose(); }}>Contact</button></aside></div>;
}

function Hero() {
  return <section className="hero">
    <div className="hero-copy"><div className="edition">SCHOOL MAGAZINE <span>2026 EDITION</span></div><p className="eyebrow">Welcome to Our</p><h1>School<br /><strong>Magazine</strong></h1><div className="gold-rule" /><p>A collection of ideas, creativity, achievements<br className="desktop-only" /> and memorable moments that reflect the<br className="desktop-only" /> vibrant spirit of our school community.</p><button className="primary-button" onClick={() => navigate('/magazine')}>Explore the Magazine <ArrowRight size={16} /></button></div>
    <div className="hero-art"><div className="sun" /><div className="school-building"><span>YAMS CBSE HSS, TVM</span><i /><i /><i /></div><div className="students"><div /><div /><div /><div /></div><div className="books"><span /><span /><span /></div></div>
    <button className="hero-scroll" onClick={() => document.getElementById('contents')?.scrollIntoView({ behavior: 'smooth' })} aria-label="Scroll to contents"><ArrowRight /></button>
  </section>;
}

function Contents() {
  return <section className="contents section-shell" id="contents"><div className="section-heading"><div className="heading-icon"><BookOpen /></div><h2>CONTENTS</h2><p>Navigate through the pages of knowledge and imagination</p></div><div className="content-grid">{contentCards.map(card => { const Icon = card.icon; return <article className="content-card" key={card.title}><Icon className="card-icon" /><h3>{card.title}</h3><p>{card.subtitle}</p><button onClick={() => navigate(`/section/${card.slug}`)}>Read More <ArrowRight size={16} /></button></article>; })}</div></section>;
}

function MagazineLanding() {
  return <main className="page-shell"><div className="page-intro"><button className="back-link" onClick={() => navigate('/')}><ArrowLeft size={16} /> Back to Contents</button><div className="heading-icon"><Camera /></div><p className="eyebrow">A visual collection of our year</p><h1>School Magazine</h1><p>Explore school life through the faces, activities, and celebrations that make YAMS CBSE HSS, TVM a community to remember.</p></div><section className="featured-photos" aria-labelledby="featured-photos-title"><div className="featured-heading"><div><p className="eyebrow">From the year</p><h2 id="featured-photos-title">Featured Moments</h2></div><p>Little moments that tell the bigger story of our school.</p></div><div className="featured-photo-grid">{photoHighlights.map(photo => <button className="featured-photo" key={photo.title} style={{ backgroundImage: `url(${photo.src})` }} aria-label={`${photo.title}: ${photo.alt}`} onClick={() => navigate(`/magazine/${photo.album}`)}><span className="featured-photo-overlay"><strong>{photo.title}</strong><small>{photo.caption}</small><em>View album <ArrowRight size={14} /></em></span></button>)}</div></section><div className="albums-label"><p className="eyebrow">Explore the collection</p><h2>Albums</h2></div><div className="albums-grid">{albums.map(album => <AlbumCard album={album} key={album.slug} />)}</div></main>;
}

function SectionPage({ slug, section }: { slug: string; section: SchoolSection }) {
  if (slug === 'editorial-desk') return <EditorialDesk />;
  if (slug === 'principals-message') return <PrincipalMessage />;
  if (slug === 'about-school') return <AboutSchool />;
  if (slug === 'achievements') return <AcademicAchievements />;
  return <StandardSectionPage slug={slug} section={section} />;
}

function StandardSectionPage({ slug, section }: { slug: string; section: SchoolSection }) {
  const [selected, setSelected] = useState<number | null>(null);
  const isGallery = slug === 'gallery';
  const galleryPhotos: Photo[] = [
    ...photos.classroom.map(([src, alt, caption]) => ({ src, alt, caption })),
    ...photos.sports.map(([src, alt, caption]) => ({ src, alt, caption })),
    ...photos.arts.map(([src, alt, caption]) => ({ src, alt, caption })),
  ];
  const items = isGallery ? galleryPhotos.map((photo, index) => ({ title: `Campus moment ${index + 1}`, meta: 'School Magazine gallery', text: photo.caption, image: photo.src, alt: photo.alt })) : section.items;
  return <main className="page-shell school-section-page"><div className="section-hero"><div><button className="back-link" onClick={() => navigate('/#contents')}><ArrowLeft size={16} /> Back to Contents</button><p className="eyebrow">{section.eyebrow}</p><h1>{section.title}</h1><p>{section.intro}</p></div><img src={section.image} alt={section.imageAlt} /></div><div className={isGallery ? 'section-gallery-grid' : 'story-grid'}>{items.map((item, index) => <article className={isGallery ? 'section-photo-card' : 'story-card'} key={`${item.title}-${index}`}><button onClick={() => isGallery ? setSelected(index) : undefined} className={isGallery ? 'section-photo-button' : 'story-image-button'}><img src={item.image} alt={item.alt} /><span className="story-image-shade" /></button><div className="story-card-copy"><span className="story-meta">{item.meta}</span><h2>{item.title}</h2><p>{item.text}</p>{!isGallery && <button className="text-link" onClick={() => navigate('/magazine')}>Explore related photographs <ArrowRight size={15} /></button>}</div></article>)}</div>{selected !== null && <Lightbox photos={galleryPhotos} selected={selected} onClose={() => setSelected(null)} onChange={setSelected} />}</main>;
}

function AlbumCard({ album }: { album: Album }) { const Icon = album.icon; return <article className="album-card" onClick={() => navigate(`/magazine/${album.slug}`)} tabIndex={0} onKeyDown={event => { if (event.key === 'Enter') navigate(`/magazine/${album.slug}`); }}><div className="album-cover"><img src={album.cover} alt={`${album.title} album cover`} /><div className="album-badge"><Icon size={18} /> {album.count} photographs</div></div><div className="album-card-body"><div><h2>{album.title}</h2><p>{album.description}</p></div><button onClick={event => { event.stopPropagation(); navigate(`/magazine/${album.slug}`); }}>View Album <ArrowRight size={16} /></button></div></article>; }

function Lightbox({ photos: galleryPhotos, selected, onClose, onChange }: { photos: Photo[]; selected: number; onClose: () => void; onChange: (index: number) => void }) {
  useEffect(() => { const keyHandler = (event: KeyboardEvent) => { if (event.key === 'Escape') onClose(); if (event.key === 'ArrowRight') onChange((selected + 1) % galleryPhotos.length); if (event.key === 'ArrowLeft') onChange((selected - 1 + galleryPhotos.length) % galleryPhotos.length); }; window.addEventListener('keydown', keyHandler); document.body.style.overflow = 'hidden'; return () => { window.removeEventListener('keydown', keyHandler); document.body.style.overflow = ''; }; }, [galleryPhotos.length, onChange, onClose, selected]);
  const photo = galleryPhotos[selected];
  return <div className="lightbox" role="dialog" aria-modal="true" aria-label="Photo viewer" onClick={onClose}><button className="lightbox-close" onClick={onClose} aria-label="Close photo viewer"><X /></button><button className="lightbox-arrow left" onClick={event => { event.stopPropagation(); onChange((selected - 1 + galleryPhotos.length) % galleryPhotos.length); }} aria-label="Previous photo"><ChevronLeft /></button><div className="lightbox-content" onClick={event => event.stopPropagation()}><img src={photo.src} alt={photo.alt} /><p>{photo.caption}</p><span>{selected + 1} / {galleryPhotos.length}</span></div><button className="lightbox-arrow right" onClick={event => { event.stopPropagation(); onChange((selected + 1) % galleryPhotos.length); }} aria-label="Next photo"><ChevronRight /></button></div>;
}

function AlbumGallery({ album }: { album: Album }) {
  const [selected, setSelected] = useState<number | null>(null);
  const AlbumIcon = album.icon;
  return <main className="page-shell gallery-page"><div className="page-intro gallery-intro"><button className="back-link" onClick={() => navigate('/magazine')}><ArrowLeft size={16} /> Back to Albums</button><div className="heading-icon"><AlbumIcon /></div><p className="eyebrow">School Magazine / Albums</p><h1>{album.title}</h1><p>{album.description}</p></div><div className="gallery-grid">{album.photos.map((photo, index) => <button className="gallery-item" key={`${photo.src}-${index}`} onClick={() => setSelected(index)}><img src={photo.src} alt={photo.alt} /><span>{photo.caption}</span></button>)}</div>{selected !== null && <Lightbox photos={album.photos} selected={selected} onClose={() => setSelected(null)} onChange={setSelected} />}</main>;
}

function Footer() { return <footer className="site-footer" id="contact"><div><Crest /><h2>YAMS CBSE<br /><span>HSS, TVM</span></h2><p>Inspiring minds. Shaping futures.</p></div><div><h3>Explore</h3><button onClick={() => navigate('/#contents')}>Contents</button><button onClick={() => navigate('/magazine')}>School Magazine</button><button onClick={() => navigate('/section/about-school')}>About School</button></div><div><h3>Connect</h3><p>Celebrating learning, creativity<br />and community together.</p><a href="mailto:hello@yamscbsehss.edu">hello@yamscbsehss.edu</a></div><div className="footer-bottom">© 2026 YAMS CBSE HSS, TVM Magazine <span>Made with curiosity and care.</span></div></footer>; }

function Home() { return <><Hero /><Contents /><section className="quote-section"><Quote /><p>“Education is the most powerful weapon which you can use to change the world.”</p><span>— Nelson Mandela</span></section><section className="about-strip" id="about"><div><p className="eyebrow">The YAMS CBSE HSS, TVM spirit</p><h2>Every page holds<br /><em>a story worth sharing.</em></h2></div><p>Our magazine brings together the voices, discoveries, and joyful moments that shape our school community.</p><button className="outline-button" onClick={() => navigate('/magazine')}>Open the gallery <ArrowRight size={16} /></button></section></>; }

function App() {
  const [path, setPath] = useState(window.location.pathname);
  const [mobileMenu, setMobileMenu] = useState(false);
  useEffect(() => { const onPopState = () => setPath(window.location.pathname); window.addEventListener('popstate', onPopState); return () => window.removeEventListener('popstate', onPopState); }, []);
  const album = useMemo(() => albums.find(item => path.startsWith(`/magazine/${item.slug}`)), [path]);
  const sectionMatch = path.match(/^\/section\/([^/]+)$/);
  const section = sectionMatch ? sectionDetails[sectionMatch[1]] : undefined;
  return <><Header onMenu={() => setMobileMenu(true)} />{mobileMenu && <MobileNav onClose={() => setMobileMenu(false)} />}{album ? <AlbumGallery album={album} /> : section && sectionMatch ? <SectionPage slug={sectionMatch[1]} section={section} /> : path === '/digital-magazine' ? <DigitalMagazineHub /> : path === '/magazine' ? <MagazineLanding /> : <Home />}<Footer /></>;
}

export default App;
