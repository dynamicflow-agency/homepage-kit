<template>
  <div>
    <HeroSection />
    <ServiceSection />
    <AboutSection />
    <ContactSection />
  </div>
</template>

<script>
import HeroSection from '@/components/sections/HeroSection.vue'
import ServiceSection from '@/components/sections/ServiceSection.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'

export default {
  name: 'HomeView',
  components: {
    HeroSection,
    ServiceSection,
    AboutSection,
    ContactSection
  }
}
</script>
