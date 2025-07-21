<template>
  <section id="projets" class="py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="content-overlay p-8">
        <div class="text-center mb-16" data-aos="fade-up">
        <h2 class="section-title">Mes Projets</h2>
        <p class="section-subtitle">
          Découvrez quelques-uns de mes projets récents et les technologies utilisées
        </p>
      </div>


      <!-- Grille de projets -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="(project, index) in filteredProjects" 
          :key="project.id"
          class="group card overflow-hidden"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
        >
          <!-- Image du projet -->
          <div class="relative overflow-hidden rounded-lg mb-4 h-48">
            <!-- Image réelle du projet si disponible -->
            <img 
              v-if="project.image" 
              :src="project.image" 
              :alt="project.title"
              class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              @error="onImageError"
            />
            <!-- Placeholder si pas d'image -->
            <div v-else class="w-full h-full bg-gradient-to-br from-primary-400 to-purple-500 flex items-center justify-center">
              <svg class="w-16 h-16 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
              </svg>
            </div>
            
            <!-- Overlay au hover -->
            <div class="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
            
            <!-- Boutons d'action (apparaissent au hover) -->
            <div class="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <a :href="project.demo" target="_blank" class="btn-primary text-sm py-2 px-4">
                Demo
              </a>
              <a :href="project.github" target="_blank" class="btn-secondary text-white border-white hover:bg-white hover:text-primary-600 text-sm py-2 px-4">
                Code
              </a>
            </div>
          </div>

          <!-- Contenu -->
          <div class="space-y-4">
            <div>
              <h3 class="text-xl font-bold text-secondary-800 mb-2">{{ project.title }}</h3>
              <p class="text-secondary-600 text-sm leading-relaxed">{{ project.description }}</p>
            </div>

            <!-- Technologies -->
            <div class="flex flex-wrap gap-2">
              <span 
                v-for="tech in project.technologies" 
                :key="tech"
                class="px-3 py-1 bg-primary-50 text-primary-700 text-xs font-medium rounded-full"
              >
                {{ tech }}
              </span>
            </div>

            <!-- Status -->
            <div class="flex items-center justify-between pt-2 border-t border-gray-100">
              <span 
                class="px-2 py-1 text-xs font-medium rounded-full"
                :class="project.status === 'Terminé' 
                  ? 'bg-green-100 text-green-700' 
                  : 'bg-yellow-100 text-yellow-700'"
              >
                {{ project.status }}
              </span>
              <span class="text-xs text-secondary-400">{{ project.date }}</span>
            </div>
          </div>
        </div>
      </div>

      </div>
    </div>
  </section>
</template>

<script>
import { ref, computed } from 'vue'
import { projects } from '../data/content.js'

export default {
  name: 'ProjectsSection',
  setup() {
    const activeFilter = ref('Tous')
    
    const filters = ['Tous', 'Web', 'Mobile', 'Backend', 'Design']
    
    const filteredProjects = computed(() => {
      if (activeFilter.value === 'Tous') {
        return projects
      }
      return projects.filter(project => project.category === activeFilter.value)
    })

    const onImageError = (event) => {
      // En cas d'erreur de chargement, on masque l'image
      event.target.style.display = 'none'
    }
    
    return {
      activeFilter,
      filters,
      projects,
      filteredProjects,
      onImageError
    }
  }
}
</script> 