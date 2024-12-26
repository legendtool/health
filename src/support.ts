import { createApp } from 'vue'
import './style.css'
import Support from './pages/Support.vue'
import i18n from './i18n'
// import router from './router'

const app = createApp(Support)
app.use(i18n)
// app.use(router)
app.mount('#app')