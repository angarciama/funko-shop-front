<template>
  <Layout>
    <template #mainSlot>
      <ProductCards :products="products" />
    </template>
  </Layout>
</template>

<script setup lang="ts">
import Layout from "~/components/Layout/Layout.vue";
import { ref, onMounted } from 'vue'
import ProductsModel from '~/api/models/products/productsModel'
import { allProducts } from '~/api/controllers/products/products.controller'
import { productsStore } from '~/store/products'
import ProductCards from '~/components/ProductCards/ProductCards.vue'

const products = ref<ProductsModel[]>([])
onMounted(async () => {
  try {
    products.value = productsStore().generalProductsModel
    if (products.value.length == 0) {
      products.value = await allProducts()
      productsStore().setGeneralUserModel(products.value)
    }
  } catch (error) {
    console.error('Error fetching products:', error)
  }
})
</script>