import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import i18n from './i18n'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia).use(i18n)
app.mount('#app')
