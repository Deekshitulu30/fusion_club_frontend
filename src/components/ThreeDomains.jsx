import React, { useState } from "react";

const DOMAINS = [
  {
    id: "iot",
    num: "01",
    name: "IOT",
    fullName: "Internet of Things",
    desc: "Connected devices, sensors & intelligent automation.",
    tags: ["ESP32", "MQTT", "LoRa", "Sensors", "Cloud"],
    accent: "#00DCE0",
    minH: "340px",
  },
  {
    id: "robotics",
    num: "02",
    name: "ROBOTICS",
    fullName: "Robotics & Mechatronics",
    desc: "Machines that sense, move & interact with the world.",
    tags: ["ROS", "OpenCV", "Actuators", "Control", "PID"],
    accent: "#8B98A8",
    minH: "300px",
  },
  {
    id: "uav",
    num: "03",
    name: "UAVS",
    fullName: "Unmanned Aerial Vehicles",
    desc: "Flight systems, autonomous platforms & aerial engineering.",
    tags: ["MAVLink", "GPS", "Flight Stack", "PX4"],
    accent: "#8B5CF6",
    minH: "270px",
  },
];

export default function ThreeDomains({ onSelectDomain }) {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="domains-section" id="domains">
      <div className="container">
        <div className="domains-header">
          <div className="domains-kicker">WHAT WE WORK ON</div>
          <h2 className="domains-heading">
            THREE DOMAINS,<br />ONE MISSION.
          </h2>
        </div>

        <div className="domains-grid">
          {DOMAINS.map((dom, i) => {
            const isHovered = hovered === i;
            const isDimmed = hovered !== null && !isHovered;
            return (
              <div
                key={dom.id}
                className={`domain-card-v2${isHovered ? " is-active" : ""}${isDimmed ? " is-dimmed" : ""}`}
                style={{
                  "--accent": dom.accent,
                  minHeight: dom.minH,
                  alignSelf: i === 0 ? "stretch" : i === 1 ? "center" : "flex-start",
                }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => onSelectDomain && onSelectDomain(dom.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === "Enter") onSelectDomain && onSelectDomain(dom.id); }}
              >
                <div className="dcv2-num">{dom.num}</div>
                <h3 className="dcv2-name">{dom.name}</h3>
                <p className="dcv2-desc">{dom.desc}</p>

                {/* Expanded on hover */}
                <div className={`dcv2-tags${isHovered ? " visible" : ""}`}>
                  {dom.tags.map((tag) => (
                    <span key={tag} className="dcv2-tag">{tag}</span>
                  ))}
                </div>

                <div className={`dcv2-explore${isHovered ? " visible" : ""}`}>
                  Explore &rarr;
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
