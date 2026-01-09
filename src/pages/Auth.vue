<script setup lang="ts">

import { ref } from "vue";
import { validator } from "@/utils/validator.ts";
import { userStore } from "@/stores/user.store.ts";
import { storeToRefs } from "pinia";

const showPassword = ref(false)

const { user } = storeToRefs( userStore())
</script>

<template>
  <v-container
    class="d-flex align-center justify-center"
  >
    <v-sheet width="600" elevation="4" rounded class="px-16 py-8">
      <v-form fast-fail @submit.prevent>
        <v-card-title>Войти</v-card-title>

        <v-text-field
          clearable
          v-model="user.username"
          :rules="validator.username"
          label="Имя"
          variant="solo"
          required
        />

        <v-text-field
          clearable
          :type="showPassword ? 'text' : 'password'"
          :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
          @click:append-inner="showPassword = !showPassword"
          v-model="user.password"
          :rules="validator.password"
          label="Пароль"
          variant="solo"
          required
        />

        <v-btn
          type="submit"
          block
          class="mt-4"
          color="secondary"
          text="Войти"
        />
      </v-form>
    </v-sheet>
  </v-container>
</template>