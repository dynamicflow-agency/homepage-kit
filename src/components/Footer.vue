<template>
  <footer class="bg-light border-top text-center py-3">
    <small>
      © {{ currentYear }} dynamicflow –
      <RouterLink to="/imprint" class="text-decoration-underline">Impressum</RouterLink> ·
      <RouterLink to="/privacypolicy" class="text-decoration-underline">Datenschutz</RouterLink>
    </small>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
  data() {
    return {
      currentYear: new Date().getFullYear()
    }
  }
}
</script>
