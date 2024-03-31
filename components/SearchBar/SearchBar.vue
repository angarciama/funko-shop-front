<template>
  <div class="search-bar">
    <input type="text" v-model="query" @input="search" placeholder="Buscar..." class="search-input">
    <ul class="search-results">
      <li v-for="result in searchResults" :key="result.id" class="search-result">{{ result.name }}</li>
    </ul>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const query = ref('');
    const searchResults = ref([]);

    function search() {
      // Implementa la lógica de búsqueda aquí
    }

    return {
      query,
      searchResults,
      search
    };
  }
}
</script>

<style scoped>
.search-bar {
  display: flex;
  flex-direction: column;
}
.search-input {
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 1rem;
}
.search-results {
  list-style-type: none;
  padding: 0;
}
.search-result {
  padding: 0.5rem;
  background-color: #f9f9f9;
  border-radius: 5px;
  margin-bottom: 0.5rem;
}
</style>