# 🎨 Guide des Icônes

Ce portfolio utilise **Heroicons**, une librairie d'icônes moderne et élégante, via un composant `Icon` réutilisable.

## 🚀 Utilisation de base

```vue
<template>
  <Icon name="star" size="md" class="text-primary-600" />
</template>

<script>
import Icon from './components/Icon.vue'

export default {
  components: { Icon }
}
</script>
```

## 📏 Tailles disponibles

| Taille | Classe CSS | Dimension |
|--------|-----------|-----------|
| `xs`   | `w-3 h-3` | 12px      |
| `sm`   | `w-4 h-4` | 16px      |
| `md`   | `w-5 h-5` | 20px      |
| `lg`   | `w-6 h-6` | 24px      |
| `xl`   | `w-8 h-8` | 32px      |

## 🎭 Icônes disponibles

### Icônes générales
- `check` - Validation/succès
- `star` - Favoris/évaluation
- `heart` - Likes/favoris
- `lightbulb` - Idées/innovation
- `cog` - Paramètres/configuration
- `globe` - Web/international

### Icônes de contact
- `envelope` - Email
- `phone` - Téléphone
- `map` - Localisation

### Icônes professionnelles
- `users` - Équipe/collaboration
- `desktop` - Développement/UI
- `code` - Programmation
- `education` - Formation/études
- `work` - Travail/carrière

### Icônes d'action
- `external-link` - Lien externe
- `link` - Lien général
- `share` - Partage
- `arrow` - Flèche droite
- `plus` - Ajout/Plus
- `close` - Fermer

### Icônes réseaux (génériques)
- `github` - Code/développement
- `linkedin` - Réseau professionnel
- `twitter` - Réseau social

## 🔧 Personnalisation

### Ajouter de nouvelles icônes

1. **Importer l'icône dans `Icon.vue` :**
```javascript
import { NewIcon } from '@heroicons/vue/24/outline'
```

2. **Ajouter au mapping :**
```javascript
const iconMap = {
  // ... autres icônes
  'new-icon': NewIcon
}
```

3. **Utiliser dans vos composants :**
```vue
<Icon name="new-icon" size="md" />
```

### Styling personnalisé

```vue
<!-- Couleur personnalisée -->
<Icon name="star" class="text-yellow-500" />

<!-- Avec animation -->
<Icon name="heart" class="text-red-500 animate-pulse" />

<!-- Background -->
<div class="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
  <Icon name="check" size="sm" class="text-primary-600" />
</div>
```

## 📚 Exemples d'utilisation

### Dans content.js
```javascript
export const aboutMe = {
  interests: [
    { name: "Sports", icon: "star" },
    { name: "Innovation", icon: "lightbulb" },
    { name: "Équipe", icon: "users" }
  ]
}
```

### Dans les composants
```vue
<template>
  <div v-for="interest in interests" :key="interest.name">
    <Icon :name="interest.icon" size="sm" class="text-primary-600" />
    <span>{{ interest.name }}</span>
  </div>
</template>
```

## 🌟 Icônes pour réseaux sociaux

Pour de vrais logos de réseaux sociaux, vous pouvez :

1. **Utiliser react-icons :**
```bash
npm install react-icons
```

2. **Ou ajouter des SVG personnalisés dans le composant Icon**

3. **Ou utiliser des icônes CDN comme Font Awesome**

## 💡 Conseils

- **Cohérence** : Utilisez la même taille d'icône dans un même contexte
- **Couleurs** : Respectez votre palette de couleurs
- **Accessibilité** : Ajoutez des `aria-label` si nécessaire
- **Performance** : Heroicons est tree-shakeable (seules les icônes utilisées sont incluses)

## 🔗 Ressources

- [Heroicons Official](https://heroicons.com/) - Catalogue complet
- [Tailwind CSS Colors](https://tailwindcss.com/docs/customizing-colors) - Palette de couleurs
- [Vue 3 Components](https://vuejs.org/guide/essentials/component-basics.html) - Documentation Vue 