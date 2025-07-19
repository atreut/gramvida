<template>
  <div>
    <component :is="layoutComponent" v-if="route.name">
      <router-view />
    </component>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import WebLayout from '@/components/layouts/WebLayout.vue'

const route = useRoute()

const layoutComponent = computed(() => {
  switch (route.meta.layout) {
    default:
      return WebLayout
  }
})
</script>
