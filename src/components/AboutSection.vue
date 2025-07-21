<template>
  <section id="about" class="py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="content-overlay p-8">
        <div class="text-center mb-16" data-aos="fade-up">
          <h2 class="section-title">À propos de moi</h2>
          <p class="section-subtitle">
            Découvrez mon parcours, mes passions et ce qui me motive dans la vie
          </p>
        </div>

        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <!-- Image et stats -->
          <div class="space-y-8" data-aos="fade-right">
            <div class="relative">
              <!-- Placeholder pour une photo plus grande -->
              <div class="w-full max-w-md mx-auto aspect-square rounded-2xl bg-gradient-to-br from-primary-400 to-purple-500 p-1">
                <div class="w-full h-full rounded-2xl bg-gray-200 flex items-center justify-center">
                  <svg class="w-24 h-24 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>

            <!-- Statistiques -->
            <div class="grid grid-cols-3 gap-4 max-w-md mx-auto">
              <div class="text-center card">
                <div class="text-2xl font-bold text-primary-600 mb-1">{{ aboutMe.stats.experience }}</div>
                <div class="text-sm text-secondary-600">Années d'expérience</div>
              </div>
              <div class="text-center card">
                <div class="text-2xl font-bold text-primary-600 mb-1">{{ aboutMe.stats.projects }}</div>
                <div class="text-sm text-secondary-600">Projets réalisés</div>
              </div>
              <div class="text-center card">
                <div class="text-2xl font-bold text-primary-600 mb-1">{{ aboutMe.stats.technologies }}</div>
                <div class="text-sm text-secondary-600">Technologies</div>
              </div>
            </div>
          </div>

          <!-- Contenu texte -->
          <div class="space-y-6" data-aos="fade-left">
            <div>
              <h3 class="text-2xl font-bold text-secondary-800 mb-4">Mon histoire</h3>
              <p class="text-secondary-600 leading-relaxed mb-4">
                {{ aboutMe.story }}
              </p>
              <p class="text-secondary-600 leading-relaxed" v-html="aboutMe.motivation">
              </p>
            </div>

            <div>
              <h3 class="text-2xl font-bold text-secondary-800 mb-4">Ce que j'aime</h3>
              <div class="grid grid-cols-2 gap-4">
                <div v-for="interest in aboutMe.interests" :key="interest.name" class="flex items-center space-x-3">
                  <div class="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Icon :name="interest.icon" size="sm" class="text-primary-600" />
                  </div>
                  <span class="text-secondary-700">{{ interest.name }}</span>
                </div>
              </div>
            </div>

            <div class="pt-4">
              <a href="#contact" class="btn-primary inline-flex items-center">
                Travaillons ensemble
                <Icon name="external-link" size="sm" class="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { aboutMe } from '../data/content.js'
import Icon from './Icon.vue'

export default {
  name: 'AboutSection',
  components: {
    Icon
  },
  data() {
    return {
      aboutMe
    }
  }
}
</script> 