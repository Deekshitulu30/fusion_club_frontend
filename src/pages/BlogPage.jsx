import React, { useState } from "react";
import { Clock, Calendar, ArrowRight, Tag, BookOpen, X, ChevronRight } from "lucide-react";

export default function BlogPage({ onNavigate }) {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [selectedArticle, setSelectedArticle] = useState(null);

  const categories = [
    "ALL",
    "PROJECT STORIES",
    "TECHNICAL",
    "WORKSHOPS",
    "EVENTS",
    "TEAM",
    "CLUB UPDATES"
  ];

  const featuredStory = {
    id: "first-uav-build",
    title: "How we built our first autonomous UAV from scratch",
    category: "PROJECT STORIES",
    date: "15 Sep 2026",
    readTime: "5 min read",
    author: "Aviral Sachdeva & Rudra Pratap Singh",
    image: "/hero-campus.jpg",
    summary: "From carbon-fiber cruciform frame cutting and motor vibration damping to compiling PX4 autopilot firmware and tuning PID loitering over GLA campus lawns.",
    fullContent: `
Building an autonomous quadcopter from raw components requires conquering three distinct disciplines simultaneously: aeromechanical stability, avionics wiring, and flight software tuning.

### 1. Structural Airframe & Vibration Control
We opted for a 450mm True-X carbon-fiber airframe. The primary threat to any autonomous flight controller is high-frequency motor vibration propagating to the internal IMU (Inertial Measurement Unit). Even micro-vibrations can saturate accelerometer registers, leading to uncontrollable attitude drift. To solve this, our team CNC-cut silicone damping grommets and balanced every 1045 propeller dynamically before maiden flight.

### 2. The Avionics & Telemetry Link
The brain of the platform is a Pixhawk 4 flight computer running open-source PX4 autopilot. Bi-directional MAVLink 2.0 telemetry is broadcast via a 915MHz SiK radio transceiver pair down to our ground control station laptop, streaming altitude, battery cell voltages, and GPS position at 10Hz.

### 3. Maiden Autonomous Mission
After manual hover trims, we uploaded an automated 6-waypoint mission over GLA University grounds. Watching the drone autonomously climb to 35 meters, hold position within 30 centimeters in a 15-knot crosswind, and smoothly execute its landing sequence was the ultimate validation of months of workbench testing.
    `
  };

  const articles = [
    {
      id: "robotics-workshop-2026",
      title: "Hands-on Microcontroller & Robotics Prototyping Workshop",
      category: "WORKSHOPS",
      date: "12 Sep 2026",
      readTime: "4 min read",
      image: "/projects/edgevision.jpg",
      summary: "Introducing 40+ sophomore students to real-world embedded C++, motor control PWM, and ultrasonic distance telemetry.",
      author: "Adhish Gupta & Tuba Afreen",
      fullContent: `Over 40 engineering students attended our 2-day intensive maker lab. Participants wired dual H-bridge motor drivers, calibrated sonar transducers, and wrote obstacle evasion routines on ESP32 development boards.`
    },
    {
      id: "inside-uav-project",
      title: "Inside our UAV Project: Avionics, Fail-safes, and RTK GPS",
      category: "TECHNICAL",
      date: "08 Sep 2026",
      readTime: "6 min read",
      image: "/projects/orange_pigeon.jpg",
      summary: "Deep dive into geofenced return-to-launch safety circuits and sub-meter positioning using RTK base station links.",
      author: "Aviral Sachdeva",
      fullContent: `When operating multi-rotor platforms in institutional airspaces, fail-safes are non-negotiable. This technical article explores our dual-magnetometer compass calibration, battery low-voltage trigger steps, and geofence perimeter monitoring.`
    },
    {
      id: "meet-new-team-2026",
      title: "Meet the New FUSION Team: Welcoming the 2026 Cohort",
      category: "TEAM",
      date: "02 Sep 2026",
      readTime: "3 min read",
      image: "/team-photo.jpg",
      summary: "Introducing our new department leads and technical members driving hardware procurement and project deployments this term.",
      author: "Shreya Singh",
      fullContent: `FUSION is proud to introduce our executive board and technical leads for the 2026 academic year. Discover their technical backgrounds, project commitments, and plans for the upcoming winter build season.`
    },
    {
      id: "esp32-edge-pipeline",
      title: "From ESP32 to Edge: Architecting our IoT Sensor Pipeline",
      category: "TECHNICAL",
      date: "28 Aug 2026",
      readTime: "5 min read",
      image: "/projects/agrovon.jpg",
      summary: "How we eliminated cloud dependencies using local LoRa gateway collectors and lightweight MQTT message brokers.",
      author: "Saksham Sharan & Shahvez Khan",
      fullContent: `Cloud-dependent IoT fails in rural and agricultural regions where cellular reception is intermittent. We explain how AgroVON 2.0 leverages Semtech SX1262 LoRa modules to build a self-healing Sub-GHz sensor telemetry network.`
    },
    {
      id: "tinyml-defense-rig",
      title: "Deploying Edge Computer Vision on Raspberry Pi 5",
      category: "PROJECT STORIES",
      date: "20 Aug 2026",
      readTime: "7 min read",
      image: "/projects/orange_pigeon.jpg",
      summary: "Quantizing YOLOv8 to INT8 for 32 FPS real-time avian detection without thermal throttling on the Pi 5 Cortex-A76.",
      author: "Priyanshu Nandi & Amardeep Singh",
      fullContent: `Running neural object detection on edge hardware presents strict thermal and computational constraints. Here is how we engineered an active PWM cooling chassis and quantized our custom dataset weights to achieve 32 FPS sustained inference.`
    },
    {
      id: "annual-hackathon-review",
      title: "FUSION Club at the National Smart India Hackathon",
      category: "EVENTS",
      date: "14 Aug 2026",
      readTime: "4 min read",
      image: "/hero-campus.jpg",
      summary: "Showcasing autonomous emergency logistics and medical dispatch systems on a national stage.",
      author: "Rudra Pratap Singh",
      fullContent: `Our BloodLink Pro and disaster communication telemetry rigs were demonstrated in the regional finals. A breakdown of judges' feedback, latency benchmarks, and upcoming deployments.`
    }
  ];

  const filteredArticles = activeCategory === "ALL"
    ? articles
    : articles.filter((a) => a.category === activeCategory);

  return (
    <div className="page-wrapper page-blog">
      {/* 1. Hero */}
      <section className="blog-hero-section">
        <div className="full-bleed-container">
          <div className="blog-hero-content">
            <span className="section-kicker">EDITORIAL</span>
            <h1 className="projects-hero-headline">Lab Dispatches</h1>
            <p className="blog-hero-sub">
              Projects, experiments, and technical breakthroughs from the FUSION workbench at GLA University.
            </p>
          </div>

          {/* 2. Categories Navigation */}
          <div className="blog-categories-bar">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`blog-cat-pill ${activeCategory === cat ? "active" : ""}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Featured Story */}
      <section className="blog-featured-section">
        <div className="full-bleed-container">
          <span className="section-kicker">FEATURED DISPATCH</span>
          <article
            className="featured-story-card"
            onClick={() => setSelectedArticle(featuredStory)}
          >
            <div className="featured-image-pane">
              <img
                src={featuredStory.image}
                alt={featuredStory.title}
                className="featured-img"
                loading="lazy"
              />
              <span className="featured-cat-tag">{featuredStory.category}</span>
            </div>

            <div className="featured-content-pane">
              <div className="featured-meta-row">
                <span className="meta-item"><Calendar size={15} /> {featuredStory.date}</span>
                <span className="meta-item"><Clock size={15} /> {featuredStory.readTime}</span>
              </div>

              <h2 className="featured-title">{featuredStory.title}</h2>
              <p className="featured-summary">{featuredStory.summary}</p>
              <div className="featured-author-attribution">By {featuredStory.author}</div>

              <div className="featured-read-action">
                <span className="read-more-text">
                  Read full dispatch &nbsp;&rarr;
                </span>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* 4. Latest Updates Grid */}
      <section className="blog-latest-section">
        <div className="full-bleed-container">
          <div className="latest-updates-header">
            <span className="section-kicker">UPDATES</span>
            <h2 className="section-heading">Latest Articles</h2>
          </div>

          <div className="blog-cards-grid">
            {filteredArticles.map((article) => (
              <article
                key={article.id}
                className="blog-card"
                onClick={() => setSelectedArticle(article)}
              >
                <div className="blog-card-thumb-wrap">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="blog-card-img"
                    loading="lazy"
                  />
                  <span className="blog-card-cat">{article.category}</span>
                </div>

                <div className="blog-card-body">
                  <div className="blog-card-meta">
                    <span>{article.date}</span>
                    <span>&bull;</span>
                    <span>{article.readTime}</span>
                  </div>

                  <h3 className="blog-card-title">{article.title}</h3>
                  <p className="blog-card-summary">{article.summary}</p>

                  <div className="blog-card-footer">
                    <span className="blog-read-link">Read article &rarr;</span>
                    <span className="blog-author-tag">{article.author.split('&')[0]}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Article Reader Modal */}
      {selectedArticle && (
        <div className="modal-backdrop" onClick={() => setSelectedArticle(null)}>
          <div className="modal-content blog-reader-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setSelectedArticle(null)}
              aria-label="Close article"
            >
              <X size={22} />
            </button>

            <div className="reader-header">
              <span className="reader-category">{selectedArticle.category}</span>
              <h2 className="reader-title">{selectedArticle.title}</h2>
              <div className="reader-meta">
                <span>Published {selectedArticle.date}</span>
                <span>&bull;</span>
                <span>{selectedArticle.readTime}</span>
                <span>&bull;</span>
                <span>By {selectedArticle.author}</span>
              </div>
            </div>

            {selectedArticle.image && (
              <div className="reader-featured-img">
                <img src={selectedArticle.image} alt={selectedArticle.title} />
              </div>
            )}

            <div className="reader-body">
              {selectedArticle.fullContent.split('\n\n').map((paragraph, idx) => {
                if (paragraph.startsWith('### ')) {
                  return <h3 key={idx}>{paragraph.replace('### ', '')}</h3>;
                }
                return <p key={idx}>{paragraph.trim()}</p>;
              })}
            </div>

            <div className="reader-footer">
              <button
                className="btn-reader-close"
                onClick={() => setSelectedArticle(null)}
              >
                Done Reading
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
