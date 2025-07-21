<template>
  <section id="accueil" class="relative min-h-screen flex items-center justify-center bg-black/20 backdrop-blur-sm section-pattern">
    <!-- Particules flottantes -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute w-96 h-96 bg-white/10 rounded-full -top-48 -left-48 animate-pulse-slow"></div>
      <div class="absolute w-80 h-80 bg-white/5 rounded-full top-1/3 -right-40 animate-float"></div>
      <div class="absolute w-64 h-64 bg-white/10 rounded-full bottom-20 left-1/4 animate-bounce-slow"></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div data-aos="fade-up" data-aos-duration="1000">
        <!-- Image de profil -->
        <div class="mb-8">
          <div class="relative inline-block">
            <div class="w-32 h-32 md:w-40 md:h-40 rounded-full bg-white/20 backdrop-blur-sm border-4 border-white/30 mx-auto mb-4 flex items-center justify-center">
              <!-- Placeholder pour photo de profil -->
              <svg class="w-16 h-16 md:w-20 md:h-20 text-white/80" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
              </svg>
            </div>
            <div class="absolute -bottom-2 -right-2 w-8 h-8 bg-green-400 rounded-full border-4 border-white animate-pulse"></div>
          </div>
        </div>

        <!-- Texte principal -->
        <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-display text-shadow">
          Bonjour, je suis
          <span class="block gradient-text bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
            {{ personalInfo.name }}
          </span>
        </h1>

        <p class="text-xl md:text-2xl text-white/90 mb-4 max-w-3xl mx-auto">
          {{ personalInfo.title }}
        </p>

        <p class="text-lg text-white/80 mb-12 max-w-2xl mx-auto">
          {{ personalInfo.description }}
        </p>

        <!-- Boutons d'action -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#projets" class="btn-primary glass">
            Découvrir mes projets
          </a>
          <a href="#contact" class="btn-secondary text-white border-white hover:bg-white hover:text-primary-600">
            Me contacter
          </a>
        </div>
      </div>
    </div>

    <!-- Indicateur de scroll - positionné par rapport à la section -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
      <a href="#about" class="block p-2 rounded-full hover:bg-white/10 transition-colors duration-300">
        <svg class="w-6 h-6 text-white/70 hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </a>
    </div>
  </section>
</template>

<script>
import { personalInfo } from '../data/content.js'

export default {
  name: 'HeroSection',
  data() {
    return {
      personalInfo
    }
  }
}
</script> 