import React, { useState, useRef } from 'react';

export default function HardwareWorkflow() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const cardRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const handleMouseMove = (e, index) => {
    const card = cardRefs[index].current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  const stages = [
    {
      step: 'STAGE 01',
      title: 'Schematic & PCB Design',
      desc: 'Selecting sensors, designing noise-isolated power supplies, and routing high-frequency traces in KiCad for custom bare-metal boards.',
      stack: ['KiCad', 'SMD Soldering', 'Power Delivery', 'I2C/SPI Bus'],
      color: 'cyan'
    },
    {
      step: 'STAGE 02',
      title: 'Bare-Metal & RTOS Firmware',
      desc: 'Writing non-blocking firmware on ESP32 & STM32 chips. Managing memory, DMA sensor streams, and deterministic task scheduling with FreeRTOS.',
      stack: ['C / C++', 'FreeRTOS', 'Interrupt Handlers', 'DMA Streams'],
      color: 'amber'
    },
    {
      step: 'STAGE 03',
      title: 'Edge Perception & Telemetry',
      desc: 'Quantizing neural networks for on-device TinyML inference, configuring sub-GHz LoRa mesh nodes, and bridging MQTT telemetry packets.',
      stack: ['TinyML', 'LoRaWAN', 'MQTT Broker', 'OpenCV'],
      color: 'purple'
    },
    {
      step: 'STAGE 04',
      title: 'Campus Field Testing',
      desc: 'Taking autonomous rovers and multi-rotor UAV platforms outside onto GLA University grounds to test failsafes, battery discharge, and GPS waypoints.',
      stack: ['MAVLink', 'Telemetry Mast', 'Stress Testing', 'Live Debug'],
      color: 'cyan'
    }
  ];

  return (
    <section className="workflow-section section-padding" id="workflow">
      <div className="container">
        {/* Section Header */}
        <div className="workflow-header">
          <div className="workflow-kicker">ENGINEERING LIFECYCLE</div>
          <h2 className="workflow-heading">
            From Raw Silicon to<br />
            Autonomous Field Systems.
          </h2>
          <p className="workflow-sub">
            How we prototype real IoT nodes, robotic manipulators, and UAV platforms inside the FUSION lab.
          </p>
        </div>

        {/* 4-Stage Grid */}
        <div className="workflow-grid">
          {stages.map((stage, idx) => (
            <div
              key={idx}
              ref={cardRefs[idx]}
              className={`workflow-card workflow-${stage.color} ${hoveredIndex === idx ? 'is-hovered' : ''}`}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              onMouseMove={(e) => handleMouseMove(e, idx)}
            >
              <div className="workflow-card-spotlight" />
              <div className="workflow-card-step">{stage.step}</div>
              <h3 className="workflow-card-title">{stage.title}</h3>
              <p className="workflow-card-desc">{stage.desc}</p>
              <div className="workflow-tags-row">
                {stage.stack.map((tag) => (
                  <span key={tag} className="workflow-tech-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
