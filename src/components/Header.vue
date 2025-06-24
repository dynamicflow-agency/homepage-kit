<template>
  <header>
    <nav class="navbar navbar-expand-md navbar-light bg-white border-bottom">
      <div class="container">
        <router-link class="navbar-brand d-flex align-items-center" to="/">
          <img src="@/assets/logo.svg" alt="dynamicflow Logo" height="75" class="me-2" />
        </router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Startseite</router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#service">Leistungen</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#about">Über uns</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contact">Kontakt</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>
