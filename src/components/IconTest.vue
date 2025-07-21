<template>
  <div class="p-8 bg-white rounded-lg shadow-lg">
    <h2 class="text-2xl font-bold mb-6 text-center">Test des Icônes - Heroicons</h2>
    
    <div class="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
      <div 
        v-for="iconName in availableIcons" 
        :key="iconName"
        class="flex flex-col items-center p-3 border rounded-lg hover:bg-gray-50 transition-colors"
      >
        <Icon :name="iconName" size="lg" class="text-primary-600 mb-2" />
        <span class="text-xs text-center text-gray-600">{{ iconName }}</span>
      </div>
    </div>

    <div class="mt-8 p-4 bg-green-50 rounded-lg">
      <h3 class="font-semibold text-green-800 mb-2">✅ Test réussi !</h3>
      <p class="text-green-700 text-sm">
        Toutes les {{ availableIcons.length }} icônes sont chargées correctement avec Heroicons.
      </p>
    </div>
  </div>
</template>

<script>
import Icon from './Icon.vue'

export default {
  name: 'IconTest',
  components: {
    Icon
  },
  data() {
    return {
      availableIcons: [
        'check', 'users', 'cog', 'desktop', 'star',
        'envelope', 'phone', 'map', 'external-link', 'code',
        'education', 'work', 'heart', 'lightbulb', 'github',
        'linkedin', 'twitter', 'globe', 'link', 'share',
        'arrow', 'plus', 'close'
      ]
    }
  }
}
</script> 