<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Edit Colleague</h1>
    <form @submit.prevent="updateColleague" class="space-y-4">
      <div class="form-group">
        <label for="colleagueName" class="block text-sm font-medium text-gray-700">Name:</label>
        <input type="text" v-model="colleague.colleagueName" id="colleagueName" required class="form-control mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
      </div>
      <div class="form-group">
        <label for="description" class="block text-sm font-medium text-gray-700">Description:</label>
        <textarea v-model="colleague.description" id="description" required class="form-control mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></textarea>
      </div>
      <div class="form-group">
        <label for="isTeamMember" class="block text-sm font-medium text-gray-700">Is Team Member:</label>
        <input type="checkbox" v-model="colleague.isTeamMember" id="isTeamMember" class="form-control mt-1 block">
      </div>
      <div class="form-group">
        <label for="image" class="block text-sm font-medium text-gray-700">Image:</label>
        <input type="file" @change="onFileChange" id="image" class="form-control mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
      </div>
      <button type="submit" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Update</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
const API_URL = "https://localhost:7019/";

export default {
  name: 'EditColleague',
  data() {
    return {
      colleague: {
        colleagueName: '',
        description: '',
        imageURL: '',
        isTeamMember: false,
      },
      file: null,
    };
  },
  created() {
    this.fetchColleague();
  },
  methods: {
    async fetchColleague() {
      const id = this.$route.params.id;
      try {
        const response = await axios.get(`${API_URL}api/MembersMet/${id}`);
        this.colleague = response.data;
      } catch (error) {
        console.error('Error fetching colleague:', error);
      }
    },
    onFileChange(event) {
      this.file = event.target.files[0];
    },
    async updateColleague() {
      const id = this.$route.params.id;
      const formData = new FormData();
      formData.append('colleagueName', this.colleague.colleagueName);
      formData.append('description', this.colleague.description);
      formData.append('isTeamMember', this.colleague.isTeamMember);
      if (this.file) {
        formData.append('file', this.file);
      }

      try {
        await axios.put(`${API_URL}api/MembersMet/${id}`, formData);
        this.$router.push(`/colleagues/${id}`);
      } catch (error) {
        console.error('Error updating colleague:', error);
      }
    },
  },
};
</script>
