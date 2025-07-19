<template>
  <header
    class="fixed w-full top-0 left-0 pl-10 right-0 z-50 transition-all duration-500 ease-in-out"
    :class="headerClass"
  >
    <div :class="`w-full px-10 pr-5 flex items-center flex-nowrap ${containerPaddingClass}`">
      <router-link to="/" class="flex items-center gap-2 min-w-0 whitespace-nowrap">
        <img src="@/assets/images/logomarca.png" alt="Gramvida" :class="logoClass" />
        <div
          class="flex flex-col leading-tight uppercase relative top-[2px] flex-1 min-w-0 max-w-[60vw]"
        >
          <span :class="titleClass">GRAM - VIDA</span>
          <span :class="subtitleClass">Espumas • Colchões • Imaginação</span>
        </div>
      </router-link>

      <div class="flex-1">
        <MenuWeb :open="menuOpen" @close="menuOpen = false" />
      </div>

      <button class="md:hidden text-3xl text-white ml-auto" @click="menuOpen = true">
        <i class="fa fa-bars"></i>
      </button>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import MenuWeb from '@/views/web/components/Menu.vue'

const props = defineProps({
  transparent: {
    type: Boolean,
    default: false,
  },
})

const menuOpen = ref(false)
const isScrolled = ref(false)

function handleScroll() {
  isScrolled.value = window.scrollY > 100
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const headerClass = computed(() => {
  if (!props.transparent) {
    return 'bg-blue-950'
  }
  return isScrolled.value ? 'bg-blue-950/80 backdrop-blur shadow' : 'bg-transparent'
})

const logoClass = computed(() =>
  isScrolled.value
    ? 'h-8 sm:h-10 w-auto transition-all duration-300 ease-in-out'
    : 'h-12 sm:h-16 w-auto transition-all duration-300 ease-in-out'
)

const titleClass = computed(() =>
  isScrolled.value
    ? 'text-white font-extrabold text-base sm:text-2xl leading-none transition-all duration-300 ease-in-out'
    : 'text-white font-extrabold text-xl sm:text-3xl leading-none transition-all duration-300 ease-in-out'
)

const subtitleClass = computed(() =>
  isScrolled.value
    ? 'text-white font-normal text-[9px] sm:text-[9px] transition-all duration-300 ease-in-out'
    : 'text-white font-normal text-[10px] sm:text-[9px] transition-all duration-300 ease-in-out'
)

const containerPaddingClass = computed(() =>
  isScrolled.value
    ? 'py-1 sm:py-2 transition-all duration-300 ease-in-out'
    : 'py-4 sm:py-8 transition-all duration-300 ease-in-out'
)
</script>
