import { createApp } from 'vue'
import { createPinia } from 'pinia'

import VueSelect from 'vue3-select'

import '@/assets/css/tailwind.css'
import '@/assets/css/icons.css'
import '@fontsource/poppins/index.css'
import 'vue3-select/dist/vue3-select.css'

import Tooltip from '@/store/ui/tooltip'

import router from './router'
import App from './App.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.directive('tooltip', Tooltip)
app.component('VSelect', VueSelect)

app.mount('#app')
