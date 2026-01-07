import { createApp } from 'vue'

import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles/main.css'
import 'unfonts.css'
import vuetify from './plugins/vuetify'
import pinia from './plugins/pinia'
import router from './plugins/router'
import { VueQueryPlugin } from "@tanstack/vue-query";

import App from './App.vue'

createApp(App)
  .use(vuetify)
  .use(pinia)
  .use(router)
  .use(VueQueryPlugin)
  .mount('#app')
