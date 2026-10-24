import { type FormEvent, useState } from 'react';
import { ArrowLeft, Check, Send } from 'lucide-react';

function PrincipalSubscription() {
  const [email, setEmail] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (email.trim() && agreed) setSubmitted(true);
  };

  return <section className="principal-subscribe"><div><h2>Subscribe For Latest Updates !</h2><p>Stay connected with the latest school magazine articles, creative stories, and student achievements delivered right to your inbox.</p></div><form onSubmit={handleSubmit}><div className="principal-subscribe-row"><input type="email" value={email} onChange={event => { setEmail(event.target.value); setSubmitted(false); }} placeholder="Your Email Address" aria-label="Your Email Address" required /><button type="submit">Subscribe <Send size={15} /></button></div><label><input type="checkbox" checked={agreed} onChange={event => { setAgreed(event.target.checked); setSubmitted(false); }} /> <span>I have read and agree to the terms and conditions.</span></label>{submitted && <p className="principal-subscribe-success"><Check size={15} /> Thank you for subscribing.</p>}</form></section>;
}

export default function PrincipalMessage() {
  return <main className="page-shell school-section-page principal-page"><button className="back-link principal-back-link" onClick={() => window.history.back()}><ArrowLeft size={16} /> Back to Contents</button><article className="principal-message"><h1>Principal’s Message</h1><img className="principal-photo" src="/assets/IMG_1776.jpeg" alt="Principal seated at a desk with a laptop" /><div className="principal-message-body"><p>Dear Students, Teachers, and Parents,</p><p>It gives me great pleasure to present our school magazine, a reflection of our students’ creativity, talents, and achievements.</p><p>At YAMS CBSE School, we believe that education goes beyond textbooks. We strive to nurture young minds with knowledge, confidence, creativity, and strong values.</p><p>This magazine celebrates the enthusiasm and hard work of our students and teachers. I appreciate everyone who contributed to making this publication a success.</p><p>Let us continue to learn, grow, and inspire one another towards a brighter future.</p><p>With best wishes,<br />Jose Joy Samuel<br />Principal<br />YAMS CBSE School</p></div><PrincipalSubscription /></article></main>;
}
