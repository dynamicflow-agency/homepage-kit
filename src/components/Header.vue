<template>
  <header class="bg-white shadow-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16 items-center">
        <!-- Logo -->
        <RouterLink to="/" class="flex items-center gap-2">
          <img src="@/assets/logo.svg" alt="dynamicflow Logo" class="h-14 w-auto" />
        </RouterLink>

        <!-- Desktop Nav -->
        <nav class="hidden md:flex space-x-6">
          <RouterLink to="/" class="text-sm font-medium text-gray-700 hover:text-black">Startseite</RouterLink>
          <a href="#service" class="text-sm font-medium text-gray-700 hover:text-black">Leistungen</a>
          <a href="#about" class="text-sm font-medium text-gray-700 hover:text-black">Über uns</a>
          <a href="#contact" class="text-sm font-medium text-gray-700 hover:text-black">Kontakt</a>
        </nav>

        <!-- Mobile Nav Button -->
        <div class="md:hidden">
          <button @click="mobileOpen = !mobileOpen" class="text-gray-700 hover:text-black focus:outline-none">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2"
                 viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
              <path v-if="!mobileOpen" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-if="mobileOpen" class="md:hidden border-t border-gray-200">
      <div class="px-4 py-4 space-y-2">
        <RouterLink to="/" class="block text-sm text-gray-700 hover:text-black">Startseite</RouterLink>
        <a href="#service" class="block text-sm text-gray-700 hover:text-black">Leistungen</a>
        <a href="#about" class="block text-sm text-gray-700 hover:text-black">Über uns</a>
        <a href="#contact" class="block text-sm text-gray-700 hover:text-black">Kontakt</a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      mobileOpen: false
    }
  }
}
</script>
