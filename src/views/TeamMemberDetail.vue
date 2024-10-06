<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Team Member Details</h1>
    <div v-if="teamMember" class="space-y-4">
      <h2 class="text-xl font-semibold">{{ teamMember.colleagueName }}</h2>
      <p class="text-gray-700">{{ teamMember.description }}</p>
      <img :src="`https://localhost:7019/${teamMember.imageURL}`" alt="Team Member Image" v-if="teamMember.imageURL" class="team-member-image rounded-md shadow-md">
    </div>
  </div>
</template>

<script>
import axios from 'axios';
const API_URL = "https://localhost:7019/";

export default {
  name: 'TeamMemberDetail',
  data() {
    return {
      teamMember: null,
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
  },
};
</script>

<style scoped>
.team-member-image {
  width: 100%;
  max-width: 400px; /* Maximum width */
  height: 300px; /* Fixed height */
  object-fit: cover; /* Maintain aspect ratio and cover the area */
}
</style>