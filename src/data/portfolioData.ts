import { Project, MissionExperience, SkillNode, Certification, StoryWaypoint, HowIWorkStage } from '../types/portfolio';

export const PERSONAL_INFO = {
  name: "MANAL ANWER",
  title: "Artificial Intelligence Engineer | ML & Generative AI",
  shortPositioning: "Building intelligent systems that make human life easier.",
  university: "Tanta University — Faculty of Engineering",
  degree: "B.Sc. in Artificial Intelligence",
  period: "Aug 2022 – Jun 2027 (Expected)",
  gpa: "3.613 / 4.0",
  location: "Egypt",
  coordinates: "30.7865° N, 31.0004° E",
  stationCode: "ORBIT-MA-01",
  email: "manal.anwer.elsaied@gmail.com",
  phone: "+20 1275457696",
  linkedin: "https://www.linkedin.com/in/manalanwar/",
  github: "https://github.com/the-ever-shining-Manal",
  quote: "Still imagining the future. Now learning how to build it.",
  aboutText: `I’m an AI Engineering student interested in machine learning, deep learning, NLP, Generative AI, RAG, and agentic systems. I enjoy breaking down complex problems, listening to people, organizing ideas into clear roadmaps, and turning concepts into working systems.

I’m also a team player and leader who believes that good solutions come from combining different perspectives.

My goal is simple: Use technology to make human life easier.`
};

export const STORY_WAYPOINTS: StoryWaypoint[] = [
  {
    epoch: "01",
    title: "SCI-FI",
    subtitle: "The Spark in Deep Space",
    description: "Growing up watching science-fiction worlds like Star Wars and Uninhabited Planet Survive, looking up at futuristic tech with wonder.",
    quote: "“How did they make this?”",
    coordinates: "SECTOR-01 // ALPHA",
    iconName: "Sparkles"
  },
  {
    epoch: "02",
    title: "CURIOSITY",
    subtitle: "The Child’s Question",
    description: "Wondering not just how worlds were imagined on screen, but how a human mind could bring those impossible ideas into tangible reality.",
    quote: "“How can I make something like this real?”",
    coordinates: "SECTOR-02 // INQUIRY",
    iconName: "Compass"
  },
  {
    epoch: "03",
    title: "ENGINEERING",
    subtitle: "The Blueprint",
    description: "Curiosity naturally drew me to engineering at Tanta University. Deconstructing how things work, systematic problem-solving, and disciplined architecture.",
    coordinates: "SECTOR-03 // STRUCTURE",
    iconName: "Cpu"
  },
  {
    epoch: "04",
    title: "ARTIFICIAL INTELLIGENCE",
    subtitle: "The Catalyst",
    description: "Discovering AI and realizing the boundary between science fiction and software is actively collapsing. Generative models, neural reasoning, and autonomous agents.",
    coordinates: "SECTOR-04 // SYNTHESIS",
    iconName: "Brain"
  },
  {
    epoch: "05",
    title: "REAL PROJECTS",
    subtitle: "From Concepts to Systems",
    description: "Constructing multimodal RAG assistants, legal intelligence, predictive risk models, and agentic frameworks solving tangible human problems.",
    coordinates: "SECTOR-05 // DEPLOYMENT",
    iconName: "Rocket"
  },
  {
    epoch: "06",
    title: "THE FUTURE",
    subtitle: "The Mission Ahead",
    description: "Still driven by the same lifelong curiosity: understanding how things work, imagining what could be better, and building technology that makes people's lives easier.",
    coordinates: "SECTOR-06 // HORIZON",
    iconName: "Orbit"
  }
];

export const SKILL_NODES: SkillNode[] = [
  // Programming
  {
    id: "python",
    name: "Python",
    category: "Programming",
    level: "Expert",
    description: "Primary language for ML architectures, data manipulation, FastAPI microservices, and AI pipelines.",
    relatedProjects: ["MedSeek", "ReadNext", "Medical Cost Predictor", "Viral Reel Machine"],
    x: 20,
    y: 28,
    connections: ["ml", "dl", "fastapi", "sql"]
  },
  {
    id: "sql",
    name: "SQL",
    category: "Programming",
    level: "Advanced",
    description: "Relational database schema design, normalization, complex joins, and analytical queries.",
    relatedProjects: ["DreamSoft System", "NYC Airbnb Analysis"],
    x: 22,
    y: 65,
    connections: ["python", "fastapi"]
  },
  {
    id: "cpp",
    name: "C++",
    category: "Programming",
    level: "Intermediate",
    description: "Low-level algorithmic reasoning, performance-critical computation, and memory fundamentals.",
    relatedProjects: ["Core Algorithmic Foundations"],
    x: 12,
    y: 45,
    connections: ["python", "go"]
  },
  {
    id: "go",
    name: "Go",
    category: "Programming",
    level: "Intermediate",
    description: "Concurrent systems programming, high-throughput microservices, and network routines.",
    relatedProjects: ["Microservice Pipelines"],
    x: 15,
    y: 80,
    connections: ["cpp", "docker"]
  },

  // AI & Machine Learning
  {
    id: "ml",
    name: "Machine Learning",
    category: "AI & Machine Learning",
    level: "Expert",
    description: "Supervised & unsupervised algorithms, feature engineering, regression, classification, and clustering.",
    relatedProjects: ["Medical Cost Predictor", "NYC Airbnb", "ReadNext"],
    x: 42,
    y: 20,
    connections: ["python", "dl", "scikit-learn"]
  },
  {
    id: "dl",
    name: "Deep Learning",
    category: "AI & Machine Learning",
    level: "Expert",
    description: "Neural network topologies, backpropagation, CNNs, Transformers, and GPU acceleration.",
    relatedProjects: ["MedSeek", "NVIDIA DLI Labs", "Viral Reel Machine"],
    x: 52,
    y: 35,
    connections: ["ml", "tensorflow", "nlp", "cv"]
  },
  {
    id: "nlp",
    name: "NLP",
    category: "AI & Machine Learning",
    level: "Expert",
    description: "Tokenization, embeddings, transformer architectures, Arabic NLP, and text classification.",
    relatedProjects: ["Legal Document Intelligence", "MedSeek", "ReadNext"],
    x: 62,
    y: 22,
    connections: ["dl", "genai", "rag"]
  },
  {
    id: "genai",
    name: "Generative AI",
    category: "AI & Machine Learning",
    level: "Expert",
    description: "Large Language Models, multimodal vision-language systems, prompt engineering, and synthetic data.",
    relatedProjects: ["MedSeek", "Viral Reel Machine", "DEPI Mission"],
    x: 72,
    y: 28,
    connections: ["nlp", "rag", "agentic-ai"]
  },
  {
    id: "agentic-ai",
    name: "Agentic AI",
    category: "AI & Machine Learning",
    level: "Advanced",
    description: "Autonomous multi-agent orchestration, tool calling, cognitive architectures, and memory states.",
    relatedProjects: ["DEPI Agentic Platform", "Viral Reel Machine"],
    x: 82,
    y: 40,
    connections: ["genai", "rag", "n8n"]
  },
  {
    id: "rag",
    name: "RAG",
    category: "AI & Machine Learning",
    level: "Expert",
    description: "Retrieval-Augmented Generation, hybrid dense/sparse search, vector indexing, and hallucination control.",
    relatedProjects: ["MedSeek", "Legal Document Intelligence"],
    x: 65,
    y: 48,
    connections: ["genai", "agentic-ai", "nlp"]
  },
  {
    id: "recsys",
    name: "Recommendation Systems",
    category: "AI & Machine Learning",
    level: "Advanced",
    description: "Content-based filtering, collaborative filtering, matrix factorization, and semantic similarity search.",
    relatedProjects: ["ReadNext"],
    x: 35,
    y: 42,
    connections: ["ml", "python"]
  },
  {
    id: "cv",
    name: "Computer Vision",
    category: "AI & Machine Learning",
    level: "Advanced",
    description: "Image classification, multimodal vision inputs (GPT-4o-mini vision), and visual feature representation.",
    relatedProjects: ["MedSeek"],
    x: 55,
    y: 15,
    connections: ["dl", "genai"]
  },

  // Frameworks & Tools
  {
    id: "tensorflow",
    name: "TensorFlow",
    category: "Frameworks & Tools",
    level: "Advanced",
    description: "Building, training, and fine-tuning deep neural networks and custom loss layers.",
    relatedProjects: ["MedSeek", "Neural Model Training"],
    x: 40,
    y: 60,
    connections: ["dl", "scikit-learn"]
  },
  {
    id: "scikit-learn",
    name: "Scikit-learn",
    category: "Frameworks & Tools",
    level: "Expert",
    description: "Production ML pipelines, preprocessing transforms, cross-validation, and hyperparameter tuning.",
    relatedProjects: ["Medical Cost Predictor", "NTI Traineeship", "ROUTE Diploma"],
    x: 32,
    y: 72,
    connections: ["ml", "python", "tensorflow"]
  },
  {
    id: "fastapi",
    name: "FastAPI",
    category: "Frameworks & Tools",
    level: "Expert",
    description: "Asynchronous RESTful APIs, Pydantic data validation, OpenAPI specs, and high-performance endpoints.",
    relatedProjects: ["DreamSoft", "MedSeek Backend"],
    x: 48,
    y: 78,
    connections: ["python", "docker", "sql"]
  },
  {
    id: "streamlit",
    name: "Streamlit",
    category: "Frameworks & Tools",
    level: "Expert",
    description: "Rapid interactive deployment of ML models, dashboards, and client-facing AI demos.",
    relatedProjects: ["Medical Cost Predictor", "Viral Reel Machine"],
    x: 58,
    y: 68,
    connections: ["python", "fastapi"]
  },
  {
    id: "nextjs",
    name: "Next.js",
    category: "Frameworks & Tools",
    level: "Advanced",
    description: "Full-stack React web architecture, server-rendered UIs, and responsive web integration.",
    relatedProjects: ["Web Interface Systems"],
    x: 70,
    y: 72,
    connections: ["fastapi", "docker"]
  },
  {
    id: "docker",
    name: "Docker",
    category: "Frameworks & Tools",
    level: "Advanced",
    description: "Containerization of AI workloads, multi-stage Dockerfiles, reproducible deployment, and microservices.",
    relatedProjects: ["MedSeek", "AWS Deployments"],
    x: 55,
    y: 88,
    connections: ["fastapi", "gcp", "aws"]
  },

  // Cloud & Platforms
  {
    id: "gcp",
    name: "Google Cloud",
    category: "Cloud & Platforms",
    level: "Advanced",
    description: "Vertex AI, cloud run, storage, and participating in Google Cloud's selective Build with AI initiative.",
    relatedProjects: ["Build with AI Track"],
    x: 78,
    y: 85,
    connections: ["docker", "aws"]
  },
  {
    id: "aws",
    name: "AWS",
    category: "Cloud & Platforms",
    level: "Advanced",
    description: "EC2 model hosting, S3 data buckets, IAM policies, and cloud deployment pipelines.",
    relatedProjects: ["Medical Cost Predictor"],
    x: 85,
    y: 70,
    connections: ["docker", "gcp"]
  },
  {
    id: "hf",
    name: "Hugging Face Spaces",
    category: "Cloud & Platforms",
    level: "Advanced",
    description: "Hosting transformer models, open-source LLMs, Gradio/Streamlit apps, and dataset repositories.",
    relatedProjects: ["Open-Source Demos"],
    x: 88,
    y: 55,
    connections: ["genai", "streamlit"]
  },
  {
    id: "n8n",
    name: "n8n",
    category: "Cloud & Platforms",
    level: "Intermediate",
    description: "Low-code workflow automation connecting LLM nodes, webhooks, databases, and third-party APIs.",
    relatedProjects: ["Viral Reel Machine", "Workflow Automation"],
    x: 88,
    y: 25,
    connections: ["agentic-ai", "github"]
  },
  {
    id: "github",
    name: "GitHub",
    category: "Cloud & Platforms",
    level: "Expert",
    description: "Version control, Actions CI/CD workflows, collaborative open source, and code repository governance.",
    relatedProjects: ["All Repositories"],
    x: 92,
    y: 12,
    connections: ["git", "n8n"]
  },

  // Engineering & Workflow
  {
    id: "git",
    name: "Git",
    category: "Engineering & Workflow",
    level: "Expert",
    description: "Branching strategies, interactive rebasing, merge management, and version governance.",
    relatedProjects: ["DreamSoft", "DEPI"],
    x: 80,
    y: 12,
    connections: ["github", "jira"]
  },
  {
    id: "jira",
    name: "JIRA",
    category: "Engineering & Workflow",
    level: "Advanced",
    description: "Agile backlog grooming, sprint tracking, issue triage, and velocity metrics in engineering teams.",
    relatedProjects: ["DreamSoft Gym System"],
    x: 70,
    y: 8,
    connections: ["git", "agile"]
  },
  {
    id: "agile",
    name: "Agile / Scrum",
    category: "Engineering & Workflow",
    level: "Advanced",
    description: "Sprint planning, standups, retrospectives, and cross-functional team coordination.",
    relatedProjects: ["DreamSoft", "Student Union Board"],
    x: 40,
    y: 6,
    connections: ["jira"]
  }
];

export const MISSIONS: MissionExperience[] = [
  {
    missionNumber: "MISSION 01",
    role: "Agentic AI & Generative AI System Developer",
    organization: "DEPI (Digital Egypt Pioneers Initiative)",
    period: "Jul 2026 – Present",
    location: "Egypt",
    summary: "Engineering next-generation agentic workflows, memory systems, and resilient LLM integrations.",
    bulletPoints: [
      "Building autonomous multi-agent workflows with cognitive memory, RAG, and custom tool calling.",
      "Developing production AI solutions with strict hallucination controls and ethical guardrails."
    ],
    technologies: ["Agentic AI", "Multi-Agent Systems", "RAG", "LLMs", "Memory Systems"],
    status: "CURRENT MISSION",
    badgeColor: "border-cosmic-pink text-pink-400 bg-pink-500/10"
  },
  {
    missionNumber: "MISSION 02",
    role: "AI & Machine Learning Trainee",
    organization: "ROUTE Academy",
    period: "Jul 2025 – Jan 2026 (7 Months)",
    location: "Egypt",
    summary: "Intensive 7-month AI & ML diploma mastering supervised, unsupervised, and deep predictive pipelines.",
    bulletPoints: [
      "Engineered, optimized, and benchmarked robust regression, classification, and neural network models.",
      "Built end-to-end data preprocessing, feature engineering, and production inference pipelines."
    ],
    technologies: ["Machine Learning", "Neural Networks", "Scikit-learn", "Python", "Deep Learning"],
    status: "COMPLETED ORBIT",
    badgeColor: "border-purple-500/40 text-purple-300 bg-purple-500/10"
  },
  {
    missionNumber: "MISSION 03",
    role: "Machine Learning Intern",
    organization: "National Telecommunication Institute (NTI)",
    period: "Jul 2025 – Aug 2025",
    location: "Egypt",
    summary: "120-hour intensive ML practicum focused on enterprise data pipelines and Scikit-learn architectures.",
    bulletPoints: [
      "Constructed modular Scikit-learn preprocessing and modeling pipelines with cross-validation.",
      "Performed advanced feature engineering, outlier purification, and performance benchmarking."
    ],
    technologies: ["Scikit-learn", "Feature Engineering", "Data Preprocessing", "Supervised ML"],
    status: "COMPLETED ORBIT",
    badgeColor: "border-cosmic-orange/40 text-orange-300 bg-orange-500/10"
  },
  {
    missionNumber: "MISSION 04",
    role: "Software Engineering Intern",
    organization: "DreamSoft",
    period: "Aug 2024 – Sep 2024",
    location: "Egypt",
    summary: "Engineered backend microservices and relational database schemas for a gym management platform.",
    bulletPoints: [
      "Architected normalized SQL schemas and high-performance FastAPI REST endpoints with Pydantic validation.",
      "Collaborated in an Agile Scrum environment for sprint deliverables and defect triage."
    ],
    technologies: ["FastAPI", "SQL", "Schema Design", "Agile / Scrum", "REST APIs"],
    status: "COMPLETED ORBIT",
    badgeColor: "border-cyan-500/40 text-cyan-300 bg-cyan-500/10"
  }
];

export const PROJECTS: Project[] = [
  {
    id: "medseek",
    number: "PROJECT 01",
    title: "MedSeek",
    subtitle: "Infant Health Assistant",
    description: "Evidence-based multimodal hybrid RAG assistant for pediatric care combining dense/sparse retrieval, GPT-4o-mini vision, and clinical safety guardrails.",
    fullOverview: "MedSeek is an advanced, evidence-based multimodal RAG system designed specifically for pediatric triage and infant health guidance. It utilizes hybrid dense/sparse retrieval with BGE-M3 embeddings and FAISS index, incorporates a clinical safety boundary architecture to eliminate dangerous hallucinations, ingests bilingual voice and image symptoms via GPT-4o-mini vision, and is containerized via Docker for instant Telegram bot deployment.",
    keyFeatures: [
      "Hybrid Retrieval: Combines dense semantic embeddings (BGE-M3) with BM25 sparse keyword matching for surgical clinical document recall.",
      "Clinical Safety Guardrails: Multi-layer hallucination control ensuring dosage questions and emergency warnings strictly reference verified pediatric literature.",
      "Multimodal Symptom Ingestion: Analyzes visual infant symptoms (rashes, skin conditions) via GPT-4o-mini vision alongside bilingual voice messages.",
      "Zero-Friction Access: Production Telegram bot interface allowing concerned parents to ask queries naturally via voice, photo, or text."
    ],
    category: "Generative AI & RAG",
    technologies: ["RAG", "BGE-M3", "FAISS", "Hybrid Search", "LLMs", "Computer Vision", "Docker", "Telegram", "FastAPI"],
    planetType: "Plasma",
    glowColor: "rgba(236, 72, 153, 0.4)",
    accentColor: "#ec4899",
    githubUrl: "https://github.com/MedInfant-RAG/MedSeek-Infant-Health-Assistant.git",
    liveUrl: "#",
    highlights: ["Multimodal Vision + Audio", "Clinical Hallucination Guardrails", "Bilingual Support"]
  },
  {
    id: "readnext",
    number: "PROJECT 02",
    title: "ReadNext",
    subtitle: "AI Book Recommendation System",
    description: "Personalized recommendation engine harnessing content-based filtering and semantic book search across high-dimensional literature corpora.",
    fullOverview: "ReadNext transforms how readers discover literature by combining semantic vector search with content-based feature filtering. Rather than relying solely on simplistic genre tags, ReadNext analyzes plot synopsis semantics, narrative pacing, atmospheric themes, and user interaction signals to recommend resonant books from a corpus of tens of thousands of titles.",
    keyFeatures: [
      "Semantic Book Embeddings: Maps narrative arcs, themes, and stylistic tones into dense vector space for conceptual similarity discovery.",
      "Hybrid Recommendation Engine: Blends metadata filtering (author, publication year, length) with neural semantic similarity.",
      "Interactive Exploration UI: Allows users to query with abstract mood queries like 'philosophical sci-fi with hopeful endings'."
    ],
    category: "Machine Learning",
    technologies: ["Python", "Recommendation Systems", "Semantic Search", "Machine Learning", "Scikit-learn"],
    planetType: "Ringed",
    glowColor: "rgba(168, 85, 247, 0.4)",
    accentColor: "#a855f7",
    githubUrl: "https://github.com/nrshousha/ReadNext.git",
    highlights: ["Semantic Vector Search", "Content-Based Filtering", "Mood-Based Queries"]
  },
  {
    id: "nyc-airbnb",
    number: "PROJECT 03",
    title: "NYC Airbnb",
    subtitle: "EDA & Data Preprocessing Pipeline",
    description: "End-to-end exploratory data analysis and mathematical preprocessing pipeline uncovering hidden pricing dynamics and availability trends across NYC.",
    fullOverview: "A comprehensive data science investigation into the New York City Airbnb Open Dataset. Applied rigorous data cleansing pipelines, multi-stage outlier elimination (IQR & Z-score), spatial geocoding visualizations, and feature engineering to uncover neighborhood pricing premiums, seasonality patterns, and listing availability dynamics across the 5 boroughs.",
    keyFeatures: [
      "Statistical Cleansing: Implemented robust handling for missing values, skewed distributions, and spatial anomalies.",
      "Feature Engineering: Created distance-to-transit metrics, availability velocity ratios, and host responsiveness factors.",
      "Visual Analytics: Generated high-resolution geographic pricing heatmaps and borough density distributions."
    ],
    category: "Data Engineering",
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Data Analysis"],
    planetType: "Terrestrial",
    glowColor: "rgba(249, 115, 22, 0.4)",
    accentColor: "#f97316",
    githubUrl: "https://github.com/the-ever-shining-Manal/New-York-City-Airbnb-Open-dataset-preprocessing.git",
    highlights: ["Borough Spatial Heatmaps", "Outlier Purification", "Pricing Volatility Analysis"]
  },
  {
    id: "medical-cost",
    number: "PROJECT 04",
    title: "Medical Cost & Risk Predictor",
    subtitle: "Real-Time Healthcare Inference System",
    description: "End-to-end regression model for predicting insurance expenditures and health risk tiers, packaged with containerized real-time AWS deployment.",
    fullOverview: "Engineered to provide transparent actuarial forecasting, this system estimates medical expenditures and patient health risk profiles based on biometric indicators, lifestyle parameters, and pre-existing risk metrics. The trained pipeline was packaged with FastAPI and deployed onto AWS cloud infrastructure for sub-second inference.",
    keyFeatures: [
      "Rigorous Preprocessing: One-hot encoding, feature normalization, and polynomial interaction features for nonlinear risk curves.",
      "Benchmarked Algorithms: Evaluated Ridge, Random Forest, and Gradient Boosting to achieve optimal mean absolute error.",
      "AWS Cloud Deployment: Containerized inference service hosted with auto-scaling capabilities."
    ],
    category: "Machine Learning",
    technologies: ["Python", "Machine Learning", "AWS", "FastAPI", "Scikit-learn", "Cloud Deployment"],
    planetType: "Molten",
    glowColor: "rgba(244, 63, 94, 0.4)",
    accentColor: "#f43f5e",
    githubUrl: "https://github.com/the-ever-shining-Manal/medical-cost-risk-predictor.git",
    highlights: ["Actuarial Risk Modeling", "Sub-Second Cloud Inference", "AWS Deployment"]
  },
  {
    id: "legal-doc-intel",
    number: "PROJECT 05",
    title: "Legal Document Intelligence",
    subtitle: "Arabic & Multilingual RAG Search System",
    description: "Specialized RAG system engineered to parse dense, archaic legal statutes, contracts, and jurisprudence with high-precision contextual citation.",
    fullOverview: "Navigating hundreds of pages of statutory law and contractual agreements is notoriously time-consuming. This Legal Intelligence system performs semantic chunking, vector indexing, and multilingual Arabic NLP to allow attorneys and researchers to ask complex jurisprudence queries and receive verifiable, cited paragraph references.",
    keyFeatures: [
      "Arabic NLP Handling: Specialized tokenization and embedding handling tailored for complex Arabic morphological structures.",
      "Contextual Precision: Reranking pipeline prioritizing exact legal paragraph citations to eliminate ambiguities.",
      "Verifiable Fact Traceability: Returns verbatim excerpts alongside syntheses for auditability."
    ],
    category: "Generative AI & RAG",
    technologies: ["RAG", "NLP", "Vector Search", "Arabic NLP", "Transformers", "Python"],
    planetType: "Ice World",
    glowColor: "rgba(147, 51, 234, 0.4)",
    accentColor: "#9333ea",
    githubUrl: "https://github.com/the-ever-shining-Manal/egypt-law-rag.git",
    highlights: ["Arabic NLP Tokenization", "Verifiable Legal Citations", "Dense Clause Extraction"]
  },
  {
    id: "viral-reel",
    number: "PROJECT 06",
    title: "Viral Reel Machine",
    subtitle: "Autonomous AI Content Repurposing Engine",
    description: "Automated media transformation tool using Generative AI and transcript analysis to convert long-form video into high-engagement short-form clips.",
    fullOverview: "The Viral Reel Machine automates the intensive post-production bottleneck of modern digital creators. The system ingests long-form video or audio, generates timestamped transcripts, uses LLM cognitive analysis to identify high-retention narrative hooks, crops speaker framing automatically, and compiles ready-to-publish vertical reels.",
    keyFeatures: [
      "Hook Detection: Evaluates semantic density, humor, and emotional spikes across timestamps to pinpoint peak moments.",
      "Automated Vertical Framing: Intelligent aspect ratio conversion keeping speakers dynamically centered.",
      "Captions & Subtitle Synthesis: Generates animated, synchronized subtitle layers for social media virality."
    ],
    category: "Generative AI & RAG",
    technologies: ["Generative AI", "Video Processing", "Automation", "AI", "Whisper", "FFmpeg"],
    planetType: "Plasma",
    glowColor: "rgba(217, 70, 239, 0.4)",
    accentColor: "#d946ef",
    githubUrl: "https://github.com/the-ever-shining-Manal/ai-multimodal-content-engine.git",
    highlights: ["Cognitive Hook Detection", "Dynamic Aspect Re-Framing", "Synchronized Viral Subtitles"]
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: "Build with AI",
    issuer: "Google Cloud & DEPI",
    year: "2026",
    badge: "Selected (Top 5,000)",
    description: "Selected for the advanced track to explore enterprise AI solutions using Google Cloud infrastructure and Vertex AI tooling.",
    keyTopics: ["Vertex AI", "Google Cloud Platform", "Enterprise LLMs"],
    credentialUrl: "https://drive.google.com/file/d/14yn-qTILEm4dAHCQ1m_bIPOX73pMGIIb/view"
  },
  {
    title: "Deep Learning Institute",
    issuer: "NVIDIA",
    year: "2025",
    badge: "GPU Accelerated Computing",
    description: "Industrial certification in neural network acceleration and deep learning development using NVIDIA GPU frameworks.",
    keyTopics: ["GPU Computing", "CUDA Architecture", "Neural Acceleration"],
    credentialUrl: "https://learn.nvidia.com/certificates?id=WWX_NwcvRH2_lb7DirgkRA&utm_source"
  },
  {
    title: "Machine Learning Summer Training",
    issuer: "National Telecommunication Institute (NTI)",
    year: "2025",
    badge: "120-Hour Enterprise Practicum",
    description: "Intensive 120-hour practical training in machine learning architectures, Scikit-learn pipelines, and predictive algorithms.",
    keyTopics: ["Scikit-learn", "Supervised Learning", "Feature Pipelines"],
    credentialUrl: "https://drive.google.com/drive/folders/1SnzuKpD2AoyZ9ahW7k9hLfBfsmoi7Ijr"
  },
  {
    title: "AI & Machine Learning Diploma",
    issuer: "ROUTE Academy",
    year: "2025–2026",
    badge: "7-Month Engineering Diploma",
    description: "Comprehensive 7-month engineering diploma covering supervised & unsupervised learning, deep neural networks, and model deployment.",
    keyTopics: ["Machine Learning", "Deep Neural Networks", "Model Optimization"],
    credentialUrl: "https://drive.google.com/drive/folders/1pEm9za3AlTdBKXuN-9xgPg2gOlyX5LKi"
  }
];

export const LEADERSHIP_ATTRIBUTES = [
  {
    title: "Leadership",
    description: "Steering diverse committees toward unified, high-impact cultural and educational milestones.",
    icon: "Shield"
  },
  {
    title: "Teamwork",
    description: "Fostering an inclusive environment where multidisciplinary contributors thrive together.",
    icon: "Users"
  },
  {
    title: "Communication",
    description: "Articulating complex technical concepts and strategic objectives with clarity and warmth.",
    icon: "MessageSquare"
  },
  {
    title: "Organization",
    description: "Rigorous planning, risk mitigation, and flawless logistics for university-wide initiatives.",
    icon: "Layers"
  },
  {
    title: "Creativity",
    description: "Infusing engineering discipline with artistic vision to design memorable student experiences.",
    icon: "Sparkles"
  }
];

export const HOW_I_BUILD_STAGES: HowIWorkStage[] = [
  {
    step: "01",
    name: "Listen",
    tagline: "Understand the people and the real problem.",
    description: "Every great system begins with empathy and observation. Before writing a line of code or training a model, I immerse myself in the stakeholder's reality: What is the true friction point? What would genuinely make their life easier?",
    details: ["User interviews & workflow analysis", "Problem decomposition", "Ethical impact & feasibility assessment"],
    icon: "Headphones"
  },
  {
    step: "02",
    name: "Plan",
    tagline: "Break the problem down and create a clear roadmap.",
    description: "Transforming ambiguous challenges into structured engineering blueprints. Defining database schemas, evaluating algorithmic tradeoffs, designing RAG pipeline boundaries, and setting verifiable performance benchmarks.",
    details: ["Architectural diagramming", "Data pipeline & metric definition", "Milestone sprint mapping"],
    icon: "Compass"
  },
  {
    step: "03",
    name: "Build",
    tagline: "Turn ideas into practical AI systems.",
    description: "Where curiosity meets engineering rigor. Writing modular, type-safe Python and modern microservices, training neural models, configuring vector indices, and creating responsive user interfaces that feel effortless.",
    details: ["Clean, reproducible codebases", "Robust validation & hallucination controls", "Containerized microservice deployment"],
    icon: "Cpu"
  },
  {
    step: "04",
    name: "Improve",
    tagline: "Test, evaluate, learn, and keep improving.",
    description: "An AI system is never static. Continually monitoring inference latency, evaluating edge-case failure modes, gathering real feedback, and iterating on architectures to push boundaries further.",
    details: ["Automated evaluation & regression testing", "Feedback loop integration", "Model re-calibration & scaling"],
    icon: "Orbit"
  }
];
