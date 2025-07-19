import { defineStore } from 'pinia'

export const useAlertStore = defineStore('alert', {
  state: () => ({
    visible: false,
    type: null,
    message: '',
    timeoutId: null,
  }),

  actions: {
    show(type, message, duration = 4000) {
      this.visible = true
      this.type = type
      this.message = message

      if (this.timeoutId) clearTimeout(this.timeoutId)

      this.timeoutId = setTimeout(() => {
        this.visible = false
        this.timeoutId = null
      }, duration)
    },

    close() {
      this.visible = false
      if (this.timeoutId) {
        clearTimeout(this.timeoutId)
        this.timeoutId = null
      }
    },
  },
})
