<template>
  <div class="min-h-screen flex flex-col">
    <AppHeader />

    <main class="flex-grow container py-5">
      <RouterView />
    </main>

    <AppFooter />
  </div>
</template>

<script>
import AppHeader from './components/Header.vue'
import AppFooter from './components/Footer.vue'

export default {
  components: {
    AppHeader,
    AppFooter
  }
}
</script>
