# FUSION — IoT & Robotics Engineering Club | GLA University

> **Official Flagship Web Platform for FUSION Club at GLA University**  
> An elite, aerospace-grade web portal built from first principles for student hardware engineers, autonomous UAV pilots, roboticists, and embedded systems developers.

---

## ⚡ Overview

**FUSION** is an interdisciplinary hardware community at **GLA University, Mathura**, uniting Computer Science, Electronics, and Mechanical engineers. We build connected Sub-GHz sensor meshes, autonomous UAV airframes, ROS2 rovers, and edge AI vision machines from custom silicon to flight code.

This platform replaces traditional static club websites with a high-fidelity, interactive hardware instrumentation deck inspired by aerospace and boutique engineering interfaces (SpaceX, Teenage Engineering, Boston Dynamics).

---

## 🚀 Key Features

### 1. 🌌 Scroll-Blending Atmosphere Engine (GSAP 3)
- Smooth multi-plate background cross-fading tied to the user's scroll position via `ScrollTrigger`.
- **Plate 0:** Golden-Hour Campus UAV Flight Line
- **Plate 1:** Deep Obsidian 4-Layer PCB Macro
- **Plate 2:** Warm Tungsten Robotics & Solder Bay
- **Plate 3:** Pure Carbon Horizon for Admissions & Field Operations

### 2. 🛰️ Live Hardware Telemetry Tickers & Micro-Schematics
- **Live Hardware Tickers:** Cards in the *Learning by Building* section display real-time fluctuating telemetry (LoRa RSSI `-64 dBm`, CAN 2.0B bus load `34%`, RTK-GNSS satellite lock `18 SATS`, and INT8 inference latency `8.4 ms`).
- **Precision CAD Accents:** 1px technical corner brackets (`┌ ┐ └ ┘`), pulsing phosphor LEDs (`● LIVE`), and dynamic focus dimming on hover.
- **Hardware Stack Inspection Drawer:** Hovering over any domain card smoothly reveals an underlying architectural drawer with carrier frequencies, bus protocols, and deep sleep power metrics.

### 3. 🔬 Full-Bleed Systems Inspection Deck (100vw × 100vh)
- Replaces generic modal popups with a full-bleed architectural inspection deck.
- 2×2 hairline specification matrix (Sensors, MCU, Battery bus, Payload).
- Interactive signal and control architecture pipeline flow diagram.
- Optical feed hardware camera reticle with keyboard navigation (`←` / `→` arrow keys & `Esc`).

### 4. 🧑‍💻 19-Builder Personnel Dossiers (Alternating Split-Shutter)
- Complete directory of all 19 student builders across 4 divisions (Core Exec, Domain Leads, Avionics & AI, Hardware & CAD).
- **Alternating Layout:** Odd candidates wipe in with Portrait Left / Dossier Right; Even candidates wipe in with Dossier Left / Portrait Right.
- Real-time bio, student callsigns, verified hardware contributions, and direct GitHub / LinkedIn / GLA email links.

### 5. 📑 Technical Field Notes & Journal Reader
- In-depth engineering teardowns (e.g., *Moving from Breadboards to 4-Layer KiCad PCBs*, *Squeezing 42 FPS on Jetson Orin Nano*, *Tuning PID on a 6-Wheel Rocker-Bogie Rover*).
- Full-bleed circular iris reveal animation with dark-mode monospace syntax highlighting.

### 6. 🛡️ Elite Hardware Recruitment Portal (Cohort 2026)
- **Live Connection Badge:** Pulsing green terminal header displaying `SYS_STATUS // SECURE COHORT ENCRYPTION ACTIVE` with real fluctuating ping (`12–16 ms`).
- **2-Step Engineering Handshake:**
  - **Phase 01:** Primary Domain Track selection + GLA candidate credentials (`@gla.ac.in`).
  - **Phase 02:** Multi-select hardware tooling chips (C++, ROS2, KiCad, SolidWorks, 3D Print, etc.) + hardware intent + weekly commitment.
- **Dynamic Spec Docket:** Sidebar updates in real-time when switching domains, showcasing the active rig, lab starter kit, domain lead mentors, and core stack.
- **Zero-Backend Discord Integration:** Form submissions automatically transmit a formatted telemetry embed to your Discord announcements channel via webhook and back up locally to `localStorage`.
- **Verified Telemetry Docket:** Generates an official candidate ID (`FUS-2026-XXXX`) with confetti and a one-click clipboard receipt generator.

### 7. 🛡️ Bulletproof `SmartImage` Loader
- Automatically attempts image resolution across local paths (`/team/`, `/images/`, `/`), custom fallbacks, and high-resolution Unsplash cloud mirrors so no broken image icons ever appear.

---

## 🛠️ Tech Stack

- **Framework:** [React 19](https://react.dev/)
- **Bundler & Build Tool:** [Vite 6](https://vitejs.dev/)
- **Animation Engine:** [GSAP 3](https://greensock.com/gsap/) with `ScrollTrigger` & `@gsap/react`
- **Iconography:** [Lucide React](https://lucide.dev/)
- **Visual FX:** [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti)
- **Styling:** Modular Vanilla CSS Design System with custom dark-mode HSL tokens, glassmorphism, and responsive CSS grids.

---

## 📂 Project Structure

```bash
fusion-club-selection/
├── public/                     # Static production assets served by Vite
│   ├── bg-lab-tungsten.jpg     # Tungsten robotics atmosphere plate
│   ├── bg-pcb-obsidian.jpg     # Obsidian PCB atmosphere plate
│   ├── hero-campus1.jpg        # Hero flight line atmosphere plate
│   ├── fusion-logo.png         # Official club logo & favicon
│   ├── proj-rover.jpg          # VANGUARD-R2 Rover photo
│   ├── proj-uav.jpg            # AETHER-X6 Hexacopter photo
│   ├── team-photo.png          # GLA University lab cohort photo
│   ├── projects/               # Specialized project photos (AgroVON, EdgeVision, etc.)
│   └── team/                   # Individual portraits of all 19 student builders
├── src/
│   ├── App.jsx                 # Main application controller, router, and viewports
│   ├── index.css               # Architectural design system & styling rules
│   ├── main.jsx                # React DOM root entrypoint
│   └── data/
│       └── clubData.js         # Single source of truth for Domains, Projects, Team & Logs
├── index.html                  # HTML5 boilerplate & Google Fonts preconnects
├── package.json                # Project dependencies and npm scripts
└── vite.config.js              # Vite configuration
```

---

## 💻 Getting Started & How to Run

### Prerequisites
Make sure you have **Node.js** (version 18.0 or later) installed on your machine:
```bash
node -v
npm -v
```

### 1. Clone the Repository
```bash
git clone https://github.com/Deekshitulu30/fusion_club_frontend.git
cd fusion_club_frontend
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Once the dev server starts, open your browser and navigate to the local URL (typically **`http://localhost:5173/`**).

### 4. Build for Production
To generate an optimized, tree-shaken production bundle:
```bash
npm run build
```
The compiled static assets will be output to the `dist/` folder.

### 5. Preview Production Build
To test the production build locally before deployment:
```bash
npm run preview
```

---

## ⚙️ Environment Variables (Optional)

To enable live application telemetry alerts sent straight to your club's Discord server, create a `.env` file in the root directory:

```env
# Optional: Discord Webhook URL for instant recruitment notifications
VITE_DISCORD_WEBHOOK_URL="https://discord.com/api/webhooks/YOUR_WEBHOOK_ID/YOUR_WEBHOOK_TOKEN"
```

> **Note:** If no webhook is configured, the recruitment form will seamlessly store applications in the candidate's browser `localStorage` and display the verified confirmation receipt with zero errors.

---

## ✏️ Customizing Content

All site content is decoupled from layout components and centralized in **`src/data/clubData.js`**:

- **Update Student Builders:** Edit `TEAM_MEMBERS` array (photo, callsign, role, batch, bio, contributions, skills, socials).
- **Update Hardware Projects:** Edit `PROJECTS` array (title, specs, architecture, tech stack, domain).
- **Update Lab Journal Posts:** Edit `BLOG_POSTS` array (title, author, content paragraphs, and C++/Python code snippets).
- **Update Timeline Milestones:** Edit `JOURNEY_MILESTONES` array.

---

## 📜 License

Created for **FUSION Engineering Club**, Department of Engineering, **GLA University, Mathura**.  
Open to club members and contributors. Built with pride for real hardware builders.
