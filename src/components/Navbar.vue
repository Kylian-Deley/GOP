<template>
  <nav class="fixed top-0 w-full z-50 transition-all duration-300" :class="scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <a href="#" class="text-2xl font-bold" :class="scrolled ? 'text-secondary-800' : 'text-white'">
            Portfolio
          </a>
        </div>

        <!-- Menu Desktop -->
        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-8">
            <a v-for="item in navigation" :key="item.name" :href="item.href" 
               class="font-medium transition-colors duration-300 hover:scale-105 transform"
               :class="scrolled ? 'text-secondary-700 hover:text-primary-600' : 'text-white/90 hover:text-white'">
              {{ item.name }}
            </a>
          </div>
        </div>

        <!-- Menu Mobile Button -->
        <div class="md:hidden">
          <button @click="mobileMenuOpen = !mobileMenuOpen" 
                  class="p-2 rounded-md transition-colors duration-300"
                  :class="scrolled ? 'text-secondary-700 hover:text-primary-600' : 'text-white hover:text-gray-300'">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Menu Mobile -->
    <div v-if="mobileMenuOpen" class="md:hidden bg-white shadow-lg">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <a v-for="item in navigation" :key="item.name" :href="item.href" 
           @click="mobileMenuOpen = false"
           class="block px-3 py-2 text-secondary-700 hover:text-primary-600 font-medium transition-colors duration-300">
          {{ item.name }}
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'
import { navigation } from '../data/content.js'

export default {
  name: 'Navbar',
  setup() {
    const scrolled = ref(false)
    const mobileMenuOpen = ref(false)

    const handleScroll = () => {
      scrolled.value = window.scrollY > 50
    }

    onMounted(() => {
      window.addEventListener('scroll', handleScroll)
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
    })

    return {
      scrolled,
      mobileMenuOpen,
      navigation
    }
  }
}
</script> 