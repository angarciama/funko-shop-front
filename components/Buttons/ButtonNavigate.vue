<template>
  <button @click="navigate" :class="props.propClass">{{ buttonText }}</button>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { defineProps } from 'vue'

const props = defineProps({
  route: {
    type: String,
    required: true
  },
  buttonText: {
    type: String,
    default: 'Volver'
  },
  propClass: {type: String, default: 'button-navigate-container'}
})

const router = useRouter()

const navigate = () => {
  if (props.route === 'back') {
    router.go(-1)
  } else {
    router.push(`/${props.route}`)
  }
}
</script>

<style>
.button-navigate-container {
  height: 50px;
  color: var(--orange-color);
  font-weight: bold;
  cursor: pointer;
  padding: 0 10px;
}
</style>