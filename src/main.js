import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './style.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

// Import des pages
import Home from './views/Home.vue'

// Configuration du router
const routes = [
  { path: '/', name: 'Home', component: Home }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
    return { top: 0 }
  }
})

// Création de l'application
const app = createApp(App)

app.use(router)

app.mount('#app')

// Initialisation d'AOS après le montage
setTimeout(() => {
  AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true,
    mirror: false
  })
}, 100) 