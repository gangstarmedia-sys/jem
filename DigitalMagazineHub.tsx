import { useEffect, useMemo, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Camera,
  ChevronLeft,
  ChevronRight,
  CircleUserRound,
  Expand,
  Feather,
  Image,
  Lightbulb,
  Printer,
  Sparkles,
  Trophy,
  X,
} from 'lucide-react';
import { magazineEntries, magazineSections, memoryPages, type MagazineEntry, type MagazineHubSection } from '@/data/magazineData';

type Icon = typeof BookOpen;

const sectionIcons: Record<MagazineHubSection['icon'], Icon> = {
  messages: CircleUserRound,
  literary: Feather,
  creative: Lightbulb,
  achievements: Trophy,
  memories: Camera,
};

function entryLanguageClass(language: MagazineEntry['language']): string {
  return `digital-entry-card language-${language.toLowerCase()}`;
}

function ReaderModal({ entry, onClose }: { entry: MagazineEntry; onClose: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  return <div className="digital-reader-backdrop" role="dialog" aria-modal="true" aria-label={`${entry.title} reader`} onClick={onClose}>
    <article className="digital-reader" onClick={event => event.stopPropagation()} onScroll={event => { const element = event.currentTarget; const scrollable = element.scrollHeight - element.clientHeight; setProgress(scrollable > 0 ? Math.min(100, Math.round((element.scrollTop / scrollable) * 100)) : 100); }}>
      <div className="digital-reader-progress"><span style={{ width: `${progress}%` }} /></div>
      <div className="digital-reader-toolbar"><span>{entry.language} · {entry.readTime}</span><div><button onClick={() => window.print()} aria-label="Print article"><Printer size={17} /></button><button onClick={onClose} aria-label="Close reader"><X size={20} /></button></div></div>
      <div className="digital-reader-heading"><span className="digital-category-badge">{entry.category}</span><h2>{entry.title}</h2><p>{entry.student} · {entry.className}</p></div>
      <div className={`digital-reader-copy language-${entry.language.toLowerCase()}`}>
        {entry.content.split('\n\n').map(paragraph => <p key={paragraph}>{paragraph}</p>)}
      </div>
    </article>
  </div>;
}

function Flipbook() {
  const [page, setPage] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);
  const [turning, setTurning] = useState(false);
  const current = memoryPages[page];
  const next = memoryPages[(page + 1) % memoryPages.length];

  const turnPage = (direction: 1 | -1): void => {
    if (turning) return;
    setTurning(true);
    window.setTimeout(() => {
      setPage(index => (index + direction + memoryPages.length) % memoryPages.length);
      setTurning(false);
    }, 260);
  };

  return <div className={`digital-flipbook ${fullscreen ? 'is-fullscreen' : ''}`}>
    <div className="digital-flipbook-toolbar"><span><BookOpen size={16} /> Memory book</span><button onClick={() => setFullscreen(value => !value)}><Expand size={15} /> {fullscreen ? 'Exit fullscreen' : 'Fullscreen preview'}</button></div>
    <div className={`digital-book ${turning ? 'is-turning' : ''}`}>
      <div className="digital-book-page digital-book-left"><img src={current.image} alt="School memory" /><div><span>YAMS CBSE HSS, TVM</span><h3>{current.title}</h3><p>{current.text}</p></div></div>
      <div className="digital-book-page digital-book-right"><img src={next.image} alt="School community memory" /><div><span>Annual Magazine · 2026</span><h3>{next.title}</h3><p>{next.text}</p></div></div>
    </div>
    <div className="digital-flipbook-controls"><button onClick={() => turnPage(-1)} aria-label="Previous memory"><ChevronLeft size={18} /></button><span>{page + 1} / {memoryPages.length}</span><button onClick={() => turnPage(1)} aria-label="Next memory"><ChevronRight size={18} /></button></div>
  </div>;
}

function SectionCard({ section, onOpen }: { section: MagazineHubSection; onOpen: (section: MagazineHubSection) => void }) {
  const Icon = sectionIcons[section.icon];
  return <button className="digital-section-card" onClick={() => onOpen(section)}><div className="digital-section-image"><img src={section.image} alt="" /><span><Icon size={20} /></span></div><div className="digital-section-copy"><h2>{section.title}</h2><p>{section.description}</p><strong>{section.icon === 'memories' ? 'Open memory book' : `${section.entries.length} featured pieces`} <ArrowRight size={15} /></strong></div></button>;
}

function EntryCard({ entry, onRead }: { entry: MagazineEntry; onRead: (entry: MagazineEntry) => void }) {
  return <article className={entryLanguageClass(entry.language)}><div className="digital-entry-image"><img src={entry.image} alt="" /></div><div className="digital-entry-copy"><div className="digital-entry-meta"><span className="digital-category-badge">{entry.category}</span><span>{entry.readTime}</span></div><h3>{entry.title}</h3><p>{entry.excerpt}</p><footer><span>{entry.student} · {entry.className}</span><button onClick={() => onRead(entry)}>Read piece <ArrowRight size={14} /></button></footer></div></article>;
}

export default function DigitalMagazineHub() {
  const [selectedEntry, setSelectedEntry] = useState<MagazineEntry | null>(null);
  const [activeSection, setActiveSection] = useState<MagazineHubSection | null>(null);
  const featuredEntries = useMemo(() => magazineEntries.slice(0, 6), []);

  return <main className="digital-magazine-page">
    <section className="digital-magazine-hero"><div><button className="digital-back-link" onClick={() => window.history.back()}><ArrowLeft size={16} /> Back</button><p className="digital-eyebrow">Annual digital magazine · 2026</p><h1>YAMS CBSE HSS, TVM <em>Annual Digital Magazine</em></h1><p>Voices, ideas, artwork, achievements, and memories from a year of learning together.</p><div className="digital-hero-actions"><a href="#digital-sections">Explore the issue <ArrowRight size={16} /></a><span><Sparkles size={15} /> Academic year 2026</span></div></div><div className="digital-hero-mark"><Image size={34} /><span>ISSUE<br /><strong>01</strong></span></div></section>
    <section className="digital-hub-section" id="digital-sections"><div className="digital-section-heading"><p className="digital-eyebrow">Inside this issue</p><h2>Five ways to explore our year</h2><p>Choose a chapter, meet the voices behind it, and discover the moments that made this school year memorable.</p></div><div className="digital-section-grid">{magazineSections.map(section => <SectionCard key={section.title} section={section} onOpen={selectedSection => selectedSection.icon === 'memories' ? document.getElementById('digital-memories')?.scrollIntoView({ behavior: 'smooth' }) : setActiveSection(selectedSection)} />)}</div></section>
    <section className="digital-hub-section digital-featured-section"><div className="digital-section-heading"><p className="digital-eyebrow">Editor’s selection</p><h2>Read, reflect, remember</h2><p>Short pieces selected by the editorial board for a closer read.</p></div><div className="digital-entry-grid">{featuredEntries.map(entry => <EntryCard key={entry.id} entry={entry} onRead={setSelectedEntry} />)}</div></section>
    <section className="digital-memory-section" id="digital-memories"><div><p className="digital-eyebrow">Interactive memories</p><h2>Turn the pages of our autograph book.</h2><p>Move through shared photographs, handwritten wishes, and the small moments that stay with us.</p></div><Flipbook /></section>
    {activeSection && activeSection.icon !== 'memories' && <div className="digital-section-modal" role="dialog" aria-modal="true" onClick={() => setActiveSection(null)}><div className="digital-section-modal-card" onClick={event => event.stopPropagation()}><button className="digital-modal-close" onClick={() => setActiveSection(null)} aria-label="Close section"><X /></button><p className="digital-eyebrow">{activeSection.title}</p><h2>Featured in this chapter</h2><div className="digital-modal-entry-list">{activeSection.entries.map(entry => <button key={entry.id} onClick={() => { setSelectedEntry(entry); setActiveSection(null); }}><span>{entry.language}</span><strong>{entry.title}</strong><small>{entry.student} · {entry.className}</small><ArrowRight size={16} /></button>)}</div></div></div>}
    {selectedEntry && <ReaderModal entry={selectedEntry} onClose={() => setSelectedEntry(null)} />}
  </main>;
}
