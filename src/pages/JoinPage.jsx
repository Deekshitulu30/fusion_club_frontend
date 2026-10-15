import React, { useState } from "react";
import { Check, AlertCircle, ArrowRight, Sparkles, Send, CheckCircle2 } from "lucide-react";

export default function JoinPage({ onNavigate }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    year: "1st",
    department: "",
    areasOfInterest: ["IoT"],
    skills: "",
    whyJoin: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const years = ["1st", "2nd", "3rd", "4th"];
  const interestAreas = ["IoT", "Robotics", "UAV", "AI", "Embedded", "Web / Software"];

  const handleYearSelect = (yr) => {
    setFormData((prev) => ({ ...prev, year: yr }));
  };

  const handleInterestToggle = (area) => {
    setFormData((prev) => {
      const exists = prev.areasOfInterest.includes(area);
      const updated = exists
        ? prev.areasOfInterest.filter((item) => item !== area)
        : [...prev.areasOfInterest, area];
      return { ...prev, areasOfInterest: updated };
    });
    if (errors.areasOfInterest) {
      setErrors((prev) => ({ ...prev, areasOfInterest: null }));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please enter your full name.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address (e.g. name@gla.ac.in).";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your contact phone number.";
    } else if (!/^\+?[\d\s-]{10,14}$/.test(formData.phone.trim())) {
      newErrors.phone = "Please enter a valid 10-digit phone number.";
    }

    if (!formData.department.trim()) {
      newErrors.department = "Please specify your department (e.g. CSE, AIML, ECE).";
    }

    if (!formData.areasOfInterest || formData.areasOfInterest.length === 0) {
      newErrors.areasOfInterest = "Select at least one area of interest.";
    }

    if (!formData.skills.trim()) {
      newErrors.skills = "List any skills, tools, languages, or write 'Beginner/Enthusiast'.";
    }

    if (!formData.whyJoin.trim()) {
      newErrors.whyJoin = "Tell us briefly why you want to build with FUSION.";
    } else if (formData.whyJoin.trim().length < 20) {
      newErrors.whyJoin = "Please provide at least 20 characters explaining your interest.";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      // Scroll to first error
      const firstErrorKey = Object.keys(validationErrors)[0];
      const el = document.getElementById(`field-${firstErrorKey}`);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    setIsSubmitting(true);

    // Simulate reliable API payload receipt
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 800);
  };

  return (
    <div className="page-wrapper page-join">
      {/* Darkened campus background with blue haze & giant subtle GLA negative space */}
      <div className="join-bg-visual" aria-hidden="true">
        <div className="join-bg-overlay" />
      </div>

      <div className="full-bleed-container join-page-body">
        {/* Left Column / Header Info: Build. Learn. Experiment. */}
        <aside className="join-intro-pane">
          <div className="join-brand-badge">
            <span className="badge-pulse" />
            <span>FUSION RECRUITMENT · 2026</span>
          </div>

          <h1 className="join-page-headline">
            Join FUSION
          </h1>

          <div className="join-creed-list">
            <span className="creed-word">Build.</span>
            <span className="creed-word">Learn.</span>
            <span className="creed-word">Experiment.</span>
          </div>

          <div className="why-join-block">
            <h2 className="why-join-title">Why Join?</h2>
            <p className="why-join-desc">
              FUSION is GLA University’s hands-on engineering community. As a member, you get:
            </p>
            <ul className="why-join-benefits">
              <li>
                <CheckCircle2 size={18} className="benefit-check" />
                <span>Dedicated hardware workbench, 3D printers, and test equipment.</span>
              </li>
              <li>
                <CheckCircle2 size={18} className="benefit-check" />
                <span>Direct mentorship from senior builders in IoT, UAVs, and Edge AI.</span>
              </li>
              <li>
                <CheckCircle2 size={18} className="benefit-check" />
                <span>Opportunities to participate in national hackathons and showcase real hardware.</span>
              </li>
              <li>
                <CheckCircle2 size={18} className="benefit-check" />
                <span>Zero gatekeeping. Curiosity and commitment are the only prerequisites.</span>
              </li>
            </ul>
          </div>

          <div className="join-meta-note">
            <span>LOCATION: FUSION Lab, Academic Block · GLA University</span>
            <span>CONTACT: fusion@gla.ac.in</span>
          </div>
        </aside>

        {/* Right Column / Application Form */}
        <main className="join-form-pane">
          {isSubmitted ? (
            <div className="join-success-card">
              <div className="success-icon-badge">
                <Check size={36} />
              </div>
              <h2 className="success-title">Application Transmitted!</h2>
              <p className="success-sub">
                Thank you, <strong>{formData.fullName}</strong>. Your telemetry packet has been recorded in the FUSION admissions queue.
              </p>
              <div className="success-next-steps">
                <h3>What happens next?</h3>
                <p>1. Our executive team will review your application within 48 hours.</p>
                <p>2. You will receive an interview invitation on WhatsApp / Email ({formData.email}).</p>
                <p>3. Successful candidates will be inducted directly into active project cohorts.</p>
              </div>

              <div className="success-actions">
                <button
                  className="btn-join-primary"
                  onClick={() => onNavigate("home")}
                >
                  Return to Home &rarr;
                </button>
                <button
                  className="btn-join-secondary"
                  onClick={() => onNavigate("projects")}
                >
                  Explore Projects
                </button>
              </div>
            </div>
          ) : (
            <form className="join-application-form" onSubmit={handleSubmit} noValidate>
              <div className="form-header-bar">
                <span className="form-legend">APPLICANT REGISTRATION FORM</span>
                <span className="form-status">FIELDS MARKED * ARE REQUIRED</span>
              </div>

              {/* Full Name */}
              <div className="form-field-group" id="field-fullName">
                <label className="field-label">
                  FULL NAME *
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="e.g. Aryan Sharma"
                  className={`form-text-input ${errors.fullName ? "has-error" : ""}`}
                />
                {errors.fullName && (
                  <span className="field-error-msg">
                    <AlertCircle size={14} /> {errors.fullName}
                  </span>
                )}
              </div>

              {/* Email */}
              <div className="form-field-group" id="field-email">
                <label className="field-label">
                  EMAIL ADDRESS *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. aryan.sharma_cs24@gla.ac.in"
                  className={`form-text-input ${errors.email ? "has-error" : ""}`}
                />
                {errors.email && (
                  <span className="field-error-msg">
                    <AlertCircle size={14} /> {errors.email}
                  </span>
                )}
              </div>

              {/* Phone */}
              <div className="form-field-group" id="field-phone">
                <label className="field-label">
                  PHONE NUMBER (WHATSAPP) *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="e.g. +91 98765 43210"
                  className={`form-text-input ${errors.phone ? "has-error" : ""}`}
                />
                {errors.phone && (
                  <span className="field-error-msg">
                    <AlertCircle size={14} /> {errors.phone}
                  </span>
                )}
              </div>

              {/* Academic Year */}
              <div className="form-field-group" id="field-year">
                <label className="field-label">
                  ACADEMIC YEAR *
                </label>
                <div className="year-selector-row">
                  {years.map((yr) => (
                    <button
                      key={yr}
                      type="button"
                      className={`year-pill-btn ${formData.year === yr ? "selected" : ""}`}
                      onClick={() => handleYearSelect(yr)}
                    >
                      {yr} Year
                    </button>
                  ))}
                </div>
              </div>

              {/* Department */}
              <div className="form-field-group" id="field-department">
                <label className="field-label">
                  DEPARTMENT / BRANCH *
                </label>
                <input
                  type="text"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  placeholder="e.g. B.Tech Computer Science / AIML / ECE"
                  className={`form-text-input ${errors.department ? "has-error" : ""}`}
                />
                {errors.department && (
                  <span className="field-error-msg">
                    <AlertCircle size={14} /> {errors.department}
                  </span>
                )}
              </div>

              {/* Areas of Interest */}
              <div className="form-field-group" id="field-areasOfInterest">
                <label className="field-label">
                  AREAS OF INTEREST (SELECT ALL THAT APPLY) *
                </label>
                <div className="interest-chips-grid">
                  {interestAreas.map((area) => {
                    const isSelected = formData.areasOfInterest.includes(area);
                    return (
                      <button
                        key={area}
                        type="button"
                        className={`interest-chip-btn ${isSelected ? "selected" : ""}`}
                        onClick={() => handleInterestToggle(area)}
                      >
                        <span className="chip-check-indicator">
                          {isSelected ? "✓" : "+"}
                        </span>
                        <span>{area}</span>
                      </button>
                    );
                  })}
                </div>
                {errors.areasOfInterest && (
                  <span className="field-error-msg">
                    <AlertCircle size={14} /> {errors.areasOfInterest}
                  </span>
                )}
              </div>

              {/* Skills */}
              <div className="form-field-group" id="field-skills">
                <label className="field-label">
                  SKILLS &amp; TOOLS *
                </label>
                <input
                  type="text"
                  name="skills"
                  value={formData.skills}
                  onChange={handleChange}
                  placeholder="e.g. Python, C++, Arduino, ROS, Soldering, Fusion 360, React (or 'Beginner Enthusiast')"
                  className={`form-text-input ${errors.skills ? "has-error" : ""}`}
                />
                {errors.skills && (
                  <span className="field-error-msg">
                    <AlertCircle size={14} /> {errors.skills}
                  </span>
                )}
              </div>

              {/* Why do you want to join? */}
              <div className="form-field-group" id="field-whyJoin">
                <label className="field-label">
                  WHY DO YOU WANT TO JOIN FUSION? *
                </label>
                <textarea
                  name="whyJoin"
                  rows={4}
                  value={formData.whyJoin}
                  onChange={handleChange}
                  placeholder="Tell us what you want to build, what excites you about hardware/robotics, or what you hope to learn..."
                  className={`form-textarea-input ${errors.whyJoin ? "has-error" : ""}`}
                />
                {errors.whyJoin && (
                  <span className="field-error-msg">
                    <AlertCircle size={14} /> {errors.whyJoin}
                  </span>
                )}
              </div>

              {/* Submit Button */}
              <div className="form-submit-action">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-submit-application"
                >
                  {isSubmitting ? (
                    <span>TRANSMITTING...</span>
                  ) : (
                    <span>SUBMIT APPLICATION &nbsp;&rarr;</span>
                  )}
                </button>
              </div>
            </form>
          )}
        </main>
      </div>
    </div>
  );
}
