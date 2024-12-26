import { createApp } from 'vue'
import './style.css'
import Support from './Support.vue'
import i18n from './i18n'

const app = createApp(Support)
app.use(i18n)
app.mount('#app')