<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Edit Team Member</h1>
    <form @submit.prevent="updateTeamMember" class="space-y-4">
      <div class="form-group">
        <label for="colleagueName" class="block text-sm font-medium text-gray-700">Name:</label>
        <input type="text" v-model="teamMember.colleagueName" id="colleagueName" required class="form-control mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
      </div>
      <div class="form-group">
        <label for="description" class="block text-sm font-medium text-gray-700">Description:</label>
        <textarea v-model="teamMember.description" id="description" required class="form-control mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></textarea>
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
  name: 'EditTeamMember',
  data() {
    return {
      teamMember: {
        colleagueName: '',
        description: '',
        imageURL: '',
      },
      file: null,
    };
  },
  created() {
    this.fetchTeamMember();
  },
  methods: {
    async fetchTeamMember() {
      const id = this.$route.params.id;
      try {
        const response = await axios.get(`${API_URL}api/TeamMembers/${id}`);
        this.teamMember = response.data;
      } catch (error) {
        console.error('Error fetching team member:', error);
      }
    },
    onFileChange(event) {
      this.file = event.target.files[0];
    },
    async updateTeamMember() {
      const id = this.$route.params.id;
      const formData = new FormData();
      formData.append('colleagueName', this.teamMember.colleagueName);
      formData.append('description', this.teamMember.description);
      if (this.file) {
        formData.append('file', this.file);
      }

      try {
        await axios.put(`${API_URL}api/TeamMembers/${id}`, formData);
        this.$router.push(`/team-members/${id}`);
      } catch (error) {
        console.error('Error updating team member:', error);
      }
    },
  },
};
</script>

<style scoped>
/* Add your styles here */
</style>