import { type FormEvent, useState } from 'react';
import { ArrowLeft, Check, Send } from 'lucide-react';

function AboutSubscription() {
  const [email, setEmail] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (email.trim() && agreed) setSubmitted(true);
  };

  return <section className="about-subscribe"><div><h2>Subscribe for latest update</h2><p>Stay connected with the latest school magazine articles, creative stories, and student achievements delivered right to your inbox.</p></div><form onSubmit={handleSubmit}><div className="about-subscribe-row"><input type="email" value={email} onChange={event => { setEmail(event.target.value); setSubmitted(false); }} placeholder="Your Email Address" aria-label="Your Email Address" required /><button type="submit">Subscribe <Send size={15} /></button></div><label><input type="checkbox" checked={agreed} onChange={event => { setAgreed(event.target.checked); setSubmitted(false); }} /> <span>I have read and agree to the terms and conditions.</span></label>{submitted && <p className="about-subscribe-success"><Check size={15} /> Thank you for subscribing.</p>}</form></section>;
}

export default function AboutSchool() {
  return <main className="page-shell school-section-page about-school-page"><button className="back-link about-school-back-link" onClick={() => window.history.back()}><ArrowLeft size={16} /> Back to Contents</button><article className="about-school-content"><h1>Yams cbse,tvm</h1><img className="about-school-image" src="/assets/IMG_1777.jpeg" alt="YAMS CBSE School campus" /><div className="about-school-message"><p className="about-school-eyebrow">ABOUT OUR SCHOOL</p><h2>A Message from the Management</h2><p className="about-school-location">YAMS Trivandrum</p><div className="about-school-copy"><p>At YAMS Trivandrum, we believe that education is the foundation of a bright future. Our vision is to provide quality education, encourage creativity, and develop confidence, discipline, and strong values among students.</p><p>As we celebrate 15 years of our journey, we remain committed to creating a positive learning environment where every child can discover their talents and achieve their dreams.</p><p>We thank our teachers, parents, and students for being an important part of our journey.</p><p className="about-school-signoff">Mr. Bijoy<br />Manager</p></div></div><AboutSubscription /></article></main>;
}
