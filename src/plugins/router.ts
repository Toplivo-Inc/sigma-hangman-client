import { createRouter, createWebHistory } from "vue-router";
import App from "@/App.vue";
import Registration from "@/pages/Registration.vue";
import Auth from "@/pages/Auth.vue";

const routes = [
  { path: '/registration', component: Registration },
  { path: '/auth', component: Auth },
  {
    path: '/',
    component: App,
    // children: [
    //   { path: '', component: () => import('@/pages/Home.vue') },
    // ]
  },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})