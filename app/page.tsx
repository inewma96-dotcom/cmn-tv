"use client";

import {
  ArrowRight,
  BookOpen,
  ChevronDown,
  Facebook,
  Globe2,
  HeartHandshake,
  Instagram,
  Mail,
  Menu,
  MessageCircleHeart,
  Phone,
  Play,
  Send,
  ShieldCheck,
  Smartphone,
  X,
  Youtube,
} from "lucide-react";
import { FormEvent, useState } from "react";

const regions = [
  { icon: "🌎", name: "International", note: "Ways to give worldwide" },
  { icon: "🇨🇦", name: "Canada", note: "Giving from Canada" },
  { icon: "🇬🇧", name: "UK & Europe", note: "Giving across Europe" },
  { icon: "🇿🇦", name: "South Africa", note: "Giving from South Africa" },
  { icon: "🇵🇬", name: "Papua New Guinea", note: "Giving from PNG" },
  { icon: "🇦🇺", name: "Australia", note: "Giving from Australia" },
];

function Brand({ light = false }: { light?: boolean }) {
  return (
    <a className={`brand ${light ? "brand-light" : ""}`} href="#" aria-label="CMN Television home">
      <span className="brand-mark"><Play fill="currentColor" size={20} /></span>
      <span><b>CMN</b><small>TELEVISION</small></span>
    </a>
  );
}

export default function GivePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [giveOpen, setGiveOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [amount, setAmount] = useState("50");

  function submitDonation(event: FormEvent) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main>
      <div className="utility">
        <div className="container utility-inner">
          <a href="tel:+67500000000"><Phone size={14} /> +675 0000 0000</a>
          <div><a href="#contact">Contact Us</a><a href="#partner">Partner Center</a></div>
        </div>
      </div>

      <header className="header">
        <div className="container nav">
          <Brand />
          <nav className={menuOpen ? "nav-links open" : "nav-links"}>
            <a href="#about">About <ChevronDown size={14} /></a>
            <a href="#watch">Watch <ChevronDown size={14} /></a>
            <a href="#prayer">Prayer</a>
            <a href="#stories">Stories</a>
            <a className="active" href="#give">Give</a>
            <a href="#contact">Contact</a>
          </nav>
          <button className="nav-give" onClick={() => setGiveOpen(true)}>Give Now <HeartHandshake size={17} /></button>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <section className="hero" id="give">
        <div className="hero-orb orb-one" />
        <div className="hero-orb orb-two" />
        <div className="container hero-content">
          <p className="eyebrow">Your generosity makes a difference</p>
          <h1>Ways to Give</h1>
          <p>Through giving, you help carry a message of hope to homes and hearts around the world. Your partnership makes every broadcast possible.</p>
          <button className="primary-button" onClick={() => setGiveOpen(true)}>Give Online <ArrowRight size={18} /></button>
        </div>
      </section>

      <section className="section give-options">
        <div className="container">
          <div className="section-heading">
            <span>Simple and secure</span>
            <h2>Choose how you&apos;d like to give</h2>
            <p>Every gift, in every form, helps us share faith, encouragement, and life-changing stories.</p>
          </div>
          <div className="option-grid">
            <article className="option-card featured">
              <div className="icon-box"><ShieldCheck /></div>
              <p className="card-label">Fastest option</p>
              <h3>Give Online</h3>
              <p>Make a secure one-time gift or become a monthly partner in just a few moments.</p>
              <button onClick={() => setGiveOpen(true)}>Start Giving <ArrowRight size={17} /></button>
            </article>
            <article className="option-card">
              <div className="icon-box"><Smartphone /></div>
              <h3>Give by Phone</h3>
              <p>Speak with our friendly partner care team. We&apos;re ready to help Monday through Friday.</p>
              <a href="tel:+67500000000">Call +675 0000 0000 <ArrowRight size={17} /></a>
            </article>
            <article className="option-card">
              <div className="icon-box"><Mail /></div>
              <h3>Give by Mail</h3>
              <p>Send your cheque or money order to:</p>
              <address>CMN Television Network<br />Partner Processing<br />PO Box 100, Port Moresby</address>
            </article>
          </div>
        </div>
      </section>

      <section className="section regions">
        <div className="container">
          <div className="section-heading left">
            <span>Across the globe</span>
            <h2>More ways to give</h2>
            <p>Find the giving information and support available in your region.</p>
          </div>
          <div className="region-grid">
            {regions.map((region) => (
              <a className="region-card" href="#contact" key={region.name}>
                <span className="flag">{region.icon}</span>
                <span><b>{region.name}</b><small>{region.note}</small></span>
                <ArrowRight size={18} />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="legacy">
        <div className="container legacy-grid">
          <div className="legacy-art">
            <div className="legacy-card">
              <BookOpen size={38} />
              <span>Planned giving</span>
              <b>A legacy of hope</b>
            </div>
          </div>
          <div className="legacy-copy">
            <span className="gold-label">Legacy stewardship</span>
            <h2>Leave a lasting impact</h2>
            <p>Thoughtful legacy giving can care for the people you love while helping the message of hope continue for generations to come.</p>
            <p>Property, real estate, securities, and other assets can all become part of a lasting expression of generosity.</p>
            <a className="outline-button" href="#contact">Learn More <ArrowRight size={17} /></a>
          </div>
        </div>
      </section>

      <section className="support" id="prayer">
        <div className="container support-grid">
          <article><MessageCircleHeart /><div><span>Your voice matters</span><h3>Share Your Story</h3><p>Tell us how CMN has encouraged you.</p><a href="#contact">Share your story <ArrowRight size={16} /></a></div></article>
          <article><HeartHandshake /><div><span>We&apos;re here for you</span><h3>Need Prayer?</h3><p>Let our prayer team stand with you.</p><a href="#contact">Send a prayer request <ArrowRight size={16} /></a></div></article>
        </div>
      </section>

      <footer id="contact">
        <div className="container footer-grid">
          <div className="footer-brand"><Brand light /><p>Sharing hope, faith, and uplifting stories with audiences around the world.</p><div className="socials"><a href="#"><Facebook /></a><a href="#"><Instagram /></a><a href="#"><Youtube /></a><a href="#"><Send /></a></div></div>
          <div><h4>Watch</h4><a href="#">Live Stream</a><a href="#">On Demand</a><a href="#">Schedule</a><a href="#">Programs</a></div>
          <div><h4>Connect</h4><a href="#">About CMN</a><a href="#">Partner Center</a><a href="#">Prayer</a><a href="#">Contact Us</a></div>
          <div><h4>Stay encouraged</h4><p>Get uplifting stories and updates delivered to your inbox.</p><form className="newsletter"><input aria-label="Email address" placeholder="Email address" /><button aria-label="Subscribe"><ArrowRight /></button></form></div>
        </div>
        <div className="container footer-bottom"><span>© 2026 CMN Television Network</span><div><a href="#">Privacy</a><a href="#">Terms</a></div></div>
      </footer>

      {giveOpen && (
        <div className="modal-backdrop" onMouseDown={() => setGiveOpen(false)}>
          <section className="donate-modal" onMouseDown={(event) => event.stopPropagation()} aria-modal="true" role="dialog">
            <button className="modal-close" onClick={() => setGiveOpen(false)} aria-label="Close"><X /></button>
            {submitted ? (
              <div className="thanks">
                <div className="thanks-icon"><HeartHandshake /></div>
                <span>Demo complete</span><h2>Thank you for your generosity</h2>
                <p>This prototype does not process payments. It is ready to connect to your preferred secure payment provider.</p>
                <button className="primary-button" onClick={() => { setSubmitted(false); setGiveOpen(false); }}>Return to page</button>
              </div>
            ) : (
              <form onSubmit={submitDonation}>
                <span className="modal-kicker">Make a difference today</span>
                <h2>Choose your gift</h2>
                <p className="modal-intro">This is a demonstration form. No payment will be taken.</p>
                <div className="frequency"><button type="button" className="selected">One-time</button><button type="button">Monthly</button></div>
                <div className="amounts">
                  {["25", "50", "100", "250"].map((value) => <button type="button" className={amount === value ? "selected" : ""} onClick={() => setAmount(value)} key={value}>${value}</button>)}
                </div>
                <label>Custom amount<div className="input-with-prefix"><span>$</span><input value={amount} onChange={(event) => setAmount(event.target.value)} inputMode="decimal" /></div></label>
                <label>Email address<input type="email" placeholder="you@example.com" required /></label>
                <button className="primary-button full" type="submit">Continue securely <ShieldCheck size={17} /></button>
              </form>
            )}
          </section>
        </div>
      )}
    </main>
  );
}
