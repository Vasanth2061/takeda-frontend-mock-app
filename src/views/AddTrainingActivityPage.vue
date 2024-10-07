<template>
    <div class="container mx-auto p-4">
      <h1 class="text-2xl font-bold mb-4">Add Training Activity</h1>
      <form @submit.prevent="addTrainingActivity">
        <div class="mb-4">
          <label for="name" class="block text-gray-700 font-bold mb-2">Name</label>
          <input type="text" v-model="name" id="name" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
        </div>
        <div class="mb-4">
          <label for="description" class="block text-gray-700 font-bold mb-2">Description</label>
          <textarea v-model="description" id="description" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required></textarea>
        </div>
        <div class="mb-4">
          <label for="startDate" class="block text-gray-700 font-bold mb-2">Start Date</label>
          <input type="date" v-model="startDate" id="startDate" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
        </div>
        <div class="mb-4">
          <label for="endDate" class="block text-gray-700 font-bold mb-2">End Date</label>
          <input type="date" v-model="endDate" id="endDate" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
        </div>
        <div class="actions flex gap-4 mt-4">
          <button type="submit" class="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            <i class="fas fa-plus mr-2"></i>Add Activity
          </button>
          <router-link to="/training-activities" class="btn bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
            Cancel
          </router-link>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  const API_URL = "https://localhost:7019/";
  
  export default {
    name: 'AddTrainingActivityPage',
    data() {
      return {
        name: '',
        description: '',
        startDate: '',
        endDate: '',
      };
    },
    methods: {
      async addTrainingActivity() {
        try {
          const newActivity = {
            name: this.name,
            description: this.description,
            startDate: this.startDate,
            endDate: this.endDate,
          };
          await axios.post(`${API_URL}api/TrainingActivities`, newActivity);
          this.$router.push('/training-activities');
        } catch (error) {
          console.error('Error adding training activity:', error);
        }
      },
    },
  };
  </script>