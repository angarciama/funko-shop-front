 <template>
  <button @click="navigate">{{ buttonText }}</button>
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
  }
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

<style scoped>
button {
  border: 1px solid black;
  border-radius: 10px;
  height: 50px;
  background-color: white;
  color: black;
  font-weight: bold;
  cursor: pointer;
  padding: 0 20px;
}
button:hover {
  background-color: black;
  color: white;
}
button:active {
  background-color: black;
  color: white;
}
</style>