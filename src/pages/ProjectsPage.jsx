import React, { useState } from "react";
import { PROJECTS } from "../data/clubData";
import { ArrowRight, Cpu, Bot, Plane, CheckCircle2 } from "lucide-react";

export default function ProjectsPage({ onSelectProject, onNavigate }) {
  const [filter, setFilter] = useState("all");

  const filteredProjects = filter === "all"
    ? PROJECTS
    : PROJECTS.filter((p) => p.domain === filter || p.category.toLowerCase().includes(filter));

  const pipelineSteps = [
    { num: "01", name: "IDEA", desc: "Real-world friction or field observation" },
    { num: "02", name: "DESIGN", desc: "Schematics, CAD models & architecture" },
    { num: "03", name: "PROTOTYPE", desc: "Breadboard circuits & firmware sprints" },
    { num: "04", name: "TEST", desc: "Field benchmarking, telemetry & stress testing" },
    { num: "05", name: "DEMO", desc: "Live working deployment at GLA campus" }
  ];

  const upcomingProjects = [
    {
      num: "01",
      title: "Autonomous UAV System",
      domain: "UAV & Avionics",
      target: "Before December",
      desc: "Fixed-wing long-endurance aerial survey platform with RTK centimeter-accurate positioning, automated waypoint mission planning, and fail-safe return logic."
    },
    {
      num: "02",
      title: "Smart Campus IoT Grid",
      domain: "IoT & Telemetry",
      target: "Before December",
      desc: "Decentralized Sub-GHz LoRa environmental monitoring array logging power consumption, ambient air quality, and water tank levels across university blocks."
    },
    {
      num: "03",
      title: "Robotics Kinematic Platform",
      domain: "Robotics & TinyML",
      target: "Before December",
      desc: "Four-wheel independent steering rover testbed with active suspension, 2D LiDAR SLAM mapping, and edge neural inference for real-time obstacle evasion."
    }
  ];

  const buildWorkflowSteps = [
    { step: "01", title: "Problem", desc: "Identify critical bottlenecks in precision ag, autonomous defense, or campus telemetry." },
    { step: "02", title: "Research", desc: "Survey existing state-of-the-art papers, analyze sensor accuracies, and calculate power budgets." },
    { step: "03", title: "Prototype", desc: "Mill initial PCBs, wire breadboards, and write bare-metal drivers on ESP32/RP2040." },
    { step: "04", title: "Testing", desc: "Perform RF field tests, stress actuators under heat/load, and log bus telemetry." },
    { step: "05", title: "Iteration", desc: "Refactor firmware, reinforce mechanical chassis, and tune control feedback loops." },
    { step: "06", title: "Working System", desc: "Ship a reliable, demonstrated hardware device with complete open-source documentation." }
  ];

  return (
    <div className="page-wrapper page-projects">
      {/* 1. Projects Hero */}
      <section className="projects-hero-section">
        <div className="projects-hero-bg" aria-hidden="true" />
        <div className="full-bleed-container projects-hero-body">
          <div className="projects-hero-content">
            <span className="section-kicker">ENGINEERING LAB</span>
            <h1 className="projects-hero-headline">
              Projects
            </h1>
            <p className="projects-hero-subheadline">
              Ideas become <span className="text-highlight">working systems.</span>
            </p>
            <p className="projects-hero-desc">
              Every system in this laboratory is built from scratch by GLA University students — spanning custom circuit boards, autonomous flight code, on-device neural networks, and rugged physical chassis.
            </p>
          </div>
        </div>
      </section>

      {/* 2. About the Projects + Interactive Pipeline */}
      <section className="about-projects-section">
        <div className="full-bleed-container">
          <div className="about-projects-grid">
            <div className="about-projects-copy">
              <span className="section-kicker">OUR PROCESS</span>
              <h2 className="section-heading">How We Engineer</h2>
              <p className="about-projects-sub">
                Every FUSION project begins with a real problem, moves through experimentation and prototyping, and ends with something demonstrated on physical hardware.
              </p>
            </div>

            {/* Pipeline Strip: IDEA → DESIGN → PROTOTYPE → TEST → DEMO */}
            <div className="pipeline-strip-container">
              <div className="pipeline-label-bar">
                <span>SYSTEM DEVELOPMENT PIPELINE</span>
                <span>FUSION LAB PROTOCOL</span>
              </div>
              <div className="pipeline-strip">
                {pipelineSteps.map((step, idx) => (
                  <div key={step.num} className="pipeline-step-item">
                    <div className="pipeline-step-header">
                      <span className="step-num">{step.num}</span>
                      <span className="step-name">{step.name}</span>
                    </div>
                    <p className="step-desc">{step.desc}</p>
                    {idx < pipelineSteps.length - 1 && (
                      <span className="step-connector" aria-hidden="true">&rarr;</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Completed Projects: Editorial Alternating Layouts */}
      <section className="completed-projects-section" id="completed-projects">
        <div className="full-bleed-container">
          <div className="section-title-row">
            <div>
              <span className="section-kicker">PORTFOLIO</span>
              <h2 className="section-heading">Completed Projects</h2>
            </div>
            {/* Filter pills */}
            <div className="project-filter-pills">
              {["all", "iot", "robotics", "uav"].map((f) => (
                <button
                  key={f}
                  className={`filter-pill ${filter === f ? "active" : ""}`}
                  onClick={() => setFilter(f)}
                >
                  {f === "all" ? "All Systems" : f.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          <div className="projects-editorial-stream">
            {filteredProjects.map((project, index) => {
              const layoutType = index === 0 ? "large-feature" : (index % 3 === 1 ? "medium-left" : "medium-right");

              return (
                <article
                  key={project.id}
                  className={`project-editorial-card ${layoutType}`}
                  onClick={() => onSelectProject(project)}
                >
                  <div className="project-card-visual">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="project-visual-img"
                        loading="lazy"
                      />
                    ) : (
                      <div className="project-blueprint-canvas">
                        <div className="blueprint-schematic-watermark">
                          {project.domain === "uav" ? <Plane size={96} /> : <Cpu size={96} />}
                        </div>
                        <div className="blueprint-grid-mesh" />
                        <div className="blueprint-annotation top-left">FREQ: 915 MHz · MAVLink v2.0</div>
                        <div className="blueprint-annotation bottom-right">SCHEMATIC ID: {project.statusCode}</div>
                      </div>
                    )}
                    <span className="project-status-badge">{project.status}</span>
                  </div>

                  <div className="project-card-meta">
                    <div className="project-index-row">
                      <span className="project-serial-num">0{index + 1}</span>
                      <span className="project-category-badge">{project.category}</span>
                    </div>

                    <h3 className="project-editorial-title">{project.title}</h3>
                    <p className="project-editorial-desc">{project.description}</p>

                    <div className="project-tech-tags">
                      {project.tags.slice(0, 4).map((tag) => (
                        <span key={tag} className="tech-tag-chip">{tag}</span>
                      ))}
                    </div>

                    <div className="project-card-action">
                      <button
                        className="btn-view-project"
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectProject(project);
                        }}
                      >
                        View project &nbsp;&rarr;
                      </button>
                      <span className="project-lead-attribution">Lead: {project.leadDeveloper}</span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Project Gallery: Image-Heavy Mosaic */}
      <section className="project-gallery-section">
        <div className="full-bleed-container">
          <div className="gallery-header">
            <span className="section-kicker">FIELD WORK</span>
            <h2 className="section-heading">Project Gallery</h2>
            <p className="gallery-sub">
              Hardware prototypes, workbench soldering, drone flight runs, and telemetry demonstrations.
            </p>
          </div>

          <div className="mosaic-gallery-grid">
            {/* Large feature image */}
            <div className="mosaic-cell cell-large">
              <img src="/hero-campus.jpg" alt="Autonomous UAV Flight Testing at GLA Campus" loading="lazy" />
              <div className="mosaic-caption">AeroGlide Autonomous Quadcopter flight testing</div>
            </div>

            {/* Small image 1 */}
            <div className="mosaic-cell cell-small">
              <img src="/projects/agrovon.jpg" alt="AgroVON 2.0 Field Sensor Node" loading="lazy" />
              <div className="mosaic-caption">AgroVON 2.0 Capacitance Node</div>
            </div>

            {/* Small image 2 */}
            <div className="mosaic-cell cell-small">
              <img src="/projects/edgevision.jpg" alt="EdgeVision TinyML Camera Board" loading="lazy" />
              <div className="mosaic-caption">EdgeVision ESP32-CAM Sensor</div>
            </div>

            {/* Wide image */}
            <div className="mosaic-cell cell-wide">
              <img src="/team-photo.jpg" alt="FUSION Team Prototyping Rig Demonstration" loading="lazy" />
              <div className="mosaic-caption">FUSION Engineering Cohort at Campus Hardware Showcase</div>
            </div>

            {/* Medium image 1 */}
            <div className="mosaic-cell cell-medium">
              <img src="/projects/orange_pigeon.jpg" alt="Orange Pigeon Edge AI Vision Transducer" loading="lazy" />
              <div className="mosaic-caption">Orange Pigeon AI Raspberry Pi 5 Rig</div>
            </div>

            {/* Medium image 2 */}
            <div className="mosaic-cell cell-medium">
              <div className="gallery-tech-quote">
                <span className="quote-mark">“</span>
                <p>If your code never touches real silicon, it remains a hypothesis, not an engineering system.</p>
                <span className="quote-author">— FUSION Principle</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Upcoming Projects: WHAT WE'RE BUILDING NEXT */}
      <section className="upcoming-projects-section">
        <div className="full-bleed-container">
          <div className="upcoming-header">
            <span className="section-kicker">ROADMAP</span>
            <h2 className="section-heading">What We're Building Next</h2>
            <p className="upcoming-sub">
              Hardware platforms currently undergoing CAD modeling, board milling, and procurement.
            </p>
          </div>

          <div className="upcoming-cards-grid">
            {upcomingProjects.map((item) => (
              <div key={item.num} className="upcoming-card">
                <div className="upcoming-card-header">
                  <span className="upcoming-num">{item.num}</span>
                  <span className="upcoming-target-badge">Target: {item.target}</span>
                </div>
                <h3 className="upcoming-card-title">{item.title}</h3>
                <span className="upcoming-domain-label">{item.domain}</span>
                <p className="upcoming-card-desc">{item.desc}</p>
                <div className="upcoming-status-footer">
                  <span className="status-indicator-dot" />
                  <span>ACTIVE R&amp;D PHASE</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. HOW WE BUILD Workflow */}
      <section className="how-we-build-section">
        <div className="full-bleed-container">
          <div className="how-we-build-header">
            <span className="section-kicker">THE LIFECYCLE</span>
            <h2 className="section-heading">How We Build</h2>
            <p className="how-we-build-sub">
              From the initial whiteboard formulation down to deployed campus field hardware.
            </p>
          </div>

          <div className="workflow-sequence-grid">
            {buildWorkflowSteps.map((wf, idx) => (
              <div key={wf.step} className="workflow-node">
                <div className="workflow-node-index">{wf.step}</div>
                <h3 className="workflow-node-title">{wf.title}</h3>
                <p className="workflow-node-desc">{wf.desc}</p>
                {idx < buildWorkflowSteps.length - 1 && (
                  <div className="workflow-down-arrow" aria-hidden="true">&darr;</div>
                )}
              </div>
            ))}
          </div>

          <div className="workflow-cta-strip">
            <span>Want to contribute to one of our active builds?</span>
            <button className="btn-join-sm" onClick={() => onNavigate("join")}>
              Join FUSION &rarr;
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
