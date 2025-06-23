<template>
  <div class="container text-center py-5">
    <h1 class="display-4 mb-4">Willkommen auf unserer Website</h1>
    <p class="lead mb-4">
      Diese Landingpage ist mit Vue.js und Bootstrap gebaut. Sie enthält ein Impressum und eine Datenschutzerklärung.
    </p>
    <div class="d-flex justify-content-center gap-3">
      <RouterLink to="/imprint" class="btn btn-outline-secondary">Impressum</RouterLink>
      <RouterLink to="/privacypolicy" class="btn btn-outline-secondary">Datenschutz</RouterLink>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>
