import tippy from 'tippy.js'
import 'tippy.js/dist/tippy.css'

const tippyInstances = new WeakMap()

export default {
  mounted(el, binding) {
    if (!binding.value) return

    const instance = tippy(el, {
      content: binding.value,
      placement: 'right',
      delay: [300, 0],
      arrow: true,
    })
    tippyInstances.set(el, instance)
  },

  updated(el, binding) {
    const instance = tippyInstances.get(el)

    if (!binding.value) {
      if (instance) {
        instance.destroy()
        tippyInstances.delete(el)
      }
    } else if (instance) {
      instance.setContent(binding.value)
    } else {
      const newInstance = tippy(el, {
        content: binding.value,
        placement: 'right',
        delay: [300, 0],
        arrow: true,
      })
      tippyInstances.set(el, newInstance)
    }
  },

  unmounted(el) {
    const instance = tippyInstances.get(el)
    if (instance) {
      instance.destroy()
      tippyInstances.delete(el)
    }
  },
}
