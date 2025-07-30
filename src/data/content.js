// Données centralisées pour le portfolio
// Modifiez ce fichier pour personnaliser votre contenu

export const personalInfo = {
  name: "Kylian DELEY",
  title: "Développeur Full Stack",
  description: "Je créer des outils numériques sur mesure pour les entreprises",
  email: "kylian.deley@gmail.com",
  phone: "+33 6 10 59 60 12",
  location: "Perreuil, France",
  socialLinks: {
    github: "https://github.com/Kylian-Deley",
    linkedin: "https://www.linkedin.com/in/kylian-deley-625921207/", 
    twitter: "#"
  }
}

export const aboutMe = {
  story: `Étudiant en Master Ingénierie du Web, je me spécialise dans la création d'applications modernes et performantes. Mon parcours m'a permis d'acquérir une solide expertise technique tout en développant un sens aigu du design et de l'expérience utilisateur.`,
  motivation: `Je suis constamment à la recherche de nouveaux défis techniques et j'aime collaborer sur des projets innovants qui ont un impact positif.
  <br><br> Je suis joueur de rugby depuis plus de 10 ans et j'aime le sport en général.`,
  stats: {
    experience: "4",
    projects: "10+", 
    technologies: "8+"
  },
  interests: [
    { name: "Sports", icon: "star" },
    { name: "Esprit d'équipe", icon: "users" },
    { name: "Innovation", icon: "cog" },
    { name: "Voitures", icon: "car" }
  ]
}

export const skills = {
  programmingLanguages: [
    "JavaScript", "TypeScript", "Python", "Java", "Rust", "HTML5", "CSS3", "SQL"
  ],
  frameworks: [
    "Vue.js", "React", "Node.js",
    "Express.js", "Django (backend)", "Nest"
  ],
  tools: [
    "Git", "MongoDB", "PostgreSQL",
    "MySQL",
  ],
  categories: [
    {
      name: "Frontend",
      skills: [
        { name: "Vue.js", level: 90, delay: 100 },
        { name: "React", level: 70, delay: 200 },
        { name: "JavaScript", level: 95, delay: 300 },
        { name: "CSS3/SCSS", level: 90, delay: 400 }
      ]
    },
    {
      name: "Backend", 
      skills: [
        { name: "Node.js", level: 80, delay: 500 },
        { name: "Django", level: 90, delay: 600 },
        { name: "Bases de données", level: 75, delay: 700 },
        { name: "API REST", level: 90, delay: 800 }
      ]
    }
  ]
}

export const projects = [
  {
    id: 1,
    title: "Jeu de belote en ligne",
    description: "Decouverte de l'utilisation des websocket dans un jeu en ligne",
    technologies: ["React", "Node.js", "Socket.io"],
    category: "Web",
    status: "Terminé",
    date: "2024",
    demo: "https://belote-react.vercel.app/",
    github: "https://github.com/Kylian-Deley/React",
    image: "/images/belote.webp" // Remplacez par votre vraie image (belote.jpg, belote.png, etc.)
  },
  {
    id: 2,
    title: "Axignis",
    description: "Projet annuel M2. ERP de gestion d'études techniques spécialisées dans le domaine du bâtiment",
    technologies: ["Vue.js", "Nest"],
    category: "Web",
    status: "Terminé",
    date: "2025",
    demo: "https://github.com/Kylian-Deley/Axignis",
    github: "https://github.com/Kylian-Deley/Axignis",
    image: "/images/axignis.png" // Remplacez par votre vraie image (axignis.jpg, axignis.png, etc.)
  },
  {
    id: 3,
    title: "Tilkeo TSizer",
    description: "Outils de dimensionnement de pompe à chaleur pour TILKEO (développé seul en entreprise)",
    technologies: ["Vue.js", "Python", "Django"],
    category: "Full Stack",
    status: "Terminé",
    date: "2025",
    demo: "https://vpo.tilkeo-audit.com/#/visite_pacs",
    github: "https://github.com/Kylian-Deley/vpo-front",
    image: "/images/TSizer.png" // Remplacez par votre vraie image (tsizer.jpg, tsizer.png, etc.)
  },

  {
    id: 6,
    title: "Portfolio Personnel",
    description: "Site portfolio personnel moderne avec animations et design responsive.",
    technologies: ["Vue.js", "Tailwind CSS", "AOS", "Vite"],
    category: "Web",
    status: "Terminé",
    date: "2024",
    demo: "#",
    github: "#",
    image: "/images/portfolio.png" // Remplacez par votre vraie image (portfolio.jpg, portfolio.png, etc.)
  }
]

export const navigation = [
  { name: "Accueil", href: "#accueil" },
  { name: "À propos", href: "#about" },
  { name: "Compétences", href: "#competences" },
  { name: "Projets", href: "#projets" },
  { name: "Contact", href: "#contact" }
] 