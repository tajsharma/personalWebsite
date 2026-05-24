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
    category: "Data Engineering",
    skills: [
      { name: "SQL",           detail: "PostgreSQL, MySQL" },
      { name: "Python",        detail: "Pandas, PySpark" },
      { name: "dbt"            },
      { name: "Apache Airflow" },
      { name: "ETL / ELT"      },
      { name: "Data Modeling", detail: "Dimensional" },
      { name: "Snowflake",     detail: "in progress" },
    ],
  },
  {
    category: "Software Engineering",
    skills: [
      { name: "Java"       },
      { name: "Spring Boot"},
      { name: "Angular"    },
      { name: "Docker"     },
      { name: "Git"        },
      { name: "REST APIs"  },
      { name: "Bash"       },
    ],
  },
  {
    category: "Analytics & Visualization",
    skills: [
      { name: "Tableau"          },
      { name: "EDA"              },
      { name: "Data Storytelling"},
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
    title:        "Freelance Software Developer",
    company_name: "Classic Insurance Agency (Remote)",
    icon:         classicinsurance,
    iconText:     "CI",
    iconBg:       "#131A2B",
    date:         "Jan 2024 — Jan 2025",
    year:         "2024",
    points: [
      "Designed and built a full web application from scratch, independently owning the frontend, backend, and database layers end-to-end for an insurance agency client.",
      "Designed the relational database schema to model years of historical client records, structuring the data layer for reliable querying and future reporting workflows.",
    ],
  },
  {
    title:        "Freelance Developer",
    company_name: "Solucky (Remote)",
    icon:         null,
    iconText:     "SL",
    iconBg:       "#131A2B",
    date:         "2024",
    year:         "2024",
    points: [
      "Built a full multi-page React website for a fashion lifestyle brand, architecting 8 distinct pages with React Router DOM.",
      "Implemented an interactive digital magazine feature using react-pageflip, translating the client's print catalog into a browser-based flipbook experience.",
    ],
  },
  {
    title:        "Software Engineer Intern",
    company_name: "Inovum IT Solutions — Barcelona, ES",
    icon:         inovum,
    iconText:     null,
    iconBg:       "#131A2B",
    date:         "Jun 2023 — Aug 2023",
    year:         "2023",
    points: [
      "Built full-stack features using Java (Spring Boot) on the backend and Angular on the frontend, shipping functionality end-to-end across a multi-tier enterprise application.",
      "Designed and optimized relational data models and SQL queries powering the application's data layer, improving retrieval performance for enterprise reporting.",
      "Containerized services with Docker and collaborated in a cross-functional agile team of 6 using Jira and Confluence across an international environment.",
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
  // TODO: fill in description and link when ready
  // {
  //   name:        "NBA Value-Per-Dollar SQL Analysis",
  //   context:     "Personal Project · 2026",
  //   description: "TODO",
  //   metric:      null,
  //   tags:        [{ name: "SQL" }, { name: "Data Modeling" }, { name: "PostgreSQL" }],
  //   source_code_link: "TODO",
  //   featured:    false,
  // },
  // {
  //   name:        "SaaS Retention Data Pipeline",
  //   context:     "Personal Project · 2026",
  //   description: "TODO",
  //   metric:      null,
  //   tags:        [{ name: "Python" }, { name: "ETL / ELT" }, { name: "dbt" }],
  //   source_code_link: "TODO",
  //   featured:    false,
  // },
];

export { skillGroups, experiences, education, projects };
