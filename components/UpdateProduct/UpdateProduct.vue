<template>
  <div class="product-creation">
    <form @submit.prevent="createProductSubmit" class="creation-form">
      <label for="productName" class="form-label">Nombre del producto:</label>
      <input type="text" id="productName" v-model="productName" class="form-input" required>

      <label for="productDescription" class="form-label">Descripción del producto:</label>
      <textarea id="productDescription" v-model="productDescription" class="form-input" required></textarea>

      <label for="productImage" class="form-label">URL de la imagen:</label>
      <input type="text" id="productImage" v-model="productImage" class="form-input" required>

      <label for="productPrice" class="form-label">Precio del producto:</label>
      <input type="number" id="productPrice" v-model="productPrice" class="form-input" required>

      <label for="categoryId" class="form-label">ID de categoría:</label>
      <input type="number" id="categoryId" v-model="categoryId" class="form-input" required>

      <button type="submit" class="form-button">Editar Producto</button>
    </form>

    <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
    <div v-if="successMessage" class="success-message">{{ successMessage }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { updateProduct } from '~/api/controllers/products/products.controller'
import ProductsModel from '~/api/models/products/ProductsModel'
import {useRoute} from "vue-router";


const productName = ref('')
const productDescription = ref('')
const productImage = ref('')
const productPrice = ref(0)
const categoryId = ref(0)
const errorMessage = ref('')
const successMessage = ref('')

const product = ref<ProductsModel>(new ProductsModel(undefined, '', '', '', 0, 0))
const router = useRoute()

const createProductSubmit = async () => {
  try {
    product.value.id = router.params.key
    product.value.product_name = productName.value
    product.value.product_description = productDescription.value
    product.value.image = productImage.value
    product.value.price = productPrice.value
    product.value.category_id = categoryId.value

    if (product.value) {
      await updateProduct(product.value)
      await router.push('/products')
    }
  } catch (error) {
    errorMessage.value = 'Error al crear producto'
  }
}
</script>

<style scoped>
.product-creation {
  max-width: 400px;
  margin: 0 auto;
}
.creation-form {
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