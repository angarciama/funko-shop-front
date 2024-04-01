<template>
  <div class="product-cards">
    <div class="card">
      <img :src="product.image" :alt="product.product_name" class="card-image">
      <div class="card-body">
        <h2 class="card-title">{{ product.product_name }}</h2>
        <p class="card-description">{{ product.product_description }}</p>
        <p class="card-price">{{ product.price }} €</p>
      </div>
      <button class="card-button">Añadir al carrito</button>
      <ButtonNavigate route="back" buttonText="Volver"></ButtonNavigate>
    </div>
  </div>
</template>

<script setup lang="ts">
import ProductsModel from '~/api/models/products/productsModel'
import ButtonNavigate from '~/components/Buttons/ButtonNavigate.vue'


const props = defineProps({
  product: {
    type: Object as () => ProductsModel,
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
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 300px;
  margin: 20px;
  padding: 10px;
  border: 1px solid var(--orange-color);
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
  font-size: 25px;
  margin-bottom: 10px;
}
.card-description {
  margin-bottom: 10px;
}
.card-price {
  font-size: 20px;
  font-weight: bold;
  color: var(--orange-color);
}
</style>