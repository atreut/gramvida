import { defineStore } from 'pinia'

export const useLoadingStore = defineStore('loading', {
  state: () => ({
    visible: false,
    message: 'Carregando...',
  }),
  actions: {
    show(message = 'Carregando...') {
      this.message = message
      this.visible = true
    },
    hide() {
      this.visible = false
      this.message = ''
    },
  },
})
