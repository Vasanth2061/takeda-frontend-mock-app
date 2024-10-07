<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Edit Training Activity</h1>
    <form @submit.prevent="updateActivity" class="space-y-4">
      <div class="form-group">
        <label for="name" class="block text-sm font-medium text-gray-700">Name:</label>
        <input type="text" v-model="activity.name" id="name" required class="form-control mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
      </div>
      <div class="form-group">
        <label for="description" class="block text-sm font-medium text-gray-700">Description:</label>
        <textarea v-model="activity.description" id="description" required class="form-control mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></textarea>
      </div>
      <div class="form-group">
        <label for="startDate" class="block text-sm font-medium text-gray-700">Start Date:</label>
        <input type="text" v-model="activity.startDate" id="startDate" required class="form-control mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
      </div>
      <div class="form-group">
        <label for="endDate" class="block text-sm font-medium text-gray-700">End Date:</label>
        <input type="text" v-model="activity.endDate" id="endDate" required class="form-control mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
      </div>
      <button type="submit" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Update</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
const API_URL = "https://localhost:7019/";

export default {
  name: 'EditTrainingActivity',
  data() {
    return {
      activity: {
        name: '',
        description: '',
        startDate: '',
        endDate: '',
      },
    };
  },
  created() {
    this.fetchActivity();
  },
  methods: {
    async fetchActivity() {
      const id = this.$route.params.id;
      try {
        const response = await axios.get(`${API_URL}api/TrainingActivities/${id}`);
        this.activity = response.data;
      } catch (error) {
        console.error('Error fetching activity:', error);
      }
    },
    async updateActivity() {
      const id = this.$route.params.id;
      try {
        await axios.put(`${API_URL}api/TrainingActivities/${id}`, this.activity);
        this.$router.push(`/training-activities/${id}`);
      } catch (error) {
        console.error('Error updating activity:', error);
      }
    },
  },
};
</script>
