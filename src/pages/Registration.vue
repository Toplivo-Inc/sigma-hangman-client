<script setup lang="ts">

import { ref } from "vue";

const email = ref('');
const userName = ref('')
const password = ref('')
const showPassword = ref(false)
const sex = ref<'male' | 'female' | null>(null)


const emailRule = [
  (value: string) => {
    return (/.+@.+\..+/.test(value)) ? true : 'Неккоректный Email-адрес'
  }
]

const userNameRule = [
  (value: string) => {
    if (value.length < 3) return 'Имя должно быть не короче 3 символов'
    if (/\s/.test(value)) return 'Имя не должно содержать пробелы'
    return true
  }
]

const passwordRules = [
  (value: string) => {
    if (value?.length < 8) return 'Длина пароля не менее 8 символов'
    if (!(/(?=.*[a-zа-яё])/.test(value))) return 'Хотя бы одна строчная буква'
    if (!(/(?=.*[A-ZА-ЯЁ])/.test(value))) return 'Хотя бы одна заглавная буква'
    if (!(/(?=.*\d)/.test(value))) return 'Хотя бы одна цифра'
    if (!(/(?=.*[^\w\s])/.test(value))) return 'Хотя бы один спецсивол'
    if (/\s/.test(value)) return 'Пароль не должен содержать пробелы'
    return true
  }
]
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
          :rules="emailRule"
          label="Email"
          variant="solo"
          required
        />

        <v-text-field
          clearable
          v-model="userName"
          :rules="userNameRule"
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
          :rules="passwordRules"
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