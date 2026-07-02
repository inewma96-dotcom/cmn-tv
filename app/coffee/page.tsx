"use client";

import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Camera,
  Coffee,
  Gift,
  HandHeart,
  HeartHandshake,
  Mail,
  MapPin,
  Menu,
  MonitorPlay,
  Phone,
  PlayCircle,
  Radio,
  Shirt,
  Sparkles,
  Tv,
  Users,
  X,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

type CardItem = {
  title: string;
  copy: string;
  icon: LucideIcon;
};

type Product = CardItem & {
  price: string;
};

const supportReasons: CardItem[] = [
  {
    title: "Support Local Christian Media",
    copy: "Help a Papua New Guinea ministry create faith-filled media that serves families, churches, and communities.",
    icon: Tv,
  },
  {
    title: "Help Produce More Programs",
    copy: "Every purchase supports production time, editing, planning, and practical ministry media work.",
    icon: MonitorPlay,
  },
  {
    title: "Reach More Families With Hope",
    copy: "Your support helps CMN TV share worship, teaching, testimonies, and uplifting stories across PNG.",
    icon: Users,
  },
];

const products: Product[] = [
  {
    title: "CMN TV Coffee Support Pack",
    copy: "A simple way to support the ministry while sharing fellowship with others.",
    price: "Coming Soon",
    icon: Coffee,
  },
  {
    title: "CMN TV T-Shirt",
    copy: "Wear the message and help promote Christian media in Papua New Guinea.",
    price: "Coming Soon",
    icon: Shirt,
  },
  {
    title: "Ministry Mug",
    copy: "A daily reminder to pray for and support Christian television in PNG.",
    price: "Coming Soon",
    icon: Gift,
  },
  {
    title: "Gospel Media Bundle",
    copy: "A support package for those who want to help fund Christian programs and media production.",
    price: "Coming Soon",
    icon: Sparkles,
  },
  {
    title: "Event Support Package",
    copy: "Help CMN TV cover church events, crusades, testimonies, and community outreach.",
    price: "Coming Soon",
    icon: Camera,
  },
  {
    title: "Sponsor a Program",
    copy: "Support a Christian program block such as worship, youth life, testimonies, or teaching.",
    price: "Contact Us",
    icon: Radio,
  },
];

const impactItems: CardItem[] = [
  {
    title: "Program Production",
    copy: "Helps us record, edit, and prepare Christian programs for broadcast.",
    icon: PlayCircle,
  },
  {
    title: "Equipment & Studio Support",
    copy: "Helps us improve cameras, lighting, audio, editing computers, and studio needs.",
    icon: MonitorPlay,
  },
  {
    title: "Event Coverage",
    copy: "Helps us cover crusades, church events, testimonies, youth programs, and community outreach.",
    icon: Camera,
  },
  {
    title: "Broadcasting & Outreach",
    copy: "Helps us reach more homes with Christian teaching, worship, devotion, and inspirational content.",
    icon: Tv,
  },
];

const sponsorshipExamples = [
  "Morning Devotion Support",
  "Gospel Praise Support",
  "Youth Life Program Support",
  "Testimonies Program Support",
  "Church Events Coverage Support",
  "Christian Movie Night Support",
];

function CoffeeHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header coffee-header">
      <div className="container nav">
        <a className="brand" href="/" aria-label="PNG Christian Media Network TV home">
          <Image className="brand-logo" src="/image/cmn logo.png" alt="" width={64} height={58} priority />
          <span className="brand-name">
            <b>PNG Christian Media Network TV</b>
            <small>Christian TV for Today's Generation</small>
          </span>
        </a>
        <nav className={menuOpen ? "nav-links coffee-nav-links open" : "nav-links coffee-nav-links"} aria-label="Coffee page navigation">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/vision">Vision</a>
          <a href="/programs">Programs</a>
          <a href="/services">Services</a>
          <a href="/progress">Progress</a>
          <a href="/support">Support</a>
          <a className="active" href="/coffee">Coffee</a>
          <a href="/contact">Contact</a>
        </nav>
        <a className="nav-cta" href="#inquiry">
          Enquire Now <ArrowRight size={17} />
        </a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" type="button">
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}

function CoffeeFooter() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <a className="brand brand-light" href="/" aria-label="PNG Christian Media Network TV home">
            <Image className="brand-logo" src="/image/cmn logo.png" alt="" width={64} height={58} />
            <span className="brand-name">
              <b>PNG Christian Media Network TV</b>
              <small>Christian TV for Today's Generation</small>
            </span>
          </a>
          <p>Every purchase is a seed into Christian media, community transformation, and the spreading of the Gospel across Papua New Guinea.</p>
        </div>
        <div>
          <h4>Shop Support</h4>
          <a href="#items">Support Items</a>
          <a href="#bundle">Program Sponsorship</a>
          <a href="#inquiry">Order Inquiry</a>
        </div>
        <div>
          <h4>Ministry</h4>
          <a href="/programs">Programs</a>
          <a href="/services">Services</a>
          <a href="/support">Support</a>
        </div>
        <div>
          <h4>Contact</h4>
          <p>Lahara Avenue, Boroko, National Capital District, Papua New Guinea</p>
          <a href="mailto:pngchristiantv@gmail.com">pngchristiantv@gmail.com</a>
          <a href="tel:+67574604474">+675 7460 4474</a>
          <a href="tel:+67570752479">+675 7075 2479</a>
          <a href="tel:+67576401922">+675 7640 1922</a>
          <a href="tel:+67578062967">+675 7806 2967</a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>Copyright {new Date().getFullYear()} PNG Christian Media Network TV.</span>
        <span>Coffee & Ministry Support</span>
      </div>
    </footer>
  );
}

function CoffeeSectionHeading({ kicker, title, copy }: { kicker: string; title: string; copy?: string }) {
  return (
    <div className="section-heading coffee-section-heading">
      <span>{kicker}</span>
      <h2>{title}</h2>
      {copy ? <p>{copy}</p> : null}
    </div>
  );
}

export default function CoffeePage() {
  return (
    <main className="coffee-page">
      <CoffeeHeader />

      <section className="coffee-hero">
        <div className="container coffee-hero-grid">
          <div className="coffee-hero-copy">
            <a className="coffee-back-link" href="/"><ArrowLeft size={16} /> Back to CMN TV</a>
            <span className="eyebrow"><Coffee size={16} /> Ministry support shop</span>
            <h1>Coffee & Ministry Support</h1>
            <p className="coffee-subtitle">Buy. Support. Share the Gospel.</p>
            <p>
              Every cup, shirt, gift item, or ministry merchandise you purchase helps PNG Christian Media Network TV
              continue producing Christ-centered programs, testimonies, worship content, community stories, and
              inspirational media for families and communities across Papua New Guinea.
            </p>
            <div className="hero-actions">
              <a className="primary-button" href="#items">View Support Items <ArrowRight size={18} /></a>
              <a className="secondary-button coffee-secondary-button" href="/support">Partner With Us <HeartHandshake size={18} /></a>
            </div>
          </div>
          <aside className="coffee-hero-card">
            <div className="coffee-logo-mark">
              <Image src="/image/cmn logo.png" alt="" width={132} height={120} priority />
            </div>
            <span>CMN TV Support</span>
            <h2>Your support helps keep Christian media alive in PNG</h2>
            <p>Small purchases can help fund programs, event coverage, media equipment, and more Gospel-centered stories.</p>
            <div className="coffee-hero-stats">
              <b>Programs</b>
              <b>Events</b>
              <b>Outreach</b>
            </div>
          </aside>
        </div>
      </section>

      <section className="section coffee-why-section">
        <div className="container">
          <CoffeeSectionHeading
            kicker="Why support us"
            title="Why Your Support Matters"
            copy="PNG Christian Media Network TV is a growing Christian television ministry based in Papua New Guinea, producing programs that educate, inform, inspire, and share the message of Jesus Christ."
          />
          <p className="coffee-intro-copy">
            Your support helps us continue this work. When you purchase from this page, you are not just buying an item.
            You are helping us create more Christian content, cover ministry events, improve our media equipment, support
            production costs, and reach more homes with the Gospel.
          </p>
          <div className="coffee-card-grid three">
            {supportReasons.map((item) => {
              const Icon = item.icon;
              return (
                <article className="coffee-info-card" key={item.title}>
                  <Icon />
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section coffee-items-section" id="items">
        <div className="container">
          <CoffeeSectionHeading
            kicker="Support items"
            title="Support Items / Merchandise"
            copy="Choose a simple support item or ask about a sponsorship package. Online ordering is coming soon, so every item currently starts with an enquiry."
          />
          <div className="coffee-product-grid">
            {products.map((product) => {
              const Icon = product.icon;
              return (
                <article className="coffee-product-card" key={product.title}>
                  <div className="coffee-product-icon"><Icon /></div>
                  <span>{product.price}</span>
                  <h3>{product.title}</h3>
                  <p>{product.copy}</p>
                  <a href="#inquiry">Enquire Now <ArrowRight size={16} /></a>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section coffee-impact-section">
        <div className="container">
          <CoffeeSectionHeading kicker="Ministry impact" title="How Your Purchase Helps the Ministry" />
          <div className="coffee-card-grid four">
            {impactItems.map((item) => {
              const Icon = item.icon;
              return (
                <article className="coffee-impact-card" key={item.title}>
                  <Icon />
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section coffee-bundle-section" id="bundle">
        <div className="container coffee-bundle-grid">
          <div>
            <span className="gold-label">Featured ministry bundle</span>
            <h2>Sponsor a Program Block</h2>
            <p>
              Businesses, churches, families, and ministry partners can sponsor a program block to help CMN TV broadcast
              Christian content regularly. Sponsorship can support worship programs, youth programs, testimonies,
              teaching, documentaries, or community awareness content.
            </p>
            <a className="primary-button" href="#inquiry">Ask About Sponsorship <ArrowRight size={18} /></a>
          </div>
          <div className="coffee-bundle-list">
            {sponsorshipExamples.map((example) => (
              <span key={example}><BadgeCheck /> {example}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section coffee-coming-soon">
        <div className="container coffee-notice">
          <Coffee />
          <div>
            <span className="gold-label">Coming soon</span>
            <h2>Online Ordering Coming Soon</h2>
            <p>
              We are still developing our online shop and payment system. For now, supporters can contact us directly to
              ask about available merchandise, support packages, sponsorship, or donations.
            </p>
          </div>
        </div>
      </section>

      <section className="section coffee-inquiry-section" id="inquiry">
        <div className="container coffee-inquiry-grid">
          <div>
            <CoffeeSectionHeading
              kicker="Order inquiry"
              title="Interested in Supporting?"
              copy="To ask about coffee packs, shirts, mugs, merchandise, program sponsorship, or ministry support, please contact CMN TV directly."
            />
            <div className="coffee-inquiry-actions">
              <a className="primary-button" href="mailto:pngchristiantv@gmail.com">Email Us <Mail size={18} /></a>
              <a className="secondary-button coffee-call-button" href="tel:+67574604474">Call Us <Phone size={18} /></a>
              <a className="secondary-button coffee-call-button" href="/support">Partner With Us <HandHeart size={18} /></a>
            </div>
          </div>
          <div className="coffee-contact-panel">
            <article>
              <Mail />
              <span>Email</span>
              <b>pngchristiantv@gmail.com</b>
            </article>
            <article>
              <Phone />
              <span>Phone</span>
              <b>+675 7460 4474</b>
              <small>+675 7075 2479 / +675 7640 1922 / +675 7806 2967</small>
            </article>
            <article>
              <MapPin />
              <span>Location</span>
              <b>Lahara Avenue, Boroko</b>
              <small>National Capital District, Papua New Guinea</small>
            </article>
          </div>
        </div>
      </section>

      <section className="coffee-footer-cta">
        <div className="container">
          <BriefcaseBusiness />
          <p>Every purchase is a seed into Christian media, community transformation, and the spreading of the Gospel across Papua New Guinea.</p>
        </div>
      </section>

      <CoffeeFooter />
    </main>
  );
}
