import React, { useState, useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, Send, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { CLUB_INFO } from '../data/clubData';

export default function ApplyModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rollNo: '',
    domain: 'iot',
    skills: '',
    profileUrl: ''
  });

  useEffect(() => {
    if (!isOpen) {
      setSubmitted(false);
      return;
    }
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <div 
      className="modal-backdrop open" 
      onClick={onClose} 
      role="dialog" 
      aria-modal="true" 
      aria-labelledby="modal-apply-title"
    >
      <div 
        className="modal-card" 
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
          RECRUITMENT 2026 // ADMISSIONS OPEN
        </span>

        <h2 
          id="modal-apply-title" 
          style={{ 
            fontFamily: 'var(--font-display)', 
            fontSize: '1.75rem', 
            fontWeight: 800, 
            color: '#FFFFFF',
            marginBottom: '10px' 
          }}
        >
          Join FUSION Engineering Club
        </h2>

        <p style={{ color: '#CBD5E1', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '20px' }}>
          We welcome makers, coders, and hardware enthusiasts across all years at GLA University. 
          Choose your preferred path below:
        </p>

        {/* Official Google Form Direct Link Banner */}
        <div style={{
          background: 'rgba(0, 229, 190, 0.08)',
          border: '1px solid rgba(0, 229, 190, 0.3)',
          borderRadius: 'var(--radius-md)',
          padding: '16px',
          marginBottom: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px'
        }}>
          <div>
            <div style={{ fontWeight: 700, color: '#FFFFFF', fontSize: '0.95rem' }}>
              Official Application Form
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
              Complete the verified Google Form for the selection task
            </div>
          </div>

          <a 
            href={CLUB_INFO.googleFormUrl} 
            target="_blank" 
            rel="noreferrer"
            className="btn-pill btn-pill-cyan"
            style={{ padding: '8px 18px', fontSize: '0.85rem' }}
          >
            Open Form
            <ExternalLink size={15} />
          </a>
        </div>

        {/* In-Modal Quick Submission */}
        {submitted ? (
          <div style={{ textAlign: 'center', padding: '30px 10px' }}>
            <div style={{
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              background: 'rgba(0, 229, 190, 0.15)',
              border: '2px solid var(--accent-cyan)',
              color: 'var(--accent-cyan)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 16px'
            }}>
              <CheckCircle2 size={32} />
            </div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', color: '#FFFFFF', marginBottom: '8px' }}>
              Application Signal Received!
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', maxWidth: '440px', margin: '0 auto 20px' }}>
              Thanks {formData.name || 'Maker'}! Your interest in the <strong>{formData.domain.toUpperCase()}</strong> domain has been recorded. We will contact your university email with the technical task briefing.
            </p>
            <button 
              className="btn-pill btn-pill-cyan"
              onClick={onClose}
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
              <div className="modal-form-group">
                <label className="modal-form-label">Full Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Alex Sharma"
                  className="modal-form-input"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="modal-form-group">
                <label className="modal-form-label">University Roll / Reg No.</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. 2315000000"
                  className="modal-form-input"
                  value={formData.rollNo}
                  onChange={(e) => setFormData({ ...formData, rollNo: e.target.value })}
                />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
              <div className="modal-form-group">
                <label className="modal-form-label">University Email</label>
                <input 
                  type="email" 
                  required
                  placeholder="name@gla.ac.in"
                  className="modal-form-input"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="modal-form-group">
                <label className="modal-form-label">Preferred Domain</label>
                <select 
                  className="modal-form-select"
                  value={formData.domain}
                  onChange={(e) => setFormData({ ...formData, domain: e.target.value })}
                >
                  <option value="iot">Internet of Things (IoT)</option>
                  <option value="robotics">Robotics &amp; ROS2</option>
                  <option value="uav">UAVs &amp; Aeromodelling</option>
                </select>
              </div>
            </div>

            <div className="modal-form-group">
              <label className="modal-form-label">GitHub, LinkedIn, or Project Link (Optional)</label>
              <input 
                type="url" 
                placeholder="https://github.com/yourhandle"
                className="modal-form-input"
                value={formData.profileUrl}
                onChange={(e) => setFormData({ ...formData, profileUrl: e.target.value })}
              />
            </div>

            <div className="modal-form-group">
              <label className="modal-form-label">What excites you about hardware/systems engineering?</label>
              <textarea 
                rows="3" 
                placeholder="Share any past projects, tools you like (Arduino, Python, ROS), or what you want to learn..."
                className="modal-form-textarea"
                value={formData.skills}
                onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
              />
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: '14px' }}>
              <button 
                type="button" 
                className="btn-pill btn-pill-glass"
                onClick={onClose}
              >
                Cancel
              </button>
              <button 
                type="submit" 
                className="btn-pill btn-pill-cyan"
              >
                Submit Application
                <Send size={15} />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
