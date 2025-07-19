<template>
  <button
    v-if="visible"
    class="fixed hover:opacity-80 bottom-8 right-8 bg-yellow-500 text-white px-4 py-3 rounded-full shadow-lg hover:bg-yellow-600 transition z-40"
    @click="scrollToTop"
  >
    <i class="fa fa-arrow-up"></i>
  </button>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const visible = ref(false)

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function handleScroll() {
  visible.value = window.scrollY > 300
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
