import React, { useEffect } from 'react';
import { X, ExternalLink, Cpu, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div 
      className="modal-backdrop open" 
      onClick={onClose} 
      role="dialog" 
      aria-modal="true" 
      aria-labelledby="modal-project-title"
    >
      <div 
        className="modal-card" 
        style={{ maxWidth: '780px' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          className="modal-close-btn" 
          onClick={onClose}
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        {/* Header Tag & Category */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
          <span className="section-tag cyan" style={{ margin: 0, padding: '4px 10px', fontSize: '0.7rem' }}>
            {project.category || 'Engineering'}
          </span>
          {project.statusCode && (
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              {project.statusCode}
            </span>
          )}
        </div>

        {/* Project Title & Image */}
        <h2 
          id="modal-project-title" 
          style={{ 
            fontFamily: 'var(--font-display)', 
            fontSize: '1.85rem', 
            fontWeight: 800, 
            color: '#FFFFFF',
            marginBottom: '8px' 
          }}
        >
          {project.title}
        </h2>

        {project.tagline && (
          <p style={{ color: 'var(--accent-cyan)', fontSize: '0.95rem', fontWeight: 600, marginBottom: '16px' }}>
            {project.tagline}
          </p>
        )}

        {project.image && (
          <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', marginBottom: '20px', maxHeight: '280px', border: '1px solid rgba(255,255,255,0.1)' }}>
            <img 
              src={project.image} 
              alt={project.title} 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            />
          </div>
        )}

        <p style={{ color: '#CBD5E1', fontSize: '0.95rem', lineHeight: 1.65, marginBottom: '24px' }}>
          {project.longDescription || project.description}
        </p>

        {/* Specs Table */}
        {project.specs && project.specs.length > 0 && (
          <div style={{ marginBottom: '24px' }}>
            <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '10px' }}>
              System Specifications
            </h4>
            <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
              {project.specs.map((spec, i) => (
                <div 
                  key={i} 
                  style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    padding: '10px 16px',
                    borderBottom: i < project.specs.length - 1 ? '1px solid rgba(255, 255, 255, 0.05)' : 'none',
                    fontSize: '0.85rem'
                  }}
                >
                  <span style={{ color: 'var(--text-muted)' }}>{spec.label}</span>
                  <span style={{ color: '#FFFFFF', fontWeight: 600 }}>{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bill of Materials (BOM) */}
        {project.bom && project.bom.length > 0 && (
          <div style={{ marginBottom: '24px' }}>
            <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '10px' }}>
              Bill of Materials (BOM)
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px' }}>
              {project.bom.map((item, idx) => (
                <div key={idx} style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.06)', borderRadius: 'var(--radius-sm)', padding: '10px 12px' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{item.item}</div>
                  <div style={{ fontSize: '0.85rem', color: '#FFFFFF', fontWeight: 600 }}>{item.part}</div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--accent-cyan)' }}>Qty: {item.qty} &middot; {item.source}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '24px' }}>
          {project.github && (
            <a 
              href={project.github} 
              target="_blank" 
              rel="noreferrer" 
              className="btn-pill btn-pill-glass"
              style={{ padding: '8px 18px', fontSize: '0.88rem' }}
            >
              <GithubIcon size={16} />
              View Source on GitHub
            </a>
          )}
          <button 
            className="btn-pill btn-pill-cyan" 
            style={{ padding: '8px 18px', fontSize: '0.88rem' }}
            onClick={onClose}
          >
            Close Spec Sheet
          </button>
        </div>
      </div>
    </div>
  );
}
