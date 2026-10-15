import React, { useEffect, useRef } from "react";
import { ArrowRight, Sparkles, Users } from "lucide-react";

export default function JoinClubShowcase({ onOpenApply }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="join-showcase-section" id="join">
      <div className="full-bleed-container">
        <div className="showcase-header reveal-item">
          <div className="showcase-pre-badge">
            <Users size={14} />
            <span>THE CREW</span>
          </div>
          <h2 className="showcase-display-title">JOIN CLUB</h2>
          <p className="showcase-subtitle">
            Meet the minds behind GLA University's autonomous rovers, flight systems, and IoT testbeds.
          </p>
        </div>

        {/* Full-Bleed Asymmetric Photo Card */}
        <div
          className="asym-photo-frame reveal-item"
          ref={cardRef}
          onClick={onOpenApply}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => { if (e.key === "Enter") onOpenApply(); }}
        >
          {/* Architectural Top Bar */}
          <div className="frame-tech-header">
            <div className="frame-status-group">
              <span className="live-status-pip" />
              <span className="frame-meta-text">FUSION LAB &middot; RECRUITMENT ACTIVE &middot; COHORT 2026</span>
            </div>
            <div className="frame-corner-tag">GLA UNIVERSITY</div>
          </div>

          <div className="photo-container">
            <img
              src="/team-photo.jpg"
              alt="FUSION Team with quadcopter drone at GLA University campus"
              className="showcase-team-img"
            />
          </div>

          {/* Bottom Floating Interactive Bar */}
          <div className="frame-bottom-action">
            <div className="action-info">
              <div className="action-tag">
                <Sparkles size={14} />
                <span>NO PRIOR HARDWARE EXPERIENCE REQUIRED</span>
              </div>
              <h3 className="action-headline">All Departments &amp; Batches Welcome</h3>
            </div>

            <button
              className="btn-showcase-cta"
              onClick={(e) => {
                e.stopPropagation();
                onOpenApply();
              }}
            >
              Apply for 2026 Cohort <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
