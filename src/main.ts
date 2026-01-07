import { createApp } from 'vue'

import 'vuetify/styles/main.css'
import 'unfonts.css'
import vuetify from './plugins/vuetify'
import pinia from './plugins/pinia'
import App from './App.vue'
import '@mdi/font/css/materialdesignicons.css'

createApp(App)
  .use(vuetify)
  .use(pinia)
  .mount('#app')
