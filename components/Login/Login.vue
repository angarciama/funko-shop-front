<template>
  <div class="user-login">
    <form @submit.prevent="loginUserSubmit" class="login-form">
      <label for="email" class="form-label">Correo electrónico:</label>
      <input type="email" id="email" v-model="email" class="form-input" required>

      <label for="password" class="form-label">Contraseña:</label>
      <input type="password" id="password" v-model="password" class="form-input" required>

      <button type="submit" class="form-button">Iniciar sesión</button>
    </form>

    <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import LoginRequestModel from "~/api/models/Auth/LoginRequestModel";
import { loginUser } from "~/api/controllers/auth/auth.controller";

const email = ref('')
const password = ref('')
const errorMessage = ref('')
const router = useRouter()
const loginData = ref<LoginRequestModel>(new LoginRequestModel('', ''))

const loginUserSubmit = async () => {
  loginData.value.email = email.value
  loginData.value.password = password.value
  if (loginData.value) {
    try {
      await loginUser(loginData.value)
      await router.push('/')
    } catch (error) {
      errorMessage.value = 'Credenciales incorrectas. Intente nuevamente.'
    }
  }
}
</script>

<style scoped>
.user-login {
  max-width: 400px;
  margin: 0 auto;
}
.login-form {
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
.error-message {
  margin-top: 10px;
  padding: 10px;
  border-radius: 4px;
  background-color: #ffcdd2;
  color: #c62828;
}
</style>