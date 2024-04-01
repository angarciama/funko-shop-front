<template>
  <div class="header-component-container">
    <img class="header-component-img" src="../../assets/img/funko-shop-logo.svg">
    <SearchBar></SearchBar>
    <ButtonNavigate route="products" buttonText="Productos"/>
    <ButtonNavigate route="shopping-car" buttonText="Comprar"/>
    <ButtonNavigate route="users/register" buttonText="Registrarte"/>
    <ButtonNavigate route="users/login" buttonText="Ingresar"/>
  </div>
</template>

<script setup lang="ts">
import SearchBar from "~/components/SearchBar/SearchBar.vue";
import ButtonNavigate from "~/components/Buttons/ButtonNavigate.vue";
</script>

<style>
.header-component-container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--primary-color);
}
.header-component-img {
  height: 40px;
  width: auto;
  padding: 0 10px;
}
</style>