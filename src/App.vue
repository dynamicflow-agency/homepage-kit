<template>
  <div class="flex flex-col min-h-screen">
    <AppHeader />

    <!-- Main wächst automatisch mit Inhalt -->
    <main class="flex-grow px-4 py-8 w-full max-w-7xl mx-auto">
      <RouterView />
    </main>

    <!-- Footer bleibt am unteren Rand bei leerem Inhalt -->
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from './components/Header.vue'
import AppFooter from './components/Footer.vue'

export default {
  components: {
    AppHeader,
    AppFooter,
  }
}
</script>
