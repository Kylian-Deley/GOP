<template>
  <div class="home">
    <!-- Navigation -->
    <Navbar />
    
    <!-- Section Hero -->
    <HeroSection />
    
    <!-- Section À propos -->
    <AboutSection />
    
    <!-- Section Compétences -->
    <SkillsSection />
    
    <!-- Section Projets -->
    <ProjectsSection />
    
    <!-- Section Contact -->
    <ContactSection />
    
    <!-- Footer -->
    <FooterSection />
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import HeroSection from '../components/HeroSection.vue'
import AboutSection from '../components/AboutSection.vue'
import SkillsSection from '../components/SkillsSection.vue'
import ProjectsSection from '../components/ProjectsSection.vue'
import ContactSection from '../components/ContactSection.vue'
import FooterSection from '../components/FooterSection.vue'

export default {
  name: 'Home',
  components: {
    Navbar,
    HeroSection,
    AboutSection,
    SkillsSection,
    ProjectsSection,
    ContactSection,
    FooterSection
  }
}
</script> 