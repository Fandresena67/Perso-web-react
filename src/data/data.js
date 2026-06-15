export const navLinks = [
  { id: "accueil", label: "Accueil" },
  { id: "competences", label: "Competences" },
  { id: "projets", label: "Projets" },
  { id: "experience", label: "Experience" },
  { id: "langues", label: "Langues" },
  { id: "contact", label: "Contact" },
]

export const skills = [
  { name: "HTML5 / CSS3", level: 65, cat: "Frontend" },
  { name: "JavaScript ES6+", level: 20, cat: "Frontend" },
  { name: "React.js", level: 25, cat: "Frontend" },
  { name: "Tailwind CSS", level: 30, cat: "Frontend" },
  { name: "Node.js / Express", level: 25, cat: "Backend" },
  { name: "API REST", level: 50, cat: "Backend" },
  { name: "MySQL / SQL", level: 70, cat: "Backend" },
  { name: "Python", level: 40, cat: "IA" },
  { name: "Linux / Ubuntu", level: 85, cat: "Outils" },
  { name: "Git / GitHub", level: 75, cat: "Outils" },
  { name: "Vercel / Cloudflare  / Railway / Render", level: 75, cat: "Outils" },
  { name: "Nodemailer", level: 70, cat: "Outils" },
]

export const projects = [
  {
    title: "Fandresena Hotel",
    year: "2026",
    desc: "Réservation hoteliere avec emails automatiques, dashboard admin et calcul de prix dynamique.",
    tech: ["React.js", "Node.js", "Nodemailer", "Tailwind"],
    color: "#2563eb",
  },
  {
    title: "App Meteo",
    year: "2026",
    desc: "Meteo en temps reel par ville via API OpenWeatherMap. Interface responsive moderne.",
    tech: ["React.js", "API REST", "JavaScript", "CSS"],
    color: "#0891b2",
  },
  {
    title: "Formulaire PHP en ligne",
    year: "2026",
    desc: "Migration formulaire local Ubuntu vers cloud InfinityFree avec base de donnees MySQL.",
    tech: ["PHP", "MySQL", "phpMyAdmin", "InfinityFree"],
    color: "#7c3aed",
  },
  {
    title: "Portfolio & E-commerce",
    year: "2026",
    desc: "Portfolio professionnel avec boutique e-commerce et simulation de panier d'achat.",
    tech: ["Python", "JavaScript", "CSS", "html", "Vercel"],
    color: "#059669",
  },
]

export const experiences = [
  {
    role: "Developpeur Web Junior",
    company: "Projets Personnels",
    period: "2024 – Present",
    items: [
      "Création et déploiement d'apps web avec React.js et Node.js",
      "Backend REST + envoi automatique d'emails via Nodemailer",
      "Deploiement sur Vercel, Cloudflare, Render, InfinityFree",
      "Resolution de problemes CORS, debogage React",
      "Migration projets locaux Ubuntu vers cloud",
    ],
  },
]

export const langues = [
  { lang: "Malagasy", level: "Langue maternelle", pct: 100, color: "#22c55e" },
  { lang: "Francais", level: "Courant", pct: 50, color: "#60a5fa" },
  { lang: "Anglais", level: "Notions", pct: 35, color: "#f59e0b" },
]

export const interets = [
  { label: "Intelligence Artificielle", icon: "🤖" },
  { label: "Cloud & DevOps", icon: "☁️" },
  { label: "Cybersecurite", icon: "🔐" },
  { label: "Linux & Serveurs", icon: "🐧" },
  { label: "API & Automatisation", icon: "⚙️" },
  { label: "Innovation numerique", icon: "💡" },
]

export const contacts = [
  {
    icon: "📱",
    label: "WhatsApp",
    value: "+261 34 260 3832",
    link: "https://wa.me/261342603832",
    color: "#22c55e",
    action: "Appeler sur WhatsApp",
  },

  {
    icon: "✉️",
    label: "Email",
    value: "fandresenanatolo@gmail.com",
    link: "mailto:fandresenanatolo@gmail.com",
    color: "#60a5fa",
    action: "Envoyer un email",
  },
  {
    icon: "📘",
    label: "Facebook",
    value: "Fa Ndresena",
    link: "https://facebook.com/FaNdresena",
    color: "#3b82f6",
    action: "Voir sur Facebook",
  },
  {
    icon: "💻",
    label: "GitHub",
    value: "github.com/Fandresena67",
    link: "https://github.com/Fandresena67",
    color: "#a78bfa",
    action: "Voir sur GitHub",
  },
]