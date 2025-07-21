<template>
  <section id="competences" class="py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="content-overlay p-8">
        <div class="text-center mb-16" data-aos="fade-up">
        <h2 class="section-title">Mes Compétences</h2>
        <p class="section-subtitle">
          Les technologies et outils que je maîtrise pour créer des solutions efficaces
        </p>
      </div>

      <div class="space-y-12">
        <!-- Langages de programmation -->
        <div data-aos="fade-up" data-aos-delay="100">
          <h3 class="text-2xl font-bold text-secondary-800 mb-6 text-center">Langages de programmation</h3>
          <div class="flex flex-wrap justify-center gap-4">
            <div v-for="skill in skills.programmingLanguages" :key="skill" class="skill-badge">
              {{ skill }}
            </div>
          </div>
        </div>

        <!-- Frameworks & Libraries -->
        <div data-aos="fade-up" data-aos-delay="200">
          <h3 class="text-2xl font-bold text-secondary-800 mb-6 text-center">Frameworks & Libraries</h3>
          <div class="flex flex-wrap justify-center gap-4">
            <div v-for="skill in skills.frameworks" :key="skill" class="skill-badge">
              {{ skill }}
            </div>
          </div>
        </div>

        <!-- Outils & Technologies -->
        <div data-aos="fade-up" data-aos-delay="300">
          <h3 class="text-2xl font-bold text-secondary-800 mb-6 text-center">Outils & Technologies</h3>
          <div class="flex flex-wrap justify-center gap-4">
            <div v-for="skill in skills.tools" :key="skill" class="skill-badge">
              {{ skill }}
            </div>
          </div>
        </div>

        <!-- Compétences par niveau -->
        <div class="mt-16" data-aos="fade-up" data-aos-delay="400">
          <h3 class="text-2xl font-bold text-secondary-800 mb-8 text-center">Niveau de maîtrise</h3>
          <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div v-for="category in skills.categories" :key="category.name" class="card">
              <h4 class="text-lg font-semibold text-secondary-800 mb-4">{{ category.name }}</h4>
              <div class="space-y-4">
                <div v-for="skill in category.skills" :key="skill.name" class="space-y-2">
                  <div class="flex justify-between">
                    <span class="text-secondary-700 font-medium">{{ skill.name }}</span>
                    <span class="text-primary-600 font-semibold">{{ skill.level }}%</span>
                  </div>
                  <div class="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      class="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full transition-all duration-200 ease-out"
                      :style="`width: ${animatedLevels[`${category.name}-${skill.name}`] || 0}%`"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'
import { skills } from '../data/content.js'

export default {
  name: 'SkillsSection',
  setup() {
    const animatedLevels = ref({})
    let observer = null

    const animateSkillBars = () => {
      // Initialiser tous les niveaux à 0
      skills.categories.forEach(category => {
        category.skills.forEach(skill => {
          const key = `${category.name}-${skill.name}`
          animatedLevels.value[key] = 0
        })
      })

      // Animer chaque barre avec un délai
      skills.categories.forEach(category => {
        category.skills.forEach(skill => {
          const key = `${category.name}-${skill.name}`
          
          setTimeout(() => {
            // Animation progressive
            let currentLevel = 0
            const targetLevel = skill.level
            const increment = targetLevel / 50 // 50 étapes pour une animation fluide
            
            const animationInterval = setInterval(() => {
              currentLevel += increment
              if (currentLevel >= targetLevel) {
                currentLevel = targetLevel
                clearInterval(animationInterval)
              }
              animatedLevels.value[key] = Math.round(currentLevel)
            }, 20) // 20ms entre chaque étape (animation d'1 seconde)
            
          }, skill.delay)
        })
      })
    }

    const setupIntersectionObserver = () => {
      observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateSkillBars()
            observer.unobserve(entry.target)
          }
        })
      }, {
        threshold: 0.3
      })
    }

    onMounted(() => {
      setupIntersectionObserver()
      const skillsSection = document.querySelector('#competences')
      if (skillsSection && observer) {
        observer.observe(skillsSection)
      }
    })

    onUnmounted(() => {
      if (observer) {
        observer.disconnect()
      }
    })

    return {
      skills,
      animatedLevels
    }
  }
}
</script> 