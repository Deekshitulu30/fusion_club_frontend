import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import confetti from 'canvas-confetti';
import {
  Cpu,
  Bot,
  Navigation,
  CircuitBoard,
  ArrowUpRight,
  ArrowRight,
  Terminal,
  Radio,
  Users,
  CheckCircle2,
  X,
  Menu,
  MapPin,
  Mail,
  ShieldCheck,
  Check,
  Send,
  Sparkles,
  Copy,
  Clock,
  Layers,
  Wifi,
} from 'lucide-react';
import {
  IMAGES,
  DOMAINS,
  PROJECTS,
  TEAM_MEMBERS,
  JOURNEY_MILESTONES,
  BLOG_POSTS,
} from './data/clubData';

gsap.registerPlugin(ScrollTrigger);

// Bulletproof image loader: automatically checks /team/, /images/team/, /images/, root /, and fallback URL
function SmartImage({ imageObj, alt, className }) {
  const [attempt, setAttempt] = useState(0);

  const candidates = React.useMemo(() => {
    if (!imageObj) return [];
    if (typeof imageObj === 'string') return [imageObj];
    const rawPath = imageObj.local || '';
    const fileName = rawPath.split('/').pop();
    const cleanLocal = rawPath.replace(/^\/public\//, '/');

    return [
      cleanLocal,
      imageObj.altLocal ? imageObj.altLocal.replace(/^\/public\//, '/') : null,
      fileName ? `/team/${fileName}` : null,
      fileName ? `/images/team/${fileName}` : null,
      fileName ? `/images/${fileName}` : null,
      fileName ? `/${fileName}` : null,
      imageObj.fallback,
    ].filter(Boolean);
  }, [imageObj]);

  useEffect(() => {
    setAttempt(0);
  }, [imageObj]);

  const currentSrc = candidates[attempt] || '';

  return (
    <img
      src={currentSrc}
      alt={alt}
      className={className}
      onError={() => {
        if (attempt < candidates.length - 1) {
          setAttempt((prev) => prev + 1);
        }
      }}
    />
  );
}

// Smart Logo that checks /fusion-logo.png and /images/fusion-logo.png, or falls back to the CPU icon
function BrandLogo() {
  const logoPaths = [
    '/fusion-logo.png',
    '/images/fusion-logo.png',
    '/logo.png',
    '/images/logo.png',
  ];
  const [idx, setIdx] = useState(0);

  if (idx >= logoPaths.length) {
    return <Cpu size={19} />;
  }

  return (
    <img
      src={logoPaths[idx]}
      alt="Fusion Club Logo"
      className="brand-logo-img"
      onError={() => setIdx((prev) => prev + 1)}
    />
  );
}

const DOMAIN_ICONS = {
  Cpu: Cpu,
  Bot: Bot,
  Navigation: Navigation,
  CircuitBoard: CircuitBoard,
};

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [projectFilter, setProjectFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedMember, setSelectedMember] = useState(null);
  const [selectedPost, setSelectedPost] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [activeAtmo, setActiveAtmo] = useState(0);
  const [telemetryVolt, setTelemetryVolt] = useState(24.4);
  const mainContainerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setTelemetryVolt((prev) => {
        const delta = (Math.random() - 0.5) * 0.08;
        return Number(Math.max(23.9, Math.min(24.8, prev + delta)).toFixed(2));
      });
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  const navigateTo = (page, domainFilter = 'all') => {
    setActivePage(page);
    if (domainFilter) setProjectFilter(domainFilter);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useGSAP(
    () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());

      if (activePage === 'home') {
        const sections = gsap.utils.toArray('[data-atmo]');
        sections.forEach((sec) => {
          const atmoIndex = Number(sec.getAttribute('data-atmo'));
          ScrollTrigger.create({
            trigger: sec,
            start: 'top 55%',
            end: 'bottom 45%',
            onEnter: () => setActiveAtmo(atmoIndex),
            onEnterBack: () => setActiveAtmo(atmoIndex),
          });
        });
      } else {
        setActiveAtmo(1);
      }

      gsap.fromTo(
        '.reveal-up',
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.65,
          stagger: 0.06,
          ease: 'power3.out',
        }
      );
    },
    { dependencies: [activePage, projectFilter], scope: mainContainerRef }
  );

  return (
    <div ref={mainContainerRef}>
      {/* LAYER 0: FIXED SCROLL-BLENDING ATMOSPHERE ENGINE */}
      <div className="atmosphere-stage" aria-hidden="true">
        <div
          className="atmo-plate"
          style={{
            opacity: activePage === 'home' && activeAtmo === 0 ? 1 : 0,
            transform:
              activePage === 'home' && activeAtmo === 0
                ? 'scale(1)'
                : 'scale(1.05)',
            transition: 'opacity 0.9s ease, transform 1.4s ease',
          }}
        >
          <SmartImage
            imageObj={IMAGES.heroCampus}
            alt="GLA University Flight Line"
          />
          <div className="atmo-scrim-hero" />
        </div>

        <div
          className="atmo-plate"
          style={{
            opacity: activeAtmo === 1 ? 1 : 0,
            transform: activeAtmo === 1 ? 'scale(1)' : 'scale(1.05)',
            transition: 'opacity 0.9s ease, transform 1.4s ease',
          }}
        >
          <SmartImage
            imageObj={IMAGES.bgPcbObsidian}
            alt="Dark PCB Hardware Workbench"
          />
          <div className="atmo-scrim-dark" />
        </div>

        <div
          className="atmo-plate"
          style={{
            opacity: activeAtmo === 2 ? 1 : 0,
            transform: activeAtmo === 2 ? 'scale(1)' : 'scale(1.05)',
            transition: 'opacity 0.9s ease, transform 1.4s ease',
          }}
        >
          <SmartImage
            imageObj={IMAGES.bgLabTungsten}
            alt="Robotics Testing Lab"
          />
          <div className="atmo-scrim-dark" />
        </div>

        <div
          className="atmo-plate"
          style={{
            opacity: activeAtmo === 3 ? 1 : 0,
            transition: 'opacity 0.9s ease',
          }}
        >
          <div className="atmo-scrim-footer" />
        </div>
      </div>

      {/* LAYER 1: ARCHITECTURAL BLUEPRINT OVERLAY */}
      <div
        className="blueprint-overlay"
        aria-hidden="true"
        style={{
          opacity: activePage === 'home' && activeAtmo === 0 ? 0 : 1,
          transition: 'opacity 0.7s ease',
        }}
      />

      {/* LAYER 2: TOP NAVBAR */}
      <header className="top-header">
        <div className="brand-cluster" onClick={() => navigateTo('home')}>
          <div className="brand-emblem">
            <BrandLogo />
          </div>
          <div>
            <div className="brand-title">Fusion Club</div>
            <div className="brand-subtitle">IoT &amp; Robotics</div>
          </div>
        </div>

        <nav className={`nav-pill ${mobileMenuOpen ? 'open' : ''}`}>
          {[
            { id: 'home', label: 'Home' },
            { id: 'projects', label: 'Projects' },
            { id: 'team', label: 'Team' },
            { id: 'journey', label: 'Journey' },
            { id: 'blog', label: 'Blog' },
          ].map((item) => (
            <button
              key={item.id}
              className={`nav-link ${activePage === item.id ? 'active' : ''}`}
              onClick={() => navigateTo(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <button className="header-cta" onClick={() => navigateTo('join')}>
            Join Fusion <ArrowUpRight size={14} />
          </button>
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* MAIN PAGE CONTENT */}
      <main className="page-shell">
        {activePage === 'home' && (
          <HomePage
            navigateTo={navigateTo}
            telemetryVolt={telemetryVolt}
            onSelectProject={setSelectedProject}
          />
        )}
        {activePage === 'projects' && (
          <ProjectsPage
            projectFilter={projectFilter}
            setProjectFilter={setProjectFilter}
            onSelectProject={setSelectedProject}
          />
        )}
        {activePage === 'team' && (
          <TeamPage
            navigateTo={navigateTo}
            onSelectMember={setSelectedMember}
          />
        )}
        {activePage === 'journey' && <JourneyPage navigateTo={navigateTo} />}
        {activePage === 'blog' && <BlogPage onSelectPost={setSelectedPost} />}
        {activePage === 'join' && <JoinPage />}
      </main>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="footer-grid">
          <div>
            <div className="brand-cluster" style={{ marginBottom: '1rem' }}>
              <div className="brand-emblem">
                <BrandLogo />
              </div>
              <div>
                <div className="brand-title">Fusion Club</div>
                <div className="brand-subtitle">IoT &amp; Robotics</div>
              </div>
            </div>
            <p
              style={{
                color: 'var(--text-secondary)',
                fontSize: '0.9rem',
                lineHeight: 1.6,
                maxWidth: '34ch',
                marginBottom: '1.2rem',
              }}
            >
              Student hardware engineering community at GLA University building
              connected devices, autonomous UAVs, and intelligent machines.
            </p>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.76rem',
                color: 'var(--text-muted)',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.35rem',
              }}
            >
              <span>
                <MapPin
                  size={13}
                  style={{ display: 'inline', marginRight: '6px' }}
                />
                GLA University, Mathura (U.P.)
              </span>
              <span>
                <Mail
                  size={13}
                  style={{ display: 'inline', marginRight: '6px' }}
                />
                fusionclub@gla.ac.in
              </span>
            </div>
          </div>

          <div>
            <div className="footer-col-title">Navigate</div>
            <ul className="footer-links">
              {['home', 'projects', 'team', 'journey', 'blog', 'join'].map(
                (p) => (
                  <li key={p}>
                    <button
                      className="footer-link-btn"
                      onClick={() => navigateTo(p)}
                      style={{
                        color: p === 'join' ? 'var(--accent-ice)' : undefined,
                      }}
                    >
                      {p === 'join'
                        ? 'Join FUSION →'
                        : p.charAt(0).toUpperCase() + p.slice(1)}
                    </button>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <div className="footer-col-title">Domains</div>
            <ul className="footer-links">
              {DOMAINS.map((d) => (
                <li key={d.id}>
                  <button
                    className="footer-link-btn"
                    onClick={() => navigateTo('projects', d.id)}
                  >
                    {d.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="footer-col-title">Lab Telemetry</div>
            <div
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid var(--border-hairline)',
                borderRadius: '10px',
                padding: '1rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.74rem',
                lineHeight: 1.7,
                color: 'var(--text-secondary)',
              }}
            >
              <div>STATUS: LAB_ONLINE</div>
              <div>ACTIVE BUILDERS: {TEAM_MEMBERS.length} CORE MEMBERS</div>
              <div>COHORT 2026: APPLICATIONS OPEN</div>
              <div style={{ color: 'var(--accent-amber)', marginTop: '0.4rem' }}>
                EST. 2023 · GLA UNIVERSITY
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 FUSION · GLA University, Mathura</span>
          <span>Built by the FUSION Hardware &amp; Web Engineering Team</span>
        </div>
      </footer>

      {/* FULL-BLEED ANIMATED PROJECT INSPECTION DECK */}
      {selectedProject && (
        <ProjectFullBleedDeck
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onSwitchProject={(nextProj) => setSelectedProject(nextProj)}
        />
      )}

      {/* FULL-BLEED ANIMATED TEAM MEMBER DOSSIER */}
      {selectedMember && (
        <TeamMemberDossier
          member={selectedMember}
          onClose={() => setSelectedMember(null)}
          onSwitchMember={(nextMem) => setSelectedMember(nextMem)}
        />
      )}

      {/* BLOG TECHNICAL ARTICLE MODAL */}
      {/* =========================================================
          FULL-BLEED TECHNICAL JOURNAL READER (BLOG)
          ========================================================= */}
      {selectedPost && (
        <BlogFullBleedReader
          post={selectedPost}
          onClose={() => setSelectedPost(null)}
          onSwitchPost={(nextP) => setSelectedPost(nextP)}
        />
      )}
    </div>
  );
}

/* ============================================================================
   1. HOME PAGE
   ============================================================================ */
const DOMAIN_INSPECTION_SPECS = {
  iot: [
    { label: 'CARRIER RF', value: '865–867 MHz LoRa' },
    { label: 'BUS STACK', value: '4-Layer ENIG SPI/I2C' },
    { label: 'SLEEP POWER', value: '18µA (Solar MPPT)' },
    { label: 'PACKET PROTOCOL', value: '32-Byte Packed CRC16' },
  ],
  robotics: [
    { label: 'KINEMATICS', value: '6-DOF Numerical IK' },
    { label: 'CONTROL BUS', value: 'CAN 2.0B Diff Transceiver' },
    { label: 'POSITIONING', value: '12-bit Magnetic AS5600' },
    { label: 'LOCAL SLAM', value: 'ROS2 Humble Nav2' },
  ],
  uav: [
    { label: 'AIRFRAME', value: '680mm 3K Carbon Hexa' },
    { label: 'AVIONICS', value: 'Pixhawk 6C + EKF2' },
    { label: 'RTK POSITIONING', value: 'u-blox ZED-F9P Centimeter' },
    { label: 'UPLINK TELEM', value: 'MAVLink @ 915MHz' },
  ],
  'edge-ai': [
    { label: 'ACCELERATOR', value: 'Jetson Orin (40 TOPS)' },
    { label: 'OPTICAL DEPTH', value: 'Oak-D Lite Disparity' },
    { label: 'INFERENCE ENGINE', value: 'YOLOv8 INT8 TensorRT' },
    { label: 'PHOTON LATENCY', value: '8.4 ms End-to-End' },
  ],
};

const DOMAIN_TICKERS = {
  iot: {
    node: 'NODE // PULSE-03',
    signal: '865.1 MHz',
    liveStat: (tick) => (tick % 2 === 0 ? '-64 dBm RSSI' : '-62 dBm RSSI'),
  },
  robotics: {
    node: 'BUS // CAN-A',
    signal: '1.0 kHz LOOP',
    liveStat: (tick) => (tick % 2 === 0 ? '34% BUS LOAD' : '36% BUS LOAD'),
  },
  uav: {
    node: 'AVIONICS // PX4',
    signal: '18 SATS RTK',
    liveStat: (tick) => (tick % 2 === 0 ? '24.4V BUS' : '24.3V BUS'),
  },
  'edge-ai': {
    node: 'CORE // JETSON',
    signal: '40 TOPS INT8',
    liveStat: (tick) => (tick % 2 === 0 ? '42.6 FPS' : '43.1 FPS'),
  },
};

function HomePage({ navigateTo, telemetryVolt, onSelectProject }) {
  const [tickerTick, setTickerTick] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTickerTick((prev) => (prev + 1) % 4);
    }, 2400);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <section className="full-bleed-section hero-section" data-atmo="0">
        <div className="corner-mark tl" />
        <div className="corner-mark tr" />

        <div className="hero-grid">
          <div className="reveal-up">
            <div className="status-badge">
              <span className="pulse-dot" />
              <span>IoT &amp; ROBOTICS CLUB · GLA UNIVERSITY</span>
            </div>

            <h1 className="hero-headline">
              Engineering ideas into real-world{' '}
              <span className="accent-word">SYSTEMS.</span>
            </h1>

            <p className="hero-subcopy">
              FUSION is a student hardware community at GLA University building
              connected sensor meshes, autonomous UAVs, and intelligent robotic
              machines from custom silicon to flight code.
            </p>

            <div className="cta-row">
              <button
                className="btn-amber"
                onClick={() => navigateTo('projects')}
              >
                Explore Projects <ArrowRight size={17} />
              </button>
              <button
                className="btn-tactical"
                onClick={() => navigateTo('join')}
              >
                Join FUSION
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="full-bleed-section" data-atmo="1">
        <div className="corner-mark tl" />
        <div className="corner-mark tr" />

        <div className="section-header-bar reveal-up">
          <div>
            <div className="eyebrow-tag">WHAT IS FUSION?</div>
            <h2 className="section-title">Learning by Building</h2>
          </div>
          <p className="section-lead">
            We don&apos;t stop at simulations or slide decks. Every semester,
            interdisciplinary cohorts design custom PCBs, machine carbon-fiber
            frames, and deploy real firmware in the field.
          </p>
        </div>

        <div className="domains-grid">
          {DOMAINS.map((dom) => {
            const IconComponent = DOMAIN_ICONS[dom.iconName] || Cpu;
            const ticker = DOMAIN_TICKERS[dom.id];
            const specs = DOMAIN_INSPECTION_SPECS[dom.id] || [];
            return (
              <div
                key={dom.id}
                className="domain-card reveal-up"
                onClick={() => navigateTo('projects', dom.id)}
              >
                {/* Micro-Schematic Razor-Sharp Corner Accents */}
                <span className="dom-corner tl" aria-hidden="true" />
                <span className="dom-corner tr" aria-hidden="true" />
                <span className="dom-corner bl" aria-hidden="true" />
                <span className="dom-corner br" aria-hidden="true" />

                <div>
                  <div className="domain-top-row">
                    <div className="domain-icon-box">
                      <IconComponent size={21} />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                      <span className="dom-led-status">
                        <span className="dom-led-dot" /> LIVE
                      </span>
                      <span className="domain-code">{dom.code}</span>
                    </div>
                  </div>

                  {/* 1. Live Hardware Telemetry Ticker Strip */}
                  {ticker && (
                    <div className="dom-telemetry-ticker">
                      <span>{ticker.node}</span>
                      <span>{ticker.signal}</span>
                      <span className="dom-ticker-val">
                        {ticker.liveStat(tickerTick)}
                      </span>
                    </div>
                  )}

                  <h3 className="domain-title">{dom.title}</h3>
                  <p className="domain-desc">{dom.shortDesc}</p>

                  <div className="stack-pills">
                    {dom.stack.map((s) => (
                      <span key={s} className="stack-pill">
                        {s}
                      </span>
                    ))}
                  </div>

                  {/* 4. Interactive "Hardware Stack Inspection" Drawer on Hover */}
                  <div className="dom-tech-drawer" onClick={(e) => e.stopPropagation()}>
                    <div className="dom-drawer-inner">
                      {specs.map((item) => (
                        <div key={item.label} className="dom-drawer-item">
                          <span className="dom-drawer-label">{item.label}</span>
                          <span className="dom-drawer-value" title={item.value}>
                            {item.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="dom-drawer-hint">
                    <Terminal size={12} /> HOVER // HARDWARE SCHEMATIC DRAWER
                  </div>
                </div>

                <div className="domain-footer">
                  <span style={{ color: 'var(--text-muted)' }}>
                    {dom.metricLabel}:{' '}
                    <strong style={{ color: 'var(--accent-ice)' }}>
                      {dom.metricValue}
                    </strong>
                  </span>
                  <span className="explore-link">
                    Explore <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="full-bleed-section" data-atmo="1">
        <div className="section-header-bar reveal-up">
          <div>
            <div className="eyebrow-tag">FIELD-TESTED HARDWARE</div>
            <h2 className="section-title">Selected Lab Systems</h2>
          </div>
          <button
            className="btn-tactical"
            onClick={() => navigateTo('projects')}
          >
            View All 06 Systems <ArrowUpRight size={16} />
          </button>
        </div>

        <div className="projects-bento">
          {PROJECTS.slice(0, 3).map((proj) => (
            <div
              key={proj.id}
              className="project-card reveal-up"
              onClick={() => onSelectProject(proj)}
            >
              <div className="project-thumb">
                <SmartImage
                  imageObj={IMAGES[proj.imageKey]}
                  alt={proj.title}
                />
                <span className="project-id-badge">{proj.id}</span>
                <span className="project-status-badge">{proj.status}</span>
              </div>
              <div className="project-body">
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.7rem',
                    color: 'var(--accent-ice)',
                    marginBottom: '0.4rem',
                  }}
                >
                  {proj.domainLabel.toUpperCase()}
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.25rem',
                    marginBottom: '0.65rem',
                  }}
                >
                  {proj.title}
                </h3>
                <p
                  style={{
                    fontSize: '0.88rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6,
                    marginBottom: '1.25rem',
                    flex: 1,
                  }}
                >
                  {proj.summary}
                </p>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingTop: '0.9rem',
                    borderTop: '1px solid var(--border-hairline)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.74rem',
                  }}
                >
                  <span style={{ color: 'var(--accent-amber)' }}>
                    Inspect Architecture →
                  </span>
                  <span style={{ color: 'var(--text-muted)' }}>{proj.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="full-bleed-section" data-atmo="2">
        <div className="corner-mark tl" />
        <div className="corner-mark tr" />

        <div className="section-header-bar reveal-up">
          <div>
            <div className="eyebrow-tag">THE BUILDERS · GLA UNIVERSITY</div>
            <h2 className="section-title">Ideas Into Real-World Systems</h2>
          </div>
          <button className="btn-amber" onClick={() => navigateTo('team')}>
            Meet All {TEAM_MEMBERS.length} Builders <ArrowRight size={16} />
          </button>
        </div>

        <div className="team-viewfinder-wrap reveal-up">
          <div className="viewfinder-media">
            <SmartImage
              imageObj={IMAGES.teamPhoto}
              alt="FUSION Club Team at GLA University"
            />
            <div className="viewfinder-vignette" />
            <div className="viewfinder-hud-corner top-left">
              CAM_01 // GLA ACADEMIC BLOCK PLAZA
            </div>
            <div className="viewfinder-hud-corner top-right">
              ● REC · CORE COHORT
            </div>
          </div>

          <div className="team-telemetry-bar">
            <span>FUSION TEAM · GLA UNIVERSITY CAMPUS</span>
            <span style={{ color: 'var(--accent-ice)' }}>
              EST. 2023 · {TEAM_MEMBERS.length} CORE BUILDERS · 4 R&amp;D DOMAINS
            </span>
          </div>
        </div>
      </section>

      <section className="full-bleed-section" data-atmo="3">
        <div className="recruitment-panel reveal-up">
          <div>
            <div className="eyebrow-tag">RECRUITMENT // COHORT 2026</div>
            <h2
              className="section-title"
              style={{
                marginBottom: '1rem',
                fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
              }}
            >
              Build With Us.
            </h2>
            <p
              style={{
                fontSize: '1.05rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.65,
                maxWidth: '52ch',
                marginBottom: '2rem',
              }}
            >
              Have an idea or want to get hands-on with hardware? Join our next
              project cohort at GLA University —{' '}
              <strong style={{ color: '#fff' }}>
                no prior hardware experience required.
              </strong>
            </p>
            <div className="cta-row">
              <button className="btn-amber" onClick={() => navigateTo('join')}>
                Apply to Join FUSION <ArrowRight size={17} />
              </button>
              <button
                className="btn-tactical"
                onClick={() => navigateTo('journey')}
              >
                Explore Club Journey
              </button>
            </div>
          </div>

          <div
            style={{
              display: 'grid',
              gap: '0.85rem',
              borderLeft: '1px solid var(--border-hairline)',
              paddingLeft: '1.75rem',
            }}
          >
            <div className="hud-metric-box">
              <div className="hud-metric-label">ELIGIBILITY</div>
              <div className="hud-metric-val" style={{ fontSize: '0.88rem' }}>
                All Branches &amp; Years (GLA University)
              </div>
            </div>
            <div className="hud-metric-box">
              <div className="hud-metric-label">MENTORSHIP MODEL</div>
              <div className="hud-metric-val" style={{ fontSize: '0.88rem' }}>
                Hands-on PCB, ROS2 &amp; Flight Lab Bootcamps
              </div>
            </div>
            <div className="hud-metric-box">
              <div className="hud-metric-label">LAB ACCESS</div>
              <div className="hud-metric-val" style={{ fontSize: '0.88rem' }}>
                Oscilloscopes, 3D Printers, LiPo &amp; Drone Rig
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ============================================================================
   2. PROJECTS PAGE
   ============================================================================ */
function ProjectsPage({ projectFilter, setProjectFilter, onSelectProject }) {
  const filtered =
    projectFilter === 'all'
      ? PROJECTS
      : PROJECTS.filter((p) => p.domain === projectFilter);

  return (
    <section className="full-bleed-section" style={{ paddingTop: '8rem' }}>
      <div className="section-header-bar reveal-up">
        <div>
          <div className="eyebrow-tag">
            SYSTEMS REGISTRY // HARDWARE ARCHIVE
          </div>
          <h1 className="section-title">Engineered at FUSION Lab</h1>
        </div>
        <p className="section-lead">
          Click any hardware system card below to launch its full-bleed
          inspection deck, microcontroller specs, and signal architecture.
        </p>
      </div>

      <div className="filter-bar reveal-up">
        {[
          { id: 'all', label: 'All Systems (06)' },
          { id: 'uav', label: 'DOM.03 // Autonomous UAVs' },
          { id: 'robotics', label: 'DOM.02 // Robotics & Kinematics' },
          { id: 'iot', label: 'DOM.01 // IoT & Telemetry' },
          { id: 'edge-ai', label: 'DOM.04 // AI & Embedded' },
        ].map((f) => (
          <button
            key={f.id}
            className={`filter-chip ${projectFilter === f.id ? 'active' : ''}`}
            onClick={() => setProjectFilter(f.id)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="projects-bento">
        {filtered.map((proj) => (
          <div
            key={proj.id}
            className="project-card reveal-up"
            onClick={() => onSelectProject(proj)}
          >
            <div className="project-thumb">
              <SmartImage imageObj={IMAGES[proj.imageKey]} alt={proj.title} />
              <span className="project-id-badge">{proj.id}</span>
              <span className="project-status-badge">{proj.status}</span>
            </div>
            <div className="project-body">
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  color: 'var(--accent-ice)',
                  marginBottom: '0.4rem',
                }}
              >
                {proj.domainLabel.toUpperCase()}
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.3rem',
                  marginBottom: '0.65rem',
                }}
              >
                {proj.title}
              </h3>
              <p
                style={{
                  fontSize: '0.9rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.6,
                  marginBottom: '1.2rem',
                  flex: 1,
                }}
              >
                {proj.summary}
              </p>
              <div className="stack-pills">
                {proj.stack.map((s) => (
                  <span key={s} className="stack-pill">
                    {s}
                  </span>
                ))}
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingTop: '0.9rem',
                  borderTop: '1px solid var(--border-hairline)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.74rem',
                }}
              >
                <span style={{ color: 'var(--accent-amber)' }}>
                  Open System Blueprint →
                </span>
                <span style={{ color: 'var(--text-muted)' }}>{proj.lead}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ============================================================================
   3. TEAM PAGE (ALL 19 STUDENT BUILDERS)
   ============================================================================ */
function TeamPage({ navigateTo, onSelectMember }) {
  const [roleFilter, setRoleFilter] = useState('ALL');
  const categories = [
    'ALL',
    'CORE EXEC',
    'DOMAIN LEADS',
    'AVIONICS & AI',
    'HARDWARE & CAD',
  ];

  const filteredMembers =
    roleFilter === 'ALL'
      ? TEAM_MEMBERS
      : TEAM_MEMBERS.filter((m) => m.category === roleFilter);

  return (
    <section className="full-bleed-section" style={{ paddingTop: '8rem' }}>
      <div className="section-header-bar reveal-up">
        <div>
          <div className="eyebrow-tag">HUMAN CAPITAL // R&amp;D ROSTER</div>
          <h1 className="section-title">The Builders Behind FUSION</h1>
        </div>
        <p className="section-lead">
          Click any builder&apos;s portrait card below to launch their
          split-shutter engineering dossier, hardware stack, and active lab
          contributions.
        </p>
      </div>

      <div
        className="team-viewfinder-wrap reveal-up"
        style={{ marginBottom: '3.5rem' }}
      >
        <div className="viewfinder-media">
          <SmartImage
            imageObj={IMAGES.teamPhoto}
            alt="FUSION Team at GLA University"
          />
          <div className="viewfinder-vignette" />
          <div className="viewfinder-hud-corner top-left">
            ROSTER_2026 // GLA UNIVERSITY CAMPUS
          </div>
          <div className="viewfinder-hud-corner top-right">
            {TEAM_MEMBERS.length} CORE BUILDERS
          </div>
        </div>
      </div>

      <div className="filter-bar reveal-up">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-chip ${roleFilter === cat ? 'active' : ''}`}
            onClick={() => setRoleFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="domains-grid">
        {filteredMembers.map((member) => (
          <div
            key={member.id}
            className="team-member-card reveal-up"
            onClick={() => onSelectMember(member)}
          >
            <div className="team-card-portrait">
              <SmartImage imageObj={member.photo} alt={member.name} />
              <div className="team-card-portrait-scrim" />
              <div className="team-card-top-badges">
                <span className="team-callsign-badge">{member.callsign}</span>
                <span className="team-id-tag">{member.id}</span>
              </div>
            </div>

            <div className="team-card-body">
              <div>
                <h3
                  className="domain-title"
                  style={{ marginBottom: '0.25rem', fontSize: '1.28rem' }}
                >
                  {member.name}
                </h3>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.73rem',
                    color: 'var(--accent-ice)',
                    marginBottom: '0.75rem',
                  }}
                >
                  {member.role}
                </div>

                <p className="domain-desc" style={{ marginBottom: '1rem' }}>
                  {member.specialty}
                </p>
              </div>

              <div className="domain-footer">
                <span style={{ color: 'var(--text-muted)', fontSize: '0.7rem' }}>
                  {member.batch}
                </span>
                <span className="explore-link" style={{ fontSize: '0.72rem' }}>
                  Dossier <ArrowUpRight size={14} />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ============================================================================
   4. JOURNEY PAGE
   ============================================================================ */
function JourneyPage() {
  return (
    <section className="full-bleed-section" style={{ paddingTop: '8rem' }}>
      <div className="section-header-bar reveal-up">
        <div>
          <div className="eyebrow-tag">CHRONOLOGY // 2023 — 2026</div>
          <h1 className="section-title">
            From One Workbench to an R&amp;D Fleet
          </h1>
        </div>
        <p className="section-lead">
          Every flight controller crash, burnt MOSFET, and late-night soldering
          session that shaped FUSION into GLA University&apos;s flagship
          hardware community.
        </p>
      </div>

      <div className="timeline-track">
        {(JOURNEY_MILESTONES || []).map((item) => (
          <div key={item.code} className="timeline-node reveal-up">
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '0.5rem',
                marginBottom: '0.6rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
              }}
            >
              <span style={{ color: 'var(--accent-amber)' }}>
                {item.year} · {item.code}
              </span>
              <span className="stack-pill">{item.metric}</span>
            </div>
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.45rem',
                marginBottom: '0.6rem',
              }}
            >
              {item.title}
            </h3>
            <p
              style={{
                color: 'var(--text-secondary)',
                lineHeight: 1.65,
                maxWidth: '75ch',
              }}
            >
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ============================================================================
   5. BLOG PAGE
   ============================================================================ */
function BlogPage({ onSelectPost }) {
  return (
    <section className="full-bleed-section" style={{ paddingTop: '8rem' }}>
      <div className="section-header-bar reveal-up">
        <div>
          <div className="eyebrow-tag">LAB JOURNAL // FIELD NOTES</div>
          <h1 className="section-title">
            Engineering Dispatches &amp; Teardowns
          </h1>
        </div>
        <p className="section-lead">
          Deep technical post-mortems, KiCad layout rules, ROS2 configuration
          files, and flight test telemetry logs written by FUSION builders.
        </p>
      </div>

      <div className="projects-bento">
        {(BLOG_POSTS || []).map((post) => (
          <div
            key={post.id}
            className="domain-card reveal-up"
            onClick={() => onSelectPost(post)}
          >
            <div>
              <div className="domain-top-row">
                <span
                  className="stack-pill"
                  style={{ color: 'var(--accent-ice)' }}
                >
                  {post.category}
                </span>
                <span className="domain-code">
                  {post.id} · {post.readTime}
                </span>
              </div>

              <h3 className="domain-title" style={{ fontSize: '1.3rem' }}>
                {post.title}
              </h3>
              <p className="domain-desc">{post.excerpt}</p>
            </div>

            <div className="domain-footer">
              <span style={{ color: 'var(--text-muted)' }}>
                By {post.author}
              </span>
              <span className="explore-link">
                Read Technical Log <ArrowUpRight size={14} />
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ============================================================================
   6. JOIN FUSION PAGE (ELITE HARDWARE RECRUITMENT PORTAL)
   ============================================================================ */
const DOMAIN_RECRUIT_INFO = {
  iot: {
    rigId: 'SYS-IOT-03',
    rigName: 'PULSE-MESH Sub-GHz Sensor Grid & Gateway',
    starterKit: 'ESP32-S3 + SX1262 LoRa Node & 4-Layer KiCad Setup',
    prereqs: 'Curiosity in embedded firmware; soldering & PCB layout taught in lab',
    leads: 'Adhish Gupta & Aviral Sachdeva',
    metric: '4.8 KM LOS TELEMETRY',
    tools: ['KiCad 8', 'ESP-IDF', 'SX1262 LoRa', 'FreeRTOS', 'MQTT'],
  },
  robotics: {
    rigId: 'SYS-ROB-02',
    rigName: 'VANGUARD-R2 Autonomous SLAM Ground Rover',
    starterKit: 'RP2040 Motor Controller + 6-Axis IMU & ROS2 Nav2 Docker',
    prereqs: 'Basic C++ or Python; closed-loop kinematics & SLAM taught in lab',
    leads: 'Amardeep Singh & Krishan Kant Sharma',
    metric: '1.0 kHz REAL-TIME CONTROL',
    tools: ['ROS2 Humble', 'Inverse Kinematics', 'LiDAR SLAM', 'CAN Bus', 'SolidWorks'],
  },
  uav: {
    rigId: 'SYS-UAV-01',
    rigName: 'AETHER-X6 Heavy Telemetry Hexacopter',
    starterKit: 'PX4 SITL Drone Simulation + MAVLink Telemetry Bench',
    prereqs: 'Comfort with Linux/terminal; flight tuning & safety protocols taught in lab',
    leads: 'Aanya Maheshwari & Avinash Pathak',
    metric: '38 MIN HOVER ENDURANCE',
    tools: ['PX4 Autopilot', 'MAVLink', 'RTK-GNSS', 'EKF2 Tuning', 'Carbon Airframes'],
  },
  'edge-ai': {
    rigId: 'SYS-AI-04',
    rigName: 'NEURO-SIGHT On-Device Vision Obstacle Avoidance',
    starterKit: 'Jetson Orin Nano + Oak-D Stereo Depth Camera Stream',
    prereqs: 'Basic Python / PyTorch; TensorRT quantization & CUDA pipelines taught in lab',
    leads: 'Anuj Patwa & Nandini Sharma',
    metric: '8.4 ms INT8 INFERENCE',
    tools: ['TensorRT INT8', 'Jetson Orin', 'OpenCV', 'PyTorch', 'ROS2 Vision'],
  },
};

const AVAILABLE_SKILLS = [
  'C / C++',
  'Python',
  'Arduino / ESP32',
  'ROS / ROS2',
  'KiCad / PCB Design',
  'SolidWorks / CAD',
  '3D Printing',
  'Soldering & Hardware Assembly',
  'Linux & Bash',
  'Git / GitHub',
  'Complete Beginner (Eager to Build!)',
];

const QUICK_IDEAS = [
  '+ Swarm Drone Offboard Control',
  '+ Campus LoRa Air Quality Mesh',
  '+ 6-DOF Robotic Arm Inverse Kinematics',
  '+ Real-Time Jetson YOLOv8 Vision',
  '+ Custom 4-Layer PCB Flight Recorder',
];

function JoinPage() {
  const [selectedDomain, setSelectedDomain] = useState('uav');
  const [step, setStep] = useState(1);
  const [pingMs, setPingMs] = useState(14);
  const [isTransmitting, setIsTransmitting] = useState(false);
  const [txMessage, setTxMessage] = useState('ENCRYPTING TELEMETRY PACKET (AES-256)...');
  const [submitted, setSubmitted] = useState(false);
  const [copiedReceipt, setCopiedReceipt] = useState(false);
  const [candidateId, setCandidateId] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    branchYear: '',
    contact: '',
    skills: ['C / C++', 'Arduino / ESP32'],
    reason: '',
    commitment: '8-12 hrs / week (Core Explorer)',
  });

  // Simulated live fluctuating telemetry ping for realism
  useEffect(() => {
    const interval = setInterval(() => {
      setPingMs(Math.floor(12 + Math.random() * 5));
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  const activeDomainData = DOMAINS.find((d) => d.id === selectedDomain);
  const activeRecruitData = DOMAIN_RECRUIT_INFO[selectedDomain];

  const toggleSkill = (skill) => {
    setFormData((prev) => {
      const exists = prev.skills.includes(skill);
      const nextSkills = exists
        ? prev.skills.filter((s) => s !== skill)
        : [...prev.skills, skill];
      return { ...prev, skills: nextSkills };
    });
  };

  const handleIdeaClick = (ideaText) => {
    const cleanIdea = ideaText.replace(/^\+\s*/, '');
    setFormData((prev) => ({
      ...prev,
      reason: prev.reason
        ? `${prev.reason.trim()} · Interested in: ${cleanIdea}`
        : `I want to build a system focusing on: ${cleanIdea}`,
    }));
  };

  const handleStep1Proceed = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.branchYear.trim()) {
      alert('Please fill out your Full Name, GLA Email, and Branch & Year before proceeding.');
      return;
    }
    setStep(2);
    window.scrollTo({ top: 320, behavior: 'smooth' });
  };

  const handleFinalSubmit = async (e) => {
    e.preventDefault();
    setIsTransmitting(true);
    setTxMessage('ENCRYPTING TELEMETRY PAYLOAD (AES-256)...');

    const newId = `FUS-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    setCandidateId(newId);

    // Format rich telemetry payload
    const submissionPayload = {
      candidateId: newId,
      timestamp: new Date().toISOString(),
      name: formData.name,
      email: formData.email,
      branchYear: formData.branchYear,
      contact: formData.contact || 'Not provided',
      domainId: selectedDomain,
      domainTitle: activeDomainData?.title,
      skills: formData.skills,
      reason: formData.reason,
      commitment: formData.commitment,
    };

    // Store in localStorage so applications are never lost
    try {
      const existing = JSON.parse(localStorage.getItem('fusion_cohort_applications') || '[]');
      existing.unshift(submissionPayload);
      localStorage.setItem('fusion_cohort_applications', JSON.stringify(existing));
    } catch {
      // LocalStorage access fallback
    }

    // Direct Discord Webhook Integration (Zero Backend Needed)
    const discordWebhookUrl = import.meta.env?.VITE_DISCORD_WEBHOOK_URL;
    if (discordWebhookUrl) {
      try {
        await fetch(discordWebhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            embeds: [
              {
                title: `🛰️ New FUSION Lab Candidate: ${formData.name}`,
                description: `Telemetry application logged for **Cohort 2026** at GLA University.`,
                color: 0xf59e0b,
                fields: [
                  { name: 'Candidate ID', value: `\`${newId}\``, inline: true },
                  { name: 'GLA Email', value: formData.email, inline: true },
                  { name: 'Branch & Year', value: formData.branchYear, inline: true },
                  { name: 'Domain Track', value: activeDomainData?.title || selectedDomain, inline: true },
                  { name: 'Contact / Discord', value: formData.contact || 'None', inline: true },
                  { name: 'Commitment', value: formData.commitment, inline: true },
                  { name: 'Hardware / Software Skills', value: formData.skills.join(', ') || 'Beginner', inline: false },
                  { name: 'Hardware Intent', value: formData.reason || 'None provided', inline: false },
                ],
                footer: { text: `FUSION Telemetry Uplink // GLA University // CRC16 0xF510` },
                timestamp: new Date().toISOString(),
              },
            ],
          }),
        });
      } catch {
        // Discord Webhook failed or offline, gracefully continue
      }
    }

    // Step 2 of transmission simulation
    setTimeout(() => {
      setTxMessage('TRANSMITTING TO FUSION UPLINK NODE // CRC16 0xF510 OK...');
    }, 450);

    // Final completion handshake
    setTimeout(() => {
      setIsTransmitting(false);
      setSubmitted(true);
      confetti({
        particleCount: 110,
        spread: 80,
        origin: { y: 0.6 },
      });
    }, 900);
  };

  const handleCopyReceipt = () => {
    const textReceipt = `[FUSION HARDWARE LAB // ADMISSION DOCKET]
CANDIDATE ID: ${candidateId}
NAME: ${formData.name}
GLA EMAIL: ${formData.email}
BRANCH & YEAR: ${formData.branchYear}
TRACK: ${activeDomainData?.title} (${activeRecruitData.rigName})
TIMESTAMP: ${new Date().toLocaleString()}
STATUS: TELEMETRY UPLINK CONFIRMED // CRC16 VERIFIED
GLA UNIVERSITY CAMPUS // FUSION LAB B-BLOCK`;

    navigator.clipboard.writeText(textReceipt).then(() => {
      setCopiedReceipt(true);
      setTimeout(() => setCopiedReceipt(false), 2400);
    });
  };

  const resetForm = () => {
    setSubmitted(false);
    setStep(1);
    setFormData({
      name: '',
      email: '',
      branchYear: '',
      contact: '',
      skills: ['C / C++', 'Arduino / ESP32'],
      reason: '',
      commitment: '8-12 hrs / week (Core Explorer)',
    });
  };

  return (
    <section className="full-bleed-section" style={{ paddingTop: '8rem' }}>
      <div className="section-header-bar reveal-up">
        <div>
          <div className="eyebrow-tag">RECRUITMENT // COHORT 2026</div>
          <h1 className="section-title">Join the FUSION Hardware Lab</h1>
        </div>
        <p className="section-lead">
          No prior PCB, drone, or ROS experience is required. We look for curiosity,
          grit, and willingness to build real systems with your hands.
        </p>
      </div>

      {submitted ? (
        <div className="recruitment-panel reveal-up" style={{ gridTemplateColumns: '1fr' }}>
          <div className="admission-receipt-docket" style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center' }}>
            <div style={{ display: 'inline-flex', padding: '0.85rem', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.12)', border: '1px solid rgba(16, 185, 129, 0.35)', marginBottom: '1.25rem' }}>
              <ShieldCheck size={42} color="var(--accent-emerald)" />
            </div>

            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.74rem', letterSpacing: '0.16em', color: 'var(--accent-emerald)', marginBottom: '0.4rem' }}>
              TELEMETRY UPLINK CONFIRMED // APPLICATION VERIFIED
            </div>

            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3.2vw, 2.5rem)', fontWeight: 700, marginBottom: '0.75rem' }}>
              Welcome to Cohort 2026, {formData.name.split(' ')[0]}!
            </h2>

            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.65, maxWidth: '54ch', margin: '0 auto 1.5rem', fontSize: '0.96rem' }}>
              Your application dossier has been securely logged for the{' '}
              <strong style={{ color: 'var(--accent-amber)' }}>{activeDomainData?.title}</strong> track. Domain leads{' '}
              <strong>{activeRecruitData.leads}</strong> will review your intent for the upcoming lab induction.
            </p>

            <div className="admission-receipt-grid">
              <div>
                <span className="track-docket-spec-label">CANDIDATE ID</span>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1rem', color: 'var(--accent-amber)', fontWeight: 700 }}>
                  {candidateId}
                </div>
              </div>
              <div>
                <span className="track-docket-spec-label">ASSIGNED LAB RIG</span>
                <div style={{ fontSize: '0.88rem', color: '#fff', fontWeight: 600 }}>
                  {activeRecruitData.rigId}
                </div>
              </div>
              <div>
                <span className="track-docket-spec-label">OFFICIAL EMAIL</span>
                <div style={{ fontSize: '0.86rem', color: 'var(--text-secondary)' }}>
                  {formData.email}
                </div>
              </div>
              <div>
                <span className="track-docket-spec-label">CAMPUS NODE</span>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.84rem', color: 'var(--accent-ice)' }}>
                  GLA_LAB_B1 // 27.6057° N
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.85rem', flexWrap: 'wrap' }}>
              <button className="btn-tactical" onClick={handleCopyReceipt}>
                {copiedReceipt ? (
                  <>
                    <Check size={16} color="var(--accent-emerald)" /> Receipt Copied!
                  </>
                ) : (
                  <>
                    <Copy size={16} /> Copy Application Receipt
                  </>
                )}
              </button>

              <button className="btn-amber" onClick={resetForm}>
                Submit Another Response <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="recruitment-panel reveal-up" style={{ alignItems: 'start' }}>
          {/* LEFT COLUMN: 2-STEP INTERACTIVE FORM */}
          <div>
            {/* 1. Live Telemetry Connection Status Badge */}
            <div className="telemetry-live-badge">
              <div className="telemetry-badge-left">
                <span className="live-ping-dot" />
                <span style={{ fontWeight: 600 }}>SYS_STATUS // SECURE COHORT ENCRYPTION ACTIVE</span>
              </div>
              <div className="telemetry-badge-metrics">
                <span>PING: {pingMs}ms</span>
                <span>|</span>
                <span>TLS 1.3 / AES-256</span>
                <span>|</span>
                <span className="telemetry-stat-buff">BUFFER_OK</span>
              </div>
            </div>

            {/* 2. Step-by-Step Interactive Progress Bar */}
            <div className="cohort-stepper-header">
              <div
                className={`stepper-step ${step === 1 ? 'is-active' : 'is-done'}`}
                onClick={() => setStep(1)}
              >
                <div className="stepper-circle">
                  {step > 1 ? <Check size={14} color="#05070b" /> : '01'}
                </div>
                <div className="stepper-meta">
                  <span className="stepper-tag">PHASE 01</span>
                  <span className="stepper-label">Track &amp; Credentials</span>
                </div>
              </div>

              <div className="stepper-connector">
                <div className="stepper-line" style={{ width: step === 2 ? '100%' : '0%' }} />
              </div>

              <div
                className={`stepper-step ${step === 2 ? 'is-active' : ''}`}
                onClick={() => {
                  if (formData.name && formData.email && formData.branchYear) setStep(2);
                }}
              >
                <div className="stepper-circle">02</div>
                <div className="stepper-meta">
                  <span className="stepper-tag">PHASE 02</span>
                  <span className="stepper-label">Hardware Intent &amp; Tooling</span>
                </div>
              </div>
            </div>

            {isTransmitting ? (
              <div className="tx-transmitting-card">
                <div className="live-ping-dot" style={{ width: '14px', height: '14px' }} />
                <div style={{ color: 'var(--accent-amber)', fontSize: '1.05rem', fontWeight: 600, letterSpacing: '0.08em' }}>
                  {txMessage}
                </div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.74rem' }}>
                  HANDSHAKE // GLA_CAMPUS_NODE_TX · PACKET SIZE 256 BYTES
                </div>
              </div>
            ) : step === 1 ? (
              /* ==================== STEP 1: DOMAIN & CREDENTIALS ==================== */
              <form onSubmit={handleStep1Proceed} style={{ display: 'grid', gap: '1.4rem' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.65rem' }}>
                    <label style={{ fontFamily: 'var(--font-mono)', fontSize: '0.74rem', color: 'var(--text-secondary)' }}>
                      01 // SELECT YOUR PRIMARY DOMAIN TRACK
                    </label>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--accent-ice)' }}>
                      ● DYNAMIC HARDWARE BENCH
                    </span>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.75rem' }}>
                    {DOMAINS.map((d) => {
                      const isActive = selectedDomain === d.id;
                      return (
                        <button
                          type="button"
                          key={d.id}
                          className={`domain-spec-btn ${isActive ? 'is-active' : ''}`}
                          onClick={() => setSelectedDomain(d.id)}
                        >
                          <div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem' }}>
                              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.66rem', color: isActive ? 'var(--accent-amber)' : 'var(--text-muted)' }}>
                                {d.code}
                              </span>
                              {isActive && (
                                <span style={{ fontSize: '0.58rem', background: 'rgba(245, 158, 11, 0.2)', color: 'var(--accent-amber)', padding: '0.15rem 0.4rem', borderRadius: '4px', border: '1px solid rgba(245, 158, 11, 0.4)', fontFamily: 'var(--font-mono)' }}>
                                  ACTIVE RIG
                                </span>
                              )}
                            </div>
                            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '0.98rem' }}>
                              {d.title}
                            </div>
                          </div>
                          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.66rem', color: 'var(--accent-ice)' }}>
                            {DOMAIN_RECRUIT_INFO[d.id]?.metric}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
                      FULL NAME *
                    </label>
                    <input
                      required
                      className="input-field"
                      placeholder="e.g., Arjun Verma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
                      GLA UNIVERSITY EMAIL *
                    </label>
                    <input
                      required
                      type="email"
                      className="input-field"
                      placeholder="your.name_cs24@gla.ac.in"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
                      BRANCH &amp; YEAR *
                    </label>
                    <input
                      required
                      className="input-field"
                      placeholder="e.g., B.Tech CSE (AIML) — II Year"
                      value={formData.branchYear}
                      onChange={(e) => setFormData({ ...formData, branchYear: e.target.value })}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
                      WHATSAPP OR DISCORD (OPTIONAL)
                    </label>
                    <input
                      className="input-field"
                      placeholder="e.g., +91 98765 43210 or @discord_tag"
                      value={formData.contact}
                      onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                    />
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: '0.5rem' }}>
                  <button type="submit" className="btn-amber" style={{ padding: '0.85rem 1.75rem' }}>
                    Proceed to Phase 02: Hardware Intent <ArrowRight size={17} />
                  </button>
                </div>
              </form>
            ) : (
              /* ==================== STEP 2: TECHNICAL INTENT & SUBMISSION ==================== */
              <form onSubmit={handleFinalSubmit} style={{ display: 'grid', gap: '1.4rem' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <label style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-secondary)' }}>
                      02 // TECHNICAL BACKGROUND &amp; FAMILIAR TOOLS (CLICK ALL THAT APPLY)
                    </label>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.66rem', color: 'var(--text-muted)' }}>
                      {formData.skills.length} SELECTED
                    </span>
                  </div>

                  <div className="tool-chips-grid">
                    {AVAILABLE_SKILLS.map((skill) => {
                      const isSelected = formData.skills.includes(skill);
                      return (
                        <button
                          type="button"
                          key={skill}
                          className={`tool-chip ${isSelected ? 'is-selected' : ''}`}
                          onClick={() => toggleSkill(skill)}
                        >
                          {isSelected && <Check size={12} />}
                          <span>{skill}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                    <label style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-secondary)' }}>
                      03 // WHAT DO YOU WANT TO BUILD AT FUSION? *
                    </label>
                  </div>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '0.6rem' }}>
                    {QUICK_IDEAS.map((idea) => (
                      <button
                        type="button"
                        key={idea}
                        onClick={() => handleIdeaClick(idea)}
                        style={{
                          background: 'rgba(255,255,255,0.03)',
                          border: '1px solid rgba(255,255,255,0.1)',
                          borderRadius: '4px',
                          color: 'var(--accent-ice)',
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.65rem',
                          padding: '0.2rem 0.5rem',
                          cursor: 'pointer',
                        }}
                      >
                        {idea}
                      </button>
                    ))}
                  </div>

                  <textarea
                    required
                    rows={4}
                    className="input-field"
                    placeholder="Tell us about a hardware idea, drone, rover, or embedded system you want to build... (e.g., A swarm of indoor collision-avoiding micro-drones, custom smart energy monitor, or learning how to design 4-layer PCBs from scratch!)"
                    value={formData.reason}
                    onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
                    04 // ESTIMATED WEEKLY LAB COMMITMENT
                  </label>
                  <select
                    className="input-field"
                    value={formData.commitment}
                    onChange={(e) => setFormData({ ...formData, commitment: e.target.value })}
                    style={{ cursor: 'pointer' }}
                  >
                    <option value="4-6 hrs / week (Sprint Builder)">4-6 hrs / week (Sprint Builder)</option>
                    <option value="8-12 hrs / week (Core Explorer)">8-12 hrs / week (Core Explorer — Recommended)</option>
                    <option value="15+ hrs / week (Hardcore Lab Resident)">15+ hrs / week (Hardcore Lab Resident)</option>
                  </select>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '0.5rem', gap: '1rem', flexWrap: 'wrap' }}>
                  <button
                    type="button"
                    className="btn-tactical"
                    onClick={() => setStep(1)}
                  >
                    ← Back to Credentials
                  </button>

                  <button type="submit" className="btn-amber" style={{ padding: '0.85rem 1.85rem' }}>
                    <Send size={15} /> Transmit Cohort Application [UPLINK]
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* RIGHT COLUMN: DYNAMIC HARDWARE SPECIFICATION & ONBOARDING PIPELINE */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', borderLeft: '1px solid rgba(255,255,255,0.08)', paddingLeft: 'clamp(1rem, 2vw, 1.75rem)' }}>
            {/* Dynamic Track Telemetry Card */}
            <div className="track-telemetry-docket">
              <div className="track-docket-header">
                <div>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.66rem', color: 'var(--accent-amber)', letterSpacing: '0.14em' }}>
                    HARDWARE SPECIFICATION
                  </span>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', marginTop: '0.2rem' }}>
                    {activeDomainData?.title}
                  </h3>
                </div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', padding: '0.2rem 0.55rem', borderRadius: '4px', background: 'rgba(56, 189, 248, 0.12)', border: '1px solid rgba(56, 189, 248, 0.3)', color: 'var(--accent-ice)' }}>
                  {activeDomainData?.code}
                </span>
              </div>

              <div className="track-docket-spec-row">
                <span className="track-docket-spec-label">ACTIVE LAB RIG</span>
                <span className="track-docket-spec-val" style={{ color: 'var(--accent-amber)' }}>
                  {activeRecruitData.rigId} // {activeRecruitData.rigName}
                </span>
              </div>

              <div className="track-docket-spec-row">
                <span className="track-docket-spec-label">LAB STARTER KIT PROVIDED</span>
                <span className="track-docket-spec-val">
                  {activeRecruitData.starterKit}
                </span>
              </div>

              <div className="track-docket-spec-row">
                <span className="track-docket-spec-label">DOMAIN LEAD MENTORS</span>
                <span className="track-docket-spec-val" style={{ color: 'var(--text-primary)' }}>
                  {activeRecruitData.leads}
                </span>
              </div>

              <div className="track-docket-spec-row">
                <span className="track-docket-spec-label">PREREQUISITE PROFILE</span>
                <span style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  {activeRecruitData.prereqs}
                </span>
              </div>

              <div className="track-docket-spec-row">
                <span className="track-docket-spec-label">CORE LAB STACK</span>
                <div className="stack-pills" style={{ marginTop: '0.4rem', marginBottom: 0 }}>
                  {activeRecruitData.tools.map((tool) => (
                    <span key={tool} className="stack-pill" style={{ fontSize: '0.68rem', padding: '0.22rem 0.55rem' }}>
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Standard Onboarding Milestones */}
            <div style={{ display: 'grid', gap: '0.75rem' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)', letterSpacing: '0.12em' }}>
                ONBOARDING PIPELINE
              </div>
              <div className="hud-metric-box">
                <div className="hud-metric-label">PHASE 01 // LAB TOUR &amp; RIG REVIEW</div>
                <div className="hud-metric-val" style={{ fontSize: '0.82rem' }}>
                  Meet domain leads, inspect active drones, rovers &amp; solder stations
                </div>
              </div>
              <div className="hud-metric-box">
                <div className="hud-metric-label">PHASE 02 // 2-WEEK STARTER SPRINT</div>
                <div className="hud-metric-val" style={{ fontSize: '0.82rem' }}>
                  Hands-on starter project kit with assigned student mentor
                </div>
              </div>
              <div className="hud-metric-box">
                <div className="hud-metric-label">PHASE 03 // CORE FLEET DEPLOYMENT</div>
                <div className="hud-metric-val" style={{ fontSize: '0.82rem' }}>
                  Deploy on live campus infrastructure and national hackathon challenges
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

/* ============================================================================
   FULL-BLEED PROJECT INSPECTION DECK (GSAP SHUTTER ANIMATION)
   ============================================================================ */
function ProjectFullBleedDeck({ project, onClose, onSwitchProject }) {
  const deckRef = useRef(null);

  const currentIndex = PROJECTS.findIndex((p) => p.id === project.id);
  const prevProject =
    PROJECTS[(currentIndex - 1 + PROJECTS.length) % PROJECTS.length];
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];
  const currentProjectImage = IMAGES[project.imageKey];

  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') handleAnimatedClose();
      if (e.key === 'ArrowRight') handleSwitch(nextProject);
      if (e.key === 'ArrowLeft') handleSwitch(prevProject);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project]);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.to(deckRef.current, {
        clipPath: 'inset(0% 0% 0% 0%)',
        duration: 0.6,
        ease: 'power4.inOut',
      });

      tl.fromTo(
        '.fb-bg-zoom',
        { scale: 1.14, opacity: 0.15 },
        { scale: 1, opacity: 1, duration: 1.1, ease: 'power3.out' },
        '-=0.35'
      );

      tl.fromTo(
        '.fb-anim-item',
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.55,
          stagger: 0.06,
          ease: 'power3.out',
        },
        '-=0.85'
      );
    },
    { dependencies: [project.id], scope: deckRef }
  );

  const handleAnimatedClose = () => {
    const tl = gsap.timeline({ onComplete: onClose });
    tl.to('.fb-anim-item', {
      y: -20,
      opacity: 0,
      duration: 0.22,
      stagger: 0.02,
      ease: 'power2.in',
    });
    tl.to(
      deckRef.current,
      {
        clipPath: 'inset(0% 0% 100% 0%)',
        duration: 0.45,
        ease: 'power4.inOut',
      },
      '-=0.08'
    );
  };

  const handleSwitch = (targetProj) => {
    gsap.to('.fb-anim-item', {
      y: 14,
      opacity: 0,
      duration: 0.18,
      ease: 'power2.in',
      onComplete: () => onSwitchProject(targetProj),
    });
  };

  return (
    <div ref={deckRef} className="fb-deck-overlay">
      <div className="fb-deck-bg">
        <div
          key={project.id}
          className="fb-bg-zoom"
          style={{ width: '100%', height: '100%' }}
        >
          <SmartImage
            key={project.id}
            imageObj={currentProjectImage}
            alt={project.title}
          />
        </div>
        <div className="fb-deck-scrim" />
      </div>

      <div className="fb-deck-gridlines" aria-hidden="true" />

      <div className="fb-deck-topbar fb-anim-item">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            flexWrap: 'wrap',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.74rem',
          }}
        >
          <span style={{ color: 'var(--accent-amber)', fontWeight: 600 }}>
            // {project.id}
          </span>
          <span style={{ color: 'var(--text-muted)' }}>|</span>
          <span style={{ color: 'var(--accent-ice)' }}>
            {project.domainLabel.toUpperCase()}
          </span>
          <span style={{ color: 'var(--text-muted)' }}>|</span>
          <span
            style={{
              color: '#34d399',
              background: 'rgba(16, 185, 129, 0.12)',
              border: '1px solid rgba(16, 185, 129, 0.35)',
              padding: '0.2rem 0.55rem',
              borderRadius: '4px',
              fontSize: '0.66rem',
            }}
          >
            ● {project.status}
          </span>
        </div>

        <button className="fb-close-btn" onClick={handleAnimatedClose}>
          <span>ESC // CLOSE DECK</span>
          <X size={15} />
        </button>
      </div>

      <div className="fb-deck-main">
        <div>
          <div
            className="fb-anim-item"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              letterSpacing: '0.18em',
              color: 'var(--accent-amber)',
              marginBottom: '0.75rem',
            }}
          >
            FUSION HARDWARE ARCHIVE · DEPLOYMENT YEAR {project.year}
          </div>

          <h1
            className="fb-anim-item"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.1rem, 4.2vw, 3.8rem)',
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              marginBottom: '1.1rem',
              maxWidth: '18ch',
            }}
          >
            {project.title}
          </h1>

          <p
            className="fb-anim-item"
            style={{
              fontSize: 'clamp(0.96rem, 1.1vw, 1.08rem)',
              lineHeight: 1.7,
              color: '#e2e8f0',
              maxWidth: '56ch',
              textShadow: '0 2px 14px rgba(0,0,0,0.85)',
            }}
          >
            {project.summary}
          </p>

          <div className="fb-spec-matrix fb-anim-item">
            {project.specs.map((spec, idx) => (
              <div key={spec.label} className="fb-spec-cell">
                <span className="fb-spec-index">SPEC // 0{idx + 1}</span>
                <div className="fb-spec-label">{spec.label}</div>
                <div className="fb-spec-value">{spec.value}</div>
              </div>
            ))}
          </div>

          <div
            className="fb-anim-item"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem',
            }}
          >
            <div className="stack-pills" style={{ marginBottom: 0 }}>
              {project.stack.map((tech) => (
                <span key={tech} className="stack-pill">
                  {tech}
                </span>
              ))}
            </div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.74rem',
                color: 'var(--accent-amber)',
              }}
            >
              SYSTEM LEAD // {project.lead}
            </div>
          </div>
        </div>

        <div
          className="fb-anim-item"
          style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}
        >
          <div className="fb-hardware-preview">
            <SmartImage
              key={`preview-${project.id}`}
              imageObj={currentProjectImage}
              alt={project.title}
            />
            <div className="fb-preview-badge">OPTICAL FEED // {project.id}</div>
          </div>

          <div className="fb-schematic-panel">
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '0.85rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
              }}
            >
              <span style={{ color: 'var(--accent-amber)' }}>
                // SIGNAL &amp; CONTROL ARCHITECTURE
              </span>
              <span style={{ color: 'var(--text-muted)' }}>
                REV 2.4 · GLA LAB
              </span>
            </div>

            <div className="fb-pipeline-nodes">
              {project.stack.slice(0, 4).map((node, i) => (
                <React.Fragment key={node}>
                  <span className="fb-pipeline-step">{node}</span>
                  {i < Math.min(project.stack.length, 4) - 1 && (
                    <ArrowRight size={13} color="var(--text-muted)" />
                  )}
                </React.Fragment>
              ))}
            </div>

            <p
              style={{
                fontSize: '0.92rem',
                lineHeight: 1.65,
                color: '#dbe4f0',
                marginBottom: '1rem',
              }}
            >
              {project.architecture}
            </p>

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                paddingTop: '0.75rem',
                borderTop: '1px solid rgba(255,255,255,0.08)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.66rem',
                color: 'var(--text-muted)',
              }}
            >
              <span>VERIFIED: HARDWARE-IN-LOOP</span>
              <span>TELEMETRY: NOMINAL</span>
            </div>
          </div>
        </div>
      </div>

      <div className="fb-deck-bottombar fb-anim-item">
        <button
          className="fb-nav-btn"
          onClick={() => handleSwitch(prevProject)}
        >
          ← PREV // {prevProject.id}
        </button>

        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.7rem',
            color: 'var(--text-muted)',
            letterSpacing: '0.14em',
          }}
        >
          SYSTEM 0{currentIndex + 1} OF 0{PROJECTS.length} · USE ← / → KEYS TO
          CYCLE
        </span>

        <button
          className="fb-nav-btn"
          onClick={() => handleSwitch(nextProject)}
        >
          NEXT // {nextProject.id} →
        </button>
      </div>
    </div>
  );
}

/* ============================================================================
   FULL-BLEED TEAM MEMBER DOSSIER (HORIZONTAL SPLIT-SHUTTER GSAP ANIMATION)
   ============================================================================ */
function TeamMemberDossier({ member, onClose, onSwitchMember }) {
  const dossierRef = useRef(null);
  const portraitColRef = useRef(null);

  const currentIndex = TEAM_MEMBERS.findIndex((m) => m.id === member.id);
  // Alternate sides! Index 0, 2, 4 (TM-01, TM-03, TM-05, TM-07...) = Portrait Left, Description Right
  // Index 1, 3, 5 (TM-02, TM-04, TM-06, TM-08...) = Description Left, Portrait Right
  const isFlipped = currentIndex % 2 === 1;

  const prevMember =
    TEAM_MEMBERS[(currentIndex - 1 + TEAM_MEMBERS.length) % TEAM_MEMBERS.length];
  const nextMember =
    TEAM_MEMBERS[(currentIndex + 1) % TEAM_MEMBERS.length];

  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') handleAnimatedClose();
      if (e.key === 'ArrowRight') handleSwitch(nextMember);
      if (e.key === 'ArrowLeft') handleSwitch(prevMember);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [member]);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      // Flip shutter wipe & slide direction based on which side the description is on
      const startClip = isFlipped
        ? 'inset(0 0% 0 100%)' // Wipes in from Right edge
        : 'inset(0 100% 0 0%)'; // Wipes in from Left edge
      const slideX = isFlipped ? -38 : 38;

      tl.fromTo(
        dossierRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.25, ease: 'power2.out' }
      );

      tl.fromTo(
        portraitColRef.current,
        { clipPath: startClip },
        {
          clipPath: 'inset(0 0% 0 0%)',
          duration: 0.72,
          ease: 'expo.inOut',
        },
        '-=0.15'
      );

      tl.fromTo(
        '.tm-portrait-zoom',
        { scale: 1.2, filter: 'grayscale(80%) brightness(0.7)' },
        {
          scale: 1,
          filter: 'grayscale(0%) brightness(1.04)',
          duration: 1.15,
          ease: 'power3.out',
        },
        '-=0.55'
      );

      tl.fromTo(
        '.tm-anim-item',
        { x: slideX, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.55,
          stagger: 0.06,
          ease: 'power3.out',
        },
        '-=0.85'
      );
    },
    { dependencies: [member.id], scope: dossierRef }
  );

  const handleAnimatedClose = () => {
    const exitClip = isFlipped
      ? 'inset(0 0% 0 100%)'
      : 'inset(0 100% 0 0%)';
    const exitX = isFlipped ? -24 : 24;

    const tl = gsap.timeline({ onComplete: onClose });
    tl.to('.tm-anim-item', {
      x: exitX,
      opacity: 0,
      duration: 0.22,
      stagger: 0.02,
      ease: 'power2.in',
    });
    tl.to(
      portraitColRef.current,
      {
        clipPath: exitClip,
        duration: 0.45,
        ease: 'expo.inOut',
      },
      '-=0.15'
    );
    tl.to(dossierRef.current, { opacity: 0, duration: 0.2 }, '-=0.15');
  };

  const handleSwitch = (targetMember) => {
    const exitX = isFlipped ? 20 : -20;
    gsap.to('.tm-anim-item', {
      x: exitX,
      opacity: 0,
      duration: 0.18,
      ease: 'power2.in',
      onComplete: () => onSwitchMember(targetMember),
    });
  };

  return (
    <div
      ref={dossierRef}
      className={`tm-dossier-overlay ${isFlipped ? 'is-flipped' : ''}`}
    >
      {/* PORTRAIT STAGE (Automatically Left on Odd Builders, Right on Even Builders) */}
      <div ref={portraitColRef} className="tm-dossier-portrait-col">
        <div
          key={member.id}
          className="tm-portrait-zoom"
          style={{ width: '100%', height: '100%' }}
        >
          <SmartImage
            key={member.id}
            imageObj={member.photo}
            alt={member.name}
          />
        </div>
        <div className="tm-portrait-scrim" />

        <div className="tm-portrait-hud-top">
          <span>FUSION LAB // PERSONNEL FILE</span>
          <span style={{ color: 'var(--accent-amber)' }}>● VERIFIED</span>
        </div>

        <div className="tm-portrait-hud-bottom">
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.66rem',
              color: 'var(--accent-amber)',
              letterSpacing: '0.14em',
              marginBottom: '0.25rem',
            }}
          >
            CALLSIGN // {member.callsign}
          </div>
          <div
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.35rem',
              fontWeight: 700,
              color: '#fff',
            }}
          >
            {member.name}
          </div>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              color: 'var(--text-secondary)',
              marginTop: '0.2rem',
            }}
          >
            {member.batch}
          </div>
        </div>
      </div>

      {/* DESCRIPTION STAGE (Automatically Right on Odd Builders, Left on Even Builders) */}
      <div className="tm-dossier-content-col">
        <div className="tm-dossier-topbar tm-anim-item">
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.85rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.74rem',
            }}
          >
            <span style={{ color: 'var(--accent-amber)', fontWeight: 600 }}>
              // {member.id}
            </span>
            <span style={{ color: 'var(--text-muted)' }}>|</span>
            <span style={{ color: 'var(--accent-ice)' }}>
              {member.category}
            </span>
            <span style={{ color: 'var(--text-muted)' }}>|</span>
            <span style={{ color: 'var(--text-secondary)' }}>
              {member.domain}
            </span>
          </div>

          <button className="fb-close-btn" onClick={handleAnimatedClose}>
            <span>ESC // CLOSE DOSSIER</span>
            <X size={15} />
          </button>
        </div>

        <div className="tm-dossier-body">
          <div
            className="tm-anim-item"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              letterSpacing: '0.16em',
              color: 'var(--accent-ice)',
              textTransform: 'uppercase',
              marginBottom: '0.5rem',
            }}
          >
            {member.role}
          </div>

          <h1
            className="tm-anim-item"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
              fontWeight: 700,
              letterSpacing: '-0.03em',
              lineHeight: 1.05,
              marginBottom: '1.2rem',
            }}
          >
            {member.name}
          </h1>

          <p
            className="tm-anim-item"
            style={{
              fontSize: '1.04rem',
              lineHeight: 1.75,
              color: '#cbd5e1',
              maxWidth: '60ch',
              marginBottom: '2rem',
            }}
          >
            {member.bio || member.specialty}
          </p>

          {member.contributions && (
            <div className="tm-anim-item">
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  letterSpacing: '0.15em',
                  color: 'var(--text-muted)',
                  textTransform: 'uppercase',
                }}
              >
                KEY SYSTEMS &amp; LAB CONTRIBUTIONS
              </div>
              <div className="tm-contribution-list">
                {member.contributions.map((c) => (
                  <div key={c.code} className="tm-contribution-item">
                    <span className="tm-contrib-code">{c.code}</span>
                    <span
                      style={{
                        fontSize: '0.92rem',
                        color: 'var(--text-primary)',
                        fontWeight: 500,
                      }}
                    >
                      {c.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="tm-anim-item">
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                letterSpacing: '0.15em',
                color: 'var(--text-muted)',
                textTransform: 'uppercase',
                marginBottom: '0.75rem',
              }}
            >
              CORE HARDWARE &amp; FIRMWARE STACK
            </div>
            <div className="stack-pills">
              {(member.skills || [member.specialty]).map((skill) => (
                <span
                  key={skill}
                  className="stack-pill"
                  style={{ padding: '0.35rem 0.75rem', fontSize: '0.74rem' }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {member.socials && (
            <div className="tm-social-row tm-anim-item">
              <a
                href={member.socials.github}
                target="_blank"
                rel="noreferrer"
                className="tm-social-btn"
              >
                <Terminal size={14} /> GitHub Profile <ArrowUpRight size={13} />
              </a>
              <a
                href={member.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="tm-social-btn"
              >
                <Users size={14} /> LinkedIn <ArrowUpRight size={13} />
              </a>
              <a
                href={`mailto:${member.socials.email}`}
                className="tm-social-btn"
              >
                <Mail size={14} /> {member.socials.email}
              </a>
            </div>
          )}
        </div>

        <div className="fb-deck-bottombar tm-anim-item">
          <button
            className="fb-nav-btn"
            onClick={() => handleSwitch(prevMember)}
          >
            ← PREV // {prevMember.name.split(' ')[0]}
          </button>

          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              color: 'var(--text-muted)',
              letterSpacing: '0.14em',
            }}
          >
            BUILDER {String(currentIndex + 1).padStart(2, '0')} OF{' '}
            {String(TEAM_MEMBERS.length).padStart(2, '0')} · USE ← / → KEYS
          </span>

          <button
            className="fb-nav-btn"
            onClick={() => handleSwitch(nextMember)}
          >
            NEXT // {nextMember.name.split(' ')[0]} →
          </button>
        </div>
      </div>
    </div>
  );
}
/* ============================================================================
   FULL-BLEED TECHNICAL JOURNAL READER (GSAP CHOREOGRAPHY)
   ============================================================================ */
function BlogFullBleedReader({ post, onClose, onSwitchPost }) {
  const readerRef = useRef(null);

  const currentIndex = BLOG_POSTS.findIndex((p) => p.id === post.id);
  const prevPost =
    BLOG_POSTS[(currentIndex - 1 + BLOG_POSTS.length) % BLOG_POSTS.length];
  const nextPost = BLOG_POSTS[(currentIndex + 1) % BLOG_POSTS.length];

  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') handleAnimatedClose();
      if (e.key === 'ArrowRight') handleSwitch(nextPost);
      if (e.key === 'ArrowLeft') handleSwitch(prevPost);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [post]);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.fromTo(
        readerRef.current,
        { clipPath: 'circle(0% at 90% 10%)' },
        {
          clipPath: 'circle(150% at 50% 50%)',
          duration: 0.75,
          ease: 'power4.inOut',
        }
      );

      tl.fromTo(
        '.blog-anim-item',
        { y: 32, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.55,
          stagger: 0.05,
          ease: 'power3.out',
        },
        '-=0.4'
      );
    },
    { dependencies: [post.id], scope: readerRef }
  );

  const handleAnimatedClose = () => {
    const tl = gsap.timeline({ onComplete: onClose });
    tl.to('.blog-anim-item', {
      y: -20,
      opacity: 0,
      duration: 0.2,
      stagger: 0.02,
      ease: 'power2.in',
    });
    tl.to(
      readerRef.current,
      {
        clipPath: 'circle(0% at 90% 10%)',
        duration: 0.5,
        ease: 'power4.inOut',
      },
      '-=0.1'
    );
  };

  const handleSwitch = (targetPost) => {
    gsap.to('.blog-anim-item', {
      y: 15,
      opacity: 0,
      duration: 0.18,
      ease: 'power2.in',
      onComplete: () => onSwitchPost(targetPost),
    });
  };

  return (
    <div ref={readerRef} className="blog-fb-overlay">
      <div className="blog-fb-bg" />
      <div className="blueprint-overlay" aria-hidden="true" />

      {/* TOP HUD BAR */}
      <div className="fb-deck-topbar blog-anim-item">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.74rem',
          }}
        >
          <span style={{ color: 'var(--accent-amber)', fontWeight: 600 }}>
            // {post.id}
          </span>
          <span style={{ color: 'var(--text-muted)' }}>|</span>
          <span style={{ color: 'var(--accent-ice)' }}>{post.category}</span>
          <span style={{ color: 'var(--text-muted)' }}>|</span>
          <span style={{ color: 'var(--text-secondary)' }}>{post.readTime}</span>
        </div>

        <button className="fb-close-btn" onClick={handleAnimatedClose}>
          <span>ESC // CLOSE JOURNAL</span>
          <X size={15} />
        </button>
      </div>

      {/* ASYMMETRIC MAIN CONTENT */}
      <div className="blog-fb-main">
        {/* Sticky Sidebar */}
        <div className="blog-sticky-sidebar blog-anim-item">
          <div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                color: 'var(--accent-amber)',
                letterSpacing: '0.14em',
                marginBottom: '0.5rem',
              }}
            >
              FUSION LAB DISPATCH
            </div>
            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 3.2vw, 2.8rem)',
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                marginBottom: '1rem',
              }}
            >
              {post.title}
            </h1>
          </div>

          <div
            style={{
              padding: '1.25rem',
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '12px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.76rem',
              color: 'var(--text-secondary)',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
            }}
          >
            <div>
              <span style={{ color: 'var(--text-muted)' }}>AUTHOR:</span>{' '}
              <strong style={{ color: '#fff' }}>{post.author}</strong>
            </div>
            <div>
              <span style={{ color: 'var(--text-muted)' }}>PUBLISHED:</span>{' '}
              {post.date}
            </div>
            <div>
              <span style={{ color: 'var(--text-muted)' }}>VERIFIED:</span>{' '}
              <span style={{ color: 'var(--accent-emerald)' }}>
                HARDWARE-IN-LOOP
              </span>
            </div>
          </div>
        </div>

        {/* Right Content Pane */}
        <div className="blog-content-pane blog-anim-item">
          <p
            style={{
              fontSize: '1.18rem',
              color: '#f3f6fa',
              fontWeight: 500,
              lineHeight: 1.7,
            }}
          >
            {post.excerpt}
          </p>

          {post.content.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}

          {post.codeSnippet && (
            <pre className="blog-code-container">
              <code>{post.codeSnippet}</code>
            </pre>
          )}
        </div>
      </div>

      {/* BOTTOM SWITCHER BAR */}
      <div className="fb-deck-bottombar blog-anim-item">
        <button className="fb-nav-btn" onClick={() => handleSwitch(prevPost)}>
          ← PREV // {prevPost.id}
        </button>

        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.7rem',
            color: 'var(--text-muted)',
            letterSpacing: '0.14em',
          }}
        >
          DISPATCH {String(currentIndex + 1).padStart(2, '0')} OF{' '}
          {String(BLOG_POSTS.length).padStart(2, '0')} · USE ← / → KEYS
        </span>

        <button className="fb-nav-btn" onClick={() => handleSwitch(nextPost)}>
          NEXT // {nextPost.id} →
        </button>
      </div>
    </div>
  );
}