import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '',
    name: 'Home',
    component: () => import('@/views/web/HomeView.vue'),
    meta: {
      layout: 'web',
      transparentHeader: true,
      title: 'Gramvida - Espumas • Colchões • Imaginação ',
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach(async (to, from, next) => {
  return next()
})

export default router
