<template>
  <div class="container mx-auto p-4">
    <h2 class="text-xl font-bold mb-4">Add Personal Image</h2>
    <form @submit.prevent="addPersonalImage" class="space-y-4">
      <div class="form-group">
        <label for="image" class="block text-sm font-medium text-gray-700">Image:</label>
        <input type="file" @change="onFileChange" id="image" class="form-control mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
      </div>
      <button type="submit" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Add Image</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
const API_URL = "https://localhost:7019/";

export default {
  name: 'AddPersonalImage',
  data() {
    return {
      file: null,
    };
  },
  methods: {
    onFileChange(event) {
      this.file = event.target.files[0];
    },
    async addPersonalImage() {
      const formData = new FormData();
      if (this.file) {
        formData.append('file', this.file);
      }

      try {
        await axios.post(`${API_URL}api/PersonalImages`, formData);
        this.$router.push('/members');
      } catch (error) {
        console.error('Error adding personal image:', error);
      }
    },
  },
};
</script>
