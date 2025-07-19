<template>
  <div class="text-white">
    <div class="container flex items-center py-4">
      <nav class="hidden md:flex ml-auto gap-2">
        <button
          class="px-4 py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-yellow-500 after:transition-all after:duration-300 hover:after:w-full"
          @click="goToSection('hero')"
        >
          Home
        </button>

        <button
          class="px-4 py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-yellow-500 after:transition-all after:duration-300 hover:after:w-full"
          @click="goToSection('hero')"
        >
          A Fábrica
        </button>
        <button
          class="px-4 py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-yellow-500 after:transition-all after:duration-300 hover:after:w-full"
          @click="goToSection('hero')"
        >
          Linhas
        </button>
        <button
          class="px-4 py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-yellow-500 after:transition-all after:duration-300 hover:after:w-full"
          @click="goToSection('hero')"
        >
          Blog
        </button>
        <button
          class="px-4 py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-yellow-500 after:transition-all after:duration-300 hover:after:w-full"
          @click="goToSection('hero')"
        >
          Contato
        </button>
        <button
          class="px-4 py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-yellow-500 after:transition-all after:duration-300 hover:after:w-full"
          @click="goToSection('hero')"
        >
          Loja Virtual
        </button>
      </nav>
    </div>

    <nav
      v-if="open"
      class="md:hidden flex flex-col justify-center items-center gap-4 bg-black fixed inset-0 w-screen h-screen z-50 transition-all duration-500 ease-in-out px-20"
    >
      <button
        class="fixed top-4 right-4 z-60 text-white py-1 px-2 rounded-full hover:bg-yellow-600 transition"
        aria-label="Fechar menu"
        @click="emitClose"
      >
        <i class="fa fa-times fa-2x"></i>
      </button>

      <button
        class="px-4 py-1 hover:bg-red-500 hover:rounded-full hover:opacity-100 border-b border-gray-600 w-full text-center"
        @click="goToSection('hero')"
      >
        Home
      </button>
      <button
        class="px-4 py-1 hover:bg-red-500 hover:rounded-full hover:opacity-100 border-b border-gray-600 w-full text-center"
        @click="goToSection('hero')"
      >
        A Fábrica
      </button>
      <button
        class="px-4 py-1 hover:bg-red-500 hover:rounded-full hover:opacity-100 border-b border-gray-600 w-full text-center"
        @click="goToSection('hero')"
      >
        Linhas
      </button>
      <button
        class="px-4 py-1 hover:bg-red-500 hover:rounded-full hover:opacity-100 border-b border-gray-600 w-full text-center"
        @click="goToSection('hero')"
      >
        Blog
      </button>
      <button
        class="px-4 py-1 hover:bg-red-500 hover:rounded-full hover:opacity-100 border-b border-gray-600 w-full text-center"
        @click="goToSection('hero')"
      >
        Contato
      </button>
      <button
        class="px-4 py-1 hover:bg-red-500 hover:rounded-full hover:opacity-100 border-b border-gray-600 w-full text-center"
        @click="goToSection('hero')"
      >
        Loja Virtual
      </button>
    </nav>
  </div>
</template>

<script setup>
import { watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const props = defineProps({
  open: {
    type: Boolean,
    required: true,
  },
})

const emit = defineEmits(['close'])

const router = useRouter()
const route = useRoute()

watch(
  () => props.open,
  (isOpen) => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
  }
)

function emitClose() {
  emit('close')
}

async function goToSection(id) {
  emitClose()
  if (route.path !== '/') {
    await router.push('/')
  }

  setTimeout(() => {
    const section = document.querySelector(`#${id}`)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }, 100)
}
</script>
