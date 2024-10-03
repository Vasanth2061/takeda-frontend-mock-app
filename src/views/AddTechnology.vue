<template>
  <div class="container mx-auto p-4">
    <h2 class="text-xl font-bold mb-4">Add Technology</h2>
    <form @submit.prevent="addTechnology" class="space-y-4">
      <div class="form-group">
        <label for="techName" class="block text-sm font-medium text-gray-700">Name:</label>
        <input type="text" v-model="technology.name" id="techName" required class="form-control mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
      </div>
      <div class="form-group">
        <label for="proficiency" class="block text-sm font-medium text-gray-700">Proficiency:</label>
        <input type="number" v-model="technology.proficiency" id="proficiency" min="1" max="5" required class="form-control mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
      </div>
      <button type="submit" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Add Technology</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
const API_URL = "https://localhost:7019/";

export default {
  name: 'AddTechnology',
  data() {
    return {
      technology: {
        name: '',
        proficiency: 1,
      },
    };
  },
  methods: {
    async addTechnology() {
      try {
        await axios.post(`${API_URL}api/Technologies`, this.technology);
        this.$router.push('/');
      } catch (error) {
        console.error('Error adding technology:', error);
      }
    },
  },
};
</script>

<style scoped>
/* Add your styles here */
</style>