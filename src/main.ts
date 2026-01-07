import { createApp } from 'vue'

import 'vuetify/styles/main.css'
import 'unfonts.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import App from './App.vue'
import { createPinia } from "pinia";

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'system'
  }
})

const pinia = createPinia()

createApp(App).use(vuetify).use(pinia).mount('#app')
