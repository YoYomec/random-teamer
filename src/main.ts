import './assets/bamboo.css'
import './assets/main.css'
//import './assets/pico.min.css'
//import './assets/water.css'
//import './assets/classless.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const app = createApp(App)

app.use(createPinia())

app.mount('#app')
