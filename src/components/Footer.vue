<template>
  <footer class="bg-gray-100 border-t text-center py-4 mt-auto text-sm text-gray-600">
    <small>
      © {{ currentYear }} dynamicflow –
      <RouterLink to="/imprint" class="underline hover:text-black transition">Impressum</RouterLink> ·
      <RouterLink to="/privacypolicy" class="underline hover:text-black transition">Datenschutz</RouterLink>
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
