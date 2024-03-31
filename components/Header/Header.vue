<template>
  <div>
    <img src="../../assets/img/funko-shop-logo.svg">
    <SearchBar></SearchBar>
    <ButtonNavigate route="products" buttonText="Productos"/>
    <ButtonNavigate route="shopping-car" buttonText="Shopping Car"/>
    <ButtonNavigate route="users/register" buttonText="Registrarte"/>
    <ButtonNavigate route="users/login" buttonText="Ingresar"/>
  </div>
</template>

<script setup lang="ts">
import SearchBar from "~/components/SearchBar/SearchBar.vue";
import ButtonNavigate from "~/components/Buttons/ButtonNavigate.vue";
</script>