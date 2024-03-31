<template>
  <div>
    {{ products }}
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