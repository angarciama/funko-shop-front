<template>
  <div class="footer-component-container">
    <p class="footer-component-text">Proyecto Integrador Digital House</p>
    <a href="https://github.com/angarciama/grupo_9_proyectoIntegrador.git" target="_blank">
      <img class="footer-component-img" src="../../assets/img/github-mark-white.svg" alt="GitHub">
    </a>
    <img class="footer-component-img" src="../../assets/img/funko-shop-logo.svg" alt="FunkoShop">
  </div>
</template>

<style>
.footer-component-container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--primary-color);
}
.footer-component-text {
  color: var(--orange-color);
  font-weight: bold;
  padding: 0 10px;
}
.footer-component-img {
  height: 40px;
  width: auto;
  padding: 0 10px;
}
</style>