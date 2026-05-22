import { inovum, springboard, classicinsurance, madscience } from "../assets";

// ── Navigation ────────────────────────────────────────────────────────────────
export const navLinks = [
  { id: "projects",  title: "Projects"   },
  { id: "work",      title: "Experience" },
  { id: "skills",    title: "Skills"     },
  { id: "contact",   title: "Contact"    },
];

// ── Skills grouped by category ────────────────────────────────────────────────
const skillGroups = [
  {
    category: "Data Analysis",
    skills: [
      { name: "SQL",    detail: "PostgreSQL, MySQL" },
      { name: "Python", detail: "Pandas, NumPy"     },
      { name: "Excel",  detail: "Advanced"          },
    ],
  },
  {
    category: "Visualization & BI",
    skills: [
      { name: "Tableau"    },
      { name: "Power BI"   },
      { name: "Matplotlib" },
      { name: "Seaborn"    },
    ],
  },
  {
    category: "Data Architecture & Tools",
    skills: [
      { name: "Relational DB Design" },
      { name: "Data Warehousing"     },
      { name: "API Integration"      },
      { name: "Git"                  },
    ],
  },
];

// ── Experience ────────────────────────────────────────────────────────────────
const experiences = [
  {
    title:        "Data Analytics Fellow",
    company_name: "Springboard",
    icon:         springboard,
    iconText:     "SB",
    iconBg:       "#131A2B",
    date:         "Oct 2025 — Present",
    year:         "2026",
    points: [
      "Translate complex business problems into actionable strategy by engineering data pipelines and visualizations (SQL, Python, Tableau) to drive stakeholder decision-making.",
      "Completed an intensive 400+ hour program, independently architecting end-to-end data solutions and conducting advanced exploratory data analysis.",
      "Built an Olist Marketplace operational dashboard in Tableau/SQL identifying revenue drivers and inefficiencies; conducted Python-driven sentiment analysis on financial news data to surface market volatility patterns.",
    ],
  },
  {
    title:        "Substitute Teacher",
    company_name: "Mad Science of DFW · The Education Team",
    icon:         madscience,
    iconText:     "ST",
    iconBg:       "#131A2B",
    date:         "Jan 2025 — Present",
    year:         "2025",
    points: [
      "Manage shifting daily objectives across classroom environments, demonstrating adaptability and on-the-fly problem-solving.",
      "Translate complex instructional material into digestible formats for audiences of 30+, reinforcing communication skills critical for data storytelling.",
      "Establish rapport quickly and maintain structured, productive learning environments.",
    ],
  },
  {
    title:        "Freelance Data Consultant",
    company_name: "Classic Insurance Agency (Remote)",
    icon:         classicinsurance,
    iconText:     "CI",
    iconBg:       "#131A2B",
    date:         "Jan 2024 — Jan 2025",
    year:         "2024",
    points: [
      "Built scalable SQL and Python data pipelines automating daily data preparation, eliminating manual effort and reducing errors across recurring workflows.",
      "Designed a centralized relational data model to clean and structure years of historical client data, laying the foundation for future BI dashboard automation.",
    ],
  },
  {
    title:        "Data Analyst Intern",
    company_name: "Inovum IT Solutions — Barcelona, ES",
    icon:         inovum,
    iconText:     null,
    iconBg:       "#131A2B",
    date:         "Jun 2023 — Aug 2023",
    year:         "2023",
    points: [
      "Validated and optimized complex SQL queries for enterprise reporting pipelines, cutting data retrieval times by 15%.",
      "Built interactive visualizations that automated repetitive reporting tasks, freeing analyst time for higher-value work.",
      "Collaborated in an agile team of 6 using Jira and Slack across a cross-functional, international environment.",
    ],
  },
];

// ── Education ─────────────────────────────────────────────────────────────────
// TODO: drop white/monochrome logo PNGs at public/logos/ to activate each slot
const education = [
  {
    degree:      "BS Computer Science",
    institution: "UC Davis",
    date:        "Dec 2023",
    logo:        "/logos/ucdavis.png",
  },
  {
    degree:      "Data Science & Machine Learning",
    institution: "MIT Schwarzman College of Computing",
    date:        "May 2024",
    logo:        "/logos/mit.png",
  },
  {
    degree:      "Data Analytics Career Track",
    institution: "Springboard",
    date:        "Apr 2026",
    logo:        "/logos/springboard.png",
  },
];

// ── Projects ──────────────────────────────────────────────────────────────────
const projects = [
  {
    name:        "ChemCorp Strategic Revenue Analysis",
    context:     "Springboard · Feb 2026",
    description:
      "7-slide executive Tableau story dashboard identifying revenue leakage across a 45k-customer base. Surfaced a $41M revenue risk tied to 10% client churn and built quadrant-based investment frameworks with leadership recommendations.",
    metric:      { value: "$41M", label: "revenue risk surfaced", type: "negative" },
    tags: [
      { name: "Tableau"             },
      { name: "Data Storytelling"   },
      { name: "Executive Reporting" },
    ],
    source_code_link: "https://public.tableau.com/app/profile/tajinder.sharma/viz/ChemCorpDataAnalysis_TajinderSharma1/Story1", // TODO: add project link
    featured:    true,
  },
  {
    name:        "Marketplace Sentiment Volatility Analysis",
    context:     "Springboard · Mar 2026",
    description:
      "EDA on a financial news dataset to identify market trends and sentiment correlations. Cleaned missing values, normalized text, and engineered temporal features to surface volatility patterns across the dataset.",
    metric:      { value: "3,024", label: "Records Analyzed", type: "neutral" },
    tags: [
      { name: "Python" },
      { name: "Pandas" },
      { name: "EDA"    },
    ],
    source_code_link: "https://github.com/tajsharma/Market-Sentiment-Volatility-Analysis", 
    featured:    true,
  },
  {
    name:        "EcoSim",
    context:     "Autodesk Edu Hack · Sep 2024",
    description:
      "Prepared complex environmental datasets and built Python logic to identify high-heat zones. Delivered real-time visualizations and heat maps translating energy metrics into actionable cost-saving insights.",
    metric:      { value: "1st", label: "place — Autodesk Edu Hack", type: "positive" },
    tags: [
      { name: "Python"       },
      { name: "Data Viz"     },
      { name: "Heat Mapping" },
    ],
    source_code_link: "https://github.com/devikasharma04/EcoSIm", 
    featured:    true,
  },
  {
    name:        "NBA Efficiency Predictor",
    context:     "UC Davis · STA 141",
    description:
      "Machine learning analysis using the NBA API to model how physical attributes of 500+ NBA players impact offensive efficiency. Built and evaluated a regression model using PyTorch.",
    metric:      { value: "500+", label: "players analyzed", type: "neutral" },
    tags: [
      { name: "Python"  },
      { name: "PyTorch" },
      { name: "NBA API" },
    ],
    source_code_link: "https://github.com/tajsharma/sta141projects/blob/main/final.ipynb",
    featured:    false,
  },
];

export { skillGroups, experiences, education, projects };
