import React from "react";

export default function Footer({ onNavigate }) {
  const handleNav = (page) => {
    if (onNavigate) {
      onNavigate(page);
    }
  };

  return (
    <footer className="site-footer">
      <div className="full-bleed-container">
        <div className="footer-grid">
          {/* Column 1: Brand & Contact */}
          <div className="footer-col footer-col-brand">
            <div className="footer-brand-header">
              <div className="brand-logo-icon">
                <img
                  src="/fusion-logo.png"
                  alt="Fusion"
                  onError={(e) => {
                    e.target.style.display = "none";
                    if (e.target.nextSibling) e.target.nextSibling.style.display = "flex";
                  }}
                />
                <span className="brand-fallback-icon" style={{ display: "none" }}>F</span>
              </div>
              <div className="brand-text">
                <span className="brand-name">Fusion Club</span>
                <span className="brand-sub">IoT &amp; Robotics</span>
              </div>
            </div>
            <p className="footer-address">GLA University, Mathura</p>
            <a href="mailto:fusionclub@glauniversity.ac.in" className="footer-email">
              fusionclub@glauniversity.ac.in
            </a>
          </div>

          {/* Column 2: Navigate */}
          <div className="footer-col footer-col-nav">
            <h4 className="footer-col-title">Navigate</h4>
            <ul className="footer-nav-list">
              <li>
                <button onClick={() => handleNav("home")} className="footer-link">Home</button>
              </li>
              <li>
                <button onClick={() => handleNav("projects")} className="footer-link">Projects</button>
              </li>
              <li>
                <button onClick={() => handleNav("team")} className="footer-link">Team</button>
              </li>
              <li>
                <button onClick={() => handleNav("journey")} className="footer-link">Journey</button>
              </li>
              <li>
                <button onClick={() => handleNav("blog")} className="footer-link">Blog</button>
              </li>
              <li>
                <button onClick={() => handleNav("join")} className="footer-link footer-link-join">Join FUSION</button>
              </li>
            </ul>
          </div>

          {/* Column 3: Domains */}
          <div className="footer-col footer-col-domains">
            <h4 className="footer-col-title">Domains</h4>
            <ul className="footer-nav-list">
              <li>
                <button onClick={() => handleNav("projects")} className="footer-link">IoT &amp; Sensor Networks</button>
              </li>
              <li>
                <button onClick={() => handleNav("projects")} className="footer-link">Autonomous Robotics</button>
              </li>
              <li>
                <button onClick={() => handleNav("projects")} className="footer-link">UAVs &amp; Avionics</button>
              </li>
              <li>
                <button onClick={() => handleNav("projects")} className="footer-link">On-Device Edge AI</button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="footer-bottom-bar">
          <span className="footer-copy">&copy; 2026 FUSION &middot; GLA University</span>
          <span className="footer-credit">Built by the FUSION team</span>
        </div>
      </div>
    </footer>
  );
}
