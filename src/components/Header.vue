<template>
  <header class="bg-light border-bottom">
    <nav class="container py-3 d-flex justify-content-between">
      <span class="fw-bold">MySite</span>
      <div>
        <RouterLink to="/" class="btn btn-link">Home</RouterLink>
        <RouterLink to="/imprint" class="btn btn-link">Impressum</RouterLink>
        <RouterLink to="/privacypolicy" class="btn btn-link">Datenschutz</RouterLink>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>
