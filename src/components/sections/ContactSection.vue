<template>
  <section id="contact" class="py-24 bg-white text-center border-t border-gray-200">
    <div class="max-w-3xl mx-auto px-4">
      <h2 class="text-3xl font-semibold mb-4">Kontakt</h2>
      <p class="text-lg text-gray-600 mb-8">Lass uns über dein Projekt sprechen.</p>

      <form
        @submit.prevent="submitForm"
        class="grid gap-6 text-left"
      >
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Name</label>
          <input
            v-model="form.name"
            type="text"
            required
            class="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">E-Mail</label>
          <input
            v-model="form.email"
            type="email"
            required
            class="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Nachricht</label>
          <textarea
            v-model="form.message"
            rows="5"
            required
            class="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black resize-none"
          ></textarea>
        </div>

        <button
          type="submit"
          class="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition"
        >
          Nachricht senden
        </button>
      </form>

      <!-- Optional fallback -->
      <p class="mt-6 text-sm text-gray-500">
        Oder schreib direkt an <a href="mailto:hello@dynamicflow.agency" class="underline hover:text-black">hello@dynamicflow.agency</a>
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactSection',
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      }
    }
  },
  methods: {
    submitForm() {
      console.log('Formulardaten:', this.form)
      alert('Danke für deine Nachricht – wir melden uns bald!')
      // Option: Hier könntest du später E-Mail-API o. Ä. anbinden
      this.form.name = ''
      this.form.email = ''
      this.form.message = ''
    }
  }
}
</script>
