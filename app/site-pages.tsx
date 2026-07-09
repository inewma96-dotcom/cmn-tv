"use client";

import {
  BadgeCheck,
  BookOpen,
  BriefcaseBusiness,
  Building2,
  CalendarClock,
  Camera,
  CheckCircle2,
  Clapperboard,
  Clock3,
  Facebook,
  Film,
  HandHeart,
  HeartHandshake,
  Lightbulb,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  MonitorPlay,
  Phone,
  PlayCircle,
  Radio,
  Send,
  ShieldCheck,
  Sparkles,
  Target,
  Tv,
  Users,
  Video,
  WandSparkles,
  X,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import { ReactNode, useState } from "react";

type IconCard = {
  title: string;
  copy: string;
  icon: LucideIcon;
};

type NavItem = {
  href: string;
  label: string;
};

const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/vision", label: "Vision" },
  { href: "/programs", label: "Programs" },
  { href: "/services", label: "Services" },
  { href: "/progress", label: "Progress" },
  { href: "/support", label: "Support" },
  { href: "/contact", label: "Contact" },
  { href: "/livestream", label: "Livestream" },
];

const stats = [
  { label: "Established", value: "2014" },
  { label: "Location", value: "Port Moresby, PNG" },
  { label: "Ownership", value: "100% Nationally Owned" },
  { label: "Focus", value: "Christian TV & Multimedia" },
];

const principles: IconCard[] = [
  {
    title: "Vision",
    copy: "To be Papua New Guinea's leading Christian media platform, providing education, information, and entertainment founded on biblical truth.",
    icon: Target,
  },
  {
    title: "Mission",
    copy: "To promote positive community development through Christian television, worship, teaching, testimonies, and media content for PNG, the Pacific, and the world.",
    icon: Radio,
  },
  {
    title: "Values",
    copy: "Honesty, good governance, reliability, leadership, passion, integrity, efficiency, professionalism, and service for God's purpose.",
    icon: ShieldCheck,
  },
];

const programs = [
  { title: "Gospel Praise", image: "/image/programs/GOSPEL PRAISE.PNG" },
  { title: "Light Moments Devotion", image: "/image/programs/MORNING LIGHT DEVOTIONS.PNG" },
  { title: "Morning Praise & Worship", image: "/image/programs/MORNING GOSPEL PRAISE.PNG" },
  { title: "Preachings", image: "/image/programs/PREACHINGS.PNG" },
  { title: "Testimonies", image: "/image/programs/TESTIMONIES.PNG" },
  { title: "Youth Life", image: "/image/programs/YOUTH LIFE.PNG" },
  { title: "Church Events", image: "/image/programs/CHURCH EVENTS.PNG" },
  { title: "Christian Movies", image: "/image/programs/NIGHTLY CHRISTIAN MOVIES.PNG" },
  { title: "Inspirational Stories", image: "/image/programs/INSPIRATIONAL STORIES.PNG" },
  { title: "Hope Behind Bars", image: "/image/programs/HOPE BEHIND BARS.PNG" },
  { title: "Children's Programs" },
  { title: "Documentaries" },
  { title: "Gospel Music" },
  { title: "Christian News" },
];

const dailySchedule = [
  {
    day: "Monday",
    blocks: [
      {
        title: "Morning Show",
        time: "6AM - 8AM",
        programs: [
          "Morning Gospel Praise",
          "Early Morning Devotion Light Moments Devotion",
          "Local Church Songs Morning Praise & Worship",
          "Church Preachings",
        ],
      },
      {
        title: "Evening Show",
        time: "6PM - 8PM",
        programs: ["Evening Gospel Praise", "Church Ministries", "Nightly Preachings", "Nightly Christian Movies"],
      },
    ],
  },
  {
    day: "Tuesday",
    blocks: [
      {
        title: "Morning Show",
        time: "6AM - 8AM",
        programs: [
          "Morning Gospel Praise",
          "Early Morning Devotion Light Moments Devotion",
          "Local Church Songs Morning Praise & Worship",
          "Church Preachings",
        ],
      },
      {
        title: "Evening Show",
        time: "6PM - 8PM",
        programs: [
          "Evening Gospel Praise",
          "Christians With Inspirational Stories",
          "Nightly Preachings",
          "Nightly Christian Movies",
        ],
      },
    ],
  },
  {
    day: "Wednesday",
    blocks: [
      {
        title: "Morning Show",
        time: "6AM - 8AM",
        programs: [
          "Morning Gospel Praise",
          "Early Morning Devotion Light Moments Devotion",
          "Local Church Songs Morning Praise & Worship",
          "Church Preachings",
        ],
      },
      {
        title: "Evening Show",
        time: "6PM",
        programs: [
          "Evening Gospel Praise",
          "Prison Ministry",
          "Hope Behind Bars",
          "Nightly Preachings",
          "Nightly Christian Movies",
        ],
      },
    ],
  },
  {
    day: "Thursday",
    blocks: [
      {
        title: "Morning Show",
        time: "6AM - 8AM",
        programs: [
          "Morning Gospel Praise",
          "Early Morning Devotion Light Moments Devotion",
          "Local Church Songs Morning Praise & Worship",
          "Church Preachings",
        ],
      },
      {
        title: "Evening Show",
        time: "6PM - 8PM",
        programs: ["Evening Gospel Praise", "Christians Life Testimonies", "Nightly Preachings", "Nightly Christian Movies"],
      },
    ],
  },
  {
    day: "Friday",
    blocks: [
      {
        title: "Morning Show",
        time: "6AM - 8AM",
        programs: [
          "Morning Gospel Praise",
          "Early Morning Devotion Light Moments Devotion",
          "Local Church Songs Morning Praise & Worship",
          "Church Preachings",
        ],
      },
      {
        title: "Evening Show",
        time: "6PM - 8PM",
        programs: ["Evening Gospel Praise", "Youth Ministries Youth Life", "Nightly Preachings", "Nightly Christian Movies"],
      },
    ],
  },
  {
    day: "Saturday",
    blocks: [
      {
        title: "Morning Show",
        time: "6AM - 8AM",
        programs: [
          "Morning Gospel Praise",
          "Early Morning Devotion Light Moments Devotion",
          "Local Church Songs Morning Praise & Worship",
          "Church Preachings",
        ],
      },
      {
        title: "Evening Show",
        time: "6PM - 8PM",
        programs: [
          "Evening Gospel Praise",
          "National Church Programs Church Events",
          "Nightly Preachings",
          "Nightly Christian Movies",
        ],
      },
    ],
  },
  {
    day: "Sunday",
    blocks: [
      {
        title: "Morning Show",
        time: "6AM - 8AM",
        programs: [
          "Morning Gospel Praise",
          "Early Morning Devotion Light Moments Devotion",
          "Local Church Songs Morning Praise & Worship",
          "Church Preachings",
        ],
      },
      {
        title: "Evening Show",
        time: "6PM - 8PM",
        programs: [
          "Evening Gospel Praise",
          "National Church Programs Church Events",
          "Nightly Preachings",
          "Nightly Christian Movies",
        ],
      },
    ],
  },
];

const services: IconCard[] = [
  { title: "Video Production", copy: "Professional filming for ministries, organizations, communities, and events.", icon: Video },
  { title: "Television Production", copy: "Program planning, studio production, broadcast-ready editing, and delivery.", icon: Tv },
  { title: "Graphic Design", copy: "Visual design support for ministries, campaigns, events, and media promotions.", icon: WandSparkles },
  { title: "Event Coverage", copy: "Coverage for crusades, church programs, conferences, launches, and outreach.", icon: Camera },
  {
    title: "Special Moments",
    copy: "Thoughtful video coverage for weddings, funeral services, memorial gatherings, and gospel song video shoots.",
    icon: HeartHandshake,
  },
  { title: "Product & Ministry Promotions", copy: "Brand, product, church, and ministry promotion across Christian media formats.", icon: Sparkles },
  { title: "DVD / Digital Media Production", copy: "Digital media packages, program archives, and distribution-ready content.", icon: Clapperboard },
  { title: "Documentary Production", copy: "Story-driven films for ministry, community development, and testimony projects.", icon: Film },
];

const portfolio = [
  {
    title: "National Repentance Day",
    copy: "Worship, prayer, and national reflection captured for families, churches, and future broadcast.",
    image: "/image/programs/CHURCH EVENTS.PNG",
  },
  {
    title: "Jubilee Celebration Crusades",
    copy: "Large ministry gatherings filmed with the atmosphere, preaching, testimonies, and worship moments intact.",
    image: "/image/programs/GOSPEL PRAISE.PNG",
  },
  {
    title: "Hope Behind Bars",
    copy: "Prison ministry stories that highlight hope, restoration, and lives being changed through Christ.",
    image: "/image/programs/HOPE BEHIND BARS.PNG",
  },
  {
    title: "Youth Life",
    copy: "Youth-focused stories, events, and creative programs produced to encourage the next generation.",
    image: "/image/programs/YOUTH LIFE.PNG",
  },
  {
    title: "Church Events",
    copy: "Special church programs and community gatherings filmed with care for online sharing and broadcast.",
    image: "/image/programs/PREACHINGS.PNG",
  },
];

const supportOptions: IconCard[] = [
  { title: "Prayer Support", copy: "Pray for wisdom, open doors, creative strength, and transformed lives.", icon: HandHeart },
  { title: "Financial Support", copy: "Help fund production, broadcast preparation, facilities, training, and outreach.", icon: HeartHandshake },
  { title: "Equipment Support", copy: "Support cameras, lighting, editing systems, audio tools, and studio needs.", icon: MonitorPlay },
  { title: "Technical Support", copy: "Offer production, engineering, IT, editing, broadcast, or creative expertise.", icon: CheckCircle2 },
  { title: "Program Sponsorship", copy: "Sponsor worship, teaching, youth, children's, testimony, or community programs.", icon: PlayCircle },
  { title: "Church & Ministry Partnership", copy: "Partner through events, sermons, worship programs, testimonies, and outreach.", icon: Building2 },
  { title: "Business Advertising", copy: "Promote responsible services while supporting Christian media in PNG.", icon: BriefcaseBusiness },
  { title: "Volunteer Media Support", copy: "Serve through writing, production, camera work, editing, design, or admin support.", icon: Users },
];

const contacts = [
  { title: "Email Us", detail: "pngchristiantv@gmail.com", secondary: "PNG Christian Media Network Television", icon: Mail, href: "mailto:pngchristiantv@gmail.com" },
  { title: "Call Us", detail: "+675 7460 4474", secondary: "+675 7075 2479 / +675 7640 1922 / +675 7806 2967", icon: Phone, href: "tel:+67574604474" },
  { title: "Visit Us", detail: "Lahara Avenue, Boroko", secondary: "National Capital District, Papua New Guinea", icon: MapPin, href: "/contact" },
  { title: "Partner With Us", detail: "Bank details available upon request.", secondary: "Reach out for current partnership options.", icon: HeartHandshake, href: "mailto:pngchristiantv@gmail.com" },
];

export function Brand({ light = false }: { light?: boolean }) {
  return (
    <a className={`brand ${light ? "brand-light" : ""}`} href="/" aria-label="PNG Christian Media Network TV home">
      <Image className="brand-logo" src="/image/cmn logo.png" alt="" width={64} height={58} priority={!light} />
      <span className="brand-name">
        <b>PNG Christian Media Network TV</b>
        <small>Christian TV for Today's Generation</small>
      </span>
    </a>
  );
}

export function SiteHeader({ activePath = "/" }: { activePath?: string }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container nav">
        <Brand />
        <nav className={menuOpen ? "nav-links open" : "nav-links"} aria-label="Main navigation">
          {navItems.map((item) => (
            <a
              className={`${activePath === item.href ? "active " : ""}${item.href === "/livestream" ? "livestream-nav-link" : ""}`.trim()}
              href={item.href}
              key={item.href}
            >
              {item.href === "/livestream" ? (
                <span className="live-nav-icon" aria-hidden="true">
                  <Radio />
                  <span className="live-wave"><i /><i /><i /></span>
                </span>
              ) : null}
              {item.label}
            </a>
          ))}
        </nav>
        <a className="nav-cta" href="/donate">
          Donate <HeartHandshake size={17} />
        </a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" type="button">
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Brand light />
          <p>Impacting Today's Generation with Godly Principles Through Christian Television.</p>
          <div className="socials">
            <a href="https://www.facebook.com/pngcmn" aria-label="Facebook" target="_blank" rel="noreferrer"><Facebook /></a>
            <a href="mailto:pngchristiantv@gmail.com" aria-label="Email"><Mail /></a>
          </div>
        </div>
        <div>
          <h4>Quick links</h4>
          {navItems.slice(1, 5).map((item) => (
            <a href={item.href} key={item.href}>{item.label}</a>
          ))}
        </div>
        <div>
          <h4>Ministry</h4>
          <a href="/programs">Programs</a>
          <a href="/services">Services</a>
          <a href="/support">Support</a>
          <a href="/contact">Contact</a>
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
        <span>Christian TV for Today's Generation</span>
      </div>
    </footer>
  );
}

export function SectionHeading({ kicker, title, copy, align = "center" }: { kicker: string; title: string; copy?: string; align?: "center" | "left" }) {
  return (
    <div className={`section-heading ${align === "left" ? "left" : ""}`}>
      <span>{kicker}</span>
      <h2>{title}</h2>
      {copy ? <p>{copy}</p> : null}
    </div>
  );
}

export function PageHero({ kicker, title, copy, icon: Icon = Tv }: { kicker: string; title: string; copy: string; icon?: LucideIcon }) {
  return (
    <section className="page-hero">
      <div className="page-hero-bg">
        <Image src="/image/family.png" alt="" fill priority sizes="100vw" />
      </div>
      <div className="page-hero-overlay" />
      <div className="container page-hero-content">
        <span className="eyebrow"><Icon size={16} /> {kicker}</span>
        <h1>{title}</h1>
        <p>{copy}</p>
      </div>
    </section>
  );
}

export function PageShell({ activePath, hero, children }: { activePath: string; hero: ReactNode; children: ReactNode }) {
  return (
    <main>
      <SiteHeader activePath={activePath} />
      {hero}
      {children}
      <SiteFooter />
    </main>
  );
}

export function AboutContent() {
  return (
    <section className="section about-section">
      <div className="container about-grid">
        <div>
          <SectionHeading kicker="About CMN TV" title="A Christian broadcasting and multimedia ministry based in Port Moresby." align="left" />
          <p className="lead-copy">
            PNG Christian Media Network Television was established in 2014 in Port Moresby, Papua New Guinea. It was
            created to meet the growing demand for Christian television and to provide faith-based content that educates,
            informs, entertains, and transforms lives through the Word of God.
          </p>
          <p>
            Historical materials also{" "}
            <span className="cmn-reference-highlight">
              referenced the ministry as PNG CMNTV and PNG Kristen TV
            </span>
            . It was previously promoted as PNG's first Christian TV, broadcast or promoted through NBC Channel 7, and
            also referenced as running on NBC Play Box Channel 6.
          </p>
          <div className="history-panel">
            <BadgeCheck />
            <p>Registered with IPA and holder of a 10-year Individual Content Licence from NICTA from 16 Oct 2015 to 15 Oct 2025.</p>
          </div>
        </div>
        <div className="stat-grid">
          {stats.map((stat) => (
            <article className="stat-card" key={stat.label}>
              <span>{stat.label}</span>
              <b>{stat.value}</b>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function VisionContent() {
  return (
    <section className="section vision-section">
      <div className="container">
        <SectionHeading
          kicker="Vision, mission, values"
          title="Media with purpose, excellence, and biblical truth."
          copy="CMN TV exists to help change hearts, mindsets, and lifestyles by encouraging Christian principles that support a safer, joyful, peaceful, and better Papua New Guinea for present and future generations."
        />
        <div className="card-grid three">
          {principles.map((item) => {
            const Icon = item.icon;
            return (
              <article className="feature-card" key={item.title}>
                <div className="icon-box"><Icon /></div>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function ProgramsContent() {
  return (
    <section className="section programs-section">
      <div className="container">
        <SectionHeading
          kicker="Our Programs"
          title="Christian programming that teaches, inspires, and strengthens faith."
          copy="CMN TV broadcasts and produces Christian programs designed to inspire, teach, encourage, and strengthen viewers in their faith journey."
        />
        <div className="program-grid">
          {programs.map((program) => (
            <article className="program-card" key={program.title}>
              {program.image ? (
                <Image src={program.image} alt="" fill sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 25vw" />
              ) : (
                <div className="program-placeholder"><BookOpen /></div>
              )}
              <div className="program-card-overlay">
                <span>CMN TV</span>
                <h3>{program.title}</h3>
              </div>
            </article>
          ))}
        </div>
        <div className="schedule-panel">
          <div className="schedule-art">
            <span className="gold-label">Schedule preview</span>
            <h3>Daily broadcast rhythm</h3>
            <p>PNG Kristen TV daily program guide with the full program list written out by day and time frame.</p>
          </div>
          <div className="daily-guide-list">
            {dailySchedule.map((day) => (
              <article className="daily-guide-card" key={day.day}>
                <h4>{day.day}</h4>
                {day.blocks.map((block) => (
                  <div className="daily-guide-block" key={`${day.day}-${block.title}`}>
                    <div className="daily-guide-time">
                      <Clock3 />
                      <span>{block.title}</span>
                      <b>{block.time}</b>
                    </div>
                    <ul>
                      {block.programs.map((program) => (
                        <li key={program}>{program}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ServicesContent() {
  return (
    <section className="section services-section">
      <div className="container">
        <SectionHeading
          kicker="Multimedia Services"
          title="Production support for churches, ministries, businesses, and communities."
          copy="CMN TV also provides multimedia services for churches, ministries, organizations, businesses, and communities."
        />
        <div className="card-grid four">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article className="service-card" key={service.title}>
                <Icon />
                <h3>{service.title}</h3>
                <p>{service.copy}</p>
              </article>
            );
          })}
        </div>
        <div className="rate-note">
          <CalendarClock />
          <div className="rate-note-content">
            <p>
              CMN TV has historically supported television commercials, event promotions, product branding, ministry
              promotions, and community awareness campaigns. Current rates and quotations should be requested directly
              through the contact section.
            </p>
            <div className="rate-contact-actions" aria-label="Service enquiry contact options">
              <a
                href="mailto:pngchristiantv@gmail.com?subject=CMN%20TV%20service%20enquiry"
                aria-label="Email CMN TV"
              >
                <Mail />
              </a>
              <a
                href="https://wa.me/67574604474?text=Hello%20CMN%20TV%2C%20I%20would%20like%20to%20ask%20about%20your%20service%20rates%20and%20quotations."
                target="_blank"
                rel="noreferrer"
                aria-label="Message CMN TV on WhatsApp"
              >
                <MessageCircle />
              </a>
              <a href="tel:+67574604474" aria-label="Call CMN TV">
                <Phone />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProgressContent() {
  return (
    <section className="section progress-section">
      <div className="container progress-portfolio-only">
        <div className="portfolio-card">
          <span className="gold-label">Production portfolio</span>
          <h3>A portfolio of the work we have been doing.</h3>
          <div className="portfolio-grid">
            {portfolio.map((item) => (
              <article className="portfolio-work-card" key={item.title}>
                <div className="portfolio-thumb">
                  <Image src={item.image} alt="" fill sizes="(max-width: 1080px) 50vw, 260px" />
                </div>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function SupportContent() {
  return (
    <section className="section support-section">
      <div className="container">
        <SectionHeading
          kicker="How You Can Help"
          title="Partner with CMN TV today."
          copy="Television ministry requires prayer, skilled people, equipment, facilities, and financial support. Your partnership helps CMN TV produce more Christian television content, reach more homes, and serve communities across Papua New Guinea."
        />
        <div className="support-grid">
          {supportOptions.map((item) => {
            const Icon = item.icon;
            return (
              <article className="support-card" key={item.title}>
                <Icon />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </div>
              </article>
            );
          })}
        </div>
        <div className="support-cta">
          <div>
            <span>Bank details available upon request.</span>
            <h3>Partner With CMN TV Today</h3>
          </div>
          <a className="primary-button" href="mailto:pngchristiantv@gmail.com">Start a Partnership <Send size={18} /></a>
        </div>
      </div>
    </section>
  );
}

export function ContactContent() {
  return (
    <section className="section contact-section" id="contact">
      <div className="container contact-grid">
        <div>
          <SectionHeading kicker="Contact Us" title="Reach the CMN TV team in Boroko, NCD." align="left" />
          <p className="lead-copy">
            Connect with PNG Christian Media Network TV for programming, production services, church partnerships, media
            coverage, advertising, prayer support, or ministry sponsorship.
          </p>
        </div>
        <div className="contact-cards">
          {contacts.map((contact) => {
            const Icon = contact.icon;
            return (
              <a className="contact-card" href={contact.href} key={contact.title}>
                <Icon />
                <span>{contact.title}</span>
                <b>{contact.detail}</b>
                <small>{contact.secondary}</small>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
