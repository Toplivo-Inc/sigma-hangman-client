<script setup lang="ts">

import { ref } from "vue";
import { validator } from "@/utils/validator.ts";
import { userStore } from "@/stores/user.store.ts";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";

const showPassword = ref(false)

const { user } = storeToRefs( userStore())

const router = useRouter()
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
          v-model="user.email"
          :rules="validator.email"
          label="Email"
          variant="solo"
          required
        />

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

        <v-radio-group
          inline
          label="Пол"
          v-model="user.sex"
        >
          <v-radio label="Не указывать" :value="null"/>
          <v-radio label="Мужской" value="male"/>
          <v-radio label="Женский" value="female"/>
        </v-radio-group>

        <v-file-upload
          :v-model="user.avatar"
          clearable
          density="compact"
          variant="compact"
          icon="mdi-upload"
          scrim="primary"
          title="Загрузить аватарку"
        />

        <v-col
          class="mt-4 d-flex flex-column ga-2"
        >
          <v-btn
            @click="() => router.push('auth')"
            variant="text"
            text="У меня уже есть аккаунт"
            density="compact"
          />

          <v-btn
            type="submit"
            color="secondary"
            text="Зарегистрироваться"
          />
        </v-col>
      </v-form>
    </v-sheet>
  </v-container>
</template>