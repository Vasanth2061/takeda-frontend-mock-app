<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Team Members</h1>
    <router-link to="/team-members/add" class="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4 inline-block">
      <i class="fas fa-plus mr-2"></i>Add Team Member
    </router-link>
    <div class="carousel-container">
      <div class="carousel">
        <div v-for="member in teamMembers" :key="member.id" class="card bg-white shadow-md rounded-lg p-4 mb-4">
          <h2 class="text-xl font-semibold">{{ member.colleagueName }}</h2>
          <p class="text-gray-700">{{ member.description }}</p>
          <img :src="`https://localhost:7019/${member.imageURL}`" alt="Team Member Image" v-if="member.imageURL" class="team-member-image rounded-md shadow-md mt-2 mb-4">
          <div class="actions flex gap-4 mt-4 justify-center">
            <router-link :to="`/team-members/${member.id}`" class="btn btn-view">
              <i class="fas fa-eye mr-2"></i>
            </router-link>
            <router-link :to="`/team-members/edit/${member.id}`" class="btn btn-edit">
              <i class="fas fa-pencil-alt mr-2"></i>
            </router-link>
            <button @click="deleteTeamMember(member.id)" class="btn btn-delete">
              <i class="fas fa-trash mr-2"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

const API_URL = "https://localhost:7019/";

export default {
  name: 'TeamMembersList',
  data() {
    return {
      teamMembers: [],
    };
  },
  created() {
    this.fetchTeamMembers();
  },
  methods: {
    async fetchTeamMembers() {
      try {
        const response = await axios.get(`${API_URL}api/TeamMembers/GetAll`);
        this.teamMembers = response.data;
      } catch (error) {
        console.error('Error fetching team members:', error);
      }
    },
    async deleteTeamMember(id) {
      try {
        await axios.delete(`${API_URL}api/TeamMembers/${id}`);
        this.fetchTeamMembers(); // Refresh the list after deletion
      } catch (error) {
        console.error('Error deleting team member:', error);
      }
    },
  },
};
</script>

<style scoped>
.carousel-container {
    overflow-x: auto; /* Enable horizontal scrolling */
    white-space: nowrap; /* Prevent line breaks */
    padding-bottom: 1rem;
}

.carousel {
    display: flex;
    gap: 1rem;
    width: max-content; /* Ensure the width is based on content */
}

.card {
    display: inline-block;
    width: 400px; /* Adjust width as needed */
    border: 1px solid #ccc;
    padding: 16px;
    margin: 16px;
    border-radius: 8px;
    word-wrap: break-word; /* Ensure long words break and wrap */
    word-break: break-all; /* Break long words */
    overflow: hidden; /* Hide overflow content */
}

.team-member-image {
    width: 100%;
    height: 200px; /* Fixed height */
    object-fit: contain; /* Ensure the full image is visible without cropping */
}

.actions {
    display: flex;
    gap: 8px;
    justify-content: center; /* Center the buttons */
}

.btn {
    padding: 8px 16px;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    text-decoration: none;
}

.btn-view {
    background-color: #28a745; /* Green */
}

.btn-view:hover {
    background-color: #218838;
}

.btn-edit {
    background-color: #ffc107; /* Yellow */
}

.btn-edit:hover {
    background-color: #e0a800;
}

.btn-delete {
    background-color: #dc3545; /* Red */
}

.btn-delete:hover {
    background-color: #c82333;
}

</style>