<script setup lang="ts">

import { ref } from "vue";
import { validator } from "@/utils/validator.ts";

const email = ref('');
const username = ref('')
const password = ref('')
const showPassword = ref(false)
const sex = ref<'male' | 'female' | null>(null)

</script>

<template>
  <v-container
    class="d-flex align-center justify-center"
  >
    <v-sheet width="600" elevation="4" rounded class="px-16 py-8">
      <v-form fast-fail @submit.prevent>
        <v-card-title>Регистрация</v-card-title>
        <v-text-field
          clearable
          v-model="email"
          :rules="validator.email"
          label="Email"
          variant="solo"
          required
        />

        <v-text-field
          clearable
          v-model="username"
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
          v-model="password"
          :rules="validator.password"
          label="Пароль"
          variant="solo"
          required
        />

        <v-radio-group
          inline
          label="Пол"
          v-model="sex"
        >
          <v-radio label="Не указывать" :value="null"/>
          <v-radio label="Мужской" value="male"/>
          <v-radio label="Женский" value="female"/>
        </v-radio-group>

        <v-file-upload
          clearable
          density="compact"
          variant="compact"
          icon="mdi-upload"
          scrim="primary"
          title="Загрузить аватарку"
        />

        <v-btn
          type="submit"
          block
          class="mt-4"
          color="secondary"
        >
          Войти
        </v-btn>
      </v-form>
    </v-sheet>
  </v-container>
</template>