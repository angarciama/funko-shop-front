<template>
  <div v-if="product">
    <ProductDetailCard :product="product" />
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import ProductDetailCard from '../../../components/ProductCards/ProductDetailCard.vue'
import {ref} from "../../../.nuxt/imports";
import { productsStore } from '../../../store/products'

const route = useRoute()
const generalProductsModel = ref<ProductsModel[]>([])
const product = ref<ProductsModel>()

onMounted(async () => {
  try {
    generalProductsModel.value = productsStore().generalProductsModel

    const productId = route.params.key
    if (productId) {
      product.value = generalProductsModel.value.find(product => product.id == productId) ?? undefined
    }
  } catch (error) {
    console.error('Error fetching users:', error)
  }
})
</script>