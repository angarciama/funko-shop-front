<template>
  <div class="product-cards">
    <div v-for="product in products" :key="product.id" class="card">
      <img :src="product.image" :alt="product.product_name" class="card-image">
      <div class="card-body">
        <h2 class="card-title">{{ product.product_name }}</h2>
        <p class="card-description">{{ product.product_description }}</p>
        <p class="card-price">{{ product.price }} €</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ProductsModel from '~/api/models/products/productsModel'

const props = defineProps({
  products: {
    type: Array as () => ProductsModel[],
    required: true
  }
})
</script>

<style scoped>
.product-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.card {
  width: 300px;
  margin: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.card-image {
  width: 100%;
  height: auto;
  border-radius: 5px;
}
.card-body {
  padding: 10px;
}
.card-title {
  font-size: 20px;
  margin-bottom: 10px;
}
.card-description {
  margin-bottom: 10px;
}
.card-price {
  font-weight: bold;
  color: #007bff;
}
</style>