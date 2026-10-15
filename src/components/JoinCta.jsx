import React from "react";

export default function JoinCta({ onOpenApply, onOpenTeam }) {
  return (
    <section className="cta-section" id="join">
      <div className="container cta-container">
        <div className="cta-eyebrow">OPEN TO EVERYONE</div>
        <h2 className="cta-heading">
          Got an idea?<br />
          <span className="cta-accent">Let's build it.</span>
        </h2>
        <p className="cta-desc">
          Whether you've never touched a circuit board or you're already building embedded systems &mdash;
          FUSION is a place to learn, work alongside others, and ship something you're proud of.
        </p>
        <div className="cta-actions">
          <button className="btn-cta-primary" onClick={onOpenApply}>
            Join FUSION &nbsp;&rarr;
          </button>
          <button className="btn-cta-secondary" onClick={onOpenTeam}>
            Meet the Team
          </button>
        </div>
        <div className="cta-photo-frame">
          <img src="/team-photo.jpg" alt="FUSION Engineering Club Team at GLA University" />
        </div>
      </div>
    </section>
  );
}