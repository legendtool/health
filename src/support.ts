import { createApp } from 'vue'
import './style.css'
import i18nSupport from './i18nSupport'
import Support from './Support.vue'

const app = createApp(Support)
app.use(i18nSupport)
app.mount('#app')