<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Training Activities</h1>
    <router-link to="/training-activities/add" class="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4 inline-block">
      <i class="fas fa-plus mr-2"></i>Add Training Activity
    </router-link>
    <div class="card bg-white shadow-md rounded-lg p-4 mb-4" v-for="activity in activities" :key="activity.id">
      <h2 class="text-xl font-semibold">{{ activity.name }}</h2>
      <p class="text-gray-700">{{ activity.description }}</p>
      <p class="text-gray-600">Start Date: {{ activity.startDate }}</p>
      <p class="text-gray-600">End Date: {{ activity.endDate }}</p>
      <div class="actions flex gap-4 mt-4">
        <router-link :to="`/training-activities/${activity.id}`" class="btn bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          <i class="fas fa-eye mr-2"></i>
        </router-link>
        <router-link :to="`/training-activities/edit/${activity.id}`" class="btn bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
          <i class="fas fa-pencil-alt mr-2"></i>
        </router-link>
        <button @click="deleteActivity(activity.id)" class="btn bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          <i class="fas fa-trash mr-2"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
const API_URL = "https://localhost:7019/";

export default {
  name: 'TrainingActivitiesPage',
  data() {
    return {
      activities: [],
    };
  },
  created() {
    this.fetchTrainingActivities();
  },
  methods: {
    async fetchTrainingActivities() {
      try {
        const response = await axios.get(`${API_URL}api/TrainingActivities/GetAll`);
        this.activities = response.data;
      } catch (error) {
        console.error('Error fetching training activities:', error);
      }
    },
    async deleteActivity(id) {
      try {
        await axios.delete(`${API_URL}api/TrainingActivities/${id}`);
        this.fetchTrainingActivities(); // Refresh the list after deletion
      } catch (error) {
        console.error('Error deleting activity:', error);
      }
    },
  },
};
</script>

<style scoped>
/* Tailwind CSS classes are used directly in the template */
</style>