import React, { useEffect, useRef } from "react";
import { Cpu, Bot, Plane, Wrench, Trophy, Sparkles, ArrowRight } from "lucide-react";

export default function ClubOverview({ onOpenApply, onOpenProjects }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.12 }
    );

    const elements = sectionRef.current?.querySelectorAll(".reveal-item");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="club-overview-section" id="about" ref={sectionRef}>
      <div className="full-bleed-container">
        <div className="asymmetric-overview-grid">
          {/* ============================================================
              LEFT STREAM: What We Do in the Club (Expansive 58% Column)
             ============================================================ */}
          <div className="overview-stream stream-left">
            <div className="stream-badge reveal-item">
              <span className="badge-index">01</span>
              <span className="badge-label">WHAT WE DO IN THE CLUB</span>
            </div>

            <h2 className="stream-title reveal-item">
              What we do in the Club
            </h2>

            <p className="stream-subtext reveal-item">
              We bridge the gap between theoretical engineering and physical execution. Our members architect real-world hardware, write production firmware, and deploy autonomous systems.
            </p>

            {/* Asymmetric Modular Cards */}
            <div className="asymmetric-card-stack">
              {/* Card 1: IoT & Embedded (Wide, Architectural Corners) */}
              <div className="asym-card asym-card-wide asym-card-iot reveal-item">
                <div className="asym-card-corner-marker top-left">+</div>
                <div className="asym-card-corner-marker bottom-right">+</div>
                
                <div className="asym-card-header">
                  <div className="asym-icon-box">
                    <Cpu size={20} />
                  </div>
                  <span className="asym-tag">DOMAIN 01</span>
                </div>

                <h3 className="asym-card-title">IoT &amp; Connected Systems</h3>
                <p className="asym-card-desc">
                  Designing multi-layer custom PCBs, ultra-low power sensor nodes, and industrial telemetry networks over LoRaWAN, MQTT, and cellular IoT.
                </p>

                <div className="asym-chips-wrap">
                  <span className="asym-chip">ESP32-S3</span>
                  <span className="asym-chip">LoRaWAN</span>
                  <span className="asym-chip">Custom PCB</span>
                  <span className="asym-chip">Sensor Fusion</span>
                </div>
              </div>

              {/* Card 2: Robotics (Offset Indented Card) */}
              <div className="asym-card asym-card-offset asym-card-robotics reveal-item">
                <div className="asym-card-corner-marker top-right">+</div>
                <div className="asym-card-corner-marker bottom-left">+</div>

                <div className="asym-card-header">
                  <div className="asym-icon-box">
                    <Bot size={20} />
                  </div>
                  <span className="asym-tag">DOMAIN 02</span>
                </div>

                <h3 className="asym-card-title">Autonomous Robotics &amp; ROS</h3>
                <p className="asym-card-desc">
                  Building ground rovers and robotic arms with LiDAR navigation, NVIDIA Jetson computer vision, motor controllers, and obstacle avoidance.
                </p>

                <div className="asym-chips-wrap">
                  <span className="asym-chip">ROS 2</span>
                  <span className="asym-chip">LiDAR SLAM</span>
                  <span className="asym-chip">Jetson Edge</span>
                  <span className="asym-chip">PID Control</span>
                </div>
              </div>

              {/* Card 3: UAVs (Dynamic Angular Framing) */}
              <div className="asym-card asym-card-uav reveal-item">
                <div className="asym-card-corner-marker top-left">+</div>

                <div className="asym-card-header">
                  <div className="asym-icon-box">
                    <Plane size={20} />
                  </div>
                  <span className="asym-tag">DOMAIN 03</span>
                </div>

                <h3 className="asym-card-title">UAVs &amp; Flight Platforms</h3>
                <p className="asym-card-desc">
                  Fabricating carbon-fiber quadcopters and fixed-wing drones with PX4 flight controllers, autonomous waypoint navigation, and telemetry links.
                </p>

                <div className="asym-chips-wrap">
                  <span className="asym-chip">PX4 Autopilot</span>
                  <span className="asym-chip">MAVLink</span>
                  <span className="asym-chip">Carbon Frame</span>
                  <span className="asym-chip">GPS Nav</span>
                </div>
              </div>
            </div>
          </div>

          {/* ============================================================
              RIGHT STREAM: Why You Should Join (Vertically Staggered 42%)
             ============================================================ */}
          <div className="overview-stream stream-right">
            <div className="stream-badge reveal-item">
              <span className="badge-index">02</span>
              <span className="badge-label">WHY YOU SHOULD JOIN</span>
            </div>

            <h2 className="stream-title reveal-item">
              Why You Should Join the Club
            </h2>

            <p className="stream-subtext reveal-item">
              FUSION is where students transform into makers, researchers, and competitive engineers. You get your hands on real soldering irons, test benches, and codebases.
            </p>

            {/* Asymmetric Staggered Feature Blocks */}
            <div className="asymmetric-benefit-stack">
              {/* Feature 1: The Hardware Lab Access */}
              <div className="benefit-block benefit-block-featured reveal-item">
                <div className="benefit-icon-corner">
                  <Wrench size={22} />
                </div>
                <div className="benefit-num">LABORATORY</div>
                <h3 className="benefit-title">Hands-on Hardware Lab Access</h3>
                <p className="benefit-desc">
                  Direct access to 3D printers, digital oscilloscopes, hot-air rework stations, and our extensive repository of development boards and sensors.
                </p>
                <div className="benefit-metric">
                  <span className="metric-val">24/7</span>
                  <span className="metric-lbl">Lab &amp; workbench access for builders</span>
                </div>
              </div>

              {/* Feature 2: High Stakes Competitions */}
              <div className="benefit-block reveal-item">
                <div className="benefit-icon-corner">
                  <Trophy size={22} />
                </div>
                <div className="benefit-num">COMPETITIONS</div>
                <h3 className="benefit-title">National Competitions &amp; Hackathons</h3>
                <p className="benefit-desc">
                  Represent GLA University at national robotics leagues, Smart India Hackathons, and drone challenges with full club sponsorship and mentorship.
                </p>
              </div>

              {/* Feature 3: Senior Peer Mentorship */}
              <div className="benefit-block reveal-item">
                <div className="benefit-icon-corner">
                  <Sparkles size={22} />
                </div>
                <div className="benefit-num">COMMUNITY</div>
                <h3 className="benefit-title">Senior Peer Mentorship</h3>
                <p className="benefit-desc">
                  No gatekeeping. Senior builders guide you from absolute fundamentals to advanced robotics, helping debug PCBs and firmware until your system works.
                </p>
              </div>

              {/* Feature 4: High-Action Recruitment Banner */}
              <div className="asym-join-trigger-card reveal-item" onClick={onOpenApply}>
                <div className="trigger-pulse-dot" />
                <div className="trigger-content">
                  <span className="trigger-label">2026 COHORT RECRUITMENT</span>
                  <h4 className="trigger-title">Ready To Build Real Systems?</h4>
                </div>
                <button className="trigger-action-btn" onClick={(e) => { e.stopPropagation(); onOpenApply(); }}>
                  Apply Now <ArrowRight size={15} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
