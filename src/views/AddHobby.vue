<template>
  <div class="container mx-auto p-4">
    <h2 class="text-xl font-bold mb-4">Add Hobby</h2>
    <form @submit.prevent="addHobby" class="space-y-4">
      <div class="form-group">
        <label for="hobbyName" class="block text-sm font-medium text-gray-700">Name:</label>
        <input type="text" v-model="hobby.name" id="hobbyName" required class="form-control mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
      </div>
      <div class="form-group">
        <label for="hobbyDescription" class="block text-sm font-medium text-gray-700">Description:</label>
        <textarea v-model="hobby.description" id="hobbyDescription" required class="form-control mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></textarea>
      </div>
      <button type="submit" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Add Hobby</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
const API_URL = "https://localhost:7019/";

export default {
  name: 'AddHobby',
  data() {
    return {
      hobby: {
        name: '',
        description: '',
      },
    };
  },
  methods: {
    async addHobby() {
      try {
        await axios.post(`${API_URL}api/Hobbies`, this.hobby);
        this.$router.push('/');
      } catch (error) {
        console.error('Error adding hobby:', error);
      }
    },
  },
};
</script>

