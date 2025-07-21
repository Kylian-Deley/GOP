<template>
  <component 
    :is="iconComponent" 
    :class="sizeClass"
    v-bind="$attrs"
  />
</template>

<script>
import { computed } from 'vue'
import {
  CheckCircleIcon,
  UserGroupIcon,
  CogIcon,
  ComputerDesktopIcon,
  StarIcon,
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ArrowTopRightOnSquareIcon,
  CodeBracketIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  HeartIcon,
  LightBulbIcon,
  ArrowRightIcon,
  PlusIcon,
  XMarkIcon,
  
} from '@heroicons/vue/24/outline'

// Icônes solid pour certains éléments
import {
  GlobeAltIcon,
  LinkIcon,
  ShareIcon
} from '@heroicons/vue/24/solid'

const iconMap = {
  check: CheckCircleIcon,
  users: UserGroupIcon,
  cog: CogIcon,
  desktop: ComputerDesktopIcon,
  star: StarIcon,
  envelope: EnvelopeIcon,
  phone: PhoneIcon,
  map: MapPinIcon,
  'external-link': ArrowTopRightOnSquareIcon,
  code: CodeBracketIcon,
  education: AcademicCapIcon,
  work: BriefcaseIcon,
  heart: HeartIcon,
  lightbulb: LightBulbIcon,
  github: CodeBracketIcon,
  linkedin: LinkIcon,
  twitter: ShareIcon,
  globe: GlobeAltIcon,
  link: LinkIcon,
  share: ShareIcon,
  arrow: ArrowRightIcon,
  plus: PlusIcon,
  close: XMarkIcon
}

export default {
  name: 'Icon',
  inheritAttrs: false,
  props: {
    name: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: 'md',
      validator: (value) => ['xs', 'sm', 'md', 'lg', 'xl'].includes(value)
    }
  },
  setup(props) {
    const iconComponent = computed(() => {
      const icon = iconMap[props.name]
      if (!icon) {
        console.warn(`Icon "${props.name}" not found. Using default CheckCircleIcon.`)
        return CheckCircleIcon
      }
      return icon
    })

    const sizeClass = computed(() => {
      const sizes = {
        xs: 'w-3 h-3',
        sm: 'w-4 h-4', 
        md: 'w-5 h-5',
        lg: 'w-6 h-6',
        xl: 'w-8 h-8'
      }
      return sizes[props.size] || 'w-5 h-5'
    })

    return {
      iconComponent,
      sizeClass
    }
  }
}
</script> 