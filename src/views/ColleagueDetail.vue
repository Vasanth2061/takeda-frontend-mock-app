<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Colleague Details</h1>
    <div v-if="colleague" class="space-y-4">
      <h2 class="text-xl font-semibold">{{ colleague.colleagueName }}</h2>
      <p class="text-gray-700">{{ colleague.description }}</p>
      <img :src="`https://localhost:7019/${colleague.imageURL}`" alt="Colleague Image" v-if="colleague.imageURL" class="colleague-image rounded-md shadow-md">
    </div>
  </div>
</template>

<script>
import axios from 'axios';
const API_URL = "https://localhost:7019/";

export default {
  name: 'ColleagueDetail',
  data() {
    return {
      colleague: null,
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
  },
};
</script>

<style scoped>
.colleague-image {
  width: 100%; /* Full width */
  max-width: 400px; /* Maximum width */
  height: auto; /* Adjust height to maintain aspect ratio */
  object-fit: contain; /* Ensure the full image is visible without cropping */
}
</style>