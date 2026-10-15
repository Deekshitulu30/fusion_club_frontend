import React from "react";
import { Compass, Lightbulb, Hammer, TrendingUp, Rocket, ArrowRight, CheckCircle2 } from "lucide-react";

export default function JourneyPage({ onNavigate }) {
  const chapters = [
    {
      phase: "01",
      title: "FOUNDATION",
      badge: "ORIGIN · 2023",
      heading: "The Problem & Initial Vision",
      quote: "Students were learning from theoretical slides without ever soldering a trace or flying a drone.",
      paragraphs: [
        "In university curricula, countless hours are spent on textbook theory. Yet when it came to reading an oscilloscope, soldering a circuit, or debugging an I2C collision at 2 AM, there was no dedicated place for real hardware.",
        "FUSION was founded by GLA University students to bridge that gap. The vision was direct: establish a permanent workbench, pool together tools, and measure progress solely by working physical systems."
      ],
      highlights: [
        "Bridged software algorithms with physical silicon.",
        "Built the first student IoT & robotics workbench on campus.",
        "Established the founding rule: 'Learning by building, not just reading.'"
      ]
    },
    {
      phase: "02",
      title: "BUILDING",
      badge: "PROTOTYPING",
      heading: "Workshops & First Squads",
      quote: "From our first blinking breadboard to multi-sensor telemetry networks.",
      paragraphs: [
        "We began hosting hands-on workshops for junior students, distributing bare ESP32 microcontrollers, soldering irons, and sensor probes instead of slide presentations.",
        "Specialized teams formed around firmware programming, 3D CAD modeling, and power stages, quickly producing our first working field prototypes."
      ],
      highlights: [
        "Ran intensive embedded C++ and hardware bootcamps.",
        "Fabricated the first AgroVON precision agriculture sensor node.",
        "Formed cross-functional mechanical, circuit, and firmware teams."
      ]
    },
    {
      phase: "03",
      title: "EXPANDING",
      badge: "GROWTH",
      heading: "Expansion Across 4 Domains",
      quote: "A single workbench grew into a multi-domain autonomous systems lab.",
      paragraphs: [
        "As member skills matured, so did our projects: building our first 450mm carbon-fiber quadcopter with PX4 autopilot, deploying on-device AI vision rigs on Raspberry Pi 5, and creating off-grid LoRa mesh nodes.",
        "Today, FUSION operates with four focused divisions: IoT & Telemetry, Autonomous Robotics, UAV Avionics, and Edge AI."
      ],
      highlights: [
        "Test-flew AeroGlide UAV with waypoint MAVLink telemetry.",
        "Deployed AgroVON 2.0 with solar harvesting and soil probes.",
        "Expanded into a community of 25+ student builders."
      ]
    },
    {
      phase: "04",
      title: "WHERE WE'RE GOING",
      badge: "ROADMAP",
      heading: "Competitions & Campus Deployments",
      quote: "Turning student projects into demonstrated technology and competition winners.",
      paragraphs: [
        "Before December, FUSION is launching an autonomous survey drone, deploying a campus-wide environmental telemetry grid at GLA University, and preparing entries for national robotics challenges.",
        "Our focus remains unchanged: to be the home for students who want to build the machines that define tomorrow."
      ],
      highlights: [
        "Competing in national autonomous robotics and drone challenges.",
        "Deploying campus-wide environmental telemetry stations.",
        "Open-sourcing hardware schematics and flight firmware."
      ]
    }
  ];

  return (
    <div className="page-wrapper page-journey">
      {/* Blueprint Grid Overlay Background */}
      <div className="blueprint-background-grid" aria-hidden="true" />

      {/* 1. Opening: WHY FUSION? */}
      <section className="journey-hero-section">
        <div className="full-bleed-container">
          <div className="blueprint-coords-badge">
            <span>COORD: 27.6057° N, 77.5933° E</span>
            <span>LOG: 2023 – 2026</span>
          </div>

          <div className="journey-hero-content">
            <span className="section-kicker">OUR MANIFESTO</span>
            <h1 className="projects-hero-headline">
              Why FUSION?
            </h1>
            <p className="journey-manifesto-quote">
              “We started FUSION to give students a place to stop learning only from theory and start building real systems.”
            </p>
            <p className="journey-hero-sub">
              How an idea between undergraduate engineers grew into an active laboratory building autonomous UAVs, edge AI computer vision, and agricultural telemetry.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Blueprint Chapters Timeline */}
      <section className="journey-timeline-section">
        <div className="full-bleed-container">
          <div className="timeline-spine-wrapper">
            {/* The cyan blueprint axis */}
            <div className="timeline-axis-line" aria-hidden="true" />

            {chapters.map((ch, idx) => (
              <div key={ch.phase} className={`timeline-chapter-row ${idx % 2 === 0 ? "row-left" : "row-right"}`}>
                {/* Node pin on the axis */}
                <div className="timeline-axis-pin">
                  <span className="pin-number">{ch.phase}</span>
                </div>

                {/* Chapter Content Card */}
                <article className="timeline-chapter-card">
                  <div className="card-blueprint-header">
                    <span className="chapter-badge">{ch.badge}</span>
                    <span className="chapter-code">PHASE // {ch.phase}</span>
                  </div>

                  <h2 className="chapter-title">{ch.title}</h2>
                  <h3 className="chapter-heading">{ch.heading}</h3>

                  <blockquote className="chapter-quote">
                    {ch.quote}
                  </blockquote>

                  <div className="chapter-body-text">
                    {ch.paragraphs.map((p, pIdx) => (
                      <p key={pIdx}>{p}</p>
                    ))}
                  </div>

                  <div className="chapter-highlights">
                    <span className="highlights-title">KEY MILESTONES:</span>
                    <ul>
                      {ch.highlights.map((item, hIdx) => (
                        <li key={hIdx}>
                          <CheckCircle2 size={16} className="highlight-check" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </div>
            ))}
          </div>

          {/* Bottom Blueprint Callout */}
          <div className="journey-bottom-action">
            <div className="blueprint-stamp-box">
              <span className="stamp-label">THE NEXT PHASE</span>
              <h3 style={{ fontSize: "1.7rem", fontWeight: 800, color: "#F2F7F9", marginBottom: 8 }}>
                Build the Future With Us
              </h3>
              <p>Applications for technical and operations squads are currently open.</p>
              <button className="btn-join-primary" onClick={() => onNavigate("join")}>
                JOIN THE JOURNEY &rarr;
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
