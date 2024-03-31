<template>
  <div
      v-for="products in products"
      :key="products.id"
      class="general-user-card-container">
    {{products}}
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import ProductsModel from '~/api/models/products/productsModel'
import { allProducts } from '~/api/controllers/products/products.controller'

const products = ref<ProductsModel[]>([])
onMounted(async () => {
  try {
    products.value = await allProducts()
    console.log(products.value)
  } catch (error) {
    console.error('Error fetching products:', error)
  }
})
</script>