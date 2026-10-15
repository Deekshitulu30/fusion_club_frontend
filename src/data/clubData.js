export const IMAGES = {
  heroCampus: {
    local: '/hero-campus1.jpg',
    altLocal: '/images/hero-campus1.jpg',
    fallback:
      'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=2000&q=85',
  },
  bgPcbObsidian: {
    local: '/bg-pcb-obsidian.jpg',
    altLocal: '/images/bg-pcb-obsidian.jpg',
    fallback:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2000&q=85',
  },
  bgLabTungsten: {
    local: '/bg-lab-tungsten.jpg',
    altLocal: '/images/bg-lab-tungsten.jpg',
    fallback:
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=2000&q=85',
  },
  teamPhoto: {
    local: '/team-photo.png',
    altLocal: '/images/team-photo.png',
    fallback:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=85',
  },
  projUav: {
    local: '/proj-uav.jpg',
    altLocal: '/images/proj-uav.jpg',
    fallback:
      'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=1200&q=80',
  },
  projRover: {
    local: '/proj-rover.jpg',
    altLocal: '/images/proj-rover.jpg',
    fallback:
      'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80',
  },
  projLora: {
    local: '/proj-lora.jpg',
    altLocal: '/images/proj-lora.jpg',
    fallback:
      'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&w=1200&q=80',
  },
  projEdgeAi: {
    local: '/proj-edge-ai.jpg',
    altLocal: '/images/projects/agrovon.jpg',
    fallback:
      'https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=1200&q=80',
  },
  projArm: {
    local: '/proj-arm.jpg',
    altLocal: '/images/projects/edgevision.jpg',
    fallback:
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
  },
  projBlackbox: {
    local: '/proj-blackbox.jpg',
    altLocal: '/images/projects/orange_pigeon.jpg',
    fallback:
      'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&w=1200&q=80',
  },
};

export const DOMAINS = [
  {
    id: 'iot',
    code: 'DOM. 01',
    title: 'IoT & Telemetry',
    shortDesc:
      'Distributed sensor nodes, Sub-GHz LoRa mesh, and custom PCB telemetry systems.',
    fullSpec:
      'We architect low-power wide-area sensor networks across campus infrastructure—designing custom 4-layer KiCad PCBs, MQTT telemetry brokers, and real-time ground control dashboards.',
    stack: ['ESP32-S3', 'STM32', 'LoRaWAN 865MHz', 'KiCad 8', 'MQTT / InfluxDB'],
    metricLabel: 'LINK BUDGET',
    metricValue: '4.8 KM LOS',
    iconName: 'Cpu',
  },
  {
    id: 'robotics',
    code: 'DOM. 02',
    title: 'Robotics & Kinematics',
    shortDesc:
      'Ground rovers, articulated robotic manipulators, motor controllers, and autonomous navigation.',
    fullSpec:
      'From 6-DOF inverse-kinematic manipulator arms to all-terrain differential and Ackermann rovers running ROS2 Humble, LiDAR SLAM, and custom FOC brushless motor drivers.',
    stack: ['ROS2 Humble', 'Inverse Kinematics', 'CAN Bus', 'RP2040', 'LiDAR SLAM'],
    metricLabel: 'CONTROL LOOP',
    metricValue: '1.0 kHz RT',
    iconName: 'Bot',
  },
  {
    id: 'uav',
    code: 'DOM. 03',
    title: 'Autonomous UAVs',
    shortDesc:
      'Custom-fleet multirotors, PX4 autonomous waypoint navigation, and long-range telemetry.',
    fullSpec:
      'Carbon-fiber airframes built from the ground up with redundant flight controllers, RTK-GNSS centimeter-level positioning, MAVLink telemetry, and autonomous payload delivery routines.',
    stack: ['PX4 Autopilot', 'ArduPilot', 'MAVLink', 'RTK-GNSS', '3K Carbon Frame'],
    metricLabel: 'FLIGHT ENDURANCE',
    metricValue: '38 MIN HOVER',
    iconName: 'Navigation',
  },
  {
    id: 'edge-ai',
    code: 'DOM. 04',
    title: 'AI & Embedded Systems',
    shortDesc:
      'On-device TinyML neural inference, ESP32/RP2040 firmware, and real-time computer vision.',
    fullSpec:
      'Deploying quantized vision models and sensor-fusion Kalman filters directly onto edge silicon—enabling GPS-denied visual odometry and real-time obstacle avoidance.',
    stack: ['Jetson Orin Nano', 'TensorRT', 'TinyML', 'OpenCV', 'FreeRTOS'],
    metricLabel: 'INFERENCE LATENCY',
    metricValue: '8.4 ms / FRAME',
    iconName: 'CircuitBoard',
  },
];

export const PROJECTS = [
  {
    id: 'SYS-UAV-01',
    domain: 'uav',
    domainLabel: 'Autonomous UAVs',
    title: 'AETHER-X6 Heavy Telemetry Hexacopter',
    status: 'FIELD TESTED',
    year: '2026',
    summary:
      'Custom 680mm 3K carbon-fiber hexacopter running PX4 with dual-redundant IMU, optical flow canyon hold, and 915MHz/865MHz MAVLink telemetry ground station.',
    specs: [
      { label: 'Flight Controller', value: 'Pixhawk 6C + Companion RPi 5' },
      { label: 'Propulsion', value: '6x 380KV Brushless + 15" CF Props' },
      { label: 'Telemetry Link', value: 'SiK 865MHz + 4G LTE Fallback' },
      { label: 'Payload Capacity', value: '2.4 kg Modular Rail' },
    ],
    architecture:
      'Uses an Extended Kalman Filter (EKF2) fusing RTK-GPS, barometer, and downward optical flow. Ground station runs custom telemetry HUD over WebSockets.',
    stack: ['PX4', 'MAVLink', 'C++', 'Python', 'Carbon CNC'],
    imageKey: 'projUav',
    lead: 'Aanya Maheshwari & Avionics Cohort',
  },
  {
    id: 'SYS-ROB-02',
    domain: 'robotics',
    domainLabel: 'Robotics & Kinematics',
    title: 'VANGUARD-R2 Autonomous SLAM Ground Rover',
    status: 'ACTIVE R&D',
    year: '2026',
    summary:
      '6-wheel rocker-bogie suspension ground rover equipped with 360° 2D LiDAR, stereo depth camera, and ROS2 Nav2 stack for autonomous indoor/outdoor mapping.',
    specs: [
      { label: 'Compute Node', value: 'NVIDIA Jetson Nano + STM32F4' },
      { label: 'Sensors', value: 'RPLiDAR A2M12 + Oak-D Lite Stereo' },
      { label: 'Drivetrain', value: '6x High-Torque Planetary Geared DC' },
      { label: 'Chassis', value: 'CNC 6061 Aluminum + PETG Carbon' },
    ],
    architecture:
      'STM32 handles low-level PID velocity closed-loop control at 500Hz over serial bridge, while Jetson runs Cartographer SLAM and Nav2 path planning.',
    stack: ['ROS2 Humble', 'STM32', 'LiDAR SLAM', 'SolidWorks', 'PID Control'],
    imageKey: 'projRover',
    lead: 'Amardeep Singh & Kinematics Lab',
  },
  {
    id: 'SYS-IOT-03',
    domain: 'iot',
    domainLabel: 'IoT & Telemetry',
    title: 'PULSE-MESH Sub-GHz Campus Sensor Grid',
    status: 'DEPLOYED',
    year: '2025',
    summary:
      'Solar-assisted custom 4-layer PCB sensor nodes deployed across GLA University to monitor micro-climate, air quality, and power grid harmonics over LoRa mesh.',
    specs: [
      { label: 'MCU & Radio', value: 'ESP32-S3 + SX1262 LoRa Transceiver' },
      { label: 'Sleep Current', value: '18 µA Deep Sleep Architecture' },
      { label: 'PCB Spec', value: '4-Layer ENIG Matte Black FR4' },
      { label: 'Gateway', value: '8-Channel RakWireless + MQTT Broker' },
    ],
    architecture:
      'Nodes wake every 180 seconds, sample BME680 and CT current clamps, transmit encrypted packets via multi-hop LoRa mesh, and log to TimescaleDB.',
    stack: ['KiCad', 'ESP-IDF', 'LoRa Mesh', 'MQTT', 'TimeSeries'],
    imageKey: 'projLora',
    lead: 'Adhish Gupta & Telemetry Group',
  },
  {
    id: 'SYS-AI-04',
    domain: 'edge-ai',
    domainLabel: 'AI & Embedded Systems',
    title: 'NEURO-SIGHT On-Device Drone Obstacle Avoidance',
    status: 'FIELD TESTED',
    year: '2026',
    summary:
      'INT8-quantized YOLOv8n + Monocular Depth Estimation pipeline executing at 42 FPS onboard embedded silicon for GPS-denied corridor flight.',
    specs: [
      { label: 'Accelerator', value: 'Jetson Orin Nano 8GB (TensorRT)' },
      { label: 'Throughput', value: '42.6 FPS @ 640x480 Resolution' },
      { label: 'Model Footprint', value: '6.2 MB INT8 Engine' },
      { label: 'Interface', value: 'MAVROS Offboard Velocity Vectors' },
    ],
    architecture:
      'Converts RGB stream into depth occupancy grid in real time, computing repulsive vector fields to steer the flight controller away from dynamic obstacles.',
    stack: ['TensorRT', 'PyTorch', 'OpenCV', 'MAVROS', 'Edge AI'],
    imageKey: 'projEdgeAi',
    lead: 'Anuj Patwa & Edge AI Division',
  },
  {
    id: 'SYS-ROB-05',
    domain: 'robotics',
    domainLabel: 'Robotics & Kinematics',
    title: 'KINE-ARM 6-DOF Precision Robotic Manipulator',
    status: 'IN LAB TESTING',
    year: '2025',
    summary:
      'Closed-loop stepper-driven 6-axis industrial desktop manipulator featuring cycloidal gearboxes, magnetic encoders, and custom trajectory planner.',
    specs: [
      { label: 'Repeatability', value: '±0.15 mm End-Effector Accuracy' },
      { label: 'Actuators', value: 'NEMA 17/23 + AS5600 12-bit Encoders' },
      { label: 'Kinematics', value: 'Analytical IK Solver in C++' },
      { label: 'Controller', value: 'Teensy 4.1 @ 600MHz Cortex-M7' },
    ],
    architecture:
      'Uses S-curve velocity profiling to eliminate mechanical jerk during pick-and-place operations, controlled via WebSerial kinematics visualizer.',
    stack: ['Teensy 4.1', 'C++', 'Cycloidal Drive', 'Inverse Kinematics'],
    imageKey: 'projArm',
    lead: 'Krishan Kant Sharma & Mechatronics Team',
  },
  {
    id: 'SYS-IOT-06',
    domain: 'iot',
    domainLabel: 'IoT & Telemetry',
    title: 'BLACKBOX-V3 High-G Flight Data Recorder',
    status: 'OPEN SOURCE',
    year: '2025',
    summary:
      'Ultra-compact 20x20mm M3 stackable telemetry blackbox logging 2kHz gyroscope vibration spectra and black-out recovery beacons onto SPI NAND flash.',
    specs: [
      { label: 'Form Factor', value: '20mm x 20mm Standard Drone Mount' },
      { label: 'MCU', value: 'RP2040 Dual-Core ARM Cortex-M0+' },
      { label: 'Storage', value: '128MB Winbond W25N SPI Flash' },
      { label: 'Sensors', value: 'ICM-42688-P 6-Axis High-Precision IMU' },
    ],
    architecture:
      'DMA-driven SPI logging ensures zero dropped frames during high-frequency PID oscillation debugging and FFT notch filter tuning.',
    stack: ['RP2040', 'C/C++ SDK', 'PCB Design', 'FFT Signal Processing'],
    imageKey: 'projBlackbox',
    lead: 'Aviral Sachdeva & Hardware Core',
  },
];

export const TEAM_MEMBERS = [
  // ==================== CORE EXEC (4 Students) ====================
  {
    id: 'TM-01',
    name: 'Aanya Maheshwari',
    role: 'President & Chief Avionics Architect',
    category: 'CORE EXEC',
    domain: 'Autonomous UAVs',
    batch: 'B.Tech · GLA University',
    specialty: 'PX4 Flight Stack, RTK-GNSS & Carbon Airframes',
    callsign: 'FUSION-01',
    photo: {
      local: '/team/aanya_maheshwari.jpg',
      altLocal: '/aanya_maheshwari.jpg',
      fallback: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80',
    },
    bio: 'Leads overall technical architecture and flight testing operations at FUSION. Specializes in multirotor state estimation, Extended Kalman Filter (EKF2) sensor fusion, and redundant autonomous flight control systems.',
    contributions: [
      { code: 'SYS-UAV-01', name: 'AETHER-X6 Heavy Telemetry Hexacopter — Lead Flight Architect' },
      { code: 'OPS-2026', name: 'GLA Campus Autonomous Flight Testing Protocol' },
    ],
    skills: ['PX4 Autopilot', 'MAVLink', 'RTK-GNSS', 'C++', '3K Carbon Airframes'],
    socials: { github: 'https://github.com', linkedin: 'https://linkedin.com', email: 'aanya.maheshwari@gla.ac.in' },
  },
  {
    id: 'TM-02',
    name: 'Adhish Gupta',
    role: 'Vice President & Lead PCB Designer',
    category: 'CORE EXEC',
    domain: 'IoT & Telemetry',
    batch: 'B.Tech · GLA University',
    specialty: '4-Layer KiCad Layout, Sub-GHz RF & ESP32-S3',
    callsign: 'FUSION-02',
    photo: {
      local: '/team/adhish_gupta.jpg',
      altLocal: '/adhish_gupta.jpg',
      fallback: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=80',
    },
    bio: 'Heads custom hardware fabrication and RF telemetry design. Transitioned FUSION from breadboard prototypes to impedance-matched 4-layer ENIG matte-black PCBs for long-range campus mesh networking.',
    contributions: [
      { code: 'SYS-IOT-03', name: 'PULSE-MESH Sub-GHz Campus Sensor Grid — Chief PCB Designer' },
      { code: 'RF-LAB', name: '50-Ohm Coplanar Waveguide LoRa Antenna Matching Network' },
    ],
    skills: ['KiCad 8', '4-Layer PCB', 'SX1262 LoRa', 'ESP32-S3', 'MQTT'],
    socials: { github: 'https://github.com', linkedin: 'https://linkedin.com', email: 'adhish.gupta@gla.ac.in' },
  },
  {
    id: 'TM-03',
    name: 'Amardeep Singh',
    role: 'General Secretary & Head of Robotics',
    category: 'CORE EXEC',
    domain: 'Robotics & Kinematics',
    batch: 'B.Tech · GLA University',
    specialty: 'ROS2 Humble, LiDAR SLAM & Cycloidal Actuators',
    callsign: 'FUSION-03',
    photo: {
      local: '/team/amardeep_singh.jpg',
      altLocal: '/amardeep_singh.jpg',
      fallback: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80',
    },
    bio: 'Directs ground rover autonomy and robotic manipulator kinematics, bridging low-level STM32 closed-loop motor control with ROS2 Nav2 SLAM stacks.',
    contributions: [
      { code: 'SYS-ROB-02', name: 'VANGUARD-R2 Autonomous SLAM Ground Rover — Systems Lead' },
      { code: 'SYS-ROB-05', name: 'KINE-ARM 6-DOF Precision Robotic Manipulator — IK Solver' },
    ],
    skills: ['ROS2 Humble', 'LiDAR SLAM', 'Inverse Kinematics', 'STM32F4', 'PID Control'],
    socials: { github: 'https://github.com', linkedin: 'https://linkedin.com', email: 'amardeep.singh@gla.ac.in' },
  },
  {
    id: 'TM-04',
    name: 'Anuj Patwa',
    role: 'Technical Secretary & Edge AI Lead',
    category: 'CORE EXEC',
    domain: 'AI & Embedded Systems',
    batch: 'B.Tech · GLA University',
    specialty: 'TensorRT Quantization, Jetson Orin & Depth Vision',
    callsign: 'FUSION-04',
    photo: {
      local: '/team/anuj_patwa.jpg',
      altLocal: '/anuj_patwa.jpg',
      fallback: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=900&q=80',
    },
    bio: 'Architects real-time neural perception pipelines on embedded silicon using INT8 model quantization, stereo depth occupancy grids, and CUDA camera streams.',
    contributions: [
      { code: 'SYS-AI-04', name: 'NEURO-SIGHT On-Device Drone Obstacle Avoidance — AI Lead' },
      { code: 'TRT-CORE', name: '42.6 FPS INT8 YOLOv8 Calibration Pipeline' },
    ],
    skills: ['Jetson Orin Nano', 'TensorRT INT8', 'PyTorch', 'OpenCV', 'CUDA'],
    socials: { github: 'https://github.com', linkedin: 'https://linkedin.com', email: 'anuj.patwa@gla.ac.in' },
  },

  // ==================== DOMAIN LEADS (4 Students) ====================
  {
    id: 'TM-05',
    name: 'Avinash Pathak',
    role: 'Domain Lead — Autonomous UAVs',
    category: 'DOMAIN LEADS',
    domain: 'Autonomous UAVs',
    batch: 'B.Tech · GLA University',
    specialty: 'MAVROS Offboard Control & Optical Flow Odometry',
    callsign: 'FUSION-05',
    photo: {
      local: '/team/avinash_pathak.jpg',
      altLocal: '/avinash_pathak.jpg',
      fallback: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80',
    },
    bio: 'Integrates computer vision with flight dynamics so UAVs hold position and avoid dynamic obstacles in GPS-denied indoor corridors.',
    contributions: [
      { code: 'SYS-AI-04', name: 'MAVROS Offboard Repulsive Vector Field Controller' },
      { code: 'SYS-UAV-01', name: 'Downward Optical Flow Canyon Hold Integration' },
    ],
    skills: ['MAVROS', 'Optical Flow', 'Python', 'C++', 'Flight Dynamics'],
    socials: { github: 'https://github.com', linkedin: 'https://linkedin.com', email: 'avinash.pathak@gla.ac.in' },
  },
  {
    id: 'TM-06',
    name: 'Aviral Sachdeva',
    role: 'Domain Lead — IoT & Firmware',
    category: 'DOMAIN LEADS',
    domain: 'IoT & Telemetry',
    batch: 'B.Tech · GLA University',
    specialty: 'FreeRTOS, STM32 HAL, CAN Bus & DMA Logging',
    callsign: 'FUSION-06',
    photo: {
      local: '/team/aviral_sachdeva.jpg',
      altLocal: '/aviral_sachdeva.jpg',
      fallback: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=900&q=80',
    },
    bio: 'Writes bare-metal and RTOS firmware for high-frequency sensor acquisition, DMA SPI logging, and binary telemetry packet framing.',
    contributions: [
      { code: 'SYS-IOT-06', name: 'BLACKBOX-V3 2kHz High-G Flight Data Recorder' },
      { code: 'FW-BUS', name: '32-Byte CRC16 Packed Telemetry Protocol' },
    ],
    skills: ['FreeRTOS', 'STM32 HAL', 'RP2040 SDK', 'DMA SPI', 'CAN Bus'],
    socials: { github: 'https://github.com', linkedin: 'https://linkedin.com', email: 'aviral.sachdeva@gla.ac.in' },
  },
  {
    id: 'TM-07',
    name: 'Krishan Kant Sharma',
    role: 'Domain Lead — Mechanical & CAD',
    category: 'DOMAIN LEADS',
    domain: 'Robotics & Kinematics',
    batch: 'B.Tech · GLA University',
    specialty: 'SolidWorks FEA, 3K Carbon CNC & 3D Printed Jigs',
    callsign: 'FUSION-07',
    photo: {
      local: '/team/krishan_kant_sharma.jpg',
      altLocal: '/krishan_kant_sharma.jpg',
      fallback: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=900&q=80',
    },
    bio: 'Designs lightweight vibration-isolated airframes and rover suspension assemblies using finite element modal analysis (FEA).',
    contributions: [
      { code: 'SYS-UAV-01', name: '680mm Folding Carbon-Fiber Hexacopter Airframe' },
      { code: 'SYS-ROB-02', name: '6-Wheel Rocker-Bogie CNC 6061 Aluminum Chassis' },
    ],
    skills: ['SolidWorks CAD', 'FEA Modal Analysis', 'Carbon CNC', 'PETG-CF'],
    socials: { github: 'https://github.com', linkedin: 'https://linkedin.com', email: 'krishan.sharma@gla.ac.in' },
  },
  {
    id: 'TM-08',
    name: 'Nandini Sharma',
    role: 'Domain Lead — Edge AI & Vision',
    category: 'DOMAIN LEADS',
    domain: 'AI & Embedded Systems',
    batch: 'B.Tech · GLA University',
    specialty: 'Stereo Depth Estimation, YOLOv8 & ROS2 Vision',
    callsign: 'FUSION-08',
    photo: {
      local: '/team/nandini_sharma.jpg',
      altLocal: '/nandini_sharma.jpg',
      fallback: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80',
    },
    bio: 'Builds low-latency visual odometry and object tracking pipelines for autonomous ground and aerial robots using Oak-D Lite stereo cameras.',
    contributions: [
      { code: 'SYS-AI-04', name: 'Stereo Disparity Occupancy Grid Node' },
      { code: 'SYS-ROB-02', name: '3D LiDAR + RGB-D Point Cloud Fusion Pipeline' },
    ],
    skills: ['Oak-D Stereo', 'OpenCV', 'PyTorch', 'ROS2 Vision', 'C++'],
    socials: { github: 'https://github.com', linkedin: 'https://linkedin.com', email: 'nandini.sharma@gla.ac.in' },
  },

  // ==================== AVIONICS & AI (6 Students) ====================
  {
    id: 'TM-09',
    name: 'Paridhi Maheshwari',
    role: 'Embedded TinyML & Sensor Fusion Engineer',
    category: 'AVIONICS & AI',
    domain: 'AI & Embedded Systems',
    batch: 'B.Tech · GLA University',
    specialty: 'Edge Impulse, TFLite Micro & IMU Vibration Anomaly Detection',
    callsign: 'FUSION-09',
    photo: {
      local: '/team/paridhi_maheshwari.jpg',
      altLocal: '/paridhi_maheshwari.jpg',
      fallback: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=80',
    },
    bio: 'Deploys ultra-compact neural networks directly onto Cortex-M microcontrollers to detect bearing wear and prop imbalance in mid-flight.',
    contributions: [
      { code: 'SYS-IOT-06', name: 'On-Chip IMU Vibration Fault Classifier on RP2040' },
    ],
    skills: ['TinyML', 'TFLite Micro', 'ESP32-S3', 'Signal Processing', 'Python'],
    socials: { github: 'https://github.com', linkedin: 'https://linkedin.com', email: 'paridhi.maheshwari@gla.ac.in' },
  },
  {
    id: 'TM-10',
    name: 'Raunak Singh',
    role: 'Flight Propulsion & ESC Telemetry Engineer',
    category: 'AVIONICS & AI',
    domain: 'Autonomous UAVs',
    batch: 'B.Tech · GLA University',
    specialty: 'BLHeli_32 / AM32 DShot Telemetry & RPM Notch Filtering',
    callsign: 'FUSION-10',
    photo: {
      local: '/team/raunak_singh.jpg',
      altLocal: '/raunak_singh.jpg',
      fallback: 'https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&w=900&q=80',
    },
    bio: 'Focuses on high-efficiency brushless propulsion tuning, bidirectional DShot RPM telemetry, and real-time FFT harmonic gyro notch filtering.',
    contributions: [
      { code: 'SYS-UAV-01', name: '6S Power Distribution & Dynamic Harmonic Notch Filter Tuning' },
    ],
    skills: ['DShot600', 'FFT Gyro Filtering', 'PX4', 'Power Electronics'],
    socials: { github: 'https://github.com', linkedin: 'https://linkedin.com', email: 'raunak.singh@gla.ac.in' },
  },
  {
    id: 'TM-11',
    name: 'Rudra Pratap Singh',
    role: 'Autonomous Waypoint & Swarm Systems Engineer',
    category: 'AVIONICS & AI',
    domain: 'Autonomous UAVs',
    batch: 'B.Tech · GLA University',
    specialty: 'PX4 Offboard Swarming, RTK Base Station & Mesh Routing',
    callsign: 'FUSION-11',
    photo: {
      local: '/team/rudra_pratap_singh.jpg',
      altLocal: '/rudra_pratap_singh.jpg',
      fallback: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=900&q=80',
    },
    bio: 'Researches decentralized drone coordination and centimeter-accurate RTK-GNSS base-station corrections across the campus test field.',
    contributions: [
      { code: 'SYS-UAV-01', name: 'RTK-GNSS RTCM3 Base-to-Rover Telemetry Injection' },
    ],
    skills: ['RTK-GNSS', 'ArduPilot', 'PX4', 'Python', 'Swarm Algorithms'],
    socials: { github: 'https://github.com', linkedin: 'https://linkedin.com', email: 'rudra.singh@gla.ac.in' },
  },
  {
    id: 'TM-12',
    name: 'Saksham Sharan',
    role: 'Ground Control Station & WebSockets Architect',
    category: 'AVIONICS & AI',
    domain: 'Autonomous UAVs',
    batch: 'B.Tech · GLA University',
    specialty: 'MAVLink WebSockets, React Telemetry HUD & Mission Planner',
    callsign: 'FUSION-12',
    photo: {
      local: '/team/saksham_sharan.jpg',
      altLocal: '/saksham_sharan.jpg',
      fallback: 'https://images.unsplash.com/photo-1504257432389-52343af06ae3?auto=format&fit=crop&w=900&q=80',
    },
    bio: 'Develops FUSION’s custom dark-mode Ground Control Station software for real-time multi-drone waypoint tasking and live video HUD overlays.',
    contributions: [
      { code: 'SYS-UAV-01', name: 'Real-Time WebRTC & MAVLink Ground Station Dashboard' },
    ],
    skills: ['React', 'Node.js', 'MAVLink', 'WebSockets', 'WebRTC'],
    socials: { github: 'https://github.com', linkedin: 'https://linkedin.com', email: 'saksham.sharan@gla.ac.in' },
  },
  {
    id: 'TM-13',
    name: 'Shahvez Khan',
    role: 'Edge Compute & Linux Kernel Optimization Engineer',
    category: 'AVIONICS & AI',
    domain: 'AI & Embedded Systems',
    batch: 'B.Tech · GLA University',
    specialty: 'Embedded Linux, PREEMPT_RT, Docker & GStreamer Pipelines',
    callsign: 'FUSION-13',
    photo: {
      local: '/team/shahvez_khan.jpg',
      altLocal: '/shahvez_khan.jpg',
      fallback: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=80',
    },
    bio: 'Optimizes companion computer boot times, real-time kernel scheduling, and hardware-encoded CSI video streaming on Jetson and Raspberry Pi 5.',
    contributions: [
      { code: 'SYS-AI-04', name: 'Sub-14ms GStreamer Hardware Video Ingestion Pipeline' },
    ],
    skills: ['Embedded Linux', 'GStreamer', 'Docker', 'Jetson Orin', 'Bash/C++'],
    socials: { github: 'https://github.com', linkedin: 'https://linkedin.com', email: 'shahvez.khan@gla.ac.in' },
  },
  {
    id: 'TM-14',
    name: 'Shaurya Singh',
    role: 'Computer Vision & SLAM Mapping Engineer',
    category: 'AVIONICS & AI',
    domain: 'AI & Embedded Systems',
    batch: 'B.Tech · GLA University',
    specialty: 'RTAB-Map, 3D Point Clouds & Visual-Inertial Odometry',
    callsign: 'FUSION-14',
    photo: {
      local: '/team/shaurya_singh.jpg',
      altLocal: '/shaurya_singh.jpg',
      fallback: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80',
    },
    bio: 'Works on 3D occupancy mapping and visual-inertial odometry so autonomous systems can navigate complex multi-floor academic buildings.',
    contributions: [
      { code: 'SYS-ROB-02', name: 'Autonomous Corridor SLAM & Obstacle Costmap Tuning' },
    ],
    skills: ['ROS2', 'PCL', 'Visual Odometry', 'OpenCV', 'C++'],
    socials: { github: 'https://github.com', linkedin: 'https://linkedin.com', email: 'shaurya.singh@gla.ac.in' },
  },

  // ==================== HARDWARE & CAD (5 Students) ====================
  {
    id: 'TM-15',
    name: 'Shreya Agrawal',
    role: 'Robotic Kinematics & Actuator Control Engineer',
    category: 'HARDWARE & CAD',
    domain: 'Robotics & Kinematics',
    batch: 'B.Tech · GLA University',
    specialty: 'Closed-Loop Stepper Drivers, Magnetic Encoders & FOC',
    callsign: 'FUSION-15',
    photo: {
      local: '/team/shreya_agrawal.jpg',
      altLocal: '/shreya_agrawal.jpg',
      fallback: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=80',
    },
    bio: 'Engineers precision motor control boards and S-curve trajectory planners for multi-axis robotic arms and heavy ground rovers.',
    contributions: [
      { code: 'SYS-ROB-05', name: 'AS5600 12-Bit Magnetic Encoder Closed-Loop Stepper Bus' },
    ],
    skills: ['FOC Motor Control', 'Teensy 4.1', 'Encoders', 'C++', 'CAN Bus'],
    socials: { github: 'https://github.com', linkedin: 'https://linkedin.com', email: 'shreya.agrawal@gla.ac.in' },
  },
  {
    id: 'TM-16',
    name: 'Shreya Singh',
    role: 'IoT Cloud Telemetry & Time-Series Data Engineer',
    category: 'HARDWARE & CAD',
    domain: 'IoT & Telemetry',
    batch: 'B.Tech · GLA University',
    specialty: 'MQTT Brokers, InfluxDB, Grafana & LoRaWAN Packet Decoders',
    callsign: 'FUSION-16',
    photo: {
      local: '/team/shreya_singh.jpg',
      altLocal: '/shreya_singh.jpg',
      fallback: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=900&q=80',
    },
    bio: 'Builds the end-to-end telemetry ingestion pipeline that decodes raw hexadecimal LoRa packets into live campus-wide sensor dashboards.',
    contributions: [
      { code: 'SYS-IOT-03', name: 'Campus LoRaWAN MQTT Broker & Time-Series Telemetry Engine' },
    ],
    skills: ['MQTT', 'InfluxDB', 'Python', 'LoRaWAN', 'Full-Stack Telemetry'],
    socials: { github: 'https://github.com', linkedin: 'https://linkedin.com', email: 'shreya.singh@gla.ac.in' },
  },
  {
    id: 'TM-17',
    name: 'Tuba Afreen',
    role: 'RF Telemetry & LoRa Mesh Hardware Engineer',
    category: 'HARDWARE & CAD',
    domain: 'IoT & Telemetry',
    batch: 'B.Tech · GLA University',
    specialty: 'Sub-GHz SX1262 LoRa, VNA Antenna Tuning & Low-Power PCB',
    callsign: 'FUSION-17',
    photo: {
      local: '/team/tuba_afreen.jpg',
      altLocal: '/tuba_afreen.jpg',
      fallback: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=900&q=80',
    },
    bio: 'Designs ultra-low-power solar sensor nodes and uses Vector Network Analyzers (VNA) to tune custom 865MHz antennas for maximum campus range.',
    contributions: [
      { code: 'SYS-IOT-03', name: '18µA Deep-Sleep Solar MPPT Harvesting Circuit' },
    ],
    skills: ['KiCad', 'RF VNA Tuning', 'LoRaWAN', 'Solar MPPT', 'ESP-IDF'],
    socials: { github: 'https://github.com', linkedin: 'https://linkedin.com', email: 'tuba.afreen@gla.ac.in' },
  },
  {
    id: 'TM-18',
    name: 'Vikash Rai',
    role: 'Power Systems & BMS Hardware Architect',
    category: 'HARDWARE & CAD',
    domain: 'IoT & Telemetry',
    batch: 'B.Tech · GLA University',
    specialty: '6S LiPo Smart BMS, High-Current Buck Regulators & Hall Sensors',
    callsign: 'FUSION-18',
    photo: {
      local: '/team/vikash_rai.jpg',
      altLocal: '/vikash_rai.jpg',
      fallback: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=900&q=80',
    },
    bio: 'Protects FUSION’s fleet from brownouts and voltage sag by designing high-current PDBs, synchronous buck converters, and INA226 power monitors.',
    contributions: [
      { code: 'SYS-UAV-01', name: '120A Dual-Redundant 5V/12V Avionics Power Distribution Board' },
    ],
    skills: ['Power Electronics', 'Smart BMS', 'KiCad', 'INA226', 'SMD Soldering'],
    socials: { github: 'https://github.com', linkedin: 'https://linkedin.com', email: 'vikash.rai@gla.ac.in' },
  },
  {
    id: 'TM-19',
    name: 'Yatharth Chhabra',
    role: 'Additive Manufacturing & Composite Airframe Engineer',
    category: 'HARDWARE & CAD',
    domain: 'Robotics & Kinematics',
    batch: 'B.Tech · GLA University',
    specialty: 'Cycloidal Gearboxes, Carbon-Fiber Layup & Rapid Prototyping',
    callsign: 'FUSION-19',
    photo: {
      local: '/team/yatharth_chahabra.jpg',
      altLocal: '/yatharth_chahabra.jpg',
      fallback: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80',
    },
    bio: 'Manages in-lab 3D printing farms and CNC carbon-fiber machining—producing high-torque cycloidal actuators and custom sensor mounts.',
    contributions: [
      { code: 'SYS-ROB-05', name: 'Zero-Backlash 1:35 Cycloidal Gearbox Assembly' },
    ],
    skills: ['Fusion 360', 'SolidWorks', 'Cycloidal Drives', 'Carbon CNC', '3D Printing'],
    socials: { github: 'https://github.com', linkedin: 'https://linkedin.com', email: 'yatharth.chhabra@gla.ac.in' },
  },
];

export const JOURNEY_MILESTONES = [
  {
    year: '2023 · Q3',
    code: 'PHASE 01 // GENESIS',
    title: 'FUSION Club Founded at GLA University',
    description:
      'Started by a group of hardware-obsessed undergrads in a single workbench room with two soldering stations, an oscilloscope, and a mission to build real systems instead of slide-deck projects.',
    metric: 'FOUNDING COHORT',
    tag: 'FOUNDATION',
  },
  {
    year: '2024 · Q1',
    code: 'PHASE 02 // FIRST FLIGHT',
    title: 'Maiden Autonomous Quadcopter Waypoint Mission',
    description:
      'Engineered our first custom 450mm carbon-fiber quadcopter from bare motors and an open-source flight controller—achieving stable autonomous GPS loiter and return-to-launch on the GLA campus sports ground.',
    metric: '100% AUTONOMOUS RTL',
    tag: 'AVIONICS',
  },
  {
    year: '2024 · Q4',
    code: 'PHASE 03 // CUSTOM SILICON',
    title: 'First In-House 4-Layer Telemetry PCB Fabricated',
    description:
      'Transitioned from breadboards and jumper wires to industrial 4-layer matte-black PCBs designed in KiCad with surface-mount STM32 and SX1262 LoRa transceivers.',
    metric: '4.8 KM LORA RANGE',
    tag: 'HARDWARE R&D',
  },
  {
    year: '2025 · Q2',
    code: 'PHASE 04 // NATIONAL ARENA',
    title: 'National Robotics & Drone Hackathon Finalists',
    description:
      'Represented GLA University across national hardware hackathons and autonomous UAV challenges, deploying on-device vision pipelines and ROS2 ground rovers.',
    metric: '19 CORE BUILDERS',
    tag: 'COMPETITION',
  },
  {
    year: '2026 · PRESENT',
    code: 'PHASE 05 // NEXT-GEN LAB',
    title: 'Multi-Domain Fleet & Open Hardware Cohort',
    description:
      'Operating across 4 specialized domains—IoT Mesh, Kinematics, Autonomous UAVs, and Edge AI—mentoring the next cohort of student builders from zero hardware experience to production deployments.',
    metric: '06+ DEPLOYED SYSTEMS',
    tag: 'EXPANSION',
  },
];

export const BLOG_POSTS = [
  {
    id: 'LOG-042',
    date: 'OCT 2026',
    readTime: '7 MIN READ',
    category: 'AVIONICS & CONTROL',
    author: 'Adhish Gupta & Aviral Sachdeva',
    title: 'Why We Ditched Breadboards: Designing Our Custom STM32 + LoRa Telemetry PCB',
    excerpt:
      'When your hexacopter vibrates at 180Hz in mid-air, DuPont jumper wires fail. Here is our complete engineering teardown of moving to 4-layer impedance-controlled KiCad boards.',
    content: [
      'Every student robotics club starts the same way: an Arduino or ESP32 devkit taped onto a chassis with a rat’s nest of jumper wires. It works on a desk at 2 AM, and then fails five seconds after takeoff on the flight line due to vibration and ground-loop noise.',
      'For our 2026 telemetry stack, we mandated a strict rule across FUSION: no flight or field rover hardware leaves the lab without a custom PCB and locking Molex PicoBlade / XT60 connectors.',
      'Our stackup uses a standard 4-layer FR4 configuration (Signal / GND / PWR / Signal) with an unbroken internal ground plane underneath the SX1262 865MHz RF trace. By matching the 50-ohm coplanar waveguide impedance to the SMA bulkheads, we reduced packet drop rates by 78% at 3 kilometers across campus.',
    ],
    codeSnippet: `// STM32 DMA Telemetry Packet Struct (Packed 32-Byte Frame)
typedef struct __attribute__((packed)) {
  uint16_t sync_word;     // 0xF510
  uint32_t timestamp_ms;
  float roll_deg;
  float pitch_deg;
  float yaw_deg;
  uint16_t vbat_mv;       // 6S LiPo Millivolts
  int8_t rssi_dbm;
  uint16_t crc16;
} fusion_telem_frame_t;`,
  },
  {
    id: 'LOG-039',
    date: 'SEP 2026',
    readTime: '6 MIN READ',
    category: 'EDGE AI & VISION',
    author: 'Anuj Patwa & Nandini Sharma',
    title: 'Squeezing 42 FPS Out of YOLOv8 on Jetson Orin Nano for UAV Corridor Flight',
    excerpt:
      'PyTorch floating-point models are too slow for high-speed obstacle avoidance. How we used TensorRT INT8 calibration and CUDA zero-copy buffers to slash latency to 8.4ms.',
    content: [
      'When an autonomous quadcopter is flying at 6 m/s, a 120ms vision inference delay means the drone travels 72 centimeters before it even realizes an obstacle is in front of it. That is the difference between a clean avoidance maneuver and shattered carbon fiber.',
      'By exporting our custom-trained obstacle detector through ONNX into a TensorRT INT8 engine with an onboard calibration cache of 500 GLA campus corridor images, we achieved a 3.8x speedup with less than 0.6% mAP degradation.',
      'Combined with GStreamer hardware-accelerated CSI camera capture, our end-to-end photon-to-MAVLink velocity command latency now sits reliably under 14 milliseconds.',
    ],
    codeSnippet: `# TensorRT Engine Build Command on Jetson Orin
/usr/src/tensorrt/bin/trtexec \\
  --onnx=fusion_corridor_v8n.onnx \\
  --saveEngine=fusion_corridor_int8.engine \\
  --int8 --calib=gla_campus_calib.cache \\
  --workspace=2048 --fp16`,
  },
  {
    id: 'LOG-035',
    date: 'AUG 2026',
    readTime: '5 MIN READ',
    category: 'KINEMATICS & ROS2',
    author: 'Amardeep Singh & Shaurya Singh',
    title: 'Tuning Closed-Loop PID & Odometry on a 6-Wheel Rocker-Bogie Rover',
    excerpt:
      'Wheel slip on wet brick pavement ruins dead-reckoning odometry. Here is how we fused wheel encoders with an ICM-42688 IMU inside ROS2 robot_localization.',
    content: [
      'During monsoon testing outside the academic block, our rover’s skid-steer turns caused significant wheel slip, throwing off pure encoder odometry by up to 25 degrees per turn.',
      'We solved this by writing a custom micro-ROS firmware node on the STM32F4 coprocessor that samples magnetic quadrature encoders at 500Hz alongside a hardware-timed 6-axis IMU, feeding an Extended Kalman Filter (ekf_node) in ROS2 Humble.',
    ],
    codeSnippet: `# ekf.yaml — ROS2 Sensor Fusion Configuration
odom0: /wheel_encoder_odom
odom0_config: [false, false, false,
               false, false, false,
               true,  true,  false,
               false, false, false,
               false, false, false]
imu0: /imu/data_raw
imu0_config:  [false, false, false,
               true,  true,  true,
               false, false, false,
               true,  true,  true,
               true,  false, false]`,
  },
];