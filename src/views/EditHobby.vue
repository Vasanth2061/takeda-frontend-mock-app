<template>
  <div class="container mx-auto p-4">
    <h2 class="text-xl font-bold mb-4">Edit Hobby</h2>
    <form @submit.prevent="updateHobby" class="space-y-4">
      <div class="form-group">
        <label for="editHobbyName" class="block text-sm font-medium text-gray-700">Name:</label>
        <input type="text" v-model="hobby.name" id="editHobbyName" required class="form-control mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
      </div>
      <div class="form-group">
        <label for="editHobbyDescription" class="block text-sm font-medium text-gray-700">Description:</label>
        <textarea v-model="hobby.description" id="editHobbyDescription" required class="form-control mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></textarea>
      </div>
      <button type="submit" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Update Hobby</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
const API_URL = "https://localhost:7019/";

export default {
  name: 'EditHobby',
  data() {
    return {
      hobby: {
        id: this.$route.params.id,
        name: '',
        description: '',
      },
    };
  },
  created() {
    this.fetchHobby();
  },
  methods: {
    async fetchHobby() {
      try {
        const response = await axios.get(`${API_URL}api/Hobbies/${this.hobby.id}`);
        this.hobby = response.data;
      } catch (error) {
        console.error('Error fetching hobby:', error);
      }
    },
    async updateHobby() {
      try {
        await axios.put(`${API_URL}api/Hobbies/${this.hobby.id}`, this.hobby);
        this.$router.push('/members');
      } catch (error) {
        console.error('Error updating hobby:', error);
      }
    },
  },
};
</script>
