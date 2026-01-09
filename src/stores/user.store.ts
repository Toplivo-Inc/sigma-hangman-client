import { defineStore } from "pinia";
import type { User } from "@/types/user.type.ts";
import { reactive } from "vue";

export const userStore = defineStore('user', () => {
  const user: User = reactive({
    id: '',
    email: '',
    username: '',
    password: '',
    sex: null,
    avatar: null
  })
  
  return {
    user
  }
})