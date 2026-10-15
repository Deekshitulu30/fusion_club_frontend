import React from "react";

export default function Hero({ onExploreProjects, onJoinFusion }) {
  return (
    <section className="hero-section" id="hero">
      {/* Background: Campus visual */}
      <div className="hero-bg-container">
        <img
          src="/hero-campus.jpg"
          alt="GLA University Campus - FUSION drone testing"
          className="hero-bg-image"
        />
      </div>

      {/* Main content */}
      <div className="full-bleed-container hero-body">
        <div className="hero-content">
          {/* Subtitle / Kicker */}
          <div className="hero-club-tag">
            <span className="hero-pulse-dot" />
            <span className="hero-kicker-text">IoT &amp; ROBOTICS CLUB · GLA UNIVERSITY</span>
          </div>

          {/* Headline */}
          <h1 className="hero-headline">
            Engineering ideas<br />
            into real-world<br />
            <span className="hero-systems-word">SYSTEMS.</span>
          </h1>

          {/* Description */}
          <p className="hero-description">
            FUSION is a student community at GLA University building connected devices, autonomous systems and intelligent machines.
          </p>

          {/* Buttons */}
          <div className="hero-buttons">
            <button className="btn-hero-primary" onClick={onExploreProjects}>
              Explore Projects &nbsp;&rarr;
            </button>
            <button className="btn-hero-secondary" onClick={onJoinFusion}>
              Join FUSION
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll-indicator" aria-hidden="true">
        <span className="scroll-label">Scroll Down</span>
        <span className="scroll-arrow">&darr;</span>
      </div>
    </section>
  );
}