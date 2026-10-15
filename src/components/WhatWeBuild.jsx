import React from "react";
import { PROJECTS } from "../data/clubData";

const FEATURED = [
  {
    num: "01",
    title: "AgroVON 2.0",
    id: "agrovon-2",
    subtitle: "Autonomous Smart Farming Ecosystem",
    tags: ["IoT", "Robotics", "Embedded"],
    desc: "Arduino-based IoT sensor network broadcasting soil, temperature and humidity data to a React Native mobile app over MQTT.",
  },
  {
    num: "02",
    title: "Orange Pigeon AI",
    id: "orange-pigeon-ai",
    subtitle: "AI-Powered Edge Defence System",
    tags: ["AI", "Robotics", "Edge"],
    desc: "On-device computer vision deployed on Raspberry Pi 5 to deter birds using live detection and real-time audio response.",
  },
  {
    num: "03",
    title: "EdgeVision CCTV",
    id: "edgevision-cctv",
    subtitle: "Low-Latency TinyML Surveillance",
    tags: ["IoT", "AI", "Embedded"],
    desc: "On-device object detection on ESP32-CAM using TensorFlow Lite &mdash; zero cloud dependency, real-time inferencing.",
  },
];

export default function WhatWeBuild({ onSelectProject, onOpenAllProjects }) {
  const handleClick = (item) => {
    const full = PROJECTS.find((p) => p.id === item.id) || {
      title: item.title,
      description: item.desc,
      tags: item.tags,
      category: item.subtitle,
      specs: [{ label: "STATUS", value: "OPERATIONAL" }],
    };
    onSelectProject(full);
  };

  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <div className="projects-header-row">
          <div>
            <div className="projects-kicker">SELECTED WORK</div>
            <h2 className="projects-heading">What We Build.</h2>
          </div>
          <button className="projects-view-all-link" onClick={onOpenAllProjects}>
            View All Projects &nbsp;&rarr;
          </button>
        </div>

        <div className="projects-list-v2">
          {FEATURED.map((item) => (
            <button
              key={item.num}
              className="project-row-v2"
              onClick={() => handleClick(item)}
            >
              <div className="prv2-left">
                <span className="prv2-num">{item.num}</span>
              </div>
              <div className="prv2-divider" />
              <div className="prv2-body">
                <div className="prv2-top">
                  <div>
                    <div className="prv2-title">{item.title}</div>
                    <div className="prv2-subtitle">{item.subtitle}</div>
                  </div>
                  <div className="prv2-tags">
                    {item.tags.map((t) => (
                      <span key={t} className="prv2-tag">{t}</span>
                    ))}
                  </div>
                </div>
                <p className="prv2-desc">{item.desc}</p>
                <div className="prv2-explore">Explore project &rarr;</div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
