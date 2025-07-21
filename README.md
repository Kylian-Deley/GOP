# 🚀 Portfolio Personnel - Kylian DELEY

Portfolio moderne et responsive développé avec Vue.js 3, Tailwind CSS et des animations AOS.

## ✨ Fonctionnalités

- **Design moderne** avec animations fluides
- **Responsive** sur tous les appareils
- **Formulaire de contact fonctionnel** avec EmailJS
- **Navigation fluide** entre les sections
- **Projet filtering** par catégories
- **Barres de progression animées** pour les compétences
- **Optimisé pour les performances**

## 🛠️ Technologies

- **Vue.js 3** - Framework JavaScript progressif
- **Vite** - Build tool rapide
- **Tailwind CSS** - Framework CSS utility-first
- **AOS** - Animations on scroll
- **Heroicons** - Icônes modernes
- **EmailJS** - Service d'envoi d'emails

## 🚀 Installation

1. **Cloner le repository**
   ```bash
   git clone <repository-url>
   cd GOP
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Configurer EmailJS** (pour le formulaire de contact)
   ```bash
   cp src/config/emailjs.template.js src/config/emailjs.js
   ```
   Puis modifiez `src/config/emailjs.js` avec vos clés EmailJS.

4. **Lancer le serveur de développement**
   ```bash
   npm run dev
   ```

5. **Construire pour la production**
   ```bash
   npm run build
   ```

## 📧 Configuration EmailJS

Le formulaire de contact utilise EmailJS pour envoyer les emails directement dans votre boîte mail.

### Étapes rapides :

1. Créez un compte sur [EmailJS](https://www.emailjs.com/) (gratuit)
2. Configurez un service Gmail
3. Créez un template email avec les variables :
   - `{{from_name}}` - Nom de l'expéditeur
   - `{{from_email}}` - Email de l'expéditeur  
   - `{{subject}}` - Sujet du message
   - `{{message}}` - Corps du message

4. Récupérez vos clés (Service ID, Template ID, Public Key)
5. Mettez-les dans `src/config/emailjs.js`

### Template email recommandé :

**Sujet :** `Nouveau message portfolio : {{subject}}`

**Corps :**
```
Vous avez reçu un nouveau message depuis votre portfolio :

👤 Nom : {{from_name}}
📧 Email : {{from_email}}
📋 Sujet : {{subject}}

💬 Message :
{{message}}

---
Envoyé automatiquement depuis votre portfolio
```

## 📁 Structure du projet

```
GOP/
├── public/
│   ├── images/           # Images des projets
│   └── favicon.ico
├── src/
│   ├── assets/          # Assets statiques
│   ├── components/      # Composants Vue
│   │   ├── AboutSection.vue
│   │   ├── ContactSection.vue
│   │   ├── FooterSection.vue
│   │   ├── HeroSection.vue
│   │   ├── Icon.vue
│   │   ├── Navbar.vue
│   │   ├── ProjectsSection.vue
│   │   └── SkillsSection.vue
│   ├── config/
│   │   ├── emailjs.js           # Configuration EmailJS (ignoré par Git)
│   │   └── emailjs.template.js  # Template de configuration
│   ├── data/
│   │   └── content.js           # Données du portfolio
│   ├── App.vue
│   └── main.js
├── .gitignore
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🎨 Personnalisation

### Modifier vos informations

Toutes les données sont centralisées dans `src/data/content.js` :

- Informations personnelles
- Compétences et niveaux
- Projets et leurs détails
- Liens sociaux

### Ajouter des projets

Ajoutez vos projets dans le tableau `projects` de `content.js` :

```javascript
{
  title: "Nom du projet",
  description: "Description du projet",
  technologies: ["Vue.js", "Node.js"],
  category: "Web",
  status: "Terminé",
  date: "2025",
  demo: "https://demo-url.com",
  github: "https://github.com/user/repo",
  image: "/images/projet.png"
}
```

### Couleurs du thème

Les couleurs sont définies dans `tailwind.config.js` :

```javascript
colors: {
  primary: { /* Bleu principal */ },
  secondary: { /* Gris foncé */ }
}
```

## 🚀 Déploiement

### Netlify / Vercel

1. Buildez le projet : `npm run build`
2. Déployez le dossier `dist/`
3. Configurez les variables d'environnement pour EmailJS (optionnel)

### GitHub Pages

1. Utilisez l'action GitHub Pages
2. Buildez et déployez automatiquement sur push

## 🔧 Scripts disponibles

- `npm run dev` - Serveur de développement
- `npm run build` - Build de production
- `npm run preview` - Prévisualiser la build locale

## 📄 Licence

MIT License - Libre d'utilisation et de modification.

## 👤 Auteur

**Kylian DELEY**
- Email: kylian.deley1@gmail.com
- GitHub: [Kylian-Deley](https://github.com/Kylian-Deley)
- LinkedIn: [Profil LinkedIn](https://linkedin.com/in/kylian-deley)

---

💡 **Portfolio template** parfait pour étudiants en informatique et développeurs ! 