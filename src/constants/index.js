import {
  c,
  python,
  java,
  cpp,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  edunet,
  weatherpedia,
  termpw,
  payloadmaster,
  threejs,
  mhft,
  sketcher,
  mathwork,
  CompileVortex,
  eduskill,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  { title: "C", icon: c },
  { title: "C++", icon: cpp },
  { title: "Python", icon: python },
  { title: "Java", icon: java },
];

export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "Rect JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
];

export const experiences = [
  {
    title: "Full‑Stack Dev & Freelancer Projects",
    company_name: "Vattenfall berlin | CHECK24 | Lieferando",
    icon: eduskill,
    iconBg: "#161329",
    date: "2023 - 2025",
    points: [
      "Developing full‑stack web applications using React, Node.js, Express, and MongoDB, focusing on clean architecture and scalable design.",
      "Building responsive, modern user interfaces with React, Tailwind CSS, and component‑driven development.",
      "Designing and implementing RESTful APIs, authentication systems, and secure backend logic.",
      "Deploying applications using modern DevOps workflows, including CI/CD pipelines, GitHub Pages, and cloud hosting platforms.",

    ],
  },
   {
    title: "Remote Freelancing ",
    company_name: "Upwork & Fiverr",
    icon: mathwork,
    iconBg: "#161329",
    date: "2023 - 2026",
    points: [
      "Delivered full‑stack solutions for international clients on Upwork and Fiverr, managing both frontend and backend development independently.", 
      "Built fast, responsive interfaces using React, JavaScript, and modern CSS frameworks like Tailwind.", 
      "Developed secure backend features with Node.js  and Express, including REST APIs, authentication, and database operations with MongoDB and SQL",
      "Collaborated remotely with clients and deployed production‑ready applications using Git workflows, CI/CD, and cloud hosting.",
    ],
  },
  {
    title: "Full‑Stack Developer",
    company_name: "Independent Projects",
    icon: mathwork,
    iconBg: "#161329",
    date: "2020 - 2026",
    points: [
      "Engineered end‑to‑end web applications using React, Vite, Node.js, and MongoDB, ensuring high performance and maintainability.", "Integrated third‑party APIs and built custom RESTful endpoints to support dynamic, data‑driven features.", "Implemented reusable UI components, state management, and optimized rendering for smooth user experiences.", "Managed deployments and version control using Git, GitHub, and modern cloud‑based workflows.",
      "Integrated third‑party APIs and built custom RESTful endpoints to support dynamic, data‑driven features.",
      "Implemented reusable UI components, state management, and optimized rendering for smooth user experiences.",
      "Managed deployments and version control using Git, GitHub, and modern cloud‑based workflows.",
    ],
  },
  {
    title: "Artificial Intelligence Intern",
    company_name: "Google AI | Microsoft Learn | IBM SkillsBuild ",
    icon: edunet,
    iconBg: "#161329",
    date: "June 2025 - January 2026",
    points: [
      "Completed structured AI learning paths across Google AI, Microsoft Learn, and IBM SkillsBuild, gaining a strong foundation in machine learning and modern AI workflows.",
      "Developed hands‑on skills in Python and essential ML libraries such as scikit‑learn, NumPy, and Pandas through guided labs and practical exercises.",
      "Explored Large Language Models (LLMs), understanding their architecture, capabilities, and real‑world applications in text generation and automation.",
      "Studied Retrieval‑Augmented Generation (RAG) techniques, learning how to combine LLMs with external knowledge sources for more accurate and context‑aware outputs.",
      "Built and evaluated ML models for classification and regression tasks, improving performance through iterative tuning and experimentation.",
    ],
  },
];

export const projects = [
  {
    name: "WeatherPedia",
    description:
      "Web-based platform that allows users to access weather information for their location by entering it in the search field",
    tags: [
      { name: "Javascript", color: "blue-text-gradient" },
      { name: "HTML", color: "green-text-gradient" },
      { name: "bootstrap 5.3.0", color: "pink-text-gradient" },
      { name: "Weather API", color: "yellow-text-gradient" },
    ],
    image: weatherpedia,
    source_code_link: "https://malaminjagana.github.io/weather-app/",
  },
  {
    name: "Terminal Like Portfolio Website",
    description:
      "A terminal themed portfolio website that allows users to type into the terminal and use commands like a real terminal.",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "css", color: "green-text-gradient" },
      { name: "Javascript", color: "pink-text-gradient" },
    ],
    image: termpw,
    source_code_link: "https://github.com/lohitkolluri/lohitkolluri.github.io",
  },
  {
    name: "Mental Health Fitness Tracker",
    description:
      "ML model that utilizes regression techniques to provide insights into mental health and make predictions based on the available data.",
    tags: [
      { name: "Machine Learning", color: "blue-text-gradient" },
      { name: "Jupyter Notebook", color: "green-text-gradient" },
      { name: "Regression Algorithms", color: "pink-text-gradient" },
    ],
    image: mhft,
    source_code_link:
      "https://github.com/lohitkolluri/mental_health_fitness_tracker",
  },
  {
    name: "PayloadMaster",
    description:
      "Tool to automate payload creation using the Metasploit framework",
    tags: [
      { name: "shell", color: "blue-text-gradient" },
    ],
    image: payloadmaster,
    source_code_link: "https://github.com/lohitkolluri/PayloadMaster",
  },
  {
    name: "CompileVortex",
    description:
      "Tool to automate payload creation using the Metasploit framework",
    tags: [
      { name: "Javascript", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "HTML", color: "pink-text-gradient" },
    ],
    image: CompileVortex,
    source_code_link: "https://github.com/lohitkolluri/CompileVortex",
  },
  {
    name: "Sketcher",
    description:
      "Convert an input image to a pencil sketch using OpenCV and Matplotlib libraries.",
    tags: [
      { name: "OpenCV", color: "blue-text-gradient" },
      { name: "Matplotlib", color: "green-text-gradient" },
      { name: "Python", color: "pink-text-gradient" },
    ],

    image: sketcher,
    source_code_link: "https://github.com/lohitkolluri/Image_to_Pencil_Sketch_App",
  },
];
