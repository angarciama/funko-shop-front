<template>
  <Layout>
    <template #mainSlot>
      <ButtonNavigate route="users" buttonText="Usuarios"/>
      <ButtonNavigate route="back" buttonText="Salir"/>
    </template>
  </Layout>
</template>

<script setup lang="ts">
import ButtonNavigate from "~/components/Buttons/ButtonNavigate.vue";
import Layout from "~/components/Layout/Layout.vue";
</script>