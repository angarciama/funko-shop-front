<template>
  <Layout>
    <template #mainSlot>
      <ProductCards />
    </template>
  </Layout>
</template>

<script setup lang="ts">
import Layout from "~/components/Layout/Layout.vue";
import ProductCards from "~/components/ProductCards/ProductCards.vue";
</script>