import { FormEvent, useState } from 'react';
import { ArrowLeft, Check, Send } from 'lucide-react';

type BoardMember = {
  name: string;
  role: string;
  image: string;
};

const boardMembers: BoardMember[] = [
  { name: 'Prof Ramachandran', role: 'Chief Editor', image: '/assets/IMG_1768.jpeg' },
  { name: 'Sajan Jose', role: 'Staff Editor', image: '/assets/IMG_1769.jpeg' },
  { name: 'Vidya Mohan', role: 'Student Editor', image: '/assets/IMG_1770.jpeg' },
  { name: 'Deepa Raj', role: 'Member', image: '/assets/IMG_1771.jpeg' },
];

function EditorialNote() {
  return <article className="editorial-note"><p className="editorial-eyebrow">Editorial</p><h1>A Journey of Learning, Creativity, and Excellence</h1><div className="editorial-note-copy"><p>Welcome to another edition of the Crescent Public School Magazine!</p><p>A school magazine is more than just a collection of articles—it is a reflection of the vibrant spirit, creativity, and achievements of our school community. It captures the thoughts, talents, and aspirations of our students while celebrating the dedication of our teachers and the unwavering support of our parents.</p><p>Education is not only about academic success; it is about nurturing character, curiosity, compassion, and confidence. Every classroom lesson, every cultural event, every sports competition, and every creative endeavor contributes to shaping responsible citizens and future leaders. This magazine stands as a testament to those experiences and accomplishments.</p><p>Within these pages, you will discover inspiring stories, thoughtful articles, beautiful poems, artistic creations, scientific explorations, and memorable moments from our school life. Each contribution reflects the imagination, hard work, and unique voice of our students. We encourage every learner to continue expressing their ideas with confidence and creativity.</p><p>We extend our heartfelt appreciation to the editorial team, teachers, students, and parents whose enthusiasm and support have made this publication possible. Their dedication has transformed countless ideas into a meaningful collection that will inspire readers today and serve as cherished memories for years to come.</p><p>As you explore this edition, we hope you find knowledge to enrich your mind, stories to touch your heart, and inspiration to pursue your dreams with determination and integrity.</p><p>Let this magazine remind us that learning is a lifelong journey, and every small step we take today shapes a brighter tomorrow.</p><p>Happy Reading!</p><p className="editorial-signature">Editorial Board<br />Crescent Public School<br />“Inspiring Minds. Shaping Futures.”</p></div></article>;
}

function SubscriptionBanner() {
  const [email, setEmail] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (email.trim() && agreed) setSubmitted(true);
  };

  return <section className="editorial-subscribe"><div><p className="editorial-subscribe-eyebrow">Stay connected</p><h2>Subscribe For Latest Updates !</h2><p>Stay connected with the latest school magazine articles, creative stories, and student achievements delivered right to your inbox.</p></div><form onSubmit={handleSubmit}><div className="editorial-subscribe-row"><input type="email" value={email} onChange={event => { setEmail(event.target.value); setSubmitted(false); }} placeholder="Your Email Address" aria-label="Your Email Address" required /><button type="submit">Subscribe <Send size={15} /></button></div><label><input type="checkbox" checked={agreed} onChange={event => { setAgreed(event.target.checked); setSubmitted(false); }} /> <span>I have read and agree to the terms and conditions.</span></label>{submitted && <p className="editorial-subscribe-success"><Check size={15} /> Thank you for subscribing.</p>}</form></section>;
}

export default function EditorialDesk() {
  return <main className="page-shell school-section-page editorial-page"><button className="back-link editorial-back-link" onClick={() => window.history.back()}><ArrowLeft size={16} /> Back to Contents</button><EditorialNote /><section className="editorial-board"><p className="editorial-eyebrow">The people behind this edition</p><h2>Editorial Board</h2><div className="editorial-board-list">{boardMembers.map(member => <article className="editorial-member-card" key={member.name}><img src={member.image} alt={member.name} /><div><h3>{member.name}</h3><p>{member.role}</p></div></article>)}</div></section><SubscriptionBanner /></main>;
}
