import govindPortrait from "../assets/image.png";
import logo from "../assets/logo325.png";
import coinbaseLogo from "../assets/CB_logo.jpg";
import amazonLogo from "../assets/amazonmlss.png";
import jpmcLogo from "../assets/jpmorganchase.png";
import chatbotImage from "../assets/chatbotcomp.png";
import codehorsesImage from "../assets/codehorses.png";
import studentChatbotImage from "../assets/chatbot.png";
import portfolioImage from "../assets/portfolio.png";
import cpTrackerImage from "../assets/cp.png";
import apexLearningImage from "../assets/apexlearning.png";
import voluntreeImage from "../assets/volunteer.png";
import apexLearningProImage from "../assets/apex-learning-pro.png";
import gfgLogo from "../assets/gfglogo.jpeg";
import leetcodeLogo from "../assets/lclogo.png";
import leetcodeKnight from "../assets/knight.png";

export const assets = {
  govindPortrait,
  logo,
  gfgLogo,
  leetcodeLogo,
  leetcodeKnight,
};

export const identity = {
  name: "Govind Dwivedi",
  displayName: "GOVIND DWIVEDI",
  username: "govinddwivedi",
  headline: "Software engineering intern, product-minded frontend engineer, and competitive programmer.",
  intro:
    "Final year B.Tech CSE student at the Indian Institute of Information Technology, Jabalpur. I build web, data, and AI systems with a bias for clear interfaces, reliable engineering, and measurable outcomes.",
  location: "Jabalpur, Madhya Pradesh, India",
  educationSummary: "B.Tech CSE, IIIT Jabalpur",
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/govinddwivedi" },
    { label: "GitHub", href: "https://github.com/govinddwivedi-git" },
    { label: "X", href: "https://x.com/go9ind" },
    { label: "Discord", href: "https://discord.com/users/govinddwivedi" },
  ],
};

export const navigation = [
  { id: "experience", label: "Experience", number: "01" },
  { id: "problem-solving", label: "Problem Solving", number: "02" },
  { id: "projects", label: "Projects", number: "03" },
  { id: "skills", label: "Skills", number: "04" },
  { id: "education", label: "Education", number: "05" },
  { id: "contact", label: "Contact", number: "06" },
];

export const proofPoints = [
  {
    label: "Coinbase internship impact",
    value: "2h to 5m",
    detail: "Incident triage reduced by consolidating pipeline health into a drill-down dashboard.",
  },
  {
    label: "JPMC Code for Good",
    value: "1 of 186",
    detail: "Finalist from 60,000+ applicants; built case management tooling for NGO Purnata.",
  },
  {
    label: "Academic signal",
    value: "9.4 CPI",
    detail: "B.Tech CSE at IIIT Jabalpur.",
  },
  {
    label: "Problems solved",
    value: "2000+",
    detail: "Problems solved across all platforms.",
  },
];

export const experiences = [
  {
    company: "Coinbase",
    role: "Software Engineering Intern",
    period: "May 2026 - August 2026",
    logo: coinbaseLogo,
    category: "Data platform visibility",
    impact: "Cut incident triage from about 2 hours to about 5 minutes.",
    description:
      "Built an interactive pipeline health dashboard that gave engineering teams real-time visibility into liveliness, data correctness, latency, and completeness across a complex multi-stage data pipeline. The dashboard replaced manual log cross-referencing with one drill-down interface for on-call diagnosis.",
    tags: ["Pipeline health", "Monitoring", "Drill-down UI", "Incident response"],
  },
  {
    company: "Amazon ML Summer School",
    role: "Selected Participant",
    period: "July 2026 - August 2026",
    logo: amazonLogo,
    category: "Machine learning depth",
    impact: "Selected for Amazon's ML Summer School 2026.",
    description:
      "Selected as a participant in Amazon's ML Summer School 2026, a competitive program for engineering students to build depth in machine learning through an intensive, expert-led curriculum.",
    tags: ["Machine learning", "Selection", "Expert-led curriculum"],
  },
  {
    company: "JPMorgan Chase & Co.",
    role: "Runner, Code for Good Hackathon",
    period: "June 2025",
    logo: jpmcLogo,
    category: "Social-impact engineering",
    impact: "Selected as 1 of 186 finalists from 60,000+ applicants.",
    description:
      "Built a secure, scalable website for NGO Purnata to combat human trafficking. Created a case management system for tracking 100+ cases, with victim tracking, audit logs, and role-based access control. The work improved NGO reporting efficiency by 40%.",
    tags: ["RBAC", "Audit logs", "Case management", "Secure systems"],
  },
];

export const projects = [
  {
    id: 1,
    name: "Apex Learning Pro",
    short: "A robust Learning Management System (LMS) backend built with Node.js and MongoDB. It features secure JWT authentication, course management, media handling via Cloudinary, and integrated Stripe payments.",
    description:
      "A robust Learning Management System (LMS) backend built with Node.js and MongoDB. It features secure JWT authentication, course management, media handling via Cloudinary, and integrated Stripe payments.",
    image: apexLearningProImage,
    github: "https://github.com/govinddwivedi-git/apex-learning",
    live: null,
    status: "Coming soon",
    tech: ["NodeJS", "ExpressJS", "MongoDB", "JWT", "Cloudinary", "Stripe"],
    featured: true,
  },
  {
    id: 2,
    name: "Voluntree: Make A Difference",
    short: "Voluntree is a comprehensive volunteer management platform that connects passionate volunteers with meaningful causes to create positive change in communities. It is our HackByte 3.0 hackathon project built within strict deadline of 36 hours.",
    description:
      "Voluntree is a comprehensive volunteer management platform that connects passionate volunteers with meaningful causes to create positive change in communities. It is our HackByte 3.0 hackathon project built within strict deadline of 36 hours.",
    image: voluntreeImage,
    github: "https://github.com/govinddwivedi-git/apex-learning",
    live: null,
    status: "Coming soon",
    tech: ["ReactJS", "Tailwind", "TypeScript", "MongoDB", "ExpressJS", "NodeJS"],
    featured: false,
  },
  {
    id: 3,
    name: "Apex Learning: AI-Powered Learning Platform",
    short: "Apex Learning is an innovative AI-powered learning platform that helps students and professionals create personalized study materials, practice tests, and educational content.",
    description:
      "Apex Learning is an innovative AI-powered learning platform that helps students and professionals create personalized study materials, practice tests, and educational content.",
    image: apexLearningImage,
    github: "https://github.com/govinddwivedi-git/apex-learning",
    live: "https://apex-learning-two.vercel.app/",
    status: "Live",
    tech: ["NextJS", "Gemini API", "Inngest", "Drizzle ORM", "PostgreSQL"],
    featured: false,
  },
  {
    id: 4,
    name: "CP Community Tracker",
    short: "A comprehensive platform for tracking and analyzing competitive programming performance across multiple coding platforms. This system helps students monitor their progress and rankings across different competitive programming websites while providing detailed analysis of their coding journey.",
    description:
      "A comprehensive platform for tracking and analyzing competitive programming performance across multiple coding platforms. This system helps students monitor their progress and rankings across different competitive programming websites while providing detailed analysis of their coding journey.",
    image: cpTrackerImage,
    github: "https://github.com/govinddwivedi-git/competitive-programming-tracker",
    live: null,
    status: "Code",
    tech: ["ReactJS", "Node.js", "MySQL", "ExpressJS", "Tailwind"],
    featured: false,
  },
  {
    id: 5,
    name: "Portfolio v1",
    short: "A modern, responsive portfolio website built with React, Framer Motion, and Tailwind CSS to showcase my skills, projects, education, and work experience.",
    description:
      "A modern, responsive portfolio website built with React, Framer Motion, and Tailwind CSS to showcase my skills, projects, education, and work experience.",
    image: portfolioImage,
    github: "https://github.com/govinddwivedi-git/govind-dwivedi",
    live: "https://govind-dwivedi.vercel.app/",
    status: "Live",
    tech: ["ReactJS", "Tailwind", "Framer Motion", "Vercel"],
    featured: false,
  },
  {
    id: 6,
    name: "Student Query Resolution Chatbot",
    short: "An interactive chatbot system designed to help resolve student queries efficiently. The system features both user and admin interfaces, allowing for dynamic query handling and response management.",
    description:
      "An interactive chatbot system designed to help resolve student queries efficiently. The system features both user and admin interfaces, allowing for dynamic query handling and response management.",
    image: studentChatbotImage,
    github: "https://github.com/govinddwivedi-git/chatbot-for-students-queries",
    live: null,
    status: "Code",
    tech: ["React", "Python", "Gemini API", "RAG", "Flask"],
    featured: false,
  },
  {
    id: 7,
    name: "Web-Based Code Editor and Compiler",
    short: "This project is a web-based code editor and compiler, built using CodeMirror for code editing and CompileX for code compilation.",
    description:
      "This project is a web-based code editor and compiler, built using CodeMirror for code editing and CompileX for code compilation.",
    image: codehorsesImage,
    github: "https://github.com/govinddwivedi-git/CodeHorses",
    live: null,
    status: "Code",
    tech: ["JavaScript", "CodeMirror", "Node.js", "CompileX", "Bootstrap"],
    featured: false,
  },
  {
    id: 8,
    name: "ChatBot with Image Analysis",
    short: "A real-time AI chat application powered by Google Gemini 2.0 Flash, featuring image upload and analysis, persistent chat history with MongoDB, and a modern, responsive UI. It includes typing indicators for a live chat feel and auto-scrolling for smooth conversation flow.",
    description:
      "A real-time AI chat application powered by Google Gemini 2.0 Flash, featuring image upload and analysis, persistent chat history with MongoDB, and a modern, responsive UI. It includes typing indicators for a live chat feel and auto-scrolling for smooth conversation flow.",
    image: chatbotImage,
    github: "https://github.com/govinddwivedi-git/chat-bot-component",
    live: "https://chat-bot-component.vercel.app/",
    status: "Live",
    tech: ["ReactJS", "Gemini API", "Cloudinary", "MongoDB", "ExpressJS", "Multer"],
    featured: false,
  },
];

export const skillGroups = [
  {
    label: "Programming Languages",
    skills: ["C", "C++", "Go", "Java", "Python", "JavaScript", "TypeScript", "PHP"],
  },
  {
    label: "Frontend Development",
    skills: ["HTML", "CSS", "Tailwind CSS", "React", "Vue.js", "Next.js"],
  },
  {
    label: "Backend Development",
    skills: ["Node.js", "Express.js", "Django", "FastAPI", "Flask"],
  },
  {
    label: "Database",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Firebase"],
  },
  {
    label: "Applied AI",
    skills: ["LangChain", "LangGraph", "LangSmith", "n8n", "RAG", "FAISS", "Vector Database", "MCP", "Agents", "Claude", "ChatGPT", "Gemini"],
  },
  {
    label: "Data Engineering",
    skills: ["PySpark", "Databricks", "Snowflake", "Kafka"],
  },
  {
    label: "Dev Tools",
    skills: ["VS Code", "Docker", "Git", "Github", "Postman", "Linux", "Vercel", "Netlify"],
  },
];

export const education = [
  {
    degree: "Bachelor of Technology in Computer Science and Engineering",
    institution: "Indian Institute of Information Technology, Jabalpur, Madhya Pradesh",
    period: "2023 - 2027",
    description:
      "Pursuing a B.Tech in Computer Science at IIIT Jabalpur, with a strong foundation in problem-solving and web development. Currently maintaining a 9.4 CPI while exploring new technologies and contributing to impactful projects.",
  },
  {
    degree: "Schooling",
    institution: "D.A.V. Public School, Dudhichua, Singrauli, Madhya Pradesh",
    period: "2010 - 2023",
    description:
      "Completed schooling with 94.6%, consistently excelling academically as the class topper from UKG to 12th grade while participating in extracurricular activities.",
  },
];

export const achievements = [
  "Selected as a Software Engineering Intern at Coinbase for May 2026 - August 2026.",
  "Selected as a participant in Amazon ML Summer School 2026.",
  "Runner at JPMorgan Chase Code for Good Hackathon; 1 of 186 finalists from 60,000+ applicants.",
  "Built NGO Purnata case management workflows for 100+ human-trafficking cases.",
  "Maintaining 9.4 CPI in B.Tech CSE at IIIT Jabalpur.",
];

export const codingProfiles = [
  {
    platform: "CodeChef",
    username: "govinddwivedi",
    href: "https://www.codechef.com/users/govinddwivedi",
    endpoint: "https://codechef-unofficial-api.vercel.app/govinddwivedi",
    method: "Live client fetch through public unofficial API.",
    accent: "#a16207",
  },
  {
    platform: "Codeforces",
    username: "govinddwivedi",
    href: "https://codeforces.com/profile/govinddwivedi",
    endpoint: "https://codeforces.com/api/user.info?handles=govinddwivedi",
    method: "Live client fetch through official Codeforces user.info API.",
    accent: "#0f766e",
  },
  {
    platform: "GeeksForGeeks",
    username: "govinddwivedi",
    href: "https://www.geeksforgeeks.org/user/govinddwivedi/",
    endpoint: "https://geeks-for-geeks-api.vercel.app/govinddwivedi",
    method: "Hardcoded profile snapshot shown because the live GFG API is unavailable.",
    accent: "#166534",
    lastKnown: {
      label: "4*",
      codingScore: 1546,
      totalProblemsSolved: 441,
      instituteRank: 67,
      currentStreak: 0,
      maxStreak: 246,
      articlesPublished: 0,
      potdsSolved: 339,
      solvedStats: { school: 0, basic: 28, easy: 137, medium: 234, hard: 42 },
    },
  },
  {
    platform: "LeetCode",
    username: "govinddwivedi",
    href: "https://leetcode.com/govinddwivedi",
    endpoint: "https://leetcard.jacoblin.cool/govinddwivedi?ext=contest",
    method: "Embedded public LeetCard for visual stats; no fabricated solved-count data.",
    accent: "#b7791f",
  },
];
