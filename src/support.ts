import { createApp } from 'vue'
import './style.css'
import i18n from './i18n'
import Support from './Support.vue'

const app = createApp(Support)
app.use(i18n)
app.mount('#app')