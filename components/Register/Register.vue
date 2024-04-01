<template>
  <div class="user-registration">
    <form @submit.prevent="registerUser" class="registration-form">
      <label for="fullName" class="form-label">Nombre completo:</label>
      <input type="text" id="fullName" v-model="fullName" class="form-input" required>

      <label for="userName" class="form-label">Nombre de usuario:</label>
      <input type="text" id="userName" v-model="userName" class="form-input" required>

      <label for="email" class="form-label">Correo electrónico:</label>
      <input type="email" id="email" v-model="email" class="form-input" required>

      <label for="password" class="form-label">Contraseña:</label>
      <input type="password" id="password" v-model="password" class="form-input" required>

      <button type="submit" class="form-button">Registrar</button>
    </form>

    <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
    <div v-if="successMessage" class="success-message">{{ successMessage }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { createUser } from '~/api/controllers/users/user.controller'
import UserModel from '~/api/models/Users/UserModel'

const fullName = ref('')
const userName = ref('')
const email = ref('')
const password = ref('')
const profile_picture = ref('http://localhost:3000/_nuxt/assets/img/users/user.webp')
const category_user_id = ref(2)
const errorMessage = ref('')
const successMessage = ref('')

const user = ref<UserModel>(new UserModel(undefined, '', '', '', '', '', 2))
const registerUser = async () => {
  user.value.full_name = fullName.value
  user.value.user_name = userName.value
  user.value.email = email.value
  user.value.password = password.value
  user.value.profile_picture = profile_picture.value
  user.value.category_user_id = category_user_id.value
  if (user.value) {
    try {
      await createUser(user.value)
      errorMessage.value = ''
      successMessage.value = 'Usuario registrado exitosamente'
    } catch (error) {
      errorMessage.value = 'Error al registrar usuario'
    }
  }
}
</script>

<style scoped>
.user-registration {
  max-width: 400px;
  margin: 0 auto;
}
.registration-form {
  margin-bottom: 20px;
}
.form-label {
  display: block;
  margin-bottom: 5px;
}
.form-input {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.form-button {
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.error-message, .success-message {
  margin-top: 10px;
  padding: 10px;
  border-radius: 4px;
}
.error-message {
  background-color: #ffcdd2;
  color: #c62828;
}
.success-message {
  background-color: #c8e6c9;
  color: #2e7d32;
}
</style>