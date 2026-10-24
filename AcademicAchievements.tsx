import { type FormEvent, useState } from 'react';
import { ArrowLeft, Check, Send } from 'lucide-react';

function AchievementSubscription() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (email.trim()) setSubmitted(true);
  };

  return <section className="achievement-subscribe"><div><p className="achievement-subscribe-label">Stay connected</p><h2>Subscribe For Latest Updates !</h2><p>Stay connected with the latest school magazine articles, creative stories, and student achievements delivered right to your inbox.</p></div><form onSubmit={handleSubmit}><div className="achievement-subscribe-row"><input type="email" value={email} onChange={event => { setEmail(event.target.value); setSubmitted(false); }} placeholder="Your Email Address" aria-label="Your Email Address" required /><button type="submit">Subscribe <Send size={15} /></button></div>{submitted && <p className="achievement-subscribe-success"><Check size={15} /> Thank you for subscribing.</p>}</form></section>;
}

export default function AcademicAchievements() {
  return <main className="page-shell school-section-page achievement-page"><button className="back-link achievement-back-link" onClick={() => window.history.back()}><ArrowLeft size={16} /> Back to Contents</button><article className="achievement-content"><h1>ACHIEVEMENTS</h1><img className="achievement-image" src="/assets/IMG_1778.jpeg" alt="Students celebrating an academic achievement" /><div className="achievement-message"><p className="achievement-school-tag">YAMS CBSE School</p><h2>ACADEMIC ACHIEVEMENTS</h2><p className="achievement-tagline">Excellence Through Learning</p><div className="achievement-copy"><p>At YAMS CBSE School, academic excellence is a reflection of our students' dedication, our teachers' commitment, and our continuous pursuit of quality education.</p><p>Our students are encouraged to develop critical thinking, creativity, and a passion for lifelong learning. Through engaging classroom activities, collaborative learning, and dedicated guidance from our teachers, we strive to help every student reach their full potential.</p><p>We take pride in the enthusiasm and hard work of our students and appreciate the valuable support of our teachers and parents in their academic journey.</p><p>Every achievement is a step towards a brighter future!</p><p className="achievement-signoff">YAMS CBSE School</p></div></div><AchievementSubscription /></article></main>;
}
