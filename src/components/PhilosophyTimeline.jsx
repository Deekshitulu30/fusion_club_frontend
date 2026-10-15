import React, { useEffect, useRef, useState } from "react";

const STEPS = [
  { label: "IDEA", desc: "A real-world problem or curiosity sparks a concept worth building." },
  { label: "PROTOTYPE", desc: "Breadboards, firmware, and first working hardware iterations." },
  { label: "TEST", desc: "Field testing, debugging, and refining until it performs reliably." },
  { label: "DEPLOY", desc: "The system ships &mdash; demonstrated, documented, and shipped." },
];

function JourneyNode({ step, index, isVisible }) {
  return (
    <div className={`journey-node${isVisible ? " visible" : ""}`} style={{ "--delay": `${index * 150}ms` }}>
      <div className="journey-dot">
        <div className="journey-dot-inner" />
      </div>
      <div className="journey-node-content">
        <div className="journey-step-label">{step.label}</div>
        <p className="journey-step-desc">{step.desc}</p>
      </div>
    </div>
  );
}

export default function PhilosophyTimeline({ onOpenTeam }) {
  const sectionRef = useRef(null);
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Stagger-reveal nodes one by one
          STEPS.forEach((_, i) => {
            setTimeout(() => setVisibleCount((prev) => Math.max(prev, i + 1)), i * 200);
          });
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="journey-section" id="journey" ref={sectionRef}>
      <div className="container">
        <div className="journey-header">
          <div className="journey-kicker">HOW WE WORK</div>
          <h2 className="journey-heading">
            From idea<br />to deployment.
          </h2>
          <p className="journey-sub">
            Every project at FUSION follows a hands-on engineering lifecycle &mdash; no lectures, just real work.
          </p>
        </div>

        <div className="journey-timeline">
          {/* Vertical line */}
          <div className="journey-spine">
            <div
              className="journey-spine-fill"
              style={{ height: `${(visibleCount / STEPS.length) * 100}%` }}
            />
          </div>

          {/* Nodes */}
          <div className="journey-nodes">
            {STEPS.map((step, i) => (
              <JourneyNode key={step.label} step={step} index={i} isVisible={i < visibleCount} />
            ))}
          </div>
        </div>

        <div className="journey-footer">
          <button className="journey-team-link" onClick={onOpenTeam}>
            Meet the builders &nbsp;&rarr;
          </button>
        </div>
      </div>
    </section>
  );
}
