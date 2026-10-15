import React, { useState } from "react";
import { TEAM_MEMBERS } from "../data/clubData";
import { ExternalLink, Mail, Award, Cpu, Bot, Plane, Brain, Shield } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../components/Icons";

export default function TeamPage({ onNavigate }) {
  const [activeDept, setActiveDept] = useState("all");

  const clubLeaders = TEAM_MEMBERS.filter((m) =>
    m.role.toLowerCase().includes("president")
  );

  const deptLeads = [
    {
      domain: "IoT & Systems",
      icon: <Cpu size={20} />,
      lead: TEAM_MEMBERS.find((m) => m.name === "Saksham Sharan") || {
        name: "Saksham Sharan",
        role: "IoT Department Lead",
        year: "2nd Year · CSE",
        domain: "Firmware & Cloud",
        photo: "/team/saksham_sharan.jpg",
        linkedin: "https://www.linkedin.com/in/saksham-sharan-bbab14258/",
        bio: "Oversees low-power sensor telemetry, custom PCB layouts, and MQTT infrastructure."
      }
    },
    {
      domain: "Robotics & Actuation",
      icon: <Bot size={20} />,
      lead: TEAM_MEMBERS.find((m) => m.name === "Amardeep Singh") || {
        name: "Amardeep Singh",
        role: "Robotics Department Lead",
        year: "2nd Year · CSE",
        domain: "Robotics & IoT",
        photo: "/team/amardeep_singh.jpg",
        github: "https://github.com/Amar-Deep22",
        linkedin: "https://www.linkedin.com/in/amardeep-ranjan05/",
        bio: "Specializes in multi-axis robotic arms, BLDC kinematics, and rover chassis design."
      }
    },
    {
      domain: "UAV & Avionics",
      icon: <Plane size={20} />,
      lead: {
        name: "Aviral Sachdeva",
        role: "Avionics & Flight Stack Lead",
        year: "2nd Year · CSE",
        domain: "Autonomous Flight",
        photo: "/team/aviral_sachdeva.jpg",
        linkedin: "https://www.linkedin.com/in/aviral-sachdeva-202289265/",
        bio: "Directs PX4 autonomous waypoint navigation, vibration analysis, and telemetry ground links."
      }
    },
    {
      domain: "AI & TinyML",
      icon: <Brain size={20} />,
      lead: TEAM_MEMBERS.find((m) => m.name === "Shahvez Khan") || {
        name: "Shahvez Khan",
        role: "Edge AI & Comms Lead",
        year: "2nd Year · AIML",
        domain: "TinyML & Mesh",
        photo: "/team/shahvez_khan.jpg",
        github: "https://github.com/shahvezkhan9221-prog",
        linkedin: "https://www.linkedin.com/in/shahvez-khan-9a8988361",
        bio: "Focuses on on-device quantized neural inference (ESP32-CAM) and LoRa mesh networks."
      }
    }
  ];

  const remainingMembers = TEAM_MEMBERS.filter(
    (m) => !m.role.toLowerCase().includes("president")
  );

  const filteredMembers = activeDept === "all"
    ? remainingMembers
    : remainingMembers.filter((m) => {
        const d = (m.domain + " " + m.wing).toLowerCase();
        if (activeDept === "iot") return d.includes("iot") || d.includes("firmware");
        if (activeDept === "robotics") return d.includes("robotics");
        if (activeDept === "uav") return d.includes("uav") || d.includes("avionics");
        if (activeDept === "operations") return d.includes("operations") || d.includes("events") || d.includes("relations");
        return true;
      });

  return (
    <div className="page-wrapper page-team">
      {/* 1. Header */}
      <section className="team-hero-header">
        <div className="full-bleed-container">
          <div className="team-hero-content">
            <span className="section-kicker">COMMUNITY</span>
            <h1 className="team-hero-headline">
              The People Behind FUSION
            </h1>
            <p className="team-hero-sub">
              Undergraduate engineers, hardware tinkerers, and firmware developers building physical systems at GLA University.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Club Leaders: Large Feature Layout */}
      <section className="club-leader-section">
        <div className="full-bleed-container">
          <div className="leader-section-title">
            <span className="section-kicker">LEADERSHIP</span>
            <h2 className="section-heading">Club Leadership</h2>
          </div>

          <div className="club-leaders-grid">
            {clubLeaders.map((leader) => (
              <div key={leader.name} className="leader-feature-card">
                <div className="leader-portrait-wrap">
                  {leader.photo ? (
                    <img
                      src={leader.photo}
                      alt={leader.name}
                      className="leader-portrait-img"
                      loading="lazy"
                    />
                  ) : (
                    <div className="leader-portrait-placeholder">
                      <span>{leader.name.charAt(0)}</span>
                    </div>
                  )}
                  <div className="leader-portrait-glow" aria-hidden="true" />
                </div>

                <div className="leader-info-pane">
                  <div className="leader-role-badge">
                    <Shield size={16} />
                    <span>{leader.role.toUpperCase()}</span>
                  </div>
                  <h3 className="leader-name">{leader.name}</h3>
                  <span className="leader-academic-meta">{leader.year} · {leader.domain}</span>
                  <p className="leader-bio">{leader.bio}</p>

                  <div className="leader-social-row">
                    {leader.linkedin && (
                      <a
                        href={leader.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="leader-social-link"
                        aria-label={`${leader.name} LinkedIn`}
                      >
                        <LinkedinIcon size={18} />
                        <span>LinkedIn</span>
                      </a>
                    )}
                    {leader.github && (
                      <a
                        href={leader.github}
                        target="_blank"
                        rel="noreferrer"
                        className="leader-social-link"
                        aria-label={`${leader.name} GitHub`}
                      >
                        <GithubIcon size={18} />
                        <span>GitHub</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Department Leaders */}
      <section className="dept-leaders-section">
        <div className="full-bleed-container">
          <div className="dept-section-title">
            <span className="section-kicker">DIVISIONS</span>
            <h2 className="section-heading">Department Leaders</h2>
            <p className="dept-section-sub">
              Domain architects directing hardware prototyping, embedded firmware, and autonomous flight stacks.
            </p>
          </div>

          <div className="dept-leaders-grid">
            {deptLeads.map((item) => (
              <div key={item.domain} className="dept-leader-card">
                <div className="dept-card-header">
                  <div className="dept-icon-box">{item.icon}</div>
                  <span className="dept-badge">{item.domain}</span>
                </div>

                <div className="dept-lead-portrait">
                  <img
                    src={item.lead.photo || "/team/amardeep_singh.jpg"}
                    alt={item.lead.name}
                    className="dept-lead-img"
                    loading="lazy"
                  />
                </div>

                <div className="dept-lead-details">
                  <h3 className="dept-lead-name">{item.lead.name}</h3>
                  <span className="dept-lead-role">{item.lead.role}</span>
                  <p className="dept-lead-bio">{item.lead.bio}</p>

                  <div className="dept-lead-links">
                    {item.lead.linkedin && (
                      <a href={item.lead.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                        <LinkedinIcon size={16} />
                      </a>
                    )}
                    {item.lead.github && (
                      <a href={item.lead.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                        <GithubIcon size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Flexible Members Grid with Rich Hover Overlay */}
      <section className="members-grid-section">
        <div className="full-bleed-container">
          <div className="members-section-header">
            <div>
              <span className="section-kicker">ROSTER</span>
              <h2 className="section-heading">Members &amp; Specialists</h2>
            </div>

            {/* Department filter tabs */}
            <div className="team-filter-tabs">
              {[
                { id: "all", label: "All Members" },
                { id: "iot", label: "IoT & Firmware" },
                { id: "robotics", label: "Robotics" },
                { id: "operations", label: "Operations" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  className={`team-tab-btn ${activeDept === tab.id ? "active" : ""}`}
                  onClick={() => setActiveDept(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="members-grid">
            {filteredMembers.map((member) => (
              <div key={member.name} className="member-grid-card">
                <div className="member-photo-frame">
                  {member.photo ? (
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="member-img"
                      loading="lazy"
                    />
                  ) : (
                    <div className="member-photo-fallback">
                      <span>{member.name.charAt(0)}</span>
                    </div>
                  )}

                  {/* Rich hover overlay */}
                  <div className="member-hover-overlay">
                    <div className="overlay-content">
                      <span className="overlay-tag">{member.domain}</span>
                      <h4 className="overlay-name">{member.name}</h4>
                      <span className="overlay-role">{member.role}</span>
                      <p className="overlay-bio">{member.bio || "Active contributor to FUSION hardware and software sprints."}</p>

                      <div className="overlay-socials">
                        {member.linkedin && (
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noreferrer"
                            className="overlay-link"
                            title="LinkedIn Profile"
                          >
                            <LinkedinIcon size={16} />
                          </a>
                        )}
                        {member.github && (
                          <a
                            href={member.github}
                            target="_blank"
                            rel="noreferrer"
                            className="overlay-link"
                            title="GitHub Profile"
                          >
                            <GithubIcon size={16} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Default Base Info */}
                <div className="member-base-info">
                  <h4 className="member-name">{member.name}</h4>
                  <span className="member-role">{member.role}</span>
                  <span className="member-domain">{member.domain}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Join Prompt */}
          <div className="team-join-banner">
            <div className="team-join-copy">
              <span className="section-kicker" style={{ color: "#00D9FF", marginBottom: 6 }}>OPPORTUNITY</span>
              <h3 style={{ fontSize: "1.6rem", fontWeight: 800, color: "#F2F7F9", marginBottom: 6 }}>Join Our Team</h3>
              <p>We are recruiting builders and developers across all undergraduate departments.</p>
            </div>
            <button className="btn-join-primary" onClick={() => onNavigate("join")}>
              Apply Now &rarr;
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
