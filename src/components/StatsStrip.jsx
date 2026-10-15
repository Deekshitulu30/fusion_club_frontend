import React from "react";

const STATS = [
  { value: "40+", label: "MEMBERS" },
  { value: "15+", label: "PROJECTS" },
  { value: "03", label: "DOMAINS" },
];

export default function StatsStrip() {
  return (
    <section className="stats-strip" id="stats" aria-label="Club statistics">
      <div className="container">
        <div className="stats-inner">
          {STATS.map((stat, i) => (
            <React.Fragment key={stat.label}>
              <div className="stats-item">
                <span className="stats-value">{stat.value}</span>
                <span className="stats-label">{stat.label}</span>
              </div>
              {i < STATS.length - 1 && <div className="stats-divider" aria-hidden="true" />}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
