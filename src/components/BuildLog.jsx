import React from "react";

const LOG_ENTRIES = [
  { date: "12.05.26", entry: "Autonomous flight demo &middot; GLA campus" },
  { date: "03.05.26", entry: "Robotics workshop &middot; 18 members attended" },
  { date: "18.04.26", entry: "Sensor array assembled for AgroVON 2.0" },
  { date: "09.04.26", entry: "UAV prototype field-tested" },
  { date: "22.03.26", entry: "EdgeVision CCTV deployed on ESP32-CAM" },
  { date: "10.03.26", entry: "First LoRa mesh network node online" },
];

export default function BuildLog() {
  return (
    <section className="buildlog-section" id="buildlog">
      <div className="container">
        <div className="buildlog-header">
          <div className="buildlog-kicker">ACTIVITY</div>
          <h2 className="buildlog-heading">Build Log</h2>
        </div>
        <div className="buildlog-entries">
          {LOG_ENTRIES.map((entry, i) => (
            <div key={i} className="buildlog-row">
              <span className="buildlog-date">[{entry.date}]</span>
              <span className="buildlog-text">{entry.entry}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
