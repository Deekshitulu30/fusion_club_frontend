import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function HeaderNav({ currentPage = "home", onNavigate }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (pageName) => {
    setIsMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(pageName);
    }
  };

  const navLinks = [
    { label: "Home", page: "home" },
    { label: "Projects", page: "projects" },
    { label: "Team", page: "team" },
    { label: "Journey", page: "journey" },
    { label: "Blog", page: "blog" },
  ];

  return (
    <>
      <header className={`site-header${isScrolled ? " scrolled" : ""}`}>
        <div className="nav-container">
          {/* Left: Brand */}
          <a
            href="#home"
            className="brand-link"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("home");
            }}
          >
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
          </a>

          {/* Center: Floating capsule pill nav */}
          <nav className="nav-pill" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <button
                key={link.page}
                className={`nav-pill-item${currentPage === link.page ? " active" : ""}`}
                onClick={() => handleNavClick(link.page)}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right: CTA & mobile menu toggle */}
          <div className="nav-actions">
            <button
              className={`btn-nav-cta${currentPage === "join" ? " active-join" : ""}`}
              onClick={() => handleNavClick("join")}
            >
              Join Fusion
            </button>
            <button
              className="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div className={`mobile-nav-drawer${isMobileMenuOpen ? " open" : ""}`}>
        {navLinks.map((link) => (
          <button
            key={link.page}
            className={`mobile-nav-link${currentPage === link.page ? " active" : ""}`}
            onClick={() => handleNavClick(link.page)}
          >
            {link.label}
          </button>
        ))}
        <button
          className="btn-nav-cta"
          style={{ width: "100%", justifyContent: "center", marginTop: 12 }}
          onClick={() => handleNavClick("join")}
        >
          Join Fusion
        </button>
      </div>
    </>
  );
}