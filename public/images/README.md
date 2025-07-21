# 📸 Images des Projets

Ce dossier contient les images des projets affichées dans le portfolio.

## 🗂️ Organisation

Placez vos images de projets dans ce dossier :
```
public/
└── images/
    ├── TSizer.png          # Votre vraie image TSizer
    ├── belote-game.jpg     # Capture du jeu de belote
    ├── axignis-dashboard.png # Interface Axignis
    └── portfolio.jpg       # Capture du portfolio
```

## 🔧 Configuration dans content.js

Pour utiliser une image locale, référencez-la ainsi :

```javascript
// Dans src/data/content.js
{
  id: 1,
  title: "Mon Projet",
  // ...
  image: "/images/mon-projet.jpg" // Chemin depuis public/
}
```

## 📏 Formats recommandés

- **Ratio :** 16:9 ou 3:2 (ex: 500×300px)
- **Format :** JPG ou PNG
- **Poids :** < 500KB pour de bonnes performances
- **Résolution :** 500×300px minimum

## 🌐 Images externes

Vous pouvez aussi utiliser des URLs externes :

```javascript
image: "https://mon-site.com/image.jpg"
```

## 🎨 Outils recommandés

- **Unsplash** : Images libres de droits
- **Figma/Sketch** : Captures d'écran de vos designs
- **Browser DevTools** : Screenshots de vos applications web

## ⚠️ Important

- Les images dans `public/` sont accessibles directement via l'URL
- N'utilisez PAS `src/assets/` pour les images de projets
- Optimisez vos images avant de les ajouter 