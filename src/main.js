import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { VueFire } from "vuefire"
import { firebaseApp } from "@/firebase.js"

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.js"
import './scss/styles.scss'

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

app.use(VueFire, {
  firebaseApp,
  modules: [],
})