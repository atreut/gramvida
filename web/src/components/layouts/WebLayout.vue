<template>
  <div>
    <HeaderWeb :transparent="route.meta.transparentHeader" />

    <main>
      <slot />
    </main>

    <FooterWeb />
    <ScrollToTop />
  </div>
</template>

<script setup>
import HeaderWeb from '@/views/web/components/Header.vue'
import FooterWeb from '@/views/web/components/Footer.vue'
import ScrollToTop from '@/views/web/components/ScrollToTop.vue'

import { useRoute } from 'vue-router'

const route = useRoute()
</script>
