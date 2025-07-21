# Portfolio Personnel

Un template de portfolio moderne et responsif créé avec Vue.js 3, Tailwind CSS et des animations élégantes.

## ✨ Fonctionnalités

- **Design moderne** avec Tailwind CSS et gradients personnalisés
- **Animations fluides** avec AOS (Animate On Scroll)
- **Navigation responsive** avec menu mobile
- **Sections complètes** : Hero, À propos, Compétences, Projets, Contact
- **Système d'icônes moderne** avec Heroicons
- **Données centralisées** dans `content.js`
- **Formulaire de contact** fonctionnel
- **Filtrage de projets** par catégorie
- **Optimisé SEO** et performance

## 🚀 Technologies utilisées

- **Vue.js 3** - Framework JavaScript moderne
- **Tailwind CSS** - Framework CSS utilitaire
- **Vue Router** - Routage SPA
- **AOS** - Animations au scroll
- **Heroicons** - Librairie d'icônes moderne
- **Vite** - Build tool rapide

## 🛠️ Installation

1. **Cloner le projet**
   \`\`\`bash
   git clone <url-du-repo>
   cd portfolio-personnel
   \`\`\`

2. **Installer les dépendances**
   \`\`\`bash
   npm install
   \`\`\`

3. **Lancer le serveur de développement**
   \`\`\`bash
   npm run dev
   \`\`\`

4. **Ouvrir dans le navigateur**
   Le site sera accessible sur `http://localhost:3000`

## 📝 Personnalisation

### 1. Informations personnelles

Modifiez les fichiers suivants pour ajouter vos informations :

**HeroSection.vue**
\`\`\`vue
<!-- Remplacer [Votre Nom] par votre nom -->
<span class="block gradient-text bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
  Votre Nom Ici
</span>
\`\`\`

**ContactSection.vue et FooterSection.vue**
\`\`\`vue
<!-- Remplacer les informations de contact -->
<p class="text-white/80">votre.email@exemple.com</p>
<p class="text-white/80">+33 1 23 45 67 89</p>
<p class="text-white/80">Votre Ville, Pays</p>
\`\`\`

### 2. Compétences

Dans `SkillsSection.vue`, modifiez les tableaux de compétences :

\`\`\`javascript
programmingLanguages: [
  { name: 'JavaScript' },
  { name: 'TypeScript' },
  // Ajoutez vos langages
],
frameworks: [
  { name: 'Vue.js' },
  { name: 'React' },
  // Ajoutez vos frameworks
]
\`\`\`

### 3. Projets

Dans `ProjectsSection.vue`, remplacez les projets d'exemple :

\`\`\`javascript
const projects = [
  {
    id: 1,
    title: 'Votre Projet',
    description: 'Description de votre projet...',
    technologies: ['Vue.js', 'Node.js'],
    category: 'Web',
    status: 'Terminé',
    date: '2024',
    demo: 'https://votre-demo.com',
    github: 'https://github.com/votre-repo'
  }
]
\`\`\`

### 4. Photos et images

**Images de projets :**
- Placez vos images dans `public/images/`
- Référencez-les dans `content.js` : `image: "/images/mon-projet.jpg"`
- Formats recommandés : 500×300px, JPG/PNG, < 500KB

**Photos de profil :**
- Remplacez les placeholders SVG par vos vraies photos
- Optimisez les images pour le web

📖 **Guide détaillé :** Voir `public/images/README.md`

### 5. Couleurs et design

Modifiez les couleurs dans `tailwind.config.js` :

\`\`\`javascript
colors: {
  primary: {
    // Vos couleurs primaires
    500: '#votre-couleur',
  }
}
\`\`\`

### 6. Icônes

Le portfolio utilise Heroicons via un composant `Icon` réutilisable :

\`\`\`vue
<Icon name="star" size="md" class="text-primary-600" />
\`\`\`

**Icônes disponibles :** `star`, `heart`, `users`, `envelope`, `phone`, `map`, `code`, `external-link`, etc.

📖 **Guide complet :** Voir `docs/ICONS.md` pour la liste complète et les exemples d'usage.

## 🎨 Structure des composants

\`\`\`
src/
├── components/
│   ├── Icon.vue            # Composant d'icônes réutilisable
│   ├── Navbar.vue          # Navigation principale
│   ├── HeroSection.vue     # Section d'accueil
│   ├── AboutSection.vue    # Section à propos
│   ├── SkillsSection.vue   # Section compétences
│   ├── ProjectsSection.vue # Section projets
│   ├── ContactSection.vue  # Section contact
│   └── FooterSection.vue   # Pied de page
├── data/
│   └── content.js          # Données centralisées
├── views/
│   └── Home.vue           # Page principale
├── style.css              # Styles globaux
└── main.js                # Point d'entrée
\`\`\`

## 📱 Responsive Design

Le portfolio est entièrement responsive avec des breakpoints optimisés :
- **Mobile** : < 768px
- **Tablet** : 768px - 1024px  
- **Desktop** : > 1024px

## 🔧 Scripts disponibles

\`\`\`bash
npm run dev      # Serveur de développement
npm run build    # Build de production
npm run preview  # Prévisualisation du build
npm run serve    # Serveur de production
\`\`\`

## 🚀 Déploiement

### Netlify
1. Build le projet : `npm run build`
2. Uploadez le dossier `dist/` sur Netlify

### Vercel
1. Connectez votre repo GitHub
2. Vercel détectera automatiquement la configuration

### GitHub Pages
1. Ajoutez cette configuration dans `vite.config.js` :
   \`\`\`javascript
   export default defineConfig({
     base: '/nom-du-repo/',
     // ... rest of config
   })
   \`\`\`

## 🤝 Contribution

N'hésitez pas à :
1. Fork le projet
2. Créer une branche feature
3. Commit vos changements
4. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Vous êtes libre de l'utiliser et le modifier.

---

**Créé avec ❤️ pour votre projet école**

N'oubliez pas de personnaliser entièrement le contenu avec vos propres informations, projets et compétences ! 