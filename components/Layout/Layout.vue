<template>
  <div :class="props.propClassLayout">
    <header>
      <div>Modulo administrativo</div>
    </header>
    <main>
      <slot name="mainSlot"></slot>
    </main>
    <footer>
      <div>Hace consumo de Random Data API
        <a href="https://random-data-api.com/documentation" target="_blank">https://random-data-api.com/documentation</a>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  propClassLayout: {type: String, default: 'layout-component-container'}
})
</script>

<style>
.layout-component-container {
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100vh;
  width: 100vw;
  padding: 20px 30px 20px 30px;
}
</style>