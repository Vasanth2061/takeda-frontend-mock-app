<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Training Activity Details</h1>
    <div v-if="activity" class="space-y-4">
      <h2 class="text-xl font-semibold">{{ activity.name }}</h2>
      <p class="text-gray-700">{{ activity.description }}</p>
      <p class="text-gray-600">Start Date: {{ activity.startDate }}</p>
      <p class="text-gray-600">End Date: {{ activity.endDate }}</p>
      <div class="actions flex gap-4 mt-4">
        <button @click="deleteActivity" class="btn bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete</button>
        <button @click="editActivity" class="btn bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">Edit</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
const API_URL = "https://localhost:7019/";

export default {
  name: 'TrainingActivityDetail',
  data() {
    return {
      activity: null,
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
    async deleteActivity() {
      const id = this.$route.params.id;
      try {
        await axios.delete(`${API_URL}api/TrainingActivities/${id}`);
        this.$router.push('/training-activities');
      } catch (error) {
        console.error('Error deleting activity:', error);
      }
    },
    editActivity() {
      this.$router.push(`/training-activities/edit/${this.$route.params.id}`);
    }
  },
};
</script>

<style scoped>
/* Add your styles here */
</style>