<script setup lang="ts">
import { useTheme } from 'vuetify'
import { onMounted } from "vue";

const theme = useTheme()

const toggleTheme = () => {
  theme.toggle()
  localStorage.setItem('theme', theme.global.name.value)
}

onMounted(() => {
  const currentTheme = localStorage.getItem('theme')
  currentTheme ? theme.change(currentTheme) : null
})
</script>

<template>
  <v-btn
    icon="mdi-theme-light-dark"
    @click="toggleTheme()"
  />
</template>
