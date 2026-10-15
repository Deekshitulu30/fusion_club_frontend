import React from "react";
import Hero from "../components/Hero";
import { Cpu, Bot, Plane, CircuitBoard } from "lucide-react";

export default function HomePage({ onNavigate, footer }) {
  const domains = [
    {
      id: "iot",
      icon: <Cpu size={20} />,
      title: "IoT & Telemetry",
      tag: "DOM. 01",
      desc: "Distributed sensor nodes, Sub-GHz LoRa mesh, and custom PCB telemetry systems.",
    },
    {
      id: "robotics",
      icon: <Bot size={20} />,
      title: "Robotics & Kinematics",
      tag: "DOM. 02",
      desc: "Ground rovers, articulated robotic manipulators, motor controllers, and autonomous navigation.",
    },
    {
      id: "uav",
      icon: <Plane size={20} />,
      title: "Autonomous UAVs",
      tag: "DOM. 03",
      desc: "Custom-fleet multirotors, PX4 autonomous waypoint navigation, and long-range telemetry.",
    },
    {
      id: "ai-embedded",
      icon: <CircuitBoard size={20} />,
      title: "AI & Embedded Systems",
      tag: "DOM. 04",
      desc: "On-device TinyML neural inference, ESP32/RP2040 firmware, and real-time computer vision.",
    },
  ];

  return (
    <div className="page-wrapper page-home">
      {/* 1. Hero */}
      <Hero
        onExploreProjects={() => onNavigate("projects")}
        onJoinFusion={() => onNavigate("join")}
      />

      {/* 2. Seamless continuous background environment after Hero */}
      <div className="home-technical-body">
        {/* Continuous background image provided by the user */}
        <div className="home-story-bg-layer" aria-hidden="true">
          <img
            src="/home-story-bg.png"
            alt=""
            className="home-story-bg-img"
          />
        </div>

        {/* Section: WHAT IS FUSION? / Learning by Building */}
        <section className="home-about-section" id="about-fusion">
          <div className="full-bleed-container">
            <div className="home-about-header text-center">
              <span className="section-kicker">WHAT IS FUSION?</span>
              <h2 className="section-heading">
                Learning by Building
              </h2>
              <p className="home-about-lead">
                FUSION is a student community at GLA University building connected devices, autonomous systems, and intelligent machines.
              </p>
            </div>

            {/* 4 Core Domains Grid */}
            <div className="home-domains-grid">
              {domains.map((d) => (
                <div key={d.id} className="home-domain-card" onClick={() => onNavigate("projects")}>
                  <div className="home-domain-card-header">
                    <div className="domain-icon-wrapper">{d.icon}</div>
                    <span className="domain-tech-code">{d.tag}</span>
                  </div>
                  <h3 className="domain-card-title">{d.title}</h3>
                  <p className="domain-card-desc">{d.desc}</p>
                  <div className="domain-card-footer">
                    <span className="domain-view-link">
                      Explore domain &rarr;
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section: Team Group Photo */}
        <section className="home-team-photo-section">
          <div className="full-bleed-container">
            {/* Big framed group photo */}
            <div className="home-big-photo-frame">
              <div className="big-photo-aspect">
                <img
                  src="/team-photo.jpg"
                  alt="FUSION Club Student Builders and Executive Team at GLA University"
                  className="home-group-img"
                  loading="lazy"
                />
                <div className="photo-corner-overlay top-left">+</div>
                <div className="photo-corner-overlay top-right">+</div>
                <div className="photo-corner-overlay bottom-left">+</div>
                <div className="photo-corner-overlay bottom-right">+</div>
              </div>
              <div className="photo-meta-bar">
                <span className="photo-caption">FUSION TEAM · GLA UNIVERSITY CAMPUS</span>
                <span className="photo-status">EST. 2023 · 25+ ACTIVE BUILDERS</span>
              </div>
            </div>

            {/* Meet the team CTA */}
            <div className="home-team-action-wrap">
              <button
                className="btn-meet-team"
                onClick={() => onNavigate("team")}
              >
                Meet the Team &nbsp;&rarr;
              </button>
            </div>
          </div>
        </section>

        {/* Section: Build With Us / Recruitment */}
        <section className="home-join-cta-section">
          <div className="full-bleed-container">
            <div className="home-cta-box">
              <span className="cta-small-kicker">RECRUITMENT</span>
              <h2 className="cta-main-heading">
                Build With Us
              </h2>
              <p className="cta-sub-copy">
                Have an idea or want to get hands-on with hardware? Join our next project cohort — no prior experience required.
              </p>
              <div className="cta-action-row">
                <button
                  className="btn-join-primary"
                  onClick={() => onNavigate("join")}
                >
                  JOIN FUSION &nbsp;&rarr;
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Continuous Footer positioned over the bottom night campus background */}
        {footer}
      </div>
    </div>
  );
}
