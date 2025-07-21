#!/usr/bin/env node

const { execSync } = require('child_process')
const fs = require('fs')
const path = require('path')

console.log('🚀 Installation du template Portfolio...\n')

// Vérifier si npm est installé
try {
  execSync('npm --version', { stdio: 'ignore' })
} catch (error) {
  console.error('❌ npm n\'est pas installé. Veuillez installer Node.js et npm.')
  process.exit(1)
}

// Installation des dépendances
console.log('📦 Installation des dépendances...')
try {
  execSync('npm install', { stdio: 'inherit' })
  console.log('✅ Dépendances installées avec succès!\n')
} catch (error) {
  console.error('❌ Erreur lors de l\'installation des dépendances')
  process.exit(1)
}

// Instructions de personnalisation
console.log('📝 Pour personnaliser votre portfolio:')
console.log('')
console.log('1. 👤 Informations personnelles:')
console.log('   - Modifiez src/components/HeroSection.vue (ligne 26)')
console.log('   - Modifiez src/components/ContactSection.vue (lignes 30, 38, 46)')
console.log('   - Modifiez src/components/FooterSection.vue')
console.log('')
console.log('2. 🛠️ Compétences:')
console.log('   - Modifiez src/components/SkillsSection.vue (lignes 67-105)')
console.log('')
console.log('3. 🎨 Projets:')
console.log('   - Modifiez src/components/ProjectsSection.vue (lignes 97-158)')
console.log('')
console.log('4. 🎨 Couleurs et design:')
console.log('   - Modifiez tailwind.config.js')
console.log('')
console.log('5. 📷 Images:')
console.log('   - Remplacez les placeholders SVG par vos vraies photos')
console.log('   - Ajoutez vos captures d\'écran de projets')
console.log('')

// Lancement du serveur de développement
console.log('🌟 Voulez-vous lancer le serveur de développement maintenant?')
console.log('Tapez "npm run dev" pour démarrer')
console.log('')
console.log('🎉 Installation terminée! Bon développement!')
console.log('')
console.log('📚 Consultez le README.md pour plus de détails sur la personnalisation.') 