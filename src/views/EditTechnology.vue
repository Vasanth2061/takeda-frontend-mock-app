<template>
  <div class="container mx-auto p-4">
    <h2 class="text-xl font-bold mb-4">Edit Technology</h2>
    <form @submit.prevent="updateTechnology" class="space-y-4">
      <div class="form-group">
        <label for="editTechName" class="block text-sm font-medium text-gray-700">Name:</label>
        <input type="text" v-model="technology.name" id="editTechName" required class="form-control mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
      </div>
      <div class="form-group">
        <label for="editProficiency" class="block text-sm font-medium text-gray-700">Proficiency:</label>
        <input type="number" v-model="technology.proficiency" id="editProficiency" min="1" max="5" required class="form-control mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
      </div>
      <button type="submit" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Update Technology</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
const API_URL = "https://localhost:7019/";

export default {
  name: 'EditTechnology',
  data() {
    return {
      technology: {
        id: this.$route.params.id,
        name: '',
        proficiency: 1,
      },
    };
  },
  created() {
    this.fetchTechnology();
  },
  methods: {
    async fetchTechnology() {
      try {
        const response = await axios.get(`${API_URL}api/Technologies/${this.technology.id}`);
        this.technology = response.data;
      } catch (error) {
        console.error('Error fetching technology:', error);
      }
    },
    async updateTechnology() {
      try {
        await axios.put(`${API_URL}api/Technologies/${this.technology.id}`, this.technology);
        this.$router.push('/members');
      } catch (error) {
        console.error('Error updating technology:', error);
      }
    },
  },
};
</script>

<style scoped>
/* Add your styles here */
</style>