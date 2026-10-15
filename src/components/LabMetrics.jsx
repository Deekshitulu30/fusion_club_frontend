import React from 'react';
import { Cpu, Terminal, Zap, Compass } from 'lucide-react';

export default function LabMetrics() {
  const metrics = [
    {
      num: '450+',
      label: 'Lab Hours Logged',
      detail: 'Hands-on hardware workbench hours debugging firmware & electronics.',
      icon: Terminal,
      color: 'cyan'
    },
    {
      num: '06',
      label: 'Active Hardware Rigs',
      detail: 'Physical rovers, telemetry arrays, and autonomous aerial platforms.',
      icon: Cpu,
      color: 'amber'
    },
    {
      num: '25+',
      label: 'Student Engineers',
      detail: 'Undergrads across ECE, CSE & Mechanical collaborating as one crew.',
      icon: Zap,
      color: 'purple'
    },
    {
      num: '100%',
      label: 'Student-Engineered',
      detail: 'From custom PCB gerbers to ground station UI, designed from scratch.',
      icon: Compass,
      color: 'cyan'
    }
  ];

  return (
    <section className="metrics-section">
      <div className="container">
        <div className="metrics-grid">
          {metrics.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div key={idx} className={`metric-card metric-${item.color}`}>
                <div className="metric-header">
                  <span className="metric-num">{item.num}</span>
                  <div className={`metric-icon-badge badge-${item.color}`}>
                    <IconComp size={18} />
                  </div>
                </div>
                <h4 className="metric-label">{item.label}</h4>
                <p className="metric-detail">{item.detail}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
