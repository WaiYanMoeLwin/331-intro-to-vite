// import './assets/main.css'

import { createPinia } from 'pinia'
import { createApp } from 'vue'
import './assets/style.css'

import 'nprogress/nprogress.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)

import { inject } from '@vercel/analytics'
inject()

app.use(createPinia())
app.use(router)

app.mount('#app')
