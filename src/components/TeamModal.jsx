import React, { useState, useEffect } from 'react';
import { X, Users } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './Icons';
import { TEAM_MEMBERS } from '../data/clubData';

export default function TeamModal({ isOpen, onClose }) {
  const [selectedWing, setSelectedWing] = useState('All');

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const wings = ['All', 'Executive Board', 'Technical Wing', 'Operations'];

  const filteredMembers = selectedWing === 'All' 
    ? TEAM_MEMBERS 
    : TEAM_MEMBERS.filter((m) => m.wing === selectedWing || (selectedWing === 'Operations' && m.wing?.includes('Operations')));

  return (
    <div 
      className="modal-backdrop open" 
      onClick={onClose} 
      role="dialog" 
      aria-modal="true" 
      aria-labelledby="modal-team-title"
    >
      <div 
        className="modal-card" 
        style={{ maxWidth: '840px' }}
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          className="modal-close-btn" 
          onClick={onClose}
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        <span className="section-tag cyan" style={{ marginBottom: '12px' }}>
          FUSION ROSTER // BUILDERS &amp; LEADS
        </span>

        <h2 
          id="modal-team-title" 
          style={{ 
            fontFamily: 'var(--font-display)', 
            fontSize: '1.85rem', 
            fontWeight: 800, 
            color: '#FFFFFF',
            marginBottom: '8px' 
          }}
        >
          Meet the FUSION Crew
        </h2>

        <p style={{ color: '#CBD5E1', fontSize: '0.92rem', marginBottom: '20px' }}>
          The multidisciplinary engineering team driving IoT telemetry, autonomous robotics, and UAV research platforms at GLA University.
        </p>

        {/* Wing Filter Tabs */}
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '24px' }}>
          {wings.map((wing) => (
            <button
              key={wing}
              className={`btn-pill ${selectedWing === wing ? 'btn-pill-cyan' : 'btn-pill-glass'}`}
              style={{ padding: '6px 16px', fontSize: '0.82rem' }}
              onClick={() => setSelectedWing(wing)}
            >
              {wing}
            </button>
          ))}
        </div>

        {/* Team Members Grid */}
        <div className="team-cards-grid">
          {filteredMembers.map((member, idx) => (
            <div key={idx} className="team-member-card">
              <div className="team-member-avatar">
                <img 
                  src={member.photo || '/fusion-hero-logo.png'} 
                  alt={member.name}
                  onError={(e) => { e.target.src = '/fusion-hero-logo.png'; }}
                />
              </div>

              <div className="team-member-name">{member.name}</div>
              <div className="team-member-role" style={{ color: 'var(--accent-cyan)', fontWeight: 600 }}>
                {member.role}
              </div>
              <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                {member.domain || member.year}
              </div>

              {/* Social Links */}
              <div style={{ display: 'flex', gap: '8px', marginTop: '10px' }}>
                {member.linkedin && (
                  <a 
                    href={member.linkedin} 
                    target="_blank" 
                    rel="noreferrer" 
                    style={{ color: 'var(--text-secondary)' }}
                    aria-label={`${member.name} LinkedIn`}
                  >
                    <LinkedinIcon size={15} />
                  </a>
                )}
                {member.github && (
                  <a 
                    href={member.github} 
                    target="_blank" 
                    rel="noreferrer" 
                    style={{ color: 'var(--text-secondary)' }}
                    aria-label={`${member.name} GitHub`}
                  >
                    <GithubIcon size={15} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
