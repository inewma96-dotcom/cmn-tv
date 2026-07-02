"use client";

import {
  ArrowRight,
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
  Globe2,
  HandHeart,
  HeartHandshake,
  Home,
  Lightbulb,
  Mail,
  MapPin,
  Menu,
  Mic2,
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
  Youtube,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

type NavLink = {
  href: string;
  label: string;
  id: string;
};

type IconCard = {
  title: string;
  copy: string;
  icon: LucideIcon;
};

const navLinks: NavLink[] = [
  { href: "/", label: "Home", id: "home" },
  { href: "/about", label: "About", id: "about" },
  { href: "/vision", label: "Vision", id: "vision" },
  { href: "/programs", label: "Programs", id: "programs" },
  { href: "/services", label: "Services", id: "services" },
  { href: "/progress", label: "Progress", id: "progress" },
  { href: "/support", label: "Support", id: "support" },
  { href: "/contact", label: "Contact", id: "contact" },
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
  { title: "Commercial Advertising", copy: "Awareness and promotional media for responsible business and community needs.", icon: BriefcaseBusiness },
  { title: "Product & Ministry Promotions", copy: "Brand, product, church, and ministry promotion across Christian media formats.", icon: Sparkles },
  { title: "DVD / Digital Media Production", copy: "Digital media packages, program archives, and distribution-ready content.", icon: Clapperboard },
  { title: "Documentary Production", copy: "Story-driven films for ministry, community development, and testimony projects.", icon: Film },
];

const progressItems: IconCard[] = [
  {
    title: "Equipment & Studio",
    copy: "CMN TV has used professional video cameras, editing workstations, lighting equipment, and modern production tools to support Christian television production.",
    icon: MonitorPlay,
  },
  {
    title: "Production Tools",
    copy: "Production work includes Adobe Premiere Pro CC, video editing, visual effects, 3D modelling, rendering, and media post-production.",
    icon: Lightbulb,
  },
  {
    title: "Team",
    copy: "CMN TV is supported by producers, video editors, camera operators, script writers, and content developers working together.",
    icon: Users,
  },
];

const portfolio = [
  "National Repentance Day",
  "Jubilee Celebration Crusades",
  "Prison Ministry",
  "PNG Bible Church Boroko",
  "Children's Ministry",
  "Church events",
  "Community outreach",
  "Documentaries and inspirational films",
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
  { title: "Visit Us", detail: "Lahara Avenue, Boroko", secondary: "National Capital District, Papua New Guinea", icon: MapPin, href: "#contact" },
  { title: "Partner With Us", detail: "Bank details available upon request.", secondary: "Reach out for current partnership options.", icon: HeartHandshake, href: "mailto:pngchristiantv@gmail.com" },
];

function Brand({ light = false }: { light?: boolean }) {
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

function SectionHeading({ kicker, title, copy, align = "center" }: { kicker: string; title: string; copy?: string; align?: "center" | "left" }) {
  return (
    <div className={`section-heading ${align === "left" ? "left" : ""}`}>
      <span>{kicker}</span>
      <h2>{title}</h2>
      {copy ? <p>{copy}</p> : null}
    </div>
  );
}

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const updateActiveSection = () => {
      const current = navLinks.reduce((active, link) => {
        const section = document.getElementById(link.id);
        return section && section.getBoundingClientRect().top <= 150 ? link.id : active;
      }, "home");

      setActiveSection(current);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  useEffect(() => {
    const fadedSections = Array.from(document.querySelectorAll<HTMLElement>("main > section, main > footer"));

    fadedSections.forEach((section) => section.classList.add("scroll-fade-section"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("is-scroll-visible", entry.isIntersecting);
        });
      },
      { root: null, threshold: 0.16, rootMargin: "0px 0px -16% 0px" },
    );

    fadedSections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
      fadedSections.forEach((section) => {
        section.classList.remove("scroll-fade-section", "is-scroll-visible", "nav-link-reveal");
      });
    };
  }, []);

  return (
    <main>
      <header className="site-header">
        <div className="container nav">
          <Brand />
          <nav className={menuOpen ? "nav-links open" : "nav-links"} aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                className={activeSection === link.id ? "active" : ""}
                href={link.href}
                key={link.id}
              >
                {link.label}
              </a>
            ))}
            <a href="/coffee">Coffee</a>
          </nav>
          <a className="nav-cta" href="/coffee">
            Buy a Coffee <HeartHandshake size={17} />
          </a>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" type="button">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="hero-bg">
          <Image src="/image/family.png" alt="" fill priority sizes="100vw" />
        </div>
        <div className="hero-overlay" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow"><Tv size={16} /> 100% nationally owned Christian television station</span>
            <h1>PNG Christian Media Network TV</h1>
            <p className="hero-subtitle">Christian TV for Today's Generation</p>
            <p>
              Impacting today's generation with Godly principles through Christian television, media production,
              community programs, worship, teaching, and inspirational content across Papua New Guinea and beyond.
            </p>
            <div className="hero-actions">
              <a className="primary-button" href="/about">
                Watch Our Story <PlayCircle size={19} />
              </a>
              <a className="secondary-button" href="/support">
                Partner With Us <ArrowRight size={18} />
              </a>
            </div>
          </div>
          <div className="hero-media" aria-label="CMN TV station video">
            <div className="media-badge"><Radio size={15} /> Station ID</div>
            <video controls preload="metadata" playsInline poster="/image/logo.png">
              <source src="/image/DZv9DE9ydrH(MP4).mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      <section className="section about-section" id="about">
        <div className="container about-grid">
          <div>
            <SectionHeading kicker="About CMN TV" title="A Christian broadcasting and multimedia ministry based in Port Moresby." align="left" />
            <p className="lead-copy">
              PNG Christian Media Network Television was established in 2014 in Port Moresby, Papua New Guinea. It was
              created to meet the growing demand for Christian television and to provide faith-based content that
              educates, informs, entertains, and transforms lives through the Word of God.
            </p>
            <p>
              Historical materials also referenced the ministry as PNG CMNTV and PNG Kristen TV. It was previously
              promoted as PNG's first Christian TV, broadcast or promoted through NBC Channel 7, and also referenced as
              running on NBC Play Box Channel 6.
            </p>
            <div className="history-panel">
              <BadgeCheck />
              <p>
                Registered with IPA and holder of a 10-year Individual Content Licence from NICTA from 16 Oct 2015 to
                15 Oct 2025.
              </p>
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

      <section className="section vision-section" id="vision">
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

      <section className="section programs-section" id="programs">
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

      <section className="section services-section" id="services">
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
            <p>
              CMN TV has historically supported television commercials, event promotions, product branding, ministry
              promotions, and community awareness campaigns. Current rates and quotations should be requested directly
              through the contact section.
            </p>
          </div>
        </div>
      </section>

      <section className="section progress-section" id="progress">
        <div className="container progress-grid">
          <div>
            <SectionHeading kicker="Our Progress" title="Built by committed people, production tools, and ministry partnerships." align="left" />
            <div className="progress-list">
              {progressItems.map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.title}>
                    <Icon />
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.copy}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
          <div className="portfolio-card">
            <span className="gold-label">Production portfolio</span>
            <h3>Stories, events, and community work covered by CMN TV.</h3>
            <div className="portfolio-list">
              {portfolio.map((item) => (
                <span key={item}><CheckCircle2 /> {item}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section support-section" id="support">
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

      <section className="section contact-section" id="contact">
        <div className="container contact-grid">
          <div>
            <SectionHeading kicker="Contact Us" title="Reach the CMN TV team in Boroko, NCD." align="left" />
            <p className="lead-copy">
              Connect with PNG Christian Media Network TV for programming, production services, church partnerships,
              media coverage, advertising, prayer support, or ministry sponsorship.
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

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <Brand light />
            <p>
              Impacting Today's Generation with Godly Principles Through Christian Television.
            </p>
            <div className="socials">
              <a href="https://www.facebook.com/pngcmn" aria-label="Facebook" target="_blank" rel="noreferrer"><Facebook /></a>
              <a href="/" aria-label="YouTube"><Youtube /></a>
              <a href="mailto:pngchristiantv@gmail.com" aria-label="Email"><Mail /></a>
            </div>
          </div>
          <div>
            <h4>Quick links</h4>
            {navLinks.slice(1, 5).map((link) => (
              <a href={link.href} key={link.id}>{link.label}</a>
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
    </main>
  );
}
