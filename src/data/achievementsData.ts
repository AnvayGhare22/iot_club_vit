export interface AchievementItem {
  slug: string;
  title: string;
  category: string;
  date: string;
  description: string;
  image: string;
  type: string;
  author: string;
  readTime: string;
  stats?: { label: string; value: string }[];
  sections: { title: string; paragraphs: string[] }[];
  milestones?: string[];
}

export const achievementsData: AchievementItem[] = [
  {
    slug: "adaptive-traffic-management-achievement",
    title: "Adaptive Traffic Management System",
    category: "Flagship Achievement",
    date: "SPPU Aspire Scheme & IIT Delhi",
    description:
      "Government-funded initiative under SPPU University's Aspire Scheme. Won 1st Prize and achieved Top 20 at IIT Delhi Hackathon (Western Region), competing against startups and major colleges nationwide.",
    image: "/images/projects/project_img_5.jpeg",
    type: "Flagship Achievement",
    author: "IoT Club Technical Team",
    readTime: "4 min read",
    stats: [
      { label: "SPPU Scheme", value: "Aspire Scheme 1st Prize" },
      { label: "IIT Delhi Hackathon", value: "Top 20 Nationwide" },
      { label: "Faculty Mentor", value: "Prof. Nitin Sakhare Sir" },
      { label: "Domain", value: "Predictive AI & Telemetry" },
    ],
    sections: [
      {
        title: "Revolutionizing Traffic Management",
        paragraphs: [
          "Our team collaborated on a government-funded initiative under the SPPU University's Aspire Scheme to develop an Adaptive Traffic Management System. This system doesn't just regulate traffic; it utilizes predictive algorithms to forecast traffic flow, optimize time, and minimize fuel consumption.",
        ],
      },
      {
        title: "Recognition and Validation",
        paragraphs: [
          "The success of this project earned us:",
          "• 1st Prize Winner under the Aspire Scheme.",
          "• A coveted spot in the Top 20 ranks at the prestigious IIT Delhi Hackathon (Western Region), competing successfully against startups and major colleges nationwide.",
          "This achievement validates our club's ability to tackle complex, real-world problems and deliver high-quality, professional solutions.",
        ],
      },
    ],
    milestones: [
      "Won 1st Prize under SPPU University's government-funded Aspire Scheme.",
      "Achieved Top 20 ranking at the IIT Delhi Hackathon (Western Region).",
      "Successfully integrated predictive traffic flow forecasting with physical controller actuation.",
    ],
  },
  {
    slug: "isih-technovex",
    title: "Internal Smart India Hackathon — Team TechnoVex",
    category: "Hackathon Winners",
    date: "iSIH 2026",
    description:
      "Out of more than 1,200 participating teams, Team TechnoVex secured a place among the Top 50 teams for their solution on safe and efficient operation of mine vehicles in fog and low-visibility conditions in open-cast iron ore mines.",
    image: "/images/projects/project_img_5.jpeg",
    type: "Hackathon Achievement",
    author: "IoT Club Technical Team",
    readTime: "5 min read",
    stats: [
      { label: "Competition", value: "iSIH 2026" },
      { label: "Ranking", value: "Top 50 out of 1,200+" },
      { label: "Problem Statement", value: "SIH26007" },
      { label: "Domain", value: "Mine Vehicle Safety" },
    ],
    sections: [
      {
        title: "Problem Statement",
        paragraphs: [
          "Problem Statement No.: SIH26007",
          "Safe and efficient operation of mine vehicles in fog and low-visibility conditions in open-cast iron ore mines.",
        ],
      },
      {
        title: "Proposed Solution",
        paragraphs: [
          "The safety-critical decision-making remains local to the vehicle, while the command tower provides higher-level fleet intelligence and monitoring.",
          "The system combines local sensing and sensor fusion to estimate the vehicle state and assess stopping distance before issuing a risk response. It supports Safe, Warning, Critical and Emergency states.",
          "A smart multi-vehicle safety system that uses radar, GNSS, IMU and vehicle-to-vehicle communication to detect nearby vehicles/obstacles, predict collision risk using TTC and trajectory prediction, and provide timely warnings or prototype emergency stopping. A command-tower dashboard provides live vehicle tracking, digital-twin visualization and fleet analytics.",
        ],
      },
    ],
    milestones: [
      "Secured Top 50 position out of 1,200+ participating teams.",
      "Designed a multi-sensor fusion system for mine vehicle safety.",
      "Implemented digital-twin visualization and fleet analytics dashboard.",
    ],
  },
  {
    slug: "isih-agni-vectors",
    title: "Internal Smart India Hackathon — Team Agni Vectors",
    category: "Hackathon Winners",
    date: "iSIH 2026",
    description:
      "Out of more than 1,200 participating teams, Team Agni Vectors secured a place among the Top 50 teams for their indigenous Precision Guidance Kit for 155mm artillery shells with NavIC satellite positioning and MEMS IMU sensor fusion.",
    image: "/images/projects/project_img_5.jpeg",
    type: "Hackathon Achievement",
    author: "IoT Club Technical Team",
    readTime: "5 min read",
    stats: [
      { label: "Competition", value: "iSIH 2026" },
      { label: "Ranking", value: "Top 50 out of 1,200+" },
      { label: "Problem Statement", value: "SIH26098" },
      { label: "Domain", value: "Defense & Artillery" },
    ],
    sections: [
      {
        title: "Problem Statement",
        paragraphs: [
          "Problem Statement No.: SIH26098",
          "Development of a Low-Cost Precision Guidance and Smart Electronic Fuze System for a 155 mm Artillery Shell.",
        ],
      },
      {
        title: "Proposed Solution",
        paragraphs: [
          "An indigenous, modular Precision Guidance Kit (PGK) engineered as a screw-on, roll-decoupled nose assembly for standard 155mm artillery shells to achieve a terminal accuracy CEP ≤ 30m.",
          "The system features a 4-canard aerodynamic actuation assembly governed by Proportional Navigation (ProNav) guidance, driven by an Extended Kalman Filter (EKF) that fuses NavIC satellite positioning with high-G MEMS IMU sensor data.",
          "Supported by an onboard differential spin aero-alternator for sustainable in-flight power harvesting and a 24 GHz FMCW radar multi-mode fuze, the hardened electronics package withstands > 15,000 G launch shocks, cost-effectively transforming unguided ballistic rounds into highly accurate precision-guided munitions.",
        ],
      },
    ],
    milestones: [
      "Secured Top 50 position out of 1,200+ participating teams.",
      "Designed an indigenous Precision Guidance Kit for 155mm artillery shells.",
      "Integrated NavIC satellite positioning with high-G MEMS IMU sensor fusion.",
    ],
  },
];
